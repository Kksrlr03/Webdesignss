const ids = [
  '55fb6151-9af8-40ad-b942-77c1321fd3f5',
  'b9ad8c2e-def3-436b-849c-b907fbb1fb92',
  '339aa29f-428e-497a-90e7-086d3764980c',
  '851869fe-85c5-48a6-9a2d-e595f6363148'
];
const editorBase = new URL('.', location.href);
const sceneUrl = new URL('scenes/a2be68de-75b9-45eb-b89f-cac9fd6cde5c.json', editorBase);
const $ = selector => document.querySelector(selector);
const frame = $('#site-preview');
const dragSurface = $('#drag-surface');
const status = $('#status');
const select = $('#flower-select');
const controls = {
  size: $('#size-range'), x: $('#x-range'), y: $('#y-range'), z: $('#z-range'),
  rotX: $('#rot-x-range'), rotY: $('#rot-y-range'), rotZ: $('#rot-z-range')
};
const outputs = {
  size: $('#size-value'), x: $('#x-value'), y: $('#y-value'), z: $('#z-value'),
  rotX: $('#rot-x-value'), rotY: $('#rot-y-value'), rotZ: $('#rot-z-value')
};
const savedBase = {};
const working = {};
let activeObject = null;
let dragEnabled = false;
let dragging = false;
let lastPointer = null;
let draggingStartOutside = false;
let attachAttempts = 0;
let initialized = false;
let activeApi = null;

function readVector(vector) { return { x: vector.x, y: vector.y, z: vector.z }; }
function copyTransform(transform) {
  return {
    position: { ...transform.position }, rotation: { ...transform.rotation }, scale: { ...transform.scale }
  };
}
function setStatus(message, error = false) {
  status.textContent = message;
  status.classList.toggle('error', error);
}
function updateOutput() {
  outputs.size.value = `${Math.round(Number(controls.size.value))}%`;
  for (const axis of ['x', 'y', 'z']) outputs[axis].value = Number(controls[axis].value).toFixed(2);
  for (const axis of ['rotX', 'rotY', 'rotZ']) outputs[axis].value = `${Math.round(Number(controls[axis].value))}°`;
}
function applyWorkingToObject(id) {
  const object = frame.contentWindow?.__WEB_DESIGNS_SCENE_API?.getObject(id);
  if (!object || !working[id]) return false;
  const transform = working[id];
  object.position.set(transform.position.x, transform.position.y, transform.position.z);
  object.rotation.set(transform.rotation.x, transform.rotation.y, transform.rotation.z);
  object.scale.set(transform.scale.x, transform.scale.y, transform.scale.z);
  object.updateMatrix?.();
  object.updateMatrixWorld?.(true);
  activeObject = object;
  return true;
}
function loadControls(id) {
  const transform = working[id];
  controls.x.value = transform.position.x;
  controls.y.value = transform.position.y;
  controls.z.value = transform.position.z;
  controls.rotX.value = Math.round(transform.rotation.x * 180 / Math.PI);
  controls.rotY.value = Math.round(transform.rotation.y * 180 / Math.PI);
  controls.rotZ.value = Math.round(transform.rotation.z * 180 / Math.PI);
  const base = savedBase[id];
  controls.x.min = base.position.x - 2.2;
  controls.x.max = base.position.x + 2.2;
  controls.y.min = base.position.y - 2.2;
  controls.y.max = base.position.y + 2.2;
  controls.z.min = base.position.z - 0.9;
  controls.z.max = base.position.z + 0.9;
  controls.size.value = Math.round(transform.scale.x / base.scale.x * 100);
  updateOutput();
  applyWorkingToObject(id);
}
function setActiveFromControls() {
  if (!activeObject) return;
  const transform = working[select.value];
  transform.position.x = Number(controls.x.value);
  transform.position.y = Number(controls.y.value);
  transform.position.z = Number(controls.z.value);
  transform.rotation.x = Number(controls.rotX.value) * Math.PI / 180;
  transform.rotation.y = Number(controls.rotY.value) * Math.PI / 180;
  transform.rotation.z = Number(controls.rotZ.value) * Math.PI / 180;
  const factor = Number(controls.size.value) / 100;
  for (const axis of ['x', 'y', 'z']) transform.scale[axis] = savedBase[select.value].scale[axis] * factor;
  applyWorkingToObject(select.value);
  updateOutput();
}
function screenPoint() {
  if (!activeObject || !activeApi?.getObjectPositionOnScreen) return null;
  activeObject.updateMatrix?.();
  activeObject.updateMatrixWorld?.(true);
  const point = activeApi.getObjectPositionOnScreen(activeObject);
  return { x: point.x, y: point.y, z: point.z };
}
function applyScreenDelta(dx, dy, rect, pointerX, pointerY) {
  if (!activeObject || !activeApi) return false;
  const transform = working[select.value];
  const original = { ...transform.position };
  let origin = screenPoint();
  if (!origin) return false;
  if (origin.z < -1 || origin.z > 1) {
    original.z = savedBase[select.value].position.z;
    transform.position.z = original.z;
    activeObject.position.z = original.z;
    origin = screenPoint();
    if (!origin) return false;
  }
  const isOutside = Math.abs(origin.x) > 1 || Math.abs(origin.y) > 1 || origin.z < -1 || origin.z > 1;
  const target = draggingStartOutside || isOutside
    ? { x: 2 * (pointerX - rect.left) / rect.width - 1, y: 1 - 2 * (pointerY - rect.top) / rect.height }
    : { x: origin.x + 2 * dx / rect.width, y: origin.y - 2 * dy / rect.height };
  target.x = Math.max(-0.82, Math.min(0.82, target.x));
  target.y = Math.max(-0.82, Math.min(0.82, target.y));

  // Use the runtime's camera projection to translate pointer movement into the
  // correct local X/Y movement, even when the camera is angled.
  const epsilon = 0.01;
  activeObject.position.set(original.x + epsilon, original.y, original.z);
  const pointX = screenPoint();
  activeObject.position.set(original.x, original.y + epsilon, original.z);
  const pointY = screenPoint();
  activeObject.position.set(original.x, original.y, original.z);
  const a = (pointX.x - origin.x) / epsilon;
  const b = (pointY.x - origin.x) / epsilon;
  const c = (pointX.y - origin.y) / epsilon;
  const d = (pointY.y - origin.y) / epsilon;
  const determinant = a * d - b * c;
  if (!Number.isFinite(determinant) || Math.abs(determinant) < 1e-5) return false;
  const screenDx = target.x - origin.x;
  const screenDy = target.y - origin.y;
  const next = {
    x: original.x + (screenDx * d - b * screenDy) / determinant,
    y: original.y + (a * screenDy - c * screenDx) / determinant,
    z: original.z
  };
  const base = savedBase[select.value].position;
  next.x = Math.max(base.x - 2.2, Math.min(base.x + 2.2, next.x));
  next.y = Math.max(base.y - 2.2, Math.min(base.y + 2.2, next.y));
  transform.position = next;
  draggingStartOutside = false;
  controls.x.value = next.x;
  controls.y.value = next.y;
  applyWorkingToObject(select.value);
  updateOutput();
  return true;
}
function endDrag() {
  dragging = false;
  lastPointer = null;
  draggingStartOutside = false;
  dragSurface.classList.remove('is-dragging');
}
function waitForScene() {
  const api = frame.contentWindow?.__WEB_DESIGNS_SCENE_API;
  if (!api || !api.getObject(ids[0])) {
    if (++attachAttempts > 120) {
      setStatus('The live preview could not start. Reload this page after the main site is running.', true);
      return;
    }
    setTimeout(waitForScene, 350);
    return;
  }
  if (initialized) return;
  initialized = true;
  activeApi = api;
  fetch(sceneUrl, { cache: 'no-store' }).then(response => response.json()).then(scene => {
    for (const id of ids) {
      const config = scene.engineState.pwObjects[id];
      savedBase[id] = {
        position: { ...config.position }, rotation: { ...config.rotation }, scale: { ...config.scale }
      };
      working[id] = copyTransform(savedBase[id]);
    }
    loadControls(select.value);
    setStatus('Ready. Adjust the selected flower, then save when it looks right.');
  }).catch(() => { initialized = false; setStatus('Could not read the site scene settings.', true); });
}

select.addEventListener('change', () => {
  endDrag();
  if (dragEnabled) {
    dragEnabled = false;
    $('#drag-toggle').setAttribute('aria-pressed', 'false');
    dragSurface.classList.remove('is-active');
  }
  loadControls(select.value);
  setStatus('Selected flower updated. Scroll the preview to its section, then turn on drag mode.');
});
for (const control of Object.values(controls)) control.addEventListener('input', setActiveFromControls);
$('#drag-toggle').addEventListener('click', event => {
  dragEnabled = !dragEnabled;
  event.currentTarget.setAttribute('aria-pressed', String(dragEnabled));
  dragSurface.classList.toggle('is-active', dragEnabled);
  dragSurface.setAttribute('aria-hidden', String(!dragEnabled));
  $('#drag-hint').textContent = dragEnabled
    ? 'Drag anywhere in the preview to move the selected flower. If it is offscreen, the first drag brings it back into view. Turn drag mode off to scroll the preview.'
    : 'Turn on drag mode to move the selected flower with your mouse or finger. The flower stays inside the preview while you drag.';
});
dragSurface.addEventListener('pointerdown', event => {
  if (!dragEnabled) return;
  dragging = true;
  lastPointer = { x: event.clientX, y: event.clientY };
  const startPoint = screenPoint();
  draggingStartOutside = !startPoint || Math.abs(startPoint.x) > 1 || Math.abs(startPoint.y) > 1 || startPoint.z < -1 || startPoint.z > 1;
  dragSurface.setPointerCapture(event.pointerId);
  dragSurface.classList.add('is-dragging');
  event.preventDefault();
});
dragSurface.addEventListener('pointermove', event => {
  if (!dragging || !lastPointer) return;
  const start = lastPointer;
  lastPointer = { x: event.clientX, y: event.clientY };
  applyScreenDelta(event.clientX - start.x, event.clientY - start.y, dragSurface.getBoundingClientRect(), event.clientX, event.clientY);
  event.preventDefault();
});
dragSurface.addEventListener('pointerup', endDrag);
dragSurface.addEventListener('pointercancel', endDrag);
dragSurface.addEventListener('lostpointercapture', endDrag);
// Drag mode covers the iframe to capture pointer movement. Forward wheel input so
// the preview remains scrollable while dragging is enabled, including over video.
dragSurface.addEventListener('wheel', event => {
  const win = frame.contentWindow;
  if (!win) return;
  event.preventDefault();
  win.scrollBy({ top: event.deltaY, left: event.deltaX, behavior: 'auto' });
}, { passive: false });
$('#reset-button').addEventListener('click', () => {
  const id = select.value;
  working[id] = copyTransform(savedBase[id]);
  loadControls(id);
  setStatus('This flower is back at its saved starting position.');
});
$('#save-button').addEventListener('click', async event => {
  const button = event.currentTarget;
  button.disabled = true;
  setStatus('Saving flower placements…');
  try {
    const transforms = Object.fromEntries(ids.map(id => [id, { ...copyTransform(working[id]), base: copyTransform(savedBase[id]) }]));
    const response = await fetch(new URL('__save-flower-transforms', editorBase), {
      method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ transforms })
    });
    if (!response.ok) throw new Error('Save service unavailable');
    for (const id of ids) savedBase[id] = copyTransform(working[id]);
    setStatus('Saved. The placement is now stored in the site files for your next GitHub push.');
  } catch {
    setStatus('Saving needs the project server. Start it with npm start, then open this editor at localhost:3000/flower-editor.html.', true);
  } finally {
    button.disabled = false;
  }
});

frame.addEventListener('load', waitForScene);
if (frame.contentDocument?.readyState === 'complete') waitForScene();

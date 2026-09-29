/* The scene's authored scroll tracks move each original Bird object unchanged.
   These local offsets add a live chase without replacing that flight path. */
(() => {
  const ids = ['0c4550c1-1943-4bfe-895f-21da7268311d'];
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const pointer = {x: 0, y: 0};
  let lastInput = 0, burst = 0;
  addEventListener('pointermove', event => {
    pointer.x = event.clientX / innerWidth * 2 - 1;
    pointer.y = 1 - event.clientY / innerHeight * 2;
    lastInput = performance.now();
  }, {passive: true});
  addEventListener('pointerdown', () => { burst = reduced.matches ? 0 : 1; }, {passive: true});
  addEventListener('blur', () => {pointer.x = pointer.y = 0;});
  const attached = new WeakSet(), pairs = [];
  // Keep the original albedo, normal and roughness maps. Correct the material
  // response so feathers and wings read as organic surfaces in the forest HDR.
  function softenPbrHighlights(object) {
    object.traverse?.(node => {
      if (!node.isMesh || !node.material) return;
      const materials = Array.isArray(node.material) ? node.material : [node.material];
      for (const material of materials) {
        if (!material || !('roughness' in material)) continue;
        material.metalness = Math.min(material.metalness ?? 0, .06);
        material.roughness = Math.max(material.roughness ?? .64, .64);
        if ('envMapIntensity' in material) material.envMapIntensity = .78;
        material.needsUpdate = true;
      }
    });
  }
  function attach(api) {
    for (const id of ids) {
      const object = api.getObject(id);
      const root = object?.getObjectByName('Azure_Chase');
      if (!root || attached.has(root)) continue;
      const bird = root.children.find(n => /AZURE/i.test(n.name));
      const butterfly = root.children.find(n => /Butterfly/i.test(n.name));
      if (!bird || !butterfly) continue;
      softenPbrHighlights(bird);
      softenPbrHighlights(butterfly);
      function wrap(rig, name) {
        const group = new root.constructor();
        group.name = name;
        root.add(group); group.add(rig);
        return group;
      }
      pairs.push({root, bird: wrap(bird, 'Azure pursuit'), butterfly: wrap(butterfly, 'Butterfly lead'), beak: bird.getObjectByName('beak'), body: butterfly.getObjectByName('butterfly_body'), birdOffset: root.position.clone().set(0,0,0), flyOffset: root.position.clone().set(0,0,0), trail: [], phase: pairs.length * 1.7, lag: root.position.clone(), world: root.position.clone()});
      attached.add(root);
    }
  }
  let last = performance.now(), time = 0, api;
  function update() {
    const now = performance.now(), dt = Math.min((now-last)/1000, .05); last = now;
    if (document.hidden) return;
    attach(api);
    for (const p of pairs) {
      p.root.scale.setScalar(innerWidth < 768 ? .040 : .062);
      p.root.position.set(0, .032, 0);
      // Ease the sole chase into the centre as the closing section arrives.
      const progress = scrollY / Math.max(1, document.documentElement.scrollHeight-innerHeight);
      const enter = Math.max(0, Math.min(1, (progress-.86)/.10));
      const blend = enter*enter*(3-2*enter);
      const camera = api.getActiveCamera?.();
      if (blend && camera) {
        camera.updateWorldMatrix(true, false);
        p.root.updateWorldMatrix(true, false);
        const world = p.root.getWorldPosition(p.root.position.clone());
        const screen = world.clone().project(camera);
        screen.x += (-.10-screen.x)*blend;
        screen.y += (.42-screen.y)*blend;
        const centred = screen.unproject(camera);
        p.root.parent.worldToLocal(centred);
        if ([centred.x,centred.y,centred.z].every(Number.isFinite)) p.root.position.copy(centred);
      }
    }
    if (reduced.matches) { for (const p of pairs) {p.bird.position.set(0,0,0);p.butterfly.position.set(0,0,0);p.birdOffset.set(0,0,0);p.flyOffset.set(0,0,0);p.trail.length=0;} return; }
    time += dt * .72; burst *= Math.exp(-dt * 1.7);
    const active = Math.exp(-Math.max(0,now-lastInput-1800)/1200);
    for (const p of pairs) {
      p.bird.position.sub(p.birdOffset);
      p.butterfly.position.sub(p.flyOffset);
      p.birdOffset.set(0,0,0); p.flyOffset.set(0,0,0);
      const t = time + p.phase;
      const lead = p.butterfly.position;
      // Independent, unequal cycles: the butterfly explores instead of moving
      // as a fixed offset. Forward separation expands and contracts throughout.
      const x = pointer.x * .30 * active + Math.sin(t*.83)*.30 + Math.sin(t*.37)*.12;
      const y = pointer.y * .24 * active + Math.sin(t*1.23+.8)*.24 + burst*.18;
      const escape = Math.pow(Math.max(0, Math.sin(t*.86)), 4);
      const z = Math.sin(t*.91+1.2)*.18 + escape*.25 + burst*.20;
      const ease = 1-Math.exp(-dt*3.2);
      lead.x += (x-lead.x)*ease;
      lead.y += (y-lead.y)*ease;
      lead.z += (z-lead.z)*ease;
      const turnEase = 1-Math.exp(-dt*2.6);
      p.butterfly.rotation.x += (Math.sin(t*1.23)*.08-p.butterfly.rotation.x)*turnEase;
      p.butterfly.rotation.y += (Math.sin(t*.83)*.14-p.butterfly.rotation.y)*turnEase;
      p.butterfly.rotation.z += (Math.cos(t*1.23)*.16-p.butterfly.rotation.z)*turnEase;

      // Keep a short world-space path history so the bird also trails turns
      // during scrolling. Bound the lag when the user jumps between sections.
      p.root.updateWorldMatrix(true, false);
      p.root.getWorldPosition(p.world);
      p.trail.push({at: time, point: p.world.clone(), x: lead.x, y: lead.y, z: lead.z});
      const delay = .38 + (Math.sin(t*.53)+1)*.12;
      while (p.trail.length > 2 && p.trail[1].at < time-delay) p.trail.shift();
      const past = p.trail[0];
      p.lag.copy(past.point);
      p.root.worldToLocal(p.lag).clampLength(0, .48);
      const follow = 1-Math.exp(-dt*2.0);
      // Follow the butterfly's delayed trajectory with a safe pursuit gap.
      // These offsets match the supplied rig's authored forward direction.
      const gap = 1.55;
      const targetX = past.x + .70 - .588*gap + p.lag.x;
      const targetY = past.y + .08 + p.lag.y;
      const targetZ = past.z + .95 - .809*gap + p.lag.z;
      p.bird.position.x += (targetX-p.bird.position.x)*follow;
      p.bird.position.y += (targetY-p.bird.position.y)*follow;
      p.bird.position.z += (targetZ-p.bird.position.z)*follow;
      // Presentation constraint: retain a readable, reference-sized gap in
      // screen space even when the authored camera turns or changes depth.
      // Offsets are removed next frame, so they never feed back into pursuit.
      const camera = api.getActiveCamera?.();
      if (camera && p.beak && p.body) {
        camera.updateWorldMatrix(true,false);
        p.root.updateWorldMatrix(true,true);
        const head = p.beak.getWorldPosition(p.root.position.clone());
        const fly = p.body.getWorldPosition(p.root.position.clone());
        const hs = head.clone().project(camera), fs = fly.clone().project(camera);
        const px = (fs.x-hs.x)*innerWidth/2, py = (fs.y-hs.y)*innerHeight/2;
        const distance = Math.hypot(px,py);
        const desired = Math.min(300, innerWidth*.23);
        if (distance > 1 && Number.isFinite(distance)) {
          const correction = (desired-distance)/distance;
          const sx = (fs.x-hs.x)*correction, sy = (fs.y-hs.y)*correction;
          const shiftedHead = hs.clone(); shiftedHead.x -= sx*.5; shiftedHead.y -= sy*.5;
          const shiftedFly = fs.clone(); shiftedFly.x += sx*.5; shiftedFly.y += sy*.5;
          p.birdOffset.copy(p.root.worldToLocal(shiftedHead.unproject(camera))).sub(p.root.worldToLocal(head));
          p.flyOffset.copy(p.root.worldToLocal(shiftedFly.unproject(camera))).sub(p.root.worldToLocal(fly));
          p.bird.position.add(p.birdOffset); p.butterfly.position.add(p.flyOffset);
        }
      }
      const dx = .70 + lead.x - p.bird.position.x;
      const dy = .28 + lead.y - p.bird.position.y;
      const dz = .95 + lead.z - p.bird.position.z;
      const yaw = Math.max(-.5, Math.min(.5, Math.atan2(dx,dz)-Math.PI/5));
      const pitch = -Math.atan2(dy,Math.hypot(dx,dz))*.65;
      p.bird.rotation.y += (yaw-p.bird.rotation.y)*follow;
      p.bird.rotation.x += (pitch-p.bird.rotation.x)*follow;
      p.bird.rotation.z += (-yaw*.4-p.bird.rotation.z)*follow;


    }
  }
  function init() {
    api = window.__WEB_DESIGNS_SCENE_API;
    if (!api?.addOnRenderCallback) {setTimeout(init,100);return;}
    api.addOnRenderCallback(update);
  }
  init();
})();


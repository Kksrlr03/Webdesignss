/* Editable text: content.json. Images, video, project media/links, and contact: media.json. */
(() => {
  const script = document.currentScript;
  const base = new URL('../', script.src);
  const asset = value => new URL(value, base).href;
  let copy = {}, media = {};
  let projectByObjectId = new Map();
  let projectPointerDown = null;
  let sceneListenerDisposers = [];

  function styleButtons() {
    document.querySelectorAll('[data-has-states], [role="link"]').forEach(el => {
      if (el.parentElement.closest('.premium-primary,.premium-secondary')) return;
      const text = el.textContent.trim();
      if (text === copy['explore-work'] && el.offsetHeight >= 35) el.classList.add('premium-primary');
      if (text === copy['let-s-talk'] && el.offsetHeight >= 35) el.classList.add('premium-secondary');
    });
  }

  function applyContent() {
    document.querySelectorAll('[data-copy]').forEach(el => {
      const value = copy[el.dataset.copy];
      if (typeof value === 'string' && el.textContent !== value) el.textContent = value;
    });
    document.querySelectorAll('.brand-lockup img,#ixe4zkj').forEach(el => {
      if (media.logo) el.src = asset(media.logo);
      el.classList.add('brand-image');
    });
    document.querySelectorAll('img[data-media="projectPoster"]').forEach(img => {
      const imagePath = media.imageSlots?.[img.dataset.imageSlot] || media.projectPoster;
      if (imagePath) img.src = asset(imagePath);
    });
    document.querySelectorAll('.brand-approach-art').forEach((img, index) => {
      const imagePath = media.approachSlots?.[index];
      if (imagePath) img.src = asset(imagePath);
    });
    document.querySelectorAll('[data-media="showreel"]').forEach(video => {
      if (media.projectPoster) video.poster = asset(media.projectPoster);
      if (media.showreel && !video.hasAttribute('src')) {
        video.hidden = false;
        video.removeAttribute('aria-hidden');
        video.src = asset(media.showreel);
        video.controls = true;
        const poster = video.parentElement.querySelector('.video-poster');
        if (poster) poster.hidden = true;
        video.addEventListener('mouseenter', () => video.play().catch(() => {}));
        video.addEventListener('mouseleave', () => video.pause());
      }
    });
    document.querySelectorAll('[data-contact]').forEach(el => {
      const kind = el.dataset.contact, value = media.contacts?.[kind];
      if (!value) return;
      el.href = kind === 'email' ? 'mailto:' + value : kind === 'phone' ? 'https://wa.me/' + (value.replace(/\D/g, '').length === 10 ? '91' : '') + value.replace(/\D/g, '') : 'https://www.instagram.com/' + value.replace(/^@/, '') + '/';
      if (kind !== 'email') { el.target = '_blank'; el.rel = 'noopener noreferrer'; }
      el.querySelector('strong').textContent = kind === 'phone' ? 'Chat on WhatsApp' : kind === 'instagram' ? '@' + value.replace(/^@/, '') : value;
    });
    styleButtons();
  }

  function projectNumber(project) {
    return String(Number(project.id));
  }

  function projectConfig(number) {
    return (media.projects || []).find(project => projectNumber(project) === String(Number(number)));
  }

  function getPwObject(object) {
    let current = object;
    while (current) {
      if (current.userData && current.userData.isPwObject) return current;
      current = current.parent;
    }
    return null;
  }

  function buildProjectObjectMap(sceneApi) {
    const projects = Array.isArray(media.projects) ? media.projects : [];
    projectByObjectId = new Map();

    // The generated map is stable for the current 3D scene and is intentionally
    // separate from media.json so users only edit media paths and links.
    fetch(asset('project-scene-map.json'))
      .then(response => response.ok ? response.json() : {})
      .then(objectMap => {
        for (const project of projects) {
          const objectId = objectMap[projectNumber(project)];
          if (objectId) projectByObjectId.set(objectId, project);
        }
        attachSceneProjectInteractions(sceneApi);
      })
      .catch(() => attachSceneProjectInteractions(sceneApi));
  }

  function linkedProjectForObject(object) {
    const pwObject = getPwObject(object);
    if (!pwObject) return null;
    const project = projectByObjectId.get(pwObject.uuid);
    if (!project || !project.link) return null;
    return project;
  }

  function navigateProject(project) {
    if (!project || !project.link) return;
    const url = asset(project.link);
    const target = project.target === '_self' ? '_self' : '_blank';
    if (target === '_self') {
      window.location.assign(url);
      return;
    }
    window.open(url, '_blank', 'noopener,noreferrer');
  }

  function pointerPosition(event) {
    const mouseEvent = event?.mouseEvent;
    if (!mouseEvent) return null;
    return { x: mouseEvent.clientX, y: mouseEvent.clientY };
  }

  function sameProject(a, b) {
    return a && b && a.id === b.id;
  }

  function attachSceneProjectInteractions(sceneApi) {
    if (!sceneApi?.listenTo) return;
    sceneListenerDisposers.forEach(dispose => dispose());
    sceneListenerDisposers = [];

    sceneListenerDisposers.push(sceneApi.listenTo('MOUSE_DOWN', event => {
      const project = linkedProjectForObject(event?.data?.object);
      if (!project) {
        projectPointerDown = null;
        return;
      }
      projectPointerDown = {
        project,
        position: pointerPosition(event)
      };
    }));

    sceneListenerDisposers.push(sceneApi.listenTo('MOUSE_UP', event => {
      const project = linkedProjectForObject(event?.data?.object);
      const start = projectPointerDown;
      projectPointerDown = null;
      if (!sameProject(start?.project, project)) return;

      const endPosition = pointerPosition(event);
      const startPosition = start?.position;
      const distance = startPosition && endPosition
        ? Math.hypot(endPosition.x - startPosition.x, endPosition.y - startPosition.y)
        : 0;

      if (distance <= 10) navigateProject(project);
    }));

    sceneListenerDisposers.push(sceneApi.listenTo('MOUSE_MOVE', event => {
      const canvas = sceneApi.renderer?.domElement;
      if (!canvas) return;
      const project = linkedProjectForObject(event?.data?.object);
      canvas.style.cursor = project ? 'pointer' : '';
    }));
  }

  function waitForSceneApi() {
    const start = performance.now();
    const poll = () => {
      const api = window.__WEB_DESIGNS_SCENE_API;
      if (api?.listenTo && api?.renderer) {
        applyBirdTheme(api);
        buildProjectObjectMap(api);
        return;
      }
      if (performance.now() - start < 15000) {
        window.setTimeout(poll, 100);
      }
    };
    poll();
  }

  // Re-tone the existing plumage texture without changing its feather detail or alpha.
  // Eyes and beak retain their separate dark materials for clear contrast.
  function applyBirdTheme(api) {
    const plumageIds = [
      '45c49f2f-2e4f-4d63-9415-6de65c4d142b', 'dd2eedef-3014-43c8-b034-713f0635c774',
      'cbf8f798-0e69-4350-8ab8-cdadb5c55927', 'a8145746-7ddd-48d5-a564-2fe0ac9a5863',
      '52539c68-31da-466e-bcdc-9b38867b8395', '3817b0d9-3f92-4e54-aae8-88d88603014f'
    ];
    for (const id of plumageIds) {
      const material = api.getMaterial(id);
      if (!material || material.userData.daylightPlumage) continue;
      material.userData.daylightPlumage = true;
      const originalCompile = material.onBeforeCompile;
      material.onBeforeCompile = function (shader, renderer) {
        originalCompile.call(this, shader, renderer);
        shader.fragmentShader = shader.fragmentShader.replace('#include <map_fragment>', `
          #include <map_fragment>
          float featherLight = dot(diffuseColor.rgb, vec3(0.2126, 0.7152, 0.0722));
          float featherTone = pow(clamp(featherLight, 0.0, 1.0), 0.48);
            float featherChroma = max(diffuseColor.r, max(diffuseColor.g, diffuseColor.b))
              - min(diffuseColor.r, min(diffuseColor.g, diffuseColor.b));
            float breast = smoothstep(0.18, 0.52, featherLight)
              * (1.0 - smoothstep(0.08, 0.28, featherChroma));
            vec3 bluePlumage = mix(vec3(0.003, 0.025, 0.065), vec3(0.015, 0.34, 0.57), featherTone);
            vec3 orangeBreast = mix(vec3(0.30, 0.045, 0.004), vec3(0.95, 0.23, 0.025), featherTone);
            vec3 warmPlumage = mix(orangeBreast, vec3(0.92, 0.84, 0.66), smoothstep(0.82, 0.98, featherLight));
            diffuseColor.rgb = mix(bluePlumage, warmPlumage, breast);
        `);
      };
      material.customProgramCacheKey = () => 'studio-kingfisher-plumage-v3';
      material.needsUpdate = true;
    }
  }

  Promise.all([
    fetch(asset('content.json')).then(r => r.json()),
    fetch(asset('media.json')).then(r => r.json())
  ]).then(([c, m]) => {
    copy = c;
    media = m;
    applyContent();
    waitForSceneApi();
  });

  fetch(asset('ui-state.json')).then(r => r.json()).then(state => {
    Object.entries(state.links || {}).forEach(([id,link])=>{
      const el=document.getElementById(id);if(!el)return;
      el.setAttribute('role','link');el.tabIndex=0;
      if(!el.textContent.trim())el.setAttribute('aria-label',id.startsWith('i335f')?'Home':'Explore');
      el.addEventListener('keydown',e=>{if(e.key==='Enter'){e.preventDefault();el.click();}});
      if(link.sectionHash==='contact')el.addEventListener('click',e=>{
        if(media.contactUrl && el.textContent.trim() === copy['let-s-talk']){e.preventDefault();e.stopImmediatePropagation();location.assign(media.contactUrl);}
      },true);
    });
    Object.entries(state.interactions||{}).forEach(([id,actions])=>{
      const el=document.getElementById(id);if(!el || !actions.some(a=>a.triggerType==='mouseClick') || el.hasAttribute('role'))return;
      el.setAttribute('role','button');el.tabIndex=0;
      el.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();el.click();}});
    });
    styleButtons();
  });

  window.addEventListener('load', applyContent);

  // The footer CTA is a configurable contact action rather than a copied service link.
  document.querySelectorAll('#imqgmk-2-2 [data-has-states]').forEach(el=>{
    if(!el.textContent.includes('Talk'))return;
    el.addEventListener('click',e=>{
      if(media.contactUrl)return;
      e.stopImmediatePropagation();
      let dialog=document.getElementById('studio-contact');
      if(!dialog){
        dialog=document.createElement('dialog');
        dialog.id='studio-contact';
        dialog.className='studio-dialog';
        const title=document.createElement('h2');title.textContent='Web Designss';
        const text=document.createElement('p');text.textContent=media.contactMessage;
        const button=document.createElement('button');button.textContent='Close';button.onclick=()=>dialog.close();
        dialog.append(title,text,button);
        document.body.append(dialog);
      }
      dialog.showModal();
    },true);
  });
})();

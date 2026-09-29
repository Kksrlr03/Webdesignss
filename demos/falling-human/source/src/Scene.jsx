import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';

const strokes = [
  [[-4.65,-.62],[-4.4,.2],[-4.05,1.35],[-3.9,1.98],[-4.08,2.25],[-4.43,1.98],[-4.69,1.22],[-4.85,.22],[-4.87,-.64],[-4.42,.05],[-3.95,.53],[-3.57,.31],[-3.63,-.48],[-3.38,-.68],[-3.04,-.48]],
  [[-3.05,-.43],[-2.47,.01],[-2.16,.48],[-2.43,.75],[-2.87,.48],[-3.08,-.08],[-2.94,-.66],[-2.43,-.87],[-1.87,-.67],[-1.46,-.25]],
  [[-1.49,-.23],[-.99,.45],[-.55,1.47],[-.45,2.06],[-.68,2.3],[-1.01,2.02],[-1.34,1.18],[-1.58,.16],[-1.5,-.65],[-1.04,-.84],[-.51,-.53],[.02,.02]],
  [[-.02,.00],[.47,.75],[.88,1.63],[.89,2.13],[.68,2.32],[.32,1.95],[.02,1.09],[-.14,.16],[-.04,-.62],[.42,-.84],[1.02,-.5],[1.34,-.02]],
  [[2.84,.5],[2.43,.8],[1.92,.65],[1.46,.18],[1.3,-.4],[1.56,-.88],[2.16,-.91],[2.65,-.48],[2.84,.07],[2.69,.49],[2.55,.65],[2.89,.38],[3.36,.32],[3.9,.51]],
];

export function HelloScene({ compact = false }) {
  const host = useRef(null);
  const [failed, setFailed] = useState(false);
  useEffect(() => {
    const el = host.current;
    let renderer, frame, observer, resizeObserver, pmrem, environment;
    const geometries = [], materials = [];
    let alive = true, visible = true;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const mouse = {x:0, y:0};
    const cleanups = [];
    try {
      renderer = new THREE.WebGLRenderer({ antialias:true, alpha:true, powerPreference:'low-power' });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.6));
      renderer.outputColorSpace = THREE.SRGBColorSpace;
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 1.15;
      el.appendChild(renderer.domElement);
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(36,1,.1,60);
      camera.position.set(0,.6,15.5);
      camera.lookAt(0,.6,0);
      pmrem = new THREE.PMREMGenerator(renderer);
      const room = new RoomEnvironment();
      environment = pmrem.fromScene(room, .04);
      scene.environment = environment.texture;
      room.dispose();
      const material = new THREE.MeshPhysicalMaterial({color:0x2452df, metalness:.65, roughness:.19, clearcoat:1, clearcoatRoughness:.09, envMapIntensity:1.8});
      materials.push(material);
      const group = new THREE.Group();
      const letters = [];
      const pickTargets = [];
      strokes.forEach((stroke,j) => {
        const letter = new THREE.Group();
        const letterMaterial = material.clone();
        materials.push(letterMaterial);
        const points = stroke.map(([x,y],i)=>new THREE.Vector3(x,y,Math.sin(i*.9+j)*.09));
        const curve = new THREE.CatmullRomCurve3(points, false, 'catmullrom', .38);
        const geo = new THREE.TubeGeometry(curve, 110, .26, 16, false);
        geometries.push(geo);
        const tube = new THREE.Mesh(geo, letterMaterial);
        tube.userData.letterIndex = j;
        letter.add(tube);
        pickTargets.push(tube);
        [points[0],points.at(-1)].forEach(p=>{ const g=new THREE.SphereGeometry(.26,16,12); geometries.push(g); const m=new THREE.Mesh(g,letterMaterial);m.position.copy(p);m.userData.letterIndex=j;letter.add(m);pickTargets.push(m); });
        group.add(letter);
        letters.push({mesh:letter,material:letterMaterial,offset:0,velocity:0,glow:0});
      });
      group.rotation.set(-.10,-.10,-.08);
      group.position.set(.65,.05,0);
      scene.add(group);
      const arrowShape=new THREE.Shape();
      arrowShape.moveTo(0,0);arrowShape.lineTo(0,1.45);arrowShape.quadraticCurveTo(0,1.58,.12,1.48);arrowShape.lineTo(1.2,.5);arrowShape.quadraticCurveTo(1.3,.39,1.15,.36);arrowShape.lineTo(.67,.32);arrowShape.lineTo(.41,-.06);arrowShape.quadraticCurveTo(.3,-.2,.24,-.02);arrowShape.lineTo(.12,.35);arrowShape.lineTo(.04,.02);
      const arrowGeo=new THREE.ExtrudeGeometry(arrowShape,{depth:.18,bevelEnabled:true,bevelThickness:.07,bevelSize:.07,bevelSegments:3,steps:1});
      geometries.push(arrowGeo);
      const arrowMat=new THREE.MeshPhysicalMaterial({color:0x2587ff,metalness:.35,roughness:.2,clearcoat:1});materials.push(arrowMat);
      const arrow=new THREE.Mesh(arrowGeo,arrowMat);arrow.position.set(4.4,-2.05,.2);arrow.rotation.set(.1,-.25,-.3);arrow.scale.setScalar(.8);scene.add(arrow);
      scene.add(new THREE.AmbientLight(0x7494ff,1.5));
      const key=new THREE.DirectionalLight(0xdde8ff,4);key.position.set(-4,7,7);scene.add(key);
      const rim=new THREE.DirectionalLight(0x6d98ff,4);rim.position.set(5,2,-1);scene.add(rim);
      const fit=()=>{ if(!alive)return;const w=el.clientWidth,h=el.clientHeight;renderer.setSize(w,h);camera.aspect=w/h;camera.updateProjectionMatrix(); const narrow=w<700; group.scale.setScalar(narrow?.65:1);group.position.x=narrow?.45:.65;group.position.y=narrow?.5:.05;camera.position.z=narrow?18:15.5;arrow.visible=!narrow; };
      resizeObserver=new ResizeObserver(fit);resizeObserver.observe(el);fit();
      // Raycast against the actual letter meshes, not the rectangular canvas.
      const raycaster = new THREE.Raycaster();
      const pointer = new THREE.Vector2();
      const baseColor = new THREE.Color(0x2452df);
      const hoverColor = new THREE.Color(0x52a4ff);
      let hovered = -1, inside = false, focused = false, down = null;
      let bounceAt = -10, bounceOrigin = 2;
      const setHovered = index => {
        if(hovered === index) return;
        hovered = index;
        el.dataset.hover = index >= 0 ? 'true' : 'false';
        renderer.domElement.style.cursor = index >= 0 ? 'pointer' : 'default';
      };
      const track = e => {
        const bounds = renderer.domElement.getBoundingClientRect();
        pointer.set((e.clientX-bounds.left)/bounds.width*2-1,1-(e.clientY-bounds.top)/bounds.height*2);
        mouse.x = pointer.x; mouse.y = -pointer.y; inside = true;
        el.style.setProperty('--pointer-x',`${e.clientX-bounds.left}px`);
        el.style.setProperty('--pointer-y',`${e.clientY-bounds.top}px`);
      };
      const leave = () => {inside=false;mouse.x=0;mouse.y=0;setHovered(-1);down=null;};
      const clock = new THREE.Clock();
      const bounce = index => {
        bounceAt=clock.getElapsedTime();bounceOrigin=index;
        el.dataset.interaction='bounce';
        letters.forEach((letter,i)=>{letter.velocity=reduced?0:Math.max(1.2,5.2-Math.abs(i-index)*1.05);});
      };
      const press = e => {track(e);scene.updateMatrixWorld(true);raycaster.setFromCamera(pointer,camera);const hit=raycaster.intersectObjects(pickTargets,false)[0];if(hit)down={x:e.clientX,y:e.clientY,id:e.pointerId,index:hit.object.userData.letterIndex};};
      const release = e => {if(down&&down.id===e.pointerId&&Math.hypot(e.clientX-down.x,e.clientY-down.y)<12)bounce(down.index);down=null;if(e.pointerType==='touch')leave();};
      const keydown = e => {if(e.key==='Enter'||e.key===' '){e.preventDefault();focused=true;if(!e.repeat)bounce(2);}};
      const focus = () => {focused=el.matches(':focus-visible');};
      const blur = () => {focused=false;};
      const listen=(target,type,handler,options)=>{target.addEventListener(type,handler,options);cleanups.push(()=>target.removeEventListener(type,handler,options));};
      listen(renderer.domElement,'pointermove',track,{passive:true});
      listen(renderer.domElement,'pointerleave',leave);
      listen(renderer.domElement,'pointerdown',press,{passive:true});
      listen(renderer.domElement,'pointerup',release,{passive:true});
      listen(renderer.domElement,'pointercancel',leave);
      listen(el,'keydown',keydown);listen(el,'focus',focus);listen(el,'blur',blur);
      renderer.domElement.setAttribute('aria-hidden','true');
      el.dataset.hover='false';el.dataset.interaction='idle';
      observer=new IntersectionObserver(([entry])=>{visible=entry.isIntersecting;if(!visible)leave();});observer.observe(el);
      let previousTime=0;
      const draw=()=>{
        if(!alive)return;frame=requestAnimationFrame(draw);
        const t=clock.getElapsedTime(),dt=Math.min(t-previousTime,1/30);previousTime=t;
        if(!visible)return;
        if(inside){scene.updateMatrixWorld(true);raycaster.setFromCamera(pointer,camera);const hit=raycaster.intersectObjects(pickTargets,false)[0];setHovered(hit?hit.object.userData.letterIndex:-1);}
        const blend=1-Math.exp(-dt*8);
        const age=t-bounceAt;
        if(age>1.5)el.dataset.interaction='idle';
        letters.forEach((letter,i)=>{
          const selected=i===hovered || (focused&&hovered<0);
          const pulse=Math.max(0,1-Math.max(0,age-Math.abs(i-bounceOrigin)*.07)*2.5);
          const target=selected?.3:0;
          // A damped spring lets each letter lift independently and settle naturally.
          letter.velocity+=(65*(target-letter.offset)-9*letter.velocity)*dt;
          letter.offset+=letter.velocity*dt;
          if(!reduced){letter.mesh.position.z=letter.offset;letter.mesh.position.y=letter.offset*.25;letter.mesh.rotation.x=-letter.offset*.09;letter.mesh.rotation.z=Math.sin(t*2+i)*letter.offset*.035;}
          letter.glow+=((selected?1:pulse*.9)-letter.glow)*blend;
          letter.material.color.copy(baseColor).lerp(hoverColor,letter.glow*.8);
          letter.material.emissive.setHex(0x245adf);letter.material.emissiveIntensity=letter.glow*.3;
          letter.material.roughness=.19-letter.glow*.07;
        });
        if(!reduced){group.rotation.y+=(-.1+mouse.x*.24-group.rotation.y)*blend*.55;group.rotation.x+=(-.1+mouse.y*.13-group.rotation.x)*blend*.55;group.position.z=Math.sin(t*.6)*.13;arrow.rotation.z=-.3+Math.sin(t*.6)*.1;arrow.position.y=-2.05+Math.sin(t)*.1;}
        renderer.render(scene,camera);
      };draw();
      return ()=>{alive=false;cancelAnimationFrame(frame);cleanups.forEach(fn=>fn());observer?.disconnect();resizeObserver?.disconnect();geometries.forEach(g=>g.dispose());materials.forEach(m=>m.dispose());environment?.dispose();pmrem?.dispose();renderer.dispose();renderer.domElement.remove();};
    } catch(e) { setFailed(true); renderer?.dispose(); }
  }, [compact]);
  return <div className={`hello-scene ${compact?'compact':''}`} ref={host} role={failed?undefined:'button'} tabIndex={failed?undefined:0} aria-label={failed?undefined:'Interactive 3D hello. Hover over a letter to illuminate it. Click, tap, or press Enter to make it bounce.'}>{failed?<span className="hello-fallback">hello</span>:<span className="hello-hint" aria-hidden="true"><span className="hello-hint-desktop">HOVER TO EXPLORE · CLICK TO PLAY</span><span className="hello-hint-touch">TAP THE LETTERS TO PLAY</span></span>}</div>;
}

export function Tunnel() {
  const canvas = useRef(null);
  useEffect(()=>{
    const el=canvas.current, ctx=el.getContext('2d');if(!ctx)return;
    let w=0,h=0,frame,visible=false;const reduced=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const colors=['#8193ff','#59e0f6','#c99cff','#baff6c','#3a74ff'];
    const lines=Array.from({length:210},(_,i)=>({angle:i*2.39996,r:(i*37%100)/100,speed:.12+(i%7)*.024,color:colors[i%colors.length],len:.025+(i%5)*.009}));
    const resize=()=>{w=el.clientWidth;h=el.clientHeight;el.width=w;el.height=h;};resize();const ro=new ResizeObserver(resize);ro.observe(el);
    const io=new IntersectionObserver(([e])=>visible=e.isIntersecting);io.observe(el);
    let last=0;
    const draw=t=>{frame=requestAnimationFrame(draw);if(!visible||t-last<30)return;const dt=Math.min((t-last)/1000,.05);last=t;ctx.clearRect(0,0,w,h);const cx=w*.5,cy=h*.5;lines.forEach(l=>{if(!reduced)l.r=(l.r+dt*l.speed)%1;const r=l.r*l.r;const tail=Math.max(0,l.r-l.len)**2;ctx.strokeStyle=l.color;ctx.globalAlpha=Math.min(l.r*1.2,.8);ctx.lineWidth=.6+l.r*1.5;ctx.beginPath();ctx.moveTo(cx+Math.cos(l.angle)*tail*w*.8,cy+Math.sin(l.angle)*tail*h);ctx.lineTo(cx+Math.cos(l.angle)*r*w*.8,cy+Math.sin(l.angle)*r*h);ctx.stroke();});};frame=requestAnimationFrame(draw);
    return()=>{cancelAnimationFrame(frame);ro.disconnect();io.disconnect();};
  },[]);
  return <canvas ref={canvas} className="tunnel-canvas" aria-hidden="true"/>;
}

import React,{useEffect,useRef} from 'react';
import * as THREE from 'three';

const vertex=`
uniform float uTime; uniform vec2 uPointer; uniform float uHover; uniform vec3 uRipple; uniform float uDpr;
varying float vHeight; varying float vGlow;
void main(){
 vec3 p=position;
 float d=distance(p.xy,uPointer);
 float swell=sin(p.x*.62+uTime*.48)*cos(p.y*.51-uTime*.3)*1.35;
 swell+=sin(p.x*.95+p.y*.68-uTime*.62)*.55;
 swell+=cos(p.x*.32-p.y*.85+uTime*.22)*.65;
 float hover=exp(-d*d*.2)*uHover;
 float age=uTime-uRipple.z;
 float rd=distance(p.xy,uRipple.xy);
 float ripple=sin(rd*3.3-age*5.)*exp(-pow(rd-age*2.8,2.)*.8)*exp(-age*.75)*step(0.,age);
 p.z=swell+hover*1.8+ripple*.9;
 vHeight=(swell+2.55)/5.1;vGlow=hover+abs(ripple)*.5;
 vec4 mv=modelViewMatrix*vec4(p,1.);
 gl_Position=projectionMatrix*mv;
 gl_PointSize=clamp((1.6+vHeight*1.6+hover*2.)*uDpr*15./(-mv.z),1.,7.*uDpr);
}`;
export default function GoldMesh({paused}){
 const ref=useRef(null);
 useEffect(()=>{
  const canvas=ref.current,host=canvas.parentElement;
  let renderer;
  try{renderer=new THREE.WebGLRenderer({canvas,alpha:true,antialias:true,powerPreference:'low-power'});}catch{host.dataset.mesh='fallback';return;}
  const scene=new THREE.Scene(),camera=new THREE.PerspectiveCamera(48,1,.1,80);camera.position.set(0,0,19);
  const uniforms={uTime:{value:0},uPointer:{value:new THREE.Vector2(0,0)},uHover:{value:0},uRipple:{value:new THREE.Vector3(0,0,-100)},uDpr:{value:Math.min(devicePixelRatio,1.5)}};
  const geometry=new THREE.PlaneGeometry(30,21,160,105);
  const wire=new THREE.ShaderMaterial({uniforms,vertexShader:vertex,fragmentShader:`varying float vHeight;varying float vGlow;void main(){vec3 gold=mix(vec3(.26,.14,.035),vec3(.98,.72,.29),vHeight);gl_FragColor=vec4(gold,.045+vHeight*.12+vGlow*.17);}`,wireframe:true,transparent:true,depthWrite:false,blending:THREE.AdditiveBlending});
  const dots=new THREE.ShaderMaterial({uniforms,vertexShader:vertex,fragmentShader:`varying float vHeight;varying float vGlow;void main(){float d=length(gl_PointCoord-.5);if(d>.5)discard;float a=smoothstep(.5,.13,d);vec3 gold=mix(vec3(.48,.28,.07),vec3(1.,.86,.5),vHeight);gl_FragColor=vec4(gold,a*(.25+vHeight*.65+vGlow*.4));}`,transparent:true,depthWrite:false,blending:THREE.AdditiveBlending});
  const group=new THREE.Group();group.add(new THREE.Mesh(geometry,wire),new THREE.Points(geometry,dots));group.rotation.x=-.38;scene.add(group);
  let frame=0,visible=false,last=0,time=0,hover=0;const pointer=new THREE.Vector2();
  const render=()=>renderer.render(scene,camera);
  const resize=()=>{renderer.setPixelRatio(uniforms.uDpr.value);renderer.setSize(host.clientWidth,host.clientHeight,false);camera.aspect=host.clientWidth/host.clientHeight;camera.updateProjectionMatrix();render();};
  const tick=now=>{if(!visible||paused)return;time+=Math.min((now-last)/1000,.04);last=now;uniforms.uTime.value=time;uniforms.uPointer.value.lerp(pointer,.08);uniforms.uHover.value=THREE.MathUtils.lerp(uniforms.uHover.value,hover,.06);group.rotation.y=THREE.MathUtils.lerp(group.rotation.y,pointer.x*.006*hover,.04);render();frame=requestAnimationFrame(tick);};
  const move=e=>{const r=canvas.getBoundingClientRect();const halfH=Math.tan(THREE.MathUtils.degToRad(24))*19;pointer.set(((e.clientX-r.left)/r.width*2-1)*halfH*camera.aspect,(1-(e.clientY-r.top)/r.height*2)*halfH);hover=1;};
  const leave=()=>{hover=0;};
  const click=e=>{if(paused||e.target.closest('a,button'))return;move(e);uniforms.uRipple.value.set(pointer.x,pointer.y,time);};
  const io=new IntersectionObserver(([entry])=>{visible=entry.isIntersecting;cancelAnimationFrame(frame);if(visible&&!paused){last=performance.now();frame=requestAnimationFrame(tick);}else render();});io.observe(host);
  const ro=new ResizeObserver(resize);ro.observe(host);host.addEventListener('pointermove',move);host.addEventListener('pointerleave',leave);host.addEventListener('click',click);resize();host.dataset.mesh='webgl';
  return()=>{cancelAnimationFrame(frame);io.disconnect();ro.disconnect();host.removeEventListener('pointermove',move);host.removeEventListener('pointerleave',leave);host.removeEventListener('click',click);geometry.dispose();wire.dispose();dots.dispose();renderer.dispose();};
 },[paused]);
 return <canvas ref={ref} aria-hidden="true"/>;
}

import {GLTFLoader} from './loaders/GLTFLoader.js';
import {RoundedBoxGeometry} from './RoundedBoxGeometry.js';
import * as T from './three.module.js';
const id=Number(new URLSearchParams(location.search).get('scene')||0),scene=new T.Scene();scene.background=new T.Color('#101411');
const camera=new T.PerspectiveCamera(34,innerWidth/innerHeight,.1,100);camera.position.set(6,5.5,7);camera.lookAt(0,0,0);
const renderer=new T.WebGLRenderer({antialias:true});renderer.setPixelRatio(Math.min(devicePixelRatio,1.5));renderer.setSize(innerWidth,innerHeight);renderer.shadowMap.enabled=true;renderer.shadowMap.type=T.PCFSoftShadowMap;renderer.toneMapping=T.ACESFilmicToneMapping;renderer.toneMappingExposure=1.2;document.body.append(renderer.domElement);
scene.add(new T.HemisphereLight(0xd4dfd1,0x141c16,2));function light(color,power,x,y,z){const l=new T.DirectionalLight(color,power);l.position.set(x,y,z);l.castShadow=true;l.shadow.mapSize.set(1024,1024);scene.add(l);}light(0xe3e8db,4,3,6,4);light(0x7fac86,3,-4,3,-2);light(0x97ac9b,2,2,2,-4);
const root=new T.Group();scene.add(root);const mat=(c,metal=.1,rough=.4)=>new T.MeshStandardMaterial({color:c,metalness:metal,roughness:rough});const cream=mat('#b9bdb6'),rose=mat('#44694f'),gold=mat('#718677',.75,.23),plum=mat('#354b3d'),stone=mat('#bfc2ba');
function mesh(g,m,x=0,y=0,z=0){const o=new T.Mesh(g,m);o.position.set(x,y,z);o.castShadow=true;o.receiveShadow=true;root.add(o);return o;}const box=(w,h,d,m,x,y,z)=>mesh(new RoundedBoxGeometry(w,h,d,3,Math.min(.10,w/5,h/5,d/5)),m,x,y,z);const cyl=(r,h,m,x,y,z)=>mesh(new T.CylinderGeometry(r,r,h,64),m,x,y,z);
const base=box(5,.13,3.7,mat('#242825'),0,-.5,0);
if(id<0){
base.visible=false;scene.background=new T.Color('#101411');camera.position.set(6.8,4.4,8.8);camera.lookAt(0,.65,0);
scene.children.filter(o=>o.isLight).forEach(o=>{o.intensity*=.55;if(o.color)o.color.set('#e4ece0');});
const plaster=mat('#a8ada6',0,.93),oak=mat('#656b64',0,.8),linen=mat('#cdd0c7',0,.97),wine=mat('#365d43',0,.8),dark=mat('#171c18',.1,.7);
box(6,.16,4.8,oak,0,-.5,0);for(let i=0;i<18;i++)box(.012,.007,4.7,dark,-2.9+i*.34,-.414,0);
box(6,3.4,.14,plaster,0,1.2,-2.4);box(.14,3.4,4.8,plaster,-3,1.2,0);box(6,.11,.09,linen,0,-.3,-2.28);box(.09,.11,4.6,linen,-2.89,-.3,0);
// Recessed window, mullions, and softly lit curtains.
box(.035,2.45,2.1,mat('#82958b',.2,.2),-2.91,1.4,.1);for(const z of [-1,.1,1.2])box(.06,2.5,.035,gold,-2.85,1.4,z);for(let i=0;i<10;i++)cyl(.075,3.05,linen,-2.75,1.12,1.35+i*.085);
box(4.1,.035,3.2,linen,.15,-.39,.1);
function plant(x,z){cyl(.23,.42,stone,x,-.18,z);for(let i=0;i<8;i++){const leaf=mesh(new T.SphereGeometry(1,16,12),mat('#43573e',0,.8),x+Math.sin(i*2)*.17,.3+i*.085,z+Math.cos(i*2)*.15);leaf.scale.set(.12,.35,.075);leaf.rotation.z=Math.sin(i)*.5;}}
function pendant(x,z,y){cyl(.012,.9,gold,x,y+.55,z);mesh(new T.SphereGeometry(.18,32,24),new T.MeshStandardMaterial({color:'#e1e8dc',emissive:'#b3ccac',emissiveIntensity:1.4}),x,y,z);const l=new T.PointLight(0xc0d6b8,3,5);l.position.set(x,y-.12,z);root.add(l);}
if(id===-2){document.querySelector('.label').textContent='LIVING / A CONSIDERED HOME';document.querySelector('.note').textContent='ARCHITECTURE / MATERIAL / LIGHT';
box(3,.42,1.05,linen,-.5,-.1,-1.5);box(3,.68,.22,linen,-.5,.36,-1.96);for(const x of [-1.9,.9])box(.24,.52,1.1,linen,x,.18,-1.5);for(const x of [-1.4,-.5,.4])box(.83,.15,.78,linen,x,.17,-1.46);for(const x of [-1.4,.4]){const cushion=box(.52,.5,.15,wine,x,.52,-1.74);cushion.rotation.z=.12;}
cyl(.7,.16,stone,-.3,-.03,.35);cyl(.38,.33,oak,-.3,-.25,.35);box(.38,.035,.3,wine,-.48,.075,.3);cyl(.07,.18,gold,-.08,.16,.25);
box(1.25,.45,.9,wine,1.8,-.12,.5);box(1.25,.62,.18,wine,1.8,.28,.12);box(1.25,.12,.8,wine,1.8,.15,.5);
box(1.65,1.05,.06,gold,-.45,1.65,-2.27);box(1.54,.94,.04,wine,-.45,1.65,-2.22);mesh(new T.CircleGeometry(.31,48),stone,-.5,1.7,-2.18);pendant(1.8,-1.25,1.65);plant(-2.1,1.3);
}else{document.querySelector('.label').textContent='BEDROOM / A QUIET RETREAT';document.querySelector('.note').textContent='WARM TIMBER / SOFT TEXTILES / LAYERED LIGHT';
box(3.35,1.35,.18,wine,0,.48,-1.95);for(let i=0;i<15;i++)box(.018,1.25,.04,gold,-1.55+i*.22,.48,-1.84);
box(2.8,.4,3.1,oak,0,-.15,-.1);box(2.72,.27,2.95,linen,0,.14,-.13);box(2.75,.08,1.5,mat('#839481',0,1),0,.31,.55);for(const x of [-.69,.69])box(1.07,.2,.67,linen,x,.34,-1.15);
for(const x of [-2.05,2.05]){box(.64,.62,.64,oak,x,-.1,-1.58);cyl(.16,.04,gold,x,.24,-1.58);pendant(x,-1.58,1.55);}
box(2.2,.22,.63,wine,0,-.06,1.83);for(const x of [-.8,.8])box(.09,.36,.42,gold,x,-.31,1.83);plant(2.5,.8);
}
}else if(id===0){document.querySelector('.label').textContent='01 / SPACE & PROPORTION';document.querySelector('.note').textContent='LIVING / DINING / CIRCULATION';box(5,1.8,.12,plum,0,.43,-1.8);box(.12,1.8,3.7,rose,-2.45,.43,0);box(1.25,.06,1.3,gold,-2.37,.38,-.4).rotation.z=Math.PI/2;
box(2,.42,.85,cream,-.6,-.16,-1.1);box(2,.6,.17,cream,-.6,.2,-1.49);for(const x of [-1.5,.3])box(.16,.48,.85,rose,x,.1,-1.1);cyl(.54,.15,gold,-.4,-.12,.2);cyl(.07,.3,gold,-.4,-.32,.2);box(2.5,.025,1.7,mat('#536958'),-.45,-.42,0);box(.9,.7,.8,rose,1.5,-.08,.8);cyl(.32,.08,gold,1.45,.05,-.7);cyl(.035,1.55,gold,1.7,.3,-1.15);mesh(new T.ConeGeometry(.4,.45,64,1,true),cream,1.7,1.12,-1.15);
}else if(id===1){document.querySelector('.label').textContent='02 / MATERIAL HARMONY';document.querySelector('.note').textContent='STONE / TIMBER / TEXTILE / BRUSHED METAL';camera.position.set(5,6,6);camera.lookAt(0,0,0);const materials=[stone,rose,gold,plum];for(let i=0;i<4;i++){let slab=box(1.5,.16,2.1,materials[i],(i-1.5)*.86,-.1+i*.12,0);slab.rotation.y=-.24;}
for(let i=0;i<17;i++)box(.026,.014,2.02,mat('#353f36'),-.9+i*.075,.12,.1);mesh(new T.SphereGeometry(.48,48,32),gold,1.2,.67,.65);cyl(.5,.3,stone,-1.45,.18,.75);
}else{document.querySelector('.label').textContent='03 / LAYERS OF LIGHT';document.querySelector('.note').textContent='AMBIENT / TASK / ACCENT';box(5,2.8,.12,plum,0,.85,-1.8);box(.12,2.8,3.7,rose,-2.45,.85,0);for(let i=0;i<3;i++){const x=-1.25+i*1.2,y=1.1+(i%2)*.4;mesh(new T.CylinderGeometry(.015,.015,1.4,12),gold,x,y+.8,0);mesh(new T.SphereGeometry(.32,48,32),new T.MeshStandardMaterial({color:0xdbe8d1,emissive:0xa5c39b,emissiveIntensity:2,roughness:.25}),x,y,0);const l=new T.PointLight(0xc1d7b6,7,5,2);l.position.set(x,y-.25,0);root.add(l);}box(2.8,.16,1.1,gold,0,-.02,.2);for(const x of [-1,1])box(.08,.5,.08,gold,x,-.3,.2);}
let visible=true;addEventListener('message',e=>{if(e.origin===location.origin&&typeof e.data.interiorVisible==='boolean')visible=e.data.interiorVisible;});let last=0;function tick(t){requestAnimationFrame(tick);if(!visible||t-last<40)return;last=t;root.rotation.y=Math.sin(t*.00018)*.09;renderer.render(scene,camera);}requestAnimationFrame(tick);addEventListener('resize',()=>{camera.aspect=innerWidth/innerHeight;camera.updateProjectionMatrix();renderer.setSize(innerWidth,innerHeight);});


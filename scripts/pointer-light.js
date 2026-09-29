(() => {
  const fine=matchMedia('(hover:hover) and (pointer:fine)'), reduced=matchMedia('(prefers-reduced-motion: reduce)');
  const light=document.createElement('div');light.className='studio-pointer-light';light.setAttribute('aria-hidden','true');document.body.append(light);
  let x=0,y=0,frame=0;
  function move(px,py){if(!fine.matches||reduced.matches)return;x=px;y=py;light.style.opacity='1';if(!frame)frame=requestAnimationFrame(()=>{light.style.transform=`translate3d(${x-220}px,${y-220}px,0)`;frame=0;});}
  addEventListener('pointermove',e=>{if(e.pointerType==='mouse')move(e.clientX,e.clientY);},{passive:true});
  document.documentElement.addEventListener('pointerleave',()=>light.style.opacity='0');
  addEventListener('blur',()=>light.style.opacity='0');
  addEventListener('message',e=>{const f=document.getElementById('interactive-studio');if(e.origin!==location.origin||e.source!==f?.contentWindow||e.data?.type!=='studio-pointer')return;const r=f.getBoundingClientRect();if(Number.isFinite(e.data.x)&&Number.isFinite(e.data.y))move(r.left+e.data.x,r.top+e.data.y);});
})();

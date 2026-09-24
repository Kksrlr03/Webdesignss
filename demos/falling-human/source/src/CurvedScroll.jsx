import {useEffect} from 'react';

export default function CurvedScroll({route}){
  useEffect(()=>{
    const media=window.matchMedia('(prefers-reduced-motion: reduce)');
    const main=document.querySelector('#main');
    let frame=0,items=[],previousScroll=window.scrollY,sway=0;
    const measure=()=>{
      items=[...main.querySelectorAll(':scope > section, :scope > .about, :scope > .work, :scope > .services, :scope > .warp, :scope > .contact, :scope > article > section, :scope > article > .case-top, :scope > article > .case-main-art, :scope > article > .case-brand, :scope > article > .case-cta, :scope > article > .next-project')];
      items.forEach(el=>el.classList.add('curve-panel'));
      update();
    };
    const update=()=>{
      frame=0;
      const vh=window.innerHeight;
      const delta=window.scrollY-previousScroll;
      previousScroll=window.scrollY;
      sway=media.matches?0:Math.max(-2.5,Math.min(2.5,sway*.82+delta*.018));
      main.style.setProperty('--scroll-sway',`${sway}deg`);
      for(const el of items){
        if(media.matches){el.style.removeProperty('--curve-angle');el.style.removeProperty('--curve-scale');el.style.removeProperty('--curve-radius');continue;}
        // Offset geometry stays stable while the panel is visually transformed.
        let top=0,node=el;
        while(node){top+=node.offsetTop;node=node.offsetParent;}
        const y=top-window.scrollY,h=el.offsetHeight;
        const entering=Math.max(0,Math.min(1,(y-vh*.12)/(vh*.88)));
        const leaving=Math.max(0,Math.min(1,(vh*.88-y-h)/(vh*.88)));
        const bend=entering-leaving;
        const strength=Math.max(entering,leaving);
        el.style.setProperty('--curve-angle',`${bend*9}deg`);
        el.style.setProperty('--curve-scale',`${1-strength*.045}`);
        el.style.setProperty('--curve-radius',`${strength*42}px`);
        el.style.setProperty('--curve-shift',`${bend*32}px`);
      }
      if(Math.abs(sway)>.015)frame=requestAnimationFrame(update);
    };
    const schedule=()=>{if(!frame)frame=requestAnimationFrame(update);};
    const resize=new ResizeObserver(schedule);resize.observe(main);
    window.addEventListener('scroll',schedule,{passive:true});window.addEventListener('resize',schedule);
    media.addEventListener('change',schedule);measure();
    return()=>{cancelAnimationFrame(frame);main.style.removeProperty('--scroll-sway');resize.disconnect();window.removeEventListener('scroll',schedule);window.removeEventListener('resize',schedule);media.removeEventListener('change',schedule);items.forEach(el=>{el.classList.remove('curve-panel');['--curve-angle','--curve-scale','--curve-radius','--curve-shift'].forEach(p=>el.style.removeProperty(p));});};
  },[route]);
  return null;
}

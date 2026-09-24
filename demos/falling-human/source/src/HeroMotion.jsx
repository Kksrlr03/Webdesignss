import React, {useEffect,useRef,useState} from 'react';

export default function HeroMotion(){
  const canvas=useRef(null);
  const [paused,setPaused]=useState(()=>window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  useEffect(()=>{
    const el=canvas.current,hero=el.closest('.hero'),ctx=el.getContext('2d');
    const reduced=window.matchMedia('(prefers-reduced-motion: reduce)');
    let width=0,height=0,frame=0,visible=true,last=0,particles=[];
    hero.dataset.motion=paused?'paused':'playing';
    const resize=()=>{width=hero.clientWidth;height=hero.clientHeight;const dpr=Math.min(devicePixelRatio,2);el.width=width*dpr;el.height=height*dpr;ctx.setTransform(dpr,0,0,dpr,0,0);};
    const burst=(x,y)=>{if(paused||reduced.matches)return;for(let i=0;i<20;i++){const a=Math.random()*Math.PI*2,s=1+Math.random()*3;particles.push({x,y,vx:Math.cos(a)*s,vy:Math.sin(a)*s,life:1,color:['#edc581','#c99450','#fff0d4'][i%3]});}particles=particles.slice(-160);};
    const move=e=>{if(paused||reduced.matches)return;const r=hero.getBoundingClientRect(),x=e.clientX-r.left,y=e.clientY-r.top;hero.style.setProperty('--hero-x',`${x}px`);hero.style.setProperty('--hero-y',`${y}px`);hero.style.setProperty('--drift-x',`${(x/width-.5)*16}px`);hero.style.setProperty('--drift-y',`${(y/height-.5)*12}px`);};
    const reset=()=>{hero.style.setProperty('--drift-x','0px');hero.style.setProperty('--drift-y','0px');};
    const click=e=>{if(e.target.closest('a,button'))return;const r=hero.getBoundingClientRect();burst(e.clientX-r.left,e.clientY-r.top);};
    const play=()=>burst(width*.6,height*.62);
    const render=time=>{frame=requestAnimationFrame(render);if(!visible||paused)return;const dt=Math.min((time-last)/16.67||1,2);last=time;ctx.clearRect(0,0,width,height);particles=particles.filter(p=>p.life>0);for(const p of particles){p.x+=p.vx*dt;p.y+=p.vy*dt;p.vy+=.025*dt;p.life-=.018*dt;ctx.globalAlpha=Math.max(0,p.life);ctx.fillStyle=p.color;ctx.fillRect(p.x,p.y,3,3);}ctx.globalAlpha=1;};
    const observer=new ResizeObserver(resize);observer.observe(hero);
    const intersection=new IntersectionObserver(([entry])=>{visible=entry.isIntersecting;hero.classList.toggle('hero-offscreen',!visible);});intersection.observe(hero);
    const preference=()=>{if(reduced.matches)setPaused(true);};reduced.addEventListener('change',preference);
    hero.addEventListener('pointermove',move);hero.addEventListener('pointerleave',reset);hero.addEventListener('click',click);hero.addEventListener('hero-burst',play);
    resize();if(!paused)frame=requestAnimationFrame(render);else reset();
    return()=>{cancelAnimationFrame(frame);observer.disconnect();intersection.disconnect();reduced.removeEventListener('change',preference);hero.removeEventListener('pointermove',move);hero.removeEventListener('pointerleave',reset);hero.removeEventListener('click',click);hero.removeEventListener('hero-burst',play);};
  },[paused]);
  return <><div className="hero-light" aria-hidden="true"/><canvas className="hero-particles" ref={canvas} aria-hidden="true"/><div className="hero-orbits" aria-hidden="true"><i/><i/><i/><span>✳</span></div><div className="hero-play"><button onClick={()=>canvas.current.closest('.hero').dispatchEvent(new Event('hero-burst'))} disabled={paused}>MAKE A LITTLE MAGIC ↗</button><button onClick={()=>setPaused(v=>!v)} aria-pressed={paused}>{paused?'PLAY MOTION':'PAUSE MOTION'}</button></div></>;
}

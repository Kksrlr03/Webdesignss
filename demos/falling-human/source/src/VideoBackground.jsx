import React,{useEffect,useRef,useState} from 'react';

export default function VideoBackground(){
 const video=useRef(null);
 const [paused,setPaused]=useState(()=>window.matchMedia('(prefers-reduced-motion: reduce)').matches);
 useEffect(()=>{
  const el=video.current;let frame=0,target=0;
  const seek=()=>{if(!paused&&!el.seeking&&Number.isFinite(el.duration)&&Math.abs(el.currentTime-target)>.05)el.currentTime=target;};
  const update=()=>{frame=0;const range=document.documentElement.scrollHeight-innerHeight;target=Math.max(0,Math.min(1,range>0?scrollY/range:0))*Math.max(0,(el.duration||0)-.05);seek();};
  const schedule=()=>{if(!frame)frame=requestAnimationFrame(update);};
  const resize=new ResizeObserver(schedule);resize.observe(document.body);
  window.addEventListener('scroll',schedule,{passive:true});window.addEventListener('resize',schedule);el.addEventListener('loadedmetadata',schedule);el.addEventListener('seeked',seek);schedule();
  return()=>{cancelAnimationFrame(frame);resize.disconnect();window.removeEventListener('scroll',schedule);window.removeEventListener('resize',schedule);el.removeEventListener('loadedmetadata',schedule);el.removeEventListener('seeked',seek);};
 },[paused]);
 return <><div className="site-film" aria-hidden="true"><video ref={video} src={`${import.meta.env.BASE_URL}falling-through-light.mp4`} muted playsInline preload="auto"/><div/></div><button className="site-film-toggle" aria-pressed={paused} onClick={()=>setPaused(v=>!v)}>{paused?'ENABLE BACKGROUND MOTION':'PAUSE BACKGROUND MOTION'}</button></>;
}

import React,{useEffect,useRef,useState} from 'react';
import './ScrollFilm.css';

export default function ScrollFilm(){
 const section=useRef(null),video=useRef(null);
 const [manual,setManual]=useState(()=>window.matchMedia('(prefers-reduced-motion: reduce)').matches);
 const [failed,setFailed]=useState(false);
 useEffect(()=>{
  const el=video.current,host=section.current;
  let frame=0,target=0;
  const seek=()=>{if(!el.seeking&&Number.isFinite(el.duration)&&Math.abs(el.currentTime-target)>.04)el.currentTime=target;};
  const update=()=>{frame=0;const rect=host.getBoundingClientRect();const progress=Math.max(0,Math.min(1,-rect.top/Math.max(1,host.offsetHeight-innerHeight)));host.style.setProperty('--film-progress',progress);if(!manual&&Number.isFinite(el.duration)){target=progress*Math.max(0,el.duration-.05);seek();}};
  const schedule=()=>{if(!frame)frame=requestAnimationFrame(update);};
  const seekingDone=()=>{if(!manual)seek();};
  if(!manual)el.pause();
  const observer=new IntersectionObserver(([entry])=>{if(!entry.isIntersecting)el.pause();});observer.observe(host);
  window.addEventListener('scroll',schedule,{passive:true});window.addEventListener('resize',schedule);el.addEventListener('loadedmetadata',schedule);el.addEventListener('seeked',seekingDone);update();
  return()=>{cancelAnimationFrame(frame);observer.disconnect();window.removeEventListener('scroll',schedule);window.removeEventListener('resize',schedule);el.removeEventListener('loadedmetadata',schedule);el.removeEventListener('seeked',seekingDone);};
 },[manual]);
 return <div className={`scroll-film ${manual?'film-manual':''}`} ref={section} id="film"><div className="film-sticky"><video ref={video} src={`${import.meta.env.BASE_URL}falling-through-light.mp4`} muted playsInline preload="metadata" controls={manual} onError={()=>setFailed(true)} aria-label="Human figure falling through light — cinematic video"/><div className="film-caption"><span>05 / A MOMENT IN MOTION</span><h2>Into the<br/><em>unexpected.</em></h2><p>{manual?'Take a moment. Press play.':'Scroll to move through the light.'}</p></div><div className="film-toolbar"><span>{failed?'Video unavailable':manual?'WATCH AT YOUR OWN PACE':'SCROLL TO EXPLORE ↓'}</span><button onClick={()=>setManual(v=>!v)}>{manual?'Use scroll playback':'Use video controls'}</button></div><div className="film-progress" aria-hidden="true"/></div></div>;
}

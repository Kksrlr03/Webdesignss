/* Only the large showcase in section two. */
(() => {
 const video=document.getElementById('ilwnepj-2-2-3-2-2');
 if(!video || video.tagName!=='VIDEO')return;
 video.muted=true;video.defaultMuted=true;
 let visible=false;
 const reset=()=>{video.pause();if(video.readyState>=1)video.currentTime=0;};
 const observer=new IntersectionObserver(entries=>{
  const entry=entries[0];visible=entry.isIntersecting&&entry.intersectionRect.width>0&&entry.intersectionRect.height>0;
  if(visible){video.play().catch(()=>{});}else reset();
 },{threshold:0});
 observer.observe(video);
 video.addEventListener('loadedmetadata',()=>{if(!visible)reset();});
 document.addEventListener('visibilitychange',()=>{if(document.hidden)video.pause();else if(visible)video.play().catch(()=>{});});
})();

(() => {
  const frame=document.getElementById('interactive-studio');
  addEventListener('message',event=>{
    if(event.origin!==location.origin||event.source!==frame?.contentWindow)return;
    if(event.data?.type==='studio-touch-scroll' && Number.isFinite(event.data.delta) && matchMedia('(max-width:767px)').matches){const root=document.documentElement,old=root.style.getPropertyValue('scroll-behavior'),priority=root.style.getPropertyPriority('scroll-behavior');root.style.setProperty('scroll-behavior','auto','important');window.scrollBy(0,event.data.delta);if(old)root.style.setProperty('scroll-behavior',old,priority);else root.style.removeProperty('scroll-behavior');return;}
    if(event.data?.type==='studio-scroll' && Number.isFinite(event.data.delta)){const wheel=new WheelEvent('wheel',{deltaY:event.data.delta,deltaMode:0,bubbles:true,cancelable:true});
      const nativeScroll=window.dispatchEvent(wheel);if(nativeScroll)window.scrollBy({top:event.data.delta,behavior:'instant'});return;}
    if(event.data?.type==='studio-resize'){frame.style.height=Math.min(1400,Math.max(500,event.data.height))+'px';return;}
    if(event.data?.type!=='studio-contact')return;
    const contact=document.querySelector('[aria-label="Contact Web Designss"]');
    if(contact){contact.scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth',block:'center'});contact.setAttribute('tabindex','-1');contact.focus({preventScroll:true});}
  });
})();

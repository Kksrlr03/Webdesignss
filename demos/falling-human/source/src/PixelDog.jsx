import React, { useEffect, useRef } from 'react';

export default function PixelDog(){
  const ref=useRef(null);
  useEffect(()=>{
    const node=ref.current;
    let previousX=0;
    const move=event=>{
      if(event.pointerType!=='mouse'){hide();return;}
      node.hidden=false;
      document.documentElement.classList.add('dog-pointer-active');
      node.style.left=`${Math.max(0,Math.min(event.clientX-16,window.innerWidth-32))}px`;
      node.style.top=`${Math.max(0,Math.min(event.clientY-14,window.innerHeight-28))}px`;
      if(Math.abs(event.clientX-previousX)>2) node.style.setProperty('--dog-direction',event.clientX<previousX?-1:1);
      previousX=event.clientX;
    };
    const hide=()=>{node.hidden=true;document.documentElement.classList.remove('dog-pointer-active');};
    window.addEventListener('pointermove',move,{passive:true});
    document.documentElement.addEventListener('pointerleave',hide);
    window.addEventListener('blur',hide);
    return ()=>{hide();window.removeEventListener('pointermove',move);document.documentElement.removeEventListener('pointerleave',hide);window.removeEventListener('blur',hide);};
  },[]);
  return <span className="pixel-dog-cursor" ref={ref} hidden aria-hidden="true"><svg viewBox="0 0 24 20" shapeRendering="crispEdges">
    <g className="pixel-dog-tail"><path fill="#f0bb74" d="M3 10H1V6h2v2h3v4H3z"/></g>
    <path fill="#583621" d="M7 15h3v4H7zm10 0h3v4h-3z"/>
    <path fill="#eab774" d="M5 9h12v7H5zM13 3h9v10h-9z"/>
    <path fill="#f6cc8e" d="M6 9h8v4H6zm10-3h6v5h-6zm3 4h5v4h-5zM5 13h3v3H5z"/>
    <path fill="#71452b" d="M13 3h4v7h-4z"/>
    <path fill="#17191e" d="M20 7h2v2h-2zm2 3h2v2h-2z"/>
    <path fill="#fff" d="M20 7h1v1h-1z"/>
    <path fill="#f6a8a5" d="M18 10h2v2h-2z"/>
    <path fill="#ff8597" d="M21 14h2v2h-2z"/>
    <path fill="#a5ef55" d="M14 12h6v2h-6z"/>
    <path fill="#f6cc8e" d="M5 15h3v4H5zm10 0h3v4h-3z"/>
  </svg></span>;
}

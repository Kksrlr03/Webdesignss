import { useEffect } from 'react';

export default function RgbCursor(){
  useEffect(()=>{
    const root=document.documentElement;
    root.classList.add('rgb-pointer');
    let colour=0;
    const update=()=>root.style.setProperty('--rgb-cursor',`url('${import.meta.env.BASE_URL}cursor-dark-${colour}.svg') 1 1`);
    update();
    const timer=setInterval(()=>{if(document.hidden)return;colour=(colour+1)%4;update();},1200);
    return ()=>{clearInterval(timer);root.classList.remove('rgb-pointer');root.style.removeProperty('--rgb-cursor');};
  },[]);
  return null;
}

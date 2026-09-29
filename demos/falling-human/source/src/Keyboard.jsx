import React, { useEffect, useRef, useState } from 'react';

const keys = [{label:'esc',code:'Escape',caption:'ESCAPE'},{label:'ctrl',code:'Control',caption:'CONTROL'},{label:'↵',code:'Enter',caption:'ENTER'}];

export default function Keyboard(){
  const [pressed,setPressed]=useState({});
  const timers=useRef({});
  const press=(code)=>{
    clearTimeout(timers.current[code]);
    setPressed(value=>({...value,[code]:true}));
    timers.current[code]=setTimeout(()=>setPressed(value=>({...value,[code]:false})),220);
  };
  useEffect(()=>{
    const down=(event)=>{
      if(event.repeat || /INPUT|TEXTAREA|SELECT/.test(event.target.tagName) || event.target.isContentEditable) return;
      if(keys.some(key=>key.code===event.key)) press(event.key);
    };
    window.addEventListener('keydown',down);
    return ()=>{window.removeEventListener('keydown',down);Object.values(timers.current).forEach(clearTimeout);};
  },[]);
  return <div className="keyboard-scene" aria-label="Interactive glass keyboard">
    <div className="keyboard-keys">{keys.map((key,index)=><button key={key.code} type="button" className={`glass-key key-${index}${pressed[key.code]?' is-pressed':''}`} aria-label={`Press ${key.caption} key`} onPointerDown={()=>press(key.code)} onClick={()=>press(key.code)}>
      <span className="key-base" aria-hidden="true"/>
      <span className="key-cap"><span className="key-symbol">{key.label}</span><span className="key-caption">{key.caption}<span>0{index+1}</span></span></span>
    </button>)}</div>
    <span className="keyboard-hint">CLICK, TAP, OR PRESS A KEY</span>
  </div>;
}

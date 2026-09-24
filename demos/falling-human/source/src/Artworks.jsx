import React from 'react';
import { ArrowUpRight, Plus, Search, Command, Bell, LayoutDashboard, Folder, Check, MoreHorizontal, ArrowRight, Headphones } from 'lucide-react';

export function Star({ className = '' }) { return <svg className={className} viewBox="0 0 100 100" fill="currentColor" aria-hidden="true"><path d="M43 0h14l1 32 23-22 10 10-23 23 32 0v14l-32 1 23 23-10 10-23-23-1 32H43l-1-32-23 23L9 81l23-23-32-1V43l32-1L9 19l10-10 23 23z"/></svg>; }

export function ProjectArtwork({ type, variant = false }) {
  if (type === 'orbit') return <div className={`artwork art-orbit ${variant ? 'variant' : ''}`} aria-hidden="true">
    <div className="orbit-wordmark"><span>◒</span> orbit<sup>®</sup></div>
    <div className="orbit-tagline">Good work.<br/>Great flow.</div>
    <div className="dashboard">
      <aside className="dash-side"><b>◒</b><LayoutDashboard/><Folder/><Command/><span className="dash-avatar">W</span></aside>
      <div className="dash-main">
        <div className="dash-nav"><span>Workspace <small>/ Overview</small></span><Search size={10}/><Bell size={10}/><span className="tiny-avatar">A</span></div>
        <div className="dash-welcome"><div><small>MONDAY, SEPTEMBER 21</small><h4>Make space for great work.</h4><p>Here’s where your team is heading today.</p></div><span className="dash-button"><Plus size={9}/> New project</span></div>
        <div className="dash-metrics"><div><small>In progress</small><b>12 <i>↗ 3</i></b><span className="mini-bars">▂▅▃▆▅▇▆█</span></div><div><small>Completed</small><b>38 <i>↗ 12%</i></b><div className="mini-track"><span/></div></div><div className="lime-metric"><small>Team momentum</small><b>Looking good <span>✳</span></b><p>Keep doing your thing.</p></div></div>
        <div className="dash-project-header"><b>Your projects <span>4</span></b><small>View all ↗</small></div>
        {[['Brand refresh', 'Design', '68%', '#bbcce9'], ['Website experience', 'Development', '42%', '#d9d5ef'], ['Something new', 'Strategy', '86%', '#ead4b7']].map(([n,t,p,c],i)=><div className="dash-row" key={n}><span className="project-tile" style={{background:c}}>{['✳','◈','↗'][i]}</span><div><b>{n}</b><small>{t}</small></div><span className="row-track"><i style={{width:p}}/></span><small>{p}</small><span className="avatar-pile">●●●</span><MoreHorizontal size={12}/></div>)}
      </div>
    </div>
    <span className="art-corner">A LITTLE LESS FRICTION.</span><span className="orbit-pill">Find your flow <ArrowUpRight size={12}/></span>
  </div>;
  if (type === 'aura') return <div className={`artwork art-aura ${variant ? 'variant' : ''}`} aria-hidden="true">
    <div className="aura-top"><b>AURA</b><span>DESIGNED FOR YOUR WORLD.</span><span>Sound on. ↗</span></div>
    <div className="aura-copy"><span>THE ART OF LISTENING</span><h3>Feel<br/>everything.</h3><p>A little closer to the music.<br/>A little further from the noise.</p><span className="aura-cta">Discover Aura One <ArrowRight size={13}/></span></div>
    <div className="headphone-shadow"/><div className="headphones"><div className="headphone-band"/><div className="headphone-band-inner"/><div className="ear ear-left"><i/><span/></div><div className="ear ear-right"><i/><span/></div></div>
    <div className="aura-bottom"><span>PURE SOUND. NO DISTRACTIONS.</span><span>01 — 03</span></div>
  </div>;
  if (type === 'forma') return <div className={`artwork art-forma ${variant ? 'variant' : ''}`} aria-hidden="true">
    <div className="forma-top"><b>forma<span>®</span></b><span>ARCHITECTURE<br/>& EVERYDAY LIFE</span><span>Menu ↗</span></div>
    <div className="architecture"><div className="arch-wall"/><div className="arch-opening"><div className="arch-sky"/><div className="arch-step step-one"/><div className="arch-step step-two"/><div className="arch-step step-three"/></div><div className="arch-shadow"/><div className="arch-plinth"/><div className="arch-orb"/><div className="arch-line"/></div>
    <div className="forma-title"><span>SPACES THAT STAY WITH YOU</span><h3>Room to<br/><i>be.</i></h3></div><div className="forma-bottom"><span>Casa Sol — A study in light</span><span>Explore project ↗</span></div>
  </div>;
  return <div className={`artwork art-offgrid ${variant ? 'variant' : ''}`} aria-hidden="true"><div className="offgrid-top"><span>AN INDEPENDENT<br/>CREATIVE GATHERING</span><span>DESIGN. CULTURE.<br/>EVERYTHING IN BETWEEN.</span></div><div className="offgrid-title">OFF<br/><span>GRID</span><sup>®</sup></div><Star className="offgrid-star"/><div className="offgrid-sticker">GOOD<br/>WEIRD.<span>↗</span></div><div className="offgrid-bottom"><span>DIFFERENT MINDS.<br/>ONE ELECTRIC SPACE.</span><b>IDEAS<br/>WITHOUT LIMITS ↗</b></div></div>;
}

export function BrandBoard({ project }) {
  return <div className={`brand-board brand-${project.id}`} style={{'--project-accent': project.color}}><div className="brand-board-top"><span>THE VISUAL LANGUAGE</span><span>{project.name} / 2026</span></div><div className="brand-board-word">{project.id === 'orbit' ? '◒ orbit' : project.id === 'aura' ? 'AURA' : project.id === 'forma' ? 'forma.' : 'OFFGRID®'}</div><div className="brand-board-bottom"><div className="brand-type">Aa<span>{project.id === 'forma' ? 'Considered. Warm. Timeless.' : 'Distinctive by design.'}</span></div><div className="swatches">{project.palette.map(c=><div key={c} style={{background:c}}><span>{c}</span></div>)}</div></div></div>;
}

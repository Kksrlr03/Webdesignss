import React,{useEffect,useRef,useState} from 'react';
import './ParticleFooter.css';
import GoldMesh from './GoldMesh';
export default function ParticleFooter(){
 const canvas=useRef(null),host=useRef(null);
 const [paused,setPaused]=useState(()=>matchMedia('(prefers-reduced-motion: reduce)').matches);
 return <footer className="particle-footer" ref={host}><GoldMesh paused={paused}/><div className="particle-footer-shade"/><div className="gold-footer-cta"><h2>Thoughtful design.<br/>Extraordinary possibilities.</h2><div><a href="mailto:webdesignss.site@gmail.com">START A PROJECT ↗</a><a href="#work">EXPLORE OUR WORK</a></div></div><div className="particle-footer-content"><a className="particle-brand" href="#home"><img className="brand-logo brand-logo-footer" src={`${import.meta.env.BASE_URL}webdesignss-logo.jpeg`} alt="WebDesignss"/></a><div className="particle-footer-links"><a href="mailto:webdesignss.site@gmail.com">Say hello ↗</a><a href="tel:9948429459">Call us ↗</a><a href="#home">Back to top ↑</a><button onClick={()=>setPaused(p=>!p)} aria-pressed={paused}>{paused?'Play waves':'Pause waves'}</button></div></div><div className="particle-footer-note">INDEPENDENT DESIGN. A LITTLE DIFFERENT.<span>© {new Date().getFullYear()} WEBDESIGNSS</span></div></footer>;
}

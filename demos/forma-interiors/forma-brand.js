// Brand-only presentation bridge for the supplied compiled Nuxt export.
// It retains all existing SVG animation nodes, canvases, layouts, and media assets.
(() => {
 const style=document.createElement('style');
 style.textContent='nav button[aria-label="Forma Interiors"] > div[style*="mask"]{mask-image:url(./forma-wordmark.svg)!important;-webkit-mask-image:url(./forma-wordmark.svg)!important}';
 document.head.append(style);
})();
// Pause the three interior scenes while their carousel cards are off screen.
(() => {
 const observed=new WeakSet();
 const io=new IntersectionObserver(entries=>entries.forEach(({target,isIntersecting})=>target.contentWindow?.postMessage({interiorVisible:isIntersecting},location.origin)),{threshold:.05});
 const scan=()=>document.querySelectorAll('iframe[src^="./interior-slide.html"]').forEach(frame=>{if(!observed.has(frame)){observed.add(frame);io.observe(frame);}});
 const start=()=>{new MutationObserver(scan).observe(document.documentElement,{childList:true,subtree:true});scan();};if(document.documentElement)start();else document.addEventListener('DOMContentLoaded',start,{once:true});
})();
// Recolour the decorative printed seals to the architectural green palette.
(() => {const style=document.createElement('style');style.textContent='img[src*="forma-craft-seal"],img[src*="forma-journal-seal"],img[src*="saffron-art"]{filter:grayscale(1) sepia(.35) hue-rotate(65deg) saturate(.7)}';document.head.append(style);})();

// Each rendered marquee tile gets a distinct architectural symbol, including loop copies.
(() => {
 const scan=()=>{document.querySelectorAll('img[src*="./images/symbols"]').forEach((img,i)=>{const src='./images/symbols/item-'+i+'.svg';if(img.getAttribute('src')!==src)img.setAttribute('src',src);img.removeAttribute('srcset');img.alt=["Sofa","Armchair","Chaise","Dining table","Round table","Console","Bed","Bedside cabinet","Wardrobe","Bookshelf","Floor lamp","Table lamp","Pendant light","Chandelier","Wall sconce","Track lights","Arched doorway","Window","Curtains","Staircase","Fireplace","Wall moulding","Room plan","Kitchen island","Range hood","Kitchen cabinets","Bathtub","Washbasin","Shower","Round mirror","Standing mirror","Framed artwork","Gallery wall","Indoor plant","Tall vase","Bowl","Cushion","Woven rug","Rolled textile","Wall tiles","Timber slats","Material fan","Measuring tape","Architectural model"][i]||'Interior detail';img.style.cssText='width:64px;height:64px;max-width:64px;object-fit:contain;transform:none';});};
 const start=()=>{scan();new MutationObserver(scan).observe(document.documentElement,{childList:true,subtree:true});};if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',start,{once:true});else start();
})();
// Social marks are presentation only for this concept site.
(() => {
 const names=new Set(['X','Twitter','Telegram','Discord','GitHub','Medium','YouTube']);
 const scan=()=>document.querySelectorAll('a').forEach(a=>{const label=a.getAttribute('aria-label')||a.getAttribute('title')||a.textContent.trim();if(names.has(label)){a.removeAttribute('href');a.removeAttribute('target');a.setAttribute('aria-disabled','true');a.setAttribute('tabindex','-1');a.style.pointerEvents='none';a.style.cursor='default';if(!a.dataset.decorativeSocial){a.dataset.decorativeSocial='true';a.addEventListener('click',e=>{e.preventDefault();e.stopImmediatePropagation();},true);}}});
 const start=()=>{scan();new MutationObserver(scan).observe(document.documentElement,{subtree:true,childList:true});};if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',start,{once:true});else start();
})();
// This is a standalone Forma concept: legacy destinations are not active features.
(() => {
 const destinations={'interiors':'#home-vaults','journal':'#home-vaults','our process':'#home-audits','faq':'#home-faq','the studio':'#home-governance','our studio':'#home-governance','materials':'#home-audits','design guide':'#home-audits','start your project':'mailto:webdesignss.site@gmail.com','view all':'#home-faq'};
 const blocked=a=>{
  const label=(a.getAttribute('aria-label')||a.textContent||'').trim().toLowerCase();
  const raw=a.getAttribute('href')||'';
  const hash=raw.includes('#')?raw.slice(raw.indexOf('#')):'';
  const destination=destinations[label]||(hash&&document.querySelector(hash)?hash:null);
  if(destination){if(a.getAttribute('href')!==destination)a.setAttribute('href',destination);a.removeAttribute('aria-disabled');a.removeAttribute('tabindex');delete a.dataset.legacyDisabled;a.style.cursor='pointer';return false;}
  return true;
 };
 document.addEventListener('click',e=>{const a=e.target.closest?.('a');if(a&&!blocked(a)){const href=a.getAttribute('href');if(href.startsWith('#')){e.preventDefault();e.stopImmediatePropagation();document.querySelector(href)?.scrollIntoView({behavior:'smooth'});}}},true);
 const disable=a=>{a.dataset.legacyDisabled='true';a.removeAttribute('href');a.removeAttribute('target');a.removeAttribute('download');a.setAttribute('aria-disabled','true');a.setAttribute('tabindex','-1');a.style.cursor='default';};
 const scan=()=>document.querySelectorAll('a').forEach(a=>{if(blocked(a))disable(a);});
 // Capture before Nuxt's router handlers, including keyboard-generated clicks.
 for(const type of ['click','auxclick'])document.addEventListener(type,e=>{const a=e.target.closest?.('a');if(a&&blocked(a)){e.preventDefault();e.stopImmediatePropagation();}},true);
 const start=()=>{scan();new MutationObserver(scan).observe(document.documentElement,{childList:true,subtree:true});};
 if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',start,{once:true});else start();
})();
// Navigation-only labels: leave headings and body copy intact.
(() => {
 const labels={Journal:'Interiors',FAQ:'Our Process','Our Studio':'The Studio','Design Guide':'Materials'};
 const scan=()=>document.querySelectorAll('nav a, nav button, header a').forEach(el=>{
  const old=el.textContent.trim();const next=labels[old]||Object.entries(labels).find(([key])=>key.toUpperCase()===old)?.[1];
  if(!next)return;
  const walker=document.createTreeWalker(el,NodeFilter.SHOW_TEXT);let node;while(node=walker.nextNode()){if(node.textContent.trim().toLowerCase()===old.toLowerCase()){node.textContent=node.textContent.replace(old,next);break;}}
  
 });
 const start=()=>{scan();new MutationObserver(scan).observe(document.documentElement,{childList:true,subtree:true});};if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',start,{once:true});else start();
})();
// Keep one footer menu per responsive layout instead of three duplicate columns.
(() => {
 const scan=()=>{
  const headings=[...document.querySelectorAll('span')].filter(e=>e.textContent.trim()==='Menu'&&e.classList.contains('tracking-wider'));
  const desktop=headings.filter(e=>e.parentElement.tagName!=='BUTTON');
  const mobile=headings.filter(e=>e.parentElement.tagName==='BUTTON');
  for(const group of [desktop,mobile])group.forEach((heading,i)=>{
   const block=heading.parentElement.tagName==='BUTTON'?heading.parentElement.parentElement:heading.parentElement;
   if(i>0){block.style.display='none';block.setAttribute('aria-hidden','true');return;}
   const labels={Journal:'Interiors',FAQ:'Our Process','Our Studio':'The Studio','Design Guide':'Materials',Brand:'Forma Identity'};
   block.querySelectorAll('a').forEach(a=>{const next=labels[a.textContent.trim()];if(next)a.textContent=next;});
  });
 };
 const start=()=>{scan();new MutationObserver(scan).observe(document.documentElement,{childList:true,subtree:true});};if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',start,{once:true});else start();
})();

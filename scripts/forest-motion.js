/* Animated photographic environment. Motion stays inside the background texture,
   so it never distorts the bird, typography, or interactive controls. */
window.setupForestBackground = function(api, CanvasTexture, colorSpace, baseURL) {
  const img = new Image();
  img.src = new URL('assets/scene/forest-flight.png', baseURL).href;
  img.onload = () => {
    const source = document.createElement('canvas'), output = document.createElement('canvas');
    source.width = output.width = 1440; source.height = output.height = 900;
    const ctx = source.getContext('2d'), draw = output.getContext('2d');
    const texture = new CanvasTexture(output); texture.colorSpace = colorSpace; texture.generateMipmaps=false;
    const reduced = matchMedia('(prefers-reduced-motion: reduce)');
    let dirty = true, last = 0, elapsed = 0;
    const smooth = v => {v=Math.max(0,Math.min(1,v));return v*v*(3-2*v);};
    // Filter the photograph just twice, never during a scroll frame.
    const plates = [0,1].map(dim => {
      const plate=document.createElement('canvas');plate.width=source.width;plate.height=source.height;
      const c=plate.getContext('2d'),w=plate.width,h=plate.height;
      const scale=Math.max(w/img.width,h/img.height)*1.08;
      c.filter=`blur(${1+dim*6}px) saturate(${.85-dim*.2}) brightness(${.94-dim*.26})`;
      c.drawImage(img,(w-img.width*scale)/2,(h-img.height*scale)/2,img.width*scale,img.height*scale);
      c.filter='none';
      const shade=c.createRadialGradient(w*.5,h*.48,60,w*.5,h*.48,w*.65);
      shade.addColorStop(0,`rgba(36,52,61,${.18+dim*.42})`);shade.addColorStop(.58,'rgba(27,42,43,.28)');shade.addColorStop(1,'rgba(12,24,26,.18)');
      c.fillStyle=shade;c.fillRect(0,0,w,h);return plate;
    });
    let previousDim=-1;
    function paintBase(dim) {
      if(Math.abs(dim-previousDim)<.004){dirty=false;return false;}
      ctx.globalAlpha=1;ctx.drawImage(plates[0],0,0);
      ctx.globalAlpha=dim;ctx.drawImage(plates[1],0,0);ctx.globalAlpha=1;
      previousDim=dim;dirty=false;return true;
    }
    function animate(now) {
      requestAnimationFrame(animate);
      if(document.hidden || now-last<1000/24)return;
      const dt=Math.min((now-last)/1000,.08);last=now;
      const progress=scrollY/Math.max(1,document.documentElement.scrollHeight-innerHeight);
      const strength=Math.max(1-smooth(scrollY/innerHeight),smooth((progress-.84)/.14));
      if(!dirty && (reduced.matches || strength<.01))return;
      const dim=Math.min(1,scrollY/innerHeight)*(1-smooth((progress-.86)/.12));
      const changed=dirty?paintBase(dim):false;
      if(!changed && (reduced.matches || strength<.01))return;
      elapsed+=dt;
      const w=output.width,h=output.height,t=elapsed;
      draw.clearRect(0,0,w,h); draw.drawImage(source,0,0);
      if(!reduced.matches && strength>.01) {
        // Refraction is restricted to the river, leaving rocks and trees stable.
        const riverTop=Math.floor(h*.87);
        for(let y=riverTop;y<h;y+=2) {
          const depth=(y-riverTop)/(h-riverTop);
          const wave=(Math.sin(y*.12-t*1.25)*2.2+Math.sin(y*.045+t*.73)*1.4)*depth*strength;
          draw.drawImage(source,0,y,w,2,wave,y,w,2);
        }
        // Feathered leaf motion along the upper canopy and outer forest edges.
        draw.save();
        const breeze=Math.sin(t*.52)*1.4+Math.sin(t*.93)*.45;
        for(let y=0;y<h*.67;y+=6){
          const upper=1-y/(h*.67),gust=Math.sin(y*.026+t*.62)*.8;
          const shift=(breeze*upper+gust*upper)*strength;
          draw.globalAlpha=.27*upper;
          draw.drawImage(source,0,y,w,6,shift,y,w,6);
        }
        draw.restore();
        // Slowly passing atmospheric haze; no particles or artificial neon.
        draw.save();draw.globalAlpha=.045*strength;
        const mist=draw.createRadialGradient(w*(.55+Math.sin(t*.055)*.08),h*.55,0,w*.57,h*.55,w*.42);
        mist.addColorStop(0,'#d4e2d6');mist.addColorStop(1,'transparent');draw.fillStyle=mist;draw.fillRect(0,0,w,h);draw.restore();
        // Fine reflected glints travel with the current at the bottom of frame.
        draw.save();draw.globalCompositeOperation='screen';
        for(let i=0;i<15;i++){
          const y=riverTop+12+i*7;
          const x=w*.62+Math.sin(i*2.3+t*.36)*w*.09;
          draw.globalAlpha=(.018+.018*Math.sin(t*.8+i)**2)*strength;
          const glint=draw.createLinearGradient(x-50,y,x+50,y);glint.addColorStop(0,'transparent');glint.addColorStop(.5,'#f5deb4');glint.addColorStop(1,'transparent');draw.fillStyle=glint;draw.fillRect(x-50,y,100,1);
        }draw.restore();
      }
      texture.needsUpdate=true;
      const scene=api.getActiveScene?.();if(scene && scene.background!==texture)scene.background=texture;
    }
    api.getAllObjects?.().forEach(o=>{if(o.isScene)o.background=texture;});
    for(const id of ['afb5c7e3-4034-4bb6-8bb0-5be57b222c50','d3d2a9b8-8dbb-4a2c-9d3a-0ddb0a8dc172','079b3aa5-e6d0-410c-8917-dd0d93af7fc8','adfdabbb-4356-41e3-aea2-4c6f8b57e049']){const material=api.getMaterial(id);if(material)material.visible=false;}
    addEventListener('scroll',()=>dirty=true,{passive:true});addEventListener('resize',()=>dirty=true,{passive:true});reduced.addEventListener('change',()=>dirty=true);document.addEventListener('visibilitychange',()=>{dirty=true;last=performance.now();});
    draw.drawImage(plates[0],0,0);texture.needsUpdate=true;
    const initialScene=api.getActiveScene?.();if(initialScene)initialScene.background=texture;
    requestAnimationFrame(animate);
  };
};

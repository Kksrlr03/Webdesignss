(()=>{var yh=0,oc=1,vh=2;var ls=1,_h=2,bi=3,Rn=0,Ht=1,Kt=2,In=0,mi=1,cc=2,lc=3,hc=4,Mh=5;var Ia=100,Sh=101,wh=102,Ah=103,Eh=104,Th=200,Rh=201,Ih=202,Ch=203,dc=204,fc=205,Nh=206,Ph=207,kh=208,Dh=209,Fh=210,Uh=211,Lh=212,Oh=213,Bh=214,$s=0,er=1,tr=2,Qa=3,nr=4,ar=5,ir=6,sr=7,uc=0,zh=1,Hh=2,gn=0,pc=1,bc=2,mc=3,hs=4,gc=5,xc=6,yc=7,Qo="attached",jh="detached",vc=300,la=301,Ca=302,Ar=303,Er=304,ds=306,sa=1e3,an=1001,$a=1002,bt=1003,Tr=1004;var Na=1005;var mt=1006,gi=1007;var xn=1008;var Jt=1009,_c=1010,Mc=1011,xi=1012,Rr=1013,yn=1014,$t=1015,vn=1016,Ir=1017,Cr=1018,yi=1020,Sc=35902,wc=35899,Ac=1021,Ec=1022,en=1023,An=1026,ha=1027,Nr=1028,Pr=1029,da=1030,kr=1031;var Dr=1033,fs=33776,us=33777,ps=33778,bs=33779,Fr=35840,Ur=35841,Lr=35842,Or=35843,Br=36196,zr=37492,Hr=37496,jr=37488,Gr=37489,ms=37490,Vr=37491,Wr=37808,Xr=37809,qr=37810,Kr=37811,Jr=37812,Yr=37813,Zr=37814,Qr=37815,$r=37816,eo=37817,to=37818,no=37819,ao=37820,io=37821,so=36492,ro=36494,oo=36495,co=36283,lo=36284,gs=36285,ho=36286,Gh=2200,Vh=2201,Wh=2202,_a=2300,Ma=2301,Ys=2302,$o=2303,xa=2400,ya=2401,Ui=2402,fo=2500,Xh=2501,Tc=0,xs=1,vi=2,qh=3200;var uo=0,Kh=1,Kn="",ft="srgb",Bt="srgb-linear",Li="linear",Qe="srgb";var Zs=7680;var Jh=519,Yh=512,Zh=513,Qh=514,po=515,$h=516,ed=517,bo=518,td=519,Rc=35044;var Ic="300 es",fn=2e3,ei=2001;function af(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function sf(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function ti(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function nd(){let i=ti("canvas");return i.style.display="block",i}var Ul={},ni=null;function Oi(...i){let e="THREE."+i.shift();ni?ni("log",e,...i):console.log(e,...i)}function ad(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function we(...i){i=ad(i);let e="THREE."+i.shift();if(ni)ni("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function Ce(...i){i=ad(i);let e="THREE."+i.shift();if(ni)ni("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function va(...i){let e=i.join(" ");e in Ul||(Ul[e]=!0,we(...i))}function id(i,e,t){return new Promise(function(n,a){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:a();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}var sd={[$s]:er,[tr]:ir,[nr]:sr,[Qa]:ar,[er]:$s,[ir]:tr,[sr]:nr,[ar]:Qa},bn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let a=n[e];if(a!==void 0){let s=a.indexOf(t);s!==-1&&a.splice(s,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let a=n.slice(0);for(let s=0,r=a.length;s<r;s++)a[s].call(this,e);e.target=null}}},Nt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ll=1234567,Di=Math.PI/180,Sa=180/Math.PI;function pn(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Nt[i&255]+Nt[i>>8&255]+Nt[i>>16&255]+Nt[i>>24&255]+"-"+Nt[e&255]+Nt[e>>8&255]+"-"+Nt[e>>16&15|64]+Nt[e>>24&255]+"-"+Nt[t&63|128]+Nt[t>>8&255]+"-"+Nt[t>>16&255]+Nt[t>>24&255]+Nt[n&255]+Nt[n>>8&255]+Nt[n>>16&255]+Nt[n>>24&255]).toLowerCase()}function Ve(i,e,t){return Math.max(e,Math.min(t,i))}function Cc(i,e){return(i%e+e)%e}function rf(i,e,t,n,a){return n+(i-e)*(a-n)/(t-e)}function of(i,e,t){return i!==e?(t-i)/(e-i):0}function Fi(i,e,t){return(1-t)*i+t*e}function cf(i,e,t,n){return Fi(i,e,1-Math.exp(-t*n))}function lf(i,e=1){return e-Math.abs(Cc(i,e*2)-e)}function hf(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function df(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function ff(i,e){return i+Math.floor(Math.random()*(e-i+1))}function uf(i,e){return i+Math.random()*(e-i)}function pf(i){return i*(.5-Math.random())}function bf(i){i!==void 0&&(Ll=i);let e=Ll+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function mf(i){return i*Di}function gf(i){return i*Sa}function xf(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function yf(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function vf(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function _f(i,e,t,n,a){let s=Math.cos,r=Math.sin,o=s(t/2),l=r(t/2),c=s((e+n)/2),h=r((e+n)/2),d=s((e-n)/2),f=r((e-n)/2),p=s((n-e)/2),m=r((n-e)/2);switch(a){case"XYX":i.set(o*h,l*d,l*f,o*c);break;case"YZY":i.set(l*f,o*h,l*d,o*c);break;case"ZXZ":i.set(l*d,l*f,o*h,o*c);break;case"XZX":i.set(o*h,l*m,l*p,o*c);break;case"YXY":i.set(l*p,o*h,l*m,o*c);break;case"ZYZ":i.set(l*m,l*p,o*h,o*c);break;default:we("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+a)}}function dn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function et(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Nc={DEG2RAD:Di,RAD2DEG:Sa,generateUUID:pn,clamp:Ve,euclideanModulo:Cc,mapLinear:rf,inverseLerp:of,lerp:Fi,damp:cf,pingpong:lf,smoothstep:hf,smootherstep:df,randInt:ff,randFloat:uf,randFloatSpread:pf,seededRandom:bf,degToRad:mf,radToDeg:gf,isPowerOfTwo:xf,ceilPowerOfTwo:yf,floorPowerOfTwo:vf,setQuaternionFromProperEuler:_f,normalize:et,denormalize:dn},Be=class i{static{i.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,a=e.elements;return this.x=a[0]*t+a[3]*n+a[6],this.y=a[1]*t+a[4]*n+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ve(this.x,e.x,t.x),this.y=Ve(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ve(this.x,e,t),this.y=Ve(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ve(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Ve(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),a=Math.sin(t),s=this.x-e.x,r=this.y-e.y;return this.x=s*n-r*a+e.x,this.y=s*a+r*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},kt=class{constructor(e=0,t=0,n=0,a=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=a}static slerpFlat(e,t,n,a,s,r,o){let l=n[a+0],c=n[a+1],h=n[a+2],d=n[a+3],f=s[r+0],p=s[r+1],m=s[r+2],y=s[r+3];if(d!==y||l!==f||c!==p||h!==m){let b=l*f+c*p+h*m+d*y;b<0&&(f=-f,p=-p,m=-m,y=-y,b=-b);let u=1-o;if(b<.9995){let g=Math.acos(b),S=Math.sin(g);u=Math.sin(u*g)/S,o=Math.sin(o*g)/S,l=l*u+f*o,c=c*u+p*o,h=h*u+m*o,d=d*u+y*o}else{l=l*u+f*o,c=c*u+p*o,h=h*u+m*o,d=d*u+y*o;let g=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=g,c*=g,h*=g,d*=g}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,a,s,r){let o=n[a],l=n[a+1],c=n[a+2],h=n[a+3],d=s[r],f=s[r+1],p=s[r+2],m=s[r+3];return e[t]=o*m+h*d+l*p-c*f,e[t+1]=l*m+h*f+c*d-o*p,e[t+2]=c*m+h*p+o*f-l*d,e[t+3]=h*m-o*d-l*f-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,a){return this._x=e,this._y=t,this._z=n,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,a=e._y,s=e._z,r=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(a/2),d=o(s/2),f=l(n/2),p=l(a/2),m=l(s/2);switch(r){case"XYZ":this._x=f*h*d+c*p*m,this._y=c*p*d-f*h*m,this._z=c*h*m+f*p*d,this._w=c*h*d-f*p*m;break;case"YXZ":this._x=f*h*d+c*p*m,this._y=c*p*d-f*h*m,this._z=c*h*m-f*p*d,this._w=c*h*d+f*p*m;break;case"ZXY":this._x=f*h*d-c*p*m,this._y=c*p*d+f*h*m,this._z=c*h*m+f*p*d,this._w=c*h*d-f*p*m;break;case"ZYX":this._x=f*h*d-c*p*m,this._y=c*p*d+f*h*m,this._z=c*h*m-f*p*d,this._w=c*h*d+f*p*m;break;case"YZX":this._x=f*h*d+c*p*m,this._y=c*p*d+f*h*m,this._z=c*h*m-f*p*d,this._w=c*h*d-f*p*m;break;case"XZY":this._x=f*h*d-c*p*m,this._y=c*p*d-f*h*m,this._z=c*h*m+f*p*d,this._w=c*h*d+f*p*m;break;default:we("Quaternion: .setFromEuler() encountered an unknown order: "+r)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,a=Math.sin(n);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],a=t[4],s=t[8],r=t[1],o=t[5],l=t[9],c=t[2],h=t[6],d=t[10],f=n+o+d;if(f>0){let p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(h-l)*p,this._y=(s-c)*p,this._z=(r-a)*p}else if(n>o&&n>d){let p=2*Math.sqrt(1+n-o-d);this._w=(h-l)/p,this._x=.25*p,this._y=(a+r)/p,this._z=(s+c)/p}else if(o>d){let p=2*Math.sqrt(1+o-n-d);this._w=(s-c)/p,this._x=(a+r)/p,this._y=.25*p,this._z=(l+h)/p}else{let p=2*Math.sqrt(1+d-n-o);this._w=(r-a)/p,this._x=(s+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ve(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let a=Math.min(1,t/n);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,a=e._y,s=e._z,r=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+r*o+a*c-s*l,this._y=a*h+r*l+s*o-n*c,this._z=s*h+r*c+n*l-a*o,this._w=r*h-n*o-a*l-s*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,a=e._y,s=e._z,r=e._w,o=this.dot(e);o<0&&(n=-n,a=-a,s=-s,r=-r,o=-o);let l=1-t;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+n*t,this._y=this._y*l+a*t,this._z=this._z*l+s*t,this._w=this._w*l+r*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+a*t,this._z=this._z*l+s*t,this._w=this._w*l+r*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),a=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(a*Math.sin(e),a*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},O=class i{static{i.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ol.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ol.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,a=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*a,this.y=s[1]*t+s[4]*n+s[7]*a,this.z=s[2]*t+s[5]*n+s[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,a=this.z,s=e.elements,r=1/(s[3]*t+s[7]*n+s[11]*a+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*a+s[12])*r,this.y=(s[1]*t+s[5]*n+s[9]*a+s[13])*r,this.z=(s[2]*t+s[6]*n+s[10]*a+s[14])*r,this}applyQuaternion(e){let t=this.x,n=this.y,a=this.z,s=e.x,r=e.y,o=e.z,l=e.w,c=2*(r*a-o*n),h=2*(o*t-s*a),d=2*(s*n-r*t);return this.x=t+l*c+r*d-o*h,this.y=n+l*h+o*c-s*d,this.z=a+l*d+s*h-r*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,a=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*a,this.y=s[1]*t+s[5]*n+s[9]*a,this.z=s[2]*t+s[6]*n+s[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ve(this.x,e.x,t.x),this.y=Ve(this.y,e.y,t.y),this.z=Ve(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ve(this.x,e,t),this.y=Ve(this.y,e,t),this.z=Ve(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ve(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,a=e.y,s=e.z,r=t.x,o=t.y,l=t.z;return this.x=a*l-s*o,this.y=s*r-n*l,this.z=n*o-a*r,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ro.copy(this).projectOnVector(e),this.sub(Ro)}reflect(e){return this.sub(Ro.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Ve(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,a=this.z-e.z;return t*t+n*n+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let a=Math.sin(t)*e;return this.x=a*Math.sin(n),this.y=Math.cos(t)*e,this.z=a*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=a,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Ro=new O,Ol=new kt,Ne=class i{static{i.prototype.isMatrix3=!0}constructor(e,t,n,a,s,r,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,a,s,r,o,l,c)}set(e,t,n,a,s,r,o,l,c){let h=this.elements;return h[0]=e,h[1]=a,h[2]=o,h[3]=t,h[4]=s,h[5]=l,h[6]=n,h[7]=r,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,a=t.elements,s=this.elements,r=n[0],o=n[3],l=n[6],c=n[1],h=n[4],d=n[7],f=n[2],p=n[5],m=n[8],y=a[0],b=a[3],u=a[6],g=a[1],S=a[4],x=a[7],M=a[2],w=a[5],T=a[8];return s[0]=r*y+o*g+l*M,s[3]=r*b+o*S+l*w,s[6]=r*u+o*x+l*T,s[1]=c*y+h*g+d*M,s[4]=c*b+h*S+d*w,s[7]=c*u+h*x+d*T,s[2]=f*y+p*g+m*M,s[5]=f*b+p*S+m*w,s[8]=f*u+p*x+m*T,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],a=e[2],s=e[3],r=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*r*h-t*o*c-n*s*h+n*o*l+a*s*c-a*r*l}invert(){let e=this.elements,t=e[0],n=e[1],a=e[2],s=e[3],r=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=h*r-o*c,f=o*l-h*s,p=c*s-r*l,m=t*d+n*f+a*p;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/m;return e[0]=d*y,e[1]=(a*c-h*n)*y,e[2]=(o*n-a*r)*y,e[3]=f*y,e[4]=(h*t-a*l)*y,e[5]=(a*s-o*t)*y,e[6]=p*y,e[7]=(n*l-c*t)*y,e[8]=(r*t-n*s)*y,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,a,s,r,o){let l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*r+c*o)+r+e,-a*c,a*l,-a*(-c*r+l*o)+o+t,0,0,1),this}scale(e,t){return va("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Io.makeScale(e,t)),this}rotate(e){return va("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Io.makeRotation(-e)),this}translate(e,t){return va("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Io.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let a=0;a<9;a++)if(t[a]!==n[a])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Io=new Ne,Bl=new Ne().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),zl=new Ne().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Mf(){let i={enabled:!0,workingColorSpace:Bt,spaces:{},convert:function(a,s,r){return this.enabled===!1||s===r||!s||!r||(this.spaces[s].transfer===Qe&&(a.r=Bn(a.r),a.g=Bn(a.g),a.b=Bn(a.b)),this.spaces[s].primaries!==this.spaces[r].primaries&&(a.applyMatrix3(this.spaces[s].toXYZ),a.applyMatrix3(this.spaces[r].fromXYZ)),this.spaces[r].transfer===Qe&&(a.r=Za(a.r),a.g=Za(a.g),a.b=Za(a.b))),a},workingToColorSpace:function(a,s){return this.convert(a,this.workingColorSpace,s)},colorSpaceToWorking:function(a,s){return this.convert(a,s,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===Kn?Li:this.spaces[a].transfer},getToneMappingMode:function(a){return this.spaces[a].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(a,s=this.workingColorSpace){return a.fromArray(this.spaces[s].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,s,r){return a.copy(this.spaces[s].toXYZ).multiply(this.spaces[r].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(a,s){return va("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(a,s)},toWorkingColorSpace:function(a,s){return va("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(a,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Bt]:{primaries:e,whitePoint:n,transfer:Li,toXYZ:Bl,fromXYZ:zl,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:ft},outputColorSpaceConfig:{drawingBufferColorSpace:ft}},[ft]:{primaries:e,whitePoint:n,transfer:Qe,toXYZ:Bl,fromXYZ:zl,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:ft}}}),i}var Oe=Mf();function Bn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Za(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var La,rr=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{La===void 0&&(La=ti("canvas")),La.width=e.width,La.height=e.height;let a=La.getContext("2d");e instanceof ImageData?a.putImageData(e,0,0):a.drawImage(e,0,0,e.width,e.height),n=La}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=ti("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let a=n.getImageData(0,0,e.width,e.height),s=a.data;for(let r=0;r<s.length;r++)s[r]=Bn(s[r]/255)*255;return n.putImageData(a,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Bn(t[n]/255)*255):t[n]=Bn(t[n]);return{data:t,width:e.width,height:e.height}}else return we("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Sf=0,ai=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Sf++}),this.uuid=pn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},a=this.data;if(a!==null){let s;if(Array.isArray(a)){s=[];for(let r=0,o=a.length;r<o;r++)a[r].isDataTexture?s.push(Co(a[r].image)):s.push(Co(a[r]))}else s=Co(a);n.url=s}return t||(e.images[this.uuid]=n),n}};function Co(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?rr.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(we("Texture: Unable to serialize Texture."),{})}var wf=0,No=new O,St=class i extends bn{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=an,a=an,s=mt,r=xn,o=en,l=Jt,c=i.DEFAULT_ANISOTROPY,h=Kn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:wf++}),this.uuid=pn(),this.name="",this.source=new ai(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=a,this.magFilter=s,this.minFilter=r,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Be(0,0),this.repeat=new Be(1,1),this.center=new Be(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ne,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(No).x}get height(){return this.source.getSize(No).y}get depth(){return this.source.getSize(No).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){we(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let a=this[t];if(a===void 0){we(`Texture.setValues(): property '${t}' does not exist.`);continue}a&&n&&a.isVector2&&n.isVector2||a&&n&&a.isVector3&&n.isVector3||a&&n&&a.isMatrix3&&n.isMatrix3?a.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==vc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case sa:e.x=e.x-Math.floor(e.x);break;case an:e.x=e.x<0?0:1;break;case $a:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case sa:e.y=e.y-Math.floor(e.y);break;case an:e.y=e.y<0?0:1;break;case $a:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};St.DEFAULT_IMAGE=null;St.DEFAULT_MAPPING=vc;St.DEFAULT_ANISOTROPY=1;var tt=class i{static{i.prototype.isVector4=!0}constructor(e=0,t=0,n=0,a=1){this.x=e,this.y=t,this.z=n,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,a){return this.x=e,this.y=t,this.z=n,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,a=this.z,s=this.w,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*a+r[12]*s,this.y=r[1]*t+r[5]*n+r[9]*a+r[13]*s,this.z=r[2]*t+r[6]*n+r[10]*a+r[14]*s,this.w=r[3]*t+r[7]*n+r[11]*a+r[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,a,s,l=e.elements,c=l[0],h=l[4],d=l[8],f=l[1],p=l[5],m=l[9],y=l[2],b=l[6],u=l[10];if(Math.abs(h-f)<.01&&Math.abs(d-y)<.01&&Math.abs(m-b)<.01){if(Math.abs(h+f)<.1&&Math.abs(d+y)<.1&&Math.abs(m+b)<.1&&Math.abs(c+p+u-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let S=(c+1)/2,x=(p+1)/2,M=(u+1)/2,w=(h+f)/4,T=(d+y)/4,v=(m+b)/4;return S>x&&S>M?S<.01?(n=0,a=.707106781,s=.707106781):(n=Math.sqrt(S),a=w/n,s=T/n):x>M?x<.01?(n=.707106781,a=0,s=.707106781):(a=Math.sqrt(x),n=w/a,s=v/a):M<.01?(n=.707106781,a=.707106781,s=0):(s=Math.sqrt(M),n=T/s,a=v/s),this.set(n,a,s,t),this}let g=Math.sqrt((b-m)*(b-m)+(d-y)*(d-y)+(f-h)*(f-h));return Math.abs(g)<.001&&(g=1),this.x=(b-m)/g,this.y=(d-y)/g,this.z=(f-h)/g,this.w=Math.acos((c+p+u-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ve(this.x,e.x,t.x),this.y=Ve(this.y,e.y,t.y),this.z=Ve(this.z,e.z,t.z),this.w=Ve(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ve(this.x,e,t),this.y=Ve(this.y,e,t),this.z=Ve(this.z,e,t),this.w=Ve(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ve(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},or=class extends bn{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:mt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new tt(0,0,e,t),this.scissorTest=!1,this.viewport=new tt(0,0,e,t),this.textures=[];let a={width:e,height:t,depth:n.depth},s=new St(a),r=n.count;for(let o=0;o<r;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:mt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let a=0,s=this.textures.length;a<s;a++)this.textures[a].image.width=e,this.textures[a].image.height=t,this.textures[a].image.depth=n,this.textures[a].isData3DTexture!==!0&&(this.textures[a].isArrayTexture=this.textures[a].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let a=Object.assign({},e.textures[t].image);this.textures[t].source=new ai(a)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Gt=class extends or{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Bi=class extends St{constructor(e=null,t=1,n=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:a},this.magFilter=bt,this.minFilter=bt,this.wrapR=an,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var cr=class extends St{constructor(e=null,t=1,n=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:a},this.magFilter=bt,this.minFilter=bt,this.wrapR=an,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var De=class i{static{i.prototype.isMatrix4=!0}constructor(e,t,n,a,s,r,o,l,c,h,d,f,p,m,y,b){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,a,s,r,o,l,c,h,d,f,p,m,y,b)}set(e,t,n,a,s,r,o,l,c,h,d,f,p,m,y,b){let u=this.elements;return u[0]=e,u[4]=t,u[8]=n,u[12]=a,u[1]=s,u[5]=r,u[9]=o,u[13]=l,u[2]=c,u[6]=h,u[10]=d,u[14]=f,u[3]=p,u[7]=m,u[11]=y,u[15]=b,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,a=1/Oa.setFromMatrixColumn(e,0).length(),s=1/Oa.setFromMatrixColumn(e,1).length(),r=1/Oa.setFromMatrixColumn(e,2).length();return t[0]=n[0]*a,t[1]=n[1]*a,t[2]=n[2]*a,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*r,t[9]=n[9]*r,t[10]=n[10]*r,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,a=e.y,s=e.z,r=Math.cos(n),o=Math.sin(n),l=Math.cos(a),c=Math.sin(a),h=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){let f=r*h,p=r*d,m=o*h,y=o*d;t[0]=l*h,t[4]=-l*d,t[8]=c,t[1]=p+m*c,t[5]=f-y*c,t[9]=-o*l,t[2]=y-f*c,t[6]=m+p*c,t[10]=r*l}else if(e.order==="YXZ"){let f=l*h,p=l*d,m=c*h,y=c*d;t[0]=f+y*o,t[4]=m*o-p,t[8]=r*c,t[1]=r*d,t[5]=r*h,t[9]=-o,t[2]=p*o-m,t[6]=y+f*o,t[10]=r*l}else if(e.order==="ZXY"){let f=l*h,p=l*d,m=c*h,y=c*d;t[0]=f-y*o,t[4]=-r*d,t[8]=m+p*o,t[1]=p+m*o,t[5]=r*h,t[9]=y-f*o,t[2]=-r*c,t[6]=o,t[10]=r*l}else if(e.order==="ZYX"){let f=r*h,p=r*d,m=o*h,y=o*d;t[0]=l*h,t[4]=m*c-p,t[8]=f*c+y,t[1]=l*d,t[5]=y*c+f,t[9]=p*c-m,t[2]=-c,t[6]=o*l,t[10]=r*l}else if(e.order==="YZX"){let f=r*l,p=r*c,m=o*l,y=o*c;t[0]=l*h,t[4]=y-f*d,t[8]=m*d+p,t[1]=d,t[5]=r*h,t[9]=-o*h,t[2]=-c*h,t[6]=p*d+m,t[10]=f-y*d}else if(e.order==="XZY"){let f=r*l,p=r*c,m=o*l,y=o*c;t[0]=l*h,t[4]=-d,t[8]=c*h,t[1]=f*d+y,t[5]=r*h,t[9]=p*d-m,t[2]=m*d-p,t[6]=o*h,t[10]=y*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Af,e,Ef)}lookAt(e,t,n){let a=this.elements;return Yt.subVectors(e,t),Yt.lengthSq()===0&&(Yt.z=1),Yt.normalize(),Qn.crossVectors(n,Yt),Qn.lengthSq()===0&&(Math.abs(n.z)===1?Yt.x+=1e-4:Yt.z+=1e-4,Yt.normalize(),Qn.crossVectors(n,Yt)),Qn.normalize(),As.crossVectors(Yt,Qn),a[0]=Qn.x,a[4]=As.x,a[8]=Yt.x,a[1]=Qn.y,a[5]=As.y,a[9]=Yt.y,a[2]=Qn.z,a[6]=As.z,a[10]=Yt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,a=t.elements,s=this.elements,r=n[0],o=n[4],l=n[8],c=n[12],h=n[1],d=n[5],f=n[9],p=n[13],m=n[2],y=n[6],b=n[10],u=n[14],g=n[3],S=n[7],x=n[11],M=n[15],w=a[0],T=a[4],v=a[8],E=a[12],I=a[1],C=a[5],N=a[9],L=a[13],P=a[2],F=a[6],z=a[10],G=a[14],Z=a[3],V=a[7],K=a[11],ee=a[15];return s[0]=r*w+o*I+l*P+c*Z,s[4]=r*T+o*C+l*F+c*V,s[8]=r*v+o*N+l*z+c*K,s[12]=r*E+o*L+l*G+c*ee,s[1]=h*w+d*I+f*P+p*Z,s[5]=h*T+d*C+f*F+p*V,s[9]=h*v+d*N+f*z+p*K,s[13]=h*E+d*L+f*G+p*ee,s[2]=m*w+y*I+b*P+u*Z,s[6]=m*T+y*C+b*F+u*V,s[10]=m*v+y*N+b*z+u*K,s[14]=m*E+y*L+b*G+u*ee,s[3]=g*w+S*I+x*P+M*Z,s[7]=g*T+S*C+x*F+M*V,s[11]=g*v+S*N+x*z+M*K,s[15]=g*E+S*L+x*G+M*ee,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],a=e[8],s=e[12],r=e[1],o=e[5],l=e[9],c=e[13],h=e[2],d=e[6],f=e[10],p=e[14],m=e[3],y=e[7],b=e[11],u=e[15],g=l*p-c*f,S=o*p-c*d,x=o*f-l*d,M=r*p-c*h,w=r*f-l*h,T=r*d-o*h;return t*(y*g-b*S+u*x)-n*(m*g-b*M+u*w)+a*(m*S-y*M+u*T)-s*(m*x-y*w+b*T)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],a=e[8],s=e[1],r=e[5],o=e[9],l=e[2],c=e[6],h=e[10];return t*(r*h-o*c)-n*(s*h-o*l)+a*(s*c-r*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=t,a[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],a=e[2],s=e[3],r=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=e[9],f=e[10],p=e[11],m=e[12],y=e[13],b=e[14],u=e[15],g=t*o-n*r,S=t*l-a*r,x=t*c-s*r,M=n*l-a*o,w=n*c-s*o,T=a*c-s*l,v=h*y-d*m,E=h*b-f*m,I=h*u-p*m,C=d*b-f*y,N=d*u-p*y,L=f*u-p*b,P=g*L-S*N+x*C+M*I-w*E+T*v;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let F=1/P;return e[0]=(o*L-l*N+c*C)*F,e[1]=(a*N-n*L-s*C)*F,e[2]=(y*T-b*w+u*M)*F,e[3]=(f*w-d*T-p*M)*F,e[4]=(l*I-r*L-c*E)*F,e[5]=(t*L-a*I+s*E)*F,e[6]=(b*x-m*T-u*S)*F,e[7]=(h*T-f*x+p*S)*F,e[8]=(r*N-o*I+c*v)*F,e[9]=(n*I-t*N-s*v)*F,e[10]=(m*w-y*x+u*g)*F,e[11]=(d*x-h*w-p*g)*F,e[12]=(o*E-r*C-l*v)*F,e[13]=(t*C-n*E+a*v)*F,e[14]=(y*S-m*M-b*g)*F,e[15]=(h*M-d*S+f*g)*F,this}scale(e){let t=this.elements,n=e.x,a=e.y,s=e.z;return t[0]*=n,t[4]*=a,t[8]*=s,t[1]*=n,t[5]*=a,t[9]*=s,t[2]*=n,t[6]*=a,t[10]*=s,t[3]*=n,t[7]*=a,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,a))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),a=Math.sin(t),s=1-n,r=e.x,o=e.y,l=e.z,c=s*r,h=s*o;return this.set(c*r+n,c*o-a*l,c*l+a*o,0,c*o+a*l,h*o+n,h*l-a*r,0,c*l-a*o,h*l+a*r,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,a,s,r){return this.set(1,n,s,0,e,1,r,0,t,a,1,0,0,0,0,1),this}compose(e,t,n){let a=this.elements,s=t._x,r=t._y,o=t._z,l=t._w,c=s+s,h=r+r,d=o+o,f=s*c,p=s*h,m=s*d,y=r*h,b=r*d,u=o*d,g=l*c,S=l*h,x=l*d,M=n.x,w=n.y,T=n.z;return a[0]=(1-(y+u))*M,a[1]=(p+x)*M,a[2]=(m-S)*M,a[3]=0,a[4]=(p-x)*w,a[5]=(1-(f+u))*w,a[6]=(b+g)*w,a[7]=0,a[8]=(m+S)*T,a[9]=(b-g)*T,a[10]=(1-(f+y))*T,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,t,n){let a=this.elements;e.x=a[12],e.y=a[13],e.z=a[14];let s=this.determinantAffine();if(s===0)return n.set(1,1,1),t.identity(),this;let r=Oa.set(a[0],a[1],a[2]).length(),o=Oa.set(a[4],a[5],a[6]).length(),l=Oa.set(a[8],a[9],a[10]).length();s<0&&(r=-r),on.copy(this);let c=1/r,h=1/o,d=1/l;return on.elements[0]*=c,on.elements[1]*=c,on.elements[2]*=c,on.elements[4]*=h,on.elements[5]*=h,on.elements[6]*=h,on.elements[8]*=d,on.elements[9]*=d,on.elements[10]*=d,t.setFromRotationMatrix(on),n.x=r,n.y=o,n.z=l,this}makePerspective(e,t,n,a,s,r,o=fn,l=!1){let c=this.elements,h=2*s/(t-e),d=2*s/(n-a),f=(t+e)/(t-e),p=(n+a)/(n-a),m,y;if(l)m=s/(r-s),y=r*s/(r-s);else if(o===fn)m=-(r+s)/(r-s),y=-2*r*s/(r-s);else if(o===ei)m=-r/(r-s),y=-r*s/(r-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=d,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=y,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,a,s,r,o=fn,l=!1){let c=this.elements,h=2/(t-e),d=2/(n-a),f=-(t+e)/(t-e),p=-(n+a)/(n-a),m,y;if(l)m=1/(r-s),y=r/(r-s);else if(o===fn)m=-2/(r-s),y=-(r+s)/(r-s);else if(o===ei)m=-1/(r-s),y=-s/(r-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=d,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=m,c[14]=y,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let a=0;a<16;a++)if(t[a]!==n[a])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Oa=new O,on=new De,Af=new O(0,0,0),Ef=new O(1,1,1),Qn=new O,As=new O,Yt=new O,Hl=new De,jl=new kt,zn=class i{constructor(e=0,t=0,n=0,a=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,a=this._order){return this._x=e,this._y=t,this._z=n,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let a=e.elements,s=a[0],r=a[4],o=a[8],l=a[1],c=a[5],h=a[9],d=a[2],f=a[6],p=a[10];switch(t){case"XYZ":this._y=Math.asin(Ve(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-r,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ve(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ve(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ve(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin(Ve(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Ve(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,p),this._y=0);break;default:we("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Hl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Hl,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return jl.setFromEuler(this),this.setFromQuaternion(jl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};zn.DEFAULT_ORDER="XYZ";var zi=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Tf=0,Gl=new O,Ba=new kt,kn=new De,Es=new O,Ei=new O,Rf=new O,If=new kt,Vl=new O(1,0,0),Wl=new O(0,1,0),Xl=new O(0,0,1),ql={type:"added"},Cf={type:"removed"},za={type:"childadded",child:null},Po={type:"childremoved",child:null},ht=class i extends bn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Tf++}),this.uuid=pn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new O,t=new zn,n=new kt,a=new O(1,1,1);function s(){n.setFromEuler(t,!1)}function r(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new De},normalMatrix:{value:new Ne}}),this.matrix=new De,this.matrixWorld=new De,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new zi,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ba.setFromAxisAngle(e,t),this.quaternion.multiply(Ba),this}rotateOnWorldAxis(e,t){return Ba.setFromAxisAngle(e,t),this.quaternion.premultiply(Ba),this}rotateX(e){return this.rotateOnAxis(Vl,e)}rotateY(e){return this.rotateOnAxis(Wl,e)}rotateZ(e){return this.rotateOnAxis(Xl,e)}translateOnAxis(e,t){return Gl.copy(e).applyQuaternion(this.quaternion),this.position.add(Gl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Vl,e)}translateY(e){return this.translateOnAxis(Wl,e)}translateZ(e){return this.translateOnAxis(Xl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(kn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Es.copy(e):Es.set(e,t,n);let a=this.parent;this.updateWorldMatrix(!0,!1),Ei.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?kn.lookAt(Ei,Es,this.up):kn.lookAt(Es,Ei,this.up),this.quaternion.setFromRotationMatrix(kn),a&&(kn.extractRotation(a.matrixWorld),Ba.setFromRotationMatrix(kn),this.quaternion.premultiply(Ba.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ce("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ql),za.child=e,this.dispatchEvent(za),za.child=null):Ce("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Cf),Po.child=e,this.dispatchEvent(Po),Po.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),kn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),kn.multiply(e.parent.matrixWorld)),e.applyMatrix4(kn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ql),za.child=e,this.dispatchEvent(za),za.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,a=this.children.length;n<a;n++){let r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let a=this.children;for(let s=0,r=a.length;s<r;s++)a[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ei,e,Rf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ei,If,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,a=t.length;n<a;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,a=t.length;n<a;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,a=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*n-s[8]*a,s[13]+=n-s[1]*t-s[5]*n-s[9]*a,s[14]+=a-s[2]*t-s[6]*n-s[10]*a}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,a=t.length;n<a;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let a=this.parent;if(e===!0&&a!==null&&a.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let a={};a.uuid=this.uuid,a.type=this.type,a.name=this.name,a.castShadow=this.castShadow,a.receiveShadow=this.receiveShadow,a.visible=this.visible,a.frustumCulled=this.frustumCulled,a.renderOrder=this.renderOrder,a.static=this.static,a.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.pivot!==null&&(a.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(a.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(a.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),a.instanceInfo=this._instanceInfo.map(o=>({...o})),a.availableInstanceIds=this._availableInstanceIds.slice(),a.availableGeometryIds=this._availableGeometryIds.slice(),a.nextIndexStart=this._nextIndexStart,a.nextVertexStart=this._nextVertexStart,a.geometryCount=this._geometryCount,a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.matricesTexture=this._matricesTexture.toJSON(e),a.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(a.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=s(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));a.material=o}else a.material=s(e.materials,this.material);if(this.children.length>0){a.children=[];for(let o=0;o<this.children.length;o++)a.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];a.animations.push(s(e.animations,l))}}if(t){let o=r(e.geometries),l=r(e.materials),c=r(e.textures),h=r(e.images),d=r(e.shapes),f=r(e.skeletons),p=r(e.animations),m=r(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),m.length>0&&(n.nodes=m)}return n.object=a,n;function r(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let a=e.children[n];this.add(a.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};ht.DEFAULT_UP=new O(0,1,0);ht.DEFAULT_MATRIX_AUTO_UPDATE=!0;ht.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var un=class extends ht{constructor(){super(),this.isGroup=!0,this.type="Group"}},Nf={type:"move"},ii=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new un,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new un,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new un,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let a=null,s=null,r=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){r=!0;for(let y of e.hand.values()){let b=t.getJointPose(y,n),u=this._getHandJoint(c,y);b!==null&&(u.matrix.fromArray(b.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=b.radius),u.visible=b!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=h.position.distanceTo(d.position),p=.02,m=.005;c.inputState.pinching&&f>p+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=p-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(a=t.getPose(e.targetRaySpace,n),a===null&&s!==null&&(a=s),a!==null&&(o.matrix.fromArray(a.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,a.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(a.linearVelocity)):o.hasLinearVelocity=!1,a.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(a.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Nf)))}return o!==null&&(o.visible=a!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=r!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new un;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},rd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},$n={h:0,s:0,l:0},Ts={h:0,s:0,l:0};function ko(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var Re=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ft){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Oe.colorSpaceToWorking(this,t),this}setRGB(e,t,n,a=Oe.workingColorSpace){return this.r=e,this.g=t,this.b=n,Oe.colorSpaceToWorking(this,a),this}setHSL(e,t,n,a=Oe.workingColorSpace){if(e=Cc(e,1),t=Ve(t,0,1),n=Ve(n,0,1),t===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+t):n+t-n*t,r=2*n-s;this.r=ko(r,s,e+1/3),this.g=ko(r,s,e),this.b=ko(r,s,e-1/3)}return Oe.colorSpaceToWorking(this,a),this}setStyle(e,t=ft){function n(s){s!==void 0&&parseFloat(s)<1&&we("Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,r=a[1],o=a[2];switch(r){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:we("Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=a[1],r=s.length;if(r===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(r===6)return this.setHex(parseInt(s,16),t);we("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ft){let n=rd[e.toLowerCase()];return n!==void 0?this.setHex(n,t):we("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Bn(e.r),this.g=Bn(e.g),this.b=Bn(e.b),this}copyLinearToSRGB(e){return this.r=Za(e.r),this.g=Za(e.g),this.b=Za(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ft){return Oe.workingToColorSpace(Pt.copy(this),e),Math.round(Ve(Pt.r*255,0,255))*65536+Math.round(Ve(Pt.g*255,0,255))*256+Math.round(Ve(Pt.b*255,0,255))}getHexString(e=ft){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Oe.workingColorSpace){Oe.workingToColorSpace(Pt.copy(this),t);let n=Pt.r,a=Pt.g,s=Pt.b,r=Math.max(n,a,s),o=Math.min(n,a,s),l,c,h=(o+r)/2;if(o===r)l=0,c=0;else{let d=r-o;switch(c=h<=.5?d/(r+o):d/(2-r-o),r){case n:l=(a-s)/d+(a<s?6:0);break;case a:l=(s-n)/d+2;break;case s:l=(n-a)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Oe.workingColorSpace){return Oe.workingToColorSpace(Pt.copy(this),t),e.r=Pt.r,e.g=Pt.g,e.b=Pt.b,e}getStyle(e=ft){Oe.workingToColorSpace(Pt.copy(this),e);let t=Pt.r,n=Pt.g,a=Pt.b;return e!==ft?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(a*255)})`}offsetHSL(e,t,n){return this.getHSL($n),this.setHSL($n.h+e,$n.s+t,$n.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL($n),e.getHSL(Ts);let n=Fi($n.h,Ts.h,t),a=Fi($n.s,Ts.s,t),s=Fi($n.l,Ts.l,t);return this.setHSL(n,a,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,a=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*a,this.g=s[1]*t+s[4]*n+s[7]*a,this.b=s[2]*t+s[5]*n+s[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Pt=new Re;Re.NAMES=rd;var Hi=class extends ht{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new zn,this.environmentIntensity=1,this.environmentRotation=new zn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},cn=new O,Dn=new O,Do=new O,Fn=new O,Ha=new O,ja=new O,Kl=new O,Fo=new O,Uo=new O,Lo=new O,Oo=new tt,Bo=new tt,zo=new tt,ia=class i{constructor(e=new O,t=new O,n=new O){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,a){a.subVectors(n,t),cn.subVectors(e,t),a.cross(cn);let s=a.lengthSq();return s>0?a.multiplyScalar(1/Math.sqrt(s)):a.set(0,0,0)}static getBarycoord(e,t,n,a,s){cn.subVectors(a,t),Dn.subVectors(n,t),Do.subVectors(e,t);let r=cn.dot(cn),o=cn.dot(Dn),l=cn.dot(Do),c=Dn.dot(Dn),h=Dn.dot(Do),d=r*c-o*o;if(d===0)return s.set(0,0,0),null;let f=1/d,p=(c*l-o*h)*f,m=(r*h-o*l)*f;return s.set(1-p-m,m,p)}static containsPoint(e,t,n,a){return this.getBarycoord(e,t,n,a,Fn)===null?!1:Fn.x>=0&&Fn.y>=0&&Fn.x+Fn.y<=1}static getInterpolation(e,t,n,a,s,r,o,l){return this.getBarycoord(e,t,n,a,Fn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Fn.x),l.addScaledVector(r,Fn.y),l.addScaledVector(o,Fn.z),l)}static getInterpolatedAttribute(e,t,n,a,s,r){return Oo.setScalar(0),Bo.setScalar(0),zo.setScalar(0),Oo.fromBufferAttribute(e,t),Bo.fromBufferAttribute(e,n),zo.fromBufferAttribute(e,a),r.setScalar(0),r.addScaledVector(Oo,s.x),r.addScaledVector(Bo,s.y),r.addScaledVector(zo,s.z),r}static isFrontFacing(e,t,n,a){return cn.subVectors(n,t),Dn.subVectors(e,t),cn.cross(Dn).dot(a)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,a){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,t,n,a){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return cn.subVectors(this.c,this.b),Dn.subVectors(this.a,this.b),cn.cross(Dn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,a,s){return i.getInterpolation(e,this.a,this.b,this.c,t,n,a,s)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,a=this.b,s=this.c,r,o;Ha.subVectors(a,n),ja.subVectors(s,n),Fo.subVectors(e,n);let l=Ha.dot(Fo),c=ja.dot(Fo);if(l<=0&&c<=0)return t.copy(n);Uo.subVectors(e,a);let h=Ha.dot(Uo),d=ja.dot(Uo);if(h>=0&&d<=h)return t.copy(a);let f=l*d-h*c;if(f<=0&&l>=0&&h<=0)return r=l/(l-h),t.copy(n).addScaledVector(Ha,r);Lo.subVectors(e,s);let p=Ha.dot(Lo),m=ja.dot(Lo);if(m>=0&&p<=m)return t.copy(s);let y=p*c-l*m;if(y<=0&&c>=0&&m<=0)return o=c/(c-m),t.copy(n).addScaledVector(ja,o);let b=h*m-p*d;if(b<=0&&d-h>=0&&p-m>=0)return Kl.subVectors(s,a),o=(d-h)/(d-h+(p-m)),t.copy(a).addScaledVector(Kl,o);let u=1/(b+y+f);return r=y*u,o=f*u,t.copy(n).addScaledVector(Ha,r).addScaledVector(ja,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},zt=class{constructor(e=new O(1/0,1/0,1/0),t=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(ln.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(ln.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=ln.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let r=0,o=s.count;r<o;r++)e.isMesh===!0?e.getVertexPosition(r,ln):ln.fromBufferAttribute(s,r),ln.applyMatrix4(e.matrixWorld),this.expandByPoint(ln);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Rs.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Rs.copy(n.boundingBox)),Rs.applyMatrix4(e.matrixWorld),this.union(Rs)}let a=e.children;for(let s=0,r=a.length;s<r;s++)this.expandByObject(a[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ln),ln.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ti),Is.subVectors(this.max,Ti),Ga.subVectors(e.a,Ti),Va.subVectors(e.b,Ti),Wa.subVectors(e.c,Ti),ea.subVectors(Va,Ga),ta.subVectors(Wa,Va),pa.subVectors(Ga,Wa);let t=[0,-ea.z,ea.y,0,-ta.z,ta.y,0,-pa.z,pa.y,ea.z,0,-ea.x,ta.z,0,-ta.x,pa.z,0,-pa.x,-ea.y,ea.x,0,-ta.y,ta.x,0,-pa.y,pa.x,0];return!Ho(t,Ga,Va,Wa,Is)||(t=[1,0,0,0,1,0,0,0,1],!Ho(t,Ga,Va,Wa,Is))?!1:(Cs.crossVectors(ea,ta),t=[Cs.x,Cs.y,Cs.z],Ho(t,Ga,Va,Wa,Is))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ln).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ln).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Un[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Un[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Un[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Un[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Un[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Un[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Un[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Un[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Un),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Un=[new O,new O,new O,new O,new O,new O,new O,new O],ln=new O,Rs=new zt,Ga=new O,Va=new O,Wa=new O,ea=new O,ta=new O,pa=new O,Ti=new O,Is=new O,Cs=new O,ba=new O;function Ho(i,e,t,n,a){for(let s=0,r=i.length-3;s<=r;s+=3){ba.fromArray(i,s);let o=a.x*Math.abs(ba.x)+a.y*Math.abs(ba.y)+a.z*Math.abs(ba.z),l=e.dot(ba),c=t.dot(ba),h=n.dot(ba);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var vt=new O,Ns=new Be,Pf=0,pt=class extends bn{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Pf++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Rc,this.updateRanges=[],this.gpuType=$t,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let a=0,s=this.itemSize;a<s;a++)this.array[e+a]=t.array[n+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ns.fromBufferAttribute(this,t),Ns.applyMatrix3(e),this.setXY(t,Ns.x,Ns.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)vt.fromBufferAttribute(this,t),vt.applyMatrix3(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)vt.fromBufferAttribute(this,t),vt.applyMatrix4(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)vt.fromBufferAttribute(this,t),vt.applyNormalMatrix(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)vt.fromBufferAttribute(this,t),vt.transformDirection(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=dn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=et(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=dn(t,this.array)),t}setX(e,t){return this.normalized&&(t=et(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=dn(t,this.array)),t}setY(e,t){return this.normalized&&(t=et(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=dn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=et(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=dn(t,this.array)),t}setW(e,t){return this.normalized&&(t=et(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=et(t,this.array),n=et(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,a){return e*=this.itemSize,this.normalized&&(t=et(t,this.array),n=et(n,this.array),a=et(a,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=a,this}setXYZW(e,t,n,a,s){return e*=this.itemSize,this.normalized&&(t=et(t,this.array),n=et(n,this.array),a=et(a,this.array),s=et(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=a,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var ji=class extends pt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Gi=class extends pt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Ot=class extends pt{constructor(e,t,n){super(new Float32Array(e),t,n)}},kf=new zt,Ri=new O,jo=new O,Vt=class{constructor(e=new O,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):kf.setFromPoints(e).getCenter(n);let a=0;for(let s=0,r=e.length;s<r;s++)a=Math.max(a,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ri.subVectors(e,this.center);let t=Ri.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),a=(n-this.radius)*.5;this.center.addScaledVector(Ri,a/n),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(jo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ri.copy(e.center).add(jo)),this.expandByPoint(Ri.copy(e.center).sub(jo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Df=0,nn=new De,Go=new ht,Xa=new O,Zt=new zt,Ii=new zt,Tt=new O,Dt=class i extends bn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Df++}),this.uuid=pn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(af(e)?Gi:ji)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new Ne().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}let a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return nn.makeRotationFromQuaternion(e),this.applyMatrix4(nn),this}rotateX(e){return nn.makeRotationX(e),this.applyMatrix4(nn),this}rotateY(e){return nn.makeRotationY(e),this.applyMatrix4(nn),this}rotateZ(e){return nn.makeRotationZ(e),this.applyMatrix4(nn),this}translate(e,t,n){return nn.makeTranslation(e,t,n),this.applyMatrix4(nn),this}scale(e,t,n){return nn.makeScale(e,t,n),this.applyMatrix4(nn),this}lookAt(e){return Go.lookAt(e),Go.updateMatrix(),this.applyMatrix4(Go.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Xa).negate(),this.translate(Xa.x,Xa.y,Xa.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let a=0,s=e.length;a<s;a++){let r=e[a];n.push(r.x,r.y,r.z||0)}this.setAttribute("position",new Ot(n,3))}else{let n=Math.min(e.length,t.count);for(let a=0;a<n;a++){let s=e[a];t.setXYZ(a,s.x,s.y,s.z||0)}e.length>t.count&&we("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new zt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ce("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,a=t.length;n<a;n++){let s=t[n];Zt.setFromBufferAttribute(s),this.morphTargetsRelative?(Tt.addVectors(this.boundingBox.min,Zt.min),this.boundingBox.expandByPoint(Tt),Tt.addVectors(this.boundingBox.max,Zt.max),this.boundingBox.expandByPoint(Tt)):(this.boundingBox.expandByPoint(Zt.min),this.boundingBox.expandByPoint(Zt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ce('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Vt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ce("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(e){let n=this.boundingSphere.center;if(Zt.setFromBufferAttribute(e),t)for(let s=0,r=t.length;s<r;s++){let o=t[s];Ii.setFromBufferAttribute(o),this.morphTargetsRelative?(Tt.addVectors(Zt.min,Ii.min),Zt.expandByPoint(Tt),Tt.addVectors(Zt.max,Ii.max),Zt.expandByPoint(Tt)):(Zt.expandByPoint(Ii.min),Zt.expandByPoint(Ii.max))}Zt.getCenter(n);let a=0;for(let s=0,r=e.count;s<r;s++)Tt.fromBufferAttribute(e,s),a=Math.max(a,n.distanceToSquared(Tt));if(t)for(let s=0,r=t.length;s<r;s++){let o=t[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Tt.fromBufferAttribute(o,c),l&&(Xa.fromBufferAttribute(e,c),Tt.add(Xa)),a=Math.max(a,n.distanceToSquared(Tt))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&Ce('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ce("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,a=t.normal,s=t.uv,r=this.getAttribute("tangent");(r===void 0||r.count!==n.count)&&(r=new pt(new Float32Array(4*n.count),4),this.setAttribute("tangent",r));let o=[],l=[];for(let v=0;v<n.count;v++)o[v]=new O,l[v]=new O;let c=new O,h=new O,d=new O,f=new Be,p=new Be,m=new Be,y=new O,b=new O;function u(v,E,I){c.fromBufferAttribute(n,v),h.fromBufferAttribute(n,E),d.fromBufferAttribute(n,I),f.fromBufferAttribute(s,v),p.fromBufferAttribute(s,E),m.fromBufferAttribute(s,I),h.sub(c),d.sub(c),p.sub(f),m.sub(f);let C=1/(p.x*m.y-m.x*p.y);isFinite(C)&&(y.copy(h).multiplyScalar(m.y).addScaledVector(d,-p.y).multiplyScalar(C),b.copy(d).multiplyScalar(p.x).addScaledVector(h,-m.x).multiplyScalar(C),o[v].add(y),o[E].add(y),o[I].add(y),l[v].add(b),l[E].add(b),l[I].add(b))}let g=this.groups;g.length===0&&(g=[{start:0,count:e.count}]);for(let v=0,E=g.length;v<E;++v){let I=g[v],C=I.start,N=I.count;for(let L=C,P=C+N;L<P;L+=3)u(e.getX(L+0),e.getX(L+1),e.getX(L+2))}let S=new O,x=new O,M=new O,w=new O;function T(v){M.fromBufferAttribute(a,v),w.copy(M);let E=o[v];S.copy(E),S.sub(M.multiplyScalar(M.dot(E))).normalize(),x.crossVectors(w,E);let C=x.dot(l[v])<0?-1:1;r.setXYZW(v,S.x,S.y,S.z,C)}for(let v=0,E=g.length;v<E;++v){let I=g[v],C=I.start,N=I.count;for(let L=C,P=C+N;L<P;L+=3)T(e.getX(L+0)),T(e.getX(L+1)),T(e.getX(L+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new pt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);let a=new O,s=new O,r=new O,o=new O,l=new O,c=new O,h=new O,d=new O;if(e)for(let f=0,p=e.count;f<p;f+=3){let m=e.getX(f+0),y=e.getX(f+1),b=e.getX(f+2);a.fromBufferAttribute(t,m),s.fromBufferAttribute(t,y),r.fromBufferAttribute(t,b),h.subVectors(r,s),d.subVectors(a,s),h.cross(d),o.fromBufferAttribute(n,m),l.fromBufferAttribute(n,y),c.fromBufferAttribute(n,b),o.add(h),l.add(h),c.add(h),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(y,l.x,l.y,l.z),n.setXYZ(b,c.x,c.y,c.z)}else for(let f=0,p=t.count;f<p;f+=3)a.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),r.fromBufferAttribute(t,f+2),h.subVectors(r,s),d.subVectors(a,s),h.cross(d),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Tt.fromBufferAttribute(e,t),Tt.normalize(),e.setXYZ(t,Tt.x,Tt.y,Tt.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,d=o.normalized,f=new c.constructor(l.length*h),p=0,m=0;for(let y=0,b=l.length;y<b;y++){o.isInterleavedBufferAttribute?p=l[y]*o.data.stride+o.offset:p=l[y]*h;for(let u=0;u<h;u++)f[m++]=c[p++]}return new pt(f,h,d)}if(this.index===null)return we("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,a=this.attributes;for(let o in a){let l=a[o],c=e(l,n);t.setAttribute(o,c)}let s=this.morphAttributes;for(let o in s){let l=[],c=s[o];for(let h=0,d=c.length;h<d;h++){let f=c[h],p=e(f,n);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let r=this.groups;for(let o=0,l=r.length;o<l;o++){let c=r[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let a={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,f=c.length;d<f;d++){let p=c[d];h.push(p.toJSON(e.data))}h.length>0&&(a[l]=h,s=!0)}s&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);let r=this.groups;r.length>0&&(e.data.groups=JSON.parse(JSON.stringify(r)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let a=e.attributes;for(let c in a){let h=a[c];this.setAttribute(c,h.clone(t))}let s=e.morphAttributes;for(let c in s){let h=[],d=s[c];for(let f=0,p=d.length;f<p;f++)h.push(d[f].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let r=e.groups;for(let c=0,h=r.length;c<h;c++){let d=r[c];this.addGroup(d.start,d.count,d.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},si=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Rc,this.updateRanges=[],this.version=0,this.uuid=pn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let a=0,s=this.stride;a<s;a++)this.array[e+a]=t.array[n+a];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=pn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=pn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}},Lt=new O,ri=class i{constructor(e,t,n,a=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=a}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Lt.fromBufferAttribute(this,t),Lt.applyMatrix4(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Lt.fromBufferAttribute(this,t),Lt.applyNormalMatrix(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Lt.fromBufferAttribute(this,t),Lt.transformDirection(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=dn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=et(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=et(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=et(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=et(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=et(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=dn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=dn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=dn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=dn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=et(t,this.array),n=et(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,a){return e=e*this.data.stride+this.offset,this.normalized&&(t=et(t,this.array),n=et(n,this.array),a=et(a,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=a,this}setXYZW(e,t,n,a,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=et(t,this.array),n=et(n,this.array),a=et(a,this.array),s=et(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=a,this.data.array[e+3]=s,this}clone(e){if(e===void 0){Oi("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let a=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[a+s])}return new pt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Oi("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let a=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[a+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Vo=new O,Ff=new O,Uf=new Ne,hn=class{constructor(e=new O(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,a){return this.normal.set(e,t,n),this.constant=a,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let a=Vo.subVectors(n,t).cross(Ff.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let a=e.delta(Vo),s=this.normal.dot(a);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return n===!0&&(r<0||r>1)?null:t.copy(e.start).addScaledVector(a,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Uf.getNormalMatrix(e),a=this.coplanarPoint(Vo).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-a.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Lf=0,Wt=class extends bn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Lf++}),this.uuid=pn(),this.name="",this.type="Material",this.blending=mi,this.side=Rn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=dc,this.blendDst=fc,this.blendEquation=Ia,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Re(0,0,0),this.blendAlpha=0,this.depthFunc=Qa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Jh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Zs,this.stencilZFail=Zs,this.stencilZPass=Zs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){we(`Material: parameter '${t}' has value of undefined.`);continue}let a=this[t];if(a===void 0){we(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(n):a&&a.isVector2&&n&&n.isVector2||a&&a.isEuler&&n&&n.isEuler||a&&a.isVector3&&n&&n.isVector3?a.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function a(s){let r=[];for(let o in s){let l=s[o];delete l.metadata,r.push(l)}return r}if(t){let s=a(e.textures),r=a(e.images);s.length>0&&(n.textures=s),r.length>0&&(n.images=r)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Re().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new hn().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Be().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Be().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let a=t.length;n=new Array(a);for(let s=0;s!==a;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var Ln=new O,Wo=new O,Ps=new O,ks=new O,wa=class{constructor(e=new O,t=new O(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ln)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Ln.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ln.copy(this.origin).addScaledVector(this.direction,t),Ln.distanceToSquared(e))}distanceSqToSegment(e,t,n,a){Wo.copy(e).add(t).multiplyScalar(.5),Ps.copy(t).sub(e).normalize(),ks.copy(this.origin).sub(Wo);let s=e.distanceTo(t)*.5,r=-this.direction.dot(Ps),o=ks.dot(this.direction),l=-ks.dot(Ps),c=ks.lengthSq(),h=Math.abs(1-r*r),d,f,p,m;if(h>0)if(d=r*l-o,f=r*o-l,m=s*h,d>=0)if(f>=-m)if(f<=m){let y=1/h;d*=y,f*=y,p=d*(d+r*f+2*o)+f*(r*d+f+2*l)+c}else f=s,d=Math.max(0,-(r*f+o)),p=-d*d+f*(f+2*l)+c;else f=-s,d=Math.max(0,-(r*f+o)),p=-d*d+f*(f+2*l)+c;else f<=-m?(d=Math.max(0,-(-r*s+o)),f=d>0?-s:Math.min(Math.max(-s,-l),s),p=-d*d+f*(f+2*l)+c):f<=m?(d=0,f=Math.min(Math.max(-s,-l),s),p=f*(f+2*l)+c):(d=Math.max(0,-(r*s+o)),f=d>0?s:Math.min(Math.max(-s,-l),s),p=-d*d+f*(f+2*l)+c);else f=r>0?-s:s,d=Math.max(0,-(r*f+o)),p=-d*d+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),a&&a.copy(Wo).addScaledVector(Ps,f),p}intersectSphere(e,t){if(e.radius<0)return null;Ln.subVectors(e.center,this.origin);let n=Ln.dot(this.direction),a=Ln.dot(Ln)-n*n,s=e.radius*e.radius;if(a>s)return null;let r=Math.sqrt(s-a),o=n-r,l=n+r;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,a,s,r,o,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,a=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,a=(e.min.x-f.x)*c),h>=0?(s=(e.min.y-f.y)*h,r=(e.max.y-f.y)*h):(s=(e.max.y-f.y)*h,r=(e.min.y-f.y)*h),n>r||s>a||((s>n||isNaN(n))&&(n=s),(r<a||isNaN(a))&&(a=r),d>=0?(o=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(o=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),n>l||o>a)||((o>n||n!==n)&&(n=o),(l<a||a!==a)&&(a=l),a<0)?null:this.at(n>=0?n:a,t)}intersectsBox(e){return this.intersectBox(e,Ln)!==null}intersectTriangle(e,t,n,a,s){let r=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,d=e.x-r.x,f=e.y-r.y,p=e.z-r.z,m=t.x-r.x,y=t.y-r.y,b=t.z-r.z,u=n.x-r.x,g=n.y-r.y,S=n.z-r.z,x=Math.abs(l),M=Math.abs(c),w=Math.abs(h),T,v,E,I,C,N,L,P,F,z,G,Z;if(x>=M&&x>=w?(E=l,N=d,F=m,Z=u,l>=0?(T=c,v=h,I=f,C=p,L=y,P=b,z=g,G=S):(T=h,v=c,I=p,C=f,L=b,P=y,z=S,G=g)):M>=w?(E=c,N=f,F=y,Z=g,c>=0?(T=h,v=l,I=p,C=d,L=b,P=m,z=S,G=u):(T=l,v=h,I=d,C=p,L=m,P=b,z=u,G=S)):(E=h,N=p,F=b,Z=S,h>=0?(T=l,v=c,I=d,C=f,L=m,P=y,z=u,G=g):(T=c,v=l,I=f,C=d,L=y,P=m,z=g,G=u)),E===0)return null;let V=T/E,K=v/E,ee=1/E,be=I-V*N,pe=C-K*N,qe=L-V*F,Le=P-K*F,We=z-V*Z,J=G-K*Z,te=We*Le-J*qe,ye=be*J-pe*We,Pe=qe*pe-Le*be;if(a){if(te<0||ye<0||Pe<0)return null}else if((te<0||ye<0||Pe<0)&&(te>0||ye>0||Pe>0))return null;let ge=te+ye+Pe;if(ge===0)return null;let ze=ee*(te*N+ye*F+Pe*Z);return(ge>0?ze<0:ze>0)?null:this.at(ze/ge,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},mn=class extends Wt{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Re(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zn,this.combine=uc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Jl=new De,ma=new wa,Ds=new Vt,Yl=new O,Fs=new O,Us=new O,Ls=new O,Xo=new O,Os=new O,Zl=new O,Bs=new O,Rt=class extends ht{constructor(e=new Dt,t=new mn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let a=t[n[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=a.length;s<r;s++){let o=a[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){let n=this.geometry,a=n.attributes.position,s=n.morphAttributes.position,r=n.morphTargetsRelative;t.fromBufferAttribute(a,e);let o=this.morphTargetInfluences;if(s&&o){Os.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let h=o[l],d=s[l];h!==0&&(Xo.fromBufferAttribute(d,e),r?Os.addScaledVector(Xo,h):Os.addScaledVector(Xo.sub(t),h))}t.add(Os)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,a=this.material,s=this.matrixWorld;a!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ds.copy(n.boundingSphere),Ds.applyMatrix4(s),ma.copy(e.ray).recast(e.near),!(Ds.containsPoint(ma.origin)===!1&&(ma.intersectSphere(Ds,Yl)===null||ma.origin.distanceToSquared(Yl)>(e.far-e.near)**2))&&(Jl.copy(s).invert(),ma.copy(e.ray).applyMatrix4(Jl),!(n.boundingBox!==null&&ma.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ma)))}_computeIntersections(e,t,n){let a,s=this.geometry,r=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,d=s.attributes.normal,f=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(r))for(let m=0,y=f.length;m<y;m++){let b=f[m],u=r[b.materialIndex],g=Math.max(b.start,p.start),S=Math.min(o.count,Math.min(b.start+b.count,p.start+p.count));for(let x=g,M=S;x<M;x+=3){let w=o.getX(x),T=o.getX(x+1),v=o.getX(x+2);a=zs(this,u,e,n,c,h,d,w,T,v),a&&(a.faceIndex=Math.floor(x/3),a.face.materialIndex=b.materialIndex,t.push(a))}}else{let m=Math.max(0,p.start),y=Math.min(o.count,p.start+p.count);for(let b=m,u=y;b<u;b+=3){let g=o.getX(b),S=o.getX(b+1),x=o.getX(b+2);a=zs(this,r,e,n,c,h,d,g,S,x),a&&(a.faceIndex=Math.floor(b/3),t.push(a))}}else if(l!==void 0)if(Array.isArray(r))for(let m=0,y=f.length;m<y;m++){let b=f[m],u=r[b.materialIndex],g=Math.max(b.start,p.start),S=Math.min(l.count,Math.min(b.start+b.count,p.start+p.count));for(let x=g,M=S;x<M;x+=3){let w=x,T=x+1,v=x+2;a=zs(this,u,e,n,c,h,d,w,T,v),a&&(a.faceIndex=Math.floor(x/3),a.face.materialIndex=b.materialIndex,t.push(a))}}else{let m=Math.max(0,p.start),y=Math.min(l.count,p.start+p.count);for(let b=m,u=y;b<u;b+=3){let g=b,S=b+1,x=b+2;a=zs(this,r,e,n,c,h,d,g,S,x),a&&(a.faceIndex=Math.floor(b/3),t.push(a))}}}};function Of(i,e,t,n,a,s,r,o){let l;if(e.side===Ht?l=n.intersectTriangle(r,s,a,!0,o):l=n.intersectTriangle(a,s,r,e.side===Rn,o),l===null)return null;Bs.copy(o),Bs.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(Bs);return c<t.near||c>t.far?null:{distance:c,point:Bs.clone(),object:i}}function zs(i,e,t,n,a,s,r,o,l,c){i.getVertexPosition(o,Fs),i.getVertexPosition(l,Us),i.getVertexPosition(c,Ls);let h=Of(i,e,t,n,Fs,Us,Ls,Zl);if(h){let d=new O;ia.getBarycoord(Zl,Fs,Us,Ls,d),a&&(h.uv=ia.getInterpolatedAttribute(a,o,l,c,d,new Be)),s&&(h.uv1=ia.getInterpolatedAttribute(s,o,l,c,d,new Be)),r&&(h.normal=ia.getInterpolatedAttribute(r,o,l,c,d,new O),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a:o,b:l,c,normal:new O,materialIndex:0};ia.getNormal(Fs,Us,Ls,f.normal),h.face=f,h.barycoord=d}return h}var Ci=new tt,Ql=new tt,$l=new tt,Bf=new tt,eh=new De,Hs=new O,qo=new Vt,th=new De,Ko=new wa,Vi=class extends Rt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Qo,this.bindMatrix=new De,this.bindMatrixInverse=new De,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new zt),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Hs),this.boundingBox.expandByPoint(Hs)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Vt),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Hs),this.boundingSphere.expandByPoint(Hs)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,a=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),qo.copy(this.boundingSphere),qo.applyMatrix4(a),e.ray.intersectsSphere(qo)!==!1&&(th.copy(a).invert(),Ko.copy(e.ray).applyMatrix4(th),!(this.boundingBox!==null&&Ko.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Ko)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new tt,t=this.geometry.attributes.skinWeight;for(let n=0,a=t.count;n<a;n++){e.fromBufferAttribute(t,n);let s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Qo?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===jh?this.bindMatrixInverse.copy(this.bindMatrix).invert():we("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,a=this.geometry;Ql.fromBufferAttribute(a.attributes.skinIndex,e),$l.fromBufferAttribute(a.attributes.skinWeight,e),t.isVector4?(Ci.copy(t),t.set(0,0,0,0)):(Ci.set(...t,1),t.set(0,0,0)),Ci.applyMatrix4(this.bindMatrix);for(let s=0;s<4;s++){let r=$l.getComponent(s);if(r!==0){let o=Ql.getComponent(s);eh.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(Bf.copy(Ci).applyMatrix4(eh),r)}}return t.isVector4&&(t.w=Ci.w),t.applyMatrix4(this.bindMatrixInverse)}},oi=class extends ht{constructor(){super(),this.isBone=!0,this.type="Bone"}},ci=class extends St{constructor(e=null,t=1,n=1,a,s,r,o,l,c=bt,h=bt,d,f){super(null,r,o,l,c,h,a,s,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},nh=new De,zf=new De,Wi=class i{constructor(e=[],t=[]){this.uuid=pn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){we("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,a=this.bones.length;n<a;n++)this.boneInverses.push(new De)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new De;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,a=this.boneTexture;for(let s=0,r=e.length;s<r;s++){let o=e[s]?e[s].matrixWorld:zf;nh.multiplyMatrices(o,t[s]),nh.toArray(n,s*16)}a!==null&&(a.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new ci(t,e,e,en,$t);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let a=this.bones[t];if(a.name===e)return a}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,a=e.bones.length;n<a;n++){let s=e.bones[n],r=t[s];r===void 0&&(we("Skeleton: No bone found with UUID:",s),r=new oi),this.bones.push(r),this.boneInverses.push(new De().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let a=0,s=t.length;a<s;a++){let r=t[a];e.bones.push(r.uuid);let o=n[a];e.boneInverses.push(o.toArray())}return e}},Hn=class extends pt{constructor(e,t,n,a=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=a}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},qa=new De,ah=new De,js=[],ih=new zt,Hf=new De,Ni=new Rt,Pi=new Vt,Xi=class extends Rt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Hn(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let a=0;a<n;a++)this.setMatrixAt(a,Hf)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new zt),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,qa),ih.copy(e.boundingBox).applyMatrix4(qa),this.boundingBox.union(ih)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Vt),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,qa),Pi.copy(e.boundingSphere).applyMatrix4(qa),this.boundingSphere.union(Pi)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,a=this.morphTexture.source.data.data,s=n.length+1,r=e*s+1;for(let o=0;o<n.length;o++)n[o]=a[r+o]}raycast(e,t){let n=this.matrixWorld,a=this.count;if(Ni.geometry=this.geometry,Ni.material=this.material,Ni.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Pi.copy(this.boundingSphere),Pi.applyMatrix4(n),e.ray.intersectsSphere(Pi)!==!1))for(let s=0;s<a;s++){this.getMatrixAt(s,qa),ah.multiplyMatrices(n,qa),Ni.matrixWorld=ah,Ni.raycast(e,js);for(let r=0,o=js.length;r<o;r++){let l=js[r];l.instanceId=s,l.object=this,t.push(l)}js.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Hn(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,a=n.length+1;this.morphTexture===null&&(this.morphTexture=new ci(new Float32Array(a*this.count),a,this.count,Nr,$t));let s=this.morphTexture.source.data.data,r=0;for(let c=0;c<n.length;c++)r+=n[c];let o=this.geometry.morphTargetsRelative?1:1-r,l=a*e;return s[l]=o,s.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},ga=new Vt,jf=new Be(.5,.5),Gs=new O,li=class{constructor(e=new hn,t=new hn,n=new hn,a=new hn,s=new hn,r=new hn){this.planes=[e,t,n,a,s,r]}set(e,t,n,a,s,r){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(a),o[4].copy(s),o[5].copy(r),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=fn,n=!1){let a=this.planes,s=e.elements,r=s[0],o=s[1],l=s[2],c=s[3],h=s[4],d=s[5],f=s[6],p=s[7],m=s[8],y=s[9],b=s[10],u=s[11],g=s[12],S=s[13],x=s[14],M=s[15];if(a[0].setComponents(c-r,p-h,u-m,M-g).normalize(),a[1].setComponents(c+r,p+h,u+m,M+g).normalize(),a[2].setComponents(c+o,p+d,u+y,M+S).normalize(),a[3].setComponents(c-o,p-d,u-y,M-S).normalize(),n)a[4].setComponents(l,f,b,x).normalize(),a[5].setComponents(c-l,p-f,u-b,M-x).normalize();else if(a[4].setComponents(c-l,p-f,u-b,M-x).normalize(),t===fn)a[5].setComponents(c+l,p+f,u+b,M+x).normalize();else if(t===ei)a[5].setComponents(l,f,b,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ga.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ga.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ga)}intersectsSprite(e){ga.center.set(0,0,0);let t=jf.distanceTo(e.center);return ga.radius=.7071067811865476+t,ga.applyMatrix4(e.matrixWorld),this.intersectsSphere(ga)}intersectsSphere(e){let t=this.planes,n=e.center,a=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<a)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let a=t[n];if(Gs.x=a.normal.x>0?e.max.x:e.min.x,Gs.y=a.normal.y>0?e.max.y:e.min.y,Gs.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(Gs)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var hi=class extends Wt{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Re(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},lr=new O,hr=new O,sh=new De,ki=new wa,Vs=new Vt,Jo=new O,rh=new O,Aa=class extends ht{constructor(e=new Dt,t=new hi){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let a=1,s=t.count;a<s;a++)lr.fromBufferAttribute(t,a-1),hr.fromBufferAttribute(t,a),n[a]=n[a-1],n[a]+=lr.distanceTo(hr);e.setAttribute("lineDistance",new Ot(n,1))}else we("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,a=this.matrixWorld,s=e.params.Line.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Vs.copy(n.boundingSphere),Vs.applyMatrix4(a),Vs.radius+=s,e.ray.intersectsSphere(Vs)===!1)return;sh.copy(a).invert(),ki.copy(e.ray).applyMatrix4(sh);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){let p=Math.max(0,r.start),m=Math.min(h.count,r.start+r.count);for(let y=p,b=m-1;y<b;y+=c){let u=h.getX(y),g=h.getX(y+1),S=Ws(this,e,ki,l,u,g,y);S&&t.push(S)}if(this.isLineLoop){let y=h.getX(m-1),b=h.getX(p),u=Ws(this,e,ki,l,y,b,m-1);u&&t.push(u)}}else{let p=Math.max(0,r.start),m=Math.min(f.count,r.start+r.count);for(let y=p,b=m-1;y<b;y+=c){let u=Ws(this,e,ki,l,y,y+1,y);u&&t.push(u)}if(this.isLineLoop){let y=Ws(this,e,ki,l,m-1,p,m-1);y&&t.push(y)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let a=t[n[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=a.length;s<r;s++){let o=a[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}};function Ws(i,e,t,n,a,s,r){let o=i.geometry.attributes.position;if(lr.fromBufferAttribute(o,a),hr.fromBufferAttribute(o,s),t.distanceSqToSegment(lr,hr,Jo,rh)>n)return;Jo.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Jo);if(!(c<e.near||c>e.far))return{distance:c,point:rh.clone().applyMatrix4(i.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:i}}var oh=new O,ch=new O,qi=class extends Aa{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let a=0,s=t.count;a<s;a+=2)oh.fromBufferAttribute(t,a),ch.fromBufferAttribute(t,a+1),n[a]=a===0?0:n[a-1],n[a+1]=n[a]+oh.distanceTo(ch);e.setAttribute("lineDistance",new Ot(n,1))}else we("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Ki=class extends Aa{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},di=class extends Wt{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Re(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},lh=new De,ec=new wa,Xs=new Vt,qs=new O,Ji=class extends ht{constructor(e=new Dt,t=new di){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,a=this.matrixWorld,s=e.params.Points.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Xs.copy(n.boundingSphere),Xs.applyMatrix4(a),Xs.radius+=s,e.ray.intersectsSphere(Xs)===!1)return;lh.copy(a).invert(),ec.copy(e.ray).applyMatrix4(lh);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,d=n.attributes.position;if(c!==null){let f=Math.max(0,r.start),p=Math.min(c.count,r.start+r.count);for(let m=f,y=p;m<y;m++){let b=c.getX(m);qs.fromBufferAttribute(d,b),hh(qs,b,l,a,e,t,this)}}else{let f=Math.max(0,r.start),p=Math.min(d.count,r.start+r.count);for(let m=f,y=p;m<y;m++)qs.fromBufferAttribute(d,m),hh(qs,m,l,a,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let a=t[n[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=a.length;s<r;s++){let o=a[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}};function hh(i,e,t,n,a,s,r){let o=ec.distanceSqToPoint(i);if(o<t){let l=new O;ec.closestPointToPoint(i,l),l.applyMatrix4(n);let c=a.ray.origin.distanceTo(l);if(c<a.near||c>a.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:r})}}var Yi=class extends St{constructor(e=[],t=la,n,a,s,r,o,l,c,h){super(e,t,n,a,s,r,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Zi=class extends St{constructor(e,t,n,a,s,r,o,l,c){super(e,t,n,a,s,r,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var ra=class extends St{constructor(e,t,n=yn,a,s,r,o=bt,l=bt,c,h=An,d=1){if(h!==An&&h!==ha)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:e,height:t,depth:d};super(f,a,s,r,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ai(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},dr=class extends ra{constructor(e,t=yn,n=la,a,s,r=bt,o=bt,l,c=An){let h={width:e,height:e,depth:1},d=[h,h,h,h,h,h];super(e,e,t,n,a,s,r,o,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Qi=class extends St{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},fi=class i extends Dt{constructor(e=1,t=1,n=1,a=1,s=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:a,heightSegments:s,depthSegments:r};let o=this;a=Math.floor(a),s=Math.floor(s),r=Math.floor(r);let l=[],c=[],h=[],d=[],f=0,p=0;m("z","y","x",-1,-1,n,t,e,r,s,0),m("z","y","x",1,-1,n,t,-e,r,s,1),m("x","z","y",1,1,e,n,t,a,r,2),m("x","z","y",1,-1,e,n,-t,a,r,3),m("x","y","z",1,-1,e,t,n,a,s,4),m("x","y","z",-1,-1,e,t,-n,a,s,5),this.setIndex(l),this.setAttribute("position",new Ot(c,3)),this.setAttribute("normal",new Ot(h,3)),this.setAttribute("uv",new Ot(d,2));function m(y,b,u,g,S,x,M,w,T,v,E){let I=x/T,C=M/v,N=x/2,L=M/2,P=w/2,F=T+1,z=v+1,G=0,Z=0,V=new O;for(let K=0;K<z;K++){let ee=K*C-L;for(let be=0;be<F;be++){let pe=be*I-N;V[y]=pe*g,V[b]=ee*S,V[u]=P,c.push(V.x,V.y,V.z),V[y]=0,V[b]=0,V[u]=w>0?1:-1,h.push(V.x,V.y,V.z),d.push(be/T),d.push(1-K/v),G+=1}}for(let K=0;K<v;K++)for(let ee=0;ee<T;ee++){let be=f+ee+F*K,pe=f+ee+F*(K+1),qe=f+(ee+1)+F*(K+1),Le=f+(ee+1)+F*K;l.push(be,pe,Le),l.push(pe,qe,Le),Z+=6}o.addGroup(p,Z,E),p+=Z,f+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var $i=class i extends Dt{constructor(e=1,t=1,n=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:a};let s=e/2,r=t/2,o=Math.floor(n),l=Math.floor(a),c=o+1,h=l+1,d=e/o,f=t/l,p=[],m=[],y=[],b=[];for(let u=0;u<h;u++){let g=u*f-r;for(let S=0;S<c;S++){let x=S*d-s;m.push(x,-g,0),y.push(0,0,1),b.push(S/o),b.push(1-u/l)}}for(let u=0;u<l;u++)for(let g=0;g<o;g++){let S=g+c*u,x=g+c*(u+1),M=g+1+c*(u+1),w=g+1+c*u;p.push(S,x,w),p.push(x,M,w)}this.setIndex(p),this.setAttribute("position",new Ot(m,3)),this.setAttribute("normal",new Ot(y,3)),this.setAttribute("uv",new Ot(b,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};function Pa(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let a=i[t][n];if(dh(a))a.isRenderTargetTexture?(we("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=a.clone();else if(Array.isArray(a))if(dh(a[0])){let s=[];for(let r=0,o=a.length;r<o;r++)s[r]=a[r].clone();e[t][n]=s}else e[t][n]=a.slice();else e[t][n]=a}}return e}function Ft(i){let e={};for(let t=0;t<i.length;t++){let n=Pa(i[t]);for(let a in n)e[a]=n[a]}return e}function dh(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Gf(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Pc(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Oe.workingColorSpace}var od={clone:Pa,merge:Ft},Vf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Wf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Qt=class extends Wt{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Vf,this.fragmentShader=Wf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Pa(e.uniforms),this.uniformsGroups=Gf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let a in this.uniforms){let r=this.uniforms[a].value;r&&r.isTexture?t.uniforms[a]={type:"t",value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[a]={type:"c",value:r.getHex()}:r&&r.isVector2?t.uniforms[a]={type:"v2",value:r.toArray()}:r&&r.isVector3?t.uniforms[a]={type:"v3",value:r.toArray()}:r&&r.isVector4?t.uniforms[a]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?t.uniforms[a]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?t.uniforms[a]={type:"m4",value:r.toArray()}:t.uniforms[a]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let a in this.extensions)this.extensions[a]===!0&&(n[a]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let a=e.uniforms[n];switch(this.uniforms[n]={},a.type){case"t":this.uniforms[n].value=t[a.value]||null;break;case"c":this.uniforms[n].value=new Re().setHex(a.value);break;case"v2":this.uniforms[n].value=new Be().fromArray(a.value);break;case"v3":this.uniforms[n].value=new O().fromArray(a.value);break;case"v4":this.uniforms[n].value=new tt().fromArray(a.value);break;case"m3":this.uniforms[n].value=new Ne().fromArray(a.value);break;case"m4":this.uniforms[n].value=new De().fromArray(a.value);break;default:this.uniforms[n].value=a.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},fr=class extends Qt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},jn=class extends Wt{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Re(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Re(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=uo,this.normalScale=new Be(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Xt=class extends jn{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Be(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ve(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Re(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Re(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Re(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var ur=class extends Wt{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=qh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},pr=class extends Wt{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function aa(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Qs(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}function Xf(i){function e(a,s){return i[a]-i[s]}let t=i.length,n=new Array(t);for(let a=0;a!==t;++a)n[a]=a;return n.sort(e),n}function fh(i,e,t){let n=i.length,a=new i.constructor(n);for(let s=0,r=0;r!==n;++s){let o=t[s]*e;for(let l=0;l!==e;++l)a[r++]=i[o+l]}return a}function qf(i,e,t,n){let a=1,s=i[0];for(;s!==void 0&&s[n]===void 0;)s=i[a++];if(s===void 0)return;let r=s[n];if(r!==void 0)if(Array.isArray(r))do r=s[n],r!==void 0&&(e.push(s.time),t.push(...r)),s=i[a++];while(s!==void 0);else if(r.toArray!==void 0)do r=s[n],r!==void 0&&(e.push(s.time),r.toArray(t,t.length)),s=i[a++];while(s!==void 0);else do r=s[n],r!==void 0&&(e.push(s.time),t.push(r)),s=i[a++];while(s!==void 0)}var En=class{constructor(e,t,n,a){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=a!==void 0?a:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,a=t[n],s=t[n-1];e:{t:{let r;n:{a:if(!(e<a)){for(let o=n+2;;){if(a===void 0){if(e<s)break a;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(s=a,a=t[++n],e<a)break t}r=t.length;break n}if(!(e>=s)){let o=t[1];e<o&&(n=2,s=o);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(a=s,s=t[--n-1],e>=s)break t}r=n,n=0;break n}break e}for(;n<r;){let o=n+r>>>1;e<t[o]?r=o:n=o+1}if(a=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(a===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,a)}return this.interpolate_(n,s,e,a)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,a=this.valueSize,s=e*a;for(let r=0;r!==a;++r)t[r]=n[s+r];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},br=class extends En{constructor(e,t,n,a){super(e,t,n,a),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:xa,endingEnd:xa}}intervalChanged_(e,t,n){let a=this.parameterPositions,s=e-2,r=e+1,o=a[s],l=a[r];if(o===void 0)switch(this.getSettings_().endingStart){case ya:s=e,o=2*t-n;break;case Ui:s=a.length-2,o=t+a[s]-a[s+1];break;default:s=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case ya:r=e,l=2*n-t;break;case Ui:r=1,l=n+a[1]-a[0];break;default:r=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=s*h,this._offsetNext=r*h}interpolate_(e,t,n,a){let s=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,d=this._offsetNext,f=this._weightPrev,p=this._weightNext,m=(n-t)/(a-t),y=m*m,b=y*m,u=-f*b+2*f*y-f*m,g=(1+f)*b+(-1.5-2*f)*y+(-.5+f)*m+1,S=(-1-p)*b+(1.5+p)*y+.5*m,x=p*b-p*y;for(let M=0;M!==o;++M)s[M]=u*r[h+M]+g*r[c+M]+S*r[l+M]+x*r[d+M];return s}},es=class extends En{constructor(e,t,n,a){super(e,t,n,a)}interpolate_(e,t,n,a){let s=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(n-t)/(a-t),d=1-h;for(let f=0;f!==o;++f)s[f]=r[c+f]*d+r[l+f]*h;return s}},mr=class extends En{constructor(e,t,n,a){super(e,t,n,a)}interpolate_(e){return this.copySampleValue_(e-1)}},gr=class extends En{interpolate_(e,t,n,a){let s=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this.inTangents,d=this.outTangents;if(!h||!d){let m=(n-t)/(a-t),y=1-m;for(let b=0;b!==o;++b)s[b]=r[c+b]*y+r[l+b]*m;return s}let f=o*2,p=e-1;for(let m=0;m!==o;++m){let y=r[c+m],b=r[l+m],u=p*f+m*2,g=d[u],S=d[u+1],x=e*f+m*2,M=h[x],w=h[x+1],T=Jf(n,t,g,M,a);s[m]=cd(T,y,S,w,b)}return s}};function cd(i,e,t,n,a){let s=1-i;return s*s*s*e+3*s*s*i*t+3*s*i*i*n+i*i*i*a}function Kf(i,e,t,n,a){let s=1-i;return 3*s*s*(t-e)+6*s*i*(n-t)+3*i*i*(a-n)}function Jf(i,e,t,n,a){let s=(i-e)/(a-e);for(let r=0;r<8;r++){let o=cd(s,e,t,n,a)-i;if(Math.abs(o)<1e-10)break;let l=Kf(s,e,t,n,a);if(Math.abs(l)<1e-10)break;s=Math.max(0,Math.min(1,s-o/l))}return s}var qt=class{constructor(e,t,n,a){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=aa(t,this.TimeBufferType),this.values=aa(n,this.ValueBufferType),this.setInterpolation(a||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:aa(e.times,Array),values:aa(e.values,Array)};let a=e.getInterpolation();a!==e.DefaultInterpolation&&(n.interpolation=a),Qs(e.settings)&&(n.settings={inTangents:aa(e.settings.inTangents,Array),outTangents:aa(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new mr(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new es(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new br(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new gr(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case _a:t=this.InterpolantFactoryMethodDiscrete;break;case Ma:t=this.InterpolantFactoryMethodLinear;break;case Ys:t=this.InterpolantFactoryMethodSmooth;break;case $o:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return we("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return _a;case this.InterpolantFactoryMethodLinear:return Ma;case this.InterpolantFactoryMethodSmooth:return Ys;case this.InterpolantFactoryMethodBezier:return $o}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,a=t.length;n!==a;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,a=t.length;n!==a;++n)t[n]*=e;Qs(this.settings)&&(uh(this.settings.inTangents,e),uh(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,a=n.length,s=0,r=a-1;for(;s!==a&&n[s]<e;)++s;for(;r!==-1&&n[r]>t;)--r;if(++r,s!==0||r!==a){s>=r&&(r=Math.max(r,1),s=r-1);let o=this.getValueSize();this.times=n.slice(s,r),this.values=this.values.slice(s*o,r*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Ce("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,a=this.values,s=n.length;s===0&&(Ce("KeyframeTrack: Track is empty.",this),e=!1);let r=null;for(let o=0;o!==s;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){Ce("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(r!==null&&r>l){Ce("KeyframeTrack: Out of order keys.",this,o,l,r),e=!1;break}r=l}if(a!==void 0&&sf(a))for(let o=0,l=a.length;o!==l;++o){let c=a[o];if(isNaN(c)){Ce("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),a=this.getInterpolation()===Ys,s=e.length-1,r=1;for(let o=1;o<s;++o){let l=!1,c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(a)l=!0;else{let d=o*n,f=d-n,p=d+n;for(let m=0;m!==n;++m){let y=t[d+m];if(y!==t[f+m]||y!==t[p+m]){l=!0;break}}}if(l){if(o!==r){e[r]=e[o];let d=o*n,f=r*n;for(let p=0;p!==n;++p)t[f+p]=t[d+p]}++r}}if(s>0){e[r]=e[s];for(let o=s*n,l=r*n,c=0;c!==n;++c)t[l+c]=t[o+c];++r}return r!==e.length?(this.times=e.slice(0,r),this.values=t.slice(0,r*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,a=new n(this.name,e,t);return a.createInterpolant=this.createInterpolant,Qs(this.settings)&&(a.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),a}};function uh(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}qt.prototype.ValueTypeName="";qt.prototype.TimeBufferType=Float32Array;qt.prototype.ValueBufferType=Float32Array;qt.prototype.DefaultInterpolation=Ma;var Gn=class extends qt{constructor(e,t,n){super(e,t,n)}};Gn.prototype.ValueTypeName="bool";Gn.prototype.ValueBufferType=Array;Gn.prototype.DefaultInterpolation=_a;Gn.prototype.InterpolantFactoryMethodLinear=void 0;Gn.prototype.InterpolantFactoryMethodSmooth=void 0;var ts=class extends qt{constructor(e,t,n,a){super(e,t,n,a)}};ts.prototype.ValueTypeName="color";var Vn=class extends qt{constructor(e,t,n,a){super(e,t,n,a)}};Vn.prototype.ValueTypeName="number";var xr=class extends En{constructor(e,t,n,a){super(e,t,n,a)}interpolate_(e,t,n,a){let s=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=(n-t)/(a-t),c=e*o;for(let h=c+o;c!==h;c+=4)kt.slerpFlat(s,0,r,c-o,r,c,l);return s}},Wn=class extends qt{constructor(e,t,n,a){super(e,t,n,a)}InterpolantFactoryMethodLinear(e){return new xr(this.times,this.values,this.getValueSize(),e)}};Wn.prototype.ValueTypeName="quaternion";Wn.prototype.InterpolantFactoryMethodSmooth=void 0;var Xn=class extends qt{constructor(e,t,n){super(e,t,n)}};Xn.prototype.ValueTypeName="string";Xn.prototype.ValueBufferType=Array;Xn.prototype.DefaultInterpolation=_a;Xn.prototype.InterpolantFactoryMethodLinear=void 0;Xn.prototype.InterpolantFactoryMethodSmooth=void 0;var oa=class extends qt{constructor(e,t,n,a){super(e,t,n,a)}};oa.prototype.ValueTypeName="vector";var Ea=class{constructor(e="",t=-1,n=[],a=fo){this.name=e,this.tracks=n,this.duration=t,this.blendMode=a,this.uuid=pn(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,a=1/(e.fps||1);for(let r=0,o=n.length;r!==o;++r)t.push(Zf(n[r]).scale(a));let s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s.userData=JSON.parse(e.userData||"{}"),s}static toJSON(e){let t=[],n=e.tracks,a={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let s=0,r=n.length;s!==r;++s)t.push(qt.toJSON(n[s]));return a}static CreateFromMorphTargetSequence(e,t,n,a){let s=t.length,r=[];for(let o=0;o<s;o++){let l=[],c=[];l.push((o+s-1)%s,o,(o+1)%s),c.push(0,1,0);let h=Xf(l);l=fh(l,1,h),c=fh(c,1,h),!a&&l[0]===0&&(l.push(s),c.push(c[0])),r.push(new Vn(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/n))}return new this(e,-1,r)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let a=e;n=a.geometry&&a.geometry.animations||a.animations}for(let a=0;a<n.length;a++)if(n[a].name===t)return n[a];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let a={},s=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){let c=e[o],h=c.name.match(s);if(h&&h.length>1){let d=h[1],f=a[d];f||(a[d]=f=[]),f.push(c)}}let r=[];for(let o in a)r.push(this.CreateFromMorphTargetSequence(o,a[o],t,n));return r}resetDuration(){let e=this.tracks,t=0;for(let n=0,a=e.length;n!==a;++n){let s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function Yf(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Vn;case"vector":case"vector2":case"vector3":case"vector4":return oa;case"color":return ts;case"quaternion":return Wn;case"bool":case"boolean":return Gn;case"string":return Xn}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function Zf(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=Yf(i.type);if(i.times===void 0){let n=[],a=[];qf(i.keys,n,a,"value"),i.times=n,i.values=a}let t;return e.parse!==void 0?t=e.parse(i):t=new e(i.name,i.times,i.values,i.interpolation),Qs(i.settings)&&(t.settings={inTangents:aa(i.settings.inTangents,Float32Array),outTangents:aa(i.settings.outTangents,Float32Array)}),t}var wn={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(ph(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!ph(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function ph(i){try{let e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var yr=class{constructor(e,t,n){let a=this,s=!1,r=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,s===!1&&a.onStart!==void 0&&a.onStart(h,r,o),s=!0},this.itemEnd=function(h){r++,a.onProgress!==void 0&&a.onProgress(h,r,o),r===o&&(s=!1,a.onLoad!==void 0&&a.onLoad())},this.itemError=function(h){a.onError!==void 0&&a.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,f=c.length;d<f;d+=2){let p=c[d],m=c[d+1];if(p.global&&(p.lastIndex=0),p.test(h))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},ld=new yr,Tn=class{constructor(e){this.manager=e!==void 0?e:ld,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(a,s){n.load(e,a,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Tn.DEFAULT_MATERIAL_NAME="__DEFAULT";var On={},tc=class extends Error{constructor(e,t){super(e),this.response=t}},ui=class extends Tn{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,a){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=wn.get(`file:${e}`);if(s!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0);return}if(On[e]!==void 0){On[e].push({onLoad:t,onProgress:n,onError:a});return}On[e]=[],On[e].push({onLoad:t,onProgress:n,onError:a});let r=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,l=this.responseType;fetch(r).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&we("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let h=On[e],d=c.body.getReader(),f=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),p=f?parseInt(f):0,m=p!==0,y=0,b=new ReadableStream({start(u){g();function g(){d.read().then(({done:S,value:x})=>{if(S)u.close();else{y+=x.byteLength;let M=new ProgressEvent("progress",{lengthComputable:m,loaded:y,total:p});for(let w=0,T=h.length;w<T;w++){let v=h[w];v.onProgress&&v.onProgress(M)}u.enqueue(x),g()}},S=>{u.error(S)})}}});return new Response(b)}else throw new tc(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return c.json();default:if(o==="")return c.text();{let d=/charset="?([^;"\s]*)"?/i.exec(o),f=d&&d[1]?d[1].toLowerCase():void 0,p=new TextDecoder(f);return c.arrayBuffer().then(m=>p.decode(m))}}}).then(c=>{wn.add(`file:${e}`,c);let h=On[e];delete On[e];for(let d=0,f=h.length;d<f;d++){let p=h[d];p.onLoad&&p.onLoad(c)}}).catch(c=>{let h=On[e];if(h===void 0)throw this.manager.itemError(e),c;delete On[e];for(let d=0,f=h.length;d<f;d++){let p=h[d];p.onError&&p.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Ka=new WeakMap,vr=class extends Tn{constructor(e){super(e)}load(e,t,n,a){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,r=wn.get(`image:${e}`);if(r!==void 0){if(r.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(r),s.manager.itemEnd(e)},0);else{let d=Ka.get(r);d===void 0&&(d=[],Ka.set(r,d)),d.push({onLoad:t,onError:a})}return r}let o=ti("img");function l(){h(),t&&t(this);let d=Ka.get(this)||[];for(let f=0;f<d.length;f++){let p=d[f];p.onLoad&&p.onLoad(this)}Ka.delete(this),s.manager.itemEnd(e)}function c(d){h(),a&&a(d),wn.remove(`image:${e}`);let f=Ka.get(this)||[];for(let p=0;p<f.length;p++){let m=f[p];m.onError&&m.onError(d)}Ka.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),wn.add(`image:${e}`,o),s.manager.itemStart(e),o.src=e,o}};var ns=class extends Tn{constructor(e){super(e)}load(e,t,n,a){let s=new St,r=new vr(this.manager);return r.setCrossOrigin(this.crossOrigin),r.setPath(this.path),r.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},n,a),s}},Ta=class extends ht{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Re(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},as=class extends Ta{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ht.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Re(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Yo=new De,bh=new O,mh=new O,pi=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Be(512,512),this.mapType=Jt,this.map=null,this.mapPass=null,this.matrix=new De,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new li,this._frameExtents=new Be(1,1),this._viewportCount=1,this._viewports=[new tt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;bh.setFromMatrixPosition(e.matrixWorld),t.position.copy(bh),mh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(mh),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,a){Yo.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Yo,e.coordinateSystem,e.reversedDepth);let s=this._frameExtents,r=a?a.z/s.x:1,o=a?a.w/s.y:1,l=a?a.x/s.x:0,c=a?a.y/s.y:0;e.coordinateSystem===ei||e.reversedDepth?t.set(.5*r,0,0,.5*r+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*r,0,0,.5*r+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(Yo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Ks=new O,Js=new kt,Sn=new O,is=class extends ht{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new De,this.projectionMatrix=new De,this.projectionMatrixInverse=new De,this.coordinateSystem=fn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Ks,Js,Sn),Sn.x===1&&Sn.y===1&&Sn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ks,Js,Sn.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Ks,Js,Sn),Sn.x===1&&Sn.y===1&&Sn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ks,Js,Sn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},na=new O,gh=new Be,xh=new Be,_t=class extends is{constructor(e=50,t=1,n=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=a,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Sa*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Di*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Sa*2*Math.atan(Math.tan(Di*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){na.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(na.x,na.y).multiplyScalar(-e/na.z),na.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(na.x,na.y).multiplyScalar(-e/na.z)}getViewSize(e,t){return this.getViewBounds(e,gh,xh),t.subVectors(xh,gh)}setViewOffset(e,t,n,a,s,r){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=a,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Di*.5*this.fov)/this.zoom,n=2*t,a=this.aspect*n,s=-.5*a,r=this.view;if(this.view!==null&&this.view.enabled){let l=r.fullWidth,c=r.fullHeight;s+=r.offsetX*a/l,t-=r.offsetY*n/c,a*=r.width/l,n*=r.height/c}let o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+a,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},nc=class extends pi{constructor(){super(new _t(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=Sa*2*e.angle*this.focus,a=this.mapSize.width/this.mapSize.height*this.aspect,s=e.distance||t.far;(n!==t.fov||a!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=a,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},ss=class extends Ta{constructor(e,t,n=0,a=Math.PI/3,s=0,r=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ht.DEFAULT_UP),this.updateMatrix(),this.target=new ht,this.distance=n,this.angle=a,this.penumbra=s,this.decay=r,this.map=null,this.shadow=new nc}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},ac=class extends pi{constructor(){super(new _t(90,1,.5,500)),this.isPointLightShadow=!0}},rs=class extends Ta{constructor(e,t,n=0,a=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=a,this.shadow=new ac}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},ca=class extends is{constructor(e=-1,t=1,n=1,a=-1,s=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=a,this.near=s,this.far=r,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,a,s,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=a,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,a=(this.top+this.bottom)/2,s=n-e,r=n+e,o=a+t,l=a-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,r=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,r,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},ic=class extends pi{constructor(){super(new ca(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ra=class extends Ta{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ht.DEFAULT_UP),this.updateMatrix(),this.target=new ht,this.shadow=new ic}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var qn=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var Zo=new WeakMap,os=class extends Tn{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&we("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&we("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,a){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,r=wn.get(`image-bitmap:${e}`);if(r!==void 0){if(s.manager.itemStart(e),r.then){r.then(c=>{Zo.has(r)===!0?(a&&a(Zo.get(r)),s.manager.itemError(e),s.manager.itemEnd(e)):(t&&t(c),s.manager.itemEnd(e))});return}setTimeout(function(){t&&t(r),s.manager.itemEnd(e)},0);return}let o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let l=fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign({},s.options,{colorSpaceConversion:"none"}))}).then(function(c){return wn.add(`image-bitmap:${e}`,c),t&&t(c),s.manager.itemEnd(e),c}).catch(function(c){a&&a(c),Zo.set(l,c),wn.remove(`image-bitmap:${e}`),s.manager.itemError(e),s.manager.itemEnd(e)});wn.add(`image-bitmap:${e}`,l),s.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Ja=-90,Ya=1,_r=class extends ht{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let a=new _t(Ja,Ya,e,t);a.layers=this.layers,this.add(a);let s=new _t(Ja,Ya,e,t);s.layers=this.layers,this.add(s);let r=new _t(Ja,Ya,e,t);r.layers=this.layers,this.add(r);let o=new _t(Ja,Ya,e,t);o.layers=this.layers,this.add(o);let l=new _t(Ja,Ya,e,t);l.layers=this.layers,this.add(l);let c=new _t(Ja,Ya,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,a,s,r,o,l]=t;for(let c of t)this.remove(c);if(e===fn)n.up.set(0,1,0),n.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ei)n.up.set(0,-1,0),n.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,r,o,l,c,h]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;let y=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let b=!1;e.isWebGLRenderer===!0?b=e.state.buffers.depth.getReversed():b=e.reversedDepthBuffer,e.setRenderTarget(n,0,a),b&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,1,a),b&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,2,a),b&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,a),b&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,a),b&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=y,e.setRenderTarget(n,5,a),b&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(d,f,p),e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},Mr=class extends _t{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var Sr=class{constructor(e,t,n){this.binding=e,this.valueSize=n;let a,s,r;switch(t){case"quaternion":a=this._slerp,s=this._slerpAdditive,r=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":a=this._select,s=this._select,r=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:a=this._lerp,s=this._lerpAdditive,r=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=a,this._mixBufferRegionAdditive=s,this._setIdentity=r,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){let n=this.buffer,a=this.valueSize,s=e*a+a,r=this.cumulativeWeight;if(r===0){for(let o=0;o!==a;++o)n[s+o]=n[o];r=t}else{r+=t;let o=t/r;this._mixBufferRegion(n,s,0,o,a)}this.cumulativeWeight=r}accumulateAdditive(e){let t=this.buffer,n=this.valueSize,a=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,a,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){let t=this.valueSize,n=this.buffer,a=e*t+t,s=this.cumulativeWeight,r=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,s<1){let l=t*this._origIndex;this._mixBufferRegion(n,a,l,1-s,t)}r>0&&this._mixBufferRegionAdditive(n,a,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(n[l]!==n[l+t]){o.setValue(n,a);break}}saveOriginalState(){let e=this.binding,t=this.buffer,n=this.valueSize,a=n*this._origIndex;e.getValue(t,a);for(let s=n,r=a;s!==r;++s)t[s]=t[a+s%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){let e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,a,s){if(a>=.5)for(let r=0;r!==s;++r)e[t+r]=e[n+r]}_slerp(e,t,n,a){kt.slerpFlat(e,t,e,t,e,n,a)}_slerpAdditive(e,t,n,a,s){let r=this._workIndex*s;kt.multiplyQuaternionsFlat(e,r,e,t,e,n),kt.slerpFlat(e,t,e,t,e,r,a)}_lerp(e,t,n,a,s){let r=1-a;for(let o=0;o!==s;++o){let l=t+o;e[l]=e[l]*r+e[n+o]*a}}_lerpAdditive(e,t,n,a,s){for(let r=0;r!==s;++r){let o=t+r;e[o]=e[o]+e[n+r]*a}}},kc="\\[\\]\\.:\\/",Qf=new RegExp("["+kc+"]","g"),Dc="[^"+kc+"]",$f="[^"+kc.replace("\\.","")+"]",eu=/((?:WC+[\/:])*)/.source.replace("WC",Dc),tu=/(WCOD+)?/.source.replace("WCOD",$f),nu=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Dc),au=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Dc),iu=new RegExp("^"+eu+tu+nu+au+"$"),su=["material","materials","bones","map"],sc=class{constructor(e,t,n){let a=n||at.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,a)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,a=this._bindings[n];a!==void 0&&a.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let a=this._targetGroup.nCachedObjects_,s=n.length;a!==s;++a)n[a].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},at=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Qf,"")}static parseTrackName(e){let t=iu.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},a=n.nodeName&&n.nodeName.lastIndexOf(".");if(a!==void 0&&a!==-1){let s=n.nodeName.substring(a+1);su.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,a),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(s){for(let r=0;r<s.length;r++){let o=s[r];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},a=n(e.children);if(a)return a}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let a=0,s=n.length;a!==s;++a)e[t++]=n[a]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let a=0,s=n.length;a!==s;++a)n[a]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let a=0,s=n.length;a!==s;++a)n[a]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let a=0,s=n.length;a!==s;++a)n[a]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,a=t.propertyName,s=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){we("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){Ce("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Ce("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Ce("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Ce("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Ce("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Ce("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){Ce("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let r=e[a];if(r===void 0){let c=t.nodeName;Ce("PropertyBinding: Trying to update property for track: "+c+"."+a+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(a==="morphTargetInfluences"){if(!e.geometry){Ce("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Ce("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=r,this.propertyIndex=s}else r.fromArray!==void 0&&r.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=r):Array.isArray(r)?(l=this.BindingType.EntireArray,this.resolvedProperty=r):this.propertyName=a;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};at.Composite=sc;at.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};at.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};at.prototype.GetterByBindingType=[at.prototype._getValue_direct,at.prototype._getValue_array,at.prototype._getValue_arrayElement,at.prototype._getValue_toArray];at.prototype.SetterByBindingTypeAndVersioning=[[at.prototype._setValue_direct,at.prototype._setValue_direct_setNeedsUpdate,at.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[at.prototype._setValue_array,at.prototype._setValue_array_setNeedsUpdate,at.prototype._setValue_array_setMatrixWorldNeedsUpdate],[at.prototype._setValue_arrayElement,at.prototype._setValue_arrayElement_setNeedsUpdate,at.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[at.prototype._setValue_fromArray,at.prototype._setValue_fromArray_setNeedsUpdate,at.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var wr=class{constructor(e,t,n=null,a=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=a;let s=t.tracks,r=s.length,o=new Array(r),l={endingStart:xa,endingEnd:xa};for(let c=0;c!==r;++c){let h=s[c].createInterpolant(null);o[c]=h,h.settings=l}this._interpolantSettings=l,this._interpolants=o,this._propertyBindings=new Array(r),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._restoreTimeScale=null,this._weightInterpolant=null,this.loop=Vh,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n=!1){if(e.fadeOut(t),this.fadeIn(t),n===!0){let a=this._clip.duration,s=e._clip.duration,r=s/a,o=a/s;e._restoreTimeScale=e.timeScale,this._restoreTimeScale=this.timeScale,e.warp(1,r,t),this.warp(o,1,t)}return this}crossFadeTo(e,t,n=!1){return e.crossFadeFrom(this,t,n)}stopFading(){let e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){let a=this._mixer,s=a.time,r=this.timeScale,o=this._timeScaleInterpolant;o===null&&(o=a._lendControlInterpolant(),this._timeScaleInterpolant=o);let l=o.parameterPositions,c=o.sampleValues;return l[0]=s,l[1]=s+n,c[0]=e/r,c[1]=t/r,this}stopWarping(){let e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this._restoreTimeScale=null,this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,a){if(!this.enabled){this._updateWeight(e);return}let s=this._startTime;if(s!==null){let l=(e-s)*n;l<0||n===0?t=0:(this._startTime=null,t=n*l)}t*=this._updateTimeScale(e);let r=this._updateTime(t),o=this._updateWeight(e);if(o>0){let l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case Xh:for(let h=0,d=l.length;h!==d;++h)l[h].evaluate(r),c[h].accumulateAdditive(o);break;case fo:default:for(let h=0,d=l.length;h!==d;++h)l[h].evaluate(r),c[h].accumulate(a,o)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;let n=this._weightInterpolant;if(n!==null){let a=n.evaluate(e)[0];t*=a,e>n.parameterPositions[1]&&(this.stopFading(),a===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;let n=this._timeScaleInterpolant;if(n!==null){let a=n.evaluate(e)[0];t*=a,e>n.parameterPositions[1]&&(t===0?this.paused=!0:(this._restoreTimeScale!==null&&(t=this._restoreTimeScale),this.timeScale=t),this.stopWarping())}}return this._effectiveTimeScale=t,t}_updateTime(e){let t=this._clip.duration,n=this.loop,a=this.time+e,s=this._loopCount,r=n===Wh;if(e===0)return s===-1?a:r&&(s&1)===1?t-a:a;if(n===Gh){s===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(a>=t)a=t;else if(a<0)a=0;else{this.time=a;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=a,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(s===-1&&(e>=0?(s=0,this._setEndings(!0,this.repetitions===0,r)):this._setEndings(this.repetitions===0,!0,r)),a>=t||a<0){let o=Math.floor(a/t);a-=t*o,s+=Math.abs(o);let l=this.repetitions-s;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,a=e>0?t:0,this.time=a,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){let c=e<0;this._setEndings(c,!c,r)}else this._setEndings(!1,!1,r);this._loopCount=s,this.time=a,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this._loopCount=s,this.time=a;if(r&&(s&1)===1)return t-a}return a}_setEndings(e,t,n){let a=this._interpolantSettings;n?(a.endingStart=ya,a.endingEnd=ya):(e?a.endingStart=this.zeroSlopeAtStart?ya:xa:a.endingStart=Ui,t?a.endingEnd=this.zeroSlopeAtEnd?ya:xa:a.endingEnd=Ui)}_scheduleFading(e,t,n){let a=this._mixer,s=a.time,r=this._weightInterpolant;r===null&&(r=a._lendControlInterpolant(),this._weightInterpolant=r);let o=r.parameterPositions,l=r.sampleValues;return o[0]=s,l[0]=t,o[1]=s+e,l[1]=n,this}},ru=new Float32Array(1),cs=class extends bn{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}_bindAction(e,t){let n=e._localRoot||this._root,a=e._clip.tracks,s=a.length,r=e._propertyBindings,o=e._interpolants,l=n.uuid,c=this._bindingsByRootAndName,h=c[l];h===void 0&&(h={},c[l]=h);for(let d=0;d!==s;++d){let f=a[d],p=f.name,m=h[p];if(m!==void 0)++m.referenceCount,r[d]=m;else{if(m=r[d],m!==void 0){m._cacheIndex===null&&(++m.referenceCount,this._addInactiveBinding(m,l,p));continue}let y=t&&t._propertyBindings[d].binding.parsedPath;m=new Sr(at.create(n,p,y),f.ValueTypeName,f.getValueSize()),++m.referenceCount,this._addInactiveBinding(m,l,p),r[d]=m}o[d].resultBuffer=m.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){let n=(e._localRoot||this._root).uuid,a=e._clip.uuid,s=this._actionsByClip[a];this._bindAction(e,s&&s.knownActions[0]),this._addInactiveAction(e,a,n)}let t=e._propertyBindings;for(let n=0,a=t.length;n!==a;++n){let s=t[n];s.useCount++===0&&(this._lendBinding(s),s.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){let t=e._propertyBindings;for(let n=0,a=t.length;n!==a;++n){let s=t[n];--s.useCount===0&&(s.restoreOriginalState(),this._takeBackBinding(s))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){let t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){let a=this._actions,s=this._actionsByClip,r=s[t];if(r===void 0)r={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,s[t]=r;else{let o=r.knownActions;e._byClipCacheIndex=o.length,o.push(e)}e._cacheIndex=a.length,a.push(e),r.actionByRoot[n]=e}_removeInactiveAction(e){let t=this._actions,n=t[t.length-1],a=e._cacheIndex;n._cacheIndex=a,t[a]=n,t.pop(),e._cacheIndex=null;let s=e._clip.uuid,r=this._actionsByClip,o=r[s],l=o.knownActions,c=l[l.length-1],h=e._byClipCacheIndex;c._byClipCacheIndex=h,l[h]=c,l.pop(),e._byClipCacheIndex=null;let d=o.actionByRoot,f=(e._localRoot||this._root).uuid;delete d[f],l.length===0&&delete r[s],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){let t=e._propertyBindings;for(let n=0,a=t.length;n!==a;++n){let s=t[n];--s.referenceCount===0&&this._removeInactiveBinding(s)}}_lendAction(e){let t=this._actions,n=e._cacheIndex,a=this._nActiveActions++,s=t[a];e._cacheIndex=a,t[a]=e,s._cacheIndex=n,t[n]=s}_takeBackAction(e){let t=this._actions,n=e._cacheIndex,a=--this._nActiveActions,s=t[a];e._cacheIndex=a,t[a]=e,s._cacheIndex=n,t[n]=s}_addInactiveBinding(e,t,n){let a=this._bindingsByRootAndName,s=this._bindings,r=a[t];r===void 0&&(r={},a[t]=r),r[n]=e,e._cacheIndex=s.length,s.push(e)}_removeInactiveBinding(e){let t=this._bindings,n=e.binding,a=n.rootNode.uuid,s=n.path,r=this._bindingsByRootAndName,o=r[a],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete o[s],Object.keys(o).length===0&&delete r[a]}_lendBinding(e){let t=this._bindings,n=e._cacheIndex,a=this._nActiveBindings++,s=t[a];e._cacheIndex=a,t[a]=e,s._cacheIndex=n,t[n]=s}_takeBackBinding(e){let t=this._bindings,n=e._cacheIndex,a=--this._nActiveBindings,s=t[a];e._cacheIndex=a,t[a]=e,s._cacheIndex=n,t[n]=s}_lendControlInterpolant(){let e=this._controlInterpolants,t=this._nActiveControlInterpolants++,n=e[t];return n===void 0&&(n=new es(new Float32Array(2),new Float32Array(2),1,ru),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){let t=this._controlInterpolants,n=e.__cacheIndex,a=--this._nActiveControlInterpolants,s=t[a];e.__cacheIndex=a,t[a]=e,s.__cacheIndex=n,t[n]=s}clipAction(e,t,n){let a=t||this._root,s=a.uuid,r=typeof e=="string"?Ea.findByName(a,e):e,o=r!==null?r.uuid:e,l=this._actionsByClip[o],c=null;if(n===void 0&&(r!==null?n=r.blendMode:n=fo),l!==void 0){let d=l.actionByRoot[s];if(d!==void 0&&d.blendMode===n)return d;c=l.knownActions[0],r===null&&(r=c._clip)}if(r===null)return null;let h=new wr(this,r,t,n);return this._bindAction(h,c),this._addInactiveAction(h,o,s),h}existingAction(e,t){let n=t||this._root,a=n.uuid,s=typeof e=="string"?Ea.findByName(n,e):e,r=s?s.uuid:e,o=this._actionsByClip[r];return o!==void 0&&o.actionByRoot[a]||null}stopAllAction(){let e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;let t=this._actions,n=this._nActiveActions,a=this.time+=e,s=Math.sign(e),r=this._accuIndex^=1;for(let c=0;c!==n;++c)t[c]._update(a,e,s,r);let o=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)o[c].apply(r);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){let t=this._actions,n=e.uuid,a=this._actionsByClip,s=a[n];if(s!==void 0){let r=s.knownActions;for(let o=0,l=r.length;o!==l;++o){let c=r[o];this._deactivateAction(c);let h=c._cacheIndex,d=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,d._cacheIndex=h,t[h]=d,t.pop(),this._removeInactiveBindingsForAction(c)}delete a[n]}}uncacheRoot(e){let t=e.uuid,n=this._actionsByClip;for(let r in n){let o=n[r].actionByRoot,l=o[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}let a=this._bindingsByRootAndName,s=a[t];if(s!==void 0)for(let r in s){let o=s[r];o.restoreOriginalState(),this._removeInactiveBinding(o)}}uncacheAction(e,t){let n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}};var rc=class i{static{i.prototype.isMatrix2=!0}constructor(e,t,n,a){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,a)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,a){let s=this.elements;return s[0]=e,s[2]=t,s[1]=n,s[3]=a,this}};function Fc(i,e,t,n){let a=ou(n);switch(t){case Ac:return i*e;case Nr:return i*e/a.components*a.byteLength;case Pr:return i*e/a.components*a.byteLength;case da:return i*e*2/a.components*a.byteLength;case kr:return i*e*2/a.components*a.byteLength;case Ec:return i*e*3/a.components*a.byteLength;case en:return i*e*4/a.components*a.byteLength;case Dr:return i*e*4/a.components*a.byteLength;case fs:case us:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ps:case bs:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ur:case Or:return Math.max(i,16)*Math.max(e,8)/4;case Fr:case Lr:return Math.max(i,8)*Math.max(e,8)/2;case Br:case zr:case jr:case Gr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Hr:case ms:case Vr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Wr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Xr:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case qr:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Kr:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Jr:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Yr:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Zr:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Qr:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case $r:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case eo:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case to:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case no:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case ao:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case io:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case so:case ro:case oo:return Math.ceil(i/4)*Math.ceil(e/4)*16;case co:case lo:return Math.ceil(i/4)*Math.ceil(e/4)*8;case gs:case ho:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function ou(i){switch(i){case Jt:case _c:return{byteLength:1,components:1};case xi:case Mc:case vn:return{byteLength:2,components:1};case Ir:case Cr:return{byteLength:2,components:4};case yn:case Rr:case $t:return{byteLength:4,components:1};case Sc:case wc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?we("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function Nd(){let i=null,e=!1,t=null,n=null;function a(s,r){n=i.requestAnimationFrame(a),t(s,r)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(a),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function lu(i){let e=new WeakMap;function t(o,l){let c=o.array,h=o.usage,d=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,h),o.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,l,c){let h=l.array,d=l.updateRanges;if(i.bindBuffer(c,o),d.length===0)i.bufferSubData(c,0,h);else{d.sort((p,m)=>p.start-m.start);let f=0;for(let p=1;p<d.length;p++){let m=d[f],y=d[p];y.start<=m.start+m.count+1?m.count=Math.max(m.count,y.start+y.count-m.start):(++f,d[f]=y)}d.length=f+1;for(let p=0,m=d.length;p<m;p++){let y=d[p];i.bufferSubData(c,y.start*h.BYTES_PER_ELEMENT,h,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function a(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function r(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:a,remove:s,update:r}}var hu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,du=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,fu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,uu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,pu=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,bu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,mu=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,gu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,xu=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,yu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,vu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,_u=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Mu=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Su=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,wu=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Au=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Eu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Tu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ru=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Iu=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Cu=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Nu=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Pu=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,ku=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Du=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Fu=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,Uu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Lu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ou=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Bu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,zu="gl_FragColor = linearToOutputTexel( gl_FragColor );",Hu=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ju=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Gu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Vu=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Wu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Xu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,qu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ku=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ju=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Yu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Zu=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Qu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,$u=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ep=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,tp=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,np=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,ap=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ip=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,sp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,rp=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,op=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,cp=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lp=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,hp=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,dp=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,fp=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,up=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,pp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,bp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,mp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,gp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,xp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,yp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,vp=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_p=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Mp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Sp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,wp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ap=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ep=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Tp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Rp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Ip=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Cp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Np=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Pp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,kp=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Dp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Fp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Up=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Lp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Op=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Bp=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,zp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Hp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,jp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Gp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Vp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Wp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Xp=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,qp=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Kp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Jp=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Yp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Zp=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Qp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,$p=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,eb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,tb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,nb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ab=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,ib=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,sb=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,rb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ob=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,cb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,lb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,hb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,db=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ub=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,bb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mb=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,gb=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,xb=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,yb=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,vb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,_b=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Mb=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Sb=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,wb=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Ab=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Eb=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Tb=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Rb=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Ib=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Cb=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Nb=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Pb=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,kb=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Db=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Fb=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ub=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Lb=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ob=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Bb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,zb=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Hb=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,jb=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Gb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ue={alphahash_fragment:hu,alphahash_pars_fragment:du,alphamap_fragment:fu,alphamap_pars_fragment:uu,alphatest_fragment:pu,alphatest_pars_fragment:bu,aomap_fragment:mu,aomap_pars_fragment:gu,batching_pars_vertex:xu,batching_vertex:yu,begin_vertex:vu,beginnormal_vertex:_u,bsdfs:Mu,iridescence_fragment:Su,bumpmap_pars_fragment:wu,clipping_planes_fragment:Au,clipping_planes_pars_fragment:Eu,clipping_planes_pars_vertex:Tu,clipping_planes_vertex:Ru,color_fragment:Iu,color_pars_fragment:Cu,color_pars_vertex:Nu,color_vertex:Pu,common:ku,cube_uv_reflection_fragment:Du,defaultnormal_vertex:Fu,displacementmap_pars_vertex:Uu,displacementmap_vertex:Lu,emissivemap_fragment:Ou,emissivemap_pars_fragment:Bu,colorspace_fragment:zu,colorspace_pars_fragment:Hu,envmap_fragment:ju,envmap_common_pars_fragment:Gu,envmap_pars_fragment:Vu,envmap_pars_vertex:Wu,envmap_physical_pars_fragment:np,envmap_vertex:Xu,fog_vertex:qu,fog_pars_vertex:Ku,fog_fragment:Ju,fog_pars_fragment:Yu,gradientmap_pars_fragment:Zu,lightmap_pars_fragment:Qu,lights_lambert_fragment:$u,lights_lambert_pars_fragment:ep,lights_pars_begin:tp,lights_toon_fragment:ap,lights_toon_pars_fragment:ip,lights_phong_fragment:sp,lights_phong_pars_fragment:rp,lights_physical_fragment:op,lights_physical_pars_fragment:cp,lights_fragment_begin:lp,lights_fragment_maps:hp,lights_fragment_end:dp,lightprobes_pars_fragment:fp,logdepthbuf_fragment:up,logdepthbuf_pars_fragment:pp,logdepthbuf_pars_vertex:bp,logdepthbuf_vertex:mp,map_fragment:gp,map_pars_fragment:xp,map_particle_fragment:yp,map_particle_pars_fragment:vp,metalnessmap_fragment:_p,metalnessmap_pars_fragment:Mp,morphinstance_vertex:Sp,morphcolor_vertex:wp,morphnormal_vertex:Ap,morphtarget_pars_vertex:Ep,morphtarget_vertex:Tp,normal_fragment_begin:Rp,normal_fragment_maps:Ip,normal_pars_fragment:Cp,normal_pars_vertex:Np,normal_vertex:Pp,normalmap_pars_fragment:kp,clearcoat_normal_fragment_begin:Dp,clearcoat_normal_fragment_maps:Fp,clearcoat_pars_fragment:Up,iridescence_pars_fragment:Lp,opaque_fragment:Op,packing:Bp,premultiplied_alpha_fragment:zp,project_vertex:Hp,dithering_fragment:jp,dithering_pars_fragment:Gp,roughnessmap_fragment:Vp,roughnessmap_pars_fragment:Wp,shadowmap_pars_fragment:Xp,shadowmap_pars_vertex:qp,shadowmap_vertex:Kp,shadowmask_pars_fragment:Jp,skinbase_vertex:Yp,skinning_pars_vertex:Zp,skinning_vertex:Qp,skinnormal_vertex:$p,specularmap_fragment:eb,specularmap_pars_fragment:tb,tonemapping_fragment:nb,tonemapping_pars_fragment:ab,transmission_fragment:ib,transmission_pars_fragment:sb,uv_pars_fragment:rb,uv_pars_vertex:ob,uv_vertex:cb,worldpos_vertex:lb,background_vert:hb,background_frag:db,backgroundCube_vert:fb,backgroundCube_frag:ub,cube_vert:pb,cube_frag:bb,depth_vert:mb,depth_frag:gb,distance_vert:xb,distance_frag:yb,equirect_vert:vb,equirect_frag:_b,linedashed_vert:Mb,linedashed_frag:Sb,meshbasic_vert:wb,meshbasic_frag:Ab,meshlambert_vert:Eb,meshlambert_frag:Tb,meshmatcap_vert:Rb,meshmatcap_frag:Ib,meshnormal_vert:Cb,meshnormal_frag:Nb,meshphong_vert:Pb,meshphong_frag:kb,meshphysical_vert:Db,meshphysical_frag:Fb,meshtoon_vert:Ub,meshtoon_frag:Lb,points_vert:Ob,points_frag:Bb,shadow_vert:zb,shadow_frag:Hb,sprite_vert:jb,sprite_frag:Gb},he={common:{diffuse:{value:new Re(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ne},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ne}},envmap:{envMap:{value:null},envMapRotation:{value:new Ne},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ne}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ne}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ne},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ne},normalScale:{value:new Be(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ne},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ne}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ne}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ne}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Re(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new O},probesMax:{value:new O},probesResolution:{value:new O}},points:{diffuse:{value:new Re(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0},uvTransform:{value:new Ne}},sprite:{diffuse:{value:new Re(16777215)},opacity:{value:1},center:{value:new Be(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ne},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0}}},Nn={basic:{uniforms:Ft([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.fog]),vertexShader:Ue.meshbasic_vert,fragmentShader:Ue.meshbasic_frag},lambert:{uniforms:Ft([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new Re(0)},envMapIntensity:{value:1}}]),vertexShader:Ue.meshlambert_vert,fragmentShader:Ue.meshlambert_frag},phong:{uniforms:Ft([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new Re(0)},specular:{value:new Re(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ue.meshphong_vert,fragmentShader:Ue.meshphong_frag},standard:{uniforms:Ft([he.common,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.roughnessmap,he.metalnessmap,he.fog,he.lights,{emissive:{value:new Re(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag},toon:{uniforms:Ft([he.common,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.gradientmap,he.fog,he.lights,{emissive:{value:new Re(0)}}]),vertexShader:Ue.meshtoon_vert,fragmentShader:Ue.meshtoon_frag},matcap:{uniforms:Ft([he.common,he.bumpmap,he.normalmap,he.displacementmap,he.fog,{matcap:{value:null}}]),vertexShader:Ue.meshmatcap_vert,fragmentShader:Ue.meshmatcap_frag},points:{uniforms:Ft([he.points,he.fog]),vertexShader:Ue.points_vert,fragmentShader:Ue.points_frag},dashed:{uniforms:Ft([he.common,he.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ue.linedashed_vert,fragmentShader:Ue.linedashed_frag},depth:{uniforms:Ft([he.common,he.displacementmap]),vertexShader:Ue.depth_vert,fragmentShader:Ue.depth_frag},normal:{uniforms:Ft([he.common,he.bumpmap,he.normalmap,he.displacementmap,{opacity:{value:1}}]),vertexShader:Ue.meshnormal_vert,fragmentShader:Ue.meshnormal_frag},sprite:{uniforms:Ft([he.sprite,he.fog]),vertexShader:Ue.sprite_vert,fragmentShader:Ue.sprite_frag},background:{uniforms:{uvTransform:{value:new Ne},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ue.background_vert,fragmentShader:Ue.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ne}},vertexShader:Ue.backgroundCube_vert,fragmentShader:Ue.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ue.cube_vert,fragmentShader:Ue.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ue.equirect_vert,fragmentShader:Ue.equirect_frag},distance:{uniforms:Ft([he.common,he.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ue.distance_vert,fragmentShader:Ue.distance_frag},shadow:{uniforms:Ft([he.lights,he.fog,{color:{value:new Re(0)},opacity:{value:1}}]),vertexShader:Ue.shadow_vert,fragmentShader:Ue.shadow_frag}};Nn.physical={uniforms:Ft([Nn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ne},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ne},clearcoatNormalScale:{value:new Be(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ne},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ne},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ne},sheen:{value:0},sheenColor:{value:new Re(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ne},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ne},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ne},transmissionSamplerSize:{value:new Be},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ne},attenuationDistance:{value:0},attenuationColor:{value:new Re(0)},specularColor:{value:new Re(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ne},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ne},anisotropyVector:{value:new Be},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ne}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag};var mo={r:0,b:0,g:0},Vb=new De,Pd=new Ne;Pd.set(-1,0,0,0,1,0,0,0,1);function Wb(i,e,t,n,a,s){let r=new Re(0),o=a===!0?0:1,l,c,h=null,d=0,f=null;function p(g){let S=g.isScene===!0?g.background:null;if(S&&S.isTexture){let x=g.backgroundBlurriness>0;S=e.get(S,x)}return S}function m(g){let S=!1,x=p(g);x===null?b(r,o):x&&x.isColor&&(b(x,1),S=!0);let M=i.xr.getEnvironmentBlendMode();M==="additive"?t.buffers.color.setClear(0,0,0,1,s):M==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(i.autoClear||S)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function y(g,S){let x=p(S);x&&(x.isCubeTexture||x.mapping===ds)?(c===void 0&&(c=new Rt(new fi(1,1,1),new Qt({name:"BackgroundCubeMaterial",uniforms:Pa(Nn.backgroundCube.uniforms),vertexShader:Nn.backgroundCube.vertexShader,fragmentShader:Nn.backgroundCube.fragmentShader,side:Ht,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(M,w,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=x,c.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Vb.makeRotationFromEuler(S.backgroundRotation)).transpose(),x.isCubeTexture&&x.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Pd),c.material.toneMapped=Oe.getTransfer(x.colorSpace)!==Qe,(h!==x||d!==x.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,h=x,d=x.version,f=i.toneMapping),c.layers.enableAll(),g.unshift(c,c.geometry,c.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new Rt(new $i(2,2),new Qt({name:"BackgroundMaterial",uniforms:Pa(Nn.background.uniforms),vertexShader:Nn.background.vertexShader,fragmentShader:Nn.background.fragmentShader,side:Rn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.toneMapped=Oe.getTransfer(x.colorSpace)!==Qe,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||d!==x.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,h=x,d=x.version,f=i.toneMapping),l.layers.enableAll(),g.unshift(l,l.geometry,l.material,0,0,null))}function b(g,S){g.getRGB(mo,Pc(i)),t.buffers.color.setClear(mo.r,mo.g,mo.b,S,s)}function u(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return r},setClearColor:function(g,S=1){r.set(g),o=S,b(r,o)},getClearAlpha:function(){return o},setClearAlpha:function(g){o=g,b(r,o)},render:m,addToRenderList:y,dispose:u}}function Xb(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},a=f(null),s=a,r=!1;function o(C,N,L,P,F){let z=!1,G=d(C,P,L,N);s!==G&&(s=G,c(s.object)),z=p(C,P,L,F),z&&m(C,P,L,F),F!==null&&e.update(F,i.ELEMENT_ARRAY_BUFFER),(z||r)&&(r=!1,x(C,N,L,P),F!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(F).buffer))}function l(){return i.createVertexArray()}function c(C){return i.bindVertexArray(C)}function h(C){return i.deleteVertexArray(C)}function d(C,N,L,P){let F=P.wireframe===!0,z=n[N.id];z===void 0&&(z={},n[N.id]=z);let G=C.isInstancedMesh===!0?C.id:0,Z=z[G];Z===void 0&&(Z={},z[G]=Z);let V=Z[L.id];V===void 0&&(V={},Z[L.id]=V);let K=V[F];return K===void 0&&(K=f(l()),V[F]=K),K}function f(C){let N=[],L=[],P=[];for(let F=0;F<t;F++)N[F]=0,L[F]=0,P[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:L,attributeDivisors:P,object:C,attributes:{},index:null}}function p(C,N,L,P){let F=s.attributes,z=N.attributes,G=0,Z=L.getAttributes();for(let V in Z)if(Z[V].location>=0){let ee=F[V],be=z[V];if(be===void 0&&(V==="instanceMatrix"&&C.instanceMatrix&&(be=C.instanceMatrix),V==="instanceColor"&&C.instanceColor&&(be=C.instanceColor)),ee===void 0||ee.attribute!==be||be&&ee.data!==be.data)return!0;G++}return s.attributesNum!==G||s.index!==P}function m(C,N,L,P){let F={},z=N.attributes,G=0,Z=L.getAttributes();for(let V in Z)if(Z[V].location>=0){let ee=z[V];ee===void 0&&(V==="instanceMatrix"&&C.instanceMatrix&&(ee=C.instanceMatrix),V==="instanceColor"&&C.instanceColor&&(ee=C.instanceColor));let be={};be.attribute=ee,ee&&ee.data&&(be.data=ee.data),F[V]=be,G++}s.attributes=F,s.attributesNum=G,s.index=P}function y(){let C=s.newAttributes;for(let N=0,L=C.length;N<L;N++)C[N]=0}function b(C){u(C,0)}function u(C,N){let L=s.newAttributes,P=s.enabledAttributes,F=s.attributeDivisors;L[C]=1,P[C]===0&&(i.enableVertexAttribArray(C),P[C]=1),F[C]!==N&&(i.vertexAttribDivisor(C,N),F[C]=N)}function g(){let C=s.newAttributes,N=s.enabledAttributes;for(let L=0,P=N.length;L<P;L++)N[L]!==C[L]&&(i.disableVertexAttribArray(L),N[L]=0)}function S(C,N,L,P,F,z,G){G===!0?i.vertexAttribIPointer(C,N,L,F,z):i.vertexAttribPointer(C,N,L,P,F,z)}function x(C,N,L,P){y();let F=P.attributes,z=L.getAttributes(),G=N.defaultAttributeValues;for(let Z in z){let V=z[Z];if(V.location>=0){let K=F[Z];if(K===void 0&&(Z==="instanceMatrix"&&C.instanceMatrix&&(K=C.instanceMatrix),Z==="instanceColor"&&C.instanceColor&&(K=C.instanceColor)),K!==void 0){let ee=K.normalized,be=K.itemSize,pe=e.get(K);if(pe===void 0)continue;let qe=pe.buffer,Le=pe.type,We=pe.bytesPerElement,J=Le===i.INT||Le===i.UNSIGNED_INT||K.gpuType===Rr;if(K.isInterleavedBufferAttribute){let te=K.data,ye=te.stride,Pe=K.offset;if(te.isInstancedInterleavedBuffer){for(let ge=0;ge<V.locationSize;ge++)u(V.location+ge,te.meshPerAttribute);C.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let ge=0;ge<V.locationSize;ge++)b(V.location+ge);i.bindBuffer(i.ARRAY_BUFFER,qe);for(let ge=0;ge<V.locationSize;ge++)S(V.location+ge,be/V.locationSize,Le,ee,ye*We,(Pe+be/V.locationSize*ge)*We,J)}else{if(K.isInstancedBufferAttribute){for(let te=0;te<V.locationSize;te++)u(V.location+te,K.meshPerAttribute);C.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let te=0;te<V.locationSize;te++)b(V.location+te);i.bindBuffer(i.ARRAY_BUFFER,qe);for(let te=0;te<V.locationSize;te++)S(V.location+te,be/V.locationSize,Le,ee,be*We,be/V.locationSize*te*We,J)}}else if(G!==void 0){let ee=G[Z];if(ee!==void 0)switch(ee.length){case 2:i.vertexAttrib2fv(V.location,ee);break;case 3:i.vertexAttrib3fv(V.location,ee);break;case 4:i.vertexAttrib4fv(V.location,ee);break;default:i.vertexAttrib1fv(V.location,ee)}}}}g()}function M(){E();for(let C in n){let N=n[C];for(let L in N){let P=N[L];for(let F in P){let z=P[F];for(let G in z)h(z[G].object),delete z[G];delete P[F]}}delete n[C]}}function w(C){if(n[C.id]===void 0)return;let N=n[C.id];for(let L in N){let P=N[L];for(let F in P){let z=P[F];for(let G in z)h(z[G].object),delete z[G];delete P[F]}}delete n[C.id]}function T(C){for(let N in n){let L=n[N];for(let P in L){let F=L[P];if(F[C.id]===void 0)continue;let z=F[C.id];for(let G in z)h(z[G].object),delete z[G];delete F[C.id]}}}function v(C){for(let N in n){let L=n[N],P=C.isInstancedMesh===!0?C.id:0,F=L[P];if(F!==void 0){for(let z in F){let G=F[z];for(let Z in G)h(G[Z].object),delete G[Z];delete F[z]}delete L[P],Object.keys(L).length===0&&delete n[N]}}}function E(){I(),r=!0,s!==a&&(s=a,c(s.object))}function I(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:o,reset:E,resetDefaultState:I,dispose:M,releaseStatesOfGeometry:w,releaseStatesOfObject:v,releaseStatesOfProgram:T,initAttributes:y,enableAttribute:b,disableUnusedAttributes:g}}function qb(i,e,t){let n;function a(l){n=l}function s(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function r(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),t.update(c,n,h))}function o(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let f=0;for(let p=0;p<h;p++)f+=c[p];t.update(f,n,1)}this.setMode=a,this.render=s,this.renderInstances=r,this.renderMultiDraw=o}function Kb(i,e,t,n){let a;function s(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){let T=e.get("EXT_texture_filter_anisotropic");a=i.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function r(T){return!(T!==en&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(T){let v=T===vn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==Jt&&T!==$t&&!v&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(T){if(T==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(we("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&f===!1&&we("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_TEXTURE_SIZE),b=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),u=i.getParameter(i.MAX_VERTEX_ATTRIBS),g=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),S=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),M=i.getParameter(i.MAX_SAMPLES),w=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:r,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:m,maxTextureSize:y,maxCubemapSize:b,maxAttributes:u,maxVertexUniforms:g,maxVaryings:S,maxFragmentUniforms:x,maxSamples:M,samples:w}}function Jb(i){let e=this,t=null,n=0,a=!1,s=!1,r=new hn,o=new Ne,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){let p=d.length!==0||f||n!==0||a;return a=f,n=d.length,p},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,f){t=h(d,f,0)},this.setState=function(d,f,p){let m=d.clippingPlanes,y=d.clipIntersection,b=d.clipShadows,u=i.get(d);if(!a||m===null||m.length===0||s&&!b)s?h(null):c();else{let g=s?0:n,S=g*4,x=u.clippingState||null;l.value=x,x=h(m,f,S,p);for(let M=0;M!==S;++M)x[M]=t[M];u.clippingState=x,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=g}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(d,f,p,m){let y=d!==null?d.length:0,b=null;if(y!==0){if(b=l.value,m!==!0||b===null){let u=p+y*4,g=f.matrixWorldInverse;o.getNormalMatrix(g),(b===null||b.length<u)&&(b=new Float32Array(u));for(let S=0,x=p;S!==y;++S,x+=4)r.copy(d[S]).applyMatrix4(g,o),r.normal.toArray(b,x),b[x+3]=r.constant}l.value=b,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,b}}var Mi=4,Yb=6,Zb=20,Qb=256,ys=new ca,hd=new Re,Uc=null,Lc=0,Oc=0,Bc=!1,$b=new O,ka=new O,xo=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,a=100,s={}){let{size:r=256,position:o=$b}=s;Uc=this._renderer.getRenderTarget(),Lc=this._renderer.getActiveCubeFace(),Oc=this._renderer.getActiveMipmapLevel(),Bc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(r);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,a,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ud(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=fd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Uc,Lc,Oc),this._renderer.xr.enabled=Bc,e.scissorTest=!1,_i(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===la||e.mapping===Ca?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Uc=this._renderer.getRenderTarget(),Lc=this._renderer.getActiveCubeFace(),Oc=this._renderer.getActiveMipmapLevel(),Bc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:mt,minFilter:mt,generateMipmaps:!1,type:vn,format:en,colorSpace:Bt,depthBuffer:!1},a=dd(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=dd(e,t,n);let{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=em(s)),this._blurMaterial=nm(s,e,t),this._ggxMaterial=tm(s,e,t)}return a}_compileMaterial(e){let t=new Rt(new Dt,e);this._renderer.compile(t,ys)}_sceneToCubeUV(e,t,n,a,s){let l=new _t(90,1,t,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,p=d.toneMapping;d.getClearColor(hd),d.toneMapping=gn,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(a),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Rt(new fi,new mn({name:"PMREM.Background",side:Ht,depthWrite:!1,depthTest:!1})));let y=this._backgroundBox,b=y.material,u=!1,g=e.background;g?g.isColor&&(b.color.copy(g),e.background=null,u=!0):(b.color.copy(hd),u=!0);for(let S=0;S<6;S++){let x=S%3;x===0?(l.up.set(0,c[S],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+h[S],s.y,s.z)):x===1?(l.up.set(0,0,c[S]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+h[S],s.z)):(l.up.set(0,c[S],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+h[S]));let M=this._cubeSize;_i(a,x*M,S>2?M:0,M,M),d.setRenderTarget(a),u&&d.render(y,l),d.render(e,l)}d.toneMapping=p,d.autoClear=f,e.background=g}_textureToCubeUV(e,t){let n=this._renderer,a=e.mapping===la||e.mapping===Ca;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=ud()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=fd());let s=a?this._cubemapMaterial:this._equirectMaterial,r=this._lodMeshes[0];r.material=s;let o=s.uniforms;o.envMap.value=e;let l=this._cubeSize;_i(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(r,ys)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let a=this._lodMeshes.length;for(let s=1;s<a;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=n}_applyGGXFilter(e,t,n){let a=this._renderer,s=this._pingPongRenderTarget,r=this._ggxMaterial,o=this._lodMeshes[n];o.material=r;let l=r.uniforms,c=n/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),d=Math.sqrt(c*c-h*h),f=c*1.25,p=d*f,{_lodMax:m}=this,y=this._sizeLods[n],b=3*y*(n>m-Mi?n-m+Mi:0),u=4*(this._cubeSize-y);l.envMap.value=e.texture,l.roughness.value=p,l.mipInt.value=m-t,_i(s,b,u,3*y,2*y),a.setRenderTarget(s),a.render(o,ys),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=m-n,_i(e,b,u,3*y,2*y),a.setRenderTarget(e),a.render(o,ys)}_blur(e,t,n,a){let s=this._pingPongRenderTarget,r=Math.min(a,Math.PI)/Math.SQRT2;this._blurPass(e,s,t,n,r),this._blurPass(s,e,n,n,r)}_blurPass(e,t,n,a,s){let r=this._renderer,o=this._blurMaterial,l=this._lodMeshes[a];l.material=o;let c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=s,c.mipInt.value=this._lodMax-n;let h=this._sizeLods[a],d=3*h*(a>this._lodMax-Mi?a-this._lodMax+Mi:0),f=4*(this._cubeSize-h);_i(t,d,f,3*h,2*h),r.setRenderTarget(t),r.render(l,ys)}};function em(i){let e=[],t=[],n=i,a=i-Mi+1+Yb;for(let s=0;s<a;s++){let r=Math.pow(2,n);e.push(r);let o=1/(r-2),l=-o,c=1+o,h=[l,l,c,l,c,c,l,l,c,c,l,c],d=6,f=6,p=3,m=new Float32Array(p*f*d),y=new Float32Array(p*f*d);for(let u=0;u<d;u++){let g=u%3*2/3-1,S=u>2?0:-1,x=[g,S,0,g+2/3,S,0,g+2/3,S+1,0,g,S,0,g+2/3,S+1,0,g,S+1,0];m.set(x,p*f*u);for(let M=0;M<f;M++){let w=h[M*2]*2-1,T=h[M*2+1]*2-1;u===0?ka.set(1,T,w):u===1?ka.set(-w,1,-T):u===2?ka.set(-w,T,1):u===3?ka.set(-1,T,-w):u===4?ka.set(-w,-1,T):ka.set(w,T,-1),ka.toArray(y,(u*f+M)*p)}}let b=new Dt;b.setAttribute("position",new pt(m,p)),b.setAttribute("outputDirection",new pt(y,p)),t.push(new Rt(b,null)),n>Mi&&n--}return{lodMeshes:t,sizeLods:e}}function dd(i,e,t){let n=new Gt(i,e,t);return n.texture.mapping=ds,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function _i(i,e,t,n,a){i.viewport.set(e,t,n,a),i.scissor.set(e,t,n,a)}function tm(i,e,t){return new Qt({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Qb,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:_o(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:In,depthTest:!1,depthWrite:!1})}function nm(i,e,t){return new Qt({name:"SphericalGaussianBlur",defines:{SAMPLES:Zb,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:_o(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:In,depthTest:!1,depthWrite:!1})}function fd(){return new Qt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:_o(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:In,depthTest:!1,depthWrite:!1})}function ud(){return new Qt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:_o(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:In,depthTest:!1,depthWrite:!1})}function _o(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var yo=class extends Gt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},a=[n,n,n,n,n,n];this.texture=new Yi(a),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},a=new fi(5,5,5),s=new Qt({name:"CubemapFromEquirect",uniforms:Pa(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ht,blending:In});s.uniforms.tEquirect.value=t;let r=new Rt(a,s),o=t.minFilter;return t.minFilter===xn&&(t.minFilter=mt),new _r(1,10,this).update(e,r),t.minFilter=o,r.geometry.dispose(),r.material.dispose(),this}clear(e,t=!0,n=!0,a=!0){let s=e.getRenderTarget();for(let r=0;r<6;r++)e.setRenderTarget(this,r),e.clear(t,n,a);e.setRenderTarget(s)}};function am(i){let e=new WeakMap,t=new WeakMap,n=null;function a(f,p=!1){return f==null?null:p?r(f):s(f)}function s(f){if(f&&f.isTexture){let p=f.mapping;if(p===Ar||p===Er)if(e.has(f)){let m=e.get(f).texture;return o(m,f.mapping)}else{let m=f.image;if(m&&m.height>0){let y=new yo(m.height);return y.fromEquirectangularTexture(i,f),e.set(f,y),f.addEventListener("dispose",c),o(y.texture,f.mapping)}else return null}}return f}function r(f){if(f&&f.isTexture){let p=f.mapping,m=p===Ar||p===Er,y=p===la||p===Ca;if(m||y){let b=t.get(f),u=b!==void 0?b.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==u)return n===null&&(n=new xo(i)),b=m?n.fromEquirectangular(f,b):n.fromCubemap(f,b),b.texture.pmremVersion=f.pmremVersion,t.set(f,b),b.texture;if(b!==void 0)return b.texture;{let g=f.image;return m&&g&&g.height>0||y&&g&&l(g)?(n===null&&(n=new xo(i)),b=m?n.fromEquirectangular(f):n.fromCubemap(f),b.texture.pmremVersion=f.pmremVersion,t.set(f,b),f.addEventListener("dispose",h),b.texture):null}}}return f}function o(f,p){return p===Ar?f.mapping=la:p===Er&&(f.mapping=Ca),f}function l(f){let p=0,m=6;for(let y=0;y<m;y++)f[y]!==void 0&&p++;return p===m}function c(f){let p=f.target;p.removeEventListener("dispose",c);let m=e.get(p);m!==void 0&&(e.delete(p),m.dispose())}function h(f){let p=f.target;p.removeEventListener("dispose",h);let m=t.get(p);m!==void 0&&(t.delete(p),m.dispose())}function d(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:a,dispose:d}}function im(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let a=i.getExtension(n);return e[n]=a,a}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let a=t(n);return a===null&&va("WebGLRenderer: "+n+" extension not supported."),a}}}function sm(i,e,t,n){let a={},s=new WeakMap;function r(d){let f=d.target;f.index!==null&&e.remove(f.index);for(let m in f.attributes)e.remove(f.attributes[m]);f.removeEventListener("dispose",r),delete a[f.id];let p=s.get(f);p&&(e.remove(p),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(d,f){return a[f.id]===!0||(f.addEventListener("dispose",r),a[f.id]=!0,t.memory.geometries++),f}function l(d){let f=d.attributes;for(let p in f)e.update(f[p],i.ARRAY_BUFFER)}function c(d){let f=[],p=d.index,m=d.attributes.position,y=0;if(m===void 0)return;if(p!==null){let g=p.array;y=p.version;for(let S=0,x=g.length;S<x;S+=3){let M=g[S+0],w=g[S+1],T=g[S+2];f.push(M,w,w,T,T,M)}}else{let g=m.array;y=m.version;for(let S=0,x=g.length/3-1;S<x;S+=3){let M=S+0,w=S+1,T=S+2;f.push(M,w,w,T,T,M)}}let b=new(m.count>=65535?Gi:ji)(f,1);b.version=y;let u=s.get(d);u&&e.remove(u),s.set(d,b)}function h(d){let f=s.get(d);if(f){let p=d.index;p!==null&&f.version<p.version&&c(d)}else c(d);return s.get(d)}return{get:o,update:l,getWireframeAttribute:h}}function rm(i,e,t){let n;function a(d){n=d}let s,r;function o(d){s=d.type,r=d.bytesPerElement}function l(d,f){i.drawElements(n,f,s,d*r),t.update(f,n,1)}function c(d,f,p){p!==0&&(i.drawElementsInstanced(n,f,s,d*r,p),t.update(f,n,p))}function h(d,f,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,s,d,0,p);let y=0;for(let b=0;b<p;b++)y+=f[b];t.update(y,n,1)}this.setMode=a,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function om(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,r,o){switch(t.calls++,r){case i.TRIANGLES:t.triangles+=o*(s/3);break;case i.LINES:t.lines+=o*(s/2);break;case i.LINE_STRIP:t.lines+=o*(s-1);break;case i.LINE_LOOP:t.lines+=o*s;break;case i.POINTS:t.points+=o*s;break;default:Ce("WebGLInfo: Unknown draw mode:",r);break}}function a(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:a,update:n}}function cm(i,e,t){let n=new WeakMap,a=new tt;function s(r,o,l){let c=r.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0,f=n.get(o);if(f===void 0||f.count!==d){let E=function(){T.dispose(),n.delete(o),o.removeEventListener("dispose",E)};f!==void 0&&f.texture.dispose();let p=o.morphAttributes.position!==void 0,m=o.morphAttributes.normal!==void 0,y=o.morphAttributes.color!==void 0,b=o.morphAttributes.position||[],u=o.morphAttributes.normal||[],g=o.morphAttributes.color||[],S=0;p===!0&&(S=1),m===!0&&(S=2),y===!0&&(S=3);let x=o.attributes.position.count*S,M=1;x>e.maxTextureSize&&(M=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize);let w=new Float32Array(x*M*4*d),T=new Bi(w,x,M,d);T.type=$t,T.needsUpdate=!0;let v=S*4;for(let I=0;I<d;I++){let C=b[I],N=u[I],L=g[I],P=x*M*4*I;for(let F=0;F<C.count;F++){let z=F*v;p===!0&&(a.fromBufferAttribute(C,F),w[P+z+0]=a.x,w[P+z+1]=a.y,w[P+z+2]=a.z,w[P+z+3]=0),m===!0&&(a.fromBufferAttribute(N,F),w[P+z+4]=a.x,w[P+z+5]=a.y,w[P+z+6]=a.z,w[P+z+7]=0),y===!0&&(a.fromBufferAttribute(L,F),w[P+z+8]=a.x,w[P+z+9]=a.y,w[P+z+10]=a.z,w[P+z+11]=L.itemSize===4?a.w:1)}}f={count:d,texture:T,size:new Be(x,M)},n.set(o,f),o.addEventListener("dispose",E)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",r.morphTexture,t);else{let p=0;for(let y=0;y<c.length;y++)p+=c[y];let m=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(i,"morphTargetBaseInfluence",m),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:s}}function lm(i,e,t,n,a){let s=new WeakMap;function r(c){let h=a.render.frame,d=c.geometry,f=e.get(c,d);if(s.get(f)!==h&&(e.update(f),s.set(f,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==h&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,h))),c.isSkinnedMesh){let p=c.skeleton;s.get(p)!==h&&(p.update(),s.set(p,h))}return f}function o(){s=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:r,dispose:o}}var hm={[pc]:"LINEAR_TONE_MAPPING",[bc]:"REINHARD_TONE_MAPPING",[mc]:"CINEON_TONE_MAPPING",[hs]:"ACES_FILMIC_TONE_MAPPING",[xc]:"AGX_TONE_MAPPING",[yc]:"NEUTRAL_TONE_MAPPING",[gc]:"CUSTOM_TONE_MAPPING"};function dm(i,e,t,n,a,s){let r=new Gt(e,t,{type:i,depthBuffer:a,stencilBuffer:s,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=new Dt;c.setAttribute("position",new Ot([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Ot([0,2,0,0,2,0],2));let h=new fr({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new Rt(c,h),f=new ca(-1,1,1,-1,0,1),p=null,m=null,y=!1,b,u=null,g=[],S=!1;this.setSize=function(x,M){r.setSize(x,M),o!==null&&o.setSize(x,M),l!==null&&l.setSize(x,M);for(let w=0;w<g.length;w++){let T=g[w];T.setSize&&T.setSize(x,M)}},this.setEffects=function(x){g=x,S=g.length>0&&g[0].isRenderPass===!0;let M=r.width,w=r.height;g.length>0&&o===null&&(o=new Gt(M,w,{type:vn,depthBuffer:!1,stencilBuffer:!1}),l=new Gt(M,w,{type:vn,depthBuffer:!1,stencilBuffer:!1}));for(let T=0;T<g.length;T++){let v=g[T];v.setSize&&v.setSize(M,w)}},this.begin=function(x,M){if(y||x.toneMapping===gn&&g.length===0)return!1;if(u=M,M!==null){let w=M.width,T=M.height;(r.width!==w||r.height!==T)&&this.setSize(w,T)}return S===!1&&x.setRenderTarget(r),b=x.toneMapping,x.toneMapping=gn,!0},this.hasRenderPass=function(){return S},this.end=function(x,M){x.toneMapping=b,y=!0;let w=r,T=o;for(let v=0;v<g.length;v++){let E=g[v];E.enabled!==!1&&(E.render(x,T,w,M),E.needsSwap!==!1&&(w=T,T=T===o?l:o))}if(p!==x.outputColorSpace||m!==x.toneMapping){p=x.outputColorSpace,m=x.toneMapping,h.defines={},Oe.getTransfer(p)===Qe&&(h.defines.SRGB_TRANSFER="");let v=hm[m];v&&(h.defines[v]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=w.texture,x.setRenderTarget(u),x.render(d,f),u=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){r.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}var kd=new St,jc=new ra(1,1),Dd=new Bi,Fd=new cr,Ud=new Yi,pd=[],bd=[],md=new Float32Array(16),gd=new Float32Array(9),xd=new Float32Array(4);function wi(i,e,t){let n=i[0];if(n<=0||n>0)return i;let a=e*t,s=pd[a];if(s===void 0&&(s=new Float32Array(a),pd[a]=s),e!==0){n.toArray(s,0);for(let r=1,o=0;r!==e;++r)o+=t,i[r].toArray(s,o)}return s}function wt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function At(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Mo(i,e){let t=bd[e];t===void 0&&(t=new Int32Array(e),bd[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function fm(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function um(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(wt(t,e))return;i.uniform2fv(this.addr,e),At(t,e)}}function pm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(wt(t,e))return;i.uniform3fv(this.addr,e),At(t,e)}}function bm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(wt(t,e))return;i.uniform4fv(this.addr,e),At(t,e)}}function mm(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(wt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),At(t,e)}else{if(wt(t,n))return;xd.set(n),i.uniformMatrix2fv(this.addr,!1,xd),At(t,n)}}function gm(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(wt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),At(t,e)}else{if(wt(t,n))return;gd.set(n),i.uniformMatrix3fv(this.addr,!1,gd),At(t,n)}}function xm(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(wt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),At(t,e)}else{if(wt(t,n))return;md.set(n),i.uniformMatrix4fv(this.addr,!1,md),At(t,n)}}function ym(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function vm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(wt(t,e))return;i.uniform2iv(this.addr,e),At(t,e)}}function _m(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(wt(t,e))return;i.uniform3iv(this.addr,e),At(t,e)}}function Mm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(wt(t,e))return;i.uniform4iv(this.addr,e),At(t,e)}}function Sm(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function wm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(wt(t,e))return;i.uniform2uiv(this.addr,e),At(t,e)}}function Am(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(wt(t,e))return;i.uniform3uiv(this.addr,e),At(t,e)}}function Em(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(wt(t,e))return;i.uniform4uiv(this.addr,e),At(t,e)}}function Tm(i,e,t){let n=this.cache,a=t.allocateTextureUnit();n[0]!==a&&(i.uniform1i(this.addr,a),n[0]=a);let s;this.type===i.SAMPLER_2D_SHADOW?(jc.compareFunction=t.isReversedDepthBuffer()?bo:po,s=jc):s=kd,t.setTexture2D(e||s,a)}function Rm(i,e,t){let n=this.cache,a=t.allocateTextureUnit();n[0]!==a&&(i.uniform1i(this.addr,a),n[0]=a),t.setTexture3D(e||Fd,a)}function Im(i,e,t){let n=this.cache,a=t.allocateTextureUnit();n[0]!==a&&(i.uniform1i(this.addr,a),n[0]=a),t.setTextureCube(e||Ud,a)}function Cm(i,e,t){let n=this.cache,a=t.allocateTextureUnit();n[0]!==a&&(i.uniform1i(this.addr,a),n[0]=a),t.setTexture2DArray(e||Dd,a)}function Nm(i){switch(i){case 5126:return fm;case 35664:return um;case 35665:return pm;case 35666:return bm;case 35674:return mm;case 35675:return gm;case 35676:return xm;case 5124:case 35670:return ym;case 35667:case 35671:return vm;case 35668:case 35672:return _m;case 35669:case 35673:return Mm;case 5125:return Sm;case 36294:return wm;case 36295:return Am;case 36296:return Em;case 35678:case 36198:case 36298:case 36306:case 35682:return Tm;case 35679:case 36299:case 36307:return Rm;case 35680:case 36300:case 36308:case 36293:return Im;case 36289:case 36303:case 36311:case 36292:return Cm}}function Pm(i,e){i.uniform1fv(this.addr,e)}function km(i,e){let t=wi(e,this.size,2);i.uniform2fv(this.addr,t)}function Dm(i,e){let t=wi(e,this.size,3);i.uniform3fv(this.addr,t)}function Fm(i,e){let t=wi(e,this.size,4);i.uniform4fv(this.addr,t)}function Um(i,e){let t=wi(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Lm(i,e){let t=wi(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Om(i,e){let t=wi(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Bm(i,e){i.uniform1iv(this.addr,e)}function zm(i,e){i.uniform2iv(this.addr,e)}function Hm(i,e){i.uniform3iv(this.addr,e)}function jm(i,e){i.uniform4iv(this.addr,e)}function Gm(i,e){i.uniform1uiv(this.addr,e)}function Vm(i,e){i.uniform2uiv(this.addr,e)}function Wm(i,e){i.uniform3uiv(this.addr,e)}function Xm(i,e){i.uniform4uiv(this.addr,e)}function qm(i,e,t){let n=this.cache,a=e.length,s=Mo(t,a);wt(n,s)||(i.uniform1iv(this.addr,s),At(n,s));let r;this.type===i.SAMPLER_2D_SHADOW?r=jc:r=kd;for(let o=0;o!==a;++o)t.setTexture2D(e[o]||r,s[o])}function Km(i,e,t){let n=this.cache,a=e.length,s=Mo(t,a);wt(n,s)||(i.uniform1iv(this.addr,s),At(n,s));for(let r=0;r!==a;++r)t.setTexture3D(e[r]||Fd,s[r])}function Jm(i,e,t){let n=this.cache,a=e.length,s=Mo(t,a);wt(n,s)||(i.uniform1iv(this.addr,s),At(n,s));for(let r=0;r!==a;++r)t.setTextureCube(e[r]||Ud,s[r])}function Ym(i,e,t){let n=this.cache,a=e.length,s=Mo(t,a);wt(n,s)||(i.uniform1iv(this.addr,s),At(n,s));for(let r=0;r!==a;++r)t.setTexture2DArray(e[r]||Dd,s[r])}function Zm(i){switch(i){case 5126:return Pm;case 35664:return km;case 35665:return Dm;case 35666:return Fm;case 35674:return Um;case 35675:return Lm;case 35676:return Om;case 5124:case 35670:return Bm;case 35667:case 35671:return zm;case 35668:case 35672:return Hm;case 35669:case 35673:return jm;case 5125:return Gm;case 36294:return Vm;case 36295:return Wm;case 36296:return Xm;case 35678:case 36198:case 36298:case 36306:case 35682:return qm;case 35679:case 36299:case 36307:return Km;case 35680:case 36300:case 36308:case 36293:return Jm;case 36289:case 36303:case 36311:case 36292:return Ym}}var Gc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Nm(t.type)}},Vc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Zm(t.type)}},Wc=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let a=this.seq;for(let s=0,r=a.length;s!==r;++s){let o=a[s];o.setValue(e,t[o.id],n)}}},zc=/(\w+)(\])?(\[|\.)?/g;function yd(i,e){i.seq.push(e),i.map[e.id]=e}function Qm(i,e,t){let n=i.name,a=n.length;for(zc.lastIndex=0;;){let s=zc.exec(n),r=zc.lastIndex,o=s[1],l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&r+2===a){yd(t,c===void 0?new Gc(o,i,e):new Vc(o,i,e));break}else{let d=t.map[o];d===void 0&&(d=new Wc(o),yd(t,d)),t=d}}}var Si=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let o=e.getActiveUniform(t,r),l=e.getUniformLocation(t,o.name);Qm(o,l,this)}let a=[],s=[];for(let r of this.seq)r.type===e.SAMPLER_2D_SHADOW||r.type===e.SAMPLER_CUBE_SHADOW||r.type===e.SAMPLER_2D_ARRAY_SHADOW?a.push(r):s.push(r);a.length>0&&(this.seq=a.concat(s))}setValue(e,t,n,a){let s=this.map[t];s!==void 0&&s.setValue(e,n,a)}setOptional(e,t,n){let a=t[n];a!==void 0&&this.setValue(e,n,a)}static upload(e,t,n,a){for(let s=0,r=t.length;s!==r;++s){let o=t[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,a)}}static seqWithValue(e,t){let n=[];for(let a=0,s=e.length;a!==s;++a){let r=e[a];r.id in t&&n.push(r)}return n}};function vd(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var $m=37297,eg=0;function tg(i,e){let t=i.split(`
`),n=[],a=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let r=a;r<s;r++){let o=r+1;n.push(`${o===e?">":" "} ${o}: ${t[r]}`)}return n.join(`
`)}var _d=new Ne;function ng(i){Oe._getMatrix(_d,Oe.workingColorSpace,i);let e=`mat3( ${_d.elements.map(t=>t.toFixed(4))} )`;switch(Oe.getTransfer(i)){case Li:return[e,"LinearTransferOETF"];case Qe:return[e,"sRGBTransferOETF"];default:return we("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Md(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),s=(i.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+tg(i.getShaderSource(e),o)}else return s}function ag(i,e){let t=ng(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var ig={[pc]:"Linear",[bc]:"Reinhard",[mc]:"Cineon",[hs]:"ACESFilmic",[xc]:"AgX",[yc]:"Neutral",[gc]:"Custom"};function sg(i,e){let t=ig[e];return t===void 0?(we("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var go=new O;function rg(){Oe.getLuminanceCoefficients(go);let i=go.x.toFixed(4),e=go.y.toFixed(4),t=go.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function og(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(_s).join(`
`)}function cg(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function lg(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let a=0;a<n;a++){let s=i.getActiveAttrib(e,a),r=s.name,o=1;s.type===i.FLOAT_MAT2&&(o=2),s.type===i.FLOAT_MAT3&&(o=3),s.type===i.FLOAT_MAT4&&(o=4),t[r]={type:s.type,location:i.getAttribLocation(e,r),locationSize:o}}return t}function _s(i){return i!==""}function Sd(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function wd(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var hg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Xc(i){return i.replace(hg,fg)}var dg=new Map;function fg(i,e){let t=Ue[e];if(t===void 0){let n=dg.get(e);if(n!==void 0)t=Ue[n],we('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Xc(t)}var ug=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ad(i){return i.replace(ug,pg)}function pg(i,e,t,n){let a="";for(let s=parseInt(e);s<parseInt(t);s++)a+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return a}function Ed(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var bg={[ls]:"SHADOWMAP_TYPE_PCF",[bi]:"SHADOWMAP_TYPE_VSM"};function mg(i){return bg[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var gg={[la]:"ENVMAP_TYPE_CUBE",[Ca]:"ENVMAP_TYPE_CUBE",[ds]:"ENVMAP_TYPE_CUBE_UV"};function xg(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":gg[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var yg={[Ca]:"ENVMAP_MODE_REFRACTION"};function vg(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":yg[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var _g={[uc]:"ENVMAP_BLENDING_MULTIPLY",[zh]:"ENVMAP_BLENDING_MIX",[Hh]:"ENVMAP_BLENDING_ADD"};function Mg(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":_g[i.combine]||"ENVMAP_BLENDING_NONE"}function Sg(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function wg(i,e,t,n){let a=i.getContext(),s=t.defines,r=t.vertexShader,o=t.fragmentShader,l=mg(t),c=xg(t),h=vg(t),d=Mg(t),f=Sg(t),p=og(t),m=cg(s),y=a.createProgram(),b,u,g=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(b=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(_s).join(`
`),b.length>0&&(b+=`
`),u=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(_s).join(`
`),u.length>0&&(u+=`
`)):(b=[Ed(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(_s).join(`
`),u=[Ed(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==gn?"#define TONE_MAPPING":"",t.toneMapping!==gn?Ue.tonemapping_pars_fragment:"",t.toneMapping!==gn?sg("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ue.colorspace_pars_fragment,ag("linearToOutputTexel",t.outputColorSpace),rg(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(_s).join(`
`)),r=Xc(r),r=Sd(r,t),r=wd(r,t),o=Xc(o),o=Sd(o,t),o=wd(o,t),r=Ad(r),o=Ad(o),t.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,b=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+b,u=["#define varying in",t.glslVersion===Ic?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ic?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);let S=g+b+r,x=g+u+o,M=vd(a,a.VERTEX_SHADER,S),w=vd(a,a.FRAGMENT_SHADER,x);a.attachShader(y,M),a.attachShader(y,w),t.index0AttributeName!==void 0?a.bindAttribLocation(y,0,t.index0AttributeName):t.hasPositionAttribute===!0&&a.bindAttribLocation(y,0,"position"),a.linkProgram(y);function T(C){if(i.debug.checkShaderErrors){let N=a.getProgramInfoLog(y)||"",L=a.getShaderInfoLog(M)||"",P=a.getShaderInfoLog(w)||"",F=N.trim(),z=L.trim(),G=P.trim(),Z=!0,V=!0;if(a.getProgramParameter(y,a.LINK_STATUS)===!1)if(Z=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(a,y,M,w);else{let K=Md(a,M,"vertex"),ee=Md(a,w,"fragment");Ce("WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(y,a.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+F+`
`+K+`
`+ee)}else F!==""?we("WebGLProgram: Program Info Log:",F):(z===""||G==="")&&(V=!1);V&&(C.diagnostics={runnable:Z,programLog:F,vertexShader:{log:z,prefix:b},fragmentShader:{log:G,prefix:u}})}a.deleteShader(M),a.deleteShader(w),v=new Si(a,y),E=lg(a,y)}let v;this.getUniforms=function(){return v===void 0&&T(this),v};let E;this.getAttributes=function(){return E===void 0&&T(this),E};let I=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return I===!1&&(I=a.getProgramParameter(y,$m)),I},this.destroy=function(){n.releaseStatesOfProgram(this),a.deleteProgram(y),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=eg++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=M,this.fragmentShader=w,this}var Ag=0,qc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let a=this._getShaderCacheForMaterial(e);return a.has(t)===!1&&(a.add(t),t.usedTimes++),a.has(n)===!1&&(a.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Kc(e),t.set(e,n)),n}},Kc=class{constructor(e){this.id=Ag++,this.code=e,this.usedTimes=0}};function Eg(i){return i===da||i===ms||i===gs}function Tg(i,e,t,n,a,s){let r=new zi,o=new qc,l=new Set,c=[],h=new Map,d=n.logarithmicDepthBuffer,f=n.precision,p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(v){return l.add(v),v===0?"uv":`uv${v}`}function y(v,E,I,C,N,L){let P=C.fog,F=N.geometry,z=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?C.environment:null,G=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,Z=e.get(v.envMap||z,G),V=Z&&Z.mapping===ds?Z.image.height:null,K=p[v.type];v.precision!==null&&(f=n.getMaxPrecision(v.precision),f!==v.precision&&we("WebGLProgram.getParameters:",v.precision,"not supported, using",f,"instead."));let ee=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,be=ee!==void 0?ee.length:0,pe=0;F.morphAttributes.position!==void 0&&(pe=1),F.morphAttributes.normal!==void 0&&(pe=2),F.morphAttributes.color!==void 0&&(pe=3);let qe,Le,We,J;if(K){let rt=Nn[K];qe=rt.vertexShader,Le=rt.fragmentShader}else{qe=v.vertexShader,Le=v.fragmentShader;let rt=o.getVertexShaderStage(v),Ye=o.getFragmentShaderStage(v);o.update(v,rt,Ye),We=rt.id,J=Ye.id}let te=i.getRenderTarget(),ye=i.state.buffers.depth.getReversed(),Pe=N.isInstancedMesh===!0,ge=N.isBatchedMesh===!0,ze=!!v.map,Mt=!!v.matcap,je=!!Z,Je=!!v.aoMap,st=!!v.lightMap,Xe=!!v.bumpMap&&v.wireframe===!1,lt=!!v.normalMap,Et=!!v.displacementMap,jt=!!v.emissiveMap,dt=!!v.metalnessMap,xt=!!v.roughnessMap,U=v.anisotropy>0,It=v.clearcoat>0,$e=v.dispersion>0,R=v.retroreflectivity>0,_=v.iridescence>0,B=v.sheen>0,W=v.transmission>0,q=U&&!!v.anisotropyMap,ae=It&&!!v.clearcoatMap,ie=It&&!!v.clearcoatNormalMap,Y=It&&!!v.clearcoatRoughnessMap,$=_&&!!v.iridescenceMap,se=_&&!!v.iridescenceThicknessMap,Ae=B&&!!v.sheenColorMap,le=B&&!!v.sheenRoughnessMap,re=!!v.specularMap,Ee=!!v.specularColorMap,Ie=!!v.specularIntensityMap,ke=W&&!!v.transmissionMap,D=W&&!!v.thicknessMap,oe=!!v.gradientMap,Q=!!v.alphaMap,ce=v.alphaTest>0,ue=!!v.alphaHash,ne=!!v.extensions,Te=gn;v.toneMapped&&(te===null||te.isXRRenderTarget===!0)&&(Te=i.toneMapping);let Me={shaderID:K,shaderType:v.type,shaderName:v.name,vertexShader:qe,fragmentShader:Le,defines:v.defines,customVertexShaderID:We,customFragmentShaderID:J,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:f,batching:ge,batchingColor:ge&&N._colorsTexture!==null,instancing:Pe,instancingColor:Pe&&N.instanceColor!==null,instancingMorph:Pe&&N.morphTexture!==null,outputColorSpace:te===null?i.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:Oe.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:ze,matcap:Mt,envMap:je,envMapMode:je&&Z.mapping,envMapCubeUVHeight:V,aoMap:Je,lightMap:st,bumpMap:Xe,normalMap:lt,displacementMap:Et,emissiveMap:jt,normalMapObjectSpace:lt&&v.normalMapType===Kh,normalMapTangentSpace:lt&&v.normalMapType===uo,packedNormalMap:lt&&v.normalMapType===uo&&Eg(v.normalMap.format),metalnessMap:dt,roughnessMap:xt,anisotropy:U,anisotropyMap:q,clearcoat:It,clearcoatMap:ae,clearcoatNormalMap:ie,clearcoatRoughnessMap:Y,dispersion:$e,retroreflection:R,iridescence:_,iridescenceMap:$,iridescenceThicknessMap:se,sheen:B,sheenColorMap:Ae,sheenRoughnessMap:le,specularMap:re,specularColorMap:Ee,specularIntensityMap:Ie,transmission:W,transmissionMap:ke,thicknessMap:D,gradientMap:oe,opaque:v.transparent===!1&&v.blending===mi&&v.alphaToCoverage===!1,alphaMap:Q,alphaTest:ce,alphaHash:ue,combine:v.combine,mapUv:ze&&m(v.map.channel),aoMapUv:Je&&m(v.aoMap.channel),lightMapUv:st&&m(v.lightMap.channel),bumpMapUv:Xe&&m(v.bumpMap.channel),normalMapUv:lt&&m(v.normalMap.channel),displacementMapUv:Et&&m(v.displacementMap.channel),emissiveMapUv:jt&&m(v.emissiveMap.channel),metalnessMapUv:dt&&m(v.metalnessMap.channel),roughnessMapUv:xt&&m(v.roughnessMap.channel),anisotropyMapUv:q&&m(v.anisotropyMap.channel),clearcoatMapUv:ae&&m(v.clearcoatMap.channel),clearcoatNormalMapUv:ie&&m(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Y&&m(v.clearcoatRoughnessMap.channel),iridescenceMapUv:$&&m(v.iridescenceMap.channel),iridescenceThicknessMapUv:se&&m(v.iridescenceThicknessMap.channel),sheenColorMapUv:Ae&&m(v.sheenColorMap.channel),sheenRoughnessMapUv:le&&m(v.sheenRoughnessMap.channel),specularMapUv:re&&m(v.specularMap.channel),specularColorMapUv:Ee&&m(v.specularColorMap.channel),specularIntensityMapUv:Ie&&m(v.specularIntensityMap.channel),transmissionMapUv:ke&&m(v.transmissionMap.channel),thicknessMapUv:D&&m(v.thicknessMap.channel),alphaMapUv:Q&&m(v.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(lt||U),vertexNormals:!!F.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!F.attributes.uv&&(ze||Q),fog:!!P,useFog:v.fog===!0,fogExp2:!!P&&P.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||F.attributes.normal===void 0&&lt===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:ye,skinning:N.isSkinnedMesh===!0,hasPositionAttribute:F.attributes.position!==void 0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:be,morphTextureStride:pe,numSunLights:E.sun.length,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numSunLightShadows:E.sunShadowMap.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numLightProbeGrids:L.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&I.length>0,shadowMapType:i.shadowMap.type,toneMapping:Te,decodeVideoTexture:ze&&v.map.isVideoTexture===!0&&Oe.getTransfer(v.map.colorSpace)===Qe,decodeVideoTextureEmissive:jt&&v.emissiveMap.isVideoTexture===!0&&Oe.getTransfer(v.emissiveMap.colorSpace)===Qe,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Kt,flipSided:v.side===Ht,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:ne&&v.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ne&&v.extensions.multiDraw===!0||ge)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Me.vertexUv1s=l.has(1),Me.vertexUv2s=l.has(2),Me.vertexUv3s=l.has(3),l.clear(),Me}function b(v){let E=[];if(v.shaderID?E.push(v.shaderID):(E.push(v.customVertexShaderID),E.push(v.customFragmentShaderID)),v.defines!==void 0)for(let I in v.defines)E.push(I),E.push(v.defines[I]);return v.isRawShaderMaterial===!1&&(u(E,v),g(E,v),E.push(i.outputColorSpace)),E.push(v.customProgramCacheKey),E.join()}function u(v,E){v.push(E.precision),v.push(E.outputColorSpace),v.push(E.envMapMode),v.push(E.envMapCubeUVHeight),v.push(E.mapUv),v.push(E.alphaMapUv),v.push(E.lightMapUv),v.push(E.aoMapUv),v.push(E.bumpMapUv),v.push(E.normalMapUv),v.push(E.displacementMapUv),v.push(E.emissiveMapUv),v.push(E.metalnessMapUv),v.push(E.roughnessMapUv),v.push(E.anisotropyMapUv),v.push(E.clearcoatMapUv),v.push(E.clearcoatNormalMapUv),v.push(E.clearcoatRoughnessMapUv),v.push(E.iridescenceMapUv),v.push(E.iridescenceThicknessMapUv),v.push(E.sheenColorMapUv),v.push(E.sheenRoughnessMapUv),v.push(E.specularMapUv),v.push(E.specularColorMapUv),v.push(E.specularIntensityMapUv),v.push(E.transmissionMapUv),v.push(E.thicknessMapUv),v.push(E.combine),v.push(E.fogExp2),v.push(E.sizeAttenuation),v.push(E.morphTargetsCount),v.push(E.morphAttributeCount),v.push(E.numSunLights),v.push(E.numDirLights),v.push(E.numPointLights),v.push(E.numSpotLights),v.push(E.numSpotLightMaps),v.push(E.numHemiLights),v.push(E.numRectAreaLights),v.push(E.numSunLightShadows),v.push(E.numDirLightShadows),v.push(E.numPointLightShadows),v.push(E.numSpotLightShadows),v.push(E.numSpotLightShadowsWithMaps),v.push(E.numLightProbes),v.push(E.shadowMapType),v.push(E.toneMapping),v.push(E.numClippingPlanes),v.push(E.numClipIntersection),v.push(E.depthPacking)}function g(v,E){r.disableAll(),E.instancing&&r.enable(0),E.instancingColor&&r.enable(1),E.instancingMorph&&r.enable(2),E.matcap&&r.enable(3),E.envMap&&r.enable(4),E.normalMapObjectSpace&&r.enable(5),E.normalMapTangentSpace&&r.enable(6),E.clearcoat&&r.enable(7),E.iridescence&&r.enable(8),E.alphaTest&&r.enable(9),E.vertexColors&&r.enable(10),E.vertexAlphas&&r.enable(11),E.vertexUv1s&&r.enable(12),E.vertexUv2s&&r.enable(13),E.vertexUv3s&&r.enable(14),E.vertexTangents&&r.enable(15),E.anisotropy&&r.enable(16),E.alphaHash&&r.enable(17),E.batching&&r.enable(18),E.dispersion&&r.enable(19),E.retroreflection&&r.enable(24),E.batchingColor&&r.enable(20),E.gradientMap&&r.enable(21),E.packedNormalMap&&r.enable(22),E.vertexNormals&&r.enable(23),v.push(r.mask),r.disableAll(),E.fog&&r.enable(0),E.useFog&&r.enable(1),E.flatShading&&r.enable(2),E.logarithmicDepthBuffer&&r.enable(3),E.reversedDepthBuffer&&r.enable(4),E.skinning&&r.enable(5),E.morphTargets&&r.enable(6),E.morphNormals&&r.enable(7),E.morphColors&&r.enable(8),E.premultipliedAlpha&&r.enable(9),E.shadowMapEnabled&&r.enable(10),E.doubleSided&&r.enable(11),E.flipSided&&r.enable(12),E.useDepthPacking&&r.enable(13),E.dithering&&r.enable(14),E.transmission&&r.enable(15),E.sheen&&r.enable(16),E.opaque&&r.enable(17),E.pointsUvs&&r.enable(18),E.decodeVideoTexture&&r.enable(19),E.decodeVideoTextureEmissive&&r.enable(20),E.alphaToCoverage&&r.enable(21),E.numLightProbeGrids>0&&r.enable(22),E.hasPositionAttribute&&r.enable(23),v.push(r.mask)}function S(v){let E=p[v.type],I;if(E){let C=Nn[E];I=od.clone(C.uniforms)}else I=v.uniforms;return I}function x(v,E){let I=h.get(E);return I!==void 0?++I.usedTimes:(I=new wg(i,E,v,a),c.push(I),h.set(E,I)),I}function M(v){if(--v.usedTimes===0){let E=c.indexOf(v);c[E]=c[c.length-1],c.pop(),h.delete(v.cacheKey),v.destroy()}}function w(v){o.remove(v)}function T(){o.dispose()}return{getParameters:y,getProgramCacheKey:b,getUniforms:S,acquireProgram:x,releaseProgram:M,releaseShaderCache:w,programs:c,dispose:T}}function Rg(){let i=new WeakMap;function e(r){return i.has(r)}function t(r){let o=i.get(r);return o===void 0&&(o={},i.set(r,o)),o}function n(r){i.delete(r)}function a(r,o,l){i.get(r)[o]=l}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:a,dispose:s}}function Ig(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function Td(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Rd(){let i=[],e=0,t=[],n=[],a=[];function s(){e=0,t.length=0,n.length=0,a.length=0}function r(f){let p=0;return f.isInstancedMesh&&(p+=2),f.isSkinnedMesh&&(p+=1),p}function o(f,p,m,y,b,u){let g=i[e];return g===void 0?(g={id:f.id,object:f,geometry:p,material:m,materialVariant:r(f),groupOrder:y,renderOrder:f.renderOrder,z:b,group:u},i[e]=g):(g.id=f.id,g.object=f,g.geometry=p,g.material=m,g.materialVariant=r(f),g.groupOrder=y,g.renderOrder=f.renderOrder,g.z=b,g.group=u),e++,g}function l(f,p,m,y,b,u,g){g.reversedDepth===!0&&(b=-b);let S=o(f,p,m,y,b,u);m.transmission>0?n.push(S):m.transparent===!0?a.push(S):t.push(S)}function c(f,p,m,y,b,u){let g=o(f,p,m,y,b,u);m.transmission>0?n.unshift(g):m.transparent===!0?a.unshift(g):t.unshift(g)}function h(f,p){t.length>1&&t.sort(f||Ig),n.length>1&&n.sort(p||Td),a.length>1&&a.sort(p||Td)}function d(){for(let f=e,p=i.length;f<p;f++){let m=i[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:a,init:s,push:l,unshift:c,finish:d,sort:h}}function Cg(){let i=new WeakMap;function e(n,a){let s=i.get(n),r;return s===void 0?(r=new Rd,i.set(n,[r])):a>=s.length?(r=new Rd,s.push(r)):r=s[a],r}function t(){i=new WeakMap}return{get:e,dispose:t}}function Ng(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new O,color:new Re};break;case"SpotLight":t={position:new O,direction:new O,color:new Re,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new O,color:new Re,distance:0,decay:0};break;case"HemisphereLight":t={direction:new O,skyColor:new Re,groundColor:new Re};break;case"RectAreaLight":t={color:new Re,position:new O,halfWidth:new O,halfHeight:new O};break}return i[e.id]=t,t}}}function Pg(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var kg=0;function Dg(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Fg(i){let e=new Ng,t=Pg(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new O);let a=new O,s=new De,r=new De;function o(c){let h=0,d=0,f=0;for(let N=0;N<9;N++)n.probe[N].set(0,0,0);let p=0,m=0,y=0,b=0,u=0,g=0,S=0,x=0,M=0,w=0,T=0,v=0,E=0,I=0;c.sort(Dg);for(let N=0,L=c.length;N<L;N++){let P=c[N],F=P.color,z=P.intensity,G=P.distance,Z=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===da?Z=P.shadow.map.texture:Z=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)h+=F.r*z,d+=F.g*z,f+=F.b*z;else if(P.isLightProbe){for(let V=0;V<9;V++)n.probe[V].addScaledVector(P.sh.coefficients[V],z);I++}else if(P.isSunLight){let V=e.get(P);if(V.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let K=P.shadow,ee=t.get(P);ee.shadowIntensity=K.intensity,ee.shadowBias=K.bias,ee.shadowNormalBias=K.normalBias,ee.shadowRadius=K.radius,ee.shadowMapSize.copy(K.mapSize).multiply(K.getFrameExtents()),n.sunShadow[m]=ee,n.sunShadowMap[m]=Z;let be=K.getViewportCount();for(let pe=0;pe<be;pe++)n.sunShadowMatrix[y+pe]=K.getMatrix(pe),n.sunShadowCascade[y+pe]=K._cascadeData[pe];y+=be,m++}n.sun[p]=V,p++}else if(P.isDirectionalLight){let V=e.get(P);if(V.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let K=P.shadow,ee=t.get(P);ee.shadowIntensity=K.intensity,ee.shadowBias=K.bias,ee.shadowNormalBias=K.normalBias,ee.shadowRadius=K.radius,ee.shadowMapSize=K.mapSize,n.directionalShadow[b]=ee,n.directionalShadowMap[b]=Z,n.directionalShadowMatrix[b]=P.shadow.matrix,M++}n.directional[b]=V,b++}else if(P.isSpotLight){let V=e.get(P);V.position.setFromMatrixPosition(P.matrixWorld),V.color.copy(F).multiplyScalar(z),V.distance=G,V.coneCos=Math.cos(P.angle),V.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),V.decay=P.decay,n.spot[g]=V;let K=P.shadow;if(P.map&&(n.spotLightMap[v]=P.map,v++,K.updateMatrices(P),P.castShadow&&E++),n.spotLightMatrix[g]=K.matrix,P.castShadow){let ee=t.get(P);ee.shadowIntensity=K.intensity,ee.shadowBias=K.bias,ee.shadowNormalBias=K.normalBias,ee.shadowRadius=K.radius,ee.shadowMapSize=K.mapSize,n.spotShadow[g]=ee,n.spotShadowMap[g]=Z,T++}g++}else if(P.isRectAreaLight){let V=e.get(P);V.color.copy(F).multiplyScalar(z),V.halfWidth.set(P.width*.5,0,0),V.halfHeight.set(0,P.height*.5,0),n.rectArea[S]=V,S++}else if(P.isPointLight){let V=e.get(P);if(V.color.copy(P.color).multiplyScalar(P.intensity),V.distance=P.distance,V.decay=P.decay,P.castShadow){let K=P.shadow,ee=t.get(P);ee.shadowIntensity=K.intensity,ee.shadowBias=K.bias,ee.shadowNormalBias=K.normalBias,ee.shadowRadius=K.radius,ee.shadowMapSize=K.mapSize,ee.shadowCameraNear=K.camera.near,ee.shadowCameraFar=K.camera.far,n.pointShadow[u]=ee,n.pointShadowMap[u]=Z,n.pointShadowMatrix[u]=P.shadow.matrix,w++}n.point[u]=V,u++}else if(P.isHemisphereLight){let V=e.get(P);V.skyColor.copy(P.color).multiplyScalar(z),V.groundColor.copy(P.groundColor).multiplyScalar(z),n.hemi[x]=V,x++}}S>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=he.LTC_FLOAT_1,n.rectAreaLTC2=he.LTC_FLOAT_2):(n.rectAreaLTC1=he.LTC_HALF_1,n.rectAreaLTC2=he.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=f;let C=n.hash;(C.sunLength!==p||C.directionalLength!==b||C.pointLength!==u||C.spotLength!==g||C.rectAreaLength!==S||C.hemiLength!==x||C.numSunShadows!==m||C.numDirectionalShadows!==M||C.numPointShadows!==w||C.numSpotShadows!==T||C.numSpotMaps!==v||C.numLightProbes!==I)&&(n.sun.length=p,n.directional.length=b,n.spot.length=g,n.rectArea.length=S,n.point.length=u,n.hemi.length=x,n.sunShadow.length=m,n.sunShadowMap.length=m,n.sunShadowMatrix.length=y,n.sunShadowCascade.length=y,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.directionalShadowMatrix.length=M,n.pointShadow.length=w,n.pointShadowMap.length=w,n.pointShadowMatrix.length=w,n.spotShadow.length=T,n.spotShadowMap.length=T,n.spotLightMatrix.length=T+v-E,n.spotLightMap.length=v,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=I,C.sunLength=p,C.directionalLength=b,C.pointLength=u,C.spotLength=g,C.rectAreaLength=S,C.hemiLength=x,C.numSunShadows=m,C.numDirectionalShadows=M,C.numPointShadows=w,C.numSpotShadows=T,C.numSpotMaps=v,C.numLightProbes=I,n.version=kg++)}function l(c,h){let d=0,f=0,p=0,m=0,y=0,b=0,u=h.matrixWorldInverse;for(let g=0,S=c.length;g<S;g++){let x=c[g];if(x.isSunLight){let M=n.sun[d];M.direction.setFromMatrixPosition(x.matrixWorld),M.direction.transformDirection(u),d++}else if(x.isDirectionalLight){let M=n.directional[f];M.direction.setFromMatrixPosition(x.matrixWorld),a.setFromMatrixPosition(x.target.matrixWorld),M.direction.sub(a),M.direction.transformDirection(u),f++}else if(x.isSpotLight){let M=n.spot[m];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(u),M.direction.setFromMatrixPosition(x.matrixWorld),a.setFromMatrixPosition(x.target.matrixWorld),M.direction.sub(a),M.direction.transformDirection(u),m++}else if(x.isRectAreaLight){let M=n.rectArea[y];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(u),r.identity(),s.copy(x.matrixWorld),s.premultiply(u),r.extractRotation(s),M.halfWidth.set(x.width*.5,0,0),M.halfHeight.set(0,x.height*.5,0),M.halfWidth.applyMatrix4(r),M.halfHeight.applyMatrix4(r),y++}else if(x.isPointLight){let M=n.point[p];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(u),p++}else if(x.isHemisphereLight){let M=n.hemi[b];M.direction.setFromMatrixPosition(x.matrixWorld),M.direction.transformDirection(u),b++}}}return{setup:o,setupView:l,state:n}}function Id(i){let e=new Fg(i),t=[],n=[],a=[];function s(f){d.camera=f,t.length=0,n.length=0,a.length=0}function r(f){t.push(f)}function o(f){n.push(f)}function l(f){a.push(f)}function c(){e.setup(t)}function h(f){e.setupView(t,f)}let d={lightsArray:t,shadowsArray:n,lightProbeGridArray:a,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:d,setupLights:c,setupLightsView:h,pushLight:r,pushShadow:o,pushLightProbeGrid:l}}function Ug(i){let e=new WeakMap;function t(a,s=0){let r=e.get(a),o;return r===void 0?(o=new Id(i),e.set(a,[o])):s>=r.length?(o=new Id(i),r.push(o)):o=r[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var Lg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Og=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Bg=[new O(1,0,0),new O(-1,0,0),new O(0,1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1)],zg=[new O(0,-1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1),new O(0,-1,0),new O(0,-1,0)],Cd=new De,vs=new O,Hc=new O;function Hg(i,e,t){let n=new li,a=new Be,s=new Be,r=new tt,o=new ur,l=new pr,c={},h=t.maxTextureSize,d={[Rn]:Ht,[Ht]:Rn,[Kt]:Kt},f=new Qt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Be},radius:{value:4}},vertexShader:Lg,fragmentShader:Og}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let m=new Dt;m.setAttribute("position",new pt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new Rt(m,f),b=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ls;let u=this.type;this.render=function(w,T,v){if(b.enabled===!1||b.autoUpdate===!1&&b.needsUpdate===!1||w.length===0)return;this.type===_h&&(we("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=ls);let E=i.getRenderTarget(),I=i.getActiveCubeFace(),C=i.getActiveMipmapLevel(),N=i.state;N.setBlending(In),N.buffers.depth.getReversed()===!0?N.buffers.color.setClear(0,0,0,0):N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);let L=u!==this.type;L&&T.traverse(function(P){P.material&&(Array.isArray(P.material)?P.material.forEach(F=>F.needsUpdate=!0):P.material.needsUpdate=!0)});for(let P=0,F=w.length;P<F;P++){let z=w[P],G=z.shadow;if(G===void 0){we("WebGLShadowMap:",z,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;a.copy(G.mapSize);let Z=G.getFrameExtents();a.multiply(Z),s.copy(G.mapSize),(a.x>h||a.y>h)&&(a.x>h&&(s.x=Math.floor(h/Z.x),a.x=s.x*Z.x,G.mapSize.x=s.x),a.y>h&&(s.y=Math.floor(h/Z.y),a.y=s.y*Z.y,G.mapSize.y=s.y));let V=i.state.buffers.depth.getReversed();if(G.camera._reversedDepth=V,G.map===null||L===!0){if(G.map!==null&&(G.map.depthTexture!==null&&(G.map.depthTexture.dispose(),G.map.depthTexture=null),G.map.dispose()),this.type===bi){if(z.isPointLight){we("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}G.map=new Gt(a.x,a.y,{format:da,type:vn,minFilter:mt,magFilter:mt,generateMipmaps:!1}),G.map.texture.name=z.name+".shadowMap",G.map.depthTexture=new ra(a.x,a.y,$t),G.map.depthTexture.name=z.name+".shadowMapDepth",G.map.depthTexture.format=An,G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=bt,G.map.depthTexture.magFilter=bt}else z.isPointLight?(G.map=new yo(a.x),G.map.depthTexture=new dr(a.x,yn)):(G.map=new Gt(a.x,a.y),G.map.depthTexture=new ra(a.x,a.y,yn)),G.map.depthTexture.name=z.name+".shadowMap",G.map.depthTexture.format=An,this.type===ls?(G.map.depthTexture.compareFunction=V?bo:po,G.map.depthTexture.minFilter=mt,G.map.depthTexture.magFilter=mt):(G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=bt,G.map.depthTexture.magFilter=bt);G.camera.updateProjectionMatrix()}G.map.isWebGLCubeRenderTarget!==!0&&(G.map.width!==a.x||G.map.height!==a.y)&&G.map.setSize(a.x,a.y);let K=G.map.isWebGLCubeRenderTarget?6:G.getViewportCount();z.isPointLight!==!0&&G.updateMatrices(z,v);for(let ee=0;ee<K;ee++){let be=G.getCamera(ee);if(z.isPointLight){let pe=G.camera,qe=G.matrix,Le=z.distance||pe.far;Le!==pe.far&&(pe.far=Le,pe.updateProjectionMatrix()),vs.setFromMatrixPosition(z.matrixWorld),pe.position.copy(vs),Hc.copy(pe.position),Hc.add(Bg[ee]),pe.up.copy(zg[ee]),pe.lookAt(Hc),pe.updateMatrixWorld(),qe.makeTranslation(-vs.x,-vs.y,-vs.z),Cd.multiplyMatrices(pe.projectionMatrix,pe.matrixWorldInverse),G._frustum.setFromProjectionMatrix(Cd,pe.coordinateSystem,pe.reversedDepth)}if(G.map.isWebGLCubeRenderTarget)i.setRenderTarget(G.map,ee),i.clear();else{ee===0&&(i.setRenderTarget(G.map),i.clear());let pe=G.getViewport(ee);r.set(s.x*pe.x,s.y*pe.y,s.x*pe.z,s.y*pe.w),N.viewport(r)}n=G.getFrustum(ee),x(T,v,be,z,this.type)}G.isPointLightShadow!==!0&&this.type===bi&&g(G,v),G.needsUpdate=!1}u=this.type,b.needsUpdate=!1,i.setRenderTarget(E,I,C)};function g(w,T){let v=e.update(y);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,p.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),w.mapPass===null?w.mapPass=new Gt(a.x,a.y,{format:da,type:vn}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),f.uniforms.shadow_pass.value=w.map.depthTexture,f.uniforms.resolution.value.set(w.map.width,w.map.height),f.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(T,null,v,f,y,null),p.uniforms.shadow_pass.value=w.mapPass.texture,p.uniforms.resolution.value.set(w.map.width,w.map.height),p.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(T,null,v,p,y,null)}function S(w,T,v,E){let I=null,C=v.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(C!==void 0)I=C;else if(I=v.isPointLight===!0?l:o,i.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0||T.alphaToCoverage===!0){let N=I.uuid,L=T.uuid,P=c[N];P===void 0&&(P={},c[N]=P);let F=P[L];F===void 0&&(F=I.clone(),P[L]=F,T.addEventListener("dispose",M)),I=F}if(I.visible=T.visible,I.wireframe=T.wireframe,E===bi?I.side=T.shadowSide!==null?T.shadowSide:T.side:I.side=T.shadowSide!==null?T.shadowSide:d[T.side],I.alphaMap=T.alphaMap,I.alphaTest=T.alphaToCoverage===!0?.5:T.alphaTest,I.map=T.map,I.clipShadows=T.clipShadows,I.clippingPlanes=T.clippingPlanes,I.clipIntersection=T.clipIntersection,I.displacementMap=T.displacementMap,I.displacementScale=T.displacementScale,I.displacementBias=T.displacementBias,I.wireframeLinewidth=T.wireframeLinewidth,I.linewidth=T.linewidth,v.isPointLight===!0&&I.isMeshDistanceMaterial===!0){let N=i.properties.get(I);N.light=v}return I}function x(w,T,v,E,I){if(w.visible===!1)return;if(w.layers.test(T.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&I===bi)&&(!w.frustumCulled||w.intersectsFrustum(n))){w.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,w.matrixWorld);let L=e.update(w),P=w.material;if(Array.isArray(P)){let F=L.groups;for(let z=0,G=F.length;z<G;z++){let Z=F[z],V=P[Z.materialIndex];if(V&&V.visible){let K=S(w,V,E,I);w.onBeforeShadow(i,w,T,v,L,K,Z),i.renderBufferDirect(v,null,L,K,w,Z),w.onAfterShadow(i,w,T,v,L,K,Z)}}}else if(P.visible){let F=S(w,P,E,I);w.onBeforeShadow(i,w,T,v,L,F,null),i.renderBufferDirect(v,null,L,F,w,null),w.onAfterShadow(i,w,T,v,L,F,null)}}let N=w.children;for(let L=0,P=N.length;L<P;L++)x(N[L],T,v,E,I)}function M(w){w.target.removeEventListener("dispose",M);for(let v in c){let E=c[v],I=w.target.uuid;I in E&&(E[I].dispose(),delete E[I])}}}function jg(i,e){function t(){let D=!1,oe=new tt,Q=null,ce=new tt(0,0,0,0);return{setMask:function(ue){Q!==ue&&!D&&(i.colorMask(ue,ue,ue,ue),Q=ue)},setLocked:function(ue){D=ue},setClear:function(ue,ne,Te,Me,rt){rt===!0&&(ue*=Me,ne*=Me,Te*=Me),oe.set(ue,ne,Te,Me),ce.equals(oe)===!1&&(i.clearColor(ue,ne,Te,Me),ce.copy(oe))},reset:function(){D=!1,Q=null,ce.set(-1,0,0,0)}}}function n(){let D=!1,oe=!1,Q=null,ce=null,ue=null;return{setReversed:function(ne){if(oe!==ne){let Te=e.get("EXT_clip_control");ne?Te.clipControlEXT(Te.LOWER_LEFT_EXT,Te.ZERO_TO_ONE_EXT):Te.clipControlEXT(Te.LOWER_LEFT_EXT,Te.NEGATIVE_ONE_TO_ONE_EXT),oe=ne;let Me=ue;ue=null,this.setClear(Me)}},getReversed:function(){return oe},setTest:function(ne){ne?te(i.DEPTH_TEST):ye(i.DEPTH_TEST)},setMask:function(ne){Q!==ne&&!D&&(i.depthMask(ne),Q=ne)},setFunc:function(ne){if(oe&&(ne=sd[ne]),ce!==ne){switch(ne){case $s:i.depthFunc(i.NEVER);break;case er:i.depthFunc(i.ALWAYS);break;case tr:i.depthFunc(i.LESS);break;case Qa:i.depthFunc(i.LEQUAL);break;case nr:i.depthFunc(i.EQUAL);break;case ar:i.depthFunc(i.GEQUAL);break;case ir:i.depthFunc(i.GREATER);break;case sr:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ce=ne}},setLocked:function(ne){D=ne},setClear:function(ne){ue!==ne&&(ue=ne,oe&&(ne=1-ne),i.clearDepth(ne))},reset:function(){D=!1,Q=null,ce=null,ue=null,oe=!1}}}function a(){let D=!1,oe=null,Q=null,ce=null,ue=null,ne=null,Te=null,Me=null,rt=null;return{setTest:function(Ye){D||(Ye?te(i.STENCIL_TEST):ye(i.STENCIL_TEST))},setMask:function(Ye){oe!==Ye&&!D&&(i.stencilMask(Ye),oe=Ye)},setFunc:function(Ye,rn,_n){(Q!==Ye||ce!==rn||ue!==_n)&&(i.stencilFunc(Ye,rn,_n),Q=Ye,ce=rn,ue=_n)},setOp:function(Ye,rn,_n){(ne!==Ye||Te!==rn||Me!==_n)&&(i.stencilOp(Ye,rn,_n),ne=Ye,Te=rn,Me=_n)},setLocked:function(Ye){D=Ye},setClear:function(Ye){rt!==Ye&&(i.clearStencil(Ye),rt=Ye)},reset:function(){D=!1,oe=null,Q=null,ce=null,ue=null,ne=null,Te=null,Me=null,rt=null}}}let s=new t,r=new n,o=new a,l=new WeakMap,c=new WeakMap,h={},d={},f={},p=new WeakMap,m=[],y=null,b=!1,u=null,g=null,S=null,x=null,M=null,w=null,T=null,v=new Re(0,0,0),E=0,I=!1,C=null,N=null,L=null,P=null,F=null,z=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),G=!1,Z=0,V=i.getParameter(i.VERSION);V.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(V)[1]),G=Z>=1):V.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),G=Z>=2);let K=null,ee={},be=i.getParameter(i.SCISSOR_BOX),pe=i.getParameter(i.VIEWPORT),qe=new tt().fromArray(be),Le=new tt().fromArray(pe);function We(D,oe,Q,ce){let ue=new Uint8Array(4),ne=i.createTexture();i.bindTexture(D,ne),i.texParameteri(D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(D,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Te=0;Te<Q;Te++)D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY?i.texImage3D(oe,0,i.RGBA,1,1,ce,0,i.RGBA,i.UNSIGNED_BYTE,ue):i.texImage2D(oe+Te,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ue);return ne}let J={};J[i.TEXTURE_2D]=We(i.TEXTURE_2D,i.TEXTURE_2D,1),J[i.TEXTURE_CUBE_MAP]=We(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[i.TEXTURE_2D_ARRAY]=We(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),J[i.TEXTURE_3D]=We(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),o.setClear(0),te(i.DEPTH_TEST),r.setFunc(Qa),Xe(!1),lt(oc),te(i.CULL_FACE),Je(In);function te(D){h[D]!==!0&&(i.enable(D),h[D]=!0)}function ye(D){h[D]!==!1&&(i.disable(D),h[D]=!1)}function Pe(D,oe){return f[D]!==oe?(i.bindFramebuffer(D,oe),f[D]=oe,D===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=oe),D===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=oe),!0):!1}function ge(D,oe){let Q=m,ce=!1;if(D){Q=p.get(oe),Q===void 0&&(Q=[],p.set(oe,Q));let ue=D.textures;if(Q.length!==ue.length||Q[0]!==i.COLOR_ATTACHMENT0){for(let ne=0,Te=ue.length;ne<Te;ne++)Q[ne]=i.COLOR_ATTACHMENT0+ne;Q.length=ue.length,ce=!0}}else Q[0]!==i.BACK&&(Q[0]=i.BACK,ce=!0);ce&&i.drawBuffers(Q)}function ze(D){return y!==D?(i.useProgram(D),y=D,!0):!1}let Mt={[Ia]:i.FUNC_ADD,[Sh]:i.FUNC_SUBTRACT,[wh]:i.FUNC_REVERSE_SUBTRACT};Mt[Ah]=i.MIN,Mt[Eh]=i.MAX;let je={[Th]:i.ZERO,[Rh]:i.ONE,[Ih]:i.SRC_COLOR,[dc]:i.SRC_ALPHA,[Fh]:i.SRC_ALPHA_SATURATE,[kh]:i.DST_COLOR,[Nh]:i.DST_ALPHA,[Ch]:i.ONE_MINUS_SRC_COLOR,[fc]:i.ONE_MINUS_SRC_ALPHA,[Dh]:i.ONE_MINUS_DST_COLOR,[Ph]:i.ONE_MINUS_DST_ALPHA,[Uh]:i.CONSTANT_COLOR,[Lh]:i.ONE_MINUS_CONSTANT_COLOR,[Oh]:i.CONSTANT_ALPHA,[Bh]:i.ONE_MINUS_CONSTANT_ALPHA};function Je(D,oe,Q,ce,ue,ne,Te,Me,rt,Ye){if(D===In){b===!0&&(ye(i.BLEND),b=!1);return}if(b===!1&&(te(i.BLEND),b=!0),D!==Mh){if(D!==u||Ye!==I){if((g!==Ia||M!==Ia)&&(i.blendEquation(i.FUNC_ADD),g=Ia,M=Ia),Ye)switch(D){case mi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case cc:i.blendFunc(i.ONE,i.ONE);break;case lc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case hc:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Ce("WebGLState: Invalid blending: ",D);break}else switch(D){case mi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case cc:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case lc:Ce("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case hc:Ce("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ce("WebGLState: Invalid blending: ",D);break}S=null,x=null,w=null,T=null,v.set(0,0,0),E=0,u=D,I=Ye}return}ue=ue||oe,ne=ne||Q,Te=Te||ce,(oe!==g||ue!==M)&&(i.blendEquationSeparate(Mt[oe],Mt[ue]),g=oe,M=ue),(Q!==S||ce!==x||ne!==w||Te!==T)&&(i.blendFuncSeparate(je[Q],je[ce],je[ne],je[Te]),S=Q,x=ce,w=ne,T=Te),(Me.equals(v)===!1||rt!==E)&&(i.blendColor(Me.r,Me.g,Me.b,rt),v.copy(Me),E=rt),u=D,I=!1}function st(D,oe){D.side===Kt?ye(i.CULL_FACE):te(i.CULL_FACE);let Q=D.side===Ht;oe&&(Q=!Q),Xe(Q),D.blending===mi&&D.transparent===!1?Je(In):Je(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),r.setFunc(D.depthFunc),r.setTest(D.depthTest),r.setMask(D.depthWrite),s.setMask(D.colorWrite);let ce=D.stencilWrite;o.setTest(ce),ce&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),jt(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?te(i.SAMPLE_ALPHA_TO_COVERAGE):ye(i.SAMPLE_ALPHA_TO_COVERAGE)}function Xe(D){C!==D&&(D?i.frontFace(i.CW):i.frontFace(i.CCW),C=D)}function lt(D){D!==yh?(te(i.CULL_FACE),D!==N&&(D===oc?i.cullFace(i.BACK):D===vh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ye(i.CULL_FACE),N=D}function Et(D){D!==L&&(G&&i.lineWidth(D),L=D)}function jt(D,oe,Q){D?(te(i.POLYGON_OFFSET_FILL),(P!==oe||F!==Q)&&(P=oe,F=Q,r.getReversed()&&(oe=-oe),i.polygonOffset(oe,Q))):ye(i.POLYGON_OFFSET_FILL)}function dt(D){D?te(i.SCISSOR_TEST):ye(i.SCISSOR_TEST)}function xt(D){D===void 0&&(D=i.TEXTURE0+z-1),K!==D&&(i.activeTexture(D),K=D)}function U(D,oe,Q){Q===void 0&&(K===null?Q=i.TEXTURE0+z-1:Q=K);let ce=ee[Q];ce===void 0&&(ce={type:void 0,texture:void 0},ee[Q]=ce),(ce.type!==D||ce.texture!==oe)&&(K!==Q&&(i.activeTexture(Q),K=Q),i.bindTexture(D,oe||J[D]),ce.type=D,ce.texture=oe)}function It(){let D=ee[K];D!==void 0&&D.type!==void 0&&(i.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function $e(){try{i.compressedTexImage2D(...arguments)}catch(D){Ce("WebGLState:",D)}}function R(){try{i.compressedTexImage3D(...arguments)}catch(D){Ce("WebGLState:",D)}}function _(){try{i.texSubImage2D(...arguments)}catch(D){Ce("WebGLState:",D)}}function B(){try{i.texSubImage3D(...arguments)}catch(D){Ce("WebGLState:",D)}}function W(){try{i.compressedTexSubImage2D(...arguments)}catch(D){Ce("WebGLState:",D)}}function q(){try{i.compressedTexSubImage3D(...arguments)}catch(D){Ce("WebGLState:",D)}}function ae(){try{i.texStorage2D(...arguments)}catch(D){Ce("WebGLState:",D)}}function ie(){try{i.texStorage3D(...arguments)}catch(D){Ce("WebGLState:",D)}}function Y(){try{i.texImage2D(...arguments)}catch(D){Ce("WebGLState:",D)}}function $(){try{i.texImage3D(...arguments)}catch(D){Ce("WebGLState:",D)}}function se(D){return d[D]!==void 0?d[D]:i.getParameter(D)}function Ae(D,oe){d[D]!==oe&&(i.pixelStorei(D,oe),d[D]=oe)}function le(D){qe.equals(D)===!1&&(i.scissor(D.x,D.y,D.z,D.w),qe.copy(D))}function re(D){Le.equals(D)===!1&&(i.viewport(D.x,D.y,D.z,D.w),Le.copy(D))}function Ee(D,oe){let Q=c.get(oe);Q===void 0&&(Q=new WeakMap,c.set(oe,Q));let ce=Q.get(D);ce===void 0&&(ce=i.getUniformBlockIndex(oe,D.name),Q.set(D,ce))}function Ie(D,oe){let ce=c.get(oe).get(D);l.get(oe)!==ce&&(i.uniformBlockBinding(oe,ce,D.__bindingPointIndex),l.set(oe,ce))}function ke(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),r.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},d={},K=null,ee={},f={},p=new WeakMap,m=[],y=null,b=!1,u=null,g=null,S=null,x=null,M=null,w=null,T=null,v=new Re(0,0,0),E=0,I=!1,C=null,N=null,L=null,P=null,F=null,qe.set(0,0,i.canvas.width,i.canvas.height),Le.set(0,0,i.canvas.width,i.canvas.height),s.reset(),r.reset(),o.reset()}return{buffers:{color:s,depth:r,stencil:o},enable:te,disable:ye,bindFramebuffer:Pe,drawBuffers:ge,useProgram:ze,setBlending:Je,setMaterial:st,setFlipSided:Xe,setCullFace:lt,setLineWidth:Et,setPolygonOffset:jt,setScissorTest:dt,activeTexture:xt,bindTexture:U,unbindTexture:It,compressedTexImage2D:$e,compressedTexImage3D:R,texImage2D:Y,texImage3D:$,pixelStorei:Ae,getParameter:se,updateUBOMapping:Ee,uniformBlockBinding:Ie,texStorage2D:ae,texStorage3D:ie,texSubImage2D:_,texSubImage3D:B,compressedTexSubImage2D:W,compressedTexSubImage3D:q,scissor:le,viewport:re,reset:ke}}function Gg(i,e,t,n,a,s,r){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Be,h=new WeakMap,d=new Set,f,p=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(R,_){return m?new OffscreenCanvas(R,_):ti("canvas")}function b(R,_,B){let W=1,q=$e(R);if((q.width>B||q.height>B)&&(W=B/Math.max(q.width,q.height)),W<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){let ae=Math.floor(W*q.width),ie=Math.floor(W*q.height);f===void 0&&(f=y(ae,ie));let Y=_?y(ae,ie):f;return Y.width=ae,Y.height=ie,Y.getContext("2d").drawImage(R,0,0,ae,ie),we("WebGLRenderer: Texture has been resized from ("+q.width+"x"+q.height+") to ("+ae+"x"+ie+")."),Y}else return"data"in R&&we("WebGLRenderer: Image in DataTexture is too big ("+q.width+"x"+q.height+")."),R;return R}function u(R){return R.generateMipmaps}function g(R){i.generateMipmap(R)}function S(R){return R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?i.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function x(R,_,B,W,q,ae=!1){if(R!==null){if(i[R]!==void 0)return i[R];we("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let ie;W&&(ie=e.get("EXT_texture_norm16"),ie||we("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Y=_;if(_===i.RED&&(B===i.FLOAT&&(Y=i.R32F),B===i.HALF_FLOAT&&(Y=i.R16F),B===i.UNSIGNED_BYTE&&(Y=i.R8),B===i.UNSIGNED_SHORT&&ie&&(Y=ie.R16_EXT),B===i.SHORT&&ie&&(Y=ie.R16_SNORM_EXT)),_===i.RED_INTEGER&&(B===i.UNSIGNED_BYTE&&(Y=i.R8UI),B===i.UNSIGNED_SHORT&&(Y=i.R16UI),B===i.UNSIGNED_INT&&(Y=i.R32UI),B===i.BYTE&&(Y=i.R8I),B===i.SHORT&&(Y=i.R16I),B===i.INT&&(Y=i.R32I)),_===i.RG&&(B===i.FLOAT&&(Y=i.RG32F),B===i.HALF_FLOAT&&(Y=i.RG16F),B===i.UNSIGNED_BYTE&&(Y=i.RG8),B===i.UNSIGNED_SHORT&&ie&&(Y=ie.RG16_EXT),B===i.SHORT&&ie&&(Y=ie.RG16_SNORM_EXT)),_===i.RG_INTEGER&&(B===i.UNSIGNED_BYTE&&(Y=i.RG8UI),B===i.UNSIGNED_SHORT&&(Y=i.RG16UI),B===i.UNSIGNED_INT&&(Y=i.RG32UI),B===i.BYTE&&(Y=i.RG8I),B===i.SHORT&&(Y=i.RG16I),B===i.INT&&(Y=i.RG32I)),_===i.RGB_INTEGER&&(B===i.UNSIGNED_BYTE&&(Y=i.RGB8UI),B===i.UNSIGNED_SHORT&&(Y=i.RGB16UI),B===i.UNSIGNED_INT&&(Y=i.RGB32UI),B===i.BYTE&&(Y=i.RGB8I),B===i.SHORT&&(Y=i.RGB16I),B===i.INT&&(Y=i.RGB32I)),_===i.RGBA_INTEGER&&(B===i.UNSIGNED_BYTE&&(Y=i.RGBA8UI),B===i.UNSIGNED_SHORT&&(Y=i.RGBA16UI),B===i.UNSIGNED_INT&&(Y=i.RGBA32UI),B===i.BYTE&&(Y=i.RGBA8I),B===i.SHORT&&(Y=i.RGBA16I),B===i.INT&&(Y=i.RGBA32I)),_===i.RGB&&(B===i.UNSIGNED_SHORT&&ie&&(Y=ie.RGB16_EXT),B===i.SHORT&&ie&&(Y=ie.RGB16_SNORM_EXT),B===i.UNSIGNED_INT_5_9_9_9_REV&&(Y=i.RGB9_E5),B===i.UNSIGNED_INT_10F_11F_11F_REV&&(Y=i.R11F_G11F_B10F)),_===i.RGBA){let $=ae?Li:Oe.getTransfer(q);B===i.FLOAT&&(Y=i.RGBA32F),B===i.HALF_FLOAT&&(Y=i.RGBA16F),B===i.UNSIGNED_BYTE&&(Y=$===Qe?i.SRGB8_ALPHA8:i.RGBA8),B===i.UNSIGNED_SHORT&&ie&&(Y=ie.RGBA16_EXT),B===i.SHORT&&ie&&(Y=ie.RGBA16_SNORM_EXT),B===i.UNSIGNED_SHORT_4_4_4_4&&(Y=i.RGBA4),B===i.UNSIGNED_SHORT_5_5_5_1&&(Y=i.RGB5_A1)}return(Y===i.R16F||Y===i.R32F||Y===i.RG16F||Y===i.RG32F||Y===i.RGBA16F||Y===i.RGBA32F)&&e.get("EXT_color_buffer_float"),Y}function M(R,_){let B;return R?_===null||_===yn||_===yi?B=i.DEPTH24_STENCIL8:_===$t?B=i.DEPTH32F_STENCIL8:_===xi&&(B=i.DEPTH24_STENCIL8,we("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===yn||_===yi?B=i.DEPTH_COMPONENT24:_===$t?B=i.DEPTH_COMPONENT32F:_===xi&&(B=i.DEPTH_COMPONENT16),B}function w(R,_){return u(R)===!0||R.isFramebufferTexture&&R.minFilter!==bt&&R.minFilter!==mt?Math.log2(Math.max(_.width,_.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?_.mipmaps.length:1}function T(R){let _=R.target;_.removeEventListener("dispose",T),E(_),_.isVideoTexture&&h.delete(_),_.isHTMLTexture&&d.delete(_)}function v(R){let _=R.target;_.removeEventListener("dispose",v),C(_)}function E(R){let _=n.get(R);if(_.__webglInit===void 0)return;let B=R.source,W=p.get(B);if(W){let q=W[_.__cacheKey];q.usedTimes--,q.usedTimes===0&&I(R),Object.keys(W).length===0&&p.delete(B)}n.remove(R)}function I(R){let _=n.get(R);i.deleteTexture(_.__webglTexture);let B=R.source,W=p.get(B);delete W[_.__cacheKey],r.memory.textures--}function C(R){let _=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let W=0;W<6;W++){if(Array.isArray(_.__webglFramebuffer[W]))for(let q=0;q<_.__webglFramebuffer[W].length;q++)i.deleteFramebuffer(_.__webglFramebuffer[W][q]);else i.deleteFramebuffer(_.__webglFramebuffer[W]);_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer[W])}else{if(Array.isArray(_.__webglFramebuffer))for(let W=0;W<_.__webglFramebuffer.length;W++)i.deleteFramebuffer(_.__webglFramebuffer[W]);else i.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&i.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let W=0;W<_.__webglColorRenderbuffer.length;W++)_.__webglColorRenderbuffer[W]&&i.deleteRenderbuffer(_.__webglColorRenderbuffer[W]);_.__webglDepthRenderbuffer&&i.deleteRenderbuffer(_.__webglDepthRenderbuffer)}let B=R.textures;for(let W=0,q=B.length;W<q;W++){let ae=n.get(B[W]);ae.__webglTexture&&(i.deleteTexture(ae.__webglTexture),r.memory.textures--),n.remove(B[W])}n.remove(R)}let N=0;function L(){N=0}function P(){return N}function F(R){N=R}function z(){let R=N;return R>=a.maxTextures&&we("WebGLTextures: Trying to use "+(R+1)+" texture units while this GPU supports only "+a.maxTextures),N+=1,R}function G(R){let _=[];return _.push(R.wrapS),_.push(R.wrapT),_.push(R.wrapR||0),_.push(R.magFilter),_.push(R.minFilter),_.push(R.anisotropy),_.push(R.internalFormat),_.push(R.format),_.push(R.type),_.push(R.generateMipmaps),_.push(R.premultiplyAlpha),_.push(R.flipY),_.push(R.unpackAlignment),_.push(R.colorSpace),_.join()}function Z(R,_){let B=n.get(R);if(R.isVideoTexture&&U(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&B.__version!==R.version){let W=R.image;if(W===null)we("WebGLRenderer: Texture marked for update but no image data found.");else if(W.complete===!1)we("WebGLRenderer: Texture marked for update but image is incomplete");else{ye(B,R,_);return}}else R.isExternalTexture&&(B.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,B.__webglTexture,i.TEXTURE0+_)}function V(R,_){let B=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&B.__version!==R.version){ye(B,R,_);return}else R.isExternalTexture&&(B.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,B.__webglTexture,i.TEXTURE0+_)}function K(R,_){let B=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&B.__version!==R.version){ye(B,R,_);return}t.bindTexture(i.TEXTURE_3D,B.__webglTexture,i.TEXTURE0+_)}function ee(R,_){let B=n.get(R);if(R.isCubeDepthTexture!==!0&&R.version>0&&B.__version!==R.version){Pe(B,R,_);return}t.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture,i.TEXTURE0+_)}let be={[sa]:i.REPEAT,[an]:i.CLAMP_TO_EDGE,[$a]:i.MIRRORED_REPEAT},pe={[bt]:i.NEAREST,[Tr]:i.NEAREST_MIPMAP_NEAREST,[Na]:i.NEAREST_MIPMAP_LINEAR,[mt]:i.LINEAR,[gi]:i.LINEAR_MIPMAP_NEAREST,[xn]:i.LINEAR_MIPMAP_LINEAR},qe={[Yh]:i.NEVER,[td]:i.ALWAYS,[Zh]:i.LESS,[po]:i.LEQUAL,[Qh]:i.EQUAL,[bo]:i.GEQUAL,[$h]:i.GREATER,[ed]:i.NOTEQUAL};function Le(R,_){if(_.type===$t&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===mt||_.magFilter===gi||_.magFilter===Na||_.magFilter===xn||_.minFilter===mt||_.minFilter===gi||_.minFilter===Na||_.minFilter===xn)&&we("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(R,i.TEXTURE_WRAP_S,be[_.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,be[_.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,be[_.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,pe[_.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,pe[_.minFilter]),_.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,qe[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===bt||_.minFilter!==Na&&_.minFilter!==xn||_.type===$t&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){let B=e.get("EXT_texture_filter_anisotropic");i.texParameterf(R,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,a.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function We(R,_){let B=!1;R.__webglInit===void 0&&(R.__webglInit=!0,_.addEventListener("dispose",T));let W=_.source,q=p.get(W);q===void 0&&(q={},p.set(W,q));let ae=G(_);if(ae!==R.__cacheKey){q[ae]===void 0&&(q[ae]={texture:i.createTexture(),usedTimes:0},r.memory.textures++,B=!0),q[ae].usedTimes++;let ie=q[R.__cacheKey];ie!==void 0&&(q[R.__cacheKey].usedTimes--,ie.usedTimes===0&&I(_)),R.__cacheKey=ae,R.__webglTexture=q[ae].texture}return B}function J(R,_,B){return Math.floor(Math.floor(R/B)/_)}function te(R,_,B,W){let ae=R.updateRanges;if(ae.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,_.width,_.height,B,W,_.data);else{ae.sort((Ae,le)=>Ae.start-le.start);let ie=0;for(let Ae=1;Ae<ae.length;Ae++){let le=ae[ie],re=ae[Ae],Ee=le.start+le.count,Ie=J(re.start,_.width,4),ke=J(le.start,_.width,4);re.start<=Ee+1&&Ie===ke&&J(re.start+re.count-1,_.width,4)===Ie?le.count=Math.max(le.count,re.start+re.count-le.start):(++ie,ae[ie]=re)}ae.length=ie+1;let Y=t.getParameter(i.UNPACK_ROW_LENGTH),$=t.getParameter(i.UNPACK_SKIP_PIXELS),se=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,_.width);for(let Ae=0,le=ae.length;Ae<le;Ae++){let re=ae[Ae],Ee=Math.floor(re.start/4),Ie=Math.ceil(re.count/4),ke=Ee%_.width,D=Math.floor(Ee/_.width),oe=Ie,Q=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,ke),t.pixelStorei(i.UNPACK_SKIP_ROWS,D),t.texSubImage2D(i.TEXTURE_2D,0,ke,D,oe,Q,B,W,_.data)}R.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,Y),t.pixelStorei(i.UNPACK_SKIP_PIXELS,$),t.pixelStorei(i.UNPACK_SKIP_ROWS,se)}}function ye(R,_,B){let W=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(W=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&(W=i.TEXTURE_3D);let q=We(R,_),ae=_.source;t.bindTexture(W,R.__webglTexture,i.TEXTURE0+B);let ie=n.get(ae);if(ae.version!==ie.__version||q===!0){if(t.activeTexture(i.TEXTURE0+B),(typeof ImageBitmap<"u"&&_.image instanceof ImageBitmap)===!1){let Q=Oe.getPrimaries(Oe.workingColorSpace),ce=_.colorSpace===Kn?null:Oe.getPrimaries(_.colorSpace),ue=_.colorSpace===Kn||Q===ce?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ue)}t.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment);let $=b(_.image,!1,a.maxTextureSize);$=It(_,$);let se=s.convert(_.format,_.colorSpace),Ae=s.convert(_.type),le=x(_.internalFormat,se,Ae,_.normalized,_.colorSpace,_.isVideoTexture);Le(W,_);let re,Ee=_.mipmaps,Ie=_.isVideoTexture!==!0,ke=ie.__version===void 0||q===!0,D=ae.dataReady,oe=w(_,$);if(_.isDepthTexture)le=M(_.format===ha,_.type),ke&&(Ie?t.texStorage2D(i.TEXTURE_2D,1,le,$.width,$.height):t.texImage2D(i.TEXTURE_2D,0,le,$.width,$.height,0,se,Ae,null));else if(_.isDataTexture)if(Ee.length>0){Ie&&ke&&t.texStorage2D(i.TEXTURE_2D,oe,le,Ee[0].width,Ee[0].height);for(let Q=0,ce=Ee.length;Q<ce;Q++)re=Ee[Q],Ie?D&&t.texSubImage2D(i.TEXTURE_2D,Q,0,0,re.width,re.height,se,Ae,re.data):t.texImage2D(i.TEXTURE_2D,Q,le,re.width,re.height,0,se,Ae,re.data);_.generateMipmaps=!1}else Ie?(ke&&t.texStorage2D(i.TEXTURE_2D,oe,le,$.width,$.height),D&&te(_,$,se,Ae)):t.texImage2D(i.TEXTURE_2D,0,le,$.width,$.height,0,se,Ae,$.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Ie&&ke&&t.texStorage3D(i.TEXTURE_2D_ARRAY,oe,le,Ee[0].width,Ee[0].height,$.depth);for(let Q=0,ce=Ee.length;Q<ce;Q++)if(re=Ee[Q],_.format!==en)if(se!==null)if(Ie){if(D)if(_.layerUpdates.size>0){let ue=Fc(re.width,re.height,_.format,_.type);for(let ne of _.layerUpdates){let Te=re.data.subarray(ne*ue/re.data.BYTES_PER_ELEMENT,(ne+1)*ue/re.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,ne,re.width,re.height,1,se,Te)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,0,re.width,re.height,$.depth,se,re.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Q,le,re.width,re.height,$.depth,0,re.data,0,0);else we("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ie?D&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,0,re.width,re.height,$.depth,se,Ae,re.data):t.texImage3D(i.TEXTURE_2D_ARRAY,Q,le,re.width,re.height,$.depth,0,se,Ae,re.data);_.layerUpdates.size>0&&_.clearLayerUpdates()}else{Ie&&ke&&t.texStorage2D(i.TEXTURE_2D,oe,le,Ee[0].width,Ee[0].height);for(let Q=0,ce=Ee.length;Q<ce;Q++)re=Ee[Q],_.format!==en?se!==null?Ie?D&&t.compressedTexSubImage2D(i.TEXTURE_2D,Q,0,0,re.width,re.height,se,re.data):t.compressedTexImage2D(i.TEXTURE_2D,Q,le,re.width,re.height,0,re.data):we("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ie?D&&t.texSubImage2D(i.TEXTURE_2D,Q,0,0,re.width,re.height,se,Ae,re.data):t.texImage2D(i.TEXTURE_2D,Q,le,re.width,re.height,0,se,Ae,re.data)}else if(_.isDataArrayTexture)if(Ie){if(ke&&t.texStorage3D(i.TEXTURE_2D_ARRAY,oe,le,$.width,$.height,$.depth),D)if(_.layerUpdates.size>0){let Q=Fc($.width,$.height,_.format,_.type);for(let ce of _.layerUpdates){let ue=$.data.subarray(ce*Q/$.data.BYTES_PER_ELEMENT,(ce+1)*Q/$.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ce,$.width,$.height,1,se,Ae,ue)}_.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,$.width,$.height,$.depth,se,Ae,$.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,le,$.width,$.height,$.depth,0,se,Ae,$.data);else if(_.isData3DTexture)Ie?(ke&&t.texStorage3D(i.TEXTURE_3D,oe,le,$.width,$.height,$.depth),D&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,$.width,$.height,$.depth,se,Ae,$.data)):t.texImage3D(i.TEXTURE_3D,0,le,$.width,$.height,$.depth,0,se,Ae,$.data);else if(_.isFramebufferTexture){if(ke)if(Ie)t.texStorage2D(i.TEXTURE_2D,oe,le,$.width,$.height);else{let Q=$.width,ce=$.height;for(let ue=0;ue<oe;ue++)t.texImage2D(i.TEXTURE_2D,ue,le,Q,ce,0,se,Ae,null),Q>>=1,ce>>=1}}else if(_.isHTMLTexture){if("texElementImage2D"in i){let Q=i.canvas;if(Q.hasAttribute("layoutsubtree")||Q.setAttribute("layoutsubtree","true"),$.parentNode!==Q){Q.appendChild($),d.add(_),Q.onpaint=ce=>{let ue=ce.changedElements;for(let ne of d)ue.includes(ne.image)&&(ne.needsUpdate=!0)},Q.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,$);else{let ue=i.RGBA,ne=i.RGBA,Te=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,ue,ne,Te,$)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Ee.length>0){if(Ie&&ke){let Q=$e(Ee[0]);t.texStorage2D(i.TEXTURE_2D,oe,le,Q.width,Q.height)}for(let Q=0,ce=Ee.length;Q<ce;Q++)re=Ee[Q],Ie?D&&t.texSubImage2D(i.TEXTURE_2D,Q,0,0,se,Ae,re):t.texImage2D(i.TEXTURE_2D,Q,le,se,Ae,re);_.generateMipmaps=!1}else if(Ie){if(ke){let Q=$e($);t.texStorage2D(i.TEXTURE_2D,oe,le,Q.width,Q.height)}D&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,se,Ae,$)}else t.texImage2D(i.TEXTURE_2D,0,le,se,Ae,$);u(_)&&g(W),ie.__version=ae.version,_.onUpdate&&_.onUpdate(_)}R.__version=_.version}function Pe(R,_,B){if(_.image.length!==6)return;let W=We(R,_),q=_.source;t.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+B);let ae=n.get(q);if(q.version!==ae.__version||W===!0){t.activeTexture(i.TEXTURE0+B);let ie=Oe.getPrimaries(Oe.workingColorSpace),Y=_.colorSpace===Kn?null:Oe.getPrimaries(_.colorSpace),$=_.colorSpace===Kn||ie===Y?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,$);let se=_.isCompressedTexture||_.image[0].isCompressedTexture,Ae=_.image[0]&&_.image[0].isDataTexture,le=[];for(let ne=0;ne<6;ne++)!se&&!Ae?le[ne]=b(_.image[ne],!0,a.maxCubemapSize):le[ne]=Ae?_.image[ne].image:_.image[ne],le[ne]=It(_,le[ne]);let re=le[0],Ee=s.convert(_.format,_.colorSpace),Ie=s.convert(_.type),ke=x(_.internalFormat,Ee,Ie,_.normalized,_.colorSpace),D=_.isVideoTexture!==!0,oe=ae.__version===void 0||W===!0,Q=q.dataReady,ce=w(_,re);Le(i.TEXTURE_CUBE_MAP,_);let ue;if(se){D&&oe&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ce,ke,re.width,re.height);for(let ne=0;ne<6;ne++){ue=le[ne].mipmaps;for(let Te=0;Te<ue.length;Te++){let Me=ue[Te];_.format!==en?Ee!==null?D?Q&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Te,0,0,Me.width,Me.height,Ee,Me.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Te,ke,Me.width,Me.height,0,Me.data):we("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):D?Q&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Te,0,0,Me.width,Me.height,Ee,Ie,Me.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Te,ke,Me.width,Me.height,0,Ee,Ie,Me.data)}}}else{if(ue=_.mipmaps,D&&oe){ue.length>0&&ce++;let ne=$e(le[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,ce,ke,ne.width,ne.height)}for(let ne=0;ne<6;ne++)if(Ae){D?Q&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,le[ne].width,le[ne].height,Ee,Ie,le[ne].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,ke,le[ne].width,le[ne].height,0,Ee,Ie,le[ne].data);for(let Te=0;Te<ue.length;Te++){let rt=ue[Te].image[ne].image;D?Q&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Te+1,0,0,rt.width,rt.height,Ee,Ie,rt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Te+1,ke,rt.width,rt.height,0,Ee,Ie,rt.data)}}else{D?Q&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,Ee,Ie,le[ne]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,ke,Ee,Ie,le[ne]);for(let Te=0;Te<ue.length;Te++){let Me=ue[Te];D?Q&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Te+1,0,0,Ee,Ie,Me.image[ne]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Te+1,ke,Ee,Ie,Me.image[ne])}}}u(_)&&g(i.TEXTURE_CUBE_MAP),ae.__version=q.version,_.onUpdate&&_.onUpdate(_)}R.__version=_.version}function ge(R,_,B,W,q,ae){let ie=s.convert(B.format,B.colorSpace),Y=s.convert(B.type),$=x(B.internalFormat,ie,Y,B.normalized,B.colorSpace),se=n.get(_),Ae=n.get(B);if(Ae.__renderTarget=_,!se.__hasExternalTextures){let le=Math.max(1,_.width>>ae),re=Math.max(1,_.height>>ae);q===i.TEXTURE_3D||q===i.TEXTURE_2D_ARRAY?t.texImage3D(q,ae,$,le,re,_.depth,0,ie,Y,null):t.texImage2D(q,ae,$,le,re,0,ie,Y,null)}t.bindFramebuffer(i.FRAMEBUFFER,R),xt(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,W,q,Ae.__webglTexture,0,dt(_)):(q===i.TEXTURE_2D||q>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&q<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,W,q,Ae.__webglTexture,ae),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ze(R,_,B){if(i.bindRenderbuffer(i.RENDERBUFFER,R),_.depthBuffer){let W=_.depthTexture,q=W&&W.isDepthTexture?W.type:null,ae=M(_.stencilBuffer,q),ie=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;xt(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,dt(_),ae,_.width,_.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,dt(_),ae,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,ae,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ie,i.RENDERBUFFER,R)}else{let W=_.textures;for(let q=0;q<W.length;q++){let ae=W[q],ie=s.convert(ae.format,ae.colorSpace),Y=s.convert(ae.type),$=x(ae.internalFormat,ie,Y,ae.normalized,ae.colorSpace);xt(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,dt(_),$,_.width,_.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,dt(_),$,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,$,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Mt(R,_,B){let W=_.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,R),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let q=n.get(_.depthTexture);if(q.__renderTarget=_,(!q.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),W){if(q.__webglInit===void 0&&(q.__webglInit=!0,_.depthTexture.addEventListener("dispose",T)),q.__webglTexture===void 0){q.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture),Le(i.TEXTURE_CUBE_MAP,_.depthTexture);let se=s.convert(_.depthTexture.format),Ae=s.convert(_.depthTexture.type),le;_.depthTexture.format===An?le=i.DEPTH_COMPONENT24:_.depthTexture.format===ha&&(le=i.DEPTH24_STENCIL8);for(let re=0;re<6;re++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,le,_.width,_.height,0,se,Ae,null)}}else Z(_.depthTexture,0);let ae=q.__webglTexture,ie=dt(_),Y=W?i.TEXTURE_CUBE_MAP_POSITIVE_X+B:i.TEXTURE_2D,$=_.depthTexture.format===ha?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(_.depthTexture.format===An)xt(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,$,Y,ae,0,ie):i.framebufferTexture2D(i.FRAMEBUFFER,$,Y,ae,0);else if(_.depthTexture.format===ha)xt(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,$,Y,ae,0,ie):i.framebufferTexture2D(i.FRAMEBUFFER,$,Y,ae,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function je(R){let _=n.get(R),B=R.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==R.depthTexture){let W=R.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),W){let q=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,W.removeEventListener("dispose",q)};W.addEventListener("dispose",q),_.__depthDisposeCallback=q}_.__boundDepthTexture=W}if(R.depthTexture&&!_.__autoAllocateDepthBuffer)if(B)for(let W=0;W<6;W++)Mt(_.__webglFramebuffer[W],R,W);else{let W=R.texture.mipmaps;W&&W.length>0?Mt(_.__webglFramebuffer[0],R,0):Mt(_.__webglFramebuffer,R,0)}else if(B){_.__webglDepthbuffer=[];for(let W=0;W<6;W++)if(t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[W]),_.__webglDepthbuffer[W]===void 0)_.__webglDepthbuffer[W]=i.createRenderbuffer(),ze(_.__webglDepthbuffer[W],R,!1);else{let q=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ae=_.__webglDepthbuffer[W];i.bindRenderbuffer(i.RENDERBUFFER,ae),i.framebufferRenderbuffer(i.FRAMEBUFFER,q,i.RENDERBUFFER,ae)}}else{let W=R.texture.mipmaps;if(W&&W.length>0?t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=i.createRenderbuffer(),ze(_.__webglDepthbuffer,R,!1);else{let q=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ae=_.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ae),i.framebufferRenderbuffer(i.FRAMEBUFFER,q,i.RENDERBUFFER,ae)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Je(R,_,B){let W=n.get(R);_!==void 0&&ge(W.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),B!==void 0&&je(R)}function st(R){let _=R.texture,B=n.get(R),W=n.get(_);R.addEventListener("dispose",v);let q=R.textures,ae=R.isWebGLCubeRenderTarget===!0,ie=q.length>1;if(ie||(W.__webglTexture===void 0&&(W.__webglTexture=i.createTexture()),W.__version=_.version,r.memory.textures++),ae){B.__webglFramebuffer=[];for(let Y=0;Y<6;Y++)if(_.mipmaps&&_.mipmaps.length>0){B.__webglFramebuffer[Y]=[];for(let $=0;$<_.mipmaps.length;$++)B.__webglFramebuffer[Y][$]=i.createFramebuffer()}else B.__webglFramebuffer[Y]=i.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){B.__webglFramebuffer=[];for(let Y=0;Y<_.mipmaps.length;Y++)B.__webglFramebuffer[Y]=i.createFramebuffer()}else B.__webglFramebuffer=i.createFramebuffer();if(ie)for(let Y=0,$=q.length;Y<$;Y++){let se=n.get(q[Y]);se.__webglTexture===void 0&&(se.__webglTexture=i.createTexture(),r.memory.textures++)}if(R.samples>0&&xt(R)===!1){B.__webglMultisampledFramebuffer=i.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let Y=0;Y<q.length;Y++){let $=q[Y];B.__webglColorRenderbuffer[Y]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,B.__webglColorRenderbuffer[Y]);let se=s.convert($.format,$.colorSpace),Ae=s.convert($.type),le=x($.internalFormat,se,Ae,$.normalized,$.colorSpace,R.isXRRenderTarget===!0),re=dt(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,re,le,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Y,i.RENDERBUFFER,B.__webglColorRenderbuffer[Y])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(B.__webglDepthRenderbuffer=i.createRenderbuffer(),ze(B.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ae){t.bindTexture(i.TEXTURE_CUBE_MAP,W.__webglTexture),Le(i.TEXTURE_CUBE_MAP,_);for(let Y=0;Y<6;Y++)if(_.mipmaps&&_.mipmaps.length>0)for(let $=0;$<_.mipmaps.length;$++)ge(B.__webglFramebuffer[Y][$],R,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,$);else ge(B.__webglFramebuffer[Y],R,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0);u(_)&&g(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ie){for(let Y=0,$=q.length;Y<$;Y++){let se=q[Y],Ae=n.get(se),le=i.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(le=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(le,Ae.__webglTexture),Le(le,se),ge(B.__webglFramebuffer,R,se,i.COLOR_ATTACHMENT0+Y,le,0),u(se)&&g(le)}t.unbindTexture()}else{let Y=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(Y=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Y,W.__webglTexture),Le(Y,_),_.mipmaps&&_.mipmaps.length>0)for(let $=0;$<_.mipmaps.length;$++)ge(B.__webglFramebuffer[$],R,_,i.COLOR_ATTACHMENT0,Y,$);else ge(B.__webglFramebuffer,R,_,i.COLOR_ATTACHMENT0,Y,0);u(_)&&g(Y),t.unbindTexture()}R.depthBuffer&&je(R)}function Xe(R){let _=R.textures;for(let B=0,W=_.length;B<W;B++){let q=_[B];if(u(q)){let ae=S(R),ie=n.get(q).__webglTexture;t.bindTexture(ae,ie),g(ae),t.unbindTexture()}}}let lt=[],Et=[];function jt(R){if(R.samples>0){if(xt(R)===!1){let _=R.textures,B=R.width,W=R.height,q=i.COLOR_BUFFER_BIT,ae=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ie=n.get(R),Y=_.length>1;if(Y)for(let se=0;se<_.length;se++)t.bindFramebuffer(i.FRAMEBUFFER,ie.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+se,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ie.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+se,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ie.__webglMultisampledFramebuffer);let $=R.texture.mipmaps;$&&$.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ie.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ie.__webglFramebuffer);for(let se=0;se<_.length;se++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(q|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(q|=i.STENCIL_BUFFER_BIT)),Y){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ie.__webglColorRenderbuffer[se]);let Ae=n.get(_[se]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ae,0)}i.blitFramebuffer(0,0,B,W,0,0,B,W,q,i.NEAREST),l===!0&&(lt.length=0,Et.length=0,lt.push(i.COLOR_ATTACHMENT0+se),R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&(lt.push(ae),Et.push(ae),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Et)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,lt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Y)for(let se=0;se<_.length;se++){t.bindFramebuffer(i.FRAMEBUFFER,ie.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+se,i.RENDERBUFFER,ie.__webglColorRenderbuffer[se]);let Ae=n.get(_[se]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ie.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+se,i.TEXTURE_2D,Ae,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ie.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&l){let _=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[_])}}}function dt(R){return Math.min(a.maxSamples,R.samples)}function xt(R){let _=n.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function U(R){let _=r.render.frame;h.get(R)!==_&&(h.set(R,_),R.update())}function It(R,_){let B=R.colorSpace,W=R.format,q=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||B!==Bt&&B!==Kn&&(Oe.getTransfer(B)===Qe?(W!==en||q!==Jt)&&we("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ce("WebGLTextures: Unsupported texture color space:",B)),_}function $e(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=z,this.resetTextureUnits=L,this.getTextureUnits=P,this.setTextureUnits=F,this.setTexture2D=Z,this.setTexture2DArray=V,this.setTexture3D=K,this.setTextureCube=ee,this.rebindTextures=Je,this.setupRenderTarget=st,this.updateRenderTargetMipmap=Xe,this.updateMultisampleRenderTarget=jt,this.setupDepthRenderbuffer=je,this.setupFrameBufferTexture=ge,this.useMultisampledRTT=xt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Vg(i,e){function t(n,a=Kn){let s,r=Oe.getTransfer(a);if(n===Jt)return i.UNSIGNED_BYTE;if(n===Ir)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Cr)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Sc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===wc)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===_c)return i.BYTE;if(n===Mc)return i.SHORT;if(n===xi)return i.UNSIGNED_SHORT;if(n===Rr)return i.INT;if(n===yn)return i.UNSIGNED_INT;if(n===$t)return i.FLOAT;if(n===vn)return i.HALF_FLOAT;if(n===Ac)return i.ALPHA;if(n===Ec)return i.RGB;if(n===en)return i.RGBA;if(n===An)return i.DEPTH_COMPONENT;if(n===ha)return i.DEPTH_STENCIL;if(n===Nr)return i.RED;if(n===Pr)return i.RED_INTEGER;if(n===da)return i.RG;if(n===kr)return i.RG_INTEGER;if(n===Dr)return i.RGBA_INTEGER;if(n===fs||n===us||n===ps||n===bs)if(r===Qe)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===fs)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===us)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ps)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===bs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===fs)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===us)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ps)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===bs)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Fr||n===Ur||n===Lr||n===Or)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Fr)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ur)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Lr)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Or)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Br||n===zr||n===Hr||n===jr||n===Gr||n===ms||n===Vr)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Br||n===zr)return r===Qe?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Hr)return r===Qe?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===jr)return s.COMPRESSED_R11_EAC;if(n===Gr)return s.COMPRESSED_SIGNED_R11_EAC;if(n===ms)return s.COMPRESSED_RG11_EAC;if(n===Vr)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Wr||n===Xr||n===qr||n===Kr||n===Jr||n===Yr||n===Zr||n===Qr||n===$r||n===eo||n===to||n===no||n===ao||n===io)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Wr)return r===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Xr)return r===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===qr)return r===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Kr)return r===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Jr)return r===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Yr)return r===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Zr)return r===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Qr)return r===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===$r)return r===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===eo)return r===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===to)return r===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===no)return r===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ao)return r===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===io)return r===Qe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===so||n===ro||n===oo)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===so)return r===Qe?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ro)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===oo)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===co||n===lo||n===gs||n===ho)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===co)return s.COMPRESSED_RED_RGTC1_EXT;if(n===lo)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===gs)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ho)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===yi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var Wg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Xg=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Jc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Qi(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Qt({vertexShader:Wg,fragmentShader:Xg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Rt(new $i(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Yc=class extends bn{constructor(e,t){super();let n=this,a=null,s=1,r=null,o="local-floor",l=1,c=null,h=null,d=null,f=null,p=null,m=null,y=typeof XRWebGLBinding<"u",b=new Jc,u={},g=t.getContextAttributes(),S=null,x=null,M=[],w=[],T=new Be,v=null,E=null,I=new _t;I.viewport=new tt;let C=new _t;C.viewport=new tt;let N=[I,C],L=new Mr,P=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let te=M[J];return te===void 0&&(te=new ii,M[J]=te),te.getTargetRaySpace()},this.getControllerGrip=function(J){let te=M[J];return te===void 0&&(te=new ii,M[J]=te),te.getGripSpace()},this.getHand=function(J){let te=M[J];return te===void 0&&(te=new ii,M[J]=te),te.getHandSpace()};function z(J){let te=w.indexOf(J.inputSource);if(te===-1)return;let ye=M[te];ye!==void 0&&(ye.update(J.inputSource,J.frame,c||r),ye.dispatchEvent({type:J.type,data:J.inputSource}))}function G(){a.removeEventListener("select",z),a.removeEventListener("selectstart",z),a.removeEventListener("selectend",z),a.removeEventListener("squeeze",z),a.removeEventListener("squeezestart",z),a.removeEventListener("squeezeend",z),a.removeEventListener("end",G),a.removeEventListener("inputsourceschange",Z);for(let J=0;J<M.length;J++){let te=w[J];te!==null&&(w[J]=null,M[J].disconnect(te))}P=null,F=null,b.reset();for(let J in u)delete u[J];if(e.setRenderTarget(S),p=null,f=null,d=null,a=null,x=null,We.stop(),n.isPresenting=!1,e.setPixelRatio(v),e.setSize(T.width,T.height,!1),E!==null){let J=E.camera;J.fov=E.fov,J.zoom=E.zoom,J.updateProjectionMatrix(),E=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){s=J,n.isPresenting===!0&&we("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){o=J,n.isPresenting===!0&&we("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||r},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return d===null&&y&&(d=new XRWebGLBinding(a,t)),d},this.getFrame=function(){return m},this.getSession=function(){return a},this.setSession=async function(J){if(a=J,a!==null){if(S=e.getRenderTarget(),a.addEventListener("select",z),a.addEventListener("selectstart",z),a.addEventListener("selectend",z),a.addEventListener("squeeze",z),a.addEventListener("squeezestart",z),a.addEventListener("squeezeend",z),a.addEventListener("end",G),a.addEventListener("inputsourceschange",Z),g.xrCompatible!==!0&&await t.makeXRCompatible(),v=e.getPixelRatio(),e.getSize(T),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let ye=null,Pe=null,ge=null;g.depth&&(ge=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ye=g.stencil?ha:An,Pe=g.stencil?yi:yn);let ze={colorFormat:t.RGBA8,depthFormat:ge,scaleFactor:s};d=this.getBinding(),f=d.createProjectionLayer(ze),a.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),x=new Gt(f.textureWidth,f.textureHeight,{format:en,type:Jt,depthTexture:new ra(f.textureWidth,f.textureHeight,Pe,void 0,void 0,void 0,void 0,void 0,void 0,ye),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let ye={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(a,t,ye),a.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),x=new Gt(p.framebufferWidth,p.framebufferHeight,{format:en,type:Jt,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,r=await a.requestReferenceSpace(o),We.setContext(a),We.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return b.getDepthTexture()};function Z(J){for(let te=0;te<J.removed.length;te++){let ye=J.removed[te],Pe=w.indexOf(ye);Pe>=0&&(w[Pe]=null,M[Pe].disconnect(ye))}for(let te=0;te<J.added.length;te++){let ye=J.added[te],Pe=w.indexOf(ye);if(Pe===-1){for(let ze=0;ze<M.length;ze++)if(ze>=w.length){w.push(ye),Pe=ze;break}else if(w[ze]===null){w[ze]=ye,Pe=ze;break}if(Pe===-1)break}let ge=M[Pe];ge&&ge.connect(ye)}}let V=new O,K=new O;function ee(J,te,ye){V.setFromMatrixPosition(te.matrixWorld),K.setFromMatrixPosition(ye.matrixWorld);let Pe=V.distanceTo(K),ge=te.projectionMatrix.elements,ze=ye.projectionMatrix.elements,Mt=ge[14]/(ge[10]-1),je=ge[14]/(ge[10]+1),Je=(ge[9]+1)/ge[5],st=(ge[9]-1)/ge[5],Xe=(ge[8]-1)/ge[0],lt=(ze[8]+1)/ze[0],Et=Mt*Xe,jt=Mt*lt,dt=Pe/(-Xe+lt),xt=dt*-Xe;if(te.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(xt),J.translateZ(dt),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),ge[10]===-1)J.projectionMatrix.copy(te.projectionMatrix),J.projectionMatrixInverse.copy(te.projectionMatrixInverse);else{let U=Mt+dt,It=je+dt,$e=Et-xt,R=jt+(Pe-xt),_=Je*je/It*U,B=st*je/It*U;J.projectionMatrix.makePerspective($e,R,_,B,U,It),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function be(J,te){te===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(te.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(a===null)return;let te=J.near,ye=J.far;b.texture!==null&&(b.depthNear>0&&(te=b.depthNear),b.depthFar>0&&(ye=b.depthFar)),L.near=C.near=I.near=te,L.far=C.far=I.far=ye,(P!==L.near||F!==L.far)&&(a.updateRenderState({depthNear:L.near,depthFar:L.far}),P=L.near,F=L.far),L.layers.mask=J.layers.mask|6,I.layers.mask=L.layers.mask&-5,C.layers.mask=L.layers.mask&-3;let Pe=J.parent,ge=L.cameras;be(L,Pe);for(let ze=0;ze<ge.length;ze++)be(ge[ze],Pe);ge.length===2?ee(L,I,C):L.projectionMatrix.copy(I.projectionMatrix),E===null&&J.isPerspectiveCamera&&(E={camera:J,fov:J.fov,zoom:J.zoom}),pe(J,L,Pe)};function pe(J,te,ye){ye===null?J.matrix.copy(te.matrixWorld):(J.matrix.copy(ye.matrixWorld),J.matrix.invert(),J.matrix.multiply(te.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(te.projectionMatrix),J.projectionMatrixInverse.copy(te.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=Sa*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return L},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(J){l=J,f!==null&&(f.fixedFoveation=J),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=J)},this.hasDepthSensing=function(){return b.texture!==null},this.getDepthSensingMesh=function(){return b.getMesh(L)},this.getCameraTexture=function(J){return u[J]};let qe=null;function Le(J,te){if(h=te.getViewerPose(c||r),m=te,h!==null){let ye=h.views;p!==null&&(e.setRenderTargetFramebuffer(x,p.framebuffer),e.setRenderTarget(x));let Pe=!1;ye.length!==L.cameras.length&&(L.cameras.length=0,Pe=!0);for(let je=0;je<ye.length;je++){let Je=ye[je],st=null;if(p!==null)st=p.getViewport(Je);else{let lt=d.getViewSubImage(f,Je);st=lt.viewport,je===0&&(e.setRenderTargetTextures(x,lt.colorTexture,lt.depthStencilTexture),e.setRenderTarget(x))}let Xe=N[je];Xe===void 0&&(Xe=new _t,Xe.layers.enable(je),Xe.viewport=new tt,N[je]=Xe),Xe.matrix.fromArray(Je.transform.matrix),Xe.matrix.decompose(Xe.position,Xe.quaternion,Xe.scale),Xe.projectionMatrix.fromArray(Je.projectionMatrix),Xe.projectionMatrixInverse.copy(Xe.projectionMatrix).invert(),Xe.viewport.set(st.x,st.y,st.width,st.height),je===0&&(L.matrix.copy(Xe.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale)),Pe===!0&&L.cameras.push(Xe)}let ge=a.enabledFeatures;if(ge&&ge.includes("depth-sensing")&&a.depthUsage=="gpu-optimized"&&y){d=n.getBinding();let je=d.getDepthInformation(ye[0]);je&&je.isValid&&je.texture&&b.init(je,a.renderState)}if(ge&&ge.includes("camera-access")&&y){e.state.unbindTexture(),d=n.getBinding();for(let je=0;je<ye.length;je++){let Je=ye[je].camera;if(Je){let st=u[Je];st||(st=new Qi,u[Je]=st);let Xe=d.getCameraImage(Je);st.sourceTexture=Xe}}}}for(let ye=0;ye<M.length;ye++){let Pe=w[ye],ge=M[ye];Pe!==null&&ge!==void 0&&ge.update(Pe,te,c||r)}qe&&qe(J,te),te.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:te}),m=null}let We=new Nd;We.setAnimationLoop(Le),this.setAnimationLoop=function(J){qe=J},this.dispose=function(){}}},qg=new De,Ld=new Ne;Ld.set(-1,0,0,0,1,0,0,0,1);function Kg(i,e){function t(b,u){b.matrixAutoUpdate===!0&&b.updateMatrix(),u.value.copy(b.matrix)}function n(b,u){u.color.getRGB(b.fogColor.value,Pc(i)),u.isFog?(b.fogNear.value=u.near,b.fogFar.value=u.far):u.isFogExp2&&(b.fogDensity.value=u.density)}function a(b,u,g,S,x){u.isNodeMaterial?u.uniformsNeedUpdate=!1:u.isMeshBasicMaterial?s(b,u):u.isMeshLambertMaterial?(s(b,u),u.envMap&&(b.envMapIntensity.value=u.envMapIntensity)):u.isMeshToonMaterial?(s(b,u),d(b,u)):u.isMeshPhongMaterial?(s(b,u),h(b,u),u.envMap&&(b.envMapIntensity.value=u.envMapIntensity)):u.isMeshStandardMaterial?(s(b,u),f(b,u),u.isMeshPhysicalMaterial&&p(b,u,x)):u.isMeshMatcapMaterial?(s(b,u),m(b,u)):u.isMeshDepthMaterial?s(b,u):u.isMeshDistanceMaterial?(s(b,u),y(b,u)):u.isMeshNormalMaterial?s(b,u):u.isLineBasicMaterial?(r(b,u),u.isLineDashedMaterial&&o(b,u)):u.isPointsMaterial?l(b,u,g,S):u.isSpriteMaterial?c(b,u):u.isShadowMaterial?(b.color.value.copy(u.color),b.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(b,u){b.opacity.value=u.opacity,u.color&&b.diffuse.value.copy(u.color),u.emissive&&b.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(b.map.value=u.map,t(u.map,b.mapTransform)),u.alphaMap&&(b.alphaMap.value=u.alphaMap,t(u.alphaMap,b.alphaMapTransform)),u.bumpMap&&(b.bumpMap.value=u.bumpMap,t(u.bumpMap,b.bumpMapTransform),b.bumpScale.value=u.bumpScale,u.side===Ht&&(b.bumpScale.value*=-1)),u.normalMap&&(b.normalMap.value=u.normalMap,t(u.normalMap,b.normalMapTransform),b.normalScale.value.copy(u.normalScale),u.side===Ht&&b.normalScale.value.negate()),u.displacementMap&&(b.displacementMap.value=u.displacementMap,t(u.displacementMap,b.displacementMapTransform),b.displacementScale.value=u.displacementScale,b.displacementBias.value=u.displacementBias),u.emissiveMap&&(b.emissiveMap.value=u.emissiveMap,t(u.emissiveMap,b.emissiveMapTransform)),u.specularMap&&(b.specularMap.value=u.specularMap,t(u.specularMap,b.specularMapTransform)),u.alphaTest>0&&(b.alphaTest.value=u.alphaTest);let g=e.get(u),S=g.envMap,x=g.envMapRotation;S&&(b.envMap.value=S,b.envMapRotation.value.setFromMatrix4(qg.makeRotationFromEuler(x)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&b.envMapRotation.value.premultiply(Ld),b.reflectivity.value=u.reflectivity,b.ior.value=u.ior,b.refractionRatio.value=u.refractionRatio),u.lightMap&&(b.lightMap.value=u.lightMap,b.lightMapIntensity.value=u.lightMapIntensity,t(u.lightMap,b.lightMapTransform)),u.aoMap&&(b.aoMap.value=u.aoMap,b.aoMapIntensity.value=u.aoMapIntensity,t(u.aoMap,b.aoMapTransform))}function r(b,u){b.diffuse.value.copy(u.color),b.opacity.value=u.opacity,u.map&&(b.map.value=u.map,t(u.map,b.mapTransform))}function o(b,u){b.dashSize.value=u.dashSize,b.totalSize.value=u.dashSize+u.gapSize,b.scale.value=u.scale}function l(b,u,g,S){b.diffuse.value.copy(u.color),b.opacity.value=u.opacity,b.size.value=u.size*g,b.scale.value=S*.5,u.map&&(b.map.value=u.map,t(u.map,b.uvTransform)),u.alphaMap&&(b.alphaMap.value=u.alphaMap,t(u.alphaMap,b.alphaMapTransform)),u.alphaTest>0&&(b.alphaTest.value=u.alphaTest)}function c(b,u){b.diffuse.value.copy(u.color),b.opacity.value=u.opacity,b.rotation.value=u.rotation,u.map&&(b.map.value=u.map,t(u.map,b.mapTransform)),u.alphaMap&&(b.alphaMap.value=u.alphaMap,t(u.alphaMap,b.alphaMapTransform)),u.alphaTest>0&&(b.alphaTest.value=u.alphaTest)}function h(b,u){b.specular.value.copy(u.specular),b.shininess.value=Math.max(u.shininess,1e-4)}function d(b,u){u.gradientMap&&(b.gradientMap.value=u.gradientMap)}function f(b,u){b.metalness.value=u.metalness,u.metalnessMap&&(b.metalnessMap.value=u.metalnessMap,t(u.metalnessMap,b.metalnessMapTransform)),b.roughness.value=u.roughness,u.roughnessMap&&(b.roughnessMap.value=u.roughnessMap,t(u.roughnessMap,b.roughnessMapTransform)),u.envMap&&(b.envMapIntensity.value=u.envMapIntensity)}function p(b,u,g){b.ior.value=u.ior,u.sheen>0&&(b.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),b.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(b.sheenColorMap.value=u.sheenColorMap,t(u.sheenColorMap,b.sheenColorMapTransform)),u.sheenRoughnessMap&&(b.sheenRoughnessMap.value=u.sheenRoughnessMap,t(u.sheenRoughnessMap,b.sheenRoughnessMapTransform))),u.clearcoat>0&&(b.clearcoat.value=u.clearcoat,b.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(b.clearcoatMap.value=u.clearcoatMap,t(u.clearcoatMap,b.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(b.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,t(u.clearcoatRoughnessMap,b.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(b.clearcoatNormalMap.value=u.clearcoatNormalMap,t(u.clearcoatNormalMap,b.clearcoatNormalMapTransform),b.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===Ht&&b.clearcoatNormalScale.value.negate())),u.dispersion>0&&(b.dispersion.value=u.dispersion),u.retroreflectivity>0&&(b.retroreflectivity.value=u.retroreflectivity),u.iridescence>0&&(b.iridescence.value=u.iridescence,b.iridescenceIOR.value=u.iridescenceIOR,b.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],b.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(b.iridescenceMap.value=u.iridescenceMap,t(u.iridescenceMap,b.iridescenceMapTransform)),u.iridescenceThicknessMap&&(b.iridescenceThicknessMap.value=u.iridescenceThicknessMap,t(u.iridescenceThicknessMap,b.iridescenceThicknessMapTransform))),u.transmission>0&&(b.transmission.value=u.transmission,b.transmissionSamplerMap.value=g.texture,b.transmissionSamplerSize.value.set(g.width,g.height),u.transmissionMap&&(b.transmissionMap.value=u.transmissionMap,t(u.transmissionMap,b.transmissionMapTransform)),b.thickness.value=u.thickness,u.thicknessMap&&(b.thicknessMap.value=u.thicknessMap,t(u.thicknessMap,b.thicknessMapTransform)),b.attenuationDistance.value=u.attenuationDistance,b.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(b.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(b.anisotropyMap.value=u.anisotropyMap,t(u.anisotropyMap,b.anisotropyMapTransform))),b.specularIntensity.value=u.specularIntensity,b.specularColor.value.copy(u.specularColor),u.specularColorMap&&(b.specularColorMap.value=u.specularColorMap,t(u.specularColorMap,b.specularColorMapTransform)),u.specularIntensityMap&&(b.specularIntensityMap.value=u.specularIntensityMap,t(u.specularIntensityMap,b.specularIntensityMapTransform))}function m(b,u){u.matcap&&(b.matcap.value=u.matcap)}function y(b,u){let g=e.get(u).light;b.referencePosition.value.setFromMatrixPosition(g.matrixWorld),b.nearDistance.value=g.shadow.camera.near,b.farDistance.value=g.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:a}}function Jg(i,e,t,n){let a={},s={},r=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,M){let w=M.program;n.uniformBlockBinding(x,w)}function c(x,M){let w=a[x.id];w===void 0&&(b(x),w=h(x),a[x.id]=w,x.addEventListener("dispose",g));let T=M.program;n.updateUBOMapping(x,T);let v=e.render.frame;s[x.id]!==v&&(f(x),s[x.id]=v)}function h(x){let M=d();x.__bindingPointIndex=M;let w=i.createBuffer(),T=x.__size,v=x.usage;return i.bindBuffer(i.UNIFORM_BUFFER,w),i.bufferData(i.UNIFORM_BUFFER,T,v),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,w),w}function d(){for(let x=0;x<o;x++)if(r.indexOf(x)===-1)return r.push(x),x;return Ce("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(x){let M=a[x.id],w=x.uniforms,T=x.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let v=0,E=w.length;v<E;v++){let I=w[v];if(Array.isArray(I))for(let C=0,N=I.length;C<N;C++)p(I[C],v,C,T);else p(I,v,0,T)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(x,M,w,T){if(y(x,M,w,T)===!0){let v=x.__offset,E=x.value;if(Array.isArray(E)){let I=0;for(let C=0;C<E.length;C++){let N=E[C],L=u(N);m(N,x.__data,I),typeof N!="number"&&typeof N!="boolean"&&!N.isMatrix3&&!ArrayBuffer.isView(N)&&(I+=L.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(E,x.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,v,x.__data)}}function m(x,M,w){typeof x=="number"||typeof x=="boolean"?M[0]=x:x.isMatrix3?(M[0]=x.elements[0],M[1]=x.elements[1],M[2]=x.elements[2],M[3]=0,M[4]=x.elements[3],M[5]=x.elements[4],M[6]=x.elements[5],M[7]=0,M[8]=x.elements[6],M[9]=x.elements[7],M[10]=x.elements[8],M[11]=0):ArrayBuffer.isView(x)?M.set(new x.constructor(x.buffer,x.byteOffset,M.length)):x.toArray(M,w)}function y(x,M,w,T){let v=x.value,E=M+"_"+w;if(T[E]===void 0)return typeof v=="number"||typeof v=="boolean"?T[E]=v:ArrayBuffer.isView(v)?T[E]=v.slice():T[E]=v.clone(),!0;{let I=T[E];if(typeof v=="number"||typeof v=="boolean"){if(I!==v)return T[E]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(I.equals(v)===!1)return I.copy(v),!0}}return!1}function b(x){let M=x.uniforms,w=0,T=16;for(let E=0,I=M.length;E<I;E++){let C=Array.isArray(M[E])?M[E]:[M[E]];for(let N=0,L=C.length;N<L;N++){let P=C[N],F=Array.isArray(P.value)?P.value:[P.value];for(let z=0,G=F.length;z<G;z++){let Z=F[z],V=u(Z),K=w%T,ee=K%V.boundary,be=K+ee;w+=ee,be!==0&&T-be<V.storage&&(w+=T-be),P.__data=new Float32Array(V.storage/Float32Array.BYTES_PER_ELEMENT),P.__offset=w,w+=V.storage}}}let v=w%T;return v>0&&(w+=T-v),x.__size=w,x.__cache={},this}function u(x){let M={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(M.boundary=4,M.storage=4):x.isVector2?(M.boundary=8,M.storage=8):x.isVector3||x.isColor?(M.boundary=16,M.storage=12):x.isVector4?(M.boundary=16,M.storage=16):x.isMatrix3?(M.boundary=48,M.storage=48):x.isMatrix4?(M.boundary=64,M.storage=64):x.isTexture?we("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(x)?(M.boundary=16,M.storage=x.byteLength):we("WebGLRenderer: Unsupported uniform value type.",x),M}function g(x){let M=x.target;M.removeEventListener("dispose",g);let w=r.indexOf(M.__bindingPointIndex);r.splice(w,1),i.deleteBuffer(a[M.id]),delete a[M.id],delete s[M.id]}function S(){for(let x in a)i.deleteBuffer(a[x]);r=[],a={},s={}}return{bind:l,update:c,dispose:S}}var Yg=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Cn=null;function Zg(){return Cn===null&&(Cn=new ci(Yg,16,16,da,vn),Cn.name="DFG_LUT",Cn.minFilter=mt,Cn.magFilter=mt,Cn.wrapS=an,Cn.wrapT=an,Cn.generateMipmaps=!1,Cn.needsUpdate=!0),Cn}var vo=class{constructor(e={}){let{canvas:t=nd(),context:n=null,depth:a=!0,stencil:s=!1,alpha:r=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:f=!1,outputBufferType:p=Jt}=e;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=r;let y=p,b=new Set([Dr,kr,Pr]),u=new Set([Jt,yn,xi,yi,Ir,Cr]),g=new Uint32Array(4),S=new Int32Array(4),x=new O,M=null,w=null,T=[],v=[],E=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=gn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let I=this,C=!1,N=null,L=null,P=null,F=null;this._outputColorSpace=ft;let z=0,G=0,Z=null,V=-1,K=null,ee=new tt,be=new tt,pe=null,qe=new Re(0),Le=0,We=t.width,J=t.height,te=1,ye=null,Pe=null,ge=new tt(0,0,We,J),ze=new tt(0,0,We,J),Mt=!1,je=new li,Je=!1,st=!1,Xe=new De,lt=new O,Et=new tt,jt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},dt=!1;function xt(){return Z===null?te:1}let U=n;function It(A,k){return t.getContext(A,k)}let $e,R,_,B,W,q,ae,ie,Y,$,se,Ae,le,re,Ee,Ie,ke,D,oe,Q,ce,ue,ne;try{let A={alpha:!0,depth:a,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"186"}`),t.addEventListener("webglcontextlost",rt,!1),t.addEventListener("webglcontextrestored",Ye,!1),t.addEventListener("webglcontextcreationerror",rn,!1),U===null){let k="webgl2";if(U=It(k,A),U===null)throw It(k)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Te()}catch(A){throw t.removeEventListener("webglcontextlost",rt,!1),t.removeEventListener("webglcontextrestored",Ye,!1),t.removeEventListener("webglcontextcreationerror",rn,!1),Ce("WebGLRenderer: "+A.message),A}function Te(){$e=new im(U),$e.init(),ce=new Vg(U,$e),R=new Kb(U,$e,e,ce),_=new jg(U,$e),R.reversedDepthBuffer&&f&&_.buffers.depth.setReversed(!0),L=U.createFramebuffer(),P=U.createFramebuffer(),F=U.createFramebuffer(),B=new om(U),W=new Rg,q=new Gg(U,$e,_,W,R,ce,B),ae=new am(I),ie=new lu(U),ue=new Xb(U,ie),Y=new sm(U,ie,B,ue),$=new lm(U,Y,ie,ue,B),D=new cm(U,R,q),Ee=new Jb(W),se=new Tg(I,ae,$e,R,ue,Ee),Ae=new Kg(I,W),le=new Cg,re=new Ug($e),ke=new Wb(I,ae,_,$,m,l),Ie=new Hg(I,$,R),ne=new Jg(U,B,R,_),oe=new qb(U,$e,B),Q=new rm(U,$e,B),B.programs=se.programs,I.capabilities=R,I.extensions=$e,I.properties=W,I.renderLists=le,I.shadowMap=Ie,I.state=_,I.info=B}y!==Jt&&(E=new dm(y,t.width,t.height,o,a,s));let Me=new Yc(I,U);this.xr=Me,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){let A=$e.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){let A=$e.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return te},this.setPixelRatio=function(A){A!==void 0&&(te=A,this.setSize(We,J,!1))},this.getSize=function(A){return A.set(We,J)},this.setSize=function(A,k,X=!0){if(Me.isPresenting){we("WebGLRenderer: Can't change size while VR device is presenting.");return}We=A,J=k,t.width=Math.floor(A*te),t.height=Math.floor(k*te),X===!0&&(t.style.width=A+"px",t.style.height=k+"px"),E!==null&&E.setSize(t.width,t.height),this.setViewport(0,0,A,k)},this.getDrawingBufferSize=function(A){return A.set(We*te,J*te).floor()},this.setDrawingBufferSize=function(A,k,X){We=A,J=k,te=X,t.width=Math.floor(A*X),t.height=Math.floor(k*X),this.setViewport(0,0,A,k)},this.setEffects=function(A){if(y===Jt){Ce("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let k=0;k<A.length;k++)if(A[k].isOutputPass===!0){we("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}E.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(ee)},this.getViewport=function(A){return A.copy(ge)},this.setViewport=function(A,k,X,H){A.isVector4?ge.set(A.x,A.y,A.z,A.w):ge.set(A,k,X,H),_.viewport(ee.copy(ge).multiplyScalar(te).round())},this.getScissor=function(A){return A.copy(ze)},this.setScissor=function(A,k,X,H){A.isVector4?ze.set(A.x,A.y,A.z,A.w):ze.set(A,k,X,H),_.scissor(be.copy(ze).multiplyScalar(te).round())},this.getScissorTest=function(){return Mt},this.setScissorTest=function(A){_.setScissorTest(Mt=A)},this.setOpaqueSort=function(A){ye=A},this.setTransparentSort=function(A){Pe=A},this.getClearColor=function(A){return A.copy(ke.getClearColor())},this.setClearColor=function(){ke.setClearColor(...arguments)},this.getClearAlpha=function(){return ke.getClearAlpha()},this.setClearAlpha=function(){ke.setClearAlpha(...arguments)},this.clear=function(A=!0,k=!0,X=!0){let H=0;if(A){let j=!1;if(Z!==null){let fe=Z.texture.format;j=b.has(fe)}if(j){let fe=Z.texture.type,xe=u.has(fe),de=ke.getClearColor(),ve=ke.getClearAlpha(),Se=de.r,Fe=de.g,Ge=de.b;xe?(g[0]=Se,g[1]=Fe,g[2]=Ge,g[3]=ve,U.clearBufferuiv(U.COLOR,0,g)):(S[0]=Se,S[1]=Fe,S[2]=Ge,S[3]=ve,U.clearBufferiv(U.COLOR,0,S))}else H|=U.COLOR_BUFFER_BIT}k&&(H|=U.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),X&&(H|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H!==0&&U.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),N=A},this.dispose=function(){t.removeEventListener("webglcontextlost",rt,!1),t.removeEventListener("webglcontextrestored",Ye,!1),t.removeEventListener("webglcontextcreationerror",rn,!1),ke.dispose(),le.dispose(),re.dispose(),W.dispose(),ae.dispose(),$.dispose(),ue.dispose(),ne.dispose(),se.dispose(),Me.dispose(),Me.removeEventListener("sessionstart",Tl),Me.removeEventListener("sessionend",Rl),ua.stop()};function rt(A){A.preventDefault(),Oi("WebGLRenderer: Context Lost."),C=!0}function Ye(){Oi("WebGLRenderer: Context Restored."),C=!1;let A=B.autoReset,k=Ie.enabled,X=Ie.autoUpdate,H=Ie.needsUpdate,j=Ie.type;Te(),B.autoReset=A,Ie.enabled=k,Ie.autoUpdate=X,Ie.needsUpdate=H,Ie.type=j}function rn(A){Ce("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function _n(A){let k=A.target;k.removeEventListener("dispose",_n),Yd(k)}function Yd(A){Zd(A),W.remove(A)}function Zd(A){let k=W.get(A).programs;k!==void 0&&(k.forEach(function(X){se.releaseProgram(X)}),A.isShaderMaterial&&se.releaseShaderCache(A))}this.renderBufferDirect=function(A,k,X,H,j,fe){k===null&&(k=jt);let xe=j.isMesh&&j.matrixWorld.determinantAffine()<0,de=ef(A,k,X,H,j);_.setMaterial(H,xe);let ve=X.index,Se=1;if(H.wireframe===!0){if(ve=Y.getWireframeAttribute(X),ve===void 0)return;Se=2}let Fe=X.drawRange,Ge=X.attributes.position,_e=Fe.start*Se,Ze=(Fe.start+Fe.count)*Se;fe!==null&&(_e=Math.max(_e,fe.start*Se),Ze=Math.min(Ze,(fe.start+fe.count)*Se)),ve!==null?(_e=Math.max(_e,0),Ze=Math.min(Ze,ve.count)):Ge!=null&&(_e=Math.max(_e,0),Ze=Math.min(Ze,Ge.count));let yt=Ze-_e;if(yt<0||yt===1/0)return;ue.setup(j,H,de,X,ve);let ct,it=oe;if(ve!==null&&(ct=ie.get(ve),it=Q,it.setIndex(ct)),j.isMesh)H.wireframe===!0?(_.setLineWidth(H.wireframeLinewidth*xt()),it.setMode(U.LINES)):it.setMode(U.TRIANGLES);else if(j.isLine){let Ct=H.linewidth;Ct===void 0&&(Ct=1),_.setLineWidth(Ct*xt()),j.isLineSegments?it.setMode(U.LINES):j.isLineLoop?it.setMode(U.LINE_LOOP):it.setMode(U.LINE_STRIP)}else j.isPoints?it.setMode(U.POINTS):j.isSprite&&it.setMode(U.TRIANGLES);if(j.isBatchedMesh)if($e.get("WEBGL_multi_draw"))it.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else{let Ct=j._multiDrawStarts,me=j._multiDrawCounts,Ut=j._multiDrawCount,Ke=ve?ie.get(ve).bytesPerElement:1,tn=W.get(H).currentProgram.getUniforms();for(let Mn=0;Mn<Ut;Mn++)tn.setValue(U,"_gl_DrawID",Mn),it.render(Ct[Mn]/Ke,me[Mn])}else if(j.isInstancedMesh)it.renderInstances(_e,yt,j.count);else if(X.isInstancedBufferGeometry){let Ct=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,me=Math.min(X.instanceCount,Ct);it.renderInstances(_e,yt,me)}else it.render(_e,yt)};function El(A,k,X,H){N!==null&&A.isNodeMaterial&&N.setObject(H,A),Je===!0&&Ee.setState(A,X,!1),A.transparent===!0&&A.side===Kt&&A.forceSinglePass===!1?(A.side=Ht,A.needsUpdate=!0,ws(A,k,H),A.side=Rn,A.needsUpdate=!0,ws(A,k,H),A.side=Kt):ws(A,k,H)}this.compile=function(A,k,X=null){X===null&&(X=A),N!==null&&N.renderStart(A,k,X),w=re.get(X),w.init(k),v.push(w),X.traverseVisible(function(j){j.isLight&&j.layers.test(k.layers)&&(w.pushLight(j),j.castShadow&&w.pushShadow(j))}),A!==X&&A.traverseVisible(function(j){j.isLight&&j.layers.test(k.layers)&&(w.pushLight(j),j.castShadow&&w.pushShadow(j))}),w.setupLights(),N!==null&&N.updateLights(w.state.lightsArray),st=this.localClippingEnabled,Je=Ee.init(this.clippingPlanes,st),Je===!0&&Ee.setGlobalState(this.clippingPlanes,k),N!==null&&Ie.render(w.state.shadowsArray,X,k);let H=new Set;return A.traverse(function(j){if(!(j.isMesh||j.isPoints||j.isLine||j.isSprite))return;let fe=j.material;if(fe)if(Array.isArray(fe))for(let xe=0;xe<fe.length;xe++){let de=fe[xe];El(de,X,k,j),H.add(de)}else El(fe,X,k,j),H.add(fe)}),w=v.pop(),N!==null&&N.renderEnd(),H},this.compileAsync=function(A,k,X=null){let H=this.compile(A,k,X);return new Promise(j=>{function fe(){if(H.forEach(function(xe){let ve=W.get(xe).currentProgram;(ve===void 0||ve.isReady())&&H.delete(xe)}),H.size===0){j(A);return}setTimeout(fe,10)}$e.get("KHR_parallel_shader_compile")!==null?fe():setTimeout(fe,10)})};let Eo=null;function Qd(A){Eo&&Eo(A)}function Tl(){ua.stop()}function Rl(){ua.start()}let ua=new Nd;ua.setAnimationLoop(Qd),typeof self<"u"&&ua.setContext(self),this.setAnimationLoop=function(A){Eo=A,Me.setAnimationLoop(A),A===null?ua.stop():ua.start()},Me.addEventListener("sessionstart",Tl),Me.addEventListener("sessionend",Rl),this.render=function(A,k){if(k!==void 0&&k.isCamera!==!0){Ce("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;N!==null&&N.renderStart(A,k);let X=Me.enabled===!0&&Me.isPresenting===!0,H=E!==null&&(Z===null||X)&&E.begin(I,Z);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),Me.enabled===!0&&Me.isPresenting===!0&&(E===null||E.isCompositing()===!1)&&(Me.cameraAutoUpdate===!0&&Me.updateCamera(k),k=Me.getCamera()),A.isScene===!0&&A.onBeforeRender(I,A,k,Z),w=re.get(A,v.length),w.init(k),w.state.textureUnits=q.getTextureUnits(),v.push(w),Xe.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),je.setFromProjectionMatrix(Xe,fn,k.reversedDepth),st=this.localClippingEnabled,Je=Ee.init(this.clippingPlanes,st),M=le.get(A,T.length),M.init(),T.push(M),Me.enabled===!0&&Me.isPresenting===!0){let xe=I.xr.getDepthSensingMesh();xe!==null&&To(xe,k,-1/0,I.sortObjects)}To(A,k,0,I.sortObjects),M.finish(),N!==null&&N.updateLights(w.state.lightsArray),I.sortObjects===!0&&M.sort(ye,Pe),dt=Me.enabled===!1||Me.isPresenting===!1||Me.hasDepthSensing()===!1,dt&&ke.addToRenderList(M,A),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Je===!0&&Ee.beginShadows();let j=w.state.shadowsArray;if(Ie.render(j,A,k),Je===!0&&Ee.endShadows(),(H&&E.hasRenderPass())===!1){let xe=M.opaque,de=M.transmissive;if(w.setupLights(),k.isArrayCamera){let ve=k.cameras;if(de.length>0)for(let Se=0,Fe=ve.length;Se<Fe;Se++){let Ge=ve[Se];Cl(xe,de,A,Ge)}dt&&ke.render(A);for(let Se=0,Fe=ve.length;Se<Fe;Se++){let Ge=ve[Se];Il(M,A,Ge,Ge.viewport)}}else de.length>0&&Cl(xe,de,A,k),dt&&ke.render(A),Il(M,A,k)}Z!==null&&G===0&&(q.updateMultisampleRenderTarget(Z),q.updateRenderTargetMipmap(Z)),H&&E.end(I),A.isScene===!0&&A.onAfterRender(I,A,k),ue.resetDefaultState(),V=-1,K=null,v.pop(),v.length>0?(w=v[v.length-1],q.setTextureUnits(w.state.textureUnits),Je===!0&&Ee.setGlobalState(I.clippingPlanes,w.state.camera)):w=null,T.pop(),T.length>0?M=T[T.length-1]:M=null,N!==null&&N.renderEnd()};function To(A,k,X,H){if(A.visible===!1)return;if(A.layers.test(k.layers)){if(A.isGroup)X=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(k);else if(A.isLightProbeGrid)w.pushLightProbeGrid(A);else if(A.isLight)w.pushLight(A),A.castShadow&&w.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||A.intersectsFrustum(je)){H&&Et.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Xe);let xe=$.update(A),de=A.material;de.visible&&M.push(A,xe,de,X,Et.z,null,k)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||A.intersectsFrustum(je))){let xe=$.update(A),de=A.material;if(H&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Et.copy(A.boundingSphere.center)):(xe.boundingSphere===null&&xe.computeBoundingSphere(),Et.copy(xe.boundingSphere.center)),Et.applyMatrix4(A.matrixWorld).applyMatrix4(Xe)),Array.isArray(de)){let ve=xe.groups;for(let Se=0,Fe=ve.length;Se<Fe;Se++){let Ge=ve[Se],_e=de[Ge.materialIndex];_e&&_e.visible&&M.push(A,xe,_e,X,Et.z,Ge,k)}}else de.visible&&M.push(A,xe,de,X,Et.z,null,k)}}let fe=A.children;for(let xe=0,de=fe.length;xe<de;xe++)To(fe[xe],k,X,H)}function Il(A,k,X,H){let{opaque:j,transmissive:fe,transparent:xe}=A;w.setupLightsView(X),Je===!0&&Ee.setGlobalState(I.clippingPlanes,X),H&&_.viewport(ee.copy(H)),j.length>0&&Ss(j,k,X),fe.length>0&&Ss(fe,k,X),xe.length>0&&Ss(xe,k,X),_.buffers.depth.setTest(!0),_.buffers.depth.setMask(!0),_.buffers.color.setMask(!0),_.setPolygonOffset(!1)}function Cl(A,k,X,H){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[H.id]===void 0){let _e=$e.has("EXT_color_buffer_half_float")||$e.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[H.id]=new Gt(1,1,{generateMipmaps:!0,type:_e?vn:Jt,minFilter:xn,samples:Math.max(4,R.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Oe.workingColorSpace})}let fe=w.state.transmissionRenderTarget[H.id],xe=H.viewport||ee;fe.setSize(xe.z*I.transmissionResolutionScale,xe.w*I.transmissionResolutionScale);let de=I.getRenderTarget(),ve=I.getActiveCubeFace(),Se=I.getActiveMipmapLevel();I.setRenderTarget(fe),I.getClearColor(qe),Le=I.getClearAlpha(),Le<1&&I.setClearColor(16777215,.5),I.clear(),dt&&ke.render(X);let Fe=I.toneMapping;I.toneMapping=gn;let Ge=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),w.setupLightsView(H),Je===!0&&Ee.setGlobalState(I.clippingPlanes,H),Ss(A,X,H),q.updateMultisampleRenderTarget(fe),q.updateRenderTargetMipmap(fe),$e.has("WEBGL_multisampled_render_to_texture")===!1){let _e=!1;for(let Ze=0,yt=k.length;Ze<yt;Ze++){let ct=k[Ze],{object:it,geometry:Ct,material:me,group:Ut}=ct;if(me.side===Kt&&it.layers.test(H.layers)){let Ke=me.side;me.side=Ht,me.needsUpdate=!0,Nl(it,X,H,Ct,me,Ut),me.side=Ke,me.needsUpdate=!0,_e=!0}}_e===!0&&(q.updateMultisampleRenderTarget(fe),q.updateRenderTargetMipmap(fe))}I.setRenderTarget(de,ve,Se),I.setClearColor(qe,Le),Ge!==void 0&&(H.viewport=Ge),I.toneMapping=Fe}function Ss(A,k,X){let H=k.isScene===!0?k.overrideMaterial:null;for(let j=0,fe=A.length;j<fe;j++){let xe=A[j],{object:de,geometry:ve,group:Se}=xe,Fe=xe.material;Fe.allowOverride===!0&&H!==null&&(Fe=H),de.layers.test(X.layers)&&Nl(de,k,X,ve,Fe,Se)}}function Nl(A,k,X,H,j,fe){N!==null&&j.isNodeMaterial&&N.setObject(A,j),A.onBeforeRender(I,k,X,H,j,fe),A.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),j.onBeforeRender(I,k,X,H,A,fe),j.transparent===!0&&j.side===Kt&&j.forceSinglePass===!1?(j.side=Ht,j.needsUpdate=!0,I.renderBufferDirect(X,k,H,j,A,fe),j.side=Rn,j.needsUpdate=!0,I.renderBufferDirect(X,k,H,j,A,fe),j.side=Kt):I.renderBufferDirect(X,k,H,j,A,fe),A.onAfterRender(I,k,X,H,j,fe)}function ws(A,k,X){k.isScene!==!0&&(k=jt);let H=W.get(A),j=w.state.lights,fe=w.state.shadowsArray,xe=j.state.version,de=se.getParameters(A,j.state,fe,k,X,w.state.lightProbeGridArray),ve=se.getProgramCacheKey(de),Se=H.programs;H.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?k.environment:null,H.fog=k.fog;let Fe=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;H.envMap=ae.get(A.envMap||H.environment,Fe),H.envMapRotation=H.environment!==null&&A.envMap===null?k.environmentRotation:A.envMapRotation,Se===void 0&&(A.addEventListener("dispose",_n),Se=new Map,H.programs=Se);let Ge=Se.get(ve);if(Ge!==void 0){if(H.currentProgram===Ge&&H.lightsStateVersion===xe)return kl(A,de),Ge}else de.uniforms=se.getUniforms(A),N!==null&&A.isNodeMaterial&&N.build(A,X,de),A.onBeforeCompile(de,I),Ge=se.acquireProgram(de,ve),Se.set(ve,Ge),H.uniforms=de.uniforms;let _e=H.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(_e.clippingPlanes=Ee.uniform),kl(A,de),H.needsLights=nf(A),H.lightsStateVersion=xe,H.needsLights&&(_e.ambientLightColor.value=j.state.ambient,_e.lightProbe.value=j.state.probe,_e.sunLights.value=j.state.sun,_e.sunLightShadows.value=j.state.sunShadow,_e.directionalLights.value=j.state.directional,_e.directionalLightShadows.value=j.state.directionalShadow,_e.spotLights.value=j.state.spot,_e.spotLightShadows.value=j.state.spotShadow,_e.rectAreaLights.value=j.state.rectArea,_e.ltc_1.value=j.state.rectAreaLTC1,_e.ltc_2.value=j.state.rectAreaLTC2,_e.pointLights.value=j.state.point,_e.pointLightShadows.value=j.state.pointShadow,_e.hemisphereLights.value=j.state.hemi,_e.sunShadowMatrix.value=j.state.sunShadowMatrix,_e.sunShadowCascade.value=j.state.sunShadowCascade,_e.directionalShadowMatrix.value=j.state.directionalShadowMatrix,_e.spotLightMatrix.value=j.state.spotLightMatrix,_e.spotLightMap.value=j.state.spotLightMap,_e.pointShadowMatrix.value=j.state.pointShadowMatrix),H.lightProbeGrid=w.state.lightProbeGridArray.length>0,H.currentProgram=Ge,H.uniformsList=null,Ge}function Pl(A){if(A.uniformsList===null){let k=A.currentProgram.getUniforms();A.uniformsList=Si.seqWithValue(k.seq,A.uniforms)}return A.uniformsList}function kl(A,k){let X=W.get(A);X.outputColorSpace=k.outputColorSpace,X.batching=k.batching,X.batchingColor=k.batchingColor,X.instancing=k.instancing,X.instancingColor=k.instancingColor,X.instancingMorph=k.instancingMorph,X.skinning=k.skinning,X.morphTargets=k.morphTargets,X.morphNormals=k.morphNormals,X.morphColors=k.morphColors,X.morphTargetsCount=k.morphTargetsCount,X.numClippingPlanes=k.numClippingPlanes,X.numIntersection=k.numClipIntersection,X.vertexAlphas=k.vertexAlphas,X.vertexTangents=k.vertexTangents,X.toneMapping=k.toneMapping}function $d(A,k){if(A.length===0)return null;if(A.length===1)return A[0].texture!==null?A[0]:null;x.setFromMatrixPosition(k.matrixWorld);for(let X=0,H=A.length;X<H;X++){let j=A[X];if(j.texture!==null&&j.boundingBox.containsPoint(x))return j}return null}function ef(A,k,X,H,j){k.isScene!==!0&&(k=jt),q.resetTextureUnits();let fe=k.fog,xe=H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial?k.environment:null,de=Z===null?I.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:Oe.workingColorSpace,ve=H.isMeshStandardMaterial||H.isMeshLambertMaterial&&!H.envMap||H.isMeshPhongMaterial&&!H.envMap,Se=ae.get(H.envMap||xe,ve),Fe=H.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Ge=!!X.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),_e=!!X.morphAttributes.position,Ze=!!X.morphAttributes.normal,yt=!!X.morphAttributes.color,ct=gn;H.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(ct=I.toneMapping);let it=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,Ct=it!==void 0?it.length:0,me=W.get(H),Ut=w.state.lights;if(Je===!0&&(st===!0||A!==K)){let ot=A===K&&H.id===V;Ee.setState(H,A,ot)}let Ke=!1;H.version===me.__version?(me.needsLights&&me.lightsStateVersion!==Ut.state.version||me.outputColorSpace!==de||j.isBatchedMesh&&me.batching===!1||!j.isBatchedMesh&&me.batching===!0||j.isBatchedMesh&&me.batchingColor===!0&&j._colorsTexture===null||j.isBatchedMesh&&me.batchingColor===!1&&j._colorsTexture!==null||j.isInstancedMesh&&me.instancing===!1||!j.isInstancedMesh&&me.instancing===!0||j.isSkinnedMesh&&me.skinning===!1||!j.isSkinnedMesh&&me.skinning===!0||j.isInstancedMesh&&me.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&me.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&me.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&me.instancingMorph===!1&&j.morphTexture!==null||me.envMap!==Se||H.fog===!0&&me.fog!==fe||me.numClippingPlanes!==void 0&&(me.numClippingPlanes!==Ee.numPlanes||me.numIntersection!==Ee.numIntersection)||me.vertexAlphas!==Fe||me.vertexTangents!==Ge||me.morphTargets!==_e||me.morphNormals!==Ze||me.morphColors!==yt||me.toneMapping!==ct||me.morphTargetsCount!==Ct||!!me.lightProbeGrid!=w.state.lightProbeGridArray.length>0)&&(Ke=!0):(Ke=!0,me.__version=H.version);let tn=me.currentProgram;Ke===!0&&(tn=ws(H,k,j),N&&H.isNodeMaterial&&N.onUpdateProgram(H,tn,me));let Mn=!1,Jn=!1,Fa=!1,nt=tn.getUniforms(),ut=me.uniforms;if(_.useProgram(tn.program)&&(Mn=!0,Jn=!0,Fa=!0),H.id!==V&&(V=H.id,Jn=!0),me.needsLights){let ot=$d(w.state.lightProbeGridArray,j);me.lightProbeGrid!==ot&&(me.lightProbeGrid=ot,Jn=!0)}if(Mn||K!==A){_.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),nt.setValue(U,"projectionMatrix",A.projectionMatrix),nt.setValue(U,"viewMatrix",A.matrixWorldInverse);let Zn=nt.map.cameraPosition;Zn!==void 0&&Zn.setValue(U,lt.setFromMatrixPosition(A.matrixWorld)),R.logarithmicDepthBuffer&&nt.setValue(U,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&nt.setValue(U,"isOrthographic",A.isOrthographicCamera===!0),K!==A&&(K=A,Jn=!0,Fa=!0)}if(me.needsLights&&(Ut.state.sunShadowMap.length>0&&nt.setValue(U,"sunShadowMap",Ut.state.sunShadowMap,q),Ut.state.directionalShadowMap.length>0&&nt.setValue(U,"directionalShadowMap",Ut.state.directionalShadowMap,q),Ut.state.spotShadowMap.length>0&&nt.setValue(U,"spotShadowMap",Ut.state.spotShadowMap,q),Ut.state.pointShadowMap.length>0&&nt.setValue(U,"pointShadowMap",Ut.state.pointShadowMap,q)),j.isSkinnedMesh){nt.setOptional(U,j,"bindMatrix"),nt.setOptional(U,j,"bindMatrixInverse");let ot=j.skeleton;ot&&(ot.boneTexture===null&&ot.computeBoneTexture(),nt.setValue(U,"boneTexture",ot.boneTexture,q))}j.isBatchedMesh&&(nt.setOptional(U,j,"batchingTexture"),nt.setValue(U,"batchingTexture",j._matricesTexture,q),nt.setOptional(U,j,"batchingIdTexture"),nt.setValue(U,"batchingIdTexture",j._indirectTexture,q),nt.setOptional(U,j,"batchingColorTexture"),j._colorsTexture!==null&&nt.setValue(U,"batchingColorTexture",j._colorsTexture,q));let Yn=X.morphAttributes;if((Yn.position!==void 0||Yn.normal!==void 0||Yn.color!==void 0)&&D.update(j,X,tn),(Jn||me.receiveShadow!==j.receiveShadow)&&(me.receiveShadow=j.receiveShadow,nt.setValue(U,"receiveShadow",j.receiveShadow)),(H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial)&&H.envMap===null&&k.environment!==null&&(ut.envMapIntensity.value=k.environmentIntensity),ut.dfgLUT!==void 0&&(ut.dfgLUT.value=Zg()),Jn){if(nt.setValue(U,"toneMappingExposure",I.toneMappingExposure),me.needsLights&&tf(ut,Fa),fe&&H.fog===!0&&Ae.refreshFogUniforms(ut,fe),Ae.refreshMaterialUniforms(ut,H,te,J,w.state.transmissionRenderTarget[A.id]),me.needsLights&&me.lightProbeGrid){let ot=me.lightProbeGrid;ut.probesSH.value=ot.texture,ut.probesMin.value.copy(ot.boundingBox.min),ut.probesMax.value.copy(ot.boundingBox.max),ut.probesResolution.value.copy(ot.resolution)}Si.upload(U,Pl(me),ut,q)}if(H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(Si.upload(U,Pl(me),ut,q),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&nt.setValue(U,"center",j.center),nt.setValue(U,"modelViewMatrix",j.modelViewMatrix),nt.setValue(U,"normalMatrix",j.normalMatrix),nt.setValue(U,"modelMatrix",j.matrixWorld),H.uniformsGroups!==void 0){let ot=H.uniformsGroups;for(let Zn=0,Ua=ot.length;Zn<Ua;Zn++){let Fl=ot[Zn];ne.update(Fl,tn),ne.bind(Fl,tn)}}return tn}function tf(A,k){A.ambientLightColor.needsUpdate=k,A.lightProbe.needsUpdate=k,A.sunLights.needsUpdate=k,A.sunLightShadows.needsUpdate=k,A.directionalLights.needsUpdate=k,A.directionalLightShadows.needsUpdate=k,A.pointLights.needsUpdate=k,A.pointLightShadows.needsUpdate=k,A.spotLights.needsUpdate=k,A.spotLightShadows.needsUpdate=k,A.rectAreaLights.needsUpdate=k,A.hemisphereLights.needsUpdate=k}function nf(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return z},this.getActiveMipmapLevel=function(){return G},this.getRenderTarget=function(){return Z},this.setRenderTargetTextures=function(A,k,X){let H=W.get(A);H.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,H.__autoAllocateDepthBuffer===!1&&(H.__useRenderToTexture=!1),W.get(A.texture).__webglTexture=k,W.get(A.depthTexture).__webglTexture=H.__autoAllocateDepthBuffer?void 0:X,H.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,k){let X=W.get(A);X.__webglFramebuffer=k,X.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(A,k=0,X=0){Z=A,z=k,G=X;let H=null,j=!1,fe=!1;if(A){let de=W.get(A);if(de.__useDefaultFramebuffer!==void 0){_.bindFramebuffer(U.FRAMEBUFFER,de.__webglFramebuffer),ee.copy(A.viewport),be.copy(A.scissor),pe=A.scissorTest,_.viewport(ee),_.scissor(be),_.setScissorTest(pe),V=-1;return}else if(de.__webglFramebuffer===void 0)q.setupRenderTarget(A);else if(de.__hasExternalTextures)q.rebindTextures(A,W.get(A.texture).__webglTexture,W.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){let Fe=A.depthTexture;if(de.__boundDepthTexture!==Fe){if(Fe!==null&&W.has(Fe)&&(A.width!==Fe.image.width||A.height!==Fe.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");q.setupDepthRenderbuffer(A)}}let ve=A.texture;(ve.isData3DTexture||ve.isDataArrayTexture||ve.isCompressedArrayTexture)&&(fe=!0);let Se=W.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Se[k])?H=Se[k][X]:H=Se[k],j=!0):A.samples>0&&q.useMultisampledRTT(A)===!1?H=W.get(A).__webglMultisampledFramebuffer:Array.isArray(Se)?H=Se[X]:H=Se,ee.copy(A.viewport),be.copy(A.scissor),pe=A.scissorTest}else ee.copy(ge).multiplyScalar(te).floor(),be.copy(ze).multiplyScalar(te).floor(),pe=Mt;if(X!==0&&(H=L),_.bindFramebuffer(U.FRAMEBUFFER,H)&&_.drawBuffers(A,H),_.viewport(ee),_.scissor(be),_.setScissorTest(pe),j){let de=W.get(A.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+k,de.__webglTexture,X)}else if(fe){let de=k;for(let ve=0;ve<A.textures.length;ve++){let Se=W.get(A.textures[ve]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+ve,Se.__webglTexture,X,de)}}else if(A!==null&&X!==0){let de=W.get(A.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,de.__webglTexture,X)}V=-1};function Dl(A){let k=W.get(A);return(k.__readFormat!==A.format||k.__readType!==A.type)&&(k.__readFormat=A.format,k.__readType=A.type,k.__formatReadable=R.textureFormatReadable(A.format),k.__typeReadable=R.textureTypeReadable(A.type)),k}this.readRenderTargetPixels=function(A,k,X,H,j,fe,xe,de=0){if(!(A&&A.isWebGLRenderTarget)){Ce("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ve=W.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&xe!==void 0&&(ve=ve[xe]),ve){_.bindFramebuffer(U.FRAMEBUFFER,ve);try{let Se=A.textures[de],Fe=Se.format,Ge=Se.type;A.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+de);let _e=Dl(Se);if(_e.__formatReadable===!1){Ce("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(_e.__typeReadable===!1){Ce("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=A.width-H&&X>=0&&X<=A.height-j&&U.readPixels(k,X,H,j,ce.convert(Fe),ce.convert(Ge),fe)}finally{let Se=Z!==null?W.get(Z).__webglFramebuffer:null;_.bindFramebuffer(U.FRAMEBUFFER,Se)}}},this.readRenderTargetPixelsAsync=async function(A,k,X,H,j,fe,xe,de=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ve=W.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&xe!==void 0&&(ve=ve[xe]),ve)if(k>=0&&k<=A.width-H&&X>=0&&X<=A.height-j){_.bindFramebuffer(U.FRAMEBUFFER,ve);let Se=A.textures[de],Fe=Se.format,Ge=Se.type;A.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+de);let _e=Dl(Se);if(_e.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(_e.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Ze=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,Ze),U.bufferData(U.PIXEL_PACK_BUFFER,fe.byteLength,U.STREAM_READ),U.readPixels(k,X,H,j,ce.convert(Fe),ce.convert(Ge),0),U.bindBuffer(U.PIXEL_PACK_BUFFER,null);let yt=Z!==null?W.get(Z).__webglFramebuffer:null;_.bindFramebuffer(U.FRAMEBUFFER,yt);let ct=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await id(U,ct,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,Ze),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,fe),U.bindBuffer(U.PIXEL_PACK_BUFFER,null),U.deleteBuffer(Ze),U.deleteSync(ct),fe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,k=null,X=0){let H=Math.pow(2,-X),j=Math.floor(A.image.width*H),fe=Math.floor(A.image.height*H),xe=k!==null?k.x:0,de=k!==null?k.y:0;q.setTexture2D(A,0),U.copyTexSubImage2D(U.TEXTURE_2D,X,0,0,xe,de,j,fe),_.unbindTexture()},this.copyTextureToTexture=function(A,k,X=null,H=null,j=0,fe=0){let xe,de,ve,Se,Fe,Ge,_e,Ze,yt,ct=A.isCompressedTexture?A.mipmaps[fe]:A.image;if(X!==null)xe=X.max.x-X.min.x,de=X.max.y-X.min.y,ve=X.isBox3?X.max.z-X.min.z:1,Se=X.min.x,Fe=X.min.y,Ge=X.isBox3?X.min.z:0;else{let ut=Math.pow(2,-j);xe=Math.floor(ct.width*ut),de=Math.floor(ct.height*ut),A.isDataArrayTexture?ve=ct.depth:A.isData3DTexture?ve=Math.floor(ct.depth*ut):ve=1,Se=0,Fe=0,Ge=0}H!==null?(_e=H.x,Ze=H.y,yt=H.z):(_e=0,Ze=0,yt=0);let it=ce.convert(k.format),Ct=ce.convert(k.type),me;k.isData3DTexture?(q.setTexture3D(k,0),me=U.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(q.setTexture2DArray(k,0),me=U.TEXTURE_2D_ARRAY):(q.setTexture2D(k,0),me=U.TEXTURE_2D),_.activeTexture(U.TEXTURE0),_.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,k.flipY),_.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),_.pixelStorei(U.UNPACK_ALIGNMENT,k.unpackAlignment);let Ut=_.getParameter(U.UNPACK_ROW_LENGTH),Ke=_.getParameter(U.UNPACK_IMAGE_HEIGHT),tn=_.getParameter(U.UNPACK_SKIP_PIXELS),Mn=_.getParameter(U.UNPACK_SKIP_ROWS),Jn=_.getParameter(U.UNPACK_SKIP_IMAGES);_.pixelStorei(U.UNPACK_ROW_LENGTH,ct.width),_.pixelStorei(U.UNPACK_IMAGE_HEIGHT,ct.height),_.pixelStorei(U.UNPACK_SKIP_PIXELS,Se),_.pixelStorei(U.UNPACK_SKIP_ROWS,Fe),_.pixelStorei(U.UNPACK_SKIP_IMAGES,Ge);let Fa=A.isDataArrayTexture||A.isData3DTexture,nt=k.isDataArrayTexture||k.isData3DTexture;if(A.isDepthTexture){let ut=W.get(A),Yn=W.get(k),ot=W.get(ut.__renderTarget),Zn=W.get(Yn.__renderTarget);_.bindFramebuffer(U.READ_FRAMEBUFFER,ot.__webglFramebuffer),_.bindFramebuffer(U.DRAW_FRAMEBUFFER,Zn.__webglFramebuffer);for(let Ua=0;Ua<ve;Ua++)Fa&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,W.get(A).__webglTexture,j,Ge+Ua),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,W.get(k).__webglTexture,fe,yt+Ua)),U.blitFramebuffer(Se,Fe,xe,de,_e,Ze,xe,de,U.DEPTH_BUFFER_BIT,U.NEAREST);_.bindFramebuffer(U.READ_FRAMEBUFFER,null),_.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(j!==0||A.isRenderTargetTexture||W.has(A)){let ut=W.get(A),Yn=W.get(k);_.bindFramebuffer(U.READ_FRAMEBUFFER,P),_.bindFramebuffer(U.DRAW_FRAMEBUFFER,F);for(let ot=0;ot<ve;ot++)Fa?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,ut.__webglTexture,j,Ge+ot):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,ut.__webglTexture,j),nt?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Yn.__webglTexture,fe,yt+ot):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Yn.__webglTexture,fe),j!==0?U.blitFramebuffer(Se,Fe,xe,de,_e,Ze,xe,de,U.COLOR_BUFFER_BIT,U.NEAREST):nt?U.copyTexSubImage3D(me,fe,_e,Ze,yt+ot,Se,Fe,xe,de):U.copyTexSubImage2D(me,fe,_e,Ze,Se,Fe,xe,de);_.bindFramebuffer(U.READ_FRAMEBUFFER,null),_.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else nt?A.isDataTexture||A.isData3DTexture?U.texSubImage3D(me,fe,_e,Ze,yt,xe,de,ve,it,Ct,ct.data):k.isCompressedArrayTexture?U.compressedTexSubImage3D(me,fe,_e,Ze,yt,xe,de,ve,it,ct.data):U.texSubImage3D(me,fe,_e,Ze,yt,xe,de,ve,it,Ct,ct):A.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,fe,_e,Ze,xe,de,it,Ct,ct.data):A.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,fe,_e,Ze,ct.width,ct.height,it,ct.data):U.texSubImage2D(U.TEXTURE_2D,fe,_e,Ze,xe,de,it,Ct,ct);_.pixelStorei(U.UNPACK_ROW_LENGTH,Ut),_.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Ke),_.pixelStorei(U.UNPACK_SKIP_PIXELS,tn),_.pixelStorei(U.UNPACK_SKIP_ROWS,Mn),_.pixelStorei(U.UNPACK_SKIP_IMAGES,Jn),fe===0&&k.generateMipmaps&&U.generateMipmap(me),_.unbindTexture()},this.initRenderTarget=function(A){W.get(A).__webglFramebuffer===void 0&&q.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?q.setTextureCube(A,0):A.isData3DTexture?q.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?q.setTexture2DArray(A,0):q.setTexture2D(A,0),_.unbindTexture()},this.resetState=function(){z=0,G=0,Z=null,_.reset(),ue.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return fn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Oe._getDrawingBufferColorSpace(e),t.unpackColorSpace=Oe._getUnpackColorSpace()}};function Zc(i,e){if(e===Tc)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===vi||e===xs){let t=i.getIndex();if(t===null){let s=[],r=i.getAttribute("position");if(r!==void 0){for(let o=0;o<r.count;o++)s.push(o);i.setIndex(s),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}let n=t.count-2,a=[];if(e===vi)for(let s=1;s<=n;s++)a.push(t.getX(0)),a.push(t.getX(s)),a.push(t.getX(s+1));else for(let s=0;s<n;s++)s%2===0?(a.push(t.getX(s)),a.push(t.getX(s+1)),a.push(t.getX(s+2))):(a.push(t.getX(s+2)),a.push(t.getX(s+1)),a.push(t.getX(s)));return a.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."),i.setIndex(a),i.clearGroups(),i}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}function Od(i){let e=new Map,t=new Map,n=i.clone();return Bd(i,n,function(a,s){e.set(s,a),t.set(a,s)}),n.traverse(function(a){if(!a.isSkinnedMesh)return;let s=a,r=e.get(a),o=r.skeleton.bones;s.skeleton=r.skeleton.clone(),s.bindMatrix.copy(r.bindMatrix),s.skeleton.bones=o.map(function(l){return t.get(l)}),s.bind(s.skeleton,s.bindMatrix)}),n}function Bd(i,e,t){t(i,e);for(let n=0;n<i.children.length;n++)Bd(i.children[n],e.children[n],t)}var So=class extends Tn{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new il(t)}),this.register(function(t){return new sl(t)}),this.register(function(t){return new pl(t)}),this.register(function(t){return new bl(t)}),this.register(function(t){return new ml(t)}),this.register(function(t){return new ol(t)}),this.register(function(t){return new cl(t)}),this.register(function(t){return new ll(t)}),this.register(function(t){return new hl(t)}),this.register(function(t){return new al(t)}),this.register(function(t){return new dl(t)}),this.register(function(t){return new rl(t)}),this.register(function(t){return new ul(t)}),this.register(function(t){return new fl(t)}),this.register(function(t){return new tl(t)}),this.register(function(t){return new wo(t,He.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new wo(t,He.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new gl(t)})}load(e,t,n,a){let s=this,r;if(this.resourcePath!=="")r=this.resourcePath;else if(this.path!==""){let c=qn.extractUrlBase(e);r=qn.resolveURL(c,this.path)}else r=qn.extractUrlBase(e);this.manager.itemStart(e);let o=function(c){a?a(c):console.error(c),s.manager.itemError(e),s.manager.itemEnd(e)},l=new ui(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{s.parse(c,r,function(h){t(h),s.manager.itemEnd(e)},o)}catch(h){o(h)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,a){let s,r={},o={},l=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Vd){try{r[He.KHR_BINARY_GLTF]=new xl(e)}catch(d){a&&a(d);return}s=JSON.parse(r[He.KHR_BINARY_GLTF].content)}else s=JSON.parse(l.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){a&&a(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new Al(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let d=this.pluginCallbacks[h](c);d.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[d.name]=d,r[d.name]=!0}if(s.extensionsUsed)for(let h=0;h<s.extensionsUsed.length;++h){let d=s.extensionsUsed[h],f=s.extensionsRequired||[];switch(d){case He.KHR_MATERIALS_UNLIT:r[d]=new nl;break;case He.KHR_DRACO_MESH_COMPRESSION:r[d]=new yl(s,this.dracoLoader);break;case He.KHR_TEXTURE_TRANSFORM:r[d]=new vl;break;case He.KHR_MESH_QUANTIZATION:r[d]=new _l;break;default:f.indexOf(d)>=0&&o[d]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+d+'".')}}c.setExtensions(r),c.setPlugins(o),c.parse(n,a)}parseAsync(e,t){let n=this;return new Promise(function(a,s){n.parse(e,t,a,s)})}};function $g(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}function gt(i,e,t){let n=i.json.materials[e];return n.extensions&&n.extensions[t]?n.extensions[t]:null}var He={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},tl=class{constructor(e){this.parser=e,this.name=He.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,a=t.length;n<a;n++){let s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,a=t.cache.get(n);if(a)return a;let s=t.json,l=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e],c,h=new Re(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],Bt);let d=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Ra(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new rs(h),c.distance=d;break;case"spot":c=new ss(h),c.distance=d,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),Pn(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),a=Promise.resolve(c),t.cache.add(n,a),a}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,s=n.json.nodes[e],o=(s.extensions&&s.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return n._getNodeRef(t.cache,o,l)})}},nl=class{constructor(){this.name=He.KHR_MATERIALS_UNLIT}getMaterialType(){return mn}extendParams(e,t,n){let a=[];e.color=new Re(1,1,1),e.opacity=1;let s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){let r=s.baseColorFactor;e.color.setRGB(r[0],r[1],r[2],Bt),e.opacity=r[3]}s.baseColorTexture!==void 0&&a.push(n.assignTexture(e,"map",s.baseColorTexture,ft))}return Promise.all(a)}},al=class{constructor(e){this.parser=e,this.name=He.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let n=gt(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}},il=class{constructor(e){this.parser=e,this.name=He.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return gt(this.parser,e,this.name)!==null?Xt:null}extendMaterialParams(e,t){let n=gt(this.parser,e,this.name);if(n===null)return Promise.resolve();let a=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&a.push(this.parser.assignTexture(t,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&a.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(a.push(this.parser.assignTexture(t,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){let s=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Be(s,s)}return Promise.all(a)}},sl=class{constructor(e){this.parser=e,this.name=He.KHR_MATERIALS_DISPERSION}getMaterialType(e){return gt(this.parser,e,this.name)!==null?Xt:null}extendMaterialParams(e,t){let n=gt(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}},rl=class{constructor(e){this.parser=e,this.name=He.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return gt(this.parser,e,this.name)!==null?Xt:null}extendMaterialParams(e,t){let n=gt(this.parser,e,this.name);if(n===null)return Promise.resolve();let a=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&a.push(this.parser.assignTexture(t,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&a.push(this.parser.assignTexture(t,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(a)}},ol=class{constructor(e){this.parser=e,this.name=He.KHR_MATERIALS_SHEEN}getMaterialType(e){return gt(this.parser,e,this.name)!==null?Xt:null}extendMaterialParams(e,t){let n=gt(this.parser,e,this.name);if(n===null)return Promise.resolve();let a=[];if(t.sheenColor=new Re(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){let s=n.sheenColorFactor;t.sheenColor.setRGB(s[0],s[1],s[2],Bt)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&a.push(this.parser.assignTexture(t,"sheenColorMap",n.sheenColorTexture,ft)),n.sheenRoughnessTexture!==void 0&&a.push(this.parser.assignTexture(t,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(a)}},cl=class{constructor(e){this.parser=e,this.name=He.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return gt(this.parser,e,this.name)!==null?Xt:null}extendMaterialParams(e,t){let n=gt(this.parser,e,this.name);if(n===null)return Promise.resolve();let a=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&a.push(this.parser.assignTexture(t,"transmissionMap",n.transmissionTexture)),Promise.all(a)}},ll=class{constructor(e){this.parser=e,this.name=He.KHR_MATERIALS_VOLUME}getMaterialType(e){return gt(this.parser,e,this.name)!==null?Xt:null}extendMaterialParams(e,t){let n=gt(this.parser,e,this.name);if(n===null)return Promise.resolve();let a=[];t.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&a.push(this.parser.assignTexture(t,"thicknessMap",n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;let s=n.attenuationColor||[1,1,1];return t.attenuationColor=new Re().setRGB(s[0],s[1],s[2],Bt),Promise.all(a)}},hl=class{constructor(e){this.parser=e,this.name=He.KHR_MATERIALS_IOR}getMaterialType(e){return gt(this.parser,e,this.name)!==null?Xt:null}extendMaterialParams(e,t){let n=gt(this.parser,e,this.name);return n===null||(t.ior=n.ior!==void 0?n.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}},dl=class{constructor(e){this.parser=e,this.name=He.KHR_MATERIALS_SPECULAR}getMaterialType(e){return gt(this.parser,e,this.name)!==null?Xt:null}extendMaterialParams(e,t){let n=gt(this.parser,e,this.name);if(n===null)return Promise.resolve();let a=[];t.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&a.push(this.parser.assignTexture(t,"specularIntensityMap",n.specularTexture));let s=n.specularColorFactor||[1,1,1];return t.specularColor=new Re().setRGB(s[0],s[1],s[2],Bt),n.specularColorTexture!==void 0&&a.push(this.parser.assignTexture(t,"specularColorMap",n.specularColorTexture,ft)),Promise.all(a)}},fl=class{constructor(e){this.parser=e,this.name=He.EXT_MATERIALS_BUMP}getMaterialType(e){return gt(this.parser,e,this.name)!==null?Xt:null}extendMaterialParams(e,t){let n=gt(this.parser,e,this.name);if(n===null)return Promise.resolve();let a=[];return t.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&a.push(this.parser.assignTexture(t,"bumpMap",n.bumpTexture)),Promise.all(a)}},ul=class{constructor(e){this.parser=e,this.name=He.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return gt(this.parser,e,this.name)!==null?Xt:null}extendMaterialParams(e,t){let n=gt(this.parser,e,this.name);if(n===null)return Promise.resolve();let a=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&a.push(this.parser.assignTexture(t,"anisotropyMap",n.anisotropyTexture)),Promise.all(a)}},pl=class{constructor(e){this.parser=e,this.name=He.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,a=n.textures[e];if(!a.extensions||!a.extensions[this.name])return null;let s=a.extensions[this.name],r=t.options.ktx2Loader;if(!r){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,r)}},bl=class{constructor(e){this.parser=e,this.name=He.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,n=this.parser,a=n.json,s=a.textures[e];if(!s.extensions||!s.extensions[t])return null;let r=s.extensions[t],o=a.images[r.source],l=n.textureLoader;if(o.uri){let c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return n.loadTextureImage(e,r.source,l)}},ml=class{constructor(e){this.parser=e,this.name=He.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,n=this.parser,a=n.json,s=a.textures[e];if(!s.extensions||!s.extensions[t])return null;let r=s.extensions[t],o=a.images[r.source],l=n.textureLoader;if(o.uri){let c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return n.loadTextureImage(e,r.source,l)}},wo=class{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let a=n.extensions[this.name],s=this.parser.getDependency("buffer",a.buffer),r=this.parser.options.meshoptDecoder;if(!r||!r.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(o){let l=a.byteOffset||0,c=a.byteLength||0,h=a.count,d=a.byteStride,f=new Uint8Array(o,l,c);return r.decodeGltfBufferAsync?r.decodeGltfBufferAsync(h,d,f,a.mode,a.filter).then(function(p){return p.buffer}):r.ready.then(function(){let p=new ArrayBuffer(h*d);return r.decodeGltfBuffer(new Uint8Array(p),h,d,f,a.mode,a.filter),p})})}else return null}},gl=class{constructor(e){this.name=He.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let a=t.meshes[n.mesh];for(let c of a.primitives)if(c.mode!==sn.TRIANGLES&&c.mode!==sn.TRIANGLE_STRIP&&c.mode!==sn.TRIANGLE_FAN&&c.mode!==void 0)return null;let r=n.extensions[this.name].attributes,o=[],l={};for(let c in r)o.push(this.parser.getDependency("accessor",r[c]).then(h=>(l[c]=h,l[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(c=>{let h=c.pop(),d=h.isGroup?h.children:[h],f=c[0].count,p=[];for(let m of d){let y=new De,b=new O,u=new kt,g=new O(1,1,1),S=new Xi(m.geometry,m.material,f);for(let M=0;M<f;M++)l.TRANSLATION&&b.fromBufferAttribute(l.TRANSLATION,M),l.ROTATION&&u.fromBufferAttribute(l.ROTATION,M),l.SCALE&&g.fromBufferAttribute(l.SCALE,M),S.setMatrixAt(M,y.compose(b,u,g));let x=null;for(let M in l)if(M==="_COLOR_0"){let w=l[M];S.instanceColor=new Hn(w.array,w.itemSize,w.normalized)}else if(M!=="TRANSLATION"&&M!=="ROTATION"&&M!=="SCALE"){if(x===null){let T=S.geometry;x=new Dt,x.name=T.name;for(let v in T.attributes)x.setAttribute(v,T.attributes[v]);for(let v in T.morphAttributes)x.morphAttributes[v]=T.morphAttributes[v];T.index!==null&&x.setIndex(T.index),x.morphTargetsRelative=T.morphTargetsRelative;for(let v of T.groups)x.addGroup(v.start,v.count,v.materialIndex);T.boundingBox!==null&&(x.boundingBox=T.boundingBox.clone()),T.boundingSphere!==null&&(x.boundingSphere=T.boundingSphere.clone()),x.drawRange.start=T.drawRange.start,x.drawRange.count=T.drawRange.count,x.userData=Object.assign({},T.userData),S.geometry=x}let w=l[M];x.setAttribute(M,new Hn(w.array,w.itemSize,w.normalized))}ht.prototype.copy.call(S,m),this.parser.assignFinalMaterial(S),p.push(S)}return h.isGroup?(h.clear(),h.add(...p),h):p[0]}))}},Vd="glTF",Ms=12,zd={JSON:1313821514,BIN:5130562},xl=class{constructor(e){this.name=He.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,Ms),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Vd)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let a=this.header.length-Ms,s=new DataView(e,Ms),r=0;for(;r<a;){let o=s.getUint32(r,!0);r+=4;let l=s.getUint32(r,!0);if(r+=4,l===zd.JSON){let c=new Uint8Array(e,Ms+r,o);this.content=n.decode(c)}else if(l===zd.BIN){let c=Ms+r;this.body=e.slice(c,c+o)}r+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},yl=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=He.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,a=this.dracoLoader,s=e.extensions[this.name].bufferView,r=e.extensions[this.name].attributes,o={},l={},c={};for(let h in r){let d=Sl[h]||h.toLowerCase();o[d]=r[h]}for(let h in e.attributes){let d=Sl[h]||h.toLowerCase();if(r[h]!==void 0){let f=n.accessors[e.attributes[h]],p=Ai[f.componentType];c[d]=p.name,l[d]=f.normalized===!0}}return t.getDependency("bufferView",s).then(function(h){return new Promise(function(d,f){a.decodeDracoFile(h,function(p){for(let m in p.attributes){let y=p.attributes[m],b=l[m];b!==void 0&&(y.normalized=b)}d(p)},o,c,Bt,f)})})}},vl=class{constructor(){this.name=He.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){if((t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0)return e;if(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),t.rotation!==void 0){let n=Math.cos(e.rotation),a=Math.sin(e.rotation);e.matrix.set(e.repeat.x*n,e.repeat.y*a,e.offset.x,-e.repeat.x*a,e.repeat.y*n,e.offset.y,0,0,1),e.matrixAutoUpdate=!1}return e.needsUpdate=!0,e}},_l=class{constructor(){this.name=He.KHR_MESH_QUANTIZATION}},Ao=class extends En{constructor(e,t,n,a){super(e,t,n,a)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,a=this.valueSize,s=e*a*3+a;for(let r=0;r!==a;r++)t[r]=n[s+r];return t}interpolate_(e,t,n,a){let s=this.resultBuffer,r=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,h=a-t,d=(n-t)/h,f=d*d,p=f*d,m=e*c,y=m-c,b=-2*p+3*f,u=p-f,g=1-b,S=u-f+d;for(let x=0;x!==o;x++){let M=r[y+x+o],w=r[y+x+l]*h,T=r[m+x+o],v=r[m+x]*h;s[x]=g*M+S*w+b*T+u*v}return s}},ex=new kt,Ml=class extends Ao{interpolate_(e,t,n,a){let s=super.interpolate_(e,t,n,a);return ex.fromArray(s).normalize().toArray(s),s}},sn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Ai={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Hd={9728:bt,9729:mt,9984:Tr,9985:gi,9986:Na,9987:xn},jd={33071:an,33648:$a,10497:sa},Qc={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Sl={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},fa={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},tx={CUBICSPLINE:void 0,LINEAR:Ma,STEP:_a},$c={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function nx(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new jn({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Rn})),i.DefaultMaterial}function Da(i,e,t){for(let n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Pn(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function ax(i,e,t){let n=!1,a=!1,s=!1;for(let c=0,h=e.length;c<h;c++){let d=e[c];if(d.POSITION!==void 0&&(n=!0),d.NORMAL!==void 0&&(a=!0),d.COLOR_0!==void 0&&(s=!0),n&&a&&s)break}if(!n&&!a&&!s)return Promise.resolve(i);let r=[],o=[],l=[];for(let c=0,h=e.length;c<h;c++){let d=e[c];if(n){let f=d.POSITION!==void 0?t.getDependency("accessor",d.POSITION):i.attributes.position;r.push(f)}if(a){let f=d.NORMAL!==void 0?t.getDependency("accessor",d.NORMAL):i.attributes.normal;o.push(f)}if(s){let f=d.COLOR_0!==void 0?t.getDependency("accessor",d.COLOR_0):i.attributes.color;l.push(f)}}return Promise.all([Promise.all(r),Promise.all(o),Promise.all(l)]).then(function(c){let h=c[0],d=c[1],f=c[2];return n&&(i.morphAttributes.position=h),a&&(i.morphAttributes.normal=d),s&&(i.morphAttributes.color=f),i.morphTargetsRelative=!0,i})}function ix(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,a=t.length;n<a;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function sx(i){let e,t=i.extensions&&i.extensions[He.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+el(t.attributes):e=i.indices+":"+el(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,a=i.targets.length;n<a;n++)e+=":"+el(i.targets[n]);return e}function el(i){let e="",t=Object.keys(i).sort();for(let n=0,a=t.length;n<a;n++)e+=t[n]+":"+i[t[n]]+";";return e}function wl(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function rx(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var ox=new De,Al=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new $g,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,a=-1,s=!1,r=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){let o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;let l=o.match(/Version\/(\d+)/);a=n&&l?parseInt(l[1],10):-1,s=o.indexOf("Firefox")>-1,r=s?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&a<17||s&&r<98?this.textureLoader=new ns(this.options.manager):this.textureLoader=new os(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new ui(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,a=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(r){return r._markDefs&&r._markDefs()}),Promise.all(this._invokeAll(function(r){return r.beforeRoot&&r.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(r){let o={scene:r[0][a.scene||0],scenes:r[0],animations:r[1],cameras:r[2],asset:a.asset,parser:n,userData:{}};return Da(s,o,a),Pn(o,a),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){for(let l of o.scenes)l.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let a=0,s=t.length;a<s;a++){let r=t[a].joints;for(let o=0,l=r.length;o<l;o++)e[r[o]].isBone=!0}for(let a=0,s=e.length;a<s;a++){let r=e[a];r.mesh!==void 0&&(this._addNodeRef(this.meshCache,r.mesh),r.skin!==void 0&&(n[r.mesh].isSkinnedMesh=!0)),r.camera!==void 0&&this._addNodeRef(this.cameraCache,r.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let a=n.clone(),s=(r,o)=>{let l=this.associations.get(r);l!=null&&this.associations.set(o,l);for(let[c,h]of r.children.entries())s(h,o.children[c])};return s(n,a),a.name+="_instance_"+e.uses[t]++,a}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let a=e(t[n]);if(a)return a}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let a=0;a<t.length;a++){let s=e(t[a]);s&&n.push(s)}return n}getDependency(e,t){let n=e+":"+t,a=this.cache.get(n);if(!a){switch(e){case"scene":a=this.loadScene(t);break;case"node":a=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":a=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":a=this.loadAccessor(t);break;case"bufferView":a=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":a=this.loadBuffer(t);break;case"material":a=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":a=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":a=this.loadSkin(t);break;case"animation":a=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":a=this.loadCamera(t);break;default:if(a=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!a)throw new Error("Unknown type: "+e);break}this.cache.add(n,a)}return a}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,a=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(a.map(function(s,r){return n.getDependency(e,r)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[He.KHR_BINARY_GLTF].body);let a=this.options;return new Promise(function(s,r){n.load(qn.resolveURL(t.uri,a.path),s,void 0,function(){r(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let a=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+a)})}loadAccessor(e){let t=this,n=this.json,a=this.json.accessors[e];if(a.bufferView===void 0&&a.sparse===void 0){let r=Qc[a.type],o=Ai[a.componentType],l=a.normalized===!0,c=new o(a.count*r);return Promise.resolve(new pt(c,r,l))}let s=[];return a.bufferView!==void 0?s.push(this.getDependency("bufferView",a.bufferView)):s.push(null),a.sparse!==void 0&&(s.push(this.getDependency("bufferView",a.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",a.sparse.values.bufferView))),Promise.all(s).then(function(r){let o=r[0],l=Qc[a.type],c=Ai[a.componentType],h=c.BYTES_PER_ELEMENT,d=h*l,f=a.byteOffset||0,p=a.bufferView!==void 0?n.bufferViews[a.bufferView].byteStride:void 0,m=a.normalized===!0,y,b;if(p&&p!==d){let u=Math.floor(f/p),g="InterleavedBuffer:"+a.bufferView+":"+a.componentType+":"+u+":"+a.count,S=t.cache.get(g);S||(y=new c(o,u*p,a.count*p/h),S=new si(y,p/h),t.cache.add(g,S)),b=new ri(S,l,f%p/h,m)}else o===null?y=new c(a.count*l):y=new c(o,f,a.count*l),b=new pt(y,l,m);if(a.sparse!==void 0){let u=Qc.SCALAR,g=Ai[a.sparse.indices.componentType],S=a.sparse.indices.byteOffset||0,x=a.sparse.values.byteOffset||0,M=new g(r[1],S,a.sparse.count*u),w=new c(r[2],x,a.sparse.count*l);o!==null&&(b=new pt(b.array.slice(),b.itemSize,b.normalized)),b.normalized=!1;for(let T=0,v=M.length;T<v;T++){let E=M[T];if(b.setX(E,w[T*l]),l>=2&&b.setY(E,w[T*l+1]),l>=3&&b.setZ(E,w[T*l+2]),l>=4&&b.setW(E,w[T*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}b.normalized=m}return b})}loadTexture(e){let t=this.json,n=this.options,s=t.textures[e].source,r=t.images[s],o=this.textureLoader;if(r.uri){let l=n.manager.getHandler(r.uri);l!==null&&(o=l)}return this.loadTextureImage(e,s,o)}loadTextureImage(e,t,n){let a=this,s=this.json,r=s.textures[e],o=s.images[t],l=(o.uri||o.bufferView)+":"+r.sampler;if(this.textureCache[l])return this.textureCache[l];let c=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=r.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);let f=(s.samplers||{})[r.sampler]||{};return h.magFilter=Hd[f.magFilter]||mt,h.minFilter=Hd[f.minFilter]||xn,h.wrapS=jd[f.wrapS]||sa,h.wrapT=jd[f.wrapT]||sa,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==bt&&h.minFilter!==mt,a.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){let n=this,a=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(d=>d.clone());let r=a.images[e],o=self.URL||self.webkitURL,l=r.uri||"",c=!1;if(r.bufferView!==void 0)l=n.getDependency("bufferView",r.bufferView).then(function(d){c=!0;let f=new Blob([d],{type:r.mimeType});return l=o.createObjectURL(f),l});else if(r.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let h=Promise.resolve(l).then(function(d){return new Promise(function(f,p){let m=f;t.isImageBitmapLoader===!0&&(m=function(y){let b=new St(y);b.needsUpdate=!0,f(b)}),t.load(qn.resolveURL(d,s.path),m,void 0,p)})}).then(function(d){return c===!0&&o.revokeObjectURL(l),Pn(d,r),d.userData.mimeType=r.mimeType||rx(r.uri),d}).catch(function(d){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),d});return this.sourceCache[e]=h,h}assignTexture(e,t,n,a){let s=this;return this.getDependency("texture",n.index).then(function(r){if(!r)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(r=r.clone(),r.channel=n.texCoord),s.extensions[He.KHR_TEXTURE_TRANSFORM]){let o=n.extensions!==void 0?n.extensions[He.KHR_TEXTURE_TRANSFORM]:void 0;if(o){let l=s.associations.get(r);r=s.extensions[He.KHR_TEXTURE_TRANSFORM].extendTexture(r,o),s.associations.set(r,l)}}return a!==void 0&&(r.colorSpace=a),e[t]=r,r})}assignFinalMaterial(e){let t=e.geometry,n=e.material,a=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,r=t.attributes.normal===void 0;if(e.isPoints){let o="PointsMaterial:"+n.uuid,l=this.cache.get(o);l||(l=new di,Wt.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(o,l)),n=l}else if(e.isLine){let o="LineBasicMaterial:"+n.uuid,l=this.cache.get(o);l||(l=new hi,Wt.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(o,l)),n=l}if(a||s||r){let o="ClonedMaterial:"+n.uuid+":";a&&(o+="derivative-tangents:"),s&&(o+="vertex-colors:"),r&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=n.clone(),s&&(l.vertexColors=!0),r&&(l.flatShading=!0),a&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return jn}loadMaterial(e){let t=this,n=this.json,a=this.extensions,s=n.materials[e],r,o={},l=s.extensions||{},c=[];if(l[He.KHR_MATERIALS_UNLIT]){let d=a[He.KHR_MATERIALS_UNLIT];r=d.getMaterialType(),c.push(d.extendParams(o,s,t))}else{let d=s.pbrMetallicRoughness||{};if(o.color=new Re(1,1,1),o.opacity=1,Array.isArray(d.baseColorFactor)){let f=d.baseColorFactor;o.color.setRGB(f[0],f[1],f[2],Bt),o.opacity=f[3]}d.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",d.baseColorTexture,ft)),o.metalness=d.metallicFactor!==void 0?d.metallicFactor:1,o.roughness=d.roughnessFactor!==void 0?d.roughnessFactor:1,d.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",d.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",d.metallicRoughnessTexture))),r=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,o)})))}s.doubleSided===!0&&(o.side=Kt);let h=s.alphaMode||$c.OPAQUE;if(h===$c.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===$c.MASK&&(o.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&r!==mn&&(c.push(t.assignTexture(o,"normalMap",s.normalTexture)),o.normalScale=new Be(1,1),s.normalTexture.scale!==void 0)){let d=s.normalTexture.scale;o.normalScale.set(d,d)}if(s.occlusionTexture!==void 0&&r!==mn&&(c.push(t.assignTexture(o,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&r!==mn){let d=s.emissiveFactor;o.emissive=new Re().setRGB(d[0],d[1],d[2],Bt)}return s.emissiveTexture!==void 0&&r!==mn&&c.push(t.assignTexture(o,"emissiveMap",s.emissiveTexture,ft)),Promise.all(c).then(function(){let d=new r(o);return s.name&&(d.name=s.name),Pn(d,s),t.associations.set(d,{materials:e}),s.extensions&&Da(a,d,s),d})}createUniqueName(e){let t=at.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,a=this.primitiveCache;function s(o){return n[He.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return Gd(l,o,t)})}let r=[];for(let o=0,l=e.length;o<l;o++){let c=e[o],h=sx(c),d=a[h];if(d)r.push(d.promise);else{let f;c.extensions&&c.extensions[He.KHR_DRACO_MESH_COMPRESSION]?f=s(c):f=Gd(new Dt,c,t),c.mode===sn.TRIANGLE_STRIP?f=f.then(p=>Zc(p,xs)):c.mode===sn.TRIANGLE_FAN&&(f=f.then(p=>Zc(p,vi))),a[h]={primitive:c,promise:f},r.push(f)}}return Promise.all(r)}loadMesh(e){let t=this,n=this.json,a=this.extensions,s=n.meshes[e],r=s.primitives,o=[];for(let l=0,c=r.length;l<c;l++){let h=r[l].material===void 0?nx(this.cache):this.getDependency("material",r[l].material);o.push(h)}return o.push(t.loadGeometries(r)),Promise.all(o).then(async function(l){let c=l.slice(0,l.length-1),h=l[l.length-1],d=[];for(let p=0,m=h.length;p<m;p++){let y=h[p],b=r[p],u,g=c[p];if(b.mode===sn.TRIANGLES||b.mode===sn.TRIANGLE_STRIP||b.mode===sn.TRIANGLE_FAN||b.mode===void 0){let S=s.isSkinnedMesh===!0,x=y.hasAttribute("skinIndex")&&y.hasAttribute("skinWeight");S&&x===!1&&console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled."),u=S&&x?new Vi(y,g):new Rt(y,g),u.isSkinnedMesh===!0&&u.normalizeSkinWeights()}else if(b.mode===sn.LINES)u=new qi(y,g);else if(b.mode===sn.LINE_STRIP)u=new Aa(y,g);else if(b.mode===sn.LINE_LOOP)u=new Ki(y,g);else if(b.mode===sn.POINTS)u=new Ji(y,g);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+b.mode);Object.keys(u.geometry.morphAttributes).length>0&&ix(u,s),u.name=t.createUniqueName(s.name||"mesh_"+e),Pn(u,s),b.extensions&&Da(a,u,b),t.assignFinalMaterial(u),d.push(u)}for(let p=0,m=d.length;p<m;p++)t.associations.set(d[p],{meshes:e,primitives:p});if(d.length===1)return s.extensions&&Da(a,d[0],s),d[0];let f=new un;s.extensions&&Da(a,f,s),t.associations.set(f,{meshes:e});for(let p=0,m=d.length;p<m;p++)f.add(d[p]);return f})}loadCamera(e){let t,n=this.json.cameras[e],a=n[n.type];if(!a){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new _t(Nc.radToDeg(a.yfov),a.aspectRatio||1,a.znear||1,a.zfar||2e6):n.type==="orthographic"&&(t=new ca(-a.xmag,a.xmag,a.ymag,-a.ymag,a.znear,a.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Pn(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let a=0,s=t.joints.length;a<s;a++)n.push(this._loadNodeShallow(t.joints[a]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(a){let s=a.pop(),r=a,o=[],l=[];for(let c=0,h=r.length;c<h;c++){let d=r[c];if(d){o.push(d);let f=new De;s!==null&&f.fromArray(s.array,c*16),l.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Wi(o,l)})}loadAnimation(e){let t=this.json,n=this,a=t.animations[e],s=a.name?a.name:"animation_"+e,r=[],o=[],l=[],c=[],h=[];for(let d=0,f=a.channels.length;d<f;d++){let p=a.channels[d],m=a.samplers[p.sampler],y=p.target,b=y.node,u=a.parameters!==void 0?a.parameters[m.input]:m.input,g=a.parameters!==void 0?a.parameters[m.output]:m.output;y.node!==void 0&&(r.push(this.getDependency("node",b)),o.push(this.getDependency("accessor",u)),l.push(this.getDependency("accessor",g)),c.push(m),h.push(y))}return Promise.all([Promise.all(r),Promise.all(o),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(d){let f=d[0],p=d[1],m=d[2],y=d[3],b=d[4],u=[];for(let S=0,x=f.length;S<x;S++){let M=f[S],w=p[S],T=m[S],v=y[S],E=b[S];if(M===void 0)continue;M.updateMatrix&&M.updateMatrix();let I=n._createAnimationTracks(M,w,T,v,E);if(I)for(let C=0;C<I.length;C++)u.push(I[C])}let g=new Ea(s,void 0,u);return Pn(g,a),g})}createNodeMesh(e){let t=this.json,n=this,a=t.nodes[e];return a.mesh===void 0?null:n.getDependency("mesh",a.mesh).then(function(s){let r=n._getNodeRef(n.meshCache,a.mesh,s);return a.weights!==void 0&&r.traverse(function(o){if(o.isMesh)for(let l=0,c=a.weights.length;l<c;l++)o.morphTargetInfluences[l]=a.weights[l]}),r})}loadNode(e){let t=this.json,n=this,a=t.nodes[e],s=n._loadNodeShallow(e),r=[],o=a.children||[];for(let c=0,h=o.length;c<h;c++)r.push(n.getDependency("node",o[c]));let l=a.skin===void 0?Promise.resolve(null):n.getDependency("skin",a.skin);return Promise.all([s,Promise.all(r),l]).then(function(c){let h=c[0],d=c[1],f=c[2];f!==null&&h.traverse(function(p){p.isSkinnedMesh&&p.bind(f,ox)});for(let p=0,m=d.length;p<m;p++)h.add(d[p]);if(h.userData.pivot!==void 0&&d.length>0){let p=h.userData.pivot,m=d[0];h.pivot=new O().fromArray(p),h.position.x-=p[0],h.position.y-=p[1],h.position.z-=p[2],m.position.set(0,0,0),delete h.userData.pivot}return h})}_loadNodeShallow(e){let t=this.json,n=this.extensions,a=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let s=t.nodes[e],r=s.name?a.createUniqueName(s.name):"",o=[],l=a._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&o.push(l),s.camera!==void 0&&o.push(a.getDependency("camera",s.camera).then(function(c){return a._getNodeRef(a.cameraCache,s.camera,c)})),a._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){o.push(c)}),this.nodeCache[e]=Promise.all(o).then(function(c){let h;if(s.isBone===!0?h=new oi:c.length>1?h=new un:c.length===1?h=c[0]:h=new ht,h!==c[0])for(let d=0,f=c.length;d<f;d++)h.add(c[d]);if(s.name&&(h.userData.name=s.name,h.name=r),Pn(h,s),s.extensions&&Da(n,h,s),s.matrix!==void 0){let d=new De;d.fromArray(s.matrix),h.applyMatrix4(d)}else s.translation!==void 0&&h.position.fromArray(s.translation),s.rotation!==void 0&&h.quaternion.fromArray(s.rotation),s.scale!==void 0&&h.scale.fromArray(s.scale);if(!a.associations.has(h))a.associations.set(h,{});else if(s.mesh!==void 0&&a.meshCache.refs[s.mesh]>1){let d=a.associations.get(h);a.associations.set(h,{...d})}return a.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],a=this,s=new un;n.name&&(s.name=a.createUniqueName(n.name)),Pn(s,n),n.extensions&&Da(t,s,n);let r=n.nodes||[],o=[];for(let l=0,c=r.length;l<c;l++)o.push(a.getDependency("node",r[l]));return Promise.all(o).then(function(l){for(let h=0,d=l.length;h<d;h++){let f=l[h];f.parent!==null?s.add(Od(f)):s.add(f)}let c=h=>{let d=new Map;for(let[f,p]of a.associations)(f instanceof Wt||f instanceof St)&&d.set(f,p);return h.traverse(f=>{let p=a.associations.get(f);p!=null&&d.set(f,p)}),d};return a.associations=c(s),s})}_createAnimationTracks(e,t,n,a,s){let r=[],o=e.name?e.name:e.uuid,l=[];function c(p){p.morphTargetInfluences&&l.push(p.name?p.name:p.uuid)}fa[s.path]===fa.weights?(c(e),e.isGroup&&e.children.forEach(c)):l.push(o);let h;switch(fa[s.path]){case fa.weights:h=Vn;break;case fa.rotation:h=Wn;break;case fa.translation:case fa.scale:h=oa;break;default:n.itemSize===1?h=Vn:h=oa;break}let d=a.interpolation!==void 0?tx[a.interpolation]:Ma,f=this._getArrayFromAccessor(n);for(let p=0,m=l.length;p<m;p++){let y=new h(l[p]+"."+fa[s.path],t.array,f,d);a.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(y),r.push(y)}return r}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=wl(t.constructor),a=new Float32Array(t.length);for(let s=0,r=t.length;s<r;s++)a[s]=t[s]*n;t=a}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let a=this instanceof Wn?Ml:Ao;return new a(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function cx(i,e,t){let n=e.attributes,a=new zt;if(n.POSITION!==void 0){let o=t.json.accessors[n.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(a.set(new O(l[0],l[1],l[2]),new O(c[0],c[1],c[2])),o.normalized){let h=wl(Ai[o.componentType]);a.min.multiplyScalar(h),a.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let s=e.targets;if(s!==void 0){let o=new O,l=new O;for(let c=0,h=s.length;c<h;c++){let d=s[c];if(d.POSITION!==void 0){let f=t.json.accessors[d.POSITION],p=f.min,m=f.max;if(p!==void 0&&m!==void 0){if(l.setX(Math.max(Math.abs(p[0]),Math.abs(m[0]))),l.setY(Math.max(Math.abs(p[1]),Math.abs(m[1]))),l.setZ(Math.max(Math.abs(p[2]),Math.abs(m[2]))),f.normalized){let y=wl(Ai[f.componentType]);l.multiplyScalar(y)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}a.expandByVector(o)}i.boundingBox=a;let r=new Vt;a.getCenter(r.center),r.radius=a.min.distanceTo(a.max)/2,i.boundingSphere=r}function Gd(i,e,t){let n=e.attributes,a=[];function s(r,o){return t.getDependency("accessor",r).then(function(l){i.setAttribute(o,l)})}for(let r in n){let o=Sl[r]||r.toLowerCase();o in i.attributes||a.push(s(n[r],o))}if(e.indices!==void 0&&!i.index){let r=t.getDependency("accessor",e.indices).then(function(o){i.setIndex(o)});a.push(r)}return Oe.workingColorSpace!==Bt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Oe.workingColorSpace}" not supported.`),Pn(i,e),cx(i,e,t),Promise.all(a).then(function(){return e.targets!==void 0?ax(i,e.targets,t):i})}var _v=(function(){var i="b9H79Tebbbe9ok9Geueu9Geub9Gbb9Gruuuuuuueu9Gvuuuuueu9Gduueu9Gluuuueu9Gvuuuuub9Gouuuuuub9Gluuuub9GiuuueuiE8AdilveoveovrrwrrrDDoDrbqqbelve9Weiiviebeoweuecj:Gdkr:PlCo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8F9TW79O9V9Wt9FW9U9J9V9KW9wWVtW949c919M9MWV9mW4W2be8A9TW79O9V9Wt9FW9U9J9V9KW9wWVtW949c919M9MWVbd8F9TW79O9V9Wt9FW9U9J9V9KW9wWVtW949c919M9MWV9c9V919U9KbiE9TW79O9V9Wt9FW9U9J9V9KW9wWVtW949wWV79P9V9UblY9TW79O9V9Wt9FW9U9J9V9KW69U9KW949c919M9MWVbv8E9TW79O9V9Wt9FW9U9J9V9KW69U9KW949c919M9MWV9c9V919U9Kbo8A9TW79O9V9Wt9FW9U9J9V9KW69U9KW949wWV79P9V9UbrE9TW79O9V9Wt9FW9U9J9V9KW69U9KW949tWG91W9U9JWbwa9TW79O9V9Wt9FW9U9J9V9KW69U9KW949tWG91W9U9JW9c9V919U9KbDL9TW79O9V9Wt9FW9U9J9V9KWS9P2tWV9p9JtbqK9TW79O9V9Wt9FW9U9J9V9KWS9P2tWV9r919HtbkL9TW79O9V9Wt9FW9U9J9V9KWS9P2tWVT949WbxY9TW79O9V9Wt9FW9U9J9V9KWS9P2tWVJ9V29VVbmE9TW79O9V9Wt9F9V9Wt9P9T9P96W9wWVtW94J9H9J9OWbza9TW79O9V9Wt9F9V9Wt9P9T9P96W9wWVtW94J9H9J9OW9ttV9P9WbHa9TW79O9V9Wt9F9V9Wt9P9T9P96W9wWVtW94SWt9J9O9sW9T9H9WbOK9TW79O9V9Wt9F79W9Ht9P9H29t9VVt9sW9T9H9WbAl79IV9RbXDwebcekdKYq:zf8Adbk;wadhud9:8Jjjjjbc;qw9Rgr8KjjjjbcbhwdnaeTmbabcbyd;i:I:cjbaoaocb9iEgDc:GeV86bbarc;adfcbcjdz:xjjjb8AdnaiTmbarc;adfadalz:wjjjb8Akarc;abfalfcbcbcjdal9RalcFe0Ez:xjjjb8Aarc;abfarc;adfalz:wjjjb8Aar9cb83iUar9cb83i8War9cb83iyar9cb83iaar9cb83iKar9cb83izar9cb83iwar9cb83ibcj;abal9Uc;WFbGcjdalca0Ehqdnaicd6mbavcd9imbaDTmbadcefhkaqci2gxal2hmarc;alfclfhParc;qlfceVhsarc;qofclVhzcbhHincdhOcbhAdnavci6mbar9cb83i;Ooar9cb83i;Goar9cb83i;yoar9cb83i;qoadaHfgoybbhCcbhXincbhwcbhQdninaoalfhLaoybbgKaC7aQVhQawcP0meaLhoaKhCawcefgwaXfai6mbkkcbhCarc;qofhwincwhYcwh8AdnaQaC93gocFeGgEcs0mbclh8AaEci0mbcdcbaEEh8Akdnaocw4cFeGgEcs0mbclhYaEci0mbcdcbaEEhYkaYa8AfhEawydbh3cwhYcwh8Adnaocz4cFeGg5cs0mbclh8Aa5ci0mbcdcba5Eh8AkaEa3fhEdnaocFFFFb0mbclhYaocFFF8F0mbcbcdaocjjjw6EhYkawaEa8AfaYfBdbawclfhwaCcefgCcw9hmbkaLhoaKhCaXczfgXai6mbkcbhocehwazhQinawaoaQydbarc;qofaocdtfydb6EhoaQclfhQawcefgwcw9hmbkaoclthAcihOkcbhEarc;qlfcbcjdz:xjjjb8AarcbBd;ilar9cb83i;aladh8Eaqh8Fakh3inarc;qlfadaEaEcb9h9Ral2falz:wjjjb8Aaia8Faia8F6EhadnaqaiaE9RaEaqfai6EgKcsfc9WGgoaK9nmbarc;qofaKfcbaoaK9Rz:xjjjb8AkadaEal2fhhcbhginagaAVcl4hXarc;alfagcdtfh8JaHh8Kcbh8Lina8LaHfhwdndndndndndndnagPlbedibkaKTmvahawfhoarc;qlfawfRbbhQarc;qofhwaahCinawaoRbbgYaQ9RgQcetaQcKtc8F91786bbawcefhwaoalfhoaYhQaEaCcufgC9hmbxvkkaKTmla8Kc9:Ghoa8LcitcwGh8Aarc;qlfawceVfRbbcwtarc;qlfawc9:GfRbbVhQarc;qofhwaahCinawa3aofRbbcwta8EaofRbbVgYaQ9RgQcetaQcztc8F917cFFiGa8A486bbaoalfhoawcefhwaYhQaEaCcufgC9hmbxlkkasa8Kc98GgQfhoa3aQfhYarc;qlfawc98GgQfRbbhCcwhwinaoRbbawtaCVhCaocefhoawcwfgwca9hmbxdkkaKTmdxekaKTmea8Lcith5ahaQfh8AcbhLina8ARbbhQcwhoaYhwinawRbbaotaQVhQawcefhwaocwfgoca9hmbkarc;qofaLfaQaC7aX93a5486bbaYalfhYa8Aalfh8AaQhCaLcefgLaK9hmbkka8Jydbh8AcbhLarc;qofhoincdhQcbhwinaQaoawfRbbcb9hfhQawcefgwcz9hmbkclhCcbhwinaCaoawfRbbcd0fhCawcefgwcz9hmbkcwhYcbhwinaYaoawfRbbcP0fhYawcefgwcz9hmbkaQaCaQaC6EgwaYawaY6Egwczawcz6Ea8Afh8AaoczfhoaLczfgLaK6mbka8Ja8ABdbka8Kcefh8Ka8Lcefg8Lcl9hmbkagcefggaO9hmbka8Eamfh8Ea8Faxfh8Fa3amfh3aEaxfgEai6mbkcbhocehwaPhQinawaoaQydbarc;alfaocdtfydb6EhoaQclfhQaOawcefgw9hmbkaraHcd4faAcdVaoaocdSE86bbaHclfgHal6mbkkabaefhgabcefhoalcd4g8McbaDEhkadcefh8Narc;abfceVhecbhmdndninaiam9nmearc;qofcbcjdz:xjjjb8Aagao9Rak6mdadamal2gwfhxcbhHa8Nawfhzaocbakz:xjjjbg8Fakfh3aqaiam9Ramaqfai6Egscsfgocl4cifcd4hOaoc9WGg8JThPindndndndndndndndndndnaDTmbaraHcd4fRbbgQciGPlbedlbkasTmdaxaHfhoarc;abfaHfRbbhQarc;qofhwashCinawaoRbbgYaQ9RgQcetaQcKtc8F91786bbawcefhwaoalfhoaYhQaCcufgCmbxikkasTmiaHcitcwGh8Aarc;abfaHceVfRbbcwtarc;abfaHc9:GgofRbbVhQaxaofhoarc;qofhwashCinawao8VbbgYaQ9RgQcetaQcztc8F917cFFiGa8A486bbawcefhwaoalfhoaYhQaCcufgCmbxikkaeaHc98Gg8Afhoaza8AfhYarc;abfa8AfRbbhCcwhwinaoRbbawtaCVhCaocefhoawcwfgwca9hmbkasTmdaQcl4hKaHcitcKGhEaxa8Afh8AcbhLina8ARbbhQcwhoaYhwinawRbbaotaQVhQawcefhwaocwfgoca9hmbkarc;qofaLfaQaC7aK93aE486bbaYalfhYa8Aalfh8AaQhCaLcefgLas9hmbkkaDmbcbhoxlka8JTmbcbhodninarc;qofaofgwcwf8Pibaw8Pib:e9qTmeaoczfgoa8J9pmdxbkkdnavmbcehoxikcbh8AaOhLaOhKinarc;qofa8Afgocwf8Pibhyao8Pibh8PcdhQcbhwinaQaoawfRbbcb9hfhQawcefgwcz9hmbkclhCcbhwinaCaoawfRbbcd0fhCawcefgwcz9hmbkcwhYcbhwinaYaoawfRbbcP0fhYawcefgwcz9hmbkaQaCaQaC6EgoaYaoaY6Egoczaocz6EaKfhKaocucbaya8P:e9cb9sEgwaoaw6EaLfhLa8Aczfg8Aa8J9pmdxbkka8FaHcd4fgoaoRbbcdaHcetcoGtV86bbxikdnaLas6mbaKas6mba8FaHcd4fgoaoRbbciaHcetcoGtV86bbaga39Ras6mra3arc;qofasz:wjjjbasfh3xikaLaK9phoka8FaHcd4fgwawRbbaoaHcetcoGtV86bbkaga39RaO6mla3cbaOz:xjjjbgaaOfhKdndna8JmbaPhoxekdnagaK9RcK9pmbaPhoxekaocdtc:q:G:cjbfcj:G:cjbaDEg3ydxghcetc;:FFFeGhAcuhEcuahtcu7cFeGh8Ecbh8Karc;qofhQinarc;qofa8KfhXczh8AdndndnahPDbeeeeeeedekcucbaXcwf8PibaX8Pib:e9cb9sEh8AxekcbhoaAh8Aina8Aa8EaQaofRbb9nfh8Aaocefgocz9hmbkkcih5cbhYinczhwdndndna3aYcdtfydbgLPDbeeeeeeedekcucbaXcwf8PibaX8Pib:e9cb9sEhwxekaLcetc;:FFFeGhwcuaLtcu7cFeGhCcbhoinawaCaQaofRbb9nfhwaocefgocz9hmbkkdndnawa8A6mbaLaE9hmeawa8A9hmea3a5cdtfydbcwSmekaYh5awh8AkaYcefgYci9hmbkaaa8Kco4fgoaoRbba5a8Kci4coGtV86bbdndndna3a5cdtfydbgEPDdbbbbbbbebkdncwaE9Tg5TmbcuaEtcu7hwdndnaEceSmbcbh8LaQhXinaXhoa5hYcbhCinaoRbbg8AawcFeGgLa8AaL6EaCaEtVhCaocefhoaYcufgYmbkaKaC86bbaXa5fhXaKcefhKa8La5fg8Lcz6mbxdkkcbh8LaQhXinaXhoa5hYcbhCinaoRbbg8AawcFeGgLa8AaL6EaCcetVhCaocefhoaYcufgYmbkaKaC:T9cFe:d9c:c:qj:bw9:9c:q;c1:I1e:d9c:b:c:e1z9:9ca188bbaXa5fhXaKcefhKa8La5fg8Lcz6mbkkcbhoinaKaQaofRbbgC86bbaKaCawcFeG9pfhKaocefgocz9hmbxikkdnaEceSmbinaKcb86bbaKcefhKxbkkinaKcb86bbaKcefhKxbkkaKaX8Pbw83bwaKaX8Pbb83bbaKczfhKka8Kczfg8Ka8J9pgomeaQczfhQagaK9RcK9pmbkkaoTmlaKh3aKTmlkaHcefgHal9hmbkarc;abfaxascufal2falz:wjjjb8Aasamfhma3hoa3mbkcbhwxdkdnagao9RakalfgwcKcaaDEgQawaQ0EgC9pmbcbhwxdkdnawaQ9pmbaocbaCaw9Rgwz:xjjjbawfhokaoarc;adfalz:wjjjbalfhodnaDTmbaoara8Mz:wjjjba8Mfhokaoab9Rhwxekcbhwkarc;qwf8Kjjjjbawk5babaeadaialcdcbyd;i:I:cjbz:bjjjbk9reduaecd4gdaefgicaaica0Eabcj;abae9Uc;WFbGcjdaeca0Egifcufai9Uae2aiadfaicl4cifcd4f2fcefkmbcbabBd;i:I:cjbk;HPeLu8Jjjjjbc;ae9Rgl8Kjjjjbcbhvdnaeaici9UgocHf6mbabcbyd;m:I:cjbgrc;GeV86bbalc;abfcFecjez:xjjjb8Aal9cu83iUal9cu83i8Wal9cu83iyal9cu83iaal9cu83iKal9cu83izal9cu83iwal9cu83ibabaefc9WfhwabcefgDaofhednaiTmbcmcsarcb9kgqEhkcbhxcbhmcbhPcbhscbhzindnaeaw9nmbcbhvxikazcufhvadaPcdtfgHydbhOaHcwfydbhAaHclfydbhCcbhXdndndninalc;abfavcsGcitfgoydlhQdndndnaoydbgoaO9hmbaQaCSmekdnaoaC9hmbaQaA9hmbaXcefhXxekaoaA9hmeaQaO9hmeaXcdfhXkaXc870mdascufhvaHaXcdtgAcxGgoyd:4:G:cjbcdtfydbhQaHaoyd:0:G:cjbcdtfydbhCaHaoyd:W:G:cjbcdtfydbhOcbhodnindnalavcsGcdtfydbaQ9hmbaohXxdkcuhXavcufhvaocefgocz9hmbkkaxaQaxSgvaXce9iaXak9oVgoGfhxdndndncbcsavEaXaoEgvcs9hmbarce9imbaQaQamaQcefamSgvEgmcefSmecmcsavEhvkaDavaAc;WeGV86bbavcs9hmeaQam9Rgvcetavc8F917hvinaecbcjeavcje6EavcFbGV86bbaecefheavcr4gvmbkaQhmxvkcPhvaDaAcPV86bbaQhmkavTmiavak9omicdhocehXazhAxlkavcufhvaXclfgXc;ab9hmbkkdnaHcecdcbaAaxSEaCaxSEcdtgvyd:W:G:cjbcdtfydbgOTaHavyd:0:G:cjbcdtfydbgCceSGaHavyd:4:G:cjbcdtfydbgQcdSGaxcb9hGaqGgLce9hmbal9cu83iUal9cu83i8Wal9cu83iyal9cu83iaal9cu83iKal9cu83izal9cu83iwal9cu83ibcbhxkcbhXascufgvhodnindnalaocsGcdtfydbaC9hmbaXhAxdkcuhAaocufhoaXcefgXcz9hmbkkcbhodnindnalavcsGcdtfydbaQ9hmbaohXxdkcuhXavcufhvaocefgocz9hmbkkaxaOaxSgKfhHdndnaAcm0mbaAcefhAxekcbcsaCaHSgvEhAaHavfhHkdndnaXcm0mbaXcefhXxekcbcsaQaHSgvEhXaHavfhHkc9:cuaKEhYcbhvaXaAcltVg8AcFeGhodndndninavc;q:G:cjbfRbbaoSmeavcefgvcz9hmbxdkkaLaOax9havcm0VVmbaDavc;WeV86bbxekaDaY86bbaea8A86bbaecefhekdnaKmbaOam9Rgvcetavc8F917hvinaecbcjeavcje6EavcFbGV86bbaecefheavcr4gvmbkaOhmkdnaAcs9hmbaCam9Rgvcetavc8F917hvinaecbcjeavcje6EavcFbGV86bbaecefheavcr4gvmbkaChmkdnaXcs9hmbaQam9Rgvcetavc8F917hvinaecbcjeavcje6EavcFbGV86bbaecefheavcr4gvmbkaQhmkalascdtfaOBdbascefcsGhvdndnaAPzbeeeeeeeeeeeeeebekalavcdtfaCBdbascdfcsGhvkdndnaXPzbeeeeeeeeeeeeeebekalavcdtfaQBdbavcefcsGhvkcihoalc;abfazcitfgXaOBdlaXaCBdbazcefcsGhAcdhXavhsaHhxxekcdhoalascdtfaQBdbcehXascefcsGhsazhAkalc;abfaAcitfgvaCBdlavaQBdbalc;abfazaXfcsGcitfgvaQBdlavaOBdbaDcefhDazaofcsGhzaPcifgPai6mbkkdnaeaw9nmbcbhvxekcbhvinaeavfavc;q:G:cjbfRbb86bbavcefgvcz9hmbkaeab9Ravfhvkalc;aef8KjjjjbavkZeeucbhddninadcefgdc8F0meaeceadt0mbkkadcrfcFeGcr9Uci2cdfabci9U2cHfkmbcbabBd;m:I:cjbk:zderu8Jjjjjbcz9Rhlcbhvdnaeaicvf6mbabcbRb;m:I:cjbc;qeV86bbal9cb83iwabcefhvabaefc98fhodnaiTmbcbhecbhrcbhwindnavao6mbcbskadawcdtfydbgDalcwfaraDae9Rgeaec8F91ge7ae9Rc507grcdtfgqydb9Rgec8E91c9:Gaecdt7arVheinavcbcjeaecje6EaecFbGV86bbavcefhvaecr4gembkaqaDBdbaDheawcefgwai9hmbkkdnavao9nmbcbskavcbBbbavab9RclfhvkavkBeeucbhddninadcefgdc8F0meaeceadt0mbkkabadcwfcFeGcr9U2cvfk:dvli99dui99ludnaeTmbcuadcetcuftcu7:Zhvdndncuaicuftcu7:ZgoJbbbZMgr:lJbbb9p9DTmbar:Ohwxekcjjjj94hwkcbhicbhDinalclfIdbgrJbbbbJbbjZalIdbgq:lar:lMalcwfIdbgk:lMgr:varJbbbb9BEgrNhxaqarNhralcxfIdbhqdndnakJbbbb9GTmbaxhkxekJbbjZar:l:tgkak:maxJbbbb9GEhkJbbjZax:l:tgxax:marJbbbb9GEhrkdndnaqJbbj:;aqJbbj:;9GEgxJbbjZaxJbbjZ9FEavNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohmxekcjjjj94hmkdndnakJbbj:;akJbbj:;9GEgqJbbjZaqJbbjZ9FEaoNJbbbZJbbb:;akJbbbb9GEMgq:lJbbb9p9DTmbaq:OhPxekcjjjj94hPkdndnarJbbj:;arJbbj:;9GEgqJbbjZaqJbbjZ9FEaoNJbbbZJbbb:;arJbbbb9GEMgr:lJbbb9p9DTmbar:Ohsxekcjjjj94hskdndnadcl9hmbabaDfgzas86bbazcifam86bbazcdfaw86bbazcefaP86bbxekabaifgzas87ebazcofam87ebazclfaw87ebazcdfaP87ebkaicwfhiaDclfhDalczfhlaecufgembkkk;hlld99eud99eudnaeTmbdndncuaicuftcu7:ZgvJbbbZMgo:lJbbb9p9DTmbao:Ohixekcjjjj94hikaic;8FiGhrinabcofcicdalclfIdb:lalIdb:l9EgialcwfIdb:lalaicdtfIdb:l9EEgialcxfIdb:lalaicdtfIdb:l9EEgiarV87ebdndnJbbj:;JbbjZalaicdtfIdbJbbbb9DEgoalaicd7cdtfIdbJ;Zl:1ZNNgwJbbj:;awJbbj:;9GEgDJbbjZaDJbbjZ9FEavNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohqxekcjjjj94hqkabcdfaq87ebdndnalaicefciGcdtfIdbJ;Zl:1ZNaoNgwJbbj:;awJbbj:;9GEgDJbbjZaDJbbjZ9FEavNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohqxekcjjjj94hqkabaq87ebdndnaoalaicufciGcdtfIdbJ;Zl:1ZNNgoJbbj:;aoJbbj:;9GEgwJbbjZawJbbjZ9FEavNJbbbZJbbb:;aoJbbbb9GEMgo:lJbbb9p9DTmbao:Ohixekcjjjj94hikabclfai87ebabcwfhbalczfhlaecufgembkkk;gvdDue998Jjjjjbcjd9Rgo8Kjjjjbdndndnadcd4grTmbc:CucbavEhwaohdarhDinadawBdbadclfhdaDcufgDmbkavcd9hmbaeTmbarcdthqcbhkalhxinaohdaxhDarhwinadadydbgmaDydbcL4cFeGc:cufgPamaP9kEBdbaDclfhDadclfhdawcufgwmbkaxaqfhxakcefgkae9hmbxdkkaeTmekarcdthxavce9hhqcbhkindndndnaqmbarTmdc:CuhDalhdarhwinaDadydbcL4cFeGc:cufgmaDam9kEhDadclfhdawcufgwmbxdkkdndndndnavPleddbdkarTmlaohdalhDarhwinadcbaDydbcL4cFeGgmc:cufgPaPam0EBdbadclfhdaDclfhDawcufgwmbxikkarTmicbhdarhDindnaladfIdbgsJbbbb9Bmbaoadfas:8cL4cFeGgwc8Aawc8A0Ec:cufBdbkadclfhdaDcufgDmbxdkkarTmdkc:CuhDkcbhdarhminaDhwdnavceSmbaoadfydbhwkdndnaladfIdbgscjjj;8iawai9RcefgwcLt9R::NJbbbZJbbb:;asJbbbb9GEMgs:lJbbb9p9DTmbas:OhPxekcjjjj94hPkabadfaPcFFFrGawcKtVBdbadclfhdamcufgmmbkkabaxfhbalaxfhlakcefgkae9hmbkkaocjdf8Kjjjjbk:Olveue99iue99iudnaeTmbceaicufthvcuaitcu7:Zhocbhradcl9hhwcbhDindndnalcwfIdbgqJbbbbaqJbbbb9GEgqJbbjZaqJbbjZ9FEaoNJbbbZMgq:lJbbb9p9DTmbaq:Ohixekcjjjj94hikdndnalIdbgqJbbbbaqJbbbb9GEgqJbbjZaqJbbjZ9FEaoNJbbbZMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkadai9Rcd9TgkaifhidndnalclfIdbgqJbbbbaqJbbbb9GEgqJbbjZaqJbbjZ9FEaoNJbbbZMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkadai9Rcd9ThddndnalcxfIdbgqJbbbbaqJbbbb9GEgqJbbjZaqJbbjZ9FEaoNJbbbZMgq:lJbbb9p9DTmbaq:Ohxxekcjjjj94hxkadaifhiaxce91avVhxdndnawmbabaDfgmai86bbamcifax86bbamcdfad86bbamcefak86bbxekabarfgmai87ebamcofax87ebamclfad87ebamcdfak87ebkarcwfhraDclfhDalczfhlaecufgembkkk;mqdQui998Jjjjjbc:qd9Rgv8Kjjjjbavc:Sefcbc;Kbz:xjjjb8AdnadTmbaiTmbdndnabaeSmbaehoxekavcuadcdtgradcFFFFi0Ecbyd;q:I:cjbHjjjjbbgoBd:SeavceBd:mdaoaearz:wjjjb8AkavcbBd:Oeav9cb83i:Geavc:Gefaoadaiavc:Sefz:pjjjbavyd:Gehwadci9UgDcbyd;q:I:cjbHjjjjbbheavc:Sefavyd:mdgqcdtfaeBdbavaqcefgrBd:mdaecbaDz:xjjjbhkavc:SefarcdtfcuaicdtaicFFFFi0Ecbyd;q:I:cjbHjjjjbbgxBdbavaqcdfgmBd:mdalc;ebfhPawheaxhrinaralIdbaPaeydbgscwascw6EcdtfIdbMUdbaeclfhearclfhraicufgimbkavc:SefamcdtfcuaDcdtadcFFFF970Ecbyd;q:I:cjbHjjjjbbgmBdbdnadci6mbaoheamhraDhiinaraxaeydbcdtfIdbaxaeclfydbcdtfIdbMaxaecwfydbcdtfIdbMUdbaecxfhearclfhraicufgimbkkaqcifhzalc;ebfhHavc;qbfhOavheavyd:KehAavyd:OehCcbhscbhrcbhXcehQinaehLaoarcx2fgKydbhPaKclfydbhdabaXcx2fgecwfaKcwfydbgYBdbaeclfadBdbaeaPBdbakarfce86bbaOaYBdwaOadBdlaOaPBdbamarcdtfcbBdbcih8AdnasTmbaLhiinaOa8AcdtfaiydbgeBdba8AaeaY9haeaP9haead9hGGfh8AaiclfhiascufgsmbkkaXcefhXcbhsinaCaAaKascdtfydbcdtgifydbcdtfgYheawaifgdydbgPhidnaPTmbdninaeydbarSmeaeclfheaicufgiTmdxbkkaeaYaPcdtfc98fydbBdbadadydbcufBdbkascefgsci9hmbkdndndna8ATmbcuhrJbbbbhEcbhdavyd:KehYavyd:OehKindnawaOadcdtfydbcdtgsfydbgeTmbaxasfgiIdbh3aialcuadadcs0EcdtfclfIdbaHaecwaecw6EcdtfIdbMg5Udba5a3:th5aecdthiaKaYasfydbcdtfheinamaeydbgscdtfgPa5aPIdbMg3Udba3aEaEa39DgPEhEasaraPEhraeclfheaic98fgimbkkadcefgda8A9hmbkarcu9hmekaQaD9pmeindnakaQfRbbmbaQhrxdkaDaQcefgQ9hmbxdkka8Acza8Acz6EhsaOheaLhOarcu9hmekkazTmbaqcdtavc:Seffcwfheinaeydbcbyd;u:I:cjbH:bjjjbbaec98fheazcufgzmbkkavc:qdf8Kjjjjbk:0leoucuaicdtgvaicFFFFi0Egocbyd;q:I:cjbHjjjjbbhralalyd9GgwcdtfarBdbalawcefBd9GabarBdbaocbyd;q:I:cjbHjjjjbbhralalyd9GgocdtfarBdbalaocefBd9GabarBdlcuadcdtadcFFFFi0Ecbyd;q:I:cjbHjjjjbbhralalyd9GgocdtfarBdbalaocefBd9GabarBdwabydbcbavz:xjjjb8AabydbhraehladhvinaralydbcdtfgoaoydbcefBdbalclfhlavcufgvmbkcbhvabydlglhoarhwaihDinaoavBdbaoclfhoawydbavfhvawclfhwaDcufgDmbkadci9Uhqdnadcd9nmbabydwhocbhvinaecwfydbhwaeclfydbhDalaeydbcdtfgbabydbgbcefBdbaoabcdtfavBdbalaDcdtfgDaDydbgDcefBdbaoaDcdtfavBdbalawcdtfgwawydbgwcefBdbaoawcdtfavBdbaecxfheaqavcefgv9hmbkkinalalydbarydb9RBdbarclfhralclfhlaicufgimbkkQbabaeadaic;G:G:cjbz:ojjjbkQbabaeadaic;i:H:cjbz:ojjjbk9DeeuabcFeaicdtz:xjjjbhlcbhbdnadTmbindnalaeydbcdtfgiydbcu9hmbaiabBdbabcefhbkaeclfheadcufgdmbkkabk:3vioud9:du8Jjjjjbc;Wa9Rgl8Kjjjjbcbhvalcxfcbc;Kbz:xjjjb8AalcuadcitgoadcFFFFe0Ecbyd;q:I:cjbHjjjjbbgrBdxalceBd2araeadaicezNjjjbalcuaoadcjjjjoGEcbyd;q:I:cjbHjjjjbbgwBdzadcdthednadTmbabhiinaiavBdbaiclfhiadavcefgv9hmbkkawaefhDalabBdwalawBdl9cbhqindnadTmbaq9cq9:hkarhvaDhiadheinaiav8Pibak1:NcFrG87ebavcwfhvaicdfhiaecufgembkkalclfaq:NceGcdtfydbhxalclfaq9ce98gq:NceGcdtfydbhmalc;Wbfcbcjaz:xjjjb8AaDhvadhidnadTmbinalc;Wbfav8VebcdtfgeaeydbcefBdbavcdfhvaicufgimbkkcbhvcbhiinalc;WbfavfgeydbhoaeaiBdbaoaifhiavclfgvcja9hmbkadhvdndnadTmbinalc;WbfaDamydbgicetf8VebcdtfgeaeydbgecefBdbaxaecdtfaiBdbamclfhmavcufgvmbkaq9cv9smdcbhvinabawydbcdtfavBdbawclfhwadavcefgv9hmbxdkkaq9cv9smekkcwhvcbhiinalcxfavfc98fydbcbyd;u:I:cjbH:bjjjbbaiceGheclhvcehiaeTmbkalc;Waf8Kjjjjbk:Awliuo99iud9:cbhv8Jjjjjbca9Rgocbyd:4:I:cjbBdKaocb8Pd:W:I:cjb83izaocbyd;e:I:cjbBdwaocb8Pd:8:I:cjb83ibaicd4hrdndnadmbJFFuFhwJFFuuhDJFFuuhqJFFuFhkJFFuuhxJFFuFhmxekarcdthPaehsincbhiinaoczfaifgzasaifIdbgwazIdbgDaDaw9EEUdbaoaifgzawazIdbgDaDaw9DEUdbaiclfgicx9hmbkasaPfhsavcefgvad9hmbkaoIdKhDaoIdwhwaoIdChqaoIdlhkaoIdzhxaoIdbhmkdnadTmbJbbbbJbFu9hJbbbbamax:tgmamJbbbb9DEgmakaq:tgkakam9DEgkawaD:tgwawak9DEgw:vawJbbbb9BEhwdnalmbarcdthoindndnaeclfIdbaq:tawNJbbbZMgk:lJbbb9p9DTmbak:Ohixekcjjjj94hikai:S9cC:ghHdndnaeIdbax:tawNJbbbZMgk:lJbbb9p9DTmbak:Ohixekcjjjj94hikaHai:S:ehHdndnaecwfIdbaD:tawNJbbbZMgk:lJbbb9p9DTmbak:Ohixekcjjjj94hikabaHai:T9cy:g:e83ibaeaofheabcwfhbadcufgdmbxdkkarcdthoindndnaeIdbax:tawNJbbbZMgk:lJbbb9p9DTmbak:Ohixekcjjjj94hikai:SgH9ca:gaH9cz:g9cjjj;4s:d:eaH9cFe:d:e9cF:bj;4:pj;ar:d9c:bd9:9c:p;G:d;4j:E;ar:d9cH9:9c;d;H:W:y:m:g;d;Hb:d9cv9:9c;j:KM;j:KM;j:Kd:dhOdndnaeclfIdbaq:tawNJbbbZMgk:lJbbb9p9DTmbak:Ohixekcjjjj94hikai:SgH9ca:gaH9cz:g9cjjj;4s:d:eaH9cFe:d:e9cF:bj;4:pj;ar:d9c:bd9:9c:p;G:d;4j:E;ar:d9cH9:9c;d;H:W:y:m:g;d;Hb:d9cq9:9cM;j:KM;j:KM;jl:daO:ehOdndnaecwfIdbaD:tawNJbbbZMgk:lJbbb9p9DTmbak:Ohixekcjjjj94hikabaOai:SgH9ca:gaH9cz:g9cjjj;4s:d:eaH9cFe:d:e9cF:bj;4:pj;ar:d9c:bd9:9c:p;G:d;4j:E;ar:d9cH9:9c;d;H:W:y:m:g;d;Hb:d9cC9:9c:KM;j:KM;j:KMD:d:e83ibaeaofheabcwfhbadcufgdmbkkk9teiucbcbyd;y:I:cjbgeabcifc98GfgbBd;y:I:cjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;LeeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiclfaeclfydbBdbaicwfaecwfydbBdbaicxfaecxfydbBdbaeczfheaiczfhiadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk;aeedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdbaicxfalBdbaicwfalBdbaiclfalBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabk9teiucbcbyd;y:I:cjbgeabcrfc94GfgbBd;y:I:cjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikTeeucbabcbyd;y:I:cjbge9Rcifc98GaefgbBd;y:I:cjbdnabZbcztge9nmbabae9RcFFifcz4nb8Akkk;Sddbcj:Gdk;idbbbbdbbblbbbwbbbbbbbebbbdbbblbbbwbbbbbbbbbbbbbbbbbbbebbbdbbbbbbbebbbbbbbbbbbbbbbb4:h9w9N94:P:gW:j9O:ye9Pbbbbbb:l29hZ;69:9kZ;N;76Z;rg97Z;z;o9xZ8J;B85Z;:;u9yZ;b;k9HZ:2;Z9DZ9e:l9mZ59A8KZ:r;T3Z:A:zYZ79OHZ;j4::8::Y:D9V8:bbbb9s:49:Z8R:hBZ9M9M;M8:L;z;o8:;8:PG89q;x:J878R:hQ8::M:B;e87bbbbbbjZbbjZbbjZ:E;V;N8::Y:DsZ9i;H;68:xd;R8:;h0838:;W:NoZbbbb:WV9O8:uf888:9i;H;68:9c9G;L89;n;m9m89;D8Ko8:bbbbf:8tZ9m836ZS:2AZL;zPZZ818EZ9e:lxZ;U98F8:819E;68:FFuuFFuuFFuuFFuFFFuFFFuFbc;i:IdkCebbbebbbebbbdbbb9G:rbb",e=new Uint8Array([32,0,65,2,1,106,34,33,3,128,11,4,13,64,6,253,10,7,15,116,127,5,8,12,40,16,19,54,20,9,27,255,113,17,42,67,24,23,146,148,18,14,22,45,70,69,56,114,101,21,25,63,75,136,108,28,118,29,73,115]);if(typeof WebAssembly!="object")return{supported:!1};var t,n=WebAssembly.instantiate(a(i),{}).then(function(p){t=p.instance,t.exports.__wasm_call_ctors(),t.exports.meshopt_encodeVertexVersion(1),t.exports.meshopt_encodeIndexVersion(1)});function a(p){for(var m=new Uint8Array(p.length),y=0;y<p.length;++y){var b=p.charCodeAt(y);m[y]=b>96?b-97:b>64?b-39:b+4}for(var u=0,y=0;y<p.length;++y)m[u++]=m[y]<60?e[m[y]]:(m[y]-60)*64+m[++y];return m.buffer.slice(0,u)}function s(p){if(!p)throw new Error("Assertion failed")}function r(p){return new Uint8Array(p.buffer,p.byteOffset,p.byteLength)}function o(p,m,y,b){var u=t.exports.sbrk,g=u(m.length*4),S=u(y*4),x=new Uint8Array(t.exports.memory.buffer),M=r(m);x.set(M,g),b&&b(g,g,m.length,y);var w=p(S,g,m.length,y);x=new Uint8Array(t.exports.memory.buffer);var T=new Uint32Array(y);new Uint8Array(T.buffer).set(x.subarray(S,S+y*4)),M.set(x.subarray(g,g+m.length*4)),u(g-u(0));for(var v=0;v<m.length;++v)m[v]=T[m[v]];return[T,w]}function l(p,m,y,b){var u=t.exports.sbrk,g=u(y*4),S=u(y*b),x=new Uint8Array(t.exports.memory.buffer);x.set(r(m),S),p(g,S,y,b),x=new Uint8Array(t.exports.memory.buffer);var M=new Uint32Array(y);return new Uint8Array(M.buffer).set(x.subarray(g,g+y*4)),u(g-u(0)),M}function c(p,m,y,b,u,g,S){var x=t.exports.sbrk,M=x(m),w=x(b*u),T=new Uint8Array(t.exports.memory.buffer);T.set(r(y),w);var v=p(M,m,w,b,u,g,S),E=new Uint8Array(v);return E.set(T.subarray(M,M+v)),x(M-x(0)),E}function h(p){for(var m=0,y=0;y<p.length;++y){var b=p[y];m=m<b?b:m}return m}function d(p,m){if(s(m==2||m==4),m==4)return new Uint32Array(p.buffer,p.byteOffset,p.byteLength/4);var y=new Uint16Array(p.buffer,p.byteOffset,p.byteLength/2);return new Uint32Array(y)}function f(p,m,y,b,u,g,S){var x=t.exports.sbrk,M=x(y*b),w=x(y*g),T=new Uint8Array(t.exports.memory.buffer);T.set(r(m),w),p(M,y,b,u,w,S);var v=new Uint8Array(y*b);return v.set(T.subarray(M,M+y*b)),x(M-x(0)),v}return{ready:n,supported:!0,reorderMesh:function(p,m,y){s(p instanceof Uint32Array||p instanceof Int32Array),s(!m||p.length%3==0);var b=m?y?t.exports.meshopt_optimizeVertexCacheStrip:t.exports.meshopt_optimizeVertexCache:void 0;return o(t.exports.meshopt_optimizeVertexFetchRemap,p,h(p)+1,b)},reorderPoints:function(p,m){return s(p instanceof Float32Array),s(p.length%m==0),s(m>=3),l(t.exports.meshopt_spatialSortRemap,p,p.length/m,m*4)},encodeVertexBuffer:function(p,m,y){s(y>0&&y<=256),s(y%4==0);var b=t.exports.meshopt_encodeVertexBufferBound(m,y);return c(t.exports.meshopt_encodeVertexBuffer,b,p,m,y)},encodeVertexBufferLevel:function(p,m,y,b,u){s(y>0&&y<=256),s(y%4==0),s(b>=0&&b<=3),s(u===void 0||u==0||u==1);var g=t.exports.meshopt_encodeVertexBufferBound(m,y);return c(t.exports.meshopt_encodeVertexBufferLevel,g,p,m,y,b,u===void 0?-1:u)},encodeIndexBuffer:function(p,m,y){s(y==2||y==4),s(m%3==0);var b=d(p,y),u=t.exports.meshopt_encodeIndexBufferBound(m,h(b)+1);return c(t.exports.meshopt_encodeIndexBuffer,u,b,m,4)},encodeIndexSequence:function(p,m,y){s(y==2||y==4);var b=d(p,y),u=t.exports.meshopt_encodeIndexSequenceBound(m,h(b)+1);return c(t.exports.meshopt_encodeIndexSequence,u,b,m,4)},encodeGltfBuffer:function(p,m,y,b,u){var g={ATTRIBUTES:this.encodeVertexBufferLevel,TRIANGLES:this.encodeIndexBuffer,INDICES:this.encodeIndexSequence};return s(g[b]),g[b](p,m,y,2,u===void 0?0:u)},encodeFilterOct:function(p,m,y,b){return s(y==4||y==8),s(b>=2&&b<=16),f(t.exports.meshopt_encodeFilterOct,p,m,y,b,16)},encodeFilterQuat:function(p,m,y,b){return s(y==8),s(b>=4&&b<=16),f(t.exports.meshopt_encodeFilterQuat,p,m,y,b,16)},encodeFilterExp:function(p,m,y,b,u){s(y>0&&y%4==0),s(b>=1&&b<=24);var g={Separate:0,SharedVector:1,SharedComponent:2,Clamped:3};return s(!u||u in g),f(t.exports.meshopt_encodeFilterExp,p,m,y,b,y,u?g[u]:1)},encodeFilterColor:function(p,m,y,b){return s(y==4||y==8),s(b>=2&&b<=16),f(t.exports.meshopt_encodeFilterColor,p,m,y,b,16)}}})();var Wd=(function(){var i="b9H79Tebbbe8Fv9Gbb9Gvuuuuueu9Giuuub9Geueu9Giuuueuixkbeeeddddillviebeoweuecj:Gdkr;Neqo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbeY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVbdE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbiL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtblK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949WboY9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVJ9V29VVbrl79IV9Rbwq1Zkdbk:kYi5ud9:du8Jjjjjbcjq9Rgv8Kjjjjbc9:hodnalTmbcuhoaiRbbgrc;WeGc:Ge9hmbarcsGgwce0mbc9:hoalcufadcd4cbawEgDadfgrcKcaawEgqaraq0Egk6mbaicefhxcj;abad9Uc;WFbGcjdadca0EhmaialfgPar9Rgoadfhsavaoadz:jjjjbgzceVhHcbhOdndninaeaO9nmeaPax9RaD6mdamaeaO9RaOamfgoae6EgAcsfglc9WGhCaAcethXaxaDfhiaOaeaoaeao6E9RhQalcl4cifcd4hLazcjdfaAfhKcbhYabaOad2fg8AhEaHh3incbh5dnawTmbaxaYcd4fRbbh5kcbh8Eazcjdfhqinaih8Fdndndndna5a8Ecet4ciGgoc9:fPdebdkaPa8F9RaA6mrazcjdfa8EaA2fa8FaAz:jjjjb8Aa8FaAfhixdkazcjdfa8EaA2fcbaAz:kjjjb8Aa8FhixekaPa8F9RaL6mva8FaLfhidnaCTmbaPai9RcK6mbaocdtc:q:G:cjbfcj:G:cjbawEhaczhrcbhlinargoc9Wfghaqfhrdndndndndndnaaa8Fahco4fRbbalcoG4ciGcdtfydbPDbedvivvvlvkar9cb83bwar9cb83bbxlkarcbaiRbdai8Xbb9c:c:qj:bw9:9c:q;c1:I1e:d9c:b:c:e1z9:gg9cjjjjjz:dg8J9qE86bbaqaofgrcGfcbaicdfa8J9c8N1:NfghRbbag9cjjjjjw:dg8J9qE86bbarcVfcbaha8J9c8M1:NfghRbbag9cjjjjjl:dg8J9qE86bbarc7fcbaha8J9c8L1:NfghRbbag9cjjjjjd:dg8J9qE86bbarctfcbaha8J9c8K1:NfghRbbag9cjjjjje:dg8J9qE86bbarc91fcbaha8J9c8J1:NfghRbbag9cjjjj;ab:dg8J9qE86bbarc4fcbaha8J9cg1:NfghRbbag9cjjjja:dg8J9qE86bbarc93fcbaha8J9ch1:NfghRbbag9cjjjjz:dgg9qE86bbarc94fcbahag9ca1:NfghRbbai8Xbe9c:c:qj:bw9:9c:q;c1:I1e:d9c:b:c:e1z9:gg9cjjjjjz:dg8J9qE86bbarc95fcbaha8J9c8N1:NfgiRbbag9cjjjjjw:dg8J9qE86bbarc96fcbaia8J9c8M1:NfgiRbbag9cjjjjjl:dg8J9qE86bbarc97fcbaia8J9c8L1:NfgiRbbag9cjjjjjd:dg8J9qE86bbarc98fcbaia8J9c8K1:NfgiRbbag9cjjjjje:dg8J9qE86bbarc99fcbaia8J9c8J1:NfgiRbbag9cjjjj;ab:dg8J9qE86bbarc9:fcbaia8J9cg1:NfgiRbbag9cjjjja:dg8J9qE86bbarcufcbaia8J9ch1:NfgiRbbag9cjjjjz:dgg9qE86bbaiag9ca1:NfhixikaraiRblaiRbbghco4g8Ka8KciSg8KE86bbaqaofgrcGfaiclfa8Kfg8KRbbahcl4ciGg8La8LciSg8LE86bbarcVfa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc7fa8Ka8Lfg8KRbbahciGghahciSghE86bbarctfa8Kahfg8KRbbaiRbeghco4g8La8LciSg8LE86bbarc91fa8Ka8Lfg8KRbbahcl4ciGg8La8LciSg8LE86bbarc4fa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc93fa8Ka8Lfg8KRbbahciGghahciSghE86bbarc94fa8Kahfg8KRbbaiRbdghco4g8La8LciSg8LE86bbarc95fa8Ka8Lfg8KRbbahcl4ciGg8La8LciSg8LE86bbarc96fa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc97fa8Ka8Lfg8KRbbahciGghahciSghE86bbarc98fa8KahfghRbbaiRbigico4g8Ka8KciSg8KE86bbarc99faha8KfghRbbaicl4ciGg8Ka8KciSg8KE86bbarc9:faha8KfghRbbaicd4ciGg8Ka8KciSg8KE86bbarcufaha8KfgrRbbaiciGgiaiciSgiE86bbaraifhixdkaraiRbwaiRbbghcl4g8Ka8KcsSg8KE86bbaqaofgrcGfaicwfa8Kfg8KRbbahcsGghahcsSghE86bbarcVfa8KahfghRbbaiRbeg8Kcl4g8La8LcsSg8LE86bbarc7faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarctfaha8KfghRbbaiRbdg8Kcl4g8La8LcsSg8LE86bbarc91faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc4faha8KfghRbbaiRbig8Kcl4g8La8LcsSg8LE86bbarc93faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc94faha8KfghRbbaiRblg8Kcl4g8La8LcsSg8LE86bbarc95faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc96faha8KfghRbbaiRbvg8Kcl4g8La8LcsSg8LE86bbarc97faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc98faha8KfghRbbaiRbog8Kcl4g8La8LcsSg8LE86bbarc99faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc9:faha8KfghRbbaiRbrgicl4g8Ka8KcsSg8KE86bbarcufaha8KfgrRbbaicsGgiaicsSgiE86bbaraifhixekarai8Pbw83bwarai8Pbb83bbaiczfhikdnaoaC9pmbalcdfhlaoczfhraPai9RcL0mekkaoaC6moaimexokaCmva8FTmvkaqaAfhqa8Ecefg8Ecl9hmbkdndndndnawTmbasaYcd4fRbbgociGPlbedrbkaATmdazaYfh8Fazcjdfhhcbh8EaEhaina8FRbbhraahocbhlinaoahalfRbbgqce4cbaqceG9R7arfgr86bbaoadfhoaAalcefgl9hmbkaacefhaa8Fcefh8FahaAfhha8Ecefg8Ecl9hmbxikkaATmeazaYfhaazcjdfhhcbhoceh8EaKh8FinaEaofhlaa8Vbbhrcbhoinala8FaofRbbcwtahaofRbbgqVc;:FiGce4cbaqceG9R7arfgr87bbaladfhlaQaocefgofmbka8FaXfh8FcdhoaacdfhaahaXfhha8EceGhlcbh8EalmbxdkkaATmbaocl4h8EazaYfRbbhqcwhoa3hlinalRbbaotaqVhqalcefhlaocwfgoca9hmbkcbhhaEh8FaKhainazcjdfahfRbbhrcwhoaahlinalRbbaotarVhralaAfhlaocwfgoca9hmbkara8E94aq7hqcbhoa8Fhlinalaqao486bbalcefhlaocwfgoca9hmbka8Fadfh8FaacefhaahcefghaA9hmbkkaEclfhEa3clfh3aYclfgYad6mbkaza8AaAcufad2fadz:jjjjb8AaAaOfhOaihxaimbkc9:hoxdkcbc99aPax9RakSEhoxekc9:hokavcjqf8Kjjjjbaok:ysezu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnalaeci9UgrcHf6mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecjez:kjjjb8Aav9cu83iUav9cu83i8Wav9cu83iyav9cu83iaav9cu83iKav9cu83izav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhldnaeTmbcmcsaDceSEhkcbhxcbhmcbhrcbhicbhoindnalaq9nmbc9:hoxikdndnawRbbgDc;Ve0mbavc;abfaoaDcu7gPcl4fcsGcitfgsydlhzasydbhHdndnaDcsGgsak9pmbavaiaPfcsGcdtfydbaxasEhDaxasTgOfhxxekdndnascsSmbcehOasc987asamffcefhDxekalcefhDal8SbbgscFeGhPdndnascu9mmbaDhlxekalcvfhlaPcFbGhPcrhsdninaD8SbbgOcFbGastaPVhPaOcu9kmeaDcefhDascrfgsc8J9hmbxdkkaDcefhlkcehOaPce4cbaPceG9R7amfhDkaDhmkavc;abfaocitfgsaDBdbasazBdlavaicdtfaDBdbavc;abfaocefcsGcitfgsaHBdbasaDBdlaocdfhoaOaifhidnadcd9hmbabarcetfgsaH87ebasclfaD87ebascdfaz87ebxdkabarcdtfgsaHBdbascwfaDBdbasclfazBdbxekdnaDcpe0mbavaiaqaDcsGfRbbgscl4gP9RcsGcdtfydbaxcefgOaPEhDavaias9RcsGcdtfydbaOaPTgzfgOascsGgPEhsaPThPdndnadcd9hmbabarcetfgHax87ebaHclfas87ebaHcdfaD87ebxekabarcdtfgHaxBdbaHcwfasBdbaHclfaDBdbkavaicdtfaxBdbavc;abfaocitfgHaDBdbaHaxBdlavaicefgicsGcdtfaDBdbavc;abfaocefcsGcitfgHasBdbaHaDBdlavaiazfgicsGcdtfasBdbavc;abfaocdfcsGcitfgDaxBdbaDasBdlaocifhoaiaPfhiaOaPfhxxekaxcbalRbbgsEgHaDc;:eSgDfhOascsGhAdndnascl4gCmbaOcefhzxekaOhzavaiaC9RcsGcdtfydbhOkdndnaAmbazcefhxxekazhxavaias9RcsGcdtfydbhzkdndnaDTmbalcefhDxekalcdfhDal8SbegPcFeGhsdnaPcu9kmbalcofhHascFbGhscrhldninaD8SbbgPcFbGaltasVhsaPcu9kmeaDcefhDalcrfglc8J9hmbkaHhDxekaDcefhDkasce4cbasceG9R7amfgmhHkdndnaCcsSmbaDhsxekaDcefhsaD8SbbglcFeGhPdnalcu9kmbaDcvfhOaPcFbGhPcrhldninas8SbbgDcFbGaltaPVhPaDcu9kmeascefhsalcrfglc8J9hmbkaOhsxekascefhskaPce4cbaPceG9R7amfgmhOkdndnaAcsSmbashlxekascefhlas8SbbgDcFeGhPdnaDcu9kmbascvfhzaPcFbGhPcrhDdninal8SbbgscFbGaDtaPVhPascu9kmealcefhlaDcrfgDc8J9hmbkazhlxekalcefhlkaPce4cbaPceG9R7amfgmhzkdndnadcd9hmbabarcetfgDaH87ebaDclfaz87ebaDcdfaO87ebxekabarcdtfgDaHBdbaDcwfazBdbaDclfaOBdbkavc;abfaocitfgDaOBdbaDaHBdlavaicdtfaHBdbavc;abfaocefcsGcitfgDazBdbaDaOBdlavaicefgicsGcdtfaOBdbavc;abfaocdfcsGcitfgDaHBdbaDazBdlavaiaCTaCcsSVfgicsGcdtfazBdbaiaATaAcsSVfhiaocifhokawcefhwaocsGhoaicsGhiarcifgrae6mbkkcbc99alaqSEhokavc;aef8Kjjjjbaok:clevu8Jjjjjbcz9Rhvdnalaecvf9pmbc9:skdnaiRbbc;:eGc;qeSmbcuskav9cb83iwaicefhoaialfc98fhrdnaeTmbdnadcdSmbcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcdtfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgiBdbalaiBdbawcefgwae9hmbxdkkcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcetfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgi87ebalaiBdbawcefgwae9hmbkkcbc99aoarSEk:Lvoeue99dud99eud99dndnadcl9hmbaeTmeindndnabcdfgd8Sbb:Yab8Sbbgi:Ygl:l:tabcefgv8Sbbgo:Ygr:l:tgwJbb;:9cawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai86bbdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad86bbdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad86bbabclfhbaecufgembxdkkaeTmbindndnabclfgd8Ueb:Yab8Uebgi:Ygl:l:tabcdfgv8Uebgo:Ygr:l:tgwJb;:FSawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai87ebdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad87ebdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad87ebabcwfhbaecufgembkkk:4ioiue99dud99dud99dnaeTmbcbhiabhlindndnal8Uebgv:YgoJ:ji:1Salcof8UebgrciVgw:Y:vgDNJbbbZJbbb:;avcu9kEMgq:lJbbb9p9DTmbaq:Ohkxekcjjjj94hkkalclf8Uebhvalcdf8UebhxalarcefciGcetfak87ebdndnax:YgqaDNJbbbZJbbb:;axcu9kEMgm:lJbbb9p9DTmbam:Ohxxekcjjjj94hxkabaiarciGgkfcd7cetfax87ebdndnav:YgmaDNJbbbZJbbb:;avcu9kEMgP:lJbbb9p9DTmbaP:Ohvxekcjjjj94hvkalarcufciGcetfav87ebdndnawaw2:ZgPaPMaoaoN:taqaqN:tamamN:tgoJbbbbaoJbbbb9GE:raDNJbbbZMgD:lJbbb9p9DTmbaD:Ohrxekcjjjj94hrkalakcetfar87ebalcwfhlaiclfhiaecufgembkkk9mbdnadcd4ae2gdTmbinababydbgecwtcw91:Yaece91cjjj98Gcjjj;8if::NUdbabclfhbadcufgdmbkkk:Tvirud99eudndnadcl9hmbaeTmeindndnabRbbgiabcefgl8Sbbgvabcdfgo8Sbbgrf9R:YJbbuJabcifgwRbbgdce4adVgDcd4aDVgDcl4aDVgD:Z:vgqNJbbbZMgk:lJbbb9p9DTmbak:Ohxxekcjjjj94hxkaoax86bbdndnaraif:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohoxekcjjjj94hokalao86bbdndnavaifar9R:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohixekcjjjj94hikabai86bbdndnaDadcetGadceGV:ZaqNJbbbZMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkawad86bbabclfhbaecufgembxdkkaeTmbindndnab8Vebgiabcdfgl8Uebgvabclfgo8Uebgrf9R:YJbFu9habcofgw8Vebgdce4adVgDcd4aDVgDcl4aDVgDcw4aDVgD:Z:vgqNJbbbZMgk:lJbbb9p9DTmbak:Ohxxekcjjjj94hxkaoax87ebdndnaraif:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohoxekcjjjj94hokalao87ebdndnavaifar9R:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohixekcjjjj94hikabai87ebdndnaDadcetGadceGV:ZaqNJbbbZMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkawad87ebabcwfhbaecufgembkkk9teiucbcbyd:K:G:cjbgeabcifc98GfgbBd:K:G:cjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;LeeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiclfaeclfydbBdbaicwfaecwfydbBdbaicxfaecxfydbBdbaeczfheaiczfhiadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk;aeedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdbaicxfalBdbaicwfalBdbaiclfalBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabkk83dbcj:Gdk8Kbbbbdbbblbbbwbbbbbbbebbbdbbblbbbwbbbbc:K:Gdkl8W:qbb",e="b9H79TebbbeKl9Gbb9Gvuuuuueu9Giuuub9Geueuixkbbebeeddddilve9Weeeviebeoweuecj:Gdkr;Neqo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbdY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVblE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtboK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbrL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949WbwY9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVJ9V29VVbDl79IV9Rbqq:59Dklbzik94evu8Jjjjjbcz9Rhbcbheincbhdcbhiinabcwfadfaicjuaead4ceGglE86bbaialfhiadcefgdcw9hmbkaeai86b:q:W:cjbaecitab8Piw83i:q:G:cjbaecefgecjd9hmbkk:SBlEud97dur978Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnalTmbcuhoaiRbbgrc;WeGc:Ge9hmbarcsGgwce0mbc9:hoalcufadcd4cbawEgDadfgrcKcaawEgqaraq0Egk6mbaialfgxar9RhodnadTgmmbavaoad;8qbbkaicefhPcj;abad9Uc;WFbGcjdadca0EhsdndndnadTmbaoadfhzcbhHinaeaH9nmdaxaP9RaD6miabaHad2fgOavcjdfasaeaH9RaHasfae6EgAaAcsfgoc9WGgCSEhXaPaDfhQaocl4cifcd4hLavcj;cbfaCcetfhKavcj;cbfaCci2fhYavcj;cbfaCfh8AcbhEaoc;ab6h3incbh5dnawTmbaPaEcd4fRbbh5kcbh8Eavcj;cbfh8Findndndndna5a8Ecet4ciGgoc9:fPdebdkaxaQ9RaC6mwdnaCTmbavcj;cbfa8EaC2faQaC;8qbbkaQaAfhQxdkaCTmeavcj;cbfa8EaC2fcbaC;8kbxekaxaQ9RaL6moaoclVcbawEhraQaLfhocbhidna3mbaxao9Rc;Gb6mbcbhlina8FalfhidndndndndndnaQalco4fRbbgqciGarfPDbedibledibkaipxbbbbbbbbbbbbbbbbpklbxlkaiaopbblaopbbbgaclp:meaapmbzeHdOiAlCvXoQrLgacdp:meaapmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9oghpxiiiiiiiiiiiiiiiip8Jgap5b9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbagRb:q:W:cjbggpsaap5e9cjF;8;4;W;G;ab9:9cU1:Ng8Jcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPahaap9spklbagaoclffa8JRb:q:W:cjbfhoxikaiaopbbwaopbbbgaclp:meaapmbzeHdOiAlCvXoQrLpxssssssssssssssssp9oghpxssssssssssssssssp8Jgap5b9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbagRb:q:W:cjbggpsaap5e9cjF;8;4;W;G;ab9:9cU1:Ng8Jcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPahaap9spklbagaocwffa8JRb:q:W:cjbfhoxdkaiaopbbbpklbaoczfhoxekaiaopbbdaoRbbggcitpbi:q:G:cjbagRb:q:W:cjbggpsaoRbeg8Jcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbagaocdffa8JRb:q:W:cjbfhokdndndndndndnaqcd4ciGarfPDbedibledibkaiczfpxbbbbbbbbbbbbbbbbpklbxlkaiczfaopbblaopbbbgaclp:meaapmbzeHdOiAlCvXoQrLgacdp:meaapmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9oghpxiiiiiiiiiiiiiiiip8Jgap5b9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbagRb:q:W:cjbggpsaap5e9cjF;8;4;W;G;ab9:9cU1:Ng8Jcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPahaap9spklbagaoclffa8JRb:q:W:cjbfhoxikaiczfaopbbwaopbbbgaclp:meaapmbzeHdOiAlCvXoQrLpxssssssssssssssssp9oghpxssssssssssssssssp8Jgap5b9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbagRb:q:W:cjbggpsaap5e9cjF;8;4;W;G;ab9:9cU1:Ng8Jcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPahaap9spklbagaocwffa8JRb:q:W:cjbfhoxdkaiczfaopbbbpklbaoczfhoxekaiczfaopbbdaoRbbggcitpbi:q:G:cjbagRb:q:W:cjbggpsaoRbeg8Jcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbagaocdffa8JRb:q:W:cjbfhokdndndndndndnaqcl4ciGarfPDbedibledibkaicafpxbbbbbbbbbbbbbbbbpklbxlkaicafaopbblaopbbbgaclp:meaapmbzeHdOiAlCvXoQrLgacdp:meaapmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9oghpxiiiiiiiiiiiiiiiip8Jgap5b9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbagRb:q:W:cjbggpsaap5e9cjF;8;4;W;G;ab9:9cU1:Ng8Jcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPahaap9spklbagaoclffa8JRb:q:W:cjbfhoxikaicafaopbbwaopbbbgaclp:meaapmbzeHdOiAlCvXoQrLpxssssssssssssssssp9oghpxssssssssssssssssp8Jgap5b9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbagRb:q:W:cjbggpsaap5e9cjF;8;4;W;G;ab9:9cU1:Ng8Jcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPahaap9spklbagaocwffa8JRb:q:W:cjbfhoxdkaicafaopbbbpklbaoczfhoxekaicafaopbbdaoRbbggcitpbi:q:G:cjbagRb:q:W:cjbggpsaoRbeg8Jcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbagaocdffa8JRb:q:W:cjbfhokdndndndndndnaqco4arfPDbedibledibkaic8Wfpxbbbbbbbbbbbbbbbbpklbxlkaic8Wfaopbblaopbbbgaclp:meaapmbzeHdOiAlCvXoQrLgacdp:meaapmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9oghpxiiiiiiiiiiiiiiiip8Jgap5b9cjF;8;4;W;G;ab9:9cU1:Ngicitpbi:q:G:cjbaiRb:q:W:cjbgipsaap5e9cjF;8;4;W;G;ab9:9cU1:Ngqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPahaap9spklbaiaoclffaqRb:q:W:cjbfhoxikaic8Wfaopbbwaopbbbgaclp:meaapmbzeHdOiAlCvXoQrLpxssssssssssssssssp9oghpxssssssssssssssssp8Jgap5b9cjF;8;4;W;G;ab9:9cU1:Ngicitpbi:q:G:cjbaiRb:q:W:cjbgipsaap5e9cjF;8;4;W;G;ab9:9cU1:Ngqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPahaap9spklbaiaocwffaqRb:q:W:cjbfhoxdkaic8Wfaopbbbpklbaoczfhoxekaic8WfaopbbdaoRbbgicitpbi:q:G:cjbaiRb:q:W:cjbgipsaoRbegqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbaiaocdffaqRb:q:W:cjbfhokalc;abfhialcjefaC0meaihlaxao9Rc;Fb0mbkkdnaiaC9pmbaici4hlinaxao9RcK6mwa8FaifhqdndndndndndnaQaico4fRbbalcoG4ciGarfPDbedibledibkaqpxbbbbbbbbbbbbbbbbpkbbxlkaqaopbblaopbbbgaclp:meaapmbzeHdOiAlCvXoQrLgacdp:meaapmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9oghpxiiiiiiiiiiiiiiiip8Jgap5b9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbagRb:q:W:cjbggpsaap5e9cjF;8;4;W;G;ab9:9cU1:Ng8Jcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPahaap9spkbbagaoclffa8JRb:q:W:cjbfhoxikaqaopbbwaopbbbgaclp:meaapmbzeHdOiAlCvXoQrLpxssssssssssssssssp9oghpxssssssssssssssssp8Jgap5b9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbagRb:q:W:cjbggpsaap5e9cjF;8;4;W;G;ab9:9cU1:Ng8Jcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPahaap9spkbbagaocwffa8JRb:q:W:cjbfhoxdkaqaopbbbpkbbaoczfhoxekaqaopbbdaoRbbggcitpbi:q:G:cjbagRb:q:W:cjbggpsaoRbeg8Jcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpkbbagaocdffa8JRb:q:W:cjbfhokalcdfhlaiczfgiaC6mbkkaohQaoTmoka8FaCfh8Fa8Ecefg8Ecl9hmbkdndndndnawTmbazaEcd4fRbbglciGPlbedwbkaCTmdaXaEfhlavaEfpbdbh8Kcbhoinalavcj;cbfaofpblbg8La8Aaofpblbg8MpmbzeHdOiAlCvXoQrLg8NaKaofpblbgyaYaofpblbg8PpmbzeHdOiAlCvXoQrLgIpmbezHdiOAlvCXorQLgacep9Taapxeeeeeeeeeeeeeeeeghp9op9Hp9rgaa8Kp9Ug8Kp9Abbbaladfgla8Kaaaapmlvorlvorlvorlvorp9Ug8Kp9Abbbaladfgla8KaaaapmwDqkwDqkwDqkwDqkp9Ug8Kp9Abbbaladfgla8KaaaapmxmPsxmPsxmPsxmPsp9Ug8Kp9Abbbaladfgla8Ka8NaIpmwDKYqk8AExm35Ps8E8Fgacep9Taaahp9op9Hp9rgap9Ug8Kp9Abbbaladfgla8Kaaaapmlvorlvorlvorlvorp9Ug8Kp9Abbbaladfgla8KaaaapmwDqkwDqkwDqkwDqkp9Ug8Kp9Abbbaladfgla8KaaaapmxmPsxmPsxmPsxmPsp9Ug8Kp9Abbbaladfgla8Ka8La8MpmwKDYq8AkEx3m5P8Es8Fg8Laya8PpmwKDYq8AkEx3m5P8Es8Fg8MpmbezHdiOAlvCXorQLgacep9Taaahp9op9Hp9rgap9Ug8Kp9Abbbaladfgla8Kaaaapmlvorlvorlvorlvorp9Ug8Kp9Abbbaladfgla8KaaaapmwDqkwDqkwDqkwDqkp9Ug8Kp9Abbbaladfgla8KaaaapmxmPsxmPsxmPsxmPsp9Ug8Kp9Abbbaladfgla8Ka8La8MpmwDKYqk8AExm35Ps8E8Fgacep9Taaahp9op9Hp9rgap9Ughp9Abbbaladfglahaaaapmlvorlvorlvorlvorp9Ughp9AbbbaladfglahaaaapmwDqkwDqkwDqkwDqkp9Ughp9AbbbaladfglahaaaapmxmPsxmPsxmPsxmPsp9Ug8Kp9AbbbaladfhlaoczfgoaC6mbxikkaCTmeaXaEfhlavaEfpbdbh8Kcbhoinalavcj;cbfaofpblbg8La8Aaofpblbg8MpmbzeHdOiAlCvXoQrLg8NaKaofpblbgyaYaofpblbg8PpmbzeHdOiAlCvXoQrLgIpmbezHdiOAlvCXorQLgacep:neaapxebebebebebebebebghp9op:bep9rgaa8Kp:oeg8Kp9Abbbaladfgla8Kaaaapmlvorlvorlvorlvorp:oeg8Kp9Abbbaladfgla8KaaaapmwDqkwDqkwDqkwDqkp:oeg8Kp9Abbbaladfgla8KaaaapmxmPsxmPsxmPsxmPsp:oeg8Kp9Abbbaladfgla8Ka8NaIpmwDKYqk8AExm35Ps8E8Fgacep:neaaahp9op:bep9rgap:oeg8Kp9Abbbaladfgla8Kaaaapmlvorlvorlvorlvorp:oeg8Kp9Abbbaladfgla8KaaaapmwDqkwDqkwDqkwDqkp:oeg8Kp9Abbbaladfgla8KaaaapmxmPsxmPsxmPsxmPsp:oeg8Kp9Abbbaladfgla8Ka8La8MpmwKDYq8AkEx3m5P8Es8Fg8Laya8PpmwKDYq8AkEx3m5P8Es8Fg8MpmbezHdiOAlvCXorQLgacep:neaaahp9op:bep9rgap:oeg8Kp9Abbbaladfgla8Kaaaapmlvorlvorlvorlvorp:oeg8Kp9Abbbaladfgla8KaaaapmwDqkwDqkwDqkwDqkp:oeg8Kp9Abbbaladfgla8KaaaapmxmPsxmPsxmPsxmPsp:oeg8Kp9Abbbaladfgla8Ka8La8MpmwDKYqk8AExm35Ps8E8Fgacep:neaaahp9op:bep9rgap:oeghp9Abbbaladfglahaaaapmlvorlvorlvorlvorp:oeghp9AbbbaladfglahaaaapmwDqkwDqkwDqkwDqkp:oeghp9AbbbaladfglahaaaapmxmPsxmPsxmPsxmPsp:oeg8Kp9AbbbaladfhlaoczfgoaC6mbxdkkaCTmbaXaEfhrcbhocbalcl4gl9Rc8FGhiavaEfpbdbhhinaravcj;cbfaofpblbg8Ka8Aaofpblbg8LpmbzeHdOiAlCvXoQrLg8MaKaofpblbg8NaYaofpblbgypmbzeHdOiAlCvXoQrLg8PpmbezHdiOAlvCXorQLgaaip:Reaaalp:Tep9qgaahp9rghp9Abbbaradfgrahaaaapmlvorlvorlvorlvorp9rghp9AbbbaradfgrahaaaapmwDqkwDqkwDqkwDqkp9rghp9AbbbaradfgrahaaaapmxmPsxmPsxmPsxmPsp9rghp9Abbbaradfgraha8Ma8PpmwDKYqk8AExm35Ps8E8Fgaaip:Reaaalp:Tep9qgap9rghp9Abbbaradfgrahaaaapmlvorlvorlvorlvorp9rghp9AbbbaradfgrahaaaapmwDqkwDqkwDqkwDqkp9rghp9AbbbaradfgrahaaaapmxmPsxmPsxmPsxmPsp9rghp9Abbbaradfgraha8Ka8LpmwKDYq8AkEx3m5P8Es8Fg8Ka8NaypmwKDYq8AkEx3m5P8Es8Fg8LpmbezHdiOAlvCXorQLgaaip:Reaaalp:Tep9qgap9rghp9Abbbaradfgrahaaaapmlvorlvorlvorlvorp9rghp9AbbbaradfgrahaaaapmwDqkwDqkwDqkwDqkp9rghp9AbbbaradfgrahaaaapmxmPsxmPsxmPsxmPsp9rghp9Abbbaradfgraha8Ka8LpmwDKYqk8AExm35Ps8E8Fgaaip:Reaaalp:Tep9qgap9rghp9Abbbaradfgrahaaaapmlvorlvorlvorlvorp9rghp9AbbbaradfgrahaaaapmwDqkwDqkwDqkwDqkp9rghp9AbbbaradfgrahaaaapmxmPsxmPsxmPsxmPsp9rghp9AbbbaradfhraoczfgoaC6mbkkaEclfgEad6mbkdnaXavcjdf9hmbaAad2goTmbaOavcjdfao;8qbbkdnammbavaXaAcufad2fad;8qbbkaAaHfhHc9:hoaQhPaQmbxlkkaeTmbaDalfhrcbhocuhlinaralaD9RglfaD6mdasaeao9Raoasfae6Eaofgoae6mbkaial9RhPkcbc99axaP9RakSEhoxekc9:hokavcj;kbf8Kjjjjbaokwbz:bjjjbkNsezu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnalaeci9UgrcHf6mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecje;8kbav9cu83iUav9cu83i8Wav9cu83iyav9cu83iaav9cu83iKav9cu83izav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhldnaeTmbcmcsaDceSEhkcbhxcbhmcbhrcbhicbhoindnalaq9nmbc9:hoxikdndnawRbbgDc;Ve0mbavc;abfaoaDcu7gPcl4fcsGcitfgsydlhzasydbhHdndnaDcsGgsak9pmbavaiaPfcsGcdtfydbaxasEhDaxasTgOfhxxekdndnascsSmbcehOasc987asamffcefhDxekalcefhDal8SbbgscFeGhPdndnascu9mmbaDhlxekalcvfhlaPcFbGhPcrhsdninaD8SbbgOcFbGastaPVhPaOcu9kmeaDcefhDascrfgsc8J9hmbxdkkaDcefhlkcehOaPce4cbaPceG9R7amfhDkaDhmkavc;abfaocitfgsaDBdbasazBdlavaicdtfaDBdbavc;abfaocefcsGcitfgsaHBdbasaDBdlaocdfhoaOaifhidnadcd9hmbabarcetfgsaH87ebasclfaD87ebascdfaz87ebxdkabarcdtfgsaHBdbascwfaDBdbasclfazBdbxekdnaDcpe0mbavaiaqaDcsGfRbbgscl4gP9RcsGcdtfydbaxcefgOaPEhDavaias9RcsGcdtfydbaOaPTgzfgOascsGgPEhsaPThPdndnadcd9hmbabarcetfgHax87ebaHclfas87ebaHcdfaD87ebxekabarcdtfgHaxBdbaHcwfasBdbaHclfaDBdbkavaicdtfaxBdbavc;abfaocitfgHaDBdbaHaxBdlavaicefgicsGcdtfaDBdbavc;abfaocefcsGcitfgHasBdbaHaDBdlavaiazfgicsGcdtfasBdbavc;abfaocdfcsGcitfgDaxBdbaDasBdlaocifhoaiaPfhiaOaPfhxxekaxcbalRbbgsEgHaDc;:eSgDfhOascsGhAdndnascl4gCmbaOcefhzxekaOhzavaiaC9RcsGcdtfydbhOkdndnaAmbazcefhxxekazhxavaias9RcsGcdtfydbhzkdndnaDTmbalcefhDxekalcdfhDal8SbegPcFeGhsdnaPcu9kmbalcofhHascFbGhscrhldninaD8SbbgPcFbGaltasVhsaPcu9kmeaDcefhDalcrfglc8J9hmbkaHhDxekaDcefhDkasce4cbasceG9R7amfgmhHkdndnaCcsSmbaDhsxekaDcefhsaD8SbbglcFeGhPdnalcu9kmbaDcvfhOaPcFbGhPcrhldninas8SbbgDcFbGaltaPVhPaDcu9kmeascefhsalcrfglc8J9hmbkaOhsxekascefhskaPce4cbaPceG9R7amfgmhOkdndnaAcsSmbashlxekascefhlas8SbbgDcFeGhPdnaDcu9kmbascvfhzaPcFbGhPcrhDdninal8SbbgscFbGaDtaPVhPascu9kmealcefhlaDcrfgDc8J9hmbkazhlxekalcefhlkaPce4cbaPceG9R7amfgmhzkdndnadcd9hmbabarcetfgDaH87ebaDclfaz87ebaDcdfaO87ebxekabarcdtfgDaHBdbaDcwfazBdbaDclfaOBdbkavc;abfaocitfgDaOBdbaDaHBdlavaicdtfaHBdbavc;abfaocefcsGcitfgDazBdbaDaOBdlavaicefgicsGcdtfaOBdbavc;abfaocdfcsGcitfgDaHBdbaDazBdlavaiaCTaCcsSVfgicsGcdtfazBdbaiaATaAcsSVfhiaocifhokawcefhwaocsGhoaicsGhiarcifgrae6mbkkcbc99alaqSEhokavc;aef8Kjjjjbaok:clevu8Jjjjjbcz9Rhvdnalaecvf9pmbc9:skdnaiRbbc;:eGc;qeSmbcuskav9cb83iwaicefhoaialfc98fhrdnaeTmbdnadcdSmbcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcdtfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgiBdbalaiBdbawcefgwae9hmbxdkkcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcetfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgi87ebalaiBdbawcefgwae9hmbkkcbc99aoarSEk;Toio97eue97aec98Ghedndnadcl9hmbaeTmecbhdinababpbbbgicKp:RecKp:Sep;6eglaicwp:RecKp:Sep;6ealp;Geaiczp:RecKp:Sep;6egvp;Gep;Kep;Legopxbbbbbbbbbbbbbbbbp:2egralpxbbbjbbbjbbbjbbbjgwp9op9rp;Keglpxbb;:9cbb;:9cbb;:9cbb;:9calalp;Meaoaop;Meavaravawp9op9rp;Keglalp;Mep;Kep;Kep;Jep;Negvp;Mepxbbn0bbn0bbn0bbn0grp;KepxFbbbFbbbFbbbFbbbp9oaipxbbbFbbbFbbbFbbbFp9op9qalavp;Mearp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaoavp;Mearp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpkbbabczfhbadclfgdae6mbxdkkaeTmbcbhdinabczfgDaDpbbbgipxbbbbbbFFbbbbbbFFgwp9oabpbbbgoaipmbediwDqkzHOAKY8AEgvczp:Reczp:Sep;6eglaoaipmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eavczp:Sep;6egvp;Gealp;Gep;Kep;Legipxbbbbbbbbbbbbbbbbp:2egralpxbbbjbbbjbbbjbbbjgqp9op9rp;Keglpxb;:FSb;:FSb;:FSb;:FSalalp;Meaiaip;Meavaravaqp9op9rp;Keglalp;Mep;Kep;Kep;Jep;Negvp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbp9oaiavp;Mearp;Keczp:Rep9qgialavp;Mearp;KepxFFbbFFbbFFbbFFbbp9oglpmwDKYqk8AExm35Ps8E8Fp9qpkbbabaoawp9oaialpmbezHdiOAlvCXorQLp9qpkbbabcafhbadclfgdae6mbkkk;2ileue97euo97dnaec98GgiTmbcbheinabcKfpx:ji:1S:ji:1S:ji:1S:ji:1SabpbbbglabczfgvpbbbgopmlvorxmPsCXQL358E8Fgrczp:Segwpxibbbibbbibbbibbbp9qp;6egDp;NegqaDaDp;MegDaDp;KealaopmbediwDqkzHOAKY8AEgDczp:Reczp:Sep;6eglalp;MeaDczp:Sep;6egoaop;Mearczp:Reczp:Sep;6egrarp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jep;Mepxbbn0bbn0bbn0bbn0gDp;KepxFFbbFFbbFFbbFFbbgkp9oaqaop;MeaDp;Keczp:Rep9qgoaqalp;MeaDp;Keakp9oaqarp;MeaDp;Keczp:Rep9qgDpmwDKYqk8AExm35Ps8E8Fglp5eawclp:RegqpEi:T:j83ibavalp5baqpEd:T:j83ibabcwfaoaDpmbezHdiOAlvCXorQLgDp5eaqpEe:T:j83ibabaDp5baqpEb:T:j83ibabcafhbaeclfgeai6mbkkkuee97dnadcd4ae2c98GgeTmbcbhdinababpbbbgicwp:Recwp:Sep;6eaicep:SepxbbjFbbjFbbjFbbjFp9opxbbjZbbjZbbjZbbjZp:Uep;Mepkbbabczfhbadclfgdae6mbkkk:Sodw97euaec98Ghedndnadcl9hmbaeTmecbhdinabpxbbuJbbuJbbuJbbuJabpbbbgicKp:TeglaicYp:Tep9qgvcdp:Teavp9qgvclp:Teavp9qgop;6ep;Negvaicwp:RecKp:SegraipxFbbbFbbbFbbbFbbbgwp9ogDp:Uep;6ep;Mepxbbn0bbn0bbn0bbn0gqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9oavaDarp:Xeaiczp:RecKp:Segip:Uep;6ep;Meaqp;Keawp9op9qavaDaraip:Uep:Xep;6ep;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qavaoalcep:Rep9oalpxebbbebbbebbbebbbp9op9qp;6ep;Meaqp;KecKp:Rep9qpkbbabczfhbadclfgdae6mbxdkkaeTmbcbhdinabczfgkpxbFu9hbFu9hbFu9hbFu9habpbbbglakpbbbgrpmlvorxmPsCXQL358E8Fgvczp:TegqavcHp:Tep9qgicdp:Teaip9qgiclp:Teaip9qgicwp:Teaip9qgop;6ep;NegialarpmbediwDqkzHOAKY8AEgDpxFFbbFFbbFFbbFFbbglp9ograDczp:Segwp:Ueavczp:Reczp:SegDp:Xep;6ep;Mepxbbn0bbn0bbn0bbn0gvp;Kealp9oaiarawaDp:Uep:Xep;6ep;Meavp;Keczp:Rep9qgwaiaoaqcep:Rep9oaqpxebbbebbbebbbebbbp9op9qp;6ep;Meavp;Keczp:ReaiaDarp:Uep;6ep;Meavp;Kealp9op9qgipmwDKYqk8AExm35Ps8E8FpkbbabawaipmbezHdiOAlvCXorQLpkbbabcafhbadclfgdae6mbkkk9teiucbcbydj:G:cjbgeabcifc98GfgbBdj:G:cjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikkxebcj:Gdklz:zbb",t=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,3,2,0,0,5,3,1,0,1,12,1,0,10,22,2,12,0,65,0,65,0,65,0,252,10,0,0,11,7,0,65,0,253,15,26,11]),n=new Uint8Array([32,0,65,2,1,106,34,33,3,128,11,4,13,64,6,253,10,7,15,116,127,5,8,12,40,16,19,54,20,9,27,255,113,17,42,67,24,23,146,148,18,14,22,45,70,69,56,114,101,21,25,63,75,136,108,28,118,29,73,115]);if(typeof WebAssembly!="object")return{supported:!1};var a=WebAssembly.validate(t)?o(e):o(i),s,r=WebAssembly.instantiate(a,{}).then(function(u){s=u.instance,s.exports.__wasm_call_ctors()});function o(u){for(var g=new Uint8Array(u.length),S=0;S<u.length;++S){var x=u.charCodeAt(S);g[S]=x>96?x-97:x>64?x-39:x+4}for(var M=0,S=0;S<u.length;++S)g[M++]=g[S]<60?n[g[S]]:(g[S]-60)*64+g[++S];return g.buffer.slice(0,M)}function l(u,g,S,x,M,w,T){var v=u.exports.sbrk,E=x+3&-4,I=v(E*M),C=v(w.length),N=new Uint8Array(u.exports.memory.buffer);N.set(w,C);var L=g(I,x,M,C,w.length);if(L==0&&T&&T(I,E,M),S.set(N.subarray(I,I+x*M)),v(I-v(0)),L!=0)throw new Error("Malformed buffer data: "+L)}var c={NONE:"",OCTAHEDRAL:"meshopt_decodeFilterOct",QUATERNION:"meshopt_decodeFilterQuat",EXPONENTIAL:"meshopt_decodeFilterExp",COLOR:"meshopt_decodeFilterColor"},h={ATTRIBUTES:"meshopt_decodeVertexBuffer",TRIANGLES:"meshopt_decodeIndexBuffer",INDICES:"meshopt_decodeIndexSequence"},d=[],f=0;function p(u){var g={object:new Worker(u),pending:0,requests:{}};return g.object.onmessage=function(S){var x=S.data;g.pending-=x.count,g.requests[x.id][x.action](x.value),delete g.requests[x.id]},g}function m(u){for(var g="self.ready = WebAssembly.instantiate(new Uint8Array(["+new Uint8Array(a)+"]), {}).then(function(result) { result.instance.exports.__wasm_call_ctors(); return result.instance; });self.onmessage = "+b.name+";"+l.toString()+b.toString(),S=new Blob([g],{type:"text/javascript"}),x=URL.createObjectURL(S),M=d.length;M<u;++M)d[M]=p(x);for(var M=u;M<d.length;++M)d[M].object.postMessage({});d.length=u,URL.revokeObjectURL(x)}function y(u,g,S,x,M){for(var w=d[0],T=1;T<d.length;++T)d[T].pending<w.pending&&(w=d[T]);return new Promise(function(v,E){var I=new Uint8Array(S),C=++f;w.pending+=u,w.requests[C]={resolve:v,reject:E},w.object.postMessage({id:C,count:u,size:g,source:I,mode:x,filter:M},[I.buffer])})}function b(u){var g=u.data;self.ready.then(function(S){if(!g.id)return self.close();try{var x=new Uint8Array(g.count*g.size);l(S,S.exports[g.mode],x,g.count,g.size,g.source,S.exports[g.filter]),self.postMessage({id:g.id,count:g.count,action:"resolve",value:x},[x.buffer])}catch(M){self.postMessage({id:g.id,count:g.count,action:"reject",value:M})}})}return{ready:r,supported:!0,useWorkers:function(u){m(u)},decodeVertexBuffer:function(u,g,S,x,M){l(s,s.exports.meshopt_decodeVertexBuffer,u,g,S,x,s.exports[c[M]])},decodeIndexBuffer:function(u,g,S,x){l(s,s.exports.meshopt_decodeIndexBuffer,u,g,S,x)},decodeIndexSequence:function(u,g,S,x){l(s,s.exports.meshopt_decodeIndexSequence,u,g,S,x)},decodeGltfBuffer:function(u,g,S,x,M,w){l(s,s.exports[h[M]],u,g,S,x,s.exports[c[w]])},decodeGltfBufferAsync:function(u,g,S,x,M){return d.length>0?y(u,g,S,h[x],c[M]):r.then(function(){var w=new Uint8Array(u*g);return l(s,s.exports[h[x]],w,u,g,S,s.exports[c[M]]),w})}}})();var wv=(function(){var i="b9H79Tebbbe:6eO9Geueu9Geub9Gbb9Gsuuuuuuuuuuuu99uueu9Gvuuuuub9Gruuuuuuub9Gouuuuuue999Gvuuuuueu9Gzuuuuuuuuuuu99uuuub9Gquuuuuuu99uueu9GPuuuuuuuuuuu99uueu9Gquuuuuuuu99ueu9Gruuuuuu99eu9Gwuuuuuu99ueu9Giuuue999Gluuuueu9Gluuuub9GiuuueuiLQdilvorlwDiqkxmPszbHHbelve9Weiiviebeoweuecj:Gdkr:Bdxo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bbz9TW79O9V9Wt9F79P9T9W29P9M95bw8E9TW79O9V9Wt9F79P9T9W29P9M959x9Pt9OcttV9P9I91tW7bD8A9TW79O9V9Wt9F79P9T9W29P9M959x9Pt9O9v9W9K9HtWbqQ9TW79O9V9Wt9F79P9T9W29P9M959t29V9W9W95bkX9TW79O9V9Wt9F79P9T9W29P9M959qV919UWbxQ9TW79O9V9Wt9F79P9T9W29P9M959q9V9P9Ut7bmX9TW79O9V9Wt9F79P9T9W29P9M959t9J9H2WbPa9TW79O9V9Wt9F9V9Wt9P9T9P96W9wWVtW94SWt9J9O9sW9T9H9Wbs59TW79O9V9Wt9F9NW9UWV9HtW9q9V79Pt9P9V9U9sW9T9H9Wbzl79IV9RbHDwebcekdCXq;y;WeQdbk;r:herYue99iuY99Xue9:D998Jjjjjbcj;sb9Rgs8Kjjjjbcbhzasc:Cefcbc;Kbz:tjjjb8AdnabaeSmbabaeadcdtzMjjjb8AkdnamcdGTmbalcrfci4cbyd1:H:cjbHjjjjbbhHasc:Cefasyd;8egecdtfaHBdbasaecefBd;8ecbhlcbhednadTmbabheadhOinaHaeydbci4fcb86bbaeclfheaOcufgOmbkcbhlabheadhOinaHaeydbgAci4fgCaCRbbgCceaAcrGgAtV86bbaCcu7aA4ceGalfhlaeclfheaOcufgOmbkcualcdtalcFFFFi0Ehekaecbyd1:H:cjbHjjjjbbhzasc:Cefasyd;8egecdtfazBdbasaecefBd;8ealcd4alfhOcehHinaHgecethHaeaO6mbkcbhXcuaecdtgOaecFFFFi0Ecbyd1:H:cjbHjjjjbbhHasc:Cefasyd;8egAcdtfaHBdbasaAcefBd;8eaHcFeaOz:tjjjbhQdnadTmbaecufhLcbhKindndnaQabaKcdtfgYydbgAc:v;t;h;Ev2aLGgOcdtfgCydbgHcuSmbceheinazaHcdtfydbaASmdaOaefhHaecefheaQaHaLGgOcdtfgCydbgHcu9hmbkkazaXcdtfaABdbaCaXBdbaXhHaXcefhXkaYaHBdbaKcefgKad9hmbkkaQcbyd:m:H:cjbH:bjjjbbasasyd;8ecufBd;8ekcbh8AcualcefgecdtaecFFFFi0Ecbyd1:H:cjbHjjjjbbhLasc:Cefasyd;8egecdtfaLBdbasaLBdNeasaecefBd;8ecuadcitadcFFFFe0Ecbyd1:H:cjbHjjjjbbhEasc:Cefasyd;8egecdtfaEBdbasaEBd:yeasaecefBd;8eascNefabadalcbz:cjjjbcualcdtgealcFFFFi0Eg3cbyd1:H:cjbHjjjjbbhOasc:Cefasyd;8egHcdtfaOBdbasaHcefBd;8ea3cbyd1:H:cjbHjjjjbbhQasc:Cefasyd;8egHcdtfaQBdbasaHcefBd;8eaOaQaialavazasc:Cefz:djjjbalcbyd1:H:cjbHjjjjbbhYasc:Cefasyd;8egHcdtfaYBdbasaHcefBd;8ea3cbyd1:H:cjbHjjjjbbhHasc:Cefasyd;8egAcdtfaHBdbasaAcefBd;8ea3cbyd1:H:cjbHjjjjbbhAasc:Cefasyd;8egCcdtfaABdbasaCcefBd;8eaHcFeaez:tjjjbh5aAcFeaez:tjjjbh8EdnalTmbindnaLa8AgAcefg8AcdtfydbgCaLaAcdtgefydbgHSmbaCaH9Rh8FaEaHcitfhaa8Eaefhha5aefhKcbhCindndnaaaCcitfydbgXaA9hmbaKaABdbahaABdbxekdnaLaXcdtggfgeclfydbgHaeydbgeSmbaHae9RhHaEaecitfheinaeydbaASmdaecwfheaHcufgHmbkka8EagfgeaAaXaeydbcuSEBdbaKaXaAaKydbcuSEBdbkaCcefgCa8F9hmbkka8Aal9hmbkaOhHaQhAa5hXa8EhCcbheindndnaeaHydbgK9hmbdnaeaAydbgK9hmbaXydbhKdnaCydbg8Fcu9hmbaKcu9hmbaYaefcb86bbxikdna8FcuSmbaKcuSmbaea8FSmbaOa8FcdtfydbaOaKcdtfydb9hmbaYaefcd86bbxikaYaefhadnaea8FSmbaeaKSmbaace86bbxikaacl86bbxdkdnaeaQaKcdtg8Ffydb9hmbdnaCydbgacuSmbaeaaSmbaXydbggcuSmbaeagSmba8Ea8FfydbghcuSmbahaKSmba5a8Ffydbg8FcuSmba8FaKSmbdnaOaacdtfydbgKaOa8Fcdtfydb9hmbaKaOagcdtfydbg8FSmba8FaOahcdtfydb9hmbaYaefcd86bbxlkaYaefcl86bbxikaYaefcl86bbxdkaYaefcl86bbxekaYaefaYaKfRbb86bbkaHclfhHaAclfhAaXclfhXaCclfhCalaecefge9hmbkdnamcaGTmbcbh8JindndnaYa8Jfg8KRbbg8Lc9:fPibebekdndndnaOa8Jcdtfydbgea8J9hmbdnaqmbcbh8FxdkdnazTmbcbh8Fa8JheinaqazaecdtgefydbfRbbce4a8FVceGh8FaQaefydbgea8J9hmbxikkcbh8Fa8JheinaqaefRbbce4a8FVceGh8FaQaecdtfydbgea8J9hmbxdkkaYaefRbbhexeka8JheindnaLaecdtg8AfgeclfydbgHaeydbgeSmbaHae9RhgaEaecitfhhaOa8AfhacbhKinahaKcitfydbgXhednindnaLaecdtgCfgeclfydbgHaeydbgeSmbaHae9RhHaEaecitfheaaydbhAdninaOaeydbcdtfydbaASmeaecwfheaHcufgHTmdxbkkcbhexdkaQaCfydbgeaX9hmbkceheka8FaeVh8FaKcefgKag9hmbkkaQa8Afydbgea8J9hmbka8Lcia8FceGEheka8Kae86bbka8Jcefg8Jal9hmbkkdnaqTmbdndnazTmbazheaOhHalhAindnaqaeydbfRbbceGTmbaYaHydbfcl86bbkaeclfheaHclfhHaAcufgAmbxdkkaqheaOhHalhAindnaeRbbceGTmbaYaHydbfcl86bbkaecefheaHclfhHaAcufgAmbkkaOhealhAaYhHindnaYaeydbfRbbcl9hmbaHcl86bbkaeclfheaHcefhHaAcufgAmbkkamceGTmbaYhealhHindnaeRbbce9hmbaecl86bbkaecefheaHcufgHmbkkcbh8Mcualcx2alc;v:Q;v:Qe0Ecbyd1:H:cjbHjjjjbbh8Nasc:Cefasyd;8egecdtfa8NBdbasaecefBd;8eascbBd:qeas9cb83i1ea8Naialavazasc1efz:ejjjbhydndnaDmbcbh8PcbhCxekcbhCawhecbhHindnaeIdbJbbbb9ETmbasaCcdtfaHBdbaCcefhCkaeclfheaDaHcefgH9hmbkcuaCal2gecdtaecFFFFi0Ecbyd1:H:cjbHjjjjbbh8Pasc:Cefasyd;8egecdtfa8PBdbasaecefBd;8ealTmbdnaCmbcbhCxekarcd4hgdnazTmbaCcdthhcbh8Fa8Phainaoaza8Fcdtfydbag2cdtfhKasheaahHaChAinaHaKaeydbcdtgXfIdbawaXfIdbNUdbaeclfheaHclfhHaAcufgAmbkaaahfhaa8Fcefg8Fal9hmbxdkkaCcdthhcbh8Fa8Phainaoa8Fag2cdtfhKasheaahHaChAinaHaKaeydbcdtgXfIdbawaXfIdbNUdbaeclfheaHclfhHaAcufgAmbkaaahfhaa8Fcefg8Fal9hmbkkcualc8S2gHalc;D;O;f8U0EgXcbyd1:H:cjbHjjjjbbheasc:Cefasyd;8egAcdtfaeBdbasaAcefBd;8eaecbaHz:tjjjbhIcbh8RcbhgdnaCTmbcbh8MaXcbyd1:H:cjbHjjjjbbhgasc:Cefasyd;8egecdtfagBdbasaecefBd;8eagcbaHz:tjjjb8AcuaCal2gecltgHaecFFFFb0Ecbyd1:H:cjbHjjjjbbh8Rasc:Cefasyd;8egecdtfa8RBdbasaecefBd;8ea8RcbaHz:tjjjb8AamcjjjjdGTmbcualcltgealcFFFFb0Ecbyd1:H:cjbHjjjjbbh8Masc:Cefasyd;8egHcdtfa8MBdbasaHcefBd;8ea8Mcbaez:tjjjb8AkdnadTmbcbhKabhHina8NaHclfydbg8Fcx2fgeIdba8NaHydbgacx2fgAIdbg8S:tgRa8NaHcwfydbghcx2fgXIdlaAIdlg8U:tg8VNaeIdla8U:tg8WaXIdba8S:tg8XN:tg8Ya8YNa8WaXIdwaAIdwg8Z:tg80NaeIdwa8Z:tg8Wa8VN:tg81a81Na8Wa8XNaRa80N:tg80a80NMMg8V:rhBa8Yh8Xa80h8Wa81hRdna8VJbbbb9EgATmba8YaB:vh8Xa80aB:vh8Wa81aB:vhRkaIaOaacdtfydbgXc8S2fgeaRaB:rg8VaRNNg83aeIdbMUdbaea8Wa8Va8WNgUNg85aeIdlMUdlaea8Xa8Va8XNg86Ng87aeIdwMUdwaeaRaUNgUaeIdxMUdxaea86aRNg88aeIdzMUdzaea8Wa86Ng89aeIdCMUdCaeaRa8Va8Xa8ZNaRa8SNa8Ua8WNMM:mg8:Ng86NgRaeIdKMUdKaea8Wa86Ng8WaeId3MUd3aea8Xa86Ng8XaeIdaMUdaaea86a8:Ng86aeId8KMUd8Kaea8VaeIdyMUdyaIaOa8Fcdtfydbg8Fc8S2fgea83aeIdbMUdbaea85aeIdlMUdlaea87aeIdwMUdwaeaUaeIdxMUdxaea88aeIdzMUdzaea89aeIdCMUdCaeaRaeIdKMUdKaea8WaeId3MUd3aea8XaeIdaMUdaaea86aeId8KMUd8Kaea8VaeIdyMUdyaIaOahcdtfydbgac8S2fgea83aeIdbMUdbaea85aeIdlMUdlaea87aeIdwMUdwaeaUaeIdxMUdxaea88aeIdzMUdzaea89aeIdCMUdCaeaRaeIdKMUdKaea8WaeId3MUd3aea8XaeIdaMUdaaea86aeId8KMUd8Kaea8VaeIdyMUdydna8MTmbdnaATmba8YaB:vh8Ya80aB:vh80a81aB:vh81ka8MaXcltfgeaBJbbbZNgRa80Ng8VaeIdlMUdlaeaRa8YNg8WaeIdwMUdwaeaRa81Ng8XaeIdbMUdbaeaRa8S:ma81Na8Ua80N:ta8Za8YN:tNgRaeIdxMUdxa8Ma8Fcltfgea8VaeIdlMUdlaea8WaeIdwMUdwaea8XaeIdbMUdbaeaRaeIdxMUdxa8Maacltfgea8VaeIdlMUdlaea8WaeIdwMUdwaea8XaeIdbMUdbaeaRaeIdxMUdxkaHcxfhHaKcifgKad6mbkkdnalTmbJq;x8J88J;n;m;m89J:v:;;w8ZamczGEamc;abGEh80cbhHaOhXazhKaIhea8NhAindnaHaXydb9hmbaHh8FdnazTmbaKydbh8Fka80hRdnaqTmbJbbjZa80aqa8FfRbbclGEhRkaecxfg8Fa8FIdbJbbbbMUdbaeczfg8Fa8FIdbJbbbbMUdbaecCfg8Fa8FIdbJbbbbMUdbaeaRaecyfg8FIdbg8YNgRaeIdbMUdbaeclfgaaRaaIdbMUdbaecwfgaaRaaIdbMUdbaecKfgaaaIdbaAIdbg8WaRN:tUdbaAcwfIdbh8Vaec3fgaaaIdbaRaAclfIdbg8XN:tUdbaecafgaaaIdbaRa8VN:tUdbaec8KfgaIdbh81a8Fa8YaRMUdbaaa81aRa8Va8VNa8Wa8WNa8Xa8XNMMNMUdbkaXclfhXaKclfhKaec8SfheaAcxfhAalaHcefgH9hmbkkdnadTmbcbh8Aabhainaba8Acdtfh8FcbhHinaYa8FaHc:G:G:cjbfydbcdtfydbgAfRbbhedndnaYaaaHfydbgXfRbbgKc99fcFeGcpe0mbaec99fcFeGc;:e6mekdnaKcufcFeGce0mba5aXcdtfydbaA9hmekdnaecufcFeGce0mba8EaAcdtfydbaX9hmekJbbacJbbacJbbbZaecFeGceSEaKcFeGceSEhUdna8Na8FaHc:K:G:cjbfydbcdtfydbcx2fgeIdwa8NaXcx2fgKIdwg86:tg8Sa8NaAcx2fghIdwa86:tg8Xa8XNahIdbaKIdbg8U:tg80a80NahIdlaKIdlg8Z:tg8Va8VNMMg81Na8Xa8Sa8XNaeIdba8U:tg83a80Na8VaeIdla8Z:tg85NMMg8WN:tg8Ya8YNa83a81Na80a8WN:tgRaRNa85a81Na8Va8WN:tg8Wa8WNMMgBJbbbb9ETmba8YaB:rgB:vh8Ya8WaB:vh8WaRaB:vhRkaUa81:rNgBa8Ya86NaRa8UNa8Za8WNMM:mg81Ng87a81Nh88a80a85Na8Va83N:tg81a81Na8Va8SNa8Xa85N:tg8Va8VNa8Xa83Na80a8SN:tg8Xa8XNMMg83:rh80a8Ya87Nh85a8Wa87Nh89aRa87Nh87a8WaBa8YNg8SNh8:a8SaRNhZaRaBa8WNgnNhca8Ya8SNh8Ya8WanNh8WaRaBaRNNh8Sdna83Jbbbb9ETmba81a80:vh81a8Xa80:vh8Xa8Va80:vh8VkaIaOaXcdtfydbc8S2fgeaeIdba8Sa8VaUa80:rNgRa8VNNMg80MUdbaea8Wa8XaRa8XNg8SNMg83aeIdlMUdlaea8Ya81aRa81Ng8WNMg8YaeIdwMUdwaeaca8Va8SNMg8SaeIdxMUdxaeaZa8Wa8VNMgUaeIdzMUdzaea8:a8Xa8WNMg8WaeIdCMUdCaea87a8VaRa81a86Na8Va8UNa8Za8XNMMg86:mNgRNMg8VaeIdKMUdKaea89a8XaRNMg8XaeId3MUd3aea85a81aRNMg81aeIdaMUdaaea88a86aRN:tgRaeId8KMUd8KaeaBaeIdyMUdyaIaOaAcdtfydbc8S2fgea80aeIdbMUdbaea83aeIdlMUdlaea8YaeIdwMUdwaea8SaeIdxMUdxaeaUaeIdzMUdzaea8WaeIdCMUdCaea8VaeIdKMUdKaea8XaeId3MUd3aea81aeIdaMUdaaeaRaeId8KMUd8KaeaBaeIdyMUdykaHclfgHcx9hmbkaacxfhaa8Acifg8Aad6mbkaCTmbcbhainJbbbbh80a8Nabaacdtfgeclfydbg8Fcx2fgHIdwa8Naeydbghcx2fgAIdwg8Z:tg8Va8VNaHIdbaAIdbg83:tg8Wa8WNaHIdlaAIdlg85:tg8Xa8XNMMg8Sa8Naecwfydbg8Acx2fgeIdwa8Z:tg8YNa8Va8YNa8WaeIdba83:tg81Na8XaeIdla85:tgBNMMgRa8VN:tJbbbbJbbjZa8Sa8Ya8YNa81a81NaBaBNMMg8UNaRaRN:tg86:va86Jbbbb9BEg86Nh88a8Ua8VNaRa8YN:ta86Nh89a8SaBNaRa8XN:ta86Nh8:a8Ua8XNaRaBN:ta86NhZa8Sa81NaRa8WN:ta86Nhna8Ua8WNaRa81N:ta86Nhca8WaBNa8Xa81N:tgRaRNa8Xa8YNa8VaBN:tgRaRNa8Va81Na8Wa8YN:tgRaRNMM:rJbbbZNhRa8PahaC2g8JcdtfhHa8Pa8AaC2gDcdtfhAa8Pa8FaC2g8KcdtfhXa8Z:mh9ca85:mhJa83:mh9eascjdfheaChKJbbbbhBJbbbbh86Jbbbbh8SJbbbbh8UJbbbbh8ZJbbbbh83Jbbbbh85Jbbbbh87JbbbbhUinaecwfaRa89aXIdbaHIdbg8Y:tg8XNa88aAIdba8Y:tg81NMg8VNUdbaeclfaRaZa8XNa8:a81NMg8WNUdbaeaRaca8XNana81NMg8XNUdbaecxfaRa9ca8VNaJa8WNa8Ya9ea8XNMMMg8YNUdbaRa8Va8WNNa8ZMh8ZaRa8Va8XNNa8UMh8UaRa8Wa8XNNa8SMh8SaRa8Ya8YNNaUMhUaRa8Va8YNNa87Mh87aRa8Wa8YNNa85Mh85aRa8Xa8YNNa83Mh83aRa8Va8VNNa86Mh86aRa8Wa8WNNaBMhBaRa8Xa8XNNa80Mh80aHclfhHaXclfhXaAclfhAaeczfheaKcufgKmbkagahc8S2fgea80aeIdbMUdbaeaBaeIdlMUdlaea86aeIdwMUdwaea8SaeIdxMUdxaea8UaeIdzMUdzaea8ZaeIdCMUdCaea83aeIdKMUdKaea85aeId3MUd3aea87aeIdaMUdaaeaUaeId8KMUd8KaeaRaeIdyMUdyaga8Fc8S2fgea80aeIdbMUdbaeaBaeIdlMUdlaea86aeIdwMUdwaea8SaeIdxMUdxaea8UaeIdzMUdzaea8ZaeIdCMUdCaea83aeIdKMUdKaea85aeId3MUd3aea87aeIdaMUdaaeaUaeId8KMUd8KaeaRaeIdyMUdyaga8Ac8S2fgea80aeIdbMUdbaeaBaeIdlMUdlaea86aeIdwMUdwaea8SaeIdxMUdxaea8UaeIdzMUdzaea8ZaeIdCMUdCaea83aeIdKMUdKaea85aeId3MUd3aea87aeIdaMUdaaeaUaeId8KMUd8KaeaRaeIdyMUdya8Ra8Jcltfh8FcbhHaChXina8FaHfgeascjdfaHfgAIdbaeIdbMUdbaeclfgKaAclfIdbaKIdbMUdbaecwfgKaAcwfIdbaKIdbMUdbaecxfgeaAcxfIdbaeIdbMUdbaHczfhHaXcufgXmbka8Ra8Kcltfh8FcbhHaChXina8FaHfgeascjdfaHfgAIdbaeIdbMUdbaeclfgKaAclfIdbaKIdbMUdbaecwfgKaAcwfIdbaKIdbMUdbaecxfgeaAcxfIdbaeIdbMUdbaHczfhHaXcufgXmbka8RaDcltfh8FcbhHaChXina8FaHfgeascjdfaHfgAIdbaeIdbMUdbaeclfgKaAclfIdbaKIdbMUdbaecwfgKaAcwfIdbaKIdbMUdbaecxfgeaAcxfIdbaeIdbMUdbaHczfhHaXcufgXmbkaacifgaad6mbkkcbhAdndnamcwGgTmbJbbbbh8ScbhScbh9hcbh9ixekcbhSa3cbyd1:H:cjbHjjjjbbh9iasc:Cefasyd;8egecdtfa9iBdbasaecefBd;8ecua9ialabadaOz:fjjjbgXcltaXcjjjjiGEcbyd1:H:cjbHjjjjbbh9hasc:Cefasyd;8egecdtfa9hBdbasaecefBd;8ea9haXa9ia8Nalz:gjjjbJFFuuh8SaXTmba9hheaXhHinaeIdbgRa8Sa8SaR9EEh8SaeclfheaHcufgHmbkaXhSkdnalTmbaLclfheaLydbhXaYhHalhKcbhAincbaeydbg8FaX9RaHRbbcpeGEaAfhAaHcefhHaeclfhea8FhXaKcufgKmbkaAce4hAkcuadaA9Rcifg6cx2a6c;v:Q;v:Qe0Ecbyd1:H:cjbHjjjjbbh9kasc:Cefasyd;8egecdtfa9kBdbasaecefBd;8ecua6cdta6cFFFFi0Ecbyd1:H:cjbHjjjjbbh0asc:Cefasyd;8egecdtfa0BdbasaecefBd;8ea3cbyd1:H:cjbHjjjjbbh9masc:Cefasyd;8egecdtfa9mBdbasaecefBd;8ealcbyd1:H:cjbHjjjjbbh9nasc:Cefasyd;8egecdtfa9nBdbasaecefBd;8eaxaxNayJbbjZamclGEgZaZN:vh87JbbbbhUdnadak9nmbdna6ci6mbaCclth9oa9kcwfh9pJbbbbh85JbbbbhUinascNefabadalaOz:cjjjbabh8Acbh9qcbh9rinaba9rcdtfhDcbheindnaOa8AaefydbgAcdtghfydbgXaOaDaec:W:G:cjbfydbcdtfydbgHcdtg8JfydbgKSmbaYaHfRbbgacv2aYaAfRbbg8FfRb;a:G:cjbg8La8Fcv2aafg8KRb;a:G:cjbg3VcFeGTmbdnaKaX9nmba8KRb;G:G:cjbcFeGmekdna8FcufcFeGce0mbaaTmba5ahfydbaH9hmekdna8FTmbaacufcFeGce0mba8Ea8JfydbaA9hmeka9ka9qcx2fgXaHaAa3cFeGgKEBdlaXaAaHaKEBdbaXaKa8LGcb9hBdwa9qcefh9qkaeclfgecx9hmbkdna9rcifg9rad9pmba8Acxfh8Aa9qcifa69nmekka9qTmdcbh8KinaIaOa9ka8Kcx2fghydbgKcdtgXfydbg8Ac8S2fgeIdwa8Nahydlg8Fcx2fgHIdwg8WNaeIdzaHIdbg8XNaeIdaMgRaRMMa8WNaeIdlaHIdlg8YNaeIdCa8WNaeId3MgRaRMMa8YNaeIdba8XNaeIdxa8YNaeIdKMgRaRMMa8XNaeId8KMMM:lhRJbbbbJbbjZaeIdyg8V:va8VJbbbb9BEh8VdndnahydwgDmbJFFuuh86xekJbbbbJbbjZaIaOa8Fcdtfydbc8S2fgeIdyg81:va81Jbbbb9BEaeIdwa8NaKcx2fgHIdwg81NaeIdzaHIdbg80NaeIdaMgBaBMMa81NaeIdlaHIdlgBNaeIdCa81NaeId3Mg81a81MMaBNaeIdba80NaeIdxaBNaeIdKMg81a81MMa80NaeId8KMMM:lNh86ka8VaRNhBdnaCTmbagaKc8S2fgAIdwa8WNaAIdza8XNaAIdaMgRaRMMa8WNaAIdla8YNaAIdCa8WNaAId3MgRaRMMa8YNaAIdba8XNaAIdxa8YNaAIdKMgRaRMMa8XNaAId8KMMMhRa8Pa8FaC2gacdtfhHa8RaKaC2g8JcltfheaAIdyh81aChAinaHIdbg8Va8Va81NaecxfIdba8WaecwfIdbNa8XaeIdbNa8YaeclfIdbNMMMg8Va8VM:tNaRMhRaHclfhHaeczfheaAcufgAmbkdndnaDmbJbbbbh8Vxekaga8Fc8S2fgAIdwa8NaKcx2fgeIdwg8XNaAIdzaeIdbg8YNaAIdaMg8Va8VMMa8XNaAIdlaeIdlg81NaAIdCa8XNaAId3Mg8Va8VMMa81NaAIdba8YNaAIdxa81NaAIdKMg8Va8VMMa8YNaAId8KMMMh8Va8Pa8JcdtfhHa8RaacltfheaAIdyh80aChAinaHIdbg8Wa8Wa80NaecxfIdba8XaecwfIdbNa8YaeIdbNa81aeclfIdbNMMMg8Wa8WM:tNa8VMh8VaHclfhHaeczfheaAcufgAmbka8V:lh8VkaBaR:lMhBa86a8VMh86dndndnaYaKfRbbc9:fPddbekaQaXfydbgXaKSmbaOa8Fcdtfydbh8Jindndna5aXcdtgafydbgecuSmbaOaecdtfydba8JSmekdna8EaafydbgecuSmbaOaecdtfydba8JSmeka8FhekagaXc8S2fgAIdwa8Naecx2fgHIdwg8WNaAIdzaHIdbg8XNaAIdaMgRaRMMa8WNaAIdlaHIdlg8YNaAIdCa8WNaAId3MgRaRMMa8YNaAIdba8XNaAIdxa8YNaAIdKMgRaRMMa8XNaAId8KMMMhRa8PaeaC2cdtfhHa8RaXaC2cltfheaAIdyh81aChAinaHIdbg8Va8Va81NaecxfIdba8WaecwfIdbNa8XaeIdbNa8YaeclfIdbNMMMg8Va8VM:tNaRMhRaHclfhHaeczfheaAcufgAmbkaBaR:lMhBaQaafydbgXaK9hmbkkaYa8FfRbbci9hmeaDTmeaQa8FcdtfydbgXa8FSmeindndna5aXcdtgafydbgecuSmbaOaecdtfydba8ASmekdna8EaafydbgecuSmbaOaecdtfydba8ASmekaKhekagaXc8S2fgAIdwa8Naecx2fgHIdwg8WNaAIdzaHIdbg8XNaAIdaMgRaRMMa8WNaAIdlaHIdlg8YNaAIdCa8WNaAId3MgRaRMMa8YNaAIdba8XNaAIdxa8YNaAIdKMgRaRMMa8XNaAId8KMMMhRa8PaeaC2cdtfhHa8RaXaC2cltfheaAIdyh81aChAinaHIdbg8Va8Va81NaecxfIdba8WaecwfIdbNa8XaeIdbNa8YaeclfIdbNMMMg8Va8VM:tNaRMhRaHclfhHaeczfheaAcufgAmbka86aR:lMh86aQaafydbgXa8F9hmbxdkkdna8Ea5a5aXfydba8FSEaQaXfydbgacdtfydbgXcu9hmbaQa8FcdtfydbhXkagaac8S2fgAIdwa8NaXcx2fgeIdwg8WNaAIdzaeIdbg8XNaAIdaMgRaRMMa8WNaAIdlaeIdlg8YNaAIdCa8WNaAId3MgRaRMMa8YNaAIdba8XNaAIdxa8YNaAIdKMgRaRMMa8XNaAId8KMMMhRa8PaXaC2g8AcdtfhHa8RaaaC2g8JcltfheaAIdyh81aChAinaHIdbg8Va8Va81NaecxfIdba8WaecwfIdbNa8XaeIdbNa8YaeclfIdbNMMMg8Va8VM:tNaRMhRaHclfhHaeczfheaAcufgAmbkdndnaDmbJbbbbh8VxekagaXc8S2fgAIdwa8Naacx2fgeIdwg8XNaAIdzaeIdbg8YNaAIdaMg8Va8VMMa8XNaAIdlaeIdlg81NaAIdCa8XNaAId3Mg8Va8VMMa81NaAIdba8YNaAIdxa81NaAIdKMg8Va8VMMa8YNaAId8KMMMh8Va8Pa8JcdtfhHa8Ra8AcltfheaAIdyh80aChAinaHIdbg8Wa8Wa80NaecxfIdba8XaecwfIdbNa8YaeIdbNa81aeclfIdbNMMMg8Wa8WM:tNa8VMh8VaHclfhHaeczfheaAcufgAmbka8V:lh8VkaBaR:lMhBa86a8VMh86kaha86aBa86aB9DgeEUdwahaKa8FaeaDcb9hGgeEBdlaha8FaKaeEBdba8Kcefg8Ka9q9hmbkascjdfcbcj;qbz:tjjjb8Aa9phea9qhHinascjdfaeydbcA4cF8FGgAcFAaAcFA6EcdtfgAaAydbcefBdbaecxfheaHcufgHmbkcbhecbhHinascjdfaefgAydbhXaAaHBdbaXaHfhHaeclfgecj;qb9hmbkcbhea9phHinascjdfaHydbcA4cF8FGgAcFAaAcFA6EcdtfgAaAydbgAcefBdba0aAcdtfaeBdbaHcxfhHa9qaecefge9hmbkadak9RgAci9Uh9sdnalTmbcbhea9mhHinaHaeBdbaHclfhHalaecefge9hmbkkcbh9ta9ncbalz:tjjjbh3aAcO9Uh9ua9sce4h9rcbh8Lcbh8Kdnina9ka0a8Kcdtfydbcx2fg8JIdwgRa879Emea8La9s9pmeJFFuuh8Vdna9ra9q9pmba9ka0a9rcdtfydbcx2fIdwJbb;aZNh8VkdnaRa8V9ETmbaRaU9ETmba8La9u0mdkdna3aOa8JydlgDcdtg9vfg8AydbgAfg9wRbba3aOa8Jydbghcdtg9xfydbgefg9yRbbVmbaYahfRbbh9zdndnaLaecdtfgHclfydbgXaHydbgHSmbaXaH9RhXa8NaAcx2fh8Fa8Naecx2fhaaEaHcitfheindna9maeydbcdtfydbgHaASmba9maeclfydbcdtfydbgKaASmbaHaKSmba8NaKcx2fgKIdba8NaHcx2fgHIdbg8W:tgRaaIdlaHIdlg8X:tg80NaKIdla8X:tg8VaaIdba8W:tgBN:tg8YaRa8FIdla8X:tg86Na8Va8FIdba8W:tg8UN:tg8XNa8VaaIdwaHIdwg81:tg8ZNaKIdwa81:tg8Wa80N:tg80a8Va8FIdwa81:tg83Na8Wa86N:tg8VNa8WaBNaRa8ZN:tg81a8Wa8UNaRa83N:tgRNMMa8Ya8YNa80a80Na81a81NMMa8Xa8XNa8Va8VNaRaRNMMN:rJbbj8:N9FmikaecwfheaXcufgXmbkkdndndndna9zc9:fPdebdkahheina8AydbhAdndna5aecdtgHfydbgecuSmbaOaecdtfydbaASmekdna8EaHfydbgecuSmbaOaecdtfydbaASmekaDheka9maHfaeBdbaQaHfydbgeah9hmbxikkdna8Ea5a5a9xfydbaDSEaQa9xfydbghcdtfydbgecu9hmbaQa9vfydbheka9ma9xfaDBdbaehDka9mahcdtfaDBdbka9yce86bba9wce86bba8JIdwgRaUaUaR9DEhUa9tcefh9tcecda9zceSEa8Lfh8Lxeka9rcefh9rka8Kcefg8Ka9q9hmbkka9tTmddnalTmbcbh8Fcbhhindna9mahcdtgefydbgAahSmbaOaAcdtfydbh8AdnahaOaefydb9hg8JmbaIa8Ac8S2fgeaIahc8S2fgHIdbaeIdbMUdbaeaHIdlaeIdlMUdlaeaHIdwaeIdwMUdwaeaHIdxaeIdxMUdxaeaHIdzaeIdzMUdzaeaHIdCaeIdCMUdCaeaHIdKaeIdKMUdKaeaHId3aeId3MUd3aeaHIdaaeIdaMUdaaeaHId8KaeId8KMUd8KaeaHIdyaeIdyMUdya8MTmba8Ma8Acltfgea8MahcltfgHIdbaeIdbMUdbaeaHIdlaeIdlMUdlaeaHIdwaeIdwMUdwaeaHIdxaeIdxMUdxkaCTmbagaAc8S2fgeagahc8S2gDfgHIdbaeIdbMUdbaeaHIdlaeIdlMUdlaeaHIdwaeIdwMUdwaeaHIdxaeIdxMUdxaeaHIdzaeIdzMUdzaeaHIdCaeIdCMUdCaeaHIdKaeIdKMUdKaeaHId3aeId3MUd3aeaHIdaaeIdaMUdaaeaHId8KaeId8KMUd8KaeaHIdyaeIdyMUdya9oaA2haa8RhHaChXinaHaafgeaHa8FfgAIdbaeIdbMUdbaeclfgKaAclfIdbaKIdbMUdbaecwfgKaAcwfIdbaKIdbMUdbaecxfgeaAcxfIdbaeIdbMUdbaHczfhHaXcufgXmbka8JmbJbbbbJbbjZaIaDfgeIdygR:vaRJbbbb9BEaeIdwa8Na8Acx2fgHIdwgRNaeIdzaHIdbg8VNaeIdaMg8Wa8WMMaRNaeIdlaHIdlg8WNaeIdCaRNaeId3MgRaRMMa8WNaeIdba8VNaeIdxa8WNaeIdKMgRaRMMa8VNaeId8KMMM:lNgRa85a85aR9DEh85ka8Fa9ofh8Fahcefghal9hmbkcbhHa5heindnaeydbgAcuSmbdnaHa9maAcdtgXfydbgA9hmbcuhAa5aXfydbgXcuSmba9maXcdtfydbhAkaeaABdbkaeclfhealaHcefgH9hmbkcbhHa8EheindnaeydbgAcuSmbdnaHa9maAcdtgXfydbgA9hmbcuhAa8EaXfydbgXcuSmba9maXcdtfydbhAkaeaABdbkaeclfhealaHcefgH9hmbkka85aUaCEh85cbhHabhecbhAindnaOa9maeydbcdtfydbg8FcdtfydbgXaOa9maeclfydbcdtfydbgacdtfydbgKSmbaXaOa9maecwfydbcdtfydbg8AcdtfydbghSmbaKahSmbabaHcdtfgXa8FBdbaXcwfa8ABdbaXclfaaBdbaHcifhHkaecxfheaAcifgAad6mbkdndnaTmbaHhdxekdnaHak0mbaHhdxekdna8Sa859FmbaHhdxekJFFuuh8ScbhdabhecbhAindna9ha9iaeydbgXcdtfydbcdtfIdbgRa859ETmbaeclf8Pdbh9AabadcdtfgKaXBdbaKclfa9A83dbaRa8Sa8SaR9EEh8SadcifhdkaecxfheaAcifgAaH6mbkkadak0mbxdkkascNefabadalaOz:cjjjbkdndnadak0mbadhaxekdnaTmbadhaxekdna8Sa879FmbadhaxekcehKina8SJbb;aZNgRa87aRa879DEh8WJbbbbhRdnaSTmba9hheaShHinaeIdbg8VaRa8Va8W9FEaRa8VaR9EEhRaeclfheaHcufgHmbkkJFFuuh8ScbhaabhecbhHindna9ha9iaeydbgAcdtfydbcdtfIdbg8Va8W9ETmbaeclf8Pdbh9AabaacdtfgXaABdbaXclfa9A83dba8Va8Sa8Sa8V9EEh8SaacifhakaecxfheaHcifgHad6mbkdnaKaaad9hVceGmbadhaxdkaRaUaUaR9DEhUaaak9nmecbhKaahda8Sa879FmbkkdnamcjjjjdGTmba9ncbalz:tjjjbh8AdnaaTmbabheaahHina8AaeydbgAfce86bba8AaOaAcdtfydbfce86bbaeclfheaHcufgHmbkkascNefabaaalaOz:cjjjbdndnalTmbcbhXindna8AaXfRbbTmbdnaYaXfRbbgecl0mbceaetcQGmekdnaOaXcdtg8FfydbgeaXSmba8NaXcx2fgHa8Naecx2fgeydwBdwaHae8Pdb83dbxekaIaXc8S2fgKIdygcacJL:3;rUNgRMh87aKIdwg9BaRMh8SaKIdlg9CaRMh8UaKIdbg9DaRMh81aKIdag9EaRa8NaXcx2fg8JIdwg88N:th8ZaKId3g9FaRa8JIdlg89N:th83aKIdKg9Ga8JIdbg8:aRN:th80JbbbbhnaKIdCg9HJbbbbMh85aKIdzg9IJbbbbMhBaKIdxg9JJbbbbMh86dndnaCTmbaXhAinJbbbba87agaAc8S2fgHIdygR:vaRJbbbb9BEhRa8RaAaC2cltfheaHIdaa87Na8ZMh8ZaHId3a87Na83Mh83aHIdKa87Na80Mh80aHIdCa87Na85Mh85aHIdza87NaBMhBaHIdxa87Na86Mh86aHIdwa87Na8SMh8SaHIdla87Na8UMh8UaHIdba87Na81Mh81aChHina8ZaecwfIdbg8VaecxfIdbg8YNaRN:th8Za83aeclfIdbg8Wa8YNaRN:th83a85a8Wa8VNaRN:th85a81aeIdbg8Xa8XNaRN:th81a80a8Xa8YNaRN:th80aBa8Xa8VNaRN:thBa86a8Xa8WNaRN:th86a8Sa8Va8VNaRN:th8Sa8Ua8Wa8WNaRN:th8UaeczfheaHcufgHmbkaQaAcdtfydbgAaX9hmbka8MTmba8MaXcltfgeIdxhxaeIdwh9caeIdlhJaeIdbhRxekJbbbbhxJbbbbh9cJbbbbhJJbbbbhRkaBa81:vg8Wa80Na8Z:ta85aBa86a81:vg8VN:tg8Za8Ua86a8VN:tg8Y:vg8Xa8Va80Na83:tg8UN:th83a9caRa8WN:taJaRa8VN:tg86a8XN:tg85a8SaBa8WN:ta8Za8XN:tgB:vg8S:mh8Za86a8Y:vg9c:mhJdnJbbbbaRaRa81:vg9eN:ta86a9cN:ta85a8SN:tg86:la87J:983:g81NgR9ETmba8Za83NaJa8UNa9ea80Nax:tMMa86:vhnka81:laR9ETmba8Y:laR9ETmbaB:laR9ETmba9e:manNa8W:ma8ZanNa83aB:vMgBNa8V:maJanNa8X:maBNa8Ua8Y:vMMg85Na80:ma81:vMMMh87aLa8FfgeclfydbgHaeydbge9RhhaEaecitfh8FJbbbbhRdnaHaeSgDmbJbbbbhRa8FheahhAina8Naeclfydbcx2fgHIdwa88:tg8Va8VNaHIdba8::tg8Va8VNaHIdla89:tg8Va8VNMMg8Va8Naeydbcx2fgHIdwa88:tg8Wa8WNaHIdba8::tg8Wa8WNaHIdla89:tg8Wa8WNMMg8WaRaRa8W9DEgRaRa8V9DEhRaecwfheaAcufgAmbkaR:rgRaRNhRkaBa88:tg8Va8VNa87a8::tg8Va8VNa85a89:tg8Va8VNMMaR9EmbaKId8KhndnaDmbina8Na8Fclfydbcx2fgeIdba8Na8Fydbcx2fgHIdbg8W:tgRa89aHIdlg8X:tg80NaeIdla8X:tg8Va8:a8W:tg86N:tg8YaRa85a8X:tg8SNa8Va87a8W:tg8UN:tg8XNa8Va88aHIdwg81:tg8ZNaeIdwa81:tg8Wa80N:tg80a8VaBa81:tg83Na8Wa8SN:tg8VNa8Wa86NaRa8ZN:tg81a8Wa8UNaRa83N:tgRNMMa8Ya8YNa80a80Na81a81NMMa8Xa8XNa8Va8VNaRaRNMMN:rJbbj8:N9Fmda8Fcwfh8FahcufghmbkkJbbbbJbbjZac:vacJbbbb9BEgRa9BaBNa9Ia87Na9EMg8Va8VMMaBNa9Ca85Na9HaBNa9FMg8Va8VMMa85Na9Da87Na9Ja85Na9GMg8Va8VMMa87NanMMM:lNaRa9Ba88Na9Ia8:Na9EMg8Va8VMMa88Na9Ca89Na9Ha88Na9FMg8Va8VMMa89Na9Da8:Na9Ja89Na9GMg8Va8VMMa8:NanMMM:lNJbb;aZNJ:983:g81M9Emba8JaBUdwa8Ja85Udla8Ja87UdbkaXcefgXal9hmbkdnaCmbcbhCxdkcbhXindna8AaXfRbbTmbaOaXcdtgefydbaX9hmbaYaXfhhaQaefh8Ja8NaXcx2fhAa8PaXaC2cdtfhDcbhEincuhLdnahRbbci9hmbaXhLa8JydbgeaXSmba8PaEcdtgHfhKaDaHfIdbhRaXhLinaLhHcuhLdnaKaeaC2cdtfIdbaR9CmbaHcuSmbaHhLagaec8S2fIdyagaHc8S2fIdy9ETmbaehLkaQaecdtfydbgeaX9hmbkka8PaEcdtfhKa8RaEcltfh8FaXheinaKaeaC2cdtfJbbbbJbbjZagaeaLaLcuSEgHc8S2fIdygR:vaRJbbbb9BEa8FaHaC2cltfgHIdwaAIdwNaHIdbaAIdbNaHIdlaAIdlNMMaHIdxMNUdbaQaecdtfydbgeaX9hmbkaEcefgEaC9hmbkkaXcefgXal9hmbxdkkaCmbcbhCkaiavaoarawaCala8Na8Pazasayasc1efaYa8Aaqz:hjjjbkdnamcjjjjlGTmbazmbaaTmbabhecbhLinaYaeydbgAfRbbc3thQaecwfgXydbhHcjjjj94hCdna5aAcdtgEfydbaeclfgKydbgOSmbcjjjj94cba8EaOcdtfydbaASEhCkaeaQaCVaAVBdbaYaOfRbbc3th8Fcjjjj94hCcjjjj94hQdna5aOcdtfydbaHSmbcjjjj94cba8EaHcdtfydbaOSEhQkaKa8FaQVaOVBdbaYaHfRbbc3thOdna5aHcdtfydbaASmbcjjjj94cba8EaEfydbaHSEhCkaXaOaCVaHVBdbaecxfheaLcifgLaa6mbkkdnazTmbaaTmbaaheinabazabydbcdtfydbBdbabclfhbaecufgembkkdnaPTmbaPaZaU:rNUdbkdnasyd;8egHTmbaHcdtasc:Ceffc98fheinaeydbcbyd:m:H:cjbH:bjjjbbaec98fheaHcufgHmbkkascj;sbf8Kjjjjbaak;Yieouabydlhvabydbclfcbaicdtz:tjjjbhoadci9UhrdnadTmbdnalTmbaehwadhDinaoalawydbcdtfydbcdtfgqaqydbcefBdbawclfhwaDcufgDmbxdkkaehwadhDinaoawydbcdtfgqaqydbcefBdbawclfhwaDcufgDmbkkdnaiTmbcbhDaohwinawydbhqawaDBdbawclfhwaqaDfhDaicufgimbkkdnadci6mbinaecwfydbhwaeclfydbhDaeydbhidnalTmbalawcdtfydbhwalaDcdtfydbhDalaicdtfydbhikavaoaicdtfgqydbcitfaDBdbavaqydbcitfawBdlaqaqydbcefBdbavaoaDcdtfgqydbcitfawBdbavaqydbcitfaiBdlaqaqydbcefBdbavaoawcdtfgwydbcitfaiBdbavawydbcitfaDBdlawawydbcefBdbaecxfhearcufgrmbkkabydbcbBdbk:todDue99aicd4aifhrcehwinawgDcethwaDar6mbkcuaDcdtgraDcFFFFi0Ecbyd1:H:cjbHjjjjbbhwaoaoyd9GgqcefBd9GaoaqcdtfawBdbawcFearz:tjjjbhkdnaiTmbalcd4hlaDcufhxcbhminamhDdnavTmbavamcdtfydbhDkcbadaDal2cdtfgDydlgwawcjjjj94SEgwcH4aw7c:F:b:DD2cbaDydbgwawcjjjj94SEgwcH4aw7c;D;O:B8J27cbaDydwgDaDcjjjj94SEgDcH4aD7c:3F;N8N27axGhwamcdthPdndndnavTmbakawcdtfgrydbgDcuSmeadavaPfydbal2cdtfgsIdbhzcehqinaqhrdnadavaDcdtfydbal2cdtfgqIdbaz9CmbaqIdlasIdl9CmbaqIdwasIdw9BmlkarcefhqakawarfaxGgwcdtfgrydbgDcu9hmbxdkkakawcdtfgrydbgDcuSmbadamal2cdtfgsIdbhzcehqinaqhrdnadaDal2cdtfgqIdbaz9CmbaqIdlasIdl9CmbaqIdwasIdw9BmikarcefhqakawarfaxGgwcdtfgrydbgDcu9hmbkkaramBdbamhDkabaPfaDBdbamcefgmai9hmbkkakcbyd:m:H:cjbH:bjjjbbaoaoyd9GcufBd9GdnaeTmbaiTmbcbhDaehwinawaDBdbawclfhwaiaDcefgD9hmbkcbhDaehwindnaDabydbgrSmbawaearcdtfgrydbBdbaraDBdbkabclfhbawclfhwaiaDcefgD9hmbkkk;:odvuv998Jjjjjbca9Rgocbyd1:G:cjbBdKaocb8Pdj:G:cjb83izaocbydN:G:cjbBdwaocb8Pd:m:G:cjb83ibdnadTmbaicd4hrdnabmbdnalTmbcbhwinaealawcdtfydbar2cdtfhDcbhiinaoczfaifgqaDaifIdbgkaqIdbgxaxak9EEUdbaoaifgqakaqIdbgxaxak9DEUdbaiclfgicx9hmbkawcefgwad9hmbxikkarcdthwcbhDincbhiinaoczfaifgqaeaifIdbgkaqIdbgxaxak9EEUdbaoaifgqakaqIdbgxaxak9DEUdbaiclfgicx9hmbkaeawfheaDcefgDad9hmbxdkkdnalTmbcbhwinabawcx2fgiaealawcdtfydbar2cdtfgDIdbUdbaiaDIdlUdlaiaDIdwUdwcbhiinaoczfaifgqaDaifIdbgkaqIdbgxaxak9EEUdbaoaifgqakaqIdbgxaxak9DEUdbaiclfgicx9hmbkawcefgwad9hmbxdkkarcdthlcbhwaehDinabawcx2fgiaeawar2cdtfgqIdbUdbaiaqIdlUdlaiaqIdwUdwcbhiinaoczfaifgqaDaifIdbgkaqIdbgxaxak9EEUdbaoaifgqakaqIdbgxaxak9DEUdbaiclfgicx9hmbkaDalfhDawcefgwad9hmbkkJbbbbaoIdbaoIdzgx:tgkakJbbbb9DEgkaoIdlaoIdCgm:tgPaPak9DEgkaoIdwaoIdKgP:tgsasak9DEhsdnabTmbadTmbJbbbbJbbjZas:vasJbbbb9BEhkinabakabIdbax:tNUdbabclfgoakaoIdbam:tNUdbabcwfgoakaoIdbaP:tNUdbabcxfhbadcufgdmbkkdnavTmbavaPUdwavamUdlavaxUdbkask:WlewudnaeTmbcbhvabhoinaoavBdbaoclfhoaeavcefgv9hmbkkdnaiTmbcbhrinadarcdtfhwcbhDinalawaDcdtgvyd:G:G:cjbcdtfydbcdtfydbhodnalawavfydbcdtfydbgqabaqcdtfgkydbgvSmbinakabavgqcdtfgxydbgvBdbaxhkaqav9hmbkkdnaoabaocdtfgkydbgvSmbinakabavgocdtfgxydbgvBdbaxhkaoav9hmbkkdnaqaoSmbabaqaoaqao0Ecdtfaqaoaqao6EBdbkaDcefgDci9hmbkarcifgrai6mbkkdnaembcbskcbhxindnalaxcdtgvfydbax9hmbaxhodnaxabavfgDydbgvSmbaDhqinaqabavgocdtfgkydbgvBdbakhqaoav9hmbkkaDaoBdbkaxcefgxae9hmbkcbhkabhvcbhoindndnaoalydbgq9hmbdnaoavydbgq9hmbavakBdbakcefhkxdkavabaqcdtfydbBdbxekavabaqcdtfydbBdbkalclfhlavclfhvaeaocefgo9hmbkakk;jiilud99euabcbaecltz:tjjjbhvdnalTmbadhoaihralhwinarcwfIdbhDarclfIdbhqavaoydbcltfgkarIdbakIdbMUdbakaqakIdlMUdlakaDakIdwMUdwakakIdxJbbjZMUdxaoclfhoarcxfhrawcufgwmbkkdnaeTmbavhkaehrinakcxfgoIdbhDaocbBdbakakIdbJbbbbJbbjZaD:vaDJbbbb9BEgDNUdbakclfgoaDaoIdbNUdbakcwfgoaDaoIdbNUdbakczfhkarcufgrmbkkdnalTmbinavadydbcltfgkaicwfIdbakIdw:tgDaDNaiIdbakIdb:tgDaDNaiclfIdbakIdl:tgDaDNMMgDakIdxgqaqaD9DEUdxadclfhdaicxfhialcufglmbkkdnaeTmbavcxfhkinabakIdbUdbakczfhkabclfhbaecufgembkkk:moerudnaoTmbaecd4hzdnavTmbaicd4hHavcdthOcbhAindnaPaAfRbbTmbaAhednaDTmbaDaAcdtfydbhekdnasTmbasaefRbbceGmekdnamaAfRbbclSmbabaeaz2cdtfgiaraAcx2fgCIdbakNaxIdbMUdbaiaCIdlakNaxIdlMUdlaiaCIdwakNaxIdwMUdwkadaeaH2cdtfhXaqheawhiavhCinaXaeydbcdtgQfaiIdbalaQfIdb:vUdbaeclfheaiclfhiaCcufgCmbkkawaOfhwaAcefgAao9hmbxdkkdnasmbcbheaDhiindnaPaefRbbTmbaehCdnaDTmbaiydbhCkamaefRbbclSmbabaCaz2cdtfgCarIdbakNaxIdbMUdbaCarclfIdbakNaxIdlMUdlaCarcwfIdbakNaxIdwMUdwkaiclfhiarcxfhraoaecefge9hmbxdkkdnaDTmbindnaPRbbTmbasaDydbgefRbbceGmbamRbbclSmbabaeaz2cdtfgearIdbakNaxIdbMUdbaearclfIdbakNaxIdlMUdlaearcwfIdbakNaxIdwMUdwkaPcefhPaDclfhDamcefhmarcxfhraocufgombxdkkazcdthicbheindnaPaefRbbTmbasaefRbbceGmbamaefRbbclSmbabarIdbakNaxIdbMUdbabclfarclfIdbakNaxIdlMUdbabcwfarcwfIdbakNaxIdwMUdbkarcxfhrabaifhbaoaecefge9hmbkkk8MbabaeadaialavcbcbcbcbcbaoarawaDz:bjjjbk8MbabaeadaialavaoarawaDaqakaxamaPz:bjjjbkRbababaeadaialavaoarawaDaqakaxcjjjjdVamz:bjjjbk:g8Koque99due99duq998Jjjjjbc;Wb9Rgq8Kjjjjbcbhkaqcxfcbc;Kbz:tjjjb8Aaqcualcx2alc;v:Q;v:Qe0Ecbyd1:H:cjbHjjjjbbgxBdxaqceBd2axaialavcbcbz:ejjjb8AaqcualcdtalcFFFFi0Egmcbyd1:H:cjbHjjjjbbgiBdzaqcdBd2dndnJFF959eJbbjZawJbbjZawJbbjZ9DE:vawJ9VO:d869DEgw:lJbbb9p9DTmbaw:OhPxekcjjjj94hPkadci9Uhsarco9UhzdndnaombaPcd9imekdnalTmbaPcuf:YhwdnaoTmbcbhvaihHaxhOindndnaoavfRbbceGTmbavcjjjjlVhAxekdndnaOclfIdbawNJbbbZMgC:lJbbb9p9DTmbaC:OhAxekcjjjj94hAkaAcqthAdndnaOcwfIdbawNJbbbZMgC:lJbbb9p9DTmbaC:OhXxekcjjjj94hXkaAaXVhAdndnaOIdbawNJbbbZMgC:lJbbb9p9DTmbaC:OhXxekcjjjj94hXkaAaXcCtVhAkaHaABdbaHclfhHaOcxfhOalavcefgv9hmbxdkkaxhvaihOalhHindndnavIdbawNJbbbZMgC:lJbbb9p9DTmbaC:OhAxekcjjjj94hAkaAcCthAdndnavclfIdbawNJbbbZMgC:lJbbb9p9DTmbaC:OhXxekcjjjj94hXkaXcqtaAVhAdndnavcwfIdbawNJbbbZMgC:lJbbb9p9DTmbaC:OhXxekcjjjj94hXkaOaAaXVBdbavcxfhvaOclfhOaHcufgHmbkkadTmbcbhkaehvcbhOinakaiavclfydbcdtfydbgHaiavcwfydbcdtfydbgA9haiavydbcdtfydbgXaH9haXaA9hGGfhkavcxfhvaOcifgOad6mbkkarci9UhQdndnaz:Z:rJbbbZMgw:lJbbb9p9DTmbaw:Ohvxekcjjjj94hvkaQ:ZhLcbhKc:bwhzdninakaQ9pmeazaP9Rcd9imeavazcufgOavaO9iEaPcefavaP9kEhYdnalTmbaYcuf:YhwdnaoTmbcbhOaihHaxhvindndnaoaOfRbbceGTmbaOcjjjjlVhAxekdndnavclfIdbawNJbbbZMgC:lJbbb9p9DTmbaC:OhAxekcjjjj94hAkaAcqthAdndnavcwfIdbawNJbbbZMgC:lJbbb9p9DTmbaC:OhXxekcjjjj94hXkaAaXVhAdndnavIdbawNJbbbZMgC:lJbbb9p9DTmbaC:OhXxekcjjjj94hXkaAaXcCtVhAkaHaABdbaHclfhHavcxfhvalaOcefgO9hmbxdkkaxhvaihOalhHindndnavIdbawNJbbbZMgC:lJbbb9p9DTmbaC:OhAxekcjjjj94hAkaAcCthAdndnavclfIdbawNJbbbZMgC:lJbbb9p9DTmbaC:OhXxekcjjjj94hXkaXcqtaAVhAdndnavcwfIdbawNJbbbZMgC:lJbbb9p9DTmbaC:OhXxekcjjjj94hXkaOaAaXVBdbavcxfhvaOclfhOaHcufgHmbkkcbhOdnadTmbaehvcbhHinaOaiavclfydbcdtfydbgAaiavcwfydbcdtfydbgX9haiavydbcdtfydbgraA9haraX9hGGfhOavcxfhvaHcifgHad6mbkkdnas:ZgCaL:taY:Ygwaz:Y:tg8ANak:ZgEaO:Zg3:tNaEaL:tawaP:Y:tg5Na3aC:tNMg8EJbbbb9BmbaCaE:ta5a8Aa3aL:tNNNa8E:vawMhwkdndnaOaQ0mbaOhkaYhPxekaOhsaYhzkdndnaKcl0mbdnawJbbbZMgw:lJbbb9p9DTmbaw:Ohvxdkcjjjj94hvxekaPazfcd9ThvkaKcefgKcs9hmbkkdndndnakmbJbbjZhwcbhOcdhvaDmexdkalcd4alfhHcehOinaOgvcethOavaH6mbkcbhOaqcuavcdtgYavcFFFFi0Ecbyd1:H:cjbHjjjjbbgKBdCaqciBd2aqamcbyd1:H:cjbHjjjjbbgzBdKaqclBd2dndndndnalTmbaPcuf:YhwaoTmecbhOaihAaxhHindndnaoaOfRbbceGTmbaOcjjjjlVhXxekdndnaHclfIdbawNJbbbZMgC:lJbbb9p9DTmbaC:OhXxekcjjjj94hXkaXcqthXdndnaHcwfIdbawNJbbbZMgC:lJbbb9p9DTmbaC:Ohrxekcjjjj94hrkaXarVhXdndnaHIdbawNJbbbZMgC:lJbbb9p9DTmbaC:Ohrxekcjjjj94hrkaXarcCtVhXkaAaXBdbaAclfhAaHcxfhHalaOcefgO9hmbxikkaKcFeaYz:tjjjb8AcbhPcbhvxdkaxhOaihHalhAindndnaOIdbawNJbbbZMgC:lJbbb9p9DTmbaC:OhXxekcjjjj94hXkaXcCthXdndnaOclfIdbawNJbbbZMgC:lJbbb9p9DTmbaC:Ohrxekcjjjj94hrkarcqtaXVhXdndnaOcwfIdbawNJbbbZMgC:lJbbb9p9DTmbaC:Ohrxekcjjjj94hrkaHaXarVBdbaOcxfhOaHclfhHaAcufgAmbkkaKcFeaYz:tjjjbhravcufhocbhPcbhYindndndnaraiaYcdtgKfydbgAcm4aA7c:v;t;h;Ev2gvcs4av7aoGgHcdtfgXydbgOcuSmbcehvinaiaOcdtgOfydbaASmdaHavfhOavcefhvaraOaoGgHcdtfgXydbgOcu9hmbkkaXaYBdbaPhvaPcefhPxekazaOfydbhvkazaKfavBdbaYcefgYal9hmbkcuaPc8S2gOaPc;D;O;f8U0EhvkcbhXaqavcbyd1:H:cjbHjjjjbbgvBd3aqcvBd2avcbaOz:tjjjbhOdnadTmbaehiinaxaiclfydbgrcx2fgvIdbaxaiydbgocx2fgHIdbg3:tgCaxaicwfydbgYcx2fgAIdlaHIdlg8A:tgwNavIdla8A:tgEaAIdba3:tg8EN:tgLaLNaEaAIdwaHIdwg5:tg8FNavIdwa5:tgEawN:tgwawNaEa8ENaCa8FN:tgCaCNMMg8E:rhEJbbnnJbbjZazaocdtfydbgvazarcdtfydbgASavazaYcdtfydbgrSGgHEh8Fdna8EJbbbb9ETmbaLaE:vhLaCaE:vhCawaE:vhwkaOavc8S2fgvavIdbawa8FaE:rNgEawNNg8FMUdbavaCaEaCNgaNghavIdlMUdlavaLaEaLNg8ENggavIdwMUdwavawaaNgaavIdxMUdxava8EawNg8JavIdzMUdzavaCa8ENg8EavIdCMUdCavawaEaLa5Nawa3Na8AaCNMM:mg8ANg3NgwavIdKMUdKavaCa3NgCavId3MUd3avaLa3NgLavIdaMUdaava3a8ANg3avId8KMUd8KavaEavIdyMUdydnaHmbaOaAc8S2fgva8FavIdbMUdbavahavIdlMUdlavagavIdwMUdwavaaavIdxMUdxava8JavIdzMUdzava8EavIdCMUdCavawavIdKMUdKavaCavId3MUd3avaLavIdaMUdaava3avId8KMUd8KavaEavIdyMUdyaOarc8S2fgva8FavIdbMUdbavahavIdlMUdlavagavIdwMUdwavaaavIdxMUdxava8JavIdzMUdzava8EavIdCMUdCavawavIdKMUdKavaCavId3MUd3avaLavIdaMUdaava3avId8KMUd8KavaEavIdyMUdykaicxfhiaXcifgXad6mbkkcbhAaqcuaPcdtgvaPcFFFFi0Egicbyd1:H:cjbHjjjjbbgHBdaaqcoBd2aqaicbyd1:H:cjbHjjjjbbgiBd8KaqcrBd2aHcFeavz:tjjjbhYdnalTmbazhHinJbbbbJbbjZaOaHydbgXc8S2fgvIdygw:vawJbbbb9BEavIdwaxcwfIdbgwNavIdzaxIdbgCNavIdaMgLaLMMawNavIdlaxclfIdbgLNavIdCawNavId3MgwawMMaLNavIdbaCNavIdxaLNavIdKMgwawMMaCNavId8KMMM:lNhwdndnaYaXcdtgvfgXydbcuSmbaiavfIdbaw9ETmekaXaABdbaiavfawUdbkaHclfhHaxcxfhxalaAcefgA9hmbkkdndnaPmbJbbbbhwxekJbbbbhwinaiIdbgCawawaC9DEhwaiclfhiaPcufgPmbkaw:rhwkakcd4akfhOcehiinaigvcethiavaO6mbkcbhOaqcuavcdtgiavcFFFFi0Ecbyd1:H:cjbHjjjjbbgHBdyaHcFeaiz:tjjjbhXdnadTmbavcufhrcbhPcbhxindnazaeaxcdtfgvydbcdtfydbgiazavclfydbcdtfydbgOSmbaiazavcwfydbcdtfydbgvSmbaOavSmbaYavcdtfydbhAdndnaYaOcdtfydbgvaYaicdtfydbgi9pmbavaA9pmbaAhlaihoavhAxekdnaAai9pmbaAav9pmbaihlavhoxekavhlaAhoaihAkabaPcx2fgvaABdbavcwfaoBdbavclfalBdbdnaXaoc:3F;N8N2alc:F:b:DD27aAc;D;O:B8J27arGgOcdtfgvydbgicuSmbcehHinaHhvdnabaicx2fgiydbaA9hmbaiydlal9hmbaiydwaoSmikavcefhHaXaOavfarGgOcdtfgvydbgicu9hmbkkavaPBdbaPcefhPkaxcifgxad6mbkaPci2hOkcwhvaDTmekaDawUdbkavcdthvaqcxfc98fhiinaiavfydbcbyd:m:H:cjbH:bjjjbbavc98fgvmbkaqc;Wbf8KjjjjbaOk:3ldrue9:8Jjjjjbc;Wb9Rgr8Kjjjjbcbhwarcxfcbc;Kbz:tjjjb8AdnabaeSmbabaeadcdtzMjjjb8AkarcualcdtalcFFFFi0EgDcbyd1:H:cjbHjjjjbbgqBdxarceBd2aqcbaialavcbarcxfz:djjjbcualcx2alc;v:Q;v:Qe0Ecbyd1:H:cjbHjjjjbbhkarcxfaryd2gxcdtfakBdbaraxcefgmBd2akaialavcbcbz:ejjjb8AarcxfamcdtfaDcbyd1:H:cjbHjjjjbbgiBdbaraxcdfgvBd2arcxfavcdtfcuaialaeadaqz:fjjjbgecltaecjjjjiGEcbyd1:H:cjbHjjjjbbgqBdbaqaeaiakalz:gjjjbaxcifhkdnadTmbaoaoNhocbhwabhlcbheindnaqaialydbgvcdtfydbcdtfIdbao9ETmbalclf8PdbhPabawcdtfgDavBdbaDclfaP83dbawcifhwkalcxfhlaecifgead6mbkkdnakTmbaxcdtarcxffcwfhlinalydbcbyd:m:H:cjbH:bjjjbbalc98fhlakcufgkmbkkarc;Wbf8Kjjjjbawk:WCoDud99vue99vuv998Jjjjjbc;Wb9Rgw8KjjjjbdndnarmbcbhDxekawcxfcbc;Kbz:tjjjb8Aawcuadcx2adc;v:Q;v:Qe0Ecbyd1:H:cjbHjjjjbbgqBdxawceBd2aqaeadaicbcbz:ejjjb8AawcuadcdtadcFFFFi0Egkcbyd1:H:cjbHjjjjbbgxBdzawcdBd2adcd4adfhmceheinaegicetheaiam6mbkcbhPawcuaicdtgsaicFFFFi0Ecbyd1:H:cjbHjjjjbbgzBdCawciBd2dndnar:ZgH:rJbbbZMgO:lJbbb9p9DTmbaO:Ohexekcjjjj94hekaicufhAc:bwhCcbhXadhQcbhLinaeaCcufgiaeai9iEaPcefaeaP9kEhDdndnadTmbaDcuf:YhOaqhiaxheadhmindndnaiIdbaONJbbbZMgK:lJbbb9p9DTmbaK:OhYxekcjjjj94hYkaYcCthYdndnaiclfIdbaONJbbbZMgK:lJbbb9p9DTmbaK:Oh8Axekcjjjj94h8Aka8AcqtaYVhYdndnaicwfIdbaONJbbbZMgK:lJbbb9p9DTmbaK:Oh8Axekcjjjj94h8AkaeaYa8AVBdbaicxfhiaeclfheamcufgmmbkazcFeasz:tjjjbhEcbh3cbh5indnaEaxa5cdtfydbgYcm4aY7c:v;t;h;Ev2gics4ai7aAGgmcdtfg8AydbgecuSmbaeaYSmbcehiinaEamaifaAGgmcdtfg8AydbgecuSmeaicefhiaeaY9hmbkka8AaYBdba3aecuSfh3a5cefg5ad9hmbxdkkazcFeasz:tjjjb8Acbh3kdnaQ:ZgKaH:taD:YgOaC:Y:tg8ENaX:Zg8Fa3:Zga:tNa8FaH:taOaP:Y:tghNaaaK:tNMggJbbbb9BmbaKa8F:taha8EaaaH:tNNNag:vaOMhOkaPaDa3ar0giEhPaXa3aiEhXdna3arSmbaDaCaiEgCaP9Rcd9imbdndnaLcl0mbdnaOJbbbZMgO:lJbbb9p9DTmbaO:Ohexdkcjjjj94hexekaPaCfcd9Theka3aQaiEhQaLcefgLcs9hmekkdndnaXmbcihicbhDxekcbhiawakcbyd1:H:cjbHjjjjbbg5BdKawclBd2aPcuf:YhKdndnadTmbaqhiaxheadhmindndnaiIdbaKNJbbbZMgO:lJbbb9p9DTmbaO:OhYxekcjjjj94hYkaYcCthYdndnaiclfIdbaKNJbbbZMgO:lJbbb9p9DTmbaO:Oh8Axekcjjjj94h8Aka8AcqtaYVhYdndnaicwfIdbaKNJbbbZMgO:lJbbb9p9DTmbaO:Oh8Axekcjjjj94h8AkaeaYa8AVBdbaicxfhiaeclfheamcufgmmbkazcFeasz:tjjjbhEcbhDcbh3indndndnaEaxa3cdtgCfydbgYcm4aY7c:v;t;h;Ev2gics4ai7aAGgmcdtfg8AydbgecuSmbcehiinaxaecdtgefydbaYSmdamaifheaicefhiaEaeaAGgmcdtfg8Aydbgecu9hmbkka8Aa3BdbaDhiaDcefhDxeka5aefydbhika5aCfaiBdba3cefg3ad9hmbkcuaDc32giaDc;j:KM;jb0EhexekazcFeasz:tjjjb8AcbhDcbhekawaecbyd1:H:cjbHjjjjbbgeBd3awcvBd2aecbaiz:tjjjbh8Aavcd4hxdnadTmbdnalTmbaxcdthEa5hYaqhealhmadhAina8AaYydbc32fgiaeIdbaiIdbMUdbaiaeclfIdbaiIdlMUdlaiaecwfIdbaiIdwMUdwaiamIdbaiIdxMUdxaiamclfIdbaiIdzMUdzaiamcwfIdbaiIdCMUdCaiaiIdKJbbjZMUdKaYclfhYaecxfheamaEfhmaAcufgAmbxdkka5hmaqheadhYina8Aamydbc32fgiaeIdbaiIdbMUdbaiaeclfIdbaiIdlMUdlaiaecwfIdbaiIdwMUdwaiaiIdxJbbbbMUdxaiaiIdzJbbbbMUdzaiaiIdCJbbbbMUdCaiaiIdKJbbjZMUdKamclfhmaecxfheaYcufgYmbkkdnaDTmba8AhiaDheinaiaiIdbJbbbbJbbjZaicKfIdbgO:vaOJbbbb9BEgONUdbaiclfgmaOamIdbNUdbaicwfgmaOamIdbNUdbaicxfgmaOamIdbNUdbaiczfgmaOamIdbNUdbaicCfgmaOamIdbNUdbaic3fhiaecufgembkkcbhYawcuaDcdtgCaDcFFFFi0Egicbyd1:H:cjbHjjjjbbgeBdaawcoBd2awaicbyd1:H:cjbHjjjjbbgEBd8KaecFeaCz:tjjjbh3dnadTmbaoJbbjZJbbjZaK:vaPceSENgOaONhKaxcdthxalheinaKaec;8:G:cjbalEgmIdwa8Aa5ydbgAc32fgiIdC:tgOaONamIdbaiIdx:tgOaONamIdlaiIdz:tgOaONMMNaqcwfIdbaiIdw:tgOaONaqIdbaiIdb:tgOaONaqclfIdbaiIdl:tgOaONMMMhOdndna3aAcdtgifgmydbcuSmbaEaifIdbaO9ETmekamaYBdbaEaifaOUdbka5clfh5aqcxfhqaeaxfheadaYcefgY9hmbkkaba3aCzMjjjb8Acrhikaicdthiawcxfc98fheinaeaifydbcbyd:m:H:cjbH:bjjjbbaic98fgimbkkawc;Wbf8KjjjjbaDk:Pdidui99ducbhi8Jjjjjbca9Rglcbyd1:G:cjbBdKalcb8Pdj:G:cjb83izalcbydN:G:cjbBdwalcb8Pd:m:G:cjb83ibdndnaembJbbjFhvJbbjFhoJbbjFhrxekadcd4cdthwincbhdinalczfadfgDabadfIdbgvaDIdbgoaoav9EEUdbaladfgDavaDIdbgoaoav9DEUdbadclfgdcx9hmbkabawfhbaicefgiae9hmbkalIdwalIdK:thralIdlalIdC:thoalIdbalIdz:thvkJbbbbavavJbbbb9DEgvaoaoav9DEgvararav9DEk9DeeuabcFeaicdtz:tjjjbhlcbhbdnadTmbindnalaeydbcdtfgiydbcu9hmbaiabBdbabcefhbkaeclfheadcufgdmbkkabk;Bidqui998Jjjjjbc;Wb9Rgl8Kjjjjbalcxfcbc;Kbz:tjjjb8Aadcd4adfhvcehoinaogrcethoarav6mbkalcuarcdtgoarcFFFFi0Ecbyd1:H:cjbHjjjjbbgvBdxavcFeaoz:tjjjbhwdnadTmbaicd4hDarcufhqcbhkindndnawcbaeakaD2cdtfgrydlgiaicjjjj94SEgocH4ao7c:F:b:DD2cbarydbgxaxcjjjj94SEgocH4ao7c;D;O:B8J27cbarydwgmamcjjjj94SEgrcH4ar7c:3F;N8N27aqGgvcdtfgrydbgocuSmbam::hPai::hsax::hzcehiinaihrdnaeaoaD2cdtfgiIdbaz9CmbaiIdlas9CmbaiIdwaP9BmikarcefhiawavarfaqGgvcdtfgrydbgocu9hmbkkarakBdbakhokabakcdtfaoBdbakcefgkad9hmbkkalydxcbyd:m:H:cjbH:bjjjbbalc;Wbf8Kjjjjbk9teiucbcbyd:q:H:cjbgeabcifc98GfgbBd:q:H:cjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;LeeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiclfaeclfydbBdbaicwfaecwfydbBdbaicxfaecxfydbBdbaeczfheaiczfhiadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk;aeedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdbaicxfalBdbaicwfalBdbaiclfalBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabk9teiucbcbyd:q:H:cjbgeabcrfc94GfgbBd:q:H:cjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikTeeucbabcbyd:q:H:cjbge9Rcifc98GaefgbBd:q:H:cjbdnabZbcztge9nmbabae9RcFFifcz4nb8Akkk:Kedbcj:Gdk1eFFuuFFuuFFuuFFuFFFuFFFuFbbbbbbbbebbbdbbbbbbbebbbebbbdbbbbbbbbbbbeeeeebebbebbebebbbeebbbbbbbbbbbbeeeeeebebbeeebeebbbbebebbbbbbbbbbbbbbbbbbc1:Hdkxebbbdbbb:G:qbb",e=new Uint8Array([32,0,65,2,1,106,34,33,3,128,11,4,13,64,6,253,10,7,15,116,127,5,8,12,40,16,19,54,20,9,27,255,113,17,42,67,24,23,146,148,18,14,22,45,70,69,56,114,101,21,25,63,75,136,108,28,118,29,73,115]);if(typeof WebAssembly!="object")return{supported:!1};var t,n=WebAssembly.instantiate(a(i),{}).then(function(g){t=g.instance,t.exports.__wasm_call_ctors()});function a(g){for(var S=new Uint8Array(g.length),x=0;x<g.length;++x){var M=g.charCodeAt(x);S[x]=M>96?M-97:M>64?M-39:M+4}for(var w=0,x=0;x<g.length;++x)S[w++]=S[x]<60?e[S[x]]:(S[x]-60)*64+S[++x];return S.buffer.slice(0,w)}function s(g){if(!g)throw new Error("Assertion failed")}function r(g){return new Uint8Array(g.buffer,g.byteOffset,g.byteLength)}function o(g,S,x,M){var w=t.exports.sbrk,T=w(x*4),v=w(x*M*4),E=new Uint8Array(t.exports.memory.buffer);E.set(r(S),v),g(T,v,x,M*4),E=new Uint8Array(t.exports.memory.buffer);var I=new Uint32Array(x);return new Uint8Array(I.buffer).set(E.subarray(T,T+x*4)),w(T-w(0)),I}function l(g,S,x){var M=t.exports.sbrk,w=M(S.length*4),T=M(x*4),v=new Uint8Array(t.exports.memory.buffer),E=r(S);v.set(E,w);var I=g(T,w,S.length,x);v=new Uint8Array(t.exports.memory.buffer);var C=new Uint32Array(x);new Uint8Array(C.buffer).set(v.subarray(T,T+x*4)),M(w-M(0));for(var N=0;N<S.length;++N)S[N]=C[S[N]];return[C,I]}function c(g){for(var S=0,x=0;x<g.length;++x){var M=g[x];S=S<M?M:S}return S}function h(g,S,x,M,w,T,v,E,I){var C=t.exports.sbrk,N=C(4),L=C(x*4),P=C(w*T),F=C(x*4),z=new Uint8Array(t.exports.memory.buffer);z.set(r(M),P),z.set(r(S),F);var G=g(L,F,x,P,w,T,v,E,I,N);z=new Uint8Array(t.exports.memory.buffer);var Z=new Uint32Array(G);r(Z).set(z.subarray(L,L+G*4));var V=new Float32Array(1);return r(V).set(z.subarray(N,N+4)),C(N-C(0)),[Z,V[0]]}function d(g,S,x,M,w,T,v,E,I,C,N,L,P){var F=t.exports.sbrk,z=F(4),G=F(x*4),Z=F(w*T),V=F(w*E),K=F(I.length*4),ee=F(x*4),be=C?F(w):0,pe=new Uint8Array(t.exports.memory.buffer);pe.set(r(M),Z),pe.set(r(v),V),pe.set(r(I),K),pe.set(r(S),ee),C&&pe.set(r(C),be);var qe=g(G,ee,x,Z,w,T,V,E,K,I.length,be,N,L,P,z);pe=new Uint8Array(t.exports.memory.buffer);var Le=new Uint32Array(qe);r(Le).set(pe.subarray(G,G+qe*4));var We=new Float32Array(1);return r(We).set(pe.subarray(z,z+4)),F(z-F(0)),[Le,We[0]]}function f(g,S,x,M,w,T,v,E,I,C,N,L,P){var F=t.exports.sbrk,z=F(4),G=F(w*T),Z=F(w*E),V=F(I.length*4),K=F(x*4),ee=C?F(w):0,be=new Uint8Array(t.exports.memory.buffer);be.set(r(M),G),be.set(r(v),Z),be.set(r(I),V),be.set(r(S),K),C&&be.set(r(C),ee);var pe=g(K,x,G,w,T,Z,E,V,I.length,ee,N,L,P,z);be=new Uint8Array(t.exports.memory.buffer),r(S).set(be.subarray(K,K+pe*4)),r(M).set(be.subarray(G,G+w*T)),r(v).set(be.subarray(Z,Z+w*E));var qe=new Float32Array(1);return r(qe).set(be.subarray(z,z+4)),F(z-F(0)),[pe,qe[0]]}function p(g,S,x,M){var w=t.exports.sbrk,T=w(x*M),v=new Uint8Array(t.exports.memory.buffer);v.set(r(S),T);var E=g(T,x,M);return w(T-w(0)),E}function m(g,S,x,M,w,T,v,E){var I=t.exports.sbrk,C=I(E*4),N=I(x*M),L=w?I(x*T):0,P=new Uint8Array(t.exports.memory.buffer);P.set(r(S),N),w&&P.set(r(w),L);var F=g(C,N,x,M,L,T,v,E);P=new Uint8Array(t.exports.memory.buffer);var z=new Uint32Array(F);return r(z).set(P.subarray(C,C+F*4)),I(C-I(0)),z}function y(g,S,x,M,w,T,v,E,I){var C=t.exports.sbrk,N=C(4),L=C(x*4),P=C(w*T),F=C(x*4),z=v?C(w):0,G=new Uint8Array(t.exports.memory.buffer);G.set(r(M),P),G.set(r(S),F),v&&G.set(r(v),z);var Z=g(L,F,x,P,w,T,z,E,I,N);G=new Uint8Array(t.exports.memory.buffer);var V=new Uint32Array(Z);r(V).set(G.subarray(L,L+Z*4));var K=new Float32Array(1);return r(K).set(G.subarray(N,N+4)),C(N-C(0)),[V,K[0]]}function b(g,S,x,M,w,T,v){var E=t.exports.sbrk,I=E(x*4),C=E(w*T),N=E(x*4),L=new Uint8Array(t.exports.memory.buffer);L.set(r(M),C),L.set(r(S),N);var P=g(I,N,x,C,w,T,v);L=new Uint8Array(t.exports.memory.buffer);var F=new Uint32Array(P);return r(F).set(L.subarray(I,I+P*4)),E(I-E(0)),F}var u={LockBorder:1,Sparse:2,ErrorAbsolute:4,Prune:8,Regularize:16,Permissive:32,RegularizeLight:64,_InternalDebug:1<<30};return{ready:n,supported:!0,compactMesh:function(g){s(g instanceof Uint32Array||g instanceof Int32Array||g instanceof Uint16Array||g instanceof Int16Array),s(g.length%3==0);var S=g.BYTES_PER_ELEMENT==4?g:new Uint32Array(g),x=l(t.exports.meshopt_optimizeVertexFetchRemap,S,c(g)+1);if(g!==S)for(var M=0;M<S.length;++M)g[M]=S[M];return x},generatePositionRemap:function(g,S){return s(g instanceof Float32Array),s(g.length%S==0),s(S>=3),o(t.exports.meshopt_generatePositionRemap,g,g.length/S,S)},simplify:function(g,S,x,M,w,T){s(g instanceof Uint32Array||g instanceof Int32Array||g instanceof Uint16Array||g instanceof Int16Array),s(g.length%3==0),s(S instanceof Float32Array),s(S.length%x==0),s(x>=3),s(M>=0&&M<=g.length),s(M%3==0),s(w>=0);for(var v=0,E=0;E<(T?T.length:0);++E)s(T[E]in u),v|=u[T[E]];var I=g.BYTES_PER_ELEMENT==4?g:new Uint32Array(g),C=h(t.exports.meshopt_simplify,I,g.length,S,S.length/x,x*4,M,w,v);return C[0]=g instanceof Uint32Array?C[0]:new g.constructor(C[0]),C},simplifyWithAttributes:function(g,S,x,M,w,T,v,E,I,C){s(g instanceof Uint32Array||g instanceof Int32Array||g instanceof Uint16Array||g instanceof Int16Array),s(g.length%3==0),s(S instanceof Float32Array),s(S.length%x==0),s(x>=3),s(M instanceof Float32Array),s(M.length==w*(S.length/x)),s(w>=0),s(v==null||v instanceof Uint8Array),s(v==null||v.length==S.length/x),s(E>=0&&E<=g.length),s(E%3==0),s(I>=0),s(Array.isArray(T)),s(w>=T.length),s(T.length<=32);for(var N=0;N<T.length;++N)s(T[N]>=0);for(var L=0,N=0;N<(C?C.length:0);++N)s(C[N]in u),L|=u[C[N]];var P=g.BYTES_PER_ELEMENT==4?g:new Uint32Array(g),F=d(t.exports.meshopt_simplifyWithAttributes,P,g.length,S,S.length/x,x*4,M,w*4,new Float32Array(T),v,E,I,L);return F[0]=g instanceof Uint32Array?F[0]:new g.constructor(F[0]),F},simplifyWithUpdate:function(g,S,x,M,w,T,v,E,I,C){s(g instanceof Uint32Array||g instanceof Int32Array||g instanceof Uint16Array||g instanceof Int16Array),s(g.length%3==0),s(S instanceof Float32Array),s(S.length%x==0),s(x>=3),s(M instanceof Float32Array),s(M.length==w*(S.length/x)),s(w>=0),s(v==null||v instanceof Uint8Array),s(v==null||v.length==S.length/x),s(E>=0&&E<=g.length),s(E%3==0),s(I>=0),s(Array.isArray(T)),s(w>=T.length),s(T.length<=32);for(var N=0;N<T.length;++N)s(T[N]>=0);for(var L=0,N=0;N<(C?C.length:0);++N)s(C[N]in u),L|=u[C[N]];var P=g.BYTES_PER_ELEMENT==4?g:new Uint32Array(g),F=f(t.exports.meshopt_simplifyWithUpdate,P,g.length,S,S.length/x,x*4,M,w*4,new Float32Array(T),v,E,I,L);if(g!==P)for(var N=0;N<F[0];++N)g[N]=P[N];return F},getScale:function(g,S){return s(g instanceof Float32Array),s(g.length%S==0),s(S>=3),p(t.exports.meshopt_simplifyScale,g,g.length/S,S*4)},simplifyPoints:function(g,S,x,M,w,T){return s(g instanceof Float32Array),s(g.length%S==0),s(S>=3),s(x>=0&&x<=g.length/S),M?(s(M instanceof Float32Array),s(M.length%w==0),s(w>=3),s(g.length/S==M.length/w),m(t.exports.meshopt_simplifyPoints,g,g.length/S,S*4,M,w*4,T||0,x)):m(t.exports.meshopt_simplifyPoints,g,g.length/S,S*4,void 0,0,0,x)},simplifySloppy:function(g,S,x,M,w,T){s(g instanceof Uint32Array||g instanceof Int32Array||g instanceof Uint16Array||g instanceof Int16Array),s(g.length%3==0),s(S instanceof Float32Array),s(S.length%x==0),s(x>=3),s(M==null||M instanceof Uint8Array),s(M==null||M.length==S.length/x),s(w>=0&&w<=g.length),s(w%3==0),s(T>=0);var v=g.BYTES_PER_ELEMENT==4?g:new Uint32Array(g),E=y(t.exports.meshopt_simplifySloppy,v,g.length,S,S.length/x,x*4,M,w,T);return E[0]=g instanceof Uint32Array?E[0]:new g.constructor(E[0]),E},simplifyPrune:function(g,S,x,M){s(g instanceof Uint32Array||g instanceof Int32Array||g instanceof Uint16Array||g instanceof Int16Array),s(g.length%3==0),s(S instanceof Float32Array),s(S.length%x==0),s(x>=3),s(M>=0);var w=g.BYTES_PER_ELEMENT==4?g:new Uint32Array(g),T=b(t.exports.meshopt_simplifyPrune,w,g.length,S,S.length/x,x*4,M);return T=g instanceof Uint32Array?T:new g.constructor(T),T}}})();var Ev=(function(){var i="b9H79Tebbbe:neP9Geueu9Geub9Gbb9Giuuueu9Gmuuuuuuuuuuu9999eu9Gouuuuuueu9Gruuuuuuub9Gxuuuuuuuuuuuueu9Gxuuuuuuuuuuu99eu9GPuuuuuuuuuuuuu99b9Gouuuuuub9Gwuuuuuuuub9Gvuuuuub9GluuuubiQXdilvorwDqokoqxmbiibeilve9Weiiviebeoweuecj:Gdkr;Zeqo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9I919P29K9nW79O2Wt79c9V919U9KbeY9TW79O9V9Wt9F9I919P29K9nW79O2Wt7S2W94bd39TW79O9V9Wt9F9I919P29K9nW79O2Wt79t9W9Ht9P9H2bo39TW79O9V9Wt9F9J9V9T9W91tWJ2917tWV9c9V919U9K7bw39TW79O9V9Wt9F9J9V9T9W91tW9nW79O2Wt9c9V919U9K7bkE9TW79O9V9Wt9F9J9V9T9W91tW9t9W9OWVW9c9V919U9K7bxL9TW79O9V9Wt9F9V9Wt9P9T9P96W9nW79O2WtbPl79IV9RbsDwebcekdOAq;W:leXdbkIbabaec9:fgefcufae9Ugeabci9Uadfcufad9Ugbaeab0Ek:88JDPue99eux99due99euo99iu8Jjjjjbc:WD9Rgm8KjjjjbdndnalmbcbhPxekamc:Cwfcbc;Kbz:rjjjb8AcuaocdtgsaocFFFFi0Ehzcbyd;0:G:cjbhHdndnalcb9imbaoal9nmbamazaHHjjjjbbgHBd:CwamceBd;8wamazcbyd;0:G:cjbHjjjjbbgOBd:GwamcdBd;8wamcualcdtalcFFFFi0Ecbyd;0:G:cjbHjjjjbbgABd:KwamciBd;8waihzalhsinaHazydbcdtfcbBdbazclfhzascufgsmbkaihzalhsinaHazydbcdtfgCaCydbcefBdbazclfhzascufgsmbkaihzalhCcbhXindnaHazydbcdtgQfgsydbcb9imbaOaQfaXBdbasasydbgQcjjjj94VBdbaQaXfhXkazclfhzaCcufgCmbkalci9UhLdnalci6mbcbhzaihsinascwfydbhCasclfydbhXaOasydbcdtfgQaQydbgQcefBdbaAaQcdtfazBdbaOaXcdtfgXaXydbgXcefBdbaAaXcdtfazBdbaOaCcdtfgCaCydbgCcefBdbaAaCcdtfazBdbascxfhsaLazcefgz9hmbkkaihzalhsindnaHazydbcdtgCfgXydbgQcu9kmbaXaQcFFFFrGgQBdbaOaCfgCaCydbaQ9RBdbkazclfhzascufgsmbxdkkamazaHHjjjjbbgHBd:CwamceBd;8wamazcbyd;0:G:cjbHjjjjbbgOBd:GwamcdBd;8wamcualcdtalcFFFFi0Ecbyd;0:G:cjbHjjjjbbgABd:KwamciBd;8waHcbasz:rjjjbhXaihzalhsinaXazydbcdtfgCaCydbcefBdbazclfhzascufgsmbkalci9UhLdnaoTmbcbhzaOhsaXhCaohQinasazBdbasclfhsaCydbazfhzaCclfhCaQcufgQmbkkdnalci6mbcbhzaihsinascwfydbhCasclfydbhQaOasydbcdtfgKaKydbgKcefBdbaAaKcdtfazBdbaOaQcdtfgQaQydbgQcefBdbaAaQcdtfazBdbaOaCcdtfgCaCydbgCcefBdbaAaCcdtfazBdbascxfhsaLazcefgz9hmbkkaoTmbcbhzaohsinaOazfgCaCydbaXazfydb9RBdbazclfhzascufgsmbkkamaLcbyd;0:G:cjbHjjjjbbgzBd:OwamclBd;8wazcbaLz:rjjjbhYamcuaLcK2alcjjjjd0Ecbyd;0:G:cjbHjjjjbbg8ABd:SwamcvBd;8wJbbbbhEdnalci6g3mbarcd4hKaihsa8AhzaLhrJbbbbh5inavasclfydbaK2cdtfgCIdlh8EavasydbaK2cdtfgXIdlhEavascwfydbaK2cdtfgQIdlh8FaCIdwhaaXIdwhhaQIdwhgazaCIdbg8JaXIdbg8KMaQIdbg8LMJbbnn:vUdbazclfaXIdlaCIdlMaQIdlMJbbnn:vUdbaQIdwh8MaCIdwh8NaXIdwhyazcxfa8EaE:tg8Eagah:tggNaaah:tgaa8FaE:tghN:tgEJbbbbJbbjZa8Ja8K:tg8FahNa8Ea8La8K:tg8KN:tghahNaEaENaaa8KNa8FagN:tgEaENMMg8K:rg8E:va8KJbbbb9BEg8KNUdbazczfaEa8KNUdbazcCfaha8KNUdbazcwfa8Maya8NMMJbbnn:vUdba5a8EMh5ascxfhsazcKfhzarcufgrmbka5aL:Z:vJbbbZNhEkamcuaLcdtalcFFFF970Ecbyd;0:G:cjbHjjjjbbgCBd:WwamcoBd;8waq:Zhhdna3mbcbhzaChsinasazBdbasclfhsaLazcefgz9hmbkkaEahNhhamcuaLcltalcFFFFd0Ecbyd;0:G:cjbHjjjjbbg8PBd:0wamcrBd;8wcba8Pa8AaCaLcbz:djjjb8AJFFuuh8MJFFuuh8NJFFuuhydnalci6mbJFFuuhya8AhzaLhsJFFuuh8NJFFuuh8MinazcwfIdbgEa8Ma8MaE9EEh8MazclfIdbgEa8Na8NaE9EEh8NazIdbgEayayaE9EEhyazcKfhzascufgsmbkkah:rhEamaocetgzcuaocu9kEcbyd;0:G:cjbHjjjjbbgCBd:4wdndnaoal9nmbaihzalhsinaCazydbcetfcFFi87ebazclfhzascufgsmbxdkkaCcFeazz:rjjjb8AkaEJbbbZNh8JcuhIdnalci6mbcbhsJFFuuhEa8AhzcuhIinazcwfIdba8M:tghahNazIdbay:tghahNazclfIdba8N:tghahNMM:rghaEaIcuSahaE9DVgXEhEasaIaXEhIazcKfhzaLascefgs9hmbkkamczfcbcjwz:rjjjb8Aam9cb83iwam9cb83ibaxa8JNh8RJbbjZak:th8Lcbh8SJbbbbhRJbbbbh8UJbbbbh8VJbbbbh8WJbbbbh8XJbbbbh8Ycbh8ZcbhPinJbbbbhEdna8STmbJbbjZa8S:Z:vhEkJbbbbhhdna8Ya8YNa8Wa8WNa8Xa8XNMMg8KJbbbb9BmbJbbjZa8K:r:vhhka8VaENh8Ka8UaENh5aRaENh8EaIhLdndndndndna8SaPVTmbamydwg80Tmea8YahNh8Fa8XahNhaa8WahNhgaeamydbcdtfh81cbh3JFFuuhEcvhQcuhLindnaHa81a3cdtfydbcdtgzfydbgvTmbaAaOazfydbcdtfhsindndnaCaiasydbgKcx2fgzclfydbgrcetf8Vebcs4aCazydbgXcetf8Vebcs4faCazcwfydbglcetf8Vebcs4fgombcbhzxekcehzaHaXcdtfydbgXceSmbcehzaHarcdtfydbgrceSmbcehzaHalcdtfydbglceSmbdnarcdSaXcdSfalcdSfcd6mbaocefhzxekaocdfhzkdnazaQ9kmba8AaKcK2fgXIdwa8K:tghahNaXIdba8E:tghahNaXIdla5:tghahNMM:ra8J:va8LNJbbjZMJ9VO:d86JbbjZaXIdCa8FNaXIdxagNaaaXIdzNMMakN:tghahJ9VO:d869DENghaEazaQ6ahaE9DVgXEhEaKaLaXEhLazaQaXEhQkasclfhsavcufgvmbkka3cefg3a809hmbkkaLcu9hmekama8KUd:ODama5Ud:KDama8EUd:GDamcuBd:qDamcFFF;7rBdjDa8Pcba8AaYamc:GDfamc:qDfamcjDfz:ejjjbamyd:qDhLdndnaxJbbbb9ETmba8SaD6mbaLcuSmeceh3amIdjDa8R9EmixdkaLcu9hmekdna8STmbabaPcltfgHam8Piw83dwaHam8Pib83dbaPcefhPkc3hHinamc:CwfaHfydbcbyd;4:G:cjbH:bjjjbbaHc98fgHc989hmbxvkkcbh3a8Saq9pmbamydwaCaiaLcx2fgzydbcetf8Vebcs4aCazcwfydbcetf8Vebcs4faCazclfydbcetf8Vebcs4ffaw9nmekcbhzcbhsdna8ZTmbcbhsamczfhXinamczfascdtfaXydbgQBdbaXclfhXasaYaQfRbbTfhsa8Zcufg8ZmbkkamydwhlamydbhXam9cu83i:GDam9cu83i:ODam9cu83i:qDam9cu83i:yDinamcjDfazfcFFF;7rBdbazclfgzcz9hmbkasc;8easclfc:bd6Eg8Zcdth80dnalTmbaeaXcdtfhocbhrindnaHaoarcdtfydbcdtgzfydbgvTmbaAaOazfydbcdtfhscuhQcuhzinaHaiasydbgKcx2fgXclfydbcdtfydbaHaXydbcdtfydbfaHaXcwfydbcdtfydbfgXazaXaz6gXEhzaKaQaXEhQasclfhsavcufgvmbkaQcuSmba8AaQcK2fgsIdwa8M:tgEaENasIdbay:tgEaENasIdla8N:tgEaENMM:rhEcbhsindndnazamc:qDfasfgvydbgX6mbazaX9hmeaEamcjDfasfIdb9FTmekavazBdbamc:GDfasfaQBdbamcjDfasfaEUdbxdkasclfgscz9hmbkkarcefgral9hmbkkamczfa80fhQcbhzcbhsindnamc:GDfazfydbgXcuSmbaQascdtfaXBdbascefhskazclfgzcz9hmbkasa8Zfg8ZTmbJFFuuhhcuhKamczfhza8ZhvcuhQina8AazydbgXcK2fgsIdwa8M:tgEaENasIdbay:tgEaENasIdla8N:tgEaENMM:rhEdndnaHaiaXcx2fgsclfydbcdtfydbaHasydbcdtfydbfaHascwfydbcdtfydbfgsaQ6mbasaQ9hmeaEah9DTmekaEhhashQaXhKkazclfhzavcufgvmbkaKcuSmbaKhLkdnamaiaLcx2fgrydbarclfydbarcwfydbaCabaeadaPawaqa3z:fjjjbTmbaPcefhPJbbbbhRJbbbbh8UJbbbbh8VJbbbbh8WJbbbbh8XJbbbbh8YkcbhXinaAaOaraXcdtfydbcdtgsfydbcdtfgKhzaHasfgvydbgQhsdnaQTmbdninazydbaLSmeazclfhzascufgsTmdxbkkazaKaQcdtfc98fydbBdbavavydbcufBdbkaXcefgXci9hmbka8AaLcK2fgzIdbhEazIdlhhazIdwh8KazIdxh5azIdzh8EazIdCh8FaYaLfce86bba8Ya8FMh8Ya8Xa8EMh8Xa8Wa5Mh8Wa8Va8KMh8Va8UahMh8UaRaEMhRamydxh8Sxbkkamc:WDf8KjjjjbaPkjoivuv99lu8Jjjjjbca9Rgo8Kjjjjbdndnalcw0mbaiydbhraeabcitfgwalcdtciVBdlawarBdbdnalcd6mbaiclfhralcufhDawcxfhwinarydbhqawcuBdbawc98faqBdbawcwfhwarclfhraDcufgDmbkkalabfhwxekcbhqaocbBdKao9cb83izaocbBdwao9cb83ibJbbjZhkJbbjZhxinadaiaqcdtfydbcK2fhDcbhwinaoczfawfgraDawfIdbgmarIdbgP:tgsaxNaPMgPUdbaoawfgrasamaP:tNarIdbMUdbawclfgwcx9hmbkJbbjZakJbbjZMgk:vhxaqcefgqal9hmbkcbhradcbcecdaoIdlgmaoIdwgP9GEgwaoIdbgsaP9GEawasam9GEgzcdtgwfhHaoczfawfIdbhmaihwalhDinaiarcdtfgqydbhOaqawydbgABdbawaOBdbawclfhwaraHaAcK2fIdbam9DfhraDcufgDmbkdndnarcv6mbavc8X9kmbaralc98f6mekaiydbhraeabcitfgwalcdtciVBdlawarBdbaiclfhralcufhDawcxfhwinarydbhqawcuBdbawc98faqBdbawcwfhwarclfhraDcufgDmbkalabfhwxekaeabcitfgwamUdbawawydlc98GazVBdlabcefaeadaiaravcefgqz:djjjbhDawawydlciGaDabcu7fcdtVBdlaDaeadaiarcdtfalar9Raqz:djjjbhwkaocaf8Kjjjjbawk;Oddvue99dninabaecitfgrydlgwcd4gDTmednawciGgqci9hmbcihqdnawcl6mbabaecitfhbcbheawhqcehkindnaiabydbgDfRbbmbcbhkadaDcK2fgwIdwalIdw:tgxaxNawIdbalIdb:tgxaxNawIdlalIdl:tgxaxNMM:rgxaoIdb9DTmbaoaxUdbavaDBdbarydlhqkabcwfhbaecefgeaqcd46mbkakceGTmikaraqciGBdlskdnabcbaDalaqcdtfIdbarIdb:tgxJbbbb9FEgwaD7aecefgDfgecitfydlabawaDfgDcitfydlVci0mbaraqBdlkabaDadaialavaoz:ejjjbax:laoIdb9Fmbkkkjlevudndnabydwgxaladcetfgm8Vebcs4alaecetfgP8Vebgscs4falaicetfgz8Vebcs4ffaD0mbakmbcbhDabydxaq6mekavawcltfgxab8Pdw83dwaxab8Pdb83dbabydbhDdnabydwgwTmbaoaDcdtfhxawhsinalaxydbcetfcFFi87ebaxclfhxascufgsmbkkabaDawfBdbabydxhxab9cb83dwababydlaxci2fBdlaP8VebhscehDcbhxkdnascztcz91cu9kmbabaxcefBdwaPax87ebaoabydbcdtfaxcdtfaeBdbkdnam8Uebcu9kmbababydwgxcefBdwamax87ebaoabydbcdtfaxcdtfadBdbkdnaz8Uebcu9kmbababydwgxcefBdwazax87ebaoabydbcdtfaxcdtfaiBdbkarabydlfabydxci2faPRbb86bbarabydlfabydxci2fcefamRbb86bbarabydlfabydxci2fcdfazRbb86bbababydxcefBdxaDk:mPrHue99eue99eue99iu8Jjjjjbc;W;Gb9Rgx8KjjjjbdndnalmbcbhmxekcbhPaxc:m;Gbfcbc;Kbz:rjjjb8Aaxcualci9UgscltascjjjjiGEcbyd;0:G:cjbHjjjjbbgzBd:m9GaxceBd;S9GaxcuascK2gHcKfalcpFFFe0Ecbyd;0:G:cjbHjjjjbbgOBd:q9GaxcdBd;S9Gdnalci6gAmbarcd4hCascdthXaOhQazhLinavaiaPcx2fgrydwaC2cdtfhKavarydlaC2cdtfhYavarydbaC2cdtfh8AcbhraLhEinaQarfgma8Aarfg3Idbg5aYarfg8EIdbg8Fa5a8F9DEg5UdbamaKarfgaIdbg8Fa5a8Fa59DEg8FUdbamcxfgma3Idbg5a8EIdbgha5ah9EEg5UdbamaaIdbgha5aha59EEg5UdbaEa8Fa5MJbbbZNUdbaEaXfhEarclfgrcx9hmbkaQcKfhQaLclfhLaPcefgPas9hmbkkaOaHfgr9cb83dbar9cb83dzar9cb83dwaxcuascx2gralc:bjjjl0Ecbyd;0:G:cjbHjjjjbbgHBdN9GaxciBd;S9GascdthgazarfhvaxcwVhPaxclVhCaHh8Jazh8KcbhLinaxcbcj;Gbz:rjjjbhEaLas2cdthadnaAmba8Khrash3inaEarydbgmc8F91cjjjj94Vam7gmcQ4cx2fg8Ea8EydwcefBdwaEamcd4cFrGcx2fg8Ea8EydbcefBdbaEamcx4cFrGcx2fgmamydlcefBdlarclfhra3cufg3mbkkazaafh8AaHaafhXcbhmcbh3cbh8EcbhainaEamfgrydbhQara3BdbarcwfgKydbhYaKaaBdbarclfgrydbhKara8EBdbaQa3fh3aYaafhaaKa8Efh8Eamcxfgmcj;Gb9hmbkdnaAmbcbhravhminamarBdbamclfhmasarcefgr9hmbkavhrashminaEa8Aarydbg3cdtfydbg8Ec8F91a8E7cd4cFrGcx2fg8Ea8Eydbg8EcefBdbaXa8Ecdtfa3Bdbarclfhramcufgmmbka8JhrashminaCa8Aarydbg3cdtfydbg8Ec8F91a8E7cx4cFrGcx2fg8Ea8Eydbg8EcefBdbava8Ecdtfa3BdbarclfhramcufgmmbkavhrashminaPa8Aarydbg3cdtfydbg8Ec8F91cjjjj94Va8E7cQ4cx2fg8Ea8Eydbg8EcefBdbaXa8Ecdtfa3Bdbarclfhramcufgmmbkka8Jagfh8Ja8Kagfh8KaLcefgLci9hmbkaEaocetgrcuaocu9kEcbyd;0:G:cjbHjjjjbbgKBd:y9GaEclBd;S9Gdndnaoal9nmbaihralhminaKarydbcetfcFFi87ebarclfhramcufgmmbxdkkaKcFearz:rjjjb8Akcbh8EaEascbyd;0:G:cjbHjjjjbbg8ABd:C9GaOaHaHascdtfaHascitfa8AascbazaKaiawaDaqakz:hjjjbdndnalci6mba8Ahrashmina8EarRbbfh8EarcefhramcufgmmbkaE9cb83iwaE9cb83ibalawc9:fgrfcufar9UgrasaDfcufaD9Ugmaram0EhYcbhmcbhra8Ehaincbh3dnarTmba8AarfRbbceSh3kamaEaiaHydbcx2fgQydbaQclfydbaQcwfydbaKabaeadamawaqa3a3ce7a8EaY9nVaaamfaY6VGz:fjjjbfhmaHclfhHaaa8AarfRbb9Rhaasarcefgr9hmbkaEydxTmeabamcltfgraE8Piw83dwaraE8Pib83dbamcefhmxekaE9cb83iwaE9cb83ibcbhmkczhrinaEc:m;Gbfarfydbcbyd;4:G:cjbH:bjjjbbarc98fgrc989hmbkkaxc;W;Gbf8Kjjjjbamk:wKDQue99iue99iul9:euw99iu8Jjjjjbc;qb9RgP8Kjjjjbaxhsaxhzdndnavax0gHmbdnavTmbcbhOaehzavhAinawaDazydbcx2fgCcwfydbcetfgX8VebhQawaCclfydbcetfgL8VebhKawaCydbcetfgC8VebhYaXce87ebaLce87ebaCce87ebaOaKcs4aYcs4faQcs4ffhOazclfhzaAcufgAmbkaehzavhAinawaDazydbcx2fgCcwfydbcetfcFFi87ebawaCclfydbcetfcFFi87ebawaCydbcetfcFFi87ebazclfhzaAcufgAmbkcehzaqhsaOaq0mekalce86bbalcefcbavcufz:rjjjb8AxekaPaiBdxaPadBdwaPaeBdlavakaqci9Ug8Aaka8Aak6EaHEgK9RhEaxaK9Rh3aKcufh5aKceth8EaKcdtgCc98fh8FavcitgOaC9Rarfc98fhaascufhhavcufhgaraOfh8JJbbjZas:Y:vh8KcbazceakaxSEg8Lcdtg8M9Rh8NJFFuuhycuh8PcbhIcbh8RinaPclfa8RcdtfydbhQaPcb8Pd:y:G:cjbg8S83i9iaPcb8Pd:q:G:cjbgR83inaPcb8Pd1:G:cjbg8U83iUaPcb8Pdj:G:cjbg8V83i8WaPa8S83iyaPaR83iaaPa8U83iKaPa8V83izaQavcdtgYfh8WcbhXinabaQaXcdtgLfydbcK2fhAcbhzinaPc8WfazfgCaAazfgOIdbg8XaCIdbg8Ya8Xa8Y9DEUdbaCczfgCaOcxfIdbg8XaCIdbg8Ya8Xa8Y9EEUdbazclfgzcx9hmbkaba8WaXcu7cdtfydbcK2fhAcbhzaPIdUh8ZaPId9ih80aPId80h81aPId9ehBaPId8Wh83aPIdnhUinaPczfazfgCaAazfgOIdbg8XaCIdbg8Ya8Xa8Y9DEUdbaCczfgCaOcxfIdbg8XaCIdbg8Ya8Xa8Y9EEUdbazclfgzcx9hmbkaraLfgza80a8Z:tg8XaUa83:tg8YNa8YaBa81:tg8ZNa8Za8XNMMUdbazaYfaPIdyaPIdK:tg8XaPIdaaPIdz:tg8YNa8YaPId8KaPIdC:tg8ZNa8Za8XNMMUdbaXcefgXav9hmbkcbh85dnaHmbcbhAaQhza8JhCavhXinawaDazydbcx2fgOcwfydbcetfgL8Vebh8WawaOclfydbcetfg858Vebh86awaOydbcetfgO8Vebh87aLce87eba85ce87ebaOce87ebaCaAa86cs4a87cs4fa8Wcs4ffgABdbazclfhzaCclfhCaXcufgXmbkavhCinawaDaQydbcx2fgzcwfydbcetfcFFi87ebawazclfydbcetfcFFi87ebawazydbcetfcFFi87ebaQclfhQaCcufgCmbka8Jh85kdndndndndndndndndndndnava8E6mba8Eax9nmeavavaK9UgzaK29Raza320mda5aE9pmqa85Th87ceh8WaEhQxwka5ag9pmDa8Eax9nmixokavaK6mea5aE9pmwcehQaEhXa85Tmixlka5ag6mlxrka5ag9pmokcbhQaghXa85mekJFFuuh8XcbhLa5hzindnazcefgCaK6mbaQavaC9RgOaK6GmbarazcdtfIdbg8YaC:YNaravaz9RcdtfaYfc94fIdbg8ZaO:YNMg80a8X9Embdndna8KaOahf:YNg81:lJbbb9p9DTmba81:OhAxekcjjjj94hAka8ZasaA2aO9R:YNh8Zdndna8Kazasf:YNg81:lJbbb9p9DTmba81:OhOxekcjjjj94hOkamasaO2aC9R:Ya8YNa8ZMNa80Mg8Ya8Xa8Ya8X9DgOEh8XaCaLaOEhLkaza8LfgzaX6mbxlkkJFFuuh8XcbhLaEhCaahAa8FhOaKhzindnazaK6mbaQaCaK6GmbaraOfIdbg8Yaz:YNaAIdbg8ZaC:YNMg80a8X9Embdndna8Ka85aOfydbgYahf:YNg81:lJbbb9p9DTmba81:Oh8Wxekcjjjj94h8Wkamasa8W2aY9R:Yg81a8YNa8Za81NMNa80Mg8Ya8Xa8Ya8X9DgYEh8XazaLaYEhLkaCa8L9RhCaAa8NfhAaOa8MfhOaza8LfgzcufaX6mbxikka85Th87cbh8WaghQkJFFuuh8XcbhLaEhCaahAa8FhOaKhzindnazazaK9UgXaK29RaXa320mbdna8WTmbaCaCaK9UgXaK29RaXa320mekaraOfIdbg8Yaz:YNaAIdbg8ZaC:YNMg80a8X9EmbazhXaChYdna87mba85aOfydbgXhYkdndna8KaYahf:YNg81:lJbbb9p9DTmba81:Oh86xekcjjjj94h86ka8Zasa862aY9R:YNh8Zdndna8KaXahf:YNg81:lJbbb9p9DTmba81:OhYxekcjjjj94hYkamasaY2aX9R:Ya8YNa8ZMNa80Mg8Ya8Xa8Ya8X9DgXEh8XazaLaXEhLkaCa8L9RhCaAa8NfhAaOa8MfhOaza8LfgzcufaQ6mbkkaLTmba8Xay9DTmba8XhyaLhIa8Rh8Pka8Rcefg8Rci9hmbkdndnaoc8X9kmba8Pcb9omeka8Acufh85cbhYindndndnavaY9RaxaYaxfav0Eg8WTmbcbhAaeaYcdtfgzhCa8WhXinawaDaCydbcx2fgOcwfydbcetfgQ8VebhbawaOclfydbcetfgL8VebhrawaOydbcetfgO8VebhKaQce87ebaLce87ebaOce87ebaAarcs4aKcs4fabcs4ffhAaCclfhCaXcufgXmbka8WhOinawaDazydbcx2fgCcwfydbcetfcFFi87ebawaCclfydbcetfcFFi87ebawaCydbcetfcFFi87ebazclfhzaOcufgOmbkaAaq0mekalaYfgzce86bbazcefcba8Wcufz:rjjjb8AxekalaYfgzce86bbazcefcba85z:rjjjb8Aa8Ah8Wka8WaYfgYav9pmdxbkkaravcdtg8WfhLdnaITmbaPclfa8PcdtfydbhzaIhCinaLazydbfcb86bbazclfhzaCcufgCmbkkdnavaI9nmbaPclfa8PcdtfydbaIcdtfhzavaI9RhCinaLazydbfce86bbazclfhzaCcufgCmbkkcbhYindnaYa8PSmbcbhzaraPclfaYcdtfydbgKa8Wz:qjjjbhCavhXaIhOinaKaOazaLaCydbgQfRbbgAEcdtfaQBdbaCclfhCaOaAfhOazaA9RcefhzaXcufgXmbkkaYcefgYci9hmbkabaeadaialaIaocefgCarawaDaqakaxamz:hjjjbabaeaIcdtgzfadazfaiazfalaIfavaI9RaCarawaDaqakaxamz:hjjjbkaPc;qbf8Kjjjjbk:Seeru8Jjjjjbc:q;ab9Rgo8Kjjjjbaoc:q8WfcFecjzz:rjjjb8AcbhrdnadTmbaehwadhDinaoarcdtfawydbgqBdbaoc:q8WfaqcFiGcdtfgkydbhxakaqBdbawclfhwaraxaq9hfhraDcufgDmbkkabaeadaoaraiavz:jjjjbaoc:q;abf8Kjjjjbk;Sqloud99euD998Jjjjjbc:W;ab9Rgr8KjjjjbdndnadTmbaocd4hwcbhDcbhqindnavaeclfydbaw2cdtfgkIdbavaeydbaw2cdtfgxIdbgm:tgPavaecwfydbaw2cdtfgsIdlaxIdlgz:tgHNakIdlaz:tgOasIdbam:tgAN:tgCaCNaOasIdwaxIdwgX:tgQNakIdwaX:tgOaHN:tgHaHNaOaANaPaQN:tgPaPNMMgOJbbbb9Bmbarc8WfaDcltfgkaCaO:rgO:vgCUdwakaPaO:vgPUdlakaHaO:vgHUdbakaCaXNaHamNazaPNMM:mUdxaDcefhDkaecxfheaqcifgqad6mbkab9cb83dyab9cb83daab9cb83dKab9cb83dzab9cb83dwab9cb83dbaDTmearcbBd8Sar9cb83iKar9cb83izarczfavalaoarc8Sfcbcraiz:kjjjbarIdKhQarIdChLarIdzhKar9cb83iwar9cb83ibararc8WfaDczarc8Sfcbcicbz:kjjjbJbbbbhmdnarIdwgzazNarIdbgHaHNarIdlgXaXNMMgCJbbbb9BmbJbbjZaC:r:vhmkazamNhCaXamNhXaHamNhHJbbjZhmarc8WfheaDhvinaecwfIdbaCNaeIdbaHNaXaeclfIdbNMMgzamazam9DEhmaeczfheavcufgvmbkabaQUdwabaLUdlabaKUdbabarId3UdxdndnamJ;n;m;m899FmbJbbbbhzarc8WfheinaecxfIdbaQaecwfIdbgPNaKaeIdbgONaLaeclfIdbgANMMMaCaPNaHaONaXaANMM:vgPazaPaz9EEhzaeczfheaDcufgDmbkabaCUd8KabaXUdaabaHUd3abaQaCazN:tUdKabaLaXazN:tUdCabaKaHazN:tUdzabJbbjZamamN:t:rgmUdydndnaCJbbj:;aCJbbj:;9GEgzJbbjZazJbbjZ9FEJbb;:9cNJbbbZJbbb:;aCJbbbb9GEMgz:lJbbb9p9DTmbaz:Ohexekcjjjj94hekabae86b8UdndnaXJbbj:;aXJbbj:;9GEgzJbbjZazJbbjZ9FEJbb;:9cNJbbbZJbbb:;aXJbbbb9GEMgz:lJbbb9p9DTmbaz:Ohvxekcjjjj94hvkabav86bRdndnaHJbbj:;aHJbbj:;9GEgzJbbjZazJbbjZ9FEJbb;:9cNJbbbZJbbb:;aHJbbbb9GEMgz:lJbbb9p9DTmbaz:Ohwxekcjjjj94hwkabaw86b8SdndnaecKtcK91:YJbb;:9c:vaC:t:lavcKtcK91:YJbb;:9c:vaX:t:lawcKtcK91:YJbb;:9c:vaH:t:lamMMMJbb;:9cNJbbjZMgm:lJbbb9p9DTmbam:Ohexekcjjjj94hekaecFbaecFb9iEhexekabcjjj;8iBdycFbhekabae86b8Vxekab9cb83dyab9cb83daab9cb83dKab9cb83dzab9cb83dwab9cb83dbkarc:W;abf8Kjjjjbk;7woDuo99eue99euv998Jjjjjbcje9Rgw8Kjjjjbawc;abfcbaocdtgDz:rjjjb8Aawc;GbfcbaDz:rjjjb8AawcafhDawhqaohkinaqcFFF97BdbaDcFFF;7rBdbaqclfhqaDclfhDakcufgkmbkavcd4hxaicd4hmdnadTmbaocx2hPcbhsinashzdnarTmbarascdtfydbhzkaeazam2cdtfgDIdwhHaDIdlhOaDIdbhAalazax2cdtfIdbhCcbhDawcafhqawc;Gbfhvawhkawc;abfhiinaCaDc:O:G:cjbfIdbaHNaDc:G:G:cjbfIdbaANaDc:K:G:cjbfIdbaONMMgXMhQazhLdnaXaC:tgXaqIdbgK9DgYmbavydbhLkavaLBdbazhLdnaQakIdbg8A9EmbaiydbhLa8AhQkaiaLBdbakaQUdbaqaXaKaYEUdbaiclfhiakclfhkavclfhvaqclfhqaPaDcxfgD9hmbkascefgsad9hmbkkJbbbbhQcbhLawc;GbfhDawc;abfhqcbhkinalaqydbgvax2cdtfIdbalaDydbgiax2cdtfIdbaeavam2cdtfgvIdwaeaiam2cdtfgiIdw:tgCaCNavIdbaiIdb:tgCaCNavIdlaiIdl:tgCaCNMM:rMMgCaQaCaQ9EgvEhQakaLavEhLaqclfhqaDclfhDaoakcefgk9hmbkJbbbbhCdnaeawc;abfaLcdtgqfydbgkam2cdtfgDIdwaeawc;Gbfaqfydbgvam2cdtfgqIdwgH:tgXaXNaDIdbaqIdbgA:tg8Aa8ANaDIdlaqIdlgE:tgOaONMMgKJbbbb9ETmbaK:rgCalakax2cdtfIdbMalavax2cdtfIdb:taCaCM:vhCkaQJbbbZNhKaXaCNaHMhHaOaCNaEMhOa8AaCNaAMhAdnadTmbcbhqarhkinaqhDdnarTmbakydbhDkdnalaDax2cdtfIdbg3aeaDam2cdtfgDIdwaH:tgQaQNaDIdbaA:tgCaCNaDIdlaO:tgXaXNMMg5:rgEMg8EaK9ETmbJbbbbh8Adna5Jbbbb9ETmba8EaK:taEaEM:vh8Aka8AaQNaHMhHa8AaXNaOMhOa8AaCNaAMhAa3aKaEMMJbbbZNhKkakclfhkadaqcefgq9hmbkkabaKUdxabaHUdwabaOUdlabaAUdbawcjef8Kjjjjbk:reevu8Jjjjjbcj8W9Rgr8Kjjjjbaici2hwcbhDdnaiTmbarhiawhqinaiaeadRbbgkcdtfydbBdbaDakcefgkaDak0EhDaiclfhiadcefhdaqcufgqmbkkabarawaeaDalaoz:jjjjbarcj8Wf8Kjjjjbk:Eeeeu8Jjjjjbca9Rgo8Kjjjjbab9cb83dyab9cb83daab9cb83dKab9cb83dzab9cb83dwab9cb83dbdnadTmbaocbBd3ao9cb83iwao9cb83ibaoaeadaialaoc3falEavcbalEcrcbz:kjjjbabao8Pib83dbabao8Piw83dwkaocaf8Kjjjjbk::meQu8Jjjjjbcjz9Rgv8KjjjjbcbhoavcjPfcbaez:rjjjb8Aavcjxfcbaez:rjjjb8AdnaiTmbadhoaihrinavcjxfaoRbbfgwawRbbcef86bbavcjxfaocefRbbfgwawRbbcef86bbavcjxfaocdfRbbfgwawRbbcef86bbaocifhoarcufgrmbkcbhDcjehoadhqcehkindndnalTmbcbhxcuhmaqhrakhwcuhPinawcufamaoavcjPfarcefRbbgsfRbb9RcFeGgzci6aoavcjPfarRbbgHfRbb9RcFeGgOci6faoavcjPfarcdfRbbgAfRbb9RcFeGgCci6fgXcOtaOcFr7azaCf9RcwtVavcjxfaAfRbbgzavcjxfaHfRbbgHavcjxfasfRbbgsaHas6Egsazas6EcFe7VgsaP9kgzEhmaXcd6gHaxcefgOal9iVce9hmdasaPazEhPaxaOaHEhxarcifhrawai6hsawcefhwasmbxdkkcuhmaqhrakhwcuhxinawcufamaoavcjPfarcefRbbfRbb9RcFeGci6aoavcjPfarRbbfRbb9RcFeGci6faoavcjPfarcdfRbbfRbb9RcFeGci6fgPax9kgsEhmaPce0meaPaxasEhxarcifhrawai6hPawcefhwaPmbkkadamci2fgrcdfRbbhwarcefRbbhxarRbbhPadaDci2fgrcifaramaD9Rci2zNjjjb8AaPavcjPffaocefgo86bbaPavcjxffgmamRbbcuf86bbaxavcjPffao86bbaxavcjxffgmamRbbcuf86bbarcdfaw86bbarcefax86bbaraP86bbawavcjPffao86bbawavcjxffgrarRbbcuf86bbaqcifhqakcefhkaDcefgDai9hmbkcbhzdnalcb9mmbcbhsavcjPfcbaez:rjjjb8Aadcvfhlinadasci2fgxcefgDRbbhoaxcdfgqRbbhrdndnavcjPfaxRbbgmfRbbmbavcjPfarfRbbhwdndndnavcjPfaofRbbTmbawcFeGTmexikawcFeGmdascefgAai9pmdasc980mdascifhQcbhLarcFeGhCamcFeGhXalhwcbhKcbhYinawcufRbbhPawRbbhOcehkdndnawc9:fRbbgHao9hmbaPcFeGamSmekdnaPcFeGao9hmbaOcFeGamSmekaHamSaOcFeGaoSGhkkceh8AaYceGhYdndnaHar9hmbaPcFeGaoSmekdnaPcFeGar9hmbaOcFeGaoSmekaHaoSaOcFeGarSGh8AkakaYVhYaLaHcFeGgHaXSaPcFeGgPaCSGaPaXSaOcFeGgPaCSGVaHaCSaPaXSGVVhLa8AaKceGVhKdnaAcefgPai9pmbawcifhwaAaQ6hHaPhAaHmekkaYTmeaKmekarhwaohPaohHarhOamhrxdkdnaYTaLVceGTmbaYaKTVaLVceGmekamhwarhParhHamhOaohrxekaohwamhPamhHaohOkavcjPfarfce86bbavcjPfawfce86bbaxaH86bbaqar86bbaDaO86bbavcjPfaPfce86bbalcifhlascefgsai9hmbkkavcFeaecetz:rjjjbhwaici2hrindnawadRbbgmcetfgx8Uebgocu9kmbaxaz87ebawcjlfazcdtfabamcdtfydbBdbazhoazcefhzkadao86bbadcefhdarcufgrmbkazcdthokabavcjlfaoz:qjjjb8Aavcjzf8KjjjjbkObabaiaeadcbz:njjjbk9teiucbcbyd;8:G:cjbgeabcifc98GfgbBd;8:G:cjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;LeeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiclfaeclfydbBdbaicwfaecwfydbBdbaicxfaecxfydbBdbaeczfheaiczfhiadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk;aeedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdbaicxfalBdbaicwfalBdbaiclfalBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabk9teiucbcbyd;8:G:cjbgeabcrfc94GfgbBd;8:G:cjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikTeeucbabcbyd;8:G:cjbge9Rcifc98GaefgbBd;8:G:cjbdnabZbcztge9nmbabae9RcFFifcz4nb8Akk:3qeludndnadch6mbadTmeabaead;8qbbabskabaeSmbdnaeadabfgi9Rcbadcet9R0mbadTmeabaead;8qbbabskaeab7ciGhldndndnabae9pmbdnalTmbadhvabhixikdnabciGmbadhvabhixdkadTmiabaeRbb86bbadcufhvdnabcefgiciGmbaecefhexdkavTmiabaeRbe86beadc9:fhvdnabcdfgiciGmbaecdfhexdkavTmiabaeRbd86bdadc99fhvdnabcifgiciGmbaecifhexdkavTmiabaeRbi86biabclfhiaeclfheadc98fhvxekdnalmbdnaiciGTmbadTmlabadcufgifglaeaifRbb86bbdnalciGmbaihdxekaiTmlabadc9:fgifglaeaifRbb86bbdnalciGmbaihdxekaiTmlabadc99fgifglaeaifRbb86bbdnalciGmbaihdxekaiTmlabadc98fgdfaeadfRbb86bbkadcl6mbdnadc98fgocxGcxSmbaocd4cefciGhiaec98fhlabc98fhvinavadfaladfydbBdbadc98fhdaicufgimbkkaocx6mbaec9Wfhvabc9WfhoinaoadfgicxfavadfglcxfydbBdbaicwfalcwfydbBdbaiclfalclfydbBdbaialydbBdbadc9Wfgdci0mbkkadTmdadhidnadciGglTmbaecufhvabcufhoadhiinaoaifavaifRbb86bbaicufhialcufglmbkkadcl6mdaec98fhlabc98fhvinavaifgecifalaifgdcifRbb86bbaecdfadcdfRbb86bbaecefadcefRbb86bbaeadRbb86bbaic98fgimbxikkavcl6mbdnavc98fglc3Gc3Smbavalcd4cefcrGgdcdt9RhvinaiaeydbBdbaeclfheaiclfhiadcufgdmbkkalc36mbinaiaeydbBdbaiclfaeclfydbBdbaicwfaecwfydbBdbaicxfaecxfydbBdbaiczfaeczfydbBdbaicCfaecCfydbBdbaicKfaecKfydbBdbaic3faec3fydbBdbaecafheaicafhiavc9Gfgvci0mbkkavTmbdndnavcrGgdmbavhlxekavc94GhlinaiaeRbb86bbaicefhiaecefheadcufgdmbkkavcw6mbinaiaeRbb86bbaicefaecefRbb86bbaicdfaecdfRbb86bbaicifaecifRbb86bbaiclfaeclfRbb86bbaicvfaecvfRbb86bbaicofaecofRbb86bbaicrfaecrfRbb86bbaicwfhiaecwfhealc94fglmbkkabkk:pedbcj:GdktFFuuFFuuFFuubbbbFFuFFFuFFFuFbbbbbbjZbbbbbbbbbbbbbbjZbbbbbbbbbbbbbbjZ86;nAZ86;nAZ86;nAZ86;nA:;86;nAZ86;nAZ86;nAZ86;nA:;86;nAZ86;nAZ86;nAZ86;nA:;bc;0:Gdkxebbbdbbbj:qbb",e=new Uint8Array([32,0,65,2,1,106,34,33,3,128,11,4,13,64,6,253,10,7,15,116,127,5,8,12,40,16,19,54,20,9,27,255,113,17,42,67,24,23,146,148,18,14,22,45,70,69,56,114,101,21,25,63,75,136,108,28,118,29,73,115]);if(typeof WebAssembly!="object")return{supported:!1};var t,n=WebAssembly.instantiate(a(i),{}).then(function(y){t=y.instance,t.exports.__wasm_call_ctors()});function a(y){for(var b=new Uint8Array(y.length),u=0;u<y.length;++u){var g=y.charCodeAt(u);b[u]=g>96?g-97:g>64?g-39:g+4}for(var S=0,u=0;u<y.length;++u)b[S++]=b[u]<60?e[b[u]]:(b[u]-60)*64+b[++u];return b.buffer.slice(0,S)}function s(y){if(!y)throw new Error("Assertion failed")}function r(y){return new Uint8Array(y.buffer,y.byteOffset,y.byteLength)}var o=48,l=16;function c(y,b){var u=y.meshlets[b*4+0],g=y.meshlets[b*4+1],S=y.meshlets[b*4+2],x=y.meshlets[b*4+3];return{vertices:y.vertices.subarray(u,u+S),triangles:y.triangles.subarray(g,g+x*3)}}function h(y,b,u,g,S,x,M,w,T,v){var E=t.exports.sbrk,I=t.exports.meshopt_buildMeshletsBound(b.length,x,M),C=E(I*l),N=E(b.length*4),L=E(b.length),P=E(b.byteLength),F=E(u.byteLength),z=new Uint8Array(t.exports.memory.buffer);z.set(r(b),P),z.set(r(u),F);var G=y(C,N,L,P,b.length,F,g,S,x,M,w,T,v);z=new Uint8Array(t.exports.memory.buffer);for(var Z=z.subarray(C,C+G*l),V=new Uint32Array(Z.buffer,Z.byteOffset,Z.byteLength/4).slice(),K=0;K<G;++K){var ee=V[K*4+0],be=V[K*4+1],g=V[K*4+2],pe=V[K*4+3];t.exports.meshopt_optimizeMeshlet(N+ee*4,L+be,pe,g)}var qe=G?V[(G-1)*4+0]+V[(G-1)*4+2]:0,Le=G?V[(G-1)*4+1]+V[(G-1)*4+3]*3:0,We={meshlets:V,vertices:new Uint32Array(z.buffer,N,qe).slice(),triangles:new Uint8Array(z.buffer,L,Le).slice(),meshletCount:G};return E(C-E(0)),We}function d(y){var b=new Float32Array(t.exports.memory.buffer,y,o/4);return{centerX:b[0],centerY:b[1],centerZ:b[2],radius:b[3],coneApexX:b[4],coneApexY:b[5],coneApexZ:b[6],coneAxisX:b[7],coneAxisY:b[8],coneAxisZ:b[9],coneCutoff:b[10]}}function f(y,b,u,g){var S=t.exports.sbrk,x=[],M=S(b.byteLength),w=S(y.vertices.byteLength),T=S(y.triangles.byteLength),v=S(o),E=new Uint8Array(t.exports.memory.buffer);E.set(r(b),M),E.set(r(y.vertices),w),E.set(r(y.triangles),T);for(var I=0;I<y.meshletCount;++I){var C=y.meshlets[I*4+0],N=y.meshlets[I*4+1],L=y.meshlets[I*4+3];t.exports.meshopt_computeMeshletBounds(v,w+C*4,T+N,L,M,u,g),x.push(d(v))}return S(M-S(0)),x}function p(y,b,u,g){var S=t.exports.sbrk,x=S(o),M=S(y.byteLength),w=S(b.byteLength),T=new Uint8Array(t.exports.memory.buffer);T.set(r(y),M),T.set(r(b),w),t.exports.meshopt_computeClusterBounds(x,M,y.length,w,u,g);var v=d(x);return S(x-S(0)),v}function m(y,b,u,g,S){var x=t.exports.sbrk,M=x(o),w=x(y.byteLength),T=g?x(g.byteLength):0,v=new Uint8Array(t.exports.memory.buffer);v.set(r(y),w),g&&v.set(r(g),T),t.exports.meshopt_computeSphereBounds(M,w,b,u,T,g?S:0);var E=d(M);return x(M-x(0)),E}return{ready:n,supported:!0,buildMeshlets:function(y,b,u,g,S,x){s(y.length%3==0),s(b instanceof Float32Array),s(b.length%u==0),s(u>=3),s(g>=3&&g<=256),s(S>=1&&S<=512),x=x||0;var M=y.BYTES_PER_ELEMENT==4?y:new Uint32Array(y);return h(t.exports.meshopt_buildMeshletsFlex,M,b,b.length/u,u*4,g,S,S,x,0)},buildMeshletsFlex:function(y,b,u,g,S,x,M,w){s(y.length%3==0),s(b instanceof Float32Array),s(b.length%u==0),s(u>=3),s(g>=3&&g<=256),s(S>=1&&x<=512),s(S<=x),M=M||0,w=w||0;var T=y.BYTES_PER_ELEMENT==4?y:new Uint32Array(y);return h(t.exports.meshopt_buildMeshletsFlex,T,b,b.length/u,u*4,g,S,x,M,w)},buildMeshletsSpatial:function(y,b,u,g,S,x,M){s(y.length%3==0),s(b instanceof Float32Array),s(b.length%u==0),s(u>=3),s(g>=3&&g<=256),s(S>=1&&x<=512),s(S<=x),M=M||0;var w=y.BYTES_PER_ELEMENT==4?y:new Uint32Array(y);return h(t.exports.meshopt_buildMeshletsSpatial,w,b,b.length/u,u*4,g,S,x,M)},extractMeshlet:function(y,b){return s(b>=0&&b<y.meshletCount),c(y,b)},computeClusterBounds:function(y,b,u){s(y.length%3==0),s(y.length/3<=512),s(b instanceof Float32Array),s(b.length%u==0),s(u>=3);var g=y.BYTES_PER_ELEMENT==4?y:new Uint32Array(y);return p(g,b,b.length/u,u*4)},computeMeshletBounds:function(y,b,u){return s(b instanceof Float32Array),s(b.length%u==0),s(u>=3),f(y,b,b.length/u,u*4)},computeSphereBounds:function(y,b,u,g){return s(y instanceof Float32Array),s(y.length%b==0),s(b>=3),s(!u||u instanceof Float32Array),s(!u||u.length%g==0),s(!u||g>=1),s(!u||y.length/b==u.length/g),g=g||0,m(y,y.length/b,b*4,u,g*4)}}})();var Rv=(function(){var i="b9H79Tebbbegv9Geueu9Geub9Gbb9Gkuuuuuuuuuuub9Giuuueuirodiblbelve9Weiiviebeoweuecj:Gdkrnlo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bbK9TW79O9V9Wt9F9NW9UWV9HtW9u9H9U9NW9Ut7bel79IV9RbdDwebcekdlvq;m8Lodbk:wgvOuw99iuv99vu8Jjjjjbc;Wb9Rgk8Kjjjjbakcxfcbc;Kbz:djjjb8AakcualcdtgxalcFFFFi0Ecbyd:q:G:cjbHjjjjbbgmBdxakceBd2adci9UhPalcd4alfhscehzinazgHcethzaHas6mbkakcuaHcdtgzaHcFFFFi0Ecbyd:q:G:cjbHjjjjbbgsBdzakcdBd2ascFeazz:djjjbhOaDcd4hAarcd4hCavcd4hXdnalTmbaHcufhrcbhvindndnaOcbaiavaX2cdtfgHydlgDaDcjjjj94SEgscH4cbaoavaC2cdtfgzydlgQcs4aQcjjjj94SE7as7c:F:b:DD2cbaHydbgLaLcjjjj94SEgscH4cbazydbgKcs4aKcjjjj94SE7as7c;D;O:B8J27cbaHydwgYaYcjjjj94SEgHcH4cbazydwg8Acs4a8Acjjjj94SE7aH7c:3F;N8N27awavaA2cdtfgHydlgEaHydbg37cFFFFrGgHcm4aH7c:fjjK27arGgscdtfgHydbgzcuSmbaE::h5a3::h8Ea8A::h8FaQ::haaK::hhaY::hgaD::h8JaL::h8KcehDinaDhHdnaiazaX2cdtfgDIdba8K9CmbaDIdla8J9CmbaDIdwag9CmbaoazaC2cdtfgDIdbah9CmbaDIdlaa9CmbaDIdwa8F9CmbawazaA2cdtfgDIdba8E9CmbaDIdla59BmikaHcefhDaOasaHfarGgscdtfgHydbgzcu9hmbkkaHavBdbavhzkamavcdtfazBdbavcefgval9hmbkkaOcbydN:G:cjbH:bjjjbbakceBd2akcualcefgHcdtaHcFFFFi0Ecbyd:q:G:cjbHjjjjbbg8LBdzakcdBd2akcuadcdtadcFFFFi0EgYcbyd:q:G:cjbHjjjjbbg8MBdCakciBd2a8Lclfcbaxz:djjjbhzdnadTmbdnaeTmbaehHadhsinazamaHydbcdtfydbcdtfgDaDydbcefBdbaHclfhHascufgsmbxdkkamhHadhsinazaHydbcdtfgDaDydbcefBdbaHclfhHascufgsmbkkdnalTmbcbhsazhHalhDinaHydbhOaHasBdbaHclfhHaOasfhsaDcufgDmbkkdnadci6gQmbcbhscdhHaPhOindndnaeTmbamaeasfgvydbcdtfhDamavcwfydbcdtfhramavclfydbcdtfhvxekamasfgDcwfhraDclfhvkarydbhravydbhvazaDydbcdtfgDaDydbgDcefBdba8MaDcdtfaHc9:fBdbazavcdtfgDaDydbgDcefBdba8MaDcdtfaHcufBdbazarcdtfgDaDydbgDcefBdba8MaDcdtfaHBdbascxfhsaHclfhHaOcufgOmbkkcbhsa8LcbBdbakcuaPcltadcFFFFd0Ecbyd:q:G:cjbHjjjjbbg8NBdKakclBd2dnaQmbaehza8NhHaPhvindndnaeTmbazcwfydbhDazclfydbhOazydbhrxekascdfhDascefhOashrkJbbbbh8KJbbbbJbbbbJbbbbJbbbbJbbjZJbbj:;awaOaA2cdtfgQIdbawaraA2cdtfgLIdbgh:tawaDaA2cdtfgKIdlaLIdlgg:tg8JNaQIdlag:tggaKIdbah:tN:tghJbbbb9EEahJbbbb9BEg8EaiaraX2cdtfgrIdwghaiaOaX2cdtfgOIdwg59BEa8EarIdlgaaOIdlgy9BEa8EarIdbg8FaOIdbg8P9BEg8EahaiaDaX2cdtfgDIdwgI9BEa8EaaaDIdlg8R9BEa8Ea8FaDIdbg8S9BEg8Ea5aI9BEa8Eaya8R9BEa8Ea8Pa8S9BEh8Edna8Ja5ah:tNagaIah:tN:tghahNa8Ja8Pa8F:tNaga8Sa8F:tN:tg8Fa8FNa8Jayaa:tNaga8Raa:tN:tg8Ja8JNMMggJbbbb9Bmba8Eag:r:vh8KkaHcxfa8EUdbaHcwfaha8KNUdbaHclfa8Ja8KNUdbaHa8Fa8KNUdbazcxfhzaHczfhHascifhsavcufgvmbkkcbhHakaYcbyd:q:G:cjbHjjjjbbgDBd3akcvBd2dnadTmbaDhzinazaHBdbazclfhzadaHcefgH9hmbkkakcuaPcdtadcFFFF970Ecbyd:q:G:cjbHjjjjbbgvBdaakcoBd2akaPcbyd:q:G:cjbHjjjjbbg8ABd8KakcrBd2dnadci6mba8NcxfhzavhscbhHinasaHBdba8AaHfcdcbazIdbg8KJbbbb9DEa8KJbbbb9EV86bbasclfhsazczfhzaPaHcefgH9hmbkkdnalTmbcbhRinaRcdthHdna8LaRcefgRcdtfydbgza8LaHfydbgHSmbazaH9RhLa8MaHcdtfhKcbh8UinaKa8Ucdtfg8VydbgHcd4g8Wci2gxaHciGcdtgzyd:e:G:cjbfhHaxazydj:G:cjbfhzdnaeTmbaeaHcdtfydbhHaeazcdtfydbhzkdna8Ucefg8UaL9pmbamaHcdtfydbhYamazcdtfydbh3a8Aa8WfhEava8Wcdtfh8Xa8UhwinaKawcdtfgQydbgHcd4gzci2gAaHciGcdtgHyd:e:G:cjbfhsaAaHydj:G:cjbfhHdnaeTmbaeascdtfydbhsaeaHcdtfydbhHkdndnamaHcdtfydbaYSmbamascdtfydba39hmeka8AazfRbbgHaERbbgsVciSmbdnaHasGmba8Whsdna8Wa8XydbgHSmba8XhOinaOavaHgscdtfgrydbgHBdbarhOasaH9hmbkkdnazavazcdtfgOydbgHSmbinaOavaHgzcdtfgrydbgHBdbarhOazaH9hmbkkasazSmba8AazfgORbba8AasfgHRbbVciSmeavazcdtfasBdbaHaHRbbaORbbV86bbkdna8VydbciGaxfgzaDazcdtfgsydbgHSmbinasaDaHgzcdtfgOydbgHBdbaOhsazaH9hmbkkdnaQydbciGaAfgsaDascdtfgOydbgHSmbinaOaDaHgscdtfgrydbgHBdbarhOasaH9hmbkkazasSmbaDascdtfazBdbkawcefgwaL9hmbkka8UaL9hmbkkaRal9hmbkkdnadTmbcbhrinarhzdnaraDarcdtfgwydbgHSmbawhsinasaDaHgzcdtfgOydbgHBdbaOhsazaH9hmbkkawazBdbarcefgrad9hmbkcbh8Vabcbadcltz:djjjbhKdnadci6mbaqceGhEaDhYaeh3cbh8Windna8Na8WcltfgsIdxJbbbb9Bmbama8Wcx2gHfhxaeaHfhLcbhza8VhwinaKaYazfydbcltfhHdndnaeTmbamaLazc:e:G:cjbfydbcdtfydbcdtfhAamaLazcj:G:cjbfydbcdtfydbcdtfhra3azfydbhOxekaxazc:e:G:cjbfydbcdtfhAaxazcj:G:cjbfydbcdtfhrawhOkaHasIdbggaoamaOcdtfydbgQaC2cdtfgOIdbg8KasIdwg8FaOIdwg8JNaga8KNasIdlg8EaOIdlggNMMghN:tgaJbbbbJbbjZa8Fa8JahN:tg8Fa8FNaaaaNa8EagahN:tghahNMMga:r:vaaJbbbb9BEJ;As6nJbbjZaiarydbaX2cdtfgOIdwaiaQaX2cdtfgrIdwg5:tgaa8Jaaa8JNaOIdbarIdbgy:tg8Pa8KNagaOIdlarIdlgI:tg8RNMMgaN:tg8EaiaAydbaX2cdtfgOIdwa5:tg5a8Ja5a8JNaOIdbay:tg8Sa8KNagaOIdlaI:tgINMMg5N:tg8JNa8Pa8KaaN:tgya8Sa8Ka5N:tg8KNa8RagaaN:tgaaIaga5N:tggNMMJbbbbJbbjZa8Ea8ENayayNaaaaNMMa8Ja8JNa8Ka8KNagagNMMNg8K:rg8J:va8KJbbbb9BENgg:lg8Ka8KJbbjZ9EEg8Ka8KJ7;A9s89NJ:L9t9s::MNJ;ob;jZMJbbjZa8K:t:rNg8K:ta8KagJbbbb9DENg8Ka8Ja8KNaEEg8KNaHIdbMUdbaHaha8KNaHIdlMUdlaHa8Fa8KNaHIdwMUdwawcefhwazclfgzcx9hmbkkaYcxfhYa3cxfh3a8Vcifh8Va8Wcefg8WaP9hmbkcbhrinarhzdnaravarcdtfgsydbgHSmbinasavaHgzcdtfgOydbgHBdbaOhsazaH9hmbkkaKarc8W2fgHc3fJbbjZJbbj:;a8AazfRbbceGEg8KUdbaHc8Sfa8KUdbaHa8KUdxarcefgraP9hmbkkaqcdGhvcbhzaDhsaKhHindnazasydb9hmbJbbbbh8KdnaHcwfgOIdbg8Ja8JNaHIdbggagNaHclfgrIdbghahNMMgaJbbbb9BmbJbbjZaa:r:vh8KkaOa8Ja8KNUdbaraha8KNUdbaHaga8KNg8JUdbavmbaHJbbjZa8Ja8KJbbbb9BEUdbkasclfhsaHczfhHadazcefgz9hmbkcbhHaKhzindnaHaDydbgsSmbazaKascltfgsydwBdwazas8Pdb83dbkaDclfhDazczfhzadaHcefgH9hmbkkdnakyd2gzTmbazcdtakcxffc98fhHinaHydbcbydN:G:cjbH:bjjjbbaHc98fhHazcufgzmbkkakc;Wbf8Kjjjjbk9teiucbcbyd:y:G:cjbgeabcifc98GfgbBd:y:G:cjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;aeedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdbaicxfalBdbaicwfalBdbaiclfalBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabk9teiucbcbyd:y:G:cjbgeabcrfc94GfgbBd:y:G:cjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikTeeucbabcbyd:y:G:cjbge9Rcifc98GaefgbBd:y:G:cjbdnabZbcztge9nmbabae9RcFFifcz4nb8Akkk8Rdbcj:Gdkzebbbdbbbbbbbebbbbc:q:Gdkxebbbdbbba:qbb",e=new Uint8Array([32,0,65,2,1,106,34,33,3,128,11,4,13,64,6,253,10,7,15,116,127,5,8,12,40,16,19,54,20,9,27,255,113,17,42,67,24,23,146,148,18,14,22,45,70,69,56,114,101,21,25,63,75,136,108,28,118,29,73,115]);if(typeof WebAssembly!="object")return{supported:!1};var t,n=WebAssembly.instantiate(a(i),{}).then(function(c){t=c.instance,t.exports.__wasm_call_ctors()});function a(c){for(var h=new Uint8Array(c.length),d=0;d<c.length;++d){var f=c.charCodeAt(d);h[d]=f>96?f-97:f>64?f-39:f+4}for(var p=0,d=0;d<c.length;++d)h[p++]=h[d]<60?e[h[d]]:(h[d]-60)*64+h[++d];return h.buffer.slice(0,p)}function s(c){if(!c)throw new Error("Assertion failed")}function r(c){return new Uint8Array(c.buffer,c.byteOffset,c.byteLength)}function o(c,h,d,f,p,m,y,b,u,g){var S=t.exports.sbrk,x=S(h*16),M=c?S(c.byteLength):0,w=S(d.byteLength),T=S(m.byteLength),v=S(b.byteLength),E=new Uint8Array(t.exports.memory.buffer);c&&E.set(r(c),M),E.set(r(d),w),E.set(r(m),T),E.set(r(b),v),t.exports.meshopt_generateTangents(x,M,h,w,f,p*4,T,y*4,v,u*4,g),E=new Uint8Array(t.exports.memory.buffer);var I=new Float32Array(E.buffer,x,h*4).slice();return S(x-S(0)),I}var l={Compatible:1,ZeroFallback:2};return{ready:n,supported:!0,generateTangents:function(c,h,d,f,p,m,y,b){s(c===null||c instanceof Uint32Array||c instanceof Int32Array||c instanceof Uint16Array||c instanceof Int16Array),s(c===null||c.length%3==0),s(h instanceof Float32Array),s(h.length%d==0),s(d>=3),s(f instanceof Float32Array),s(f.length%p==0),s(p>=3),s(m instanceof Float32Array),s(m.length%y==0),s(y>=2),s(h.length/d==f.length/p),s(h.length/d==m.length/y),s(c!==null||h.length/d%3==0);for(var u=0,g=0;g<(b?b.length:0);++g)s(b[g]in l),u|=l[b[g]];var S=h.length/d,x=c?c.length:S,M=c===null||c.BYTES_PER_ELEMENT==4?c:new Uint32Array(c);return o(M,x,h,S,d,f,p,m,y,u)}}})();location.protocol!=="file:"&&lx();function lx(){let i=document.currentScript,e=new URL("../",i.src),t=!location.hash&&(location.pathname.endsWith("/")||location.pathname.endsWith("/index.html"));t&&"scrollRestoration"in history&&(history.scrollRestoration="manual");function n(){if(!t)return;let v=document.documentElement,E=v.style.scrollBehavior;v.style.scrollBehavior="auto",window.scrollTo(0,0),requestAnimationFrame(()=>{window.scrollTo(0,0),v.style.scrollBehavior=E})}n();let a=performance.now(),s=1800,r=document.getElementById("studio-preloader")||document.createElement("div");r.id="studio-preloader",r.setAttribute("role","status"),r.setAttribute("aria-label","Loading Web Designss"),r.querySelector(".intro-progress")||(r.innerHTML='<div class="bird-stage" aria-hidden="true"></div><div class="intro-progress"><span id="intro-percent">0</span><span>%</span></div><div class="intro-track"><span></span></div><p class="intro-caption">Preparing your experience</p><button class="intro-retry" hidden>Reload website</button>'),r.isConnected||document.documentElement.append(r);let o=r.querySelector("#intro-percent"),l=r.querySelector(".intro-track span"),c=r.querySelector(".intro-caption");r.querySelector("button").onclick=()=>location.reload();let h,d,f,p,m,y=!1,b,u=performance.now(),S=matchMedia("(prefers-reduced-motion: reduce)").matches;try{h=new vo({alpha:!0,antialias:!0,powerPreference:"low-power"}),h.setPixelRatio(Math.min(devicePixelRatio,1.5)),h.setSize(320,260),h.outputColorSpace=ft,h.toneMapping=hs,d=new Hi,f=new _t(32,320/260,.001,100),d.add(new as(16777215,1659243,2.5));let v=new Ra(16777215,3);v.position.set(2,4,3),d.add(v),new So().setMeshoptDecoder(Wd).load(new URL("assets/scene/hummingbird.glb",e).href,I=>{if(y){T(I.scene);return}m=I.scene,m.traverse(z=>{if(z.name.includes("Props1")&&(z.visible=!1),!z.isMesh)return;if(z.name.startsWith("WebDesignss_Tail_")){z.material=Kd();return}(Array.isArray(z.material)?z.material:[z.material]).forEach(Z=>{/Hummingbird_(body|feather)/.test(Z.name)&&(Z.metalness=0,Z.roughness=.8,Z.onBeforeCompile=V=>{V.fragmentShader=V.fragmentShader.replace("#include <map_fragment>",`#include <map_fragment>
       float rawLight=dot(diffuseColor.rgb,vec3(.2126,.7152,.0722)); float shade=pow(clamp(rawLight,0.,1.),.48);
       float chroma=max(diffuseColor.r,max(diffuseColor.g,diffuseColor.b))-min(diffuseColor.r,min(diffuseColor.g,diffuseColor.b));
       float breast=smoothstep(.18,.52,rawLight)*(1.-smoothstep(.08,.28,chroma));
       diffuseColor.rgb=mix(mix(vec3(.003,.025,.065),vec3(.015,.34,.57),shade),mix(mix(vec3(.30,.045,.004),vec3(.95,.23,.025),shade),vec3(.92,.84,.66),smoothstep(.82,.98,rawLight)),breast);`)})})}),Jd(m),d.add(m),p=new cs(m),p.timeScale=.18;let C=I.animations.find(z=>z.name.includes("nectar_picking"))||I.animations[0];C&&(p.clipAction(C).play(),p.update(.1));let N=new zt().setFromObject(m),L=N.getSize(new O),P=N.getCenter(new O),F=Math.max(L.x,L.y,L.z)*2.2;f.position.copy(P).add(new O(F*.75,F*.15,F)),f.lookAt(P),r.querySelector(".bird-stage").append(h.domElement)},void 0,()=>{})}catch{}function x(){let v=window.__WEB_DESIGNS_SCENE_API,E=document.getElementById("pwb-body-wrap");return!!v?.renderer?.domElement?.isConnected&&(!E||Number(getComputedStyle(E).opacity)>.98)}function M(v){if(y)return;let E=a===null?0:v-a,I=Math.min(100,Math.floor(E/s*100));if(o.textContent=I,l.style.transform=`scaleX(${I/100})`,h&&d&&f&&m&&(S||p?.update(Math.min((v-u)/1e3,.05)),h.render(d,f)),u=v,E>=s&&x()){hx(),dx(e),w();return}E>=s&&(c.textContent="Preparing the 3D scene"),E>2e4&&(c.textContent="The scene is taking longer than expected. Please try reloading.",r.querySelector("button").hidden=!1),b=requestAnimationFrame(M)}function w(){n(),y=!0,cancelAnimationFrame(b),r.classList.add("intro-complete"),setTimeout(()=>{n(),r.remove(),p?.stopAllAction(),m&&T(m),h?.dispose(),h?.forceContextLoss()},250)}function T(v){v.traverse(E=>{E.geometry?.dispose(),E.material&&(Array.isArray(E.material)?E.material:[E.material]).forEach(I=>{for(let C of Object.values(I))C?.isTexture&&C.dispose();I.dispose()})})}b=requestAnimationFrame(M)}function Kd(){let i=new jn({color:new Re(.015,.34,.57),roughness:.72,metalness:0,side:Kt});return i.onBeforeCompile=e=>{e.vertexShader=`varying vec2 tailUv;
`+e.vertexShader,e.vertexShader=e.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
 tailUv=uv;`),e.fragmentShader=`varying vec2 tailUv;
`+e.fragmentShader,e.fragmentShader=e.fragmentShader.replace("#include <map_fragment>",`#include <map_fragment>
   float shaft=1.-smoothstep(.008,.028,abs(tailUv.x-.5));
   float barbs=.96+.04*sin((tailUv.y+abs(tailUv.x-.5)*.24)*460.);
   diffuseColor.rgb*=mix(.64,1.,sin(tailUv.x*3.14159)) * barbs;
   diffuseColor.rgb=mix(diffuseColor.rgb,vec3(.025,.40,.65),shaft*.35);`)},i.customProgramCacheKey=()=>"web-designss-complete-tail-v2",i}function hx(){let i=window.__WEB_DESIGNS_SCENE_API,e=Kd(),t=i.getAllObjects?.();t?.forEach(n=>Jd(n)),t?.forEach(n=>n.traverse?.(a=>{a.isMesh&&a.name.startsWith("WebDesignss_Tail_")&&(a.material=e)}))}function dx(i){let e=window.__WEB_DESIGNS_SCENE_API,t=new Image;t.src=new URL("assets/scene/meadow-daylight.png",i).href,t.onload=()=>{let n=document.createElement("canvas");n.width=1600,n.height=1e3;let a=n.getContext("2d"),s=new Zi(n);s.colorSpace=ft;function r(){let c=n.width,h=n.height,d=Math.max(c/t.width,h/t.height)*1.08,f=window.scrollY/Math.max(1,document.documentElement.scrollHeight-innerHeight),p=window.scrollY,m=Math.min(1,Math.max(0,p/innerHeight));a.filter=`blur(${1+m*6}px) saturate(${.85-m*.2}) brightness(${.94-m*.26})`,a.drawImage(t,(c-t.width*d)/2+(f-.5)*24,(h-t.height*d)/2,t.width*d,t.height*d),a.filter="none";let y=a.createRadialGradient(c*.5,h*.48,60,c*.5,h*.48,c*.65);y.addColorStop(0,`rgba(36,52,61,${.18+m*.42})`),y.addColorStop(.58,"rgba(27,42,43,.28)"),y.addColorStop(1,"rgba(12,24,26,.18)"),a.fillStyle=y,a.fillRect(0,0,c,h),s.needsUpdate=!0}r();let o=!1;window.addEventListener("scroll",()=>{o||(o=!0,requestAnimationFrame(()=>{r(),o=!1}))},{passive:!0}),e.getAllObjects?.().forEach(c=>{c.isScene&&(c.background=s)});let l=()=>{let c=e.core?.getActiveScene?.()||e.getActiveScene?.();c&&(c.background=s)};for(let c of["afb5c7e3-4034-4bb6-8bb0-5be57b222c50","d3d2a9b8-8dbb-4a2c-9d3a-0ddb0a8dc172","079b3aa5-e6d0-410c-8917-dd0d93af7fc8","adfdabbb-4356-41e3-aea2-4c6f8b57e049"]){let h=e.getMaterial(c);h&&(h.visible=!1)}l(),e.core?.addOnRenderCallback?.(l)}}var Xd=new WeakSet,qd=new WeakSet;function fx(i){let e=i.geometry;if(!e?.index||Xd.has(e))return;Xd.add(e);let t=e.attributes,n=t.position,a=t.normal;if(!n||!a||!t.skinIndex||!t.skinWeight)return;let s={},r=(h,d)=>Array.from({length:h.itemSize},(f,p)=>h.getComponent(d,p));for(let[h,d]of Object.entries(t))s[h]=Array.from({length:d.count},(f,p)=>r(d,p)).flat();let o=new Map,l=[],c=(h,d)=>{let f=Math.min(h,d)+":"+Math.max(h,d);if(o.has(f))return o.get(f);let p=s.position.length/3;o.set(f,p);let m=new O().fromBufferAttribute(n,h),y=new O().fromBufferAttribute(n,d),b=new O().fromBufferAttribute(a,h).normalize(),u=new O().fromBufferAttribute(a,d).normalize(),g=m.clone().add(y).multiplyScalar(.5),S=y.clone().sub(m),x=b.clone().multiplyScalar(-S.dot(b)).addScaledVector(u,S.dot(u)).multiplyScalar(.125);x.clampLength(0,S.length()*.08),g.add(x);let M=b.add(u).normalize(),w=new Map;for(let E of[h,d])for(let I=0;I<4;I++){let C=t.skinIndex.getComponent(E,I),N=t.skinWeight.getComponent(E,I)*.5;w.set(C,(w.get(C)||0)+N)}let T=[...w].sort((E,I)=>I[1]-E[1]).slice(0,4);for(;T.length<4;)T.push([0,0]);let v=T.reduce((E,I)=>E+I[1],0)||1;for(let[E,I]of Object.entries(t)){let C;E==="position"?C=g.toArray():E==="normal"?C=M.toArray():E==="skinIndex"?C=T.map(N=>N[0]):E==="skinWeight"?C=T.map(N=>N[1]/v):C=r(I,h).map((N,L)=>(N+I.getComponent(d,L))*.5),s[E].push(...C)}return p};for(let h=0;h<e.index.count;h+=3){let d=e.index.getX(h),f=e.index.getX(h+1),p=e.index.getX(h+2),m=c(d,f),y=c(f,p),b=c(p,d);l.push(d,m,b,m,f,y,b,y,p,m,y,b)}for(let[h,d]of Object.entries(t))e.setAttribute(h,new pt(h==="skinIndex"?new Uint16Array(s[h]):new Float32Array(s[h]),d.itemSize));e.setIndex(l),e.computeBoundingBox(),e.computeBoundingSphere()}function Jd(i){i.traverse?.(e=>{if(!e.isMesh)return;let t=e.name||"";/hummingbird_(body|eyes|wings|feather)/i.test(t)&&!/(leg|tongue)/i.test(t)&&fx(e);for(let n of Array.isArray(e.material)?e.material:[e.material])if(!(!n||qd.has(n)||!(/Hummingbird_/i.test(n.name)||/hummingbird/i.test(t)))&&!t.startsWith("WebDesignss_Tail_")){qd.add(n);for(let a of[n.map,n.normalMap,n.roughnessMap])a&&(a.anisotropy=8,a.needsUpdate=!0);if(/feather/i.test(n.name)||/hummingbird_(wings|feather)/i.test(t)){n.alphaTest=.32,n.alphaToCoverage=!0,n.transparent=!1,n.depthWrite=!0,n.normalScale?.set(.38,.38),n.roughness=.66,"sheen"in n&&(n.sheen=.16,n.sheenRoughness=.7);let a=n.onBeforeCompile,r=n.customProgramCacheKey.bind(n)();n.onBeforeCompile=function(o,l){a.call(this,o,l),o.vertexShader=`varying vec2 birdDetailUv;
`+o.vertexShader,o.vertexShader=o.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
 birdDetailUv=uv;`),o.fragmentShader=`varying vec2 birdDetailUv;
`+o.fragmentShader,o.fragmentShader=o.fragmentShader.replace("#include <roughnessmap_fragment>",`#include <roughnessmap_fragment>
      float barbPhase=(birdDetailUv.y+abs(birdDetailUv.x-.5)*.18)*1800.;
      float barbFade=1.-smoothstep(.7,2.5,fwidth(barbPhase));
      roughnessFactor=clamp(roughnessFactor+sin(barbPhase)*.055*barbFade,.38,.86);`)},n.customProgramCacheKey=()=>r+"-refined-feather-v1"}else/eyelens/i.test(n.name)||/eyelens/i.test(t)?(n.roughness=.08,n.depthWrite=!1):/eyes/i.test(n.name)||/Hummingbird_eyes/i.test(t)?(n.roughness=.16,n.roughnessMap=null):(/peck/i.test(n.name)||/peck/i.test(t))&&(n.roughness=.32,n.roughnessMap=null);n.needsUpdate=!0}})}})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/

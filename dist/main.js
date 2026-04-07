function L8(J,Q,$,Z){let K=(J-Q)/$;return Z*Math.exp(-K*K*0.5)}function I$(J){let K=Array(1200),U=J,W=()=>{return U=U*1664525+1013904223&4294967295,(U>>>0)/4294967296};for(let H=0;H<6;H++){let G=0.7+W()*0.3,Y=0.12+W()*0.1,E=0.06+W()*0.06;for(let N=0;N<200;N++){let X=N/200;K[H*200+N]=L8(X,0.1,0.025,E)+L8(X,0.17,0.012,-0.05)+L8(X,0.2,0.015,G)+L8(X,0.23,0.012,-0.1)+L8(X,0.32,0.035,Y)+(W()-0.5)*0.008}}return K}function e7(J,Q=42){return{canvas:J,samples:I$(Q),sweepX:0,bpm:72,targetBpm:72,seed:Q,flatline:!1,flatlineEnd:0}}function J6(J,Q){J.targetBpm=Math.max(40,Math.min(180,Q))}function eK(J){J.seed=Date.now(),J.samples=I$(J.seed)}function _$(J){J.flatline=!0,J.flatlineEnd=performance.now()+300,setTimeout(()=>{J.flatline=!1,eK(J)},300)}function Q6(J,Q,$,Z){let{canvas:K,samples:U}=J,W=window.devicePixelRatio||1,H=K.clientWidth,G=K.clientHeight;if(H<=0||G<=0)return;let Y=Math.ceil(H*W),E=Math.ceil(G*W);if(K.width!==Y||K.height!==E)K.width=Y,K.height=E;J.bpm+=(J.targetBpm-J.bpm)*Math.min(1,Q*4);let N=J.bpm/60,X=H/4,R=N*X;J.sweepX=(J.sweepX+R*Q)%H;let D=K.getContext("2d");D.clearRect(0,0,Y,E),D.save(),D.scale(W,W);let V=U.length,q=G*0.5,F=G*0.35,z=Math.max(0,Math.min(1,(J.bpm-72)/68)),B=z>0.01?JU($,Z,z):$,L=(y)=>{if(J.flatline)return q;let A=Math.floor(y/H*V)%V;return q-(U[A<0?A+V:A]??0)*F},w=H*0.06,{sweepX:_}=J;for(let y=0;y<H;y++){let A=(_-y+H)%H;if(A<w)continue;let b;if(A<H*0.7)b=0.5*(1-A/(H*0.7));else b=0.02;if(y%4!==0)continue;let u=Math.min(y+4,H);D.globalAlpha=b,D.strokeStyle=B,D.lineWidth=2,D.lineJoin="round",D.beginPath();for(let j=y;j<=u;j++)j===y?D.moveTo(j,L(j)):D.lineTo(j,L(j));D.stroke()}let C=12;D.globalAlpha=0.7,D.strokeStyle=B,D.lineWidth=2.5,D.shadowColor=B,D.shadowBlur=8,D.beginPath();for(let y=Math.max(0,_-C);y<=_;y++){let A=(y%H+H)%H;y===Math.max(0,_-C)?D.moveTo(A,L(A)):D.lineTo(A,L(A))}D.stroke(),D.shadowBlur=0;let O=(_%H+H)%H,P=L(O);D.fillStyle=B,D.globalAlpha=1,D.beginPath(),D.arc(O,P,3,0,Math.PI*2),D.fill(),D.globalAlpha=0.3,D.beginPath(),D.arc(O,P,8,0,Math.PI*2),D.fill(),D.restore()}function JU(J,Q,$){let Z=z$(J),K=z$(Q),U=Math.round(Z.r+(K.r-Z.r)*$),W=Math.round(Z.g+(K.g-Z.g)*$),H=Math.round(Z.b+(K.b-Z.b)*$);return`rgb(${U},${W},${H})`}function z$(J){let Q=J.replace("#","");return{r:parseInt(Q.substring(0,2),16),g:parseInt(Q.substring(2,4),16),b:parseInt(Q.substring(4,6),16)}}var c$="183";var n$=0,A6=1,s$=2;var T8=1,i$=2,G8=3,Y8=0,CJ=1,oJ=2,aJ=0,S8=1,C6=2,P6=3,w6=4,o$=5;var X8=100,a$=101,r$=102,t$=103,e$=104,JZ=200,QZ=201,$Z=202,ZZ=203,KZ=204,UZ=205,WZ=206,HZ=207,GZ=208,YZ=209,XZ=210,NZ=211,EZ=212,qZ=213,FZ=214,DZ=0,OZ=1,RZ=2,T6=3,MZ=4,kZ=5,VZ=6,LZ=7,BZ=0,zZ=1,IZ=2,uJ=0,S6=1,j6=2,y6=3,f6=4,v6=5,b6=6,h6=7;var N8=301,T9=302,L7=303,B7=304,j8=306,_Z=1000,z7=1001,AZ=1002,V9=1003,CZ=1004;var y8=1005;var PJ=1006,I7=1007;var S9=1008;var lJ=1009,PZ=1010,wZ=1011,f8=1012,g6=1013,L9=1014,G9=1015,Y9=1016,x6=1017,p6=1018,E8=1020,TZ=35902,SZ=35899,jZ=1021,yZ=1022,rJ=1023,j9=1026,y9=1027,fZ=1028,m6=1029,q8=1030,d6=1031;var u6=1033,_7=33776,A7=33777,C7=33778,P7=33779,l6=35840,c6=35841,n6=35842,s6=35843,i6=36196,o6=37492,a6=37496,r6=37488,t6=37489,e6=37490,JQ=37491,QQ=37808,$Q=37809,ZQ=37810,KQ=37811,UQ=37812,WQ=37813,HQ=37814,GQ=37815,YQ=37816,XQ=37817,NQ=37818,EQ=37819,qQ=37820,FQ=37821,DQ=36492,OQ=36494,RQ=36495,MQ=36283,kQ=36284,VQ=36285,LQ=36286;var vZ=0,bZ=1,f9="",hZ="srgb",v8="srgb-linear",BQ="linear",JJ="srgb";var gZ=512,xZ=513,pZ=514,w7=515,mZ=516,dZ=517,T7=518,uZ=519;var zQ="300 es",IQ=2000;function QU(J){for(let Q=J.length-1;Q>=0;--Q)if(J[Q]>=65535)return!0;return!1}function $U(J){return ArrayBuffer.isView(J)&&!(J instanceof DataView)}function P8(J){return document.createElementNS("http://www.w3.org/1999/xhtml",J)}function lZ(){let J=P8("canvas");return J.style.display="block",J}var A$={},H8=null;function _Q(...J){let Q="THREE."+J.shift();if(H8)H8("log",Q,...J);else console.log(Q,...J)}function cZ(J){let Q=J[0];if(typeof Q==="string"&&Q.startsWith("TSL:")){let $=J[1];if($&&$.isStackTrace)J[0]+=" "+$.getLocation();else J[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return J}function w0(...J){J=cZ(J);let Q="THREE."+J.shift();if(H8)H8("warn",Q,...J);else{let $=J[0];if($&&$.isStackTrace)console.warn($.getError(Q));else console.warn(Q,...J)}}function P0(...J){J=cZ(J);let Q="THREE."+J.shift();if(H8)H8("error",Q,...J);else{let $=J[0];if($&&$.isStackTrace)console.error($.getError(Q));else console.error(Q,...J)}}function w8(...J){let Q=J.join(" ");if(Q in A$)return;A$[Q]=!0,w0(...J)}function nZ(J,Q,$){return new Promise(function(Z,K){function U(){switch(J.clientWaitSync(Q,J.SYNC_FLUSH_COMMANDS_BIT,0)){case J.WAIT_FAILED:K();break;case J.TIMEOUT_EXPIRED:setTimeout(U,$);break;default:Z()}}setTimeout(U,$)})}var sZ={[0]:1,[2]:6,[4]:7,[3]:5,[1]:0,[6]:2,[7]:4,[5]:3};class B9{addEventListener(J,Q){if(this._listeners===void 0)this._listeners={};let $=this._listeners;if($[J]===void 0)$[J]=[];if($[J].indexOf(Q)===-1)$[J].push(Q)}hasEventListener(J,Q){let $=this._listeners;if($===void 0)return!1;return $[J]!==void 0&&$[J].indexOf(Q)!==-1}removeEventListener(J,Q){let $=this._listeners;if($===void 0)return;let Z=$[J];if(Z!==void 0){let K=Z.indexOf(Q);if(K!==-1)Z.splice(K,1)}}dispatchEvent(J){let Q=this._listeners;if(Q===void 0)return;let $=Q[J.type];if($!==void 0){J.target=this;let Z=$.slice(0);for(let K=0,U=Z.length;K<U;K++)Z[K].call(this,J);J.target=null}}}var MJ=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var $6=Math.PI/180,M7=180/Math.PI;function b8(){let J=Math.random()*4294967295|0,Q=Math.random()*4294967295|0,$=Math.random()*4294967295|0,Z=Math.random()*4294967295|0;return(MJ[J&255]+MJ[J>>8&255]+MJ[J>>16&255]+MJ[J>>24&255]+"-"+MJ[Q&255]+MJ[Q>>8&255]+"-"+MJ[Q>>16&15|64]+MJ[Q>>24&255]+"-"+MJ[$&63|128]+MJ[$>>8&255]+"-"+MJ[$>>16&255]+MJ[$>>24&255]+MJ[Z&255]+MJ[Z>>8&255]+MJ[Z>>16&255]+MJ[Z>>24&255]).toLowerCase()}function g0(J,Q,$){return Math.max(Q,Math.min($,J))}function ZU(J,Q){return(J%Q+Q)%Q}function Z6(J,Q,$){return(1-$)*J+$*Q}function B8(J,Q){switch(Q.constructor){case Float32Array:return J;case Uint32Array:return J/4294967295;case Uint16Array:return J/65535;case Uint8Array:return J/255;case Int32Array:return Math.max(J/2147483647,-1);case Int16Array:return Math.max(J/32767,-1);case Int8Array:return Math.max(J/127,-1);default:throw Error("Invalid component type.")}}function AJ(J,Q){switch(Q.constructor){case Float32Array:return J;case Uint32Array:return Math.round(J*4294967295);case Uint16Array:return Math.round(J*65535);case Uint8Array:return Math.round(J*255);case Int32Array:return Math.round(J*2147483647);case Int16Array:return Math.round(J*32767);case Int8Array:return Math.round(J*127);default:throw Error("Invalid component type.")}}class i0{constructor(J=0,Q=0){i0.prototype.isVector2=!0,this.x=J,this.y=Q}get width(){return this.x}set width(J){this.x=J}get height(){return this.y}set height(J){this.y=J}set(J,Q){return this.x=J,this.y=Q,this}setScalar(J){return this.x=J,this.y=J,this}setX(J){return this.x=J,this}setY(J){return this.y=J,this}setComponent(J,Q){switch(J){case 0:this.x=Q;break;case 1:this.y=Q;break;default:throw Error("index is out of range: "+J)}return this}getComponent(J){switch(J){case 0:return this.x;case 1:return this.y;default:throw Error("index is out of range: "+J)}}clone(){return new this.constructor(this.x,this.y)}copy(J){return this.x=J.x,this.y=J.y,this}add(J){return this.x+=J.x,this.y+=J.y,this}addScalar(J){return this.x+=J,this.y+=J,this}addVectors(J,Q){return this.x=J.x+Q.x,this.y=J.y+Q.y,this}addScaledVector(J,Q){return this.x+=J.x*Q,this.y+=J.y*Q,this}sub(J){return this.x-=J.x,this.y-=J.y,this}subScalar(J){return this.x-=J,this.y-=J,this}subVectors(J,Q){return this.x=J.x-Q.x,this.y=J.y-Q.y,this}multiply(J){return this.x*=J.x,this.y*=J.y,this}multiplyScalar(J){return this.x*=J,this.y*=J,this}divide(J){return this.x/=J.x,this.y/=J.y,this}divideScalar(J){return this.multiplyScalar(1/J)}applyMatrix3(J){let Q=this.x,$=this.y,Z=J.elements;return this.x=Z[0]*Q+Z[3]*$+Z[6],this.y=Z[1]*Q+Z[4]*$+Z[7],this}min(J){return this.x=Math.min(this.x,J.x),this.y=Math.min(this.y,J.y),this}max(J){return this.x=Math.max(this.x,J.x),this.y=Math.max(this.y,J.y),this}clamp(J,Q){return this.x=g0(this.x,J.x,Q.x),this.y=g0(this.y,J.y,Q.y),this}clampScalar(J,Q){return this.x=g0(this.x,J,Q),this.y=g0(this.y,J,Q),this}clampLength(J,Q){let $=this.length();return this.divideScalar($||1).multiplyScalar(g0($,J,Q))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(J){return this.x*J.x+this.y*J.y}cross(J){return this.x*J.y-this.y*J.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(J){let Q=Math.sqrt(this.lengthSq()*J.lengthSq());if(Q===0)return Math.PI/2;let $=this.dot(J)/Q;return Math.acos(g0($,-1,1))}distanceTo(J){return Math.sqrt(this.distanceToSquared(J))}distanceToSquared(J){let Q=this.x-J.x,$=this.y-J.y;return Q*Q+$*$}manhattanDistanceTo(J){return Math.abs(this.x-J.x)+Math.abs(this.y-J.y)}setLength(J){return this.normalize().multiplyScalar(J)}lerp(J,Q){return this.x+=(J.x-this.x)*Q,this.y+=(J.y-this.y)*Q,this}lerpVectors(J,Q,$){return this.x=J.x+(Q.x-J.x)*$,this.y=J.y+(Q.y-J.y)*$,this}equals(J){return J.x===this.x&&J.y===this.y}fromArray(J,Q=0){return this.x=J[Q],this.y=J[Q+1],this}toArray(J=[],Q=0){return J[Q]=this.x,J[Q+1]=this.y,J}fromBufferAttribute(J,Q){return this.x=J.getX(Q),this.y=J.getY(Q),this}rotateAround(J,Q){let $=Math.cos(Q),Z=Math.sin(Q),K=this.x-J.x,U=this.y-J.y;return this.x=K*$-U*Z+J.x,this.y=K*Z+U*$+J.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class X9{constructor(J=0,Q=0,$=0,Z=1){this.isQuaternion=!0,this._x=J,this._y=Q,this._z=$,this._w=Z}static slerpFlat(J,Q,$,Z,K,U,W){let H=$[Z+0],G=$[Z+1],Y=$[Z+2],E=$[Z+3],N=K[U+0],X=K[U+1],R=K[U+2],D=K[U+3];if(E!==D||H!==N||G!==X||Y!==R){let V=H*N+G*X+Y*R+E*D;if(V<0)N=-N,X=-X,R=-R,D=-D,V=-V;let q=1-W;if(V<0.9995){let F=Math.acos(V),z=Math.sin(F);q=Math.sin(q*F)/z,W=Math.sin(W*F)/z,H=H*q+N*W,G=G*q+X*W,Y=Y*q+R*W,E=E*q+D*W}else{H=H*q+N*W,G=G*q+X*W,Y=Y*q+R*W,E=E*q+D*W;let F=1/Math.sqrt(H*H+G*G+Y*Y+E*E);H*=F,G*=F,Y*=F,E*=F}}J[Q]=H,J[Q+1]=G,J[Q+2]=Y,J[Q+3]=E}static multiplyQuaternionsFlat(J,Q,$,Z,K,U){let W=$[Z],H=$[Z+1],G=$[Z+2],Y=$[Z+3],E=K[U],N=K[U+1],X=K[U+2],R=K[U+3];return J[Q]=W*R+Y*E+H*X-G*N,J[Q+1]=H*R+Y*N+G*E-W*X,J[Q+2]=G*R+Y*X+W*N-H*E,J[Q+3]=Y*R-W*E-H*N-G*X,J}get x(){return this._x}set x(J){this._x=J,this._onChangeCallback()}get y(){return this._y}set y(J){this._y=J,this._onChangeCallback()}get z(){return this._z}set z(J){this._z=J,this._onChangeCallback()}get w(){return this._w}set w(J){this._w=J,this._onChangeCallback()}set(J,Q,$,Z){return this._x=J,this._y=Q,this._z=$,this._w=Z,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(J){return this._x=J.x,this._y=J.y,this._z=J.z,this._w=J.w,this._onChangeCallback(),this}setFromEuler(J,Q=!0){let{_x:$,_y:Z,_z:K,_order:U}=J,W=Math.cos,H=Math.sin,G=W($/2),Y=W(Z/2),E=W(K/2),N=H($/2),X=H(Z/2),R=H(K/2);switch(U){case"XYZ":this._x=N*Y*E+G*X*R,this._y=G*X*E-N*Y*R,this._z=G*Y*R+N*X*E,this._w=G*Y*E-N*X*R;break;case"YXZ":this._x=N*Y*E+G*X*R,this._y=G*X*E-N*Y*R,this._z=G*Y*R-N*X*E,this._w=G*Y*E+N*X*R;break;case"ZXY":this._x=N*Y*E-G*X*R,this._y=G*X*E+N*Y*R,this._z=G*Y*R+N*X*E,this._w=G*Y*E-N*X*R;break;case"ZYX":this._x=N*Y*E-G*X*R,this._y=G*X*E+N*Y*R,this._z=G*Y*R-N*X*E,this._w=G*Y*E+N*X*R;break;case"YZX":this._x=N*Y*E+G*X*R,this._y=G*X*E+N*Y*R,this._z=G*Y*R-N*X*E,this._w=G*Y*E-N*X*R;break;case"XZY":this._x=N*Y*E-G*X*R,this._y=G*X*E-N*Y*R,this._z=G*Y*R+N*X*E,this._w=G*Y*E+N*X*R;break;default:w0("Quaternion: .setFromEuler() encountered an unknown order: "+U)}if(Q===!0)this._onChangeCallback();return this}setFromAxisAngle(J,Q){let $=Q/2,Z=Math.sin($);return this._x=J.x*Z,this._y=J.y*Z,this._z=J.z*Z,this._w=Math.cos($),this._onChangeCallback(),this}setFromRotationMatrix(J){let Q=J.elements,$=Q[0],Z=Q[4],K=Q[8],U=Q[1],W=Q[5],H=Q[9],G=Q[2],Y=Q[6],E=Q[10],N=$+W+E;if(N>0){let X=0.5/Math.sqrt(N+1);this._w=0.25/X,this._x=(Y-H)*X,this._y=(K-G)*X,this._z=(U-Z)*X}else if($>W&&$>E){let X=2*Math.sqrt(1+$-W-E);this._w=(Y-H)/X,this._x=0.25*X,this._y=(Z+U)/X,this._z=(K+G)/X}else if(W>E){let X=2*Math.sqrt(1+W-$-E);this._w=(K-G)/X,this._x=(Z+U)/X,this._y=0.25*X,this._z=(H+Y)/X}else{let X=2*Math.sqrt(1+E-$-W);this._w=(U-Z)/X,this._x=(K+G)/X,this._y=(H+Y)/X,this._z=0.25*X}return this._onChangeCallback(),this}setFromUnitVectors(J,Q){let $=J.dot(Q)+1;if($<0.00000001)if($=0,Math.abs(J.x)>Math.abs(J.z))this._x=-J.y,this._y=J.x,this._z=0,this._w=$;else this._x=0,this._y=-J.z,this._z=J.y,this._w=$;else this._x=J.y*Q.z-J.z*Q.y,this._y=J.z*Q.x-J.x*Q.z,this._z=J.x*Q.y-J.y*Q.x,this._w=$;return this.normalize()}angleTo(J){return 2*Math.acos(Math.abs(g0(this.dot(J),-1,1)))}rotateTowards(J,Q){let $=this.angleTo(J);if($===0)return this;let Z=Math.min(1,Q/$);return this.slerp(J,Z),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(J){return this._x*J._x+this._y*J._y+this._z*J._z+this._w*J._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let J=this.length();if(J===0)this._x=0,this._y=0,this._z=0,this._w=1;else J=1/J,this._x=this._x*J,this._y=this._y*J,this._z=this._z*J,this._w=this._w*J;return this._onChangeCallback(),this}multiply(J){return this.multiplyQuaternions(this,J)}premultiply(J){return this.multiplyQuaternions(J,this)}multiplyQuaternions(J,Q){let{_x:$,_y:Z,_z:K,_w:U}=J,W=Q._x,H=Q._y,G=Q._z,Y=Q._w;return this._x=$*Y+U*W+Z*G-K*H,this._y=Z*Y+U*H+K*W-$*G,this._z=K*Y+U*G+$*H-Z*W,this._w=U*Y-$*W-Z*H-K*G,this._onChangeCallback(),this}slerp(J,Q){let{_x:$,_y:Z,_z:K,_w:U}=J,W=this.dot(J);if(W<0)$=-$,Z=-Z,K=-K,U=-U,W=-W;let H=1-Q;if(W<0.9995){let G=Math.acos(W),Y=Math.sin(G);H=Math.sin(H*G)/Y,Q=Math.sin(Q*G)/Y,this._x=this._x*H+$*Q,this._y=this._y*H+Z*Q,this._z=this._z*H+K*Q,this._w=this._w*H+U*Q,this._onChangeCallback()}else this._x=this._x*H+$*Q,this._y=this._y*H+Z*Q,this._z=this._z*H+K*Q,this._w=this._w*H+U*Q,this.normalize();return this}slerpQuaternions(J,Q,$){return this.copy(J).slerp(Q,$)}random(){let J=2*Math.PI*Math.random(),Q=2*Math.PI*Math.random(),$=Math.random(),Z=Math.sqrt(1-$),K=Math.sqrt($);return this.set(Z*Math.sin(J),Z*Math.cos(J),K*Math.sin(Q),K*Math.cos(Q))}equals(J){return J._x===this._x&&J._y===this._y&&J._z===this._z&&J._w===this._w}fromArray(J,Q=0){return this._x=J[Q],this._y=J[Q+1],this._z=J[Q+2],this._w=J[Q+3],this._onChangeCallback(),this}toArray(J=[],Q=0){return J[Q]=this._x,J[Q+1]=this._y,J[Q+2]=this._z,J[Q+3]=this._w,J}fromBufferAttribute(J,Q){return this._x=J.getX(Q),this._y=J.getY(Q),this._z=J.getZ(Q),this._w=J.getW(Q),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(J){return this._onChangeCallback=J,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class x{constructor(J=0,Q=0,$=0){x.prototype.isVector3=!0,this.x=J,this.y=Q,this.z=$}set(J,Q,$){if($===void 0)$=this.z;return this.x=J,this.y=Q,this.z=$,this}setScalar(J){return this.x=J,this.y=J,this.z=J,this}setX(J){return this.x=J,this}setY(J){return this.y=J,this}setZ(J){return this.z=J,this}setComponent(J,Q){switch(J){case 0:this.x=Q;break;case 1:this.y=Q;break;case 2:this.z=Q;break;default:throw Error("index is out of range: "+J)}return this}getComponent(J){switch(J){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error("index is out of range: "+J)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(J){return this.x=J.x,this.y=J.y,this.z=J.z,this}add(J){return this.x+=J.x,this.y+=J.y,this.z+=J.z,this}addScalar(J){return this.x+=J,this.y+=J,this.z+=J,this}addVectors(J,Q){return this.x=J.x+Q.x,this.y=J.y+Q.y,this.z=J.z+Q.z,this}addScaledVector(J,Q){return this.x+=J.x*Q,this.y+=J.y*Q,this.z+=J.z*Q,this}sub(J){return this.x-=J.x,this.y-=J.y,this.z-=J.z,this}subScalar(J){return this.x-=J,this.y-=J,this.z-=J,this}subVectors(J,Q){return this.x=J.x-Q.x,this.y=J.y-Q.y,this.z=J.z-Q.z,this}multiply(J){return this.x*=J.x,this.y*=J.y,this.z*=J.z,this}multiplyScalar(J){return this.x*=J,this.y*=J,this.z*=J,this}multiplyVectors(J,Q){return this.x=J.x*Q.x,this.y=J.y*Q.y,this.z=J.z*Q.z,this}applyEuler(J){return this.applyQuaternion(C$.setFromEuler(J))}applyAxisAngle(J,Q){return this.applyQuaternion(C$.setFromAxisAngle(J,Q))}applyMatrix3(J){let Q=this.x,$=this.y,Z=this.z,K=J.elements;return this.x=K[0]*Q+K[3]*$+K[6]*Z,this.y=K[1]*Q+K[4]*$+K[7]*Z,this.z=K[2]*Q+K[5]*$+K[8]*Z,this}applyNormalMatrix(J){return this.applyMatrix3(J).normalize()}applyMatrix4(J){let Q=this.x,$=this.y,Z=this.z,K=J.elements,U=1/(K[3]*Q+K[7]*$+K[11]*Z+K[15]);return this.x=(K[0]*Q+K[4]*$+K[8]*Z+K[12])*U,this.y=(K[1]*Q+K[5]*$+K[9]*Z+K[13])*U,this.z=(K[2]*Q+K[6]*$+K[10]*Z+K[14])*U,this}applyQuaternion(J){let Q=this.x,$=this.y,Z=this.z,K=J.x,U=J.y,W=J.z,H=J.w,G=2*(U*Z-W*$),Y=2*(W*Q-K*Z),E=2*(K*$-U*Q);return this.x=Q+H*G+U*E-W*Y,this.y=$+H*Y+W*G-K*E,this.z=Z+H*E+K*Y-U*G,this}project(J){return this.applyMatrix4(J.matrixWorldInverse).applyMatrix4(J.projectionMatrix)}unproject(J){return this.applyMatrix4(J.projectionMatrixInverse).applyMatrix4(J.matrixWorld)}transformDirection(J){let Q=this.x,$=this.y,Z=this.z,K=J.elements;return this.x=K[0]*Q+K[4]*$+K[8]*Z,this.y=K[1]*Q+K[5]*$+K[9]*Z,this.z=K[2]*Q+K[6]*$+K[10]*Z,this.normalize()}divide(J){return this.x/=J.x,this.y/=J.y,this.z/=J.z,this}divideScalar(J){return this.multiplyScalar(1/J)}min(J){return this.x=Math.min(this.x,J.x),this.y=Math.min(this.y,J.y),this.z=Math.min(this.z,J.z),this}max(J){return this.x=Math.max(this.x,J.x),this.y=Math.max(this.y,J.y),this.z=Math.max(this.z,J.z),this}clamp(J,Q){return this.x=g0(this.x,J.x,Q.x),this.y=g0(this.y,J.y,Q.y),this.z=g0(this.z,J.z,Q.z),this}clampScalar(J,Q){return this.x=g0(this.x,J,Q),this.y=g0(this.y,J,Q),this.z=g0(this.z,J,Q),this}clampLength(J,Q){let $=this.length();return this.divideScalar($||1).multiplyScalar(g0($,J,Q))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(J){return this.x*J.x+this.y*J.y+this.z*J.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(J){return this.normalize().multiplyScalar(J)}lerp(J,Q){return this.x+=(J.x-this.x)*Q,this.y+=(J.y-this.y)*Q,this.z+=(J.z-this.z)*Q,this}lerpVectors(J,Q,$){return this.x=J.x+(Q.x-J.x)*$,this.y=J.y+(Q.y-J.y)*$,this.z=J.z+(Q.z-J.z)*$,this}cross(J){return this.crossVectors(this,J)}crossVectors(J,Q){let{x:$,y:Z,z:K}=J,U=Q.x,W=Q.y,H=Q.z;return this.x=Z*H-K*W,this.y=K*U-$*H,this.z=$*W-Z*U,this}projectOnVector(J){let Q=J.lengthSq();if(Q===0)return this.set(0,0,0);let $=J.dot(this)/Q;return this.copy(J).multiplyScalar($)}projectOnPlane(J){return K6.copy(this).projectOnVector(J),this.sub(K6)}reflect(J){return this.sub(K6.copy(J).multiplyScalar(2*this.dot(J)))}angleTo(J){let Q=Math.sqrt(this.lengthSq()*J.lengthSq());if(Q===0)return Math.PI/2;let $=this.dot(J)/Q;return Math.acos(g0($,-1,1))}distanceTo(J){return Math.sqrt(this.distanceToSquared(J))}distanceToSquared(J){let Q=this.x-J.x,$=this.y-J.y,Z=this.z-J.z;return Q*Q+$*$+Z*Z}manhattanDistanceTo(J){return Math.abs(this.x-J.x)+Math.abs(this.y-J.y)+Math.abs(this.z-J.z)}setFromSpherical(J){return this.setFromSphericalCoords(J.radius,J.phi,J.theta)}setFromSphericalCoords(J,Q,$){let Z=Math.sin(Q)*J;return this.x=Z*Math.sin($),this.y=Math.cos(Q)*J,this.z=Z*Math.cos($),this}setFromCylindrical(J){return this.setFromCylindricalCoords(J.radius,J.theta,J.y)}setFromCylindricalCoords(J,Q,$){return this.x=J*Math.sin(Q),this.y=$,this.z=J*Math.cos(Q),this}setFromMatrixPosition(J){let Q=J.elements;return this.x=Q[12],this.y=Q[13],this.z=Q[14],this}setFromMatrixScale(J){let Q=this.setFromMatrixColumn(J,0).length(),$=this.setFromMatrixColumn(J,1).length(),Z=this.setFromMatrixColumn(J,2).length();return this.x=Q,this.y=$,this.z=Z,this}setFromMatrixColumn(J,Q){return this.fromArray(J.elements,Q*4)}setFromMatrix3Column(J,Q){return this.fromArray(J.elements,Q*3)}setFromEuler(J){return this.x=J._x,this.y=J._y,this.z=J._z,this}setFromColor(J){return this.x=J.r,this.y=J.g,this.z=J.b,this}equals(J){return J.x===this.x&&J.y===this.y&&J.z===this.z}fromArray(J,Q=0){return this.x=J[Q],this.y=J[Q+1],this.z=J[Q+2],this}toArray(J=[],Q=0){return J[Q]=this.x,J[Q+1]=this.y,J[Q+2]=this.z,J}fromBufferAttribute(J,Q){return this.x=J.getX(Q),this.y=J.getY(Q),this.z=J.getZ(Q),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let J=Math.random()*Math.PI*2,Q=Math.random()*2-1,$=Math.sqrt(1-Q*Q);return this.x=$*Math.cos(J),this.y=Q,this.z=$*Math.sin(J),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}var K6=new x,C$=new X9;class j0{constructor(J,Q,$,Z,K,U,W,H,G){if(j0.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],J!==void 0)this.set(J,Q,$,Z,K,U,W,H,G)}set(J,Q,$,Z,K,U,W,H,G){let Y=this.elements;return Y[0]=J,Y[1]=Z,Y[2]=W,Y[3]=Q,Y[4]=K,Y[5]=H,Y[6]=$,Y[7]=U,Y[8]=G,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(J){let Q=this.elements,$=J.elements;return Q[0]=$[0],Q[1]=$[1],Q[2]=$[2],Q[3]=$[3],Q[4]=$[4],Q[5]=$[5],Q[6]=$[6],Q[7]=$[7],Q[8]=$[8],this}extractBasis(J,Q,$){return J.setFromMatrix3Column(this,0),Q.setFromMatrix3Column(this,1),$.setFromMatrix3Column(this,2),this}setFromMatrix4(J){let Q=J.elements;return this.set(Q[0],Q[4],Q[8],Q[1],Q[5],Q[9],Q[2],Q[6],Q[10]),this}multiply(J){return this.multiplyMatrices(this,J)}premultiply(J){return this.multiplyMatrices(J,this)}multiplyMatrices(J,Q){let $=J.elements,Z=Q.elements,K=this.elements,U=$[0],W=$[3],H=$[6],G=$[1],Y=$[4],E=$[7],N=$[2],X=$[5],R=$[8],D=Z[0],V=Z[3],q=Z[6],F=Z[1],z=Z[4],B=Z[7],L=Z[2],w=Z[5],_=Z[8];return K[0]=U*D+W*F+H*L,K[3]=U*V+W*z+H*w,K[6]=U*q+W*B+H*_,K[1]=G*D+Y*F+E*L,K[4]=G*V+Y*z+E*w,K[7]=G*q+Y*B+E*_,K[2]=N*D+X*F+R*L,K[5]=N*V+X*z+R*w,K[8]=N*q+X*B+R*_,this}multiplyScalar(J){let Q=this.elements;return Q[0]*=J,Q[3]*=J,Q[6]*=J,Q[1]*=J,Q[4]*=J,Q[7]*=J,Q[2]*=J,Q[5]*=J,Q[8]*=J,this}determinant(){let J=this.elements,Q=J[0],$=J[1],Z=J[2],K=J[3],U=J[4],W=J[5],H=J[6],G=J[7],Y=J[8];return Q*U*Y-Q*W*G-$*K*Y+$*W*H+Z*K*G-Z*U*H}invert(){let J=this.elements,Q=J[0],$=J[1],Z=J[2],K=J[3],U=J[4],W=J[5],H=J[6],G=J[7],Y=J[8],E=Y*U-W*G,N=W*H-Y*K,X=G*K-U*H,R=Q*E+$*N+Z*X;if(R===0)return this.set(0,0,0,0,0,0,0,0,0);let D=1/R;return J[0]=E*D,J[1]=(Z*G-Y*$)*D,J[2]=(W*$-Z*U)*D,J[3]=N*D,J[4]=(Y*Q-Z*H)*D,J[5]=(Z*K-W*Q)*D,J[6]=X*D,J[7]=($*H-G*Q)*D,J[8]=(U*Q-$*K)*D,this}transpose(){let J,Q=this.elements;return J=Q[1],Q[1]=Q[3],Q[3]=J,J=Q[2],Q[2]=Q[6],Q[6]=J,J=Q[5],Q[5]=Q[7],Q[7]=J,this}getNormalMatrix(J){return this.setFromMatrix4(J).invert().transpose()}transposeIntoArray(J){let Q=this.elements;return J[0]=Q[0],J[1]=Q[3],J[2]=Q[6],J[3]=Q[1],J[4]=Q[4],J[5]=Q[7],J[6]=Q[2],J[7]=Q[5],J[8]=Q[8],this}setUvTransform(J,Q,$,Z,K,U,W){let H=Math.cos(K),G=Math.sin(K);return this.set($*H,$*G,-$*(H*U+G*W)+U+J,-Z*G,Z*H,-Z*(-G*U+H*W)+W+Q,0,0,1),this}scale(J,Q){return this.premultiply(U6.makeScale(J,Q)),this}rotate(J){return this.premultiply(U6.makeRotation(-J)),this}translate(J,Q){return this.premultiply(U6.makeTranslation(J,Q)),this}makeTranslation(J,Q){if(J.isVector2)this.set(1,0,J.x,0,1,J.y,0,0,1);else this.set(1,0,J,0,1,Q,0,0,1);return this}makeRotation(J){let Q=Math.cos(J),$=Math.sin(J);return this.set(Q,-$,0,$,Q,0,0,0,1),this}makeScale(J,Q){return this.set(J,0,0,0,Q,0,0,0,1),this}equals(J){let Q=this.elements,$=J.elements;for(let Z=0;Z<9;Z++)if(Q[Z]!==$[Z])return!1;return!0}fromArray(J,Q=0){for(let $=0;$<9;$++)this.elements[$]=J[$+Q];return this}toArray(J=[],Q=0){let $=this.elements;return J[Q]=$[0],J[Q+1]=$[1],J[Q+2]=$[2],J[Q+3]=$[3],J[Q+4]=$[4],J[Q+5]=$[5],J[Q+6]=$[6],J[Q+7]=$[7],J[Q+8]=$[8],J}clone(){return new this.constructor().fromArray(this.elements)}}var U6=new j0,P$=new j0().set(0.4123908,0.3575843,0.1804808,0.212639,0.7151687,0.0721923,0.0193308,0.1191948,0.9505322),w$=new j0().set(3.2409699,-1.5373832,-0.4986108,-0.9692436,1.8759675,0.0415551,0.0556301,-0.203977,1.0569715);function KU(){let J={enabled:!0,workingColorSpace:"srgb-linear",spaces:{},convert:function(K,U,W){if(this.enabled===!1||U===W||!U||!W)return K;if(this.spaces[U].transfer==="srgb")K.r=H9(K.r),K.g=H9(K.g),K.b=H9(K.b);if(this.spaces[U].primaries!==this.spaces[W].primaries)K.applyMatrix3(this.spaces[U].toXYZ),K.applyMatrix3(this.spaces[W].fromXYZ);if(this.spaces[W].transfer==="srgb")K.r=W8(K.r),K.g=W8(K.g),K.b=W8(K.b);return K},workingToColorSpace:function(K,U){return this.convert(K,this.workingColorSpace,U)},colorSpaceToWorking:function(K,U){return this.convert(K,U,this.workingColorSpace)},getPrimaries:function(K){return this.spaces[K].primaries},getTransfer:function(K){if(K==="")return"linear";return this.spaces[K].transfer},getToneMappingMode:function(K){return this.spaces[K].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(K,U=this.workingColorSpace){return K.fromArray(this.spaces[U].luminanceCoefficients)},define:function(K){Object.assign(this.spaces,K)},_getMatrix:function(K,U,W){return K.copy(this.spaces[U].toXYZ).multiply(this.spaces[W].fromXYZ)},_getDrawingBufferColorSpace:function(K){return this.spaces[K].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(K=this.workingColorSpace){return this.spaces[K].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(K,U){return w8("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),J.workingToColorSpace(K,U)},toWorkingColorSpace:function(K,U){return w8("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),J.colorSpaceToWorking(K,U)}},Q=[0.64,0.33,0.3,0.6,0.15,0.06],$=[0.2126,0.7152,0.0722],Z=[0.3127,0.329];return J.define({["srgb-linear"]:{primaries:Q,whitePoint:Z,transfer:"linear",toXYZ:P$,fromXYZ:w$,luminanceCoefficients:$,workingColorSpaceConfig:{unpackColorSpace:"srgb"},outputColorSpaceConfig:{drawingBufferColorSpace:"srgb"}},["srgb"]:{primaries:Q,whitePoint:Z,transfer:"srgb",toXYZ:P$,fromXYZ:w$,luminanceCoefficients:$,outputColorSpaceConfig:{drawingBufferColorSpace:"srgb"}}}),J}var x0=KU();function H9(J){return J<0.04045?J*0.0773993808:Math.pow(J*0.9478672986+0.0521327014,2.4)}function W8(J){return J<0.0031308?J*12.92:1.055*Math.pow(J,0.41666)-0.055}var i9;class AQ{static getDataURL(J,Q="image/png"){if(/^data:/i.test(J.src))return J.src;if(typeof HTMLCanvasElement>"u")return J.src;let $;if(J instanceof HTMLCanvasElement)$=J;else{if(i9===void 0)i9=P8("canvas");i9.width=J.width,i9.height=J.height;let Z=i9.getContext("2d");if(J instanceof ImageData)Z.putImageData(J,0,0);else Z.drawImage(J,0,0,J.width,J.height);$=i9}return $.toDataURL(Q)}static sRGBToLinear(J){if(typeof HTMLImageElement<"u"&&J instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&J instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&J instanceof ImageBitmap){let Q=P8("canvas");Q.width=J.width,Q.height=J.height;let $=Q.getContext("2d");$.drawImage(J,0,0,J.width,J.height);let Z=$.getImageData(0,0,J.width,J.height),K=Z.data;for(let U=0;U<K.length;U++)K[U]=H9(K[U]/255)*255;return $.putImageData(Z,0,0),Q}else if(J.data){let Q=J.data.slice(0);for(let $=0;$<Q.length;$++)if(Q instanceof Uint8Array||Q instanceof Uint8ClampedArray)Q[$]=Math.floor(H9(Q[$]/255)*255);else Q[$]=H9(Q[$]);return{data:Q,width:J.width,height:J.height}}else return w0("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),J}}var UU=0;class h8{constructor(J=null){this.isSource=!0,Object.defineProperty(this,"id",{value:UU++}),this.uuid=b8(),this.data=J,this.dataReady=!0,this.version=0}getSize(J){let Q=this.data;if(typeof HTMLVideoElement<"u"&&Q instanceof HTMLVideoElement)J.set(Q.videoWidth,Q.videoHeight,0);else if(typeof VideoFrame<"u"&&Q instanceof VideoFrame)J.set(Q.displayHeight,Q.displayWidth,0);else if(Q!==null)J.set(Q.width,Q.height,Q.depth||0);else J.set(0,0,0);return J}set needsUpdate(J){if(J===!0)this.version++}toJSON(J){let Q=J===void 0||typeof J==="string";if(!Q&&J.images[this.uuid]!==void 0)return J.images[this.uuid];let $={uuid:this.uuid,url:""},Z=this.data;if(Z!==null){let K;if(Array.isArray(Z)){K=[];for(let U=0,W=Z.length;U<W;U++)if(Z[U].isDataTexture)K.push(W6(Z[U].image));else K.push(W6(Z[U]))}else K=W6(Z);$.url=K}if(!Q)J.images[this.uuid]=$;return $}}function W6(J){if(typeof HTMLImageElement<"u"&&J instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&J instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&J instanceof ImageBitmap)return AQ.getDataURL(J);else if(J.data)return{data:Array.from(J.data),width:J.width,height:J.height,type:J.data.constructor.name};else return w0("Texture: Unable to serialize Texture."),{}}var WU=0,H6=new x;class VJ extends B9{constructor(J=VJ.DEFAULT_IMAGE,Q=VJ.DEFAULT_MAPPING,$=1001,Z=1001,K=1006,U=1008,W=1023,H=1009,G=VJ.DEFAULT_ANISOTROPY,Y=""){super();this.isTexture=!0,Object.defineProperty(this,"id",{value:WU++}),this.uuid=b8(),this.name="",this.source=new h8(J),this.mipmaps=[],this.mapping=Q,this.channel=0,this.wrapS=$,this.wrapT=Z,this.magFilter=K,this.minFilter=U,this.anisotropy=G,this.format=W,this.internalFormat=null,this.type=H,this.offset=new i0(0,0),this.repeat=new i0(1,1),this.center=new i0(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new j0,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=Y,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=J&&J.depth&&J.depth>1?!0:!1,this.pmremVersion=0}get width(){return this.source.getSize(H6).x}get height(){return this.source.getSize(H6).y}get depth(){return this.source.getSize(H6).z}get image(){return this.source.data}set image(J=null){this.source.data=J}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(J,Q){this.updateRanges.push({start:J,count:Q})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(J){return this.name=J.name,this.source=J.source,this.mipmaps=J.mipmaps.slice(0),this.mapping=J.mapping,this.channel=J.channel,this.wrapS=J.wrapS,this.wrapT=J.wrapT,this.magFilter=J.magFilter,this.minFilter=J.minFilter,this.anisotropy=J.anisotropy,this.format=J.format,this.internalFormat=J.internalFormat,this.type=J.type,this.offset.copy(J.offset),this.repeat.copy(J.repeat),this.center.copy(J.center),this.rotation=J.rotation,this.matrixAutoUpdate=J.matrixAutoUpdate,this.matrix.copy(J.matrix),this.generateMipmaps=J.generateMipmaps,this.premultiplyAlpha=J.premultiplyAlpha,this.flipY=J.flipY,this.unpackAlignment=J.unpackAlignment,this.colorSpace=J.colorSpace,this.renderTarget=J.renderTarget,this.isRenderTargetTexture=J.isRenderTargetTexture,this.isArrayTexture=J.isArrayTexture,this.userData=JSON.parse(JSON.stringify(J.userData)),this.needsUpdate=!0,this}setValues(J){for(let Q in J){let $=J[Q];if($===void 0){w0(`Texture.setValues(): parameter '${Q}' has value of undefined.`);continue}let Z=this[Q];if(Z===void 0){w0(`Texture.setValues(): property '${Q}' does not exist.`);continue}if(Z&&$&&(Z.isVector2&&$.isVector2))Z.copy($);else if(Z&&$&&(Z.isVector3&&$.isVector3))Z.copy($);else if(Z&&$&&(Z.isMatrix3&&$.isMatrix3))Z.copy($);else this[Q]=$}}toJSON(J){let Q=J===void 0||typeof J==="string";if(!Q&&J.textures[this.uuid]!==void 0)return J.textures[this.uuid];let $={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(J).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};if(Object.keys(this.userData).length>0)$.userData=this.userData;if(!Q)J.textures[this.uuid]=$;return $}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(J){if(this.mapping!==300)return J;if(J.applyMatrix3(this.matrix),J.x<0||J.x>1)switch(this.wrapS){case 1000:J.x=J.x-Math.floor(J.x);break;case 1001:J.x=J.x<0?0:1;break;case 1002:if(Math.abs(Math.floor(J.x)%2)===1)J.x=Math.ceil(J.x)-J.x;else J.x=J.x-Math.floor(J.x);break}if(J.y<0||J.y>1)switch(this.wrapT){case 1000:J.y=J.y-Math.floor(J.y);break;case 1001:J.y=J.y<0?0:1;break;case 1002:if(Math.abs(Math.floor(J.y)%2)===1)J.y=Math.ceil(J.y)-J.y;else J.y=J.y-Math.floor(J.y);break}if(this.flipY)J.y=1-J.y;return J}set needsUpdate(J){if(J===!0)this.version++,this.source.needsUpdate=!0}set needsPMREMUpdate(J){if(J===!0)this.pmremVersion++}}VJ.DEFAULT_IMAGE=null;VJ.DEFAULT_MAPPING=300;VJ.DEFAULT_ANISOTROPY=1;class HJ{constructor(J=0,Q=0,$=0,Z=1){HJ.prototype.isVector4=!0,this.x=J,this.y=Q,this.z=$,this.w=Z}get width(){return this.z}set width(J){this.z=J}get height(){return this.w}set height(J){this.w=J}set(J,Q,$,Z){return this.x=J,this.y=Q,this.z=$,this.w=Z,this}setScalar(J){return this.x=J,this.y=J,this.z=J,this.w=J,this}setX(J){return this.x=J,this}setY(J){return this.y=J,this}setZ(J){return this.z=J,this}setW(J){return this.w=J,this}setComponent(J,Q){switch(J){case 0:this.x=Q;break;case 1:this.y=Q;break;case 2:this.z=Q;break;case 3:this.w=Q;break;default:throw Error("index is out of range: "+J)}return this}getComponent(J){switch(J){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error("index is out of range: "+J)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(J){return this.x=J.x,this.y=J.y,this.z=J.z,this.w=J.w!==void 0?J.w:1,this}add(J){return this.x+=J.x,this.y+=J.y,this.z+=J.z,this.w+=J.w,this}addScalar(J){return this.x+=J,this.y+=J,this.z+=J,this.w+=J,this}addVectors(J,Q){return this.x=J.x+Q.x,this.y=J.y+Q.y,this.z=J.z+Q.z,this.w=J.w+Q.w,this}addScaledVector(J,Q){return this.x+=J.x*Q,this.y+=J.y*Q,this.z+=J.z*Q,this.w+=J.w*Q,this}sub(J){return this.x-=J.x,this.y-=J.y,this.z-=J.z,this.w-=J.w,this}subScalar(J){return this.x-=J,this.y-=J,this.z-=J,this.w-=J,this}subVectors(J,Q){return this.x=J.x-Q.x,this.y=J.y-Q.y,this.z=J.z-Q.z,this.w=J.w-Q.w,this}multiply(J){return this.x*=J.x,this.y*=J.y,this.z*=J.z,this.w*=J.w,this}multiplyScalar(J){return this.x*=J,this.y*=J,this.z*=J,this.w*=J,this}applyMatrix4(J){let Q=this.x,$=this.y,Z=this.z,K=this.w,U=J.elements;return this.x=U[0]*Q+U[4]*$+U[8]*Z+U[12]*K,this.y=U[1]*Q+U[5]*$+U[9]*Z+U[13]*K,this.z=U[2]*Q+U[6]*$+U[10]*Z+U[14]*K,this.w=U[3]*Q+U[7]*$+U[11]*Z+U[15]*K,this}divide(J){return this.x/=J.x,this.y/=J.y,this.z/=J.z,this.w/=J.w,this}divideScalar(J){return this.multiplyScalar(1/J)}setAxisAngleFromQuaternion(J){this.w=2*Math.acos(J.w);let Q=Math.sqrt(1-J.w*J.w);if(Q<0.0001)this.x=1,this.y=0,this.z=0;else this.x=J.x/Q,this.y=J.y/Q,this.z=J.z/Q;return this}setAxisAngleFromRotationMatrix(J){let Q,$,Z,K,U=0.01,W=0.1,H=J.elements,G=H[0],Y=H[4],E=H[8],N=H[1],X=H[5],R=H[9],D=H[2],V=H[6],q=H[10];if(Math.abs(Y-N)<0.01&&Math.abs(E-D)<0.01&&Math.abs(R-V)<0.01){if(Math.abs(Y+N)<0.1&&Math.abs(E+D)<0.1&&Math.abs(R+V)<0.1&&Math.abs(G+X+q-3)<0.1)return this.set(1,0,0,0),this;Q=Math.PI;let z=(G+1)/2,B=(X+1)/2,L=(q+1)/2,w=(Y+N)/4,_=(E+D)/4,C=(R+V)/4;if(z>B&&z>L)if(z<0.01)$=0,Z=0.707106781,K=0.707106781;else $=Math.sqrt(z),Z=w/$,K=_/$;else if(B>L)if(B<0.01)$=0.707106781,Z=0,K=0.707106781;else Z=Math.sqrt(B),$=w/Z,K=C/Z;else if(L<0.01)$=0.707106781,Z=0.707106781,K=0;else K=Math.sqrt(L),$=_/K,Z=C/K;return this.set($,Z,K,Q),this}let F=Math.sqrt((V-R)*(V-R)+(E-D)*(E-D)+(N-Y)*(N-Y));if(Math.abs(F)<0.001)F=1;return this.x=(V-R)/F,this.y=(E-D)/F,this.z=(N-Y)/F,this.w=Math.acos((G+X+q-1)/2),this}setFromMatrixPosition(J){let Q=J.elements;return this.x=Q[12],this.y=Q[13],this.z=Q[14],this.w=Q[15],this}min(J){return this.x=Math.min(this.x,J.x),this.y=Math.min(this.y,J.y),this.z=Math.min(this.z,J.z),this.w=Math.min(this.w,J.w),this}max(J){return this.x=Math.max(this.x,J.x),this.y=Math.max(this.y,J.y),this.z=Math.max(this.z,J.z),this.w=Math.max(this.w,J.w),this}clamp(J,Q){return this.x=g0(this.x,J.x,Q.x),this.y=g0(this.y,J.y,Q.y),this.z=g0(this.z,J.z,Q.z),this.w=g0(this.w,J.w,Q.w),this}clampScalar(J,Q){return this.x=g0(this.x,J,Q),this.y=g0(this.y,J,Q),this.z=g0(this.z,J,Q),this.w=g0(this.w,J,Q),this}clampLength(J,Q){let $=this.length();return this.divideScalar($||1).multiplyScalar(g0($,J,Q))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(J){return this.x*J.x+this.y*J.y+this.z*J.z+this.w*J.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(J){return this.normalize().multiplyScalar(J)}lerp(J,Q){return this.x+=(J.x-this.x)*Q,this.y+=(J.y-this.y)*Q,this.z+=(J.z-this.z)*Q,this.w+=(J.w-this.w)*Q,this}lerpVectors(J,Q,$){return this.x=J.x+(Q.x-J.x)*$,this.y=J.y+(Q.y-J.y)*$,this.z=J.z+(Q.z-J.z)*$,this.w=J.w+(Q.w-J.w)*$,this}equals(J){return J.x===this.x&&J.y===this.y&&J.z===this.z&&J.w===this.w}fromArray(J,Q=0){return this.x=J[Q],this.y=J[Q+1],this.z=J[Q+2],this.w=J[Q+3],this}toArray(J=[],Q=0){return J[Q]=this.x,J[Q+1]=this.y,J[Q+2]=this.z,J[Q+3]=this.w,J}fromBufferAttribute(J,Q){return this.x=J.getX(Q),this.y=J.getY(Q),this.z=J.getZ(Q),this.w=J.getW(Q),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class CQ extends B9{constructor(J=1,Q=1,$={}){super();$=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:1006,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},$),this.isRenderTarget=!0,this.width=J,this.height=Q,this.depth=$.depth,this.scissor=new HJ(0,0,J,Q),this.scissorTest=!1,this.viewport=new HJ(0,0,J,Q),this.textures=[];let Z={width:J,height:Q,depth:$.depth},K=new VJ(Z),U=$.count;for(let W=0;W<U;W++)this.textures[W]=K.clone(),this.textures[W].isRenderTargetTexture=!0,this.textures[W].renderTarget=this;this._setTextureOptions($),this.depthBuffer=$.depthBuffer,this.stencilBuffer=$.stencilBuffer,this.resolveDepthBuffer=$.resolveDepthBuffer,this.resolveStencilBuffer=$.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=$.depthTexture,this.samples=$.samples,this.multiview=$.multiview}_setTextureOptions(J={}){let Q={minFilter:1006,generateMipmaps:!1,flipY:!1,internalFormat:null};if(J.mapping!==void 0)Q.mapping=J.mapping;if(J.wrapS!==void 0)Q.wrapS=J.wrapS;if(J.wrapT!==void 0)Q.wrapT=J.wrapT;if(J.wrapR!==void 0)Q.wrapR=J.wrapR;if(J.magFilter!==void 0)Q.magFilter=J.magFilter;if(J.minFilter!==void 0)Q.minFilter=J.minFilter;if(J.format!==void 0)Q.format=J.format;if(J.type!==void 0)Q.type=J.type;if(J.anisotropy!==void 0)Q.anisotropy=J.anisotropy;if(J.colorSpace!==void 0)Q.colorSpace=J.colorSpace;if(J.flipY!==void 0)Q.flipY=J.flipY;if(J.generateMipmaps!==void 0)Q.generateMipmaps=J.generateMipmaps;if(J.internalFormat!==void 0)Q.internalFormat=J.internalFormat;for(let $=0;$<this.textures.length;$++)this.textures[$].setValues(Q)}get texture(){return this.textures[0]}set texture(J){this.textures[0]=J}set depthTexture(J){if(this._depthTexture!==null)this._depthTexture.renderTarget=null;if(J!==null)J.renderTarget=this;this._depthTexture=J}get depthTexture(){return this._depthTexture}setSize(J,Q,$=1){if(this.width!==J||this.height!==Q||this.depth!==$){this.width=J,this.height=Q,this.depth=$;for(let Z=0,K=this.textures.length;Z<K;Z++)if(this.textures[Z].image.width=J,this.textures[Z].image.height=Q,this.textures[Z].image.depth=$,this.textures[Z].isData3DTexture!==!0)this.textures[Z].isArrayTexture=this.textures[Z].image.depth>1;this.dispose()}this.viewport.set(0,0,J,Q),this.scissor.set(0,0,J,Q)}clone(){return new this.constructor().copy(this)}copy(J){this.width=J.width,this.height=J.height,this.depth=J.depth,this.scissor.copy(J.scissor),this.scissorTest=J.scissorTest,this.viewport.copy(J.viewport),this.textures.length=0;for(let Q=0,$=J.textures.length;Q<$;Q++){this.textures[Q]=J.textures[Q].clone(),this.textures[Q].isRenderTargetTexture=!0,this.textures[Q].renderTarget=this;let Z=Object.assign({},J.textures[Q].image);this.textures[Q].source=new h8(Z)}if(this.depthBuffer=J.depthBuffer,this.stencilBuffer=J.stencilBuffer,this.resolveDepthBuffer=J.resolveDepthBuffer,this.resolveStencilBuffer=J.resolveStencilBuffer,J.depthTexture!==null)this.depthTexture=J.depthTexture.clone();return this.samples=J.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class bJ extends CQ{constructor(J=1,Q=1,$={}){super(J,Q,$);this.isWebGLRenderTarget=!0}}class S7 extends VJ{constructor(J=null,Q=1,$=1,Z=1){super(null);this.isDataArrayTexture=!0,this.image={data:J,width:Q,height:$,depth:Z},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(J){this.layerUpdates.add(J)}clearLayerUpdates(){this.layerUpdates.clear()}}class PQ extends VJ{constructor(J=null,Q=1,$=1,Z=1){super(null);this.isData3DTexture=!0,this.image={data:J,width:Q,height:$,depth:Z},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class WJ{constructor(J,Q,$,Z,K,U,W,H,G,Y,E,N,X,R,D,V){if(WJ.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],J!==void 0)this.set(J,Q,$,Z,K,U,W,H,G,Y,E,N,X,R,D,V)}set(J,Q,$,Z,K,U,W,H,G,Y,E,N,X,R,D,V){let q=this.elements;return q[0]=J,q[4]=Q,q[8]=$,q[12]=Z,q[1]=K,q[5]=U,q[9]=W,q[13]=H,q[2]=G,q[6]=Y,q[10]=E,q[14]=N,q[3]=X,q[7]=R,q[11]=D,q[15]=V,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new WJ().fromArray(this.elements)}copy(J){let Q=this.elements,$=J.elements;return Q[0]=$[0],Q[1]=$[1],Q[2]=$[2],Q[3]=$[3],Q[4]=$[4],Q[5]=$[5],Q[6]=$[6],Q[7]=$[7],Q[8]=$[8],Q[9]=$[9],Q[10]=$[10],Q[11]=$[11],Q[12]=$[12],Q[13]=$[13],Q[14]=$[14],Q[15]=$[15],this}copyPosition(J){let Q=this.elements,$=J.elements;return Q[12]=$[12],Q[13]=$[13],Q[14]=$[14],this}setFromMatrix3(J){let Q=J.elements;return this.set(Q[0],Q[3],Q[6],0,Q[1],Q[4],Q[7],0,Q[2],Q[5],Q[8],0,0,0,0,1),this}extractBasis(J,Q,$){if(this.determinant()===0)return J.set(1,0,0),Q.set(0,1,0),$.set(0,0,1),this;return J.setFromMatrixColumn(this,0),Q.setFromMatrixColumn(this,1),$.setFromMatrixColumn(this,2),this}makeBasis(J,Q,$){return this.set(J.x,Q.x,$.x,0,J.y,Q.y,$.y,0,J.z,Q.z,$.z,0,0,0,0,1),this}extractRotation(J){if(J.determinant()===0)return this.identity();let Q=this.elements,$=J.elements,Z=1/o9.setFromMatrixColumn(J,0).length(),K=1/o9.setFromMatrixColumn(J,1).length(),U=1/o9.setFromMatrixColumn(J,2).length();return Q[0]=$[0]*Z,Q[1]=$[1]*Z,Q[2]=$[2]*Z,Q[3]=0,Q[4]=$[4]*K,Q[5]=$[5]*K,Q[6]=$[6]*K,Q[7]=0,Q[8]=$[8]*U,Q[9]=$[9]*U,Q[10]=$[10]*U,Q[11]=0,Q[12]=0,Q[13]=0,Q[14]=0,Q[15]=1,this}makeRotationFromEuler(J){let Q=this.elements,$=J.x,Z=J.y,K=J.z,U=Math.cos($),W=Math.sin($),H=Math.cos(Z),G=Math.sin(Z),Y=Math.cos(K),E=Math.sin(K);if(J.order==="XYZ"){let N=U*Y,X=U*E,R=W*Y,D=W*E;Q[0]=H*Y,Q[4]=-H*E,Q[8]=G,Q[1]=X+R*G,Q[5]=N-D*G,Q[9]=-W*H,Q[2]=D-N*G,Q[6]=R+X*G,Q[10]=U*H}else if(J.order==="YXZ"){let N=H*Y,X=H*E,R=G*Y,D=G*E;Q[0]=N+D*W,Q[4]=R*W-X,Q[8]=U*G,Q[1]=U*E,Q[5]=U*Y,Q[9]=-W,Q[2]=X*W-R,Q[6]=D+N*W,Q[10]=U*H}else if(J.order==="ZXY"){let N=H*Y,X=H*E,R=G*Y,D=G*E;Q[0]=N-D*W,Q[4]=-U*E,Q[8]=R+X*W,Q[1]=X+R*W,Q[5]=U*Y,Q[9]=D-N*W,Q[2]=-U*G,Q[6]=W,Q[10]=U*H}else if(J.order==="ZYX"){let N=U*Y,X=U*E,R=W*Y,D=W*E;Q[0]=H*Y,Q[4]=R*G-X,Q[8]=N*G+D,Q[1]=H*E,Q[5]=D*G+N,Q[9]=X*G-R,Q[2]=-G,Q[6]=W*H,Q[10]=U*H}else if(J.order==="YZX"){let N=U*H,X=U*G,R=W*H,D=W*G;Q[0]=H*Y,Q[4]=D-N*E,Q[8]=R*E+X,Q[1]=E,Q[5]=U*Y,Q[9]=-W*Y,Q[2]=-G*Y,Q[6]=X*E+R,Q[10]=N-D*E}else if(J.order==="XZY"){let N=U*H,X=U*G,R=W*H,D=W*G;Q[0]=H*Y,Q[4]=-E,Q[8]=G*Y,Q[1]=N*E+D,Q[5]=U*Y,Q[9]=X*E-R,Q[2]=R*E-X,Q[6]=W*Y,Q[10]=D*E+N}return Q[3]=0,Q[7]=0,Q[11]=0,Q[12]=0,Q[13]=0,Q[14]=0,Q[15]=1,this}makeRotationFromQuaternion(J){return this.compose(HU,J,GU)}lookAt(J,Q,$){let Z=this.elements;if(SJ.subVectors(J,Q),SJ.lengthSq()===0)SJ.z=1;if(SJ.normalize(),q9.crossVectors($,SJ),q9.lengthSq()===0){if(Math.abs($.z)===1)SJ.x+=0.0001;else SJ.z+=0.0001;SJ.normalize(),q9.crossVectors($,SJ)}return q9.normalize(),a8.crossVectors(SJ,q9),Z[0]=q9.x,Z[4]=a8.x,Z[8]=SJ.x,Z[1]=q9.y,Z[5]=a8.y,Z[9]=SJ.y,Z[2]=q9.z,Z[6]=a8.z,Z[10]=SJ.z,this}multiply(J){return this.multiplyMatrices(this,J)}premultiply(J){return this.multiplyMatrices(J,this)}multiplyMatrices(J,Q){let $=J.elements,Z=Q.elements,K=this.elements,U=$[0],W=$[4],H=$[8],G=$[12],Y=$[1],E=$[5],N=$[9],X=$[13],R=$[2],D=$[6],V=$[10],q=$[14],F=$[3],z=$[7],B=$[11],L=$[15],w=Z[0],_=Z[4],C=Z[8],O=Z[12],P=Z[1],y=Z[5],A=Z[9],b=Z[13],u=Z[2],j=Z[6],p=Z[10],v=Z[14],h=Z[3],i=Z[7],n=Z[11],J0=Z[15];return K[0]=U*w+W*P+H*u+G*h,K[4]=U*_+W*y+H*j+G*i,K[8]=U*C+W*A+H*p+G*n,K[12]=U*O+W*b+H*v+G*J0,K[1]=Y*w+E*P+N*u+X*h,K[5]=Y*_+E*y+N*j+X*i,K[9]=Y*C+E*A+N*p+X*n,K[13]=Y*O+E*b+N*v+X*J0,K[2]=R*w+D*P+V*u+q*h,K[6]=R*_+D*y+V*j+q*i,K[10]=R*C+D*A+V*p+q*n,K[14]=R*O+D*b+V*v+q*J0,K[3]=F*w+z*P+B*u+L*h,K[7]=F*_+z*y+B*j+L*i,K[11]=F*C+z*A+B*p+L*n,K[15]=F*O+z*b+B*v+L*J0,this}multiplyScalar(J){let Q=this.elements;return Q[0]*=J,Q[4]*=J,Q[8]*=J,Q[12]*=J,Q[1]*=J,Q[5]*=J,Q[9]*=J,Q[13]*=J,Q[2]*=J,Q[6]*=J,Q[10]*=J,Q[14]*=J,Q[3]*=J,Q[7]*=J,Q[11]*=J,Q[15]*=J,this}determinant(){let J=this.elements,Q=J[0],$=J[4],Z=J[8],K=J[12],U=J[1],W=J[5],H=J[9],G=J[13],Y=J[2],E=J[6],N=J[10],X=J[14],R=J[3],D=J[7],V=J[11],q=J[15],F=H*X-G*N,z=W*X-G*E,B=W*N-H*E,L=U*X-G*Y,w=U*N-H*Y,_=U*E-W*Y;return Q*(D*F-V*z+q*B)-$*(R*F-V*L+q*w)+Z*(R*z-D*L+q*_)-K*(R*B-D*w+V*_)}transpose(){let J=this.elements,Q;return Q=J[1],J[1]=J[4],J[4]=Q,Q=J[2],J[2]=J[8],J[8]=Q,Q=J[6],J[6]=J[9],J[9]=Q,Q=J[3],J[3]=J[12],J[12]=Q,Q=J[7],J[7]=J[13],J[13]=Q,Q=J[11],J[11]=J[14],J[14]=Q,this}setPosition(J,Q,$){let Z=this.elements;if(J.isVector3)Z[12]=J.x,Z[13]=J.y,Z[14]=J.z;else Z[12]=J,Z[13]=Q,Z[14]=$;return this}invert(){let J=this.elements,Q=J[0],$=J[1],Z=J[2],K=J[3],U=J[4],W=J[5],H=J[6],G=J[7],Y=J[8],E=J[9],N=J[10],X=J[11],R=J[12],D=J[13],V=J[14],q=J[15],F=Q*W-$*U,z=Q*H-Z*U,B=Q*G-K*U,L=$*H-Z*W,w=$*G-K*W,_=Z*G-K*H,C=Y*D-E*R,O=Y*V-N*R,P=Y*q-X*R,y=E*V-N*D,A=E*q-X*D,b=N*q-X*V,u=F*b-z*A+B*y+L*P-w*O+_*C;if(u===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let j=1/u;return J[0]=(W*b-H*A+G*y)*j,J[1]=(Z*A-$*b-K*y)*j,J[2]=(D*_-V*w+q*L)*j,J[3]=(N*w-E*_-X*L)*j,J[4]=(H*P-U*b-G*O)*j,J[5]=(Q*b-Z*P+K*O)*j,J[6]=(V*B-R*_-q*z)*j,J[7]=(Y*_-N*B+X*z)*j,J[8]=(U*A-W*P+G*C)*j,J[9]=($*P-Q*A-K*C)*j,J[10]=(R*w-D*B+q*F)*j,J[11]=(E*B-Y*w-X*F)*j,J[12]=(W*O-U*y-H*C)*j,J[13]=(Q*y-$*O+Z*C)*j,J[14]=(D*z-R*L-V*F)*j,J[15]=(Y*L-E*z+N*F)*j,this}scale(J){let Q=this.elements,$=J.x,Z=J.y,K=J.z;return Q[0]*=$,Q[4]*=Z,Q[8]*=K,Q[1]*=$,Q[5]*=Z,Q[9]*=K,Q[2]*=$,Q[6]*=Z,Q[10]*=K,Q[3]*=$,Q[7]*=Z,Q[11]*=K,this}getMaxScaleOnAxis(){let J=this.elements,Q=J[0]*J[0]+J[1]*J[1]+J[2]*J[2],$=J[4]*J[4]+J[5]*J[5]+J[6]*J[6],Z=J[8]*J[8]+J[9]*J[9]+J[10]*J[10];return Math.sqrt(Math.max(Q,$,Z))}makeTranslation(J,Q,$){if(J.isVector3)this.set(1,0,0,J.x,0,1,0,J.y,0,0,1,J.z,0,0,0,1);else this.set(1,0,0,J,0,1,0,Q,0,0,1,$,0,0,0,1);return this}makeRotationX(J){let Q=Math.cos(J),$=Math.sin(J);return this.set(1,0,0,0,0,Q,-$,0,0,$,Q,0,0,0,0,1),this}makeRotationY(J){let Q=Math.cos(J),$=Math.sin(J);return this.set(Q,0,$,0,0,1,0,0,-$,0,Q,0,0,0,0,1),this}makeRotationZ(J){let Q=Math.cos(J),$=Math.sin(J);return this.set(Q,-$,0,0,$,Q,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(J,Q){let $=Math.cos(Q),Z=Math.sin(Q),K=1-$,U=J.x,W=J.y,H=J.z,G=K*U,Y=K*W;return this.set(G*U+$,G*W-Z*H,G*H+Z*W,0,G*W+Z*H,Y*W+$,Y*H-Z*U,0,G*H-Z*W,Y*H+Z*U,K*H*H+$,0,0,0,0,1),this}makeScale(J,Q,$){return this.set(J,0,0,0,0,Q,0,0,0,0,$,0,0,0,0,1),this}makeShear(J,Q,$,Z,K,U){return this.set(1,$,K,0,J,1,U,0,Q,Z,1,0,0,0,0,1),this}compose(J,Q,$){let Z=this.elements,K=Q._x,U=Q._y,W=Q._z,H=Q._w,G=K+K,Y=U+U,E=W+W,N=K*G,X=K*Y,R=K*E,D=U*Y,V=U*E,q=W*E,F=H*G,z=H*Y,B=H*E,L=$.x,w=$.y,_=$.z;return Z[0]=(1-(D+q))*L,Z[1]=(X+B)*L,Z[2]=(R-z)*L,Z[3]=0,Z[4]=(X-B)*w,Z[5]=(1-(N+q))*w,Z[6]=(V+F)*w,Z[7]=0,Z[8]=(R+z)*_,Z[9]=(V-F)*_,Z[10]=(1-(N+D))*_,Z[11]=0,Z[12]=J.x,Z[13]=J.y,Z[14]=J.z,Z[15]=1,this}decompose(J,Q,$){let Z=this.elements;J.x=Z[12],J.y=Z[13],J.z=Z[14];let K=this.determinant();if(K===0)return $.set(1,1,1),Q.identity(),this;let U=o9.set(Z[0],Z[1],Z[2]).length(),W=o9.set(Z[4],Z[5],Z[6]).length(),H=o9.set(Z[8],Z[9],Z[10]).length();if(K<0)U=-U;pJ.copy(this);let G=1/U,Y=1/W,E=1/H;return pJ.elements[0]*=G,pJ.elements[1]*=G,pJ.elements[2]*=G,pJ.elements[4]*=Y,pJ.elements[5]*=Y,pJ.elements[6]*=Y,pJ.elements[8]*=E,pJ.elements[9]*=E,pJ.elements[10]*=E,Q.setFromRotationMatrix(pJ),$.x=U,$.y=W,$.z=H,this}makePerspective(J,Q,$,Z,K,U,W=2000,H=!1){let G=this.elements,Y=2*K/(Q-J),E=2*K/($-Z),N=(Q+J)/(Q-J),X=($+Z)/($-Z),R,D;if(H)R=K/(U-K),D=U*K/(U-K);else if(W===2000)R=-(U+K)/(U-K),D=-2*U*K/(U-K);else if(W===2001)R=-U/(U-K),D=-U*K/(U-K);else throw Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+W);return G[0]=Y,G[4]=0,G[8]=N,G[12]=0,G[1]=0,G[5]=E,G[9]=X,G[13]=0,G[2]=0,G[6]=0,G[10]=R,G[14]=D,G[3]=0,G[7]=0,G[11]=-1,G[15]=0,this}makeOrthographic(J,Q,$,Z,K,U,W=2000,H=!1){let G=this.elements,Y=2/(Q-J),E=2/($-Z),N=-(Q+J)/(Q-J),X=-($+Z)/($-Z),R,D;if(H)R=1/(U-K),D=U/(U-K);else if(W===2000)R=-2/(U-K),D=-(U+K)/(U-K);else if(W===2001)R=-1/(U-K),D=-K/(U-K);else throw Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+W);return G[0]=Y,G[4]=0,G[8]=0,G[12]=N,G[1]=0,G[5]=E,G[9]=0,G[13]=X,G[2]=0,G[6]=0,G[10]=R,G[14]=D,G[3]=0,G[7]=0,G[11]=0,G[15]=1,this}equals(J){let Q=this.elements,$=J.elements;for(let Z=0;Z<16;Z++)if(Q[Z]!==$[Z])return!1;return!0}fromArray(J,Q=0){for(let $=0;$<16;$++)this.elements[$]=J[$+Q];return this}toArray(J=[],Q=0){let $=this.elements;return J[Q]=$[0],J[Q+1]=$[1],J[Q+2]=$[2],J[Q+3]=$[3],J[Q+4]=$[4],J[Q+5]=$[5],J[Q+6]=$[6],J[Q+7]=$[7],J[Q+8]=$[8],J[Q+9]=$[9],J[Q+10]=$[10],J[Q+11]=$[11],J[Q+12]=$[12],J[Q+13]=$[13],J[Q+14]=$[14],J[Q+15]=$[15],J}}var o9=new x,pJ=new WJ,HU=new x(0,0,0),GU=new x(1,1,1),q9=new x,a8=new x,SJ=new x,T$=new WJ,S$=new X9;class iJ{constructor(J=0,Q=0,$=0,Z=iJ.DEFAULT_ORDER){this.isEuler=!0,this._x=J,this._y=Q,this._z=$,this._order=Z}get x(){return this._x}set x(J){this._x=J,this._onChangeCallback()}get y(){return this._y}set y(J){this._y=J,this._onChangeCallback()}get z(){return this._z}set z(J){this._z=J,this._onChangeCallback()}get order(){return this._order}set order(J){this._order=J,this._onChangeCallback()}set(J,Q,$,Z=this._order){return this._x=J,this._y=Q,this._z=$,this._order=Z,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(J){return this._x=J._x,this._y=J._y,this._z=J._z,this._order=J._order,this._onChangeCallback(),this}setFromRotationMatrix(J,Q=this._order,$=!0){let Z=J.elements,K=Z[0],U=Z[4],W=Z[8],H=Z[1],G=Z[5],Y=Z[9],E=Z[2],N=Z[6],X=Z[10];switch(Q){case"XYZ":if(this._y=Math.asin(g0(W,-1,1)),Math.abs(W)<0.9999999)this._x=Math.atan2(-Y,X),this._z=Math.atan2(-U,K);else this._x=Math.atan2(N,G),this._z=0;break;case"YXZ":if(this._x=Math.asin(-g0(Y,-1,1)),Math.abs(Y)<0.9999999)this._y=Math.atan2(W,X),this._z=Math.atan2(H,G);else this._y=Math.atan2(-E,K),this._z=0;break;case"ZXY":if(this._x=Math.asin(g0(N,-1,1)),Math.abs(N)<0.9999999)this._y=Math.atan2(-E,X),this._z=Math.atan2(-U,G);else this._y=0,this._z=Math.atan2(H,K);break;case"ZYX":if(this._y=Math.asin(-g0(E,-1,1)),Math.abs(E)<0.9999999)this._x=Math.atan2(N,X),this._z=Math.atan2(H,K);else this._x=0,this._z=Math.atan2(-U,G);break;case"YZX":if(this._z=Math.asin(g0(H,-1,1)),Math.abs(H)<0.9999999)this._x=Math.atan2(-Y,G),this._y=Math.atan2(-E,K);else this._x=0,this._y=Math.atan2(W,X);break;case"XZY":if(this._z=Math.asin(-g0(U,-1,1)),Math.abs(U)<0.9999999)this._x=Math.atan2(N,G),this._y=Math.atan2(W,K);else this._x=Math.atan2(-Y,X),this._y=0;break;default:w0("Euler: .setFromRotationMatrix() encountered an unknown order: "+Q)}if(this._order=Q,$===!0)this._onChangeCallback();return this}setFromQuaternion(J,Q,$){return T$.makeRotationFromQuaternion(J),this.setFromRotationMatrix(T$,Q,$)}setFromVector3(J,Q=this._order){return this.set(J.x,J.y,J.z,Q)}reorder(J){return S$.setFromEuler(this),this.setFromQuaternion(S$,J)}equals(J){return J._x===this._x&&J._y===this._y&&J._z===this._z&&J._order===this._order}fromArray(J){if(this._x=J[0],this._y=J[1],this._z=J[2],J[3]!==void 0)this._order=J[3];return this._onChangeCallback(),this}toArray(J=[],Q=0){return J[Q]=this._x,J[Q+1]=this._y,J[Q+2]=this._z,J[Q+3]=this._order,J}_onChange(J){return this._onChangeCallback=J,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}iJ.DEFAULT_ORDER="XYZ";class j7{constructor(){this.mask=1}set(J){this.mask=(1<<J|0)>>>0}enable(J){this.mask|=1<<J|0}enableAll(){this.mask=-1}toggle(J){this.mask^=1<<J|0}disable(J){this.mask&=~(1<<J|0)}disableAll(){this.mask=0}test(J){return(this.mask&J.mask)!==0}isEnabled(J){return(this.mask&(1<<J|0))!==0}}var YU=0,j$=new x,a9=new X9,Q9=new WJ,r8=new x,z8=new x,XU=new x,NU=new X9,y$=new x(1,0,0),f$=new x(0,1,0),v$=new x(0,0,1),b$={type:"added"},EU={type:"removed"},r9={type:"childadded",child:null},G6={type:"childremoved",child:null};class IJ extends B9{constructor(){super();this.isObject3D=!0,Object.defineProperty(this,"id",{value:YU++}),this.uuid=b8(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=IJ.DEFAULT_UP.clone();let J=new x,Q=new iJ,$=new X9,Z=new x(1,1,1);function K(){$.setFromEuler(Q,!1)}function U(){Q.setFromQuaternion($,void 0,!1)}Q._onChange(K),$._onChange(U),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:J},rotation:{configurable:!0,enumerable:!0,value:Q},quaternion:{configurable:!0,enumerable:!0,value:$},scale:{configurable:!0,enumerable:!0,value:Z},modelViewMatrix:{value:new WJ},normalMatrix:{value:new j0}}),this.matrix=new WJ,this.matrixWorld=new WJ,this.matrixAutoUpdate=IJ.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=IJ.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new j7,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(J){if(this.matrixAutoUpdate)this.updateMatrix();this.matrix.premultiply(J),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(J){return this.quaternion.premultiply(J),this}setRotationFromAxisAngle(J,Q){this.quaternion.setFromAxisAngle(J,Q)}setRotationFromEuler(J){this.quaternion.setFromEuler(J,!0)}setRotationFromMatrix(J){this.quaternion.setFromRotationMatrix(J)}setRotationFromQuaternion(J){this.quaternion.copy(J)}rotateOnAxis(J,Q){return a9.setFromAxisAngle(J,Q),this.quaternion.multiply(a9),this}rotateOnWorldAxis(J,Q){return a9.setFromAxisAngle(J,Q),this.quaternion.premultiply(a9),this}rotateX(J){return this.rotateOnAxis(y$,J)}rotateY(J){return this.rotateOnAxis(f$,J)}rotateZ(J){return this.rotateOnAxis(v$,J)}translateOnAxis(J,Q){return j$.copy(J).applyQuaternion(this.quaternion),this.position.add(j$.multiplyScalar(Q)),this}translateX(J){return this.translateOnAxis(y$,J)}translateY(J){return this.translateOnAxis(f$,J)}translateZ(J){return this.translateOnAxis(v$,J)}localToWorld(J){return this.updateWorldMatrix(!0,!1),J.applyMatrix4(this.matrixWorld)}worldToLocal(J){return this.updateWorldMatrix(!0,!1),J.applyMatrix4(Q9.copy(this.matrixWorld).invert())}lookAt(J,Q,$){if(J.isVector3)r8.copy(J);else r8.set(J,Q,$);let Z=this.parent;if(this.updateWorldMatrix(!0,!1),z8.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight)Q9.lookAt(z8,r8,this.up);else Q9.lookAt(r8,z8,this.up);if(this.quaternion.setFromRotationMatrix(Q9),Z)Q9.extractRotation(Z.matrixWorld),a9.setFromRotationMatrix(Q9),this.quaternion.premultiply(a9.invert())}add(J){if(arguments.length>1){for(let Q=0;Q<arguments.length;Q++)this.add(arguments[Q]);return this}if(J===this)return P0("Object3D.add: object can't be added as a child of itself.",J),this;if(J&&J.isObject3D)J.removeFromParent(),J.parent=this,this.children.push(J),J.dispatchEvent(b$),r9.child=J,this.dispatchEvent(r9),r9.child=null;else P0("Object3D.add: object not an instance of THREE.Object3D.",J);return this}remove(J){if(arguments.length>1){for(let $=0;$<arguments.length;$++)this.remove(arguments[$]);return this}let Q=this.children.indexOf(J);if(Q!==-1)J.parent=null,this.children.splice(Q,1),J.dispatchEvent(EU),G6.child=J,this.dispatchEvent(G6),G6.child=null;return this}removeFromParent(){let J=this.parent;if(J!==null)J.remove(this);return this}clear(){return this.remove(...this.children)}attach(J){if(this.updateWorldMatrix(!0,!1),Q9.copy(this.matrixWorld).invert(),J.parent!==null)J.parent.updateWorldMatrix(!0,!1),Q9.multiply(J.parent.matrixWorld);return J.applyMatrix4(Q9),J.removeFromParent(),J.parent=this,this.children.push(J),J.updateWorldMatrix(!1,!0),J.dispatchEvent(b$),r9.child=J,this.dispatchEvent(r9),r9.child=null,this}getObjectById(J){return this.getObjectByProperty("id",J)}getObjectByName(J){return this.getObjectByProperty("name",J)}getObjectByProperty(J,Q){if(this[J]===Q)return this;for(let $=0,Z=this.children.length;$<Z;$++){let U=this.children[$].getObjectByProperty(J,Q);if(U!==void 0)return U}return}getObjectsByProperty(J,Q,$=[]){if(this[J]===Q)$.push(this);let Z=this.children;for(let K=0,U=Z.length;K<U;K++)Z[K].getObjectsByProperty(J,Q,$);return $}getWorldPosition(J){return this.updateWorldMatrix(!0,!1),J.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(J){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(z8,J,XU),J}getWorldScale(J){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(z8,NU,J),J}getWorldDirection(J){this.updateWorldMatrix(!0,!1);let Q=this.matrixWorld.elements;return J.set(Q[8],Q[9],Q[10]).normalize()}raycast(){}traverse(J){J(this);let Q=this.children;for(let $=0,Z=Q.length;$<Z;$++)Q[$].traverse(J)}traverseVisible(J){if(this.visible===!1)return;J(this);let Q=this.children;for(let $=0,Z=Q.length;$<Z;$++)Q[$].traverseVisible(J)}traverseAncestors(J){let Q=this.parent;if(Q!==null)J(Q),Q.traverseAncestors(J)}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let J=this.pivot;if(J!==null){let{x:Q,y:$,z:Z}=J,K=this.matrix.elements;K[12]+=Q-K[0]*Q-K[4]*$-K[8]*Z,K[13]+=$-K[1]*Q-K[5]*$-K[9]*Z,K[14]+=Z-K[2]*Q-K[6]*$-K[10]*Z}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(J){if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldNeedsUpdate||J){if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);this.matrixWorldNeedsUpdate=!1,J=!0}let Q=this.children;for(let $=0,Z=Q.length;$<Z;$++)Q[$].updateMatrixWorld(J)}updateWorldMatrix(J,Q){let $=this.parent;if(J===!0&&$!==null)$.updateWorldMatrix(!0,!1);if(this.matrixAutoUpdate)this.updateMatrix();if(this.matrixWorldAutoUpdate===!0)if(this.parent===null)this.matrixWorld.copy(this.matrix);else this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);if(Q===!0){let Z=this.children;for(let K=0,U=Z.length;K<U;K++)Z[K].updateWorldMatrix(!1,!0)}}toJSON(J){let Q=J===void 0||typeof J==="string",$={};if(Q)J={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},$.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"};let Z={};if(Z.uuid=this.uuid,Z.type=this.type,this.name!=="")Z.name=this.name;if(this.castShadow===!0)Z.castShadow=!0;if(this.receiveShadow===!0)Z.receiveShadow=!0;if(this.visible===!1)Z.visible=!1;if(this.frustumCulled===!1)Z.frustumCulled=!1;if(this.renderOrder!==0)Z.renderOrder=this.renderOrder;if(this.static!==!1)Z.static=this.static;if(Object.keys(this.userData).length>0)Z.userData=this.userData;if(Z.layers=this.layers.mask,Z.matrix=this.matrix.toArray(),Z.up=this.up.toArray(),this.pivot!==null)Z.pivot=this.pivot.toArray();if(this.matrixAutoUpdate===!1)Z.matrixAutoUpdate=!1;if(this.morphTargetDictionary!==void 0)Z.morphTargetDictionary=Object.assign({},this.morphTargetDictionary);if(this.morphTargetInfluences!==void 0)Z.morphTargetInfluences=this.morphTargetInfluences.slice();if(this.isInstancedMesh){if(Z.type="InstancedMesh",Z.count=this.count,Z.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null)Z.instanceColor=this.instanceColor.toJSON()}if(this.isBatchedMesh){if(Z.type="BatchedMesh",Z.perObjectFrustumCulled=this.perObjectFrustumCulled,Z.sortObjects=this.sortObjects,Z.drawRanges=this._drawRanges,Z.reservedRanges=this._reservedRanges,Z.geometryInfo=this._geometryInfo.map((W)=>({...W,boundingBox:W.boundingBox?W.boundingBox.toJSON():void 0,boundingSphere:W.boundingSphere?W.boundingSphere.toJSON():void 0})),Z.instanceInfo=this._instanceInfo.map((W)=>({...W})),Z.availableInstanceIds=this._availableInstanceIds.slice(),Z.availableGeometryIds=this._availableGeometryIds.slice(),Z.nextIndexStart=this._nextIndexStart,Z.nextVertexStart=this._nextVertexStart,Z.geometryCount=this._geometryCount,Z.maxInstanceCount=this._maxInstanceCount,Z.maxVertexCount=this._maxVertexCount,Z.maxIndexCount=this._maxIndexCount,Z.geometryInitialized=this._geometryInitialized,Z.matricesTexture=this._matricesTexture.toJSON(J),Z.indirectTexture=this._indirectTexture.toJSON(J),this._colorsTexture!==null)Z.colorsTexture=this._colorsTexture.toJSON(J);if(this.boundingSphere!==null)Z.boundingSphere=this.boundingSphere.toJSON();if(this.boundingBox!==null)Z.boundingBox=this.boundingBox.toJSON()}function K(W,H){if(W[H.uuid]===void 0)W[H.uuid]=H.toJSON(J);return H.uuid}if(this.isScene){if(this.background){if(this.background.isColor)Z.background=this.background.toJSON();else if(this.background.isTexture)Z.background=this.background.toJSON(J).uuid}if(this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0)Z.environment=this.environment.toJSON(J).uuid}else if(this.isMesh||this.isLine||this.isPoints){Z.geometry=K(J.geometries,this.geometry);let W=this.geometry.parameters;if(W!==void 0&&W.shapes!==void 0){let H=W.shapes;if(Array.isArray(H))for(let G=0,Y=H.length;G<Y;G++){let E=H[G];K(J.shapes,E)}else K(J.shapes,H)}}if(this.isSkinnedMesh){if(Z.bindMode=this.bindMode,Z.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0)K(J.skeletons,this.skeleton),Z.skeleton=this.skeleton.uuid}if(this.material!==void 0)if(Array.isArray(this.material)){let W=[];for(let H=0,G=this.material.length;H<G;H++)W.push(K(J.materials,this.material[H]));Z.material=W}else Z.material=K(J.materials,this.material);if(this.children.length>0){Z.children=[];for(let W=0;W<this.children.length;W++)Z.children.push(this.children[W].toJSON(J).object)}if(this.animations.length>0){Z.animations=[];for(let W=0;W<this.animations.length;W++){let H=this.animations[W];Z.animations.push(K(J.animations,H))}}if(Q){let W=U(J.geometries),H=U(J.materials),G=U(J.textures),Y=U(J.images),E=U(J.shapes),N=U(J.skeletons),X=U(J.animations),R=U(J.nodes);if(W.length>0)$.geometries=W;if(H.length>0)$.materials=H;if(G.length>0)$.textures=G;if(Y.length>0)$.images=Y;if(E.length>0)$.shapes=E;if(N.length>0)$.skeletons=N;if(X.length>0)$.animations=X;if(R.length>0)$.nodes=R}return $.object=Z,$;function U(W){let H=[];for(let G in W){let Y=W[G];delete Y.metadata,H.push(Y)}return H}}clone(J){return new this.constructor().copy(this,J)}copy(J,Q=!0){if(this.name=J.name,this.up.copy(J.up),this.position.copy(J.position),this.rotation.order=J.rotation.order,this.quaternion.copy(J.quaternion),this.scale.copy(J.scale),J.pivot!==null)this.pivot=J.pivot.clone();if(this.matrix.copy(J.matrix),this.matrixWorld.copy(J.matrixWorld),this.matrixAutoUpdate=J.matrixAutoUpdate,this.matrixWorldAutoUpdate=J.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=J.matrixWorldNeedsUpdate,this.layers.mask=J.layers.mask,this.visible=J.visible,this.castShadow=J.castShadow,this.receiveShadow=J.receiveShadow,this.frustumCulled=J.frustumCulled,this.renderOrder=J.renderOrder,this.static=J.static,this.animations=J.animations.slice(),this.userData=JSON.parse(JSON.stringify(J.userData)),Q===!0)for(let $=0;$<J.children.length;$++){let Z=J.children[$];this.add(Z.clone())}return this}}IJ.DEFAULT_UP=new x(0,1,0);IJ.DEFAULT_MATRIX_AUTO_UPDATE=!0;IJ.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class k9 extends IJ{constructor(){super();this.isGroup=!0,this.type="Group"}}var qU={type:"move"};class g8{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){if(this._hand===null)this._hand=new k9,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1};return this._hand}getTargetRaySpace(){if(this._targetRay===null)this._targetRay=new k9,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new x,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new x;return this._targetRay}getGripSpace(){if(this._grip===null)this._grip=new k9,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new x,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new x;return this._grip}dispatchEvent(J){if(this._targetRay!==null)this._targetRay.dispatchEvent(J);if(this._grip!==null)this._grip.dispatchEvent(J);if(this._hand!==null)this._hand.dispatchEvent(J);return this}connect(J){if(J&&J.hand){let Q=this._hand;if(Q)for(let $ of J.hand.values())this._getHandJoint(Q,$)}return this.dispatchEvent({type:"connected",data:J}),this}disconnect(J){if(this.dispatchEvent({type:"disconnected",data:J}),this._targetRay!==null)this._targetRay.visible=!1;if(this._grip!==null)this._grip.visible=!1;if(this._hand!==null)this._hand.visible=!1;return this}update(J,Q,$){let Z=null,K=null,U=null,W=this._targetRay,H=this._grip,G=this._hand;if(J&&Q.session.visibilityState!=="visible-blurred"){if(G&&J.hand){U=!0;for(let D of J.hand.values()){let V=Q.getJointPose(D,$),q=this._getHandJoint(G,D);if(V!==null)q.matrix.fromArray(V.transform.matrix),q.matrix.decompose(q.position,q.rotation,q.scale),q.matrixWorldNeedsUpdate=!0,q.jointRadius=V.radius;q.visible=V!==null}let Y=G.joints["index-finger-tip"],E=G.joints["thumb-tip"],N=Y.position.distanceTo(E.position),X=0.02,R=0.005;if(G.inputState.pinching&&N>X+R)G.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:J.handedness,target:this});else if(!G.inputState.pinching&&N<=X-R)G.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:J.handedness,target:this})}else if(H!==null&&J.gripSpace){if(K=Q.getPose(J.gripSpace,$),K!==null){if(H.matrix.fromArray(K.transform.matrix),H.matrix.decompose(H.position,H.rotation,H.scale),H.matrixWorldNeedsUpdate=!0,K.linearVelocity)H.hasLinearVelocity=!0,H.linearVelocity.copy(K.linearVelocity);else H.hasLinearVelocity=!1;if(K.angularVelocity)H.hasAngularVelocity=!0,H.angularVelocity.copy(K.angularVelocity);else H.hasAngularVelocity=!1}}if(W!==null){if(Z=Q.getPose(J.targetRaySpace,$),Z===null&&K!==null)Z=K;if(Z!==null){if(W.matrix.fromArray(Z.transform.matrix),W.matrix.decompose(W.position,W.rotation,W.scale),W.matrixWorldNeedsUpdate=!0,Z.linearVelocity)W.hasLinearVelocity=!0,W.linearVelocity.copy(Z.linearVelocity);else W.hasLinearVelocity=!1;if(Z.angularVelocity)W.hasAngularVelocity=!0,W.angularVelocity.copy(Z.angularVelocity);else W.hasAngularVelocity=!1;this.dispatchEvent(qU)}}}if(W!==null)W.visible=Z!==null;if(H!==null)H.visible=K!==null;if(G!==null)G.visible=U!==null;return this}_getHandJoint(J,Q){if(J.joints[Q.jointName]===void 0){let $=new k9;$.matrixAutoUpdate=!1,$.visible=!1,J.joints[Q.jointName]=$,J.add($)}return J.joints[Q.jointName]}}var iZ={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},F9={h:0,s:0,l:0},t8={h:0,s:0,l:0};function Y6(J,Q,$){if($<0)$+=1;if($>1)$-=1;if($<0.16666666666666666)return J+(Q-J)*6*$;if($<0.5)return Q;if($<0.6666666666666666)return J+(Q-J)*6*(0.6666666666666666-$);return J}class l0{constructor(J,Q,$){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(J,Q,$)}set(J,Q,$){if(Q===void 0&&$===void 0){let Z=J;if(Z&&Z.isColor)this.copy(Z);else if(typeof Z==="number")this.setHex(Z);else if(typeof Z==="string")this.setStyle(Z)}else this.setRGB(J,Q,$);return this}setScalar(J){return this.r=J,this.g=J,this.b=J,this}setHex(J,Q="srgb"){return J=Math.floor(J),this.r=(J>>16&255)/255,this.g=(J>>8&255)/255,this.b=(J&255)/255,x0.colorSpaceToWorking(this,Q),this}setRGB(J,Q,$,Z=x0.workingColorSpace){return this.r=J,this.g=Q,this.b=$,x0.colorSpaceToWorking(this,Z),this}setHSL(J,Q,$,Z=x0.workingColorSpace){if(J=ZU(J,1),Q=g0(Q,0,1),$=g0($,0,1),Q===0)this.r=this.g=this.b=$;else{let K=$<=0.5?$*(1+Q):$+Q-$*Q,U=2*$-K;this.r=Y6(U,K,J+0.3333333333333333),this.g=Y6(U,K,J),this.b=Y6(U,K,J-0.3333333333333333)}return x0.colorSpaceToWorking(this,Z),this}setStyle(J,Q="srgb"){function $(K){if(K===void 0)return;if(parseFloat(K)<1)w0("Color: Alpha component of "+J+" will be ignored.")}let Z;if(Z=/^(\w+)\(([^\)]*)\)/.exec(J)){let K,U=Z[1],W=Z[2];switch(U){case"rgb":case"rgba":if(K=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(W))return $(K[4]),this.setRGB(Math.min(255,parseInt(K[1],10))/255,Math.min(255,parseInt(K[2],10))/255,Math.min(255,parseInt(K[3],10))/255,Q);if(K=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(W))return $(K[4]),this.setRGB(Math.min(100,parseInt(K[1],10))/100,Math.min(100,parseInt(K[2],10))/100,Math.min(100,parseInt(K[3],10))/100,Q);break;case"hsl":case"hsla":if(K=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(W))return $(K[4]),this.setHSL(parseFloat(K[1])/360,parseFloat(K[2])/100,parseFloat(K[3])/100,Q);break;default:w0("Color: Unknown color model "+J)}}else if(Z=/^\#([A-Fa-f\d]+)$/.exec(J)){let K=Z[1],U=K.length;if(U===3)return this.setRGB(parseInt(K.charAt(0),16)/15,parseInt(K.charAt(1),16)/15,parseInt(K.charAt(2),16)/15,Q);else if(U===6)return this.setHex(parseInt(K,16),Q);else w0("Color: Invalid hex color "+J)}else if(J&&J.length>0)return this.setColorName(J,Q);return this}setColorName(J,Q="srgb"){let $=iZ[J.toLowerCase()];if($!==void 0)this.setHex($,Q);else w0("Color: Unknown color "+J);return this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(J){return this.r=J.r,this.g=J.g,this.b=J.b,this}copySRGBToLinear(J){return this.r=H9(J.r),this.g=H9(J.g),this.b=H9(J.b),this}copyLinearToSRGB(J){return this.r=W8(J.r),this.g=W8(J.g),this.b=W8(J.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(J="srgb"){return x0.workingToColorSpace(kJ.copy(this),J),Math.round(g0(kJ.r*255,0,255))*65536+Math.round(g0(kJ.g*255,0,255))*256+Math.round(g0(kJ.b*255,0,255))}getHexString(J="srgb"){return("000000"+this.getHex(J).toString(16)).slice(-6)}getHSL(J,Q=x0.workingColorSpace){x0.workingToColorSpace(kJ.copy(this),Q);let{r:$,g:Z,b:K}=kJ,U=Math.max($,Z,K),W=Math.min($,Z,K),H,G,Y=(W+U)/2;if(W===U)H=0,G=0;else{let E=U-W;switch(G=Y<=0.5?E/(U+W):E/(2-U-W),U){case $:H=(Z-K)/E+(Z<K?6:0);break;case Z:H=(K-$)/E+2;break;case K:H=($-Z)/E+4;break}H/=6}return J.h=H,J.s=G,J.l=Y,J}getRGB(J,Q=x0.workingColorSpace){return x0.workingToColorSpace(kJ.copy(this),Q),J.r=kJ.r,J.g=kJ.g,J.b=kJ.b,J}getStyle(J="srgb"){x0.workingToColorSpace(kJ.copy(this),J);let{r:Q,g:$,b:Z}=kJ;if(J!=="srgb")return`color(${J} ${Q.toFixed(3)} ${$.toFixed(3)} ${Z.toFixed(3)})`;return`rgb(${Math.round(Q*255)},${Math.round($*255)},${Math.round(Z*255)})`}offsetHSL(J,Q,$){return this.getHSL(F9),this.setHSL(F9.h+J,F9.s+Q,F9.l+$)}add(J){return this.r+=J.r,this.g+=J.g,this.b+=J.b,this}addColors(J,Q){return this.r=J.r+Q.r,this.g=J.g+Q.g,this.b=J.b+Q.b,this}addScalar(J){return this.r+=J,this.g+=J,this.b+=J,this}sub(J){return this.r=Math.max(0,this.r-J.r),this.g=Math.max(0,this.g-J.g),this.b=Math.max(0,this.b-J.b),this}multiply(J){return this.r*=J.r,this.g*=J.g,this.b*=J.b,this}multiplyScalar(J){return this.r*=J,this.g*=J,this.b*=J,this}lerp(J,Q){return this.r+=(J.r-this.r)*Q,this.g+=(J.g-this.g)*Q,this.b+=(J.b-this.b)*Q,this}lerpColors(J,Q,$){return this.r=J.r+(Q.r-J.r)*$,this.g=J.g+(Q.g-J.g)*$,this.b=J.b+(Q.b-J.b)*$,this}lerpHSL(J,Q){this.getHSL(F9),J.getHSL(t8);let $=Z6(F9.h,t8.h,Q),Z=Z6(F9.s,t8.s,Q),K=Z6(F9.l,t8.l,Q);return this.setHSL($,Z,K),this}setFromVector3(J){return this.r=J.x,this.g=J.y,this.b=J.z,this}applyMatrix3(J){let Q=this.r,$=this.g,Z=this.b,K=J.elements;return this.r=K[0]*Q+K[3]*$+K[6]*Z,this.g=K[1]*Q+K[4]*$+K[7]*Z,this.b=K[2]*Q+K[5]*$+K[8]*Z,this}equals(J){return J.r===this.r&&J.g===this.g&&J.b===this.b}fromArray(J,Q=0){return this.r=J[Q],this.g=J[Q+1],this.b=J[Q+2],this}toArray(J=[],Q=0){return J[Q]=this.r,J[Q+1]=this.g,J[Q+2]=this.b,J}fromBufferAttribute(J,Q){return this.r=J.getX(Q),this.g=J.getY(Q),this.b=J.getZ(Q),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}var kJ=new l0;l0.NAMES=iZ;class y7 extends IJ{constructor(){super();if(this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new iJ,this.environmentIntensity=1,this.environmentRotation=new iJ,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(J,Q){if(super.copy(J,Q),J.background!==null)this.background=J.background.clone();if(J.environment!==null)this.environment=J.environment.clone();if(J.fog!==null)this.fog=J.fog.clone();if(this.backgroundBlurriness=J.backgroundBlurriness,this.backgroundIntensity=J.backgroundIntensity,this.backgroundRotation.copy(J.backgroundRotation),this.environmentIntensity=J.environmentIntensity,this.environmentRotation.copy(J.environmentRotation),J.overrideMaterial!==null)this.overrideMaterial=J.overrideMaterial.clone();return this.matrixAutoUpdate=J.matrixAutoUpdate,this}toJSON(J){let Q=super.toJSON(J);if(this.fog!==null)Q.object.fog=this.fog.toJSON();if(this.backgroundBlurriness>0)Q.object.backgroundBlurriness=this.backgroundBlurriness;if(this.backgroundIntensity!==1)Q.object.backgroundIntensity=this.backgroundIntensity;if(Q.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1)Q.object.environmentIntensity=this.environmentIntensity;return Q.object.environmentRotation=this.environmentRotation.toArray(),Q}}var mJ=new x,$9=new x,X6=new x,Z9=new x,t9=new x,e9=new x,h$=new x,N6=new x,E6=new x,q6=new x,F6=new HJ,D6=new HJ,O6=new HJ;class fJ{constructor(J=new x,Q=new x,$=new x){this.a=J,this.b=Q,this.c=$}static getNormal(J,Q,$,Z){Z.subVectors($,Q),mJ.subVectors(J,Q),Z.cross(mJ);let K=Z.lengthSq();if(K>0)return Z.multiplyScalar(1/Math.sqrt(K));return Z.set(0,0,0)}static getBarycoord(J,Q,$,Z,K){mJ.subVectors(Z,Q),$9.subVectors($,Q),X6.subVectors(J,Q);let U=mJ.dot(mJ),W=mJ.dot($9),H=mJ.dot(X6),G=$9.dot($9),Y=$9.dot(X6),E=U*G-W*W;if(E===0)return K.set(0,0,0),null;let N=1/E,X=(G*H-W*Y)*N,R=(U*Y-W*H)*N;return K.set(1-X-R,R,X)}static containsPoint(J,Q,$,Z){if(this.getBarycoord(J,Q,$,Z,Z9)===null)return!1;return Z9.x>=0&&Z9.y>=0&&Z9.x+Z9.y<=1}static getInterpolation(J,Q,$,Z,K,U,W,H){if(this.getBarycoord(J,Q,$,Z,Z9)===null){if(H.x=0,H.y=0,"z"in H)H.z=0;if("w"in H)H.w=0;return null}return H.setScalar(0),H.addScaledVector(K,Z9.x),H.addScaledVector(U,Z9.y),H.addScaledVector(W,Z9.z),H}static getInterpolatedAttribute(J,Q,$,Z,K,U){return F6.setScalar(0),D6.setScalar(0),O6.setScalar(0),F6.fromBufferAttribute(J,Q),D6.fromBufferAttribute(J,$),O6.fromBufferAttribute(J,Z),U.setScalar(0),U.addScaledVector(F6,K.x),U.addScaledVector(D6,K.y),U.addScaledVector(O6,K.z),U}static isFrontFacing(J,Q,$,Z){return mJ.subVectors($,Q),$9.subVectors(J,Q),mJ.cross($9).dot(Z)<0?!0:!1}set(J,Q,$){return this.a.copy(J),this.b.copy(Q),this.c.copy($),this}setFromPointsAndIndices(J,Q,$,Z){return this.a.copy(J[Q]),this.b.copy(J[$]),this.c.copy(J[Z]),this}setFromAttributeAndIndices(J,Q,$,Z){return this.a.fromBufferAttribute(J,Q),this.b.fromBufferAttribute(J,$),this.c.fromBufferAttribute(J,Z),this}clone(){return new this.constructor().copy(this)}copy(J){return this.a.copy(J.a),this.b.copy(J.b),this.c.copy(J.c),this}getArea(){return mJ.subVectors(this.c,this.b),$9.subVectors(this.a,this.b),mJ.cross($9).length()*0.5}getMidpoint(J){return J.addVectors(this.a,this.b).add(this.c).multiplyScalar(0.3333333333333333)}getNormal(J){return fJ.getNormal(this.a,this.b,this.c,J)}getPlane(J){return J.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(J,Q){return fJ.getBarycoord(J,this.a,this.b,this.c,Q)}getInterpolation(J,Q,$,Z,K){return fJ.getInterpolation(J,this.a,this.b,this.c,Q,$,Z,K)}containsPoint(J){return fJ.containsPoint(J,this.a,this.b,this.c)}isFrontFacing(J){return fJ.isFrontFacing(this.a,this.b,this.c,J)}intersectsBox(J){return J.intersectsTriangle(this)}closestPointToPoint(J,Q){let $=this.a,Z=this.b,K=this.c,U,W;t9.subVectors(Z,$),e9.subVectors(K,$),N6.subVectors(J,$);let H=t9.dot(N6),G=e9.dot(N6);if(H<=0&&G<=0)return Q.copy($);E6.subVectors(J,Z);let Y=t9.dot(E6),E=e9.dot(E6);if(Y>=0&&E<=Y)return Q.copy(Z);let N=H*E-Y*G;if(N<=0&&H>=0&&Y<=0)return U=H/(H-Y),Q.copy($).addScaledVector(t9,U);q6.subVectors(J,K);let X=t9.dot(q6),R=e9.dot(q6);if(R>=0&&X<=R)return Q.copy(K);let D=X*G-H*R;if(D<=0&&G>=0&&R<=0)return W=G/(G-R),Q.copy($).addScaledVector(e9,W);let V=Y*R-X*E;if(V<=0&&E-Y>=0&&X-R>=0)return h$.subVectors(K,Z),W=(E-Y)/(E-Y+(X-R)),Q.copy(Z).addScaledVector(h$,W);let q=1/(V+D+N);return U=D*q,W=N*q,Q.copy($).addScaledVector(t9,U).addScaledVector(e9,W)}equals(J){return J.a.equals(this.a)&&J.b.equals(this.b)&&J.c.equals(this.c)}}class v9{constructor(J=new x(1/0,1/0,1/0),Q=new x(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=J,this.max=Q}set(J,Q){return this.min.copy(J),this.max.copy(Q),this}setFromArray(J){this.makeEmpty();for(let Q=0,$=J.length;Q<$;Q+=3)this.expandByPoint(dJ.fromArray(J,Q));return this}setFromBufferAttribute(J){this.makeEmpty();for(let Q=0,$=J.count;Q<$;Q++)this.expandByPoint(dJ.fromBufferAttribute(J,Q));return this}setFromPoints(J){this.makeEmpty();for(let Q=0,$=J.length;Q<$;Q++)this.expandByPoint(J[Q]);return this}setFromCenterAndSize(J,Q){let $=dJ.copy(Q).multiplyScalar(0.5);return this.min.copy(J).sub($),this.max.copy(J).add($),this}setFromObject(J,Q=!1){return this.makeEmpty(),this.expandByObject(J,Q)}clone(){return new this.constructor().copy(this)}copy(J){return this.min.copy(J.min),this.max.copy(J.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(J){return this.isEmpty()?J.set(0,0,0):J.addVectors(this.min,this.max).multiplyScalar(0.5)}getSize(J){return this.isEmpty()?J.set(0,0,0):J.subVectors(this.max,this.min)}expandByPoint(J){return this.min.min(J),this.max.max(J),this}expandByVector(J){return this.min.sub(J),this.max.add(J),this}expandByScalar(J){return this.min.addScalar(-J),this.max.addScalar(J),this}expandByObject(J,Q=!1){J.updateWorldMatrix(!1,!1);let $=J.geometry;if($!==void 0){let K=$.getAttribute("position");if(Q===!0&&K!==void 0&&J.isInstancedMesh!==!0)for(let U=0,W=K.count;U<W;U++){if(J.isMesh===!0)J.getVertexPosition(U,dJ);else dJ.fromBufferAttribute(K,U);dJ.applyMatrix4(J.matrixWorld),this.expandByPoint(dJ)}else{if(J.boundingBox!==void 0){if(J.boundingBox===null)J.computeBoundingBox();e8.copy(J.boundingBox)}else{if($.boundingBox===null)$.computeBoundingBox();e8.copy($.boundingBox)}e8.applyMatrix4(J.matrixWorld),this.union(e8)}}let Z=J.children;for(let K=0,U=Z.length;K<U;K++)this.expandByObject(Z[K],Q);return this}containsPoint(J){return J.x>=this.min.x&&J.x<=this.max.x&&J.y>=this.min.y&&J.y<=this.max.y&&J.z>=this.min.z&&J.z<=this.max.z}containsBox(J){return this.min.x<=J.min.x&&J.max.x<=this.max.x&&this.min.y<=J.min.y&&J.max.y<=this.max.y&&this.min.z<=J.min.z&&J.max.z<=this.max.z}getParameter(J,Q){return Q.set((J.x-this.min.x)/(this.max.x-this.min.x),(J.y-this.min.y)/(this.max.y-this.min.y),(J.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(J){return J.max.x>=this.min.x&&J.min.x<=this.max.x&&J.max.y>=this.min.y&&J.min.y<=this.max.y&&J.max.z>=this.min.z&&J.min.z<=this.max.z}intersectsSphere(J){return this.clampPoint(J.center,dJ),dJ.distanceToSquared(J.center)<=J.radius*J.radius}intersectsPlane(J){let Q,$;if(J.normal.x>0)Q=J.normal.x*this.min.x,$=J.normal.x*this.max.x;else Q=J.normal.x*this.max.x,$=J.normal.x*this.min.x;if(J.normal.y>0)Q+=J.normal.y*this.min.y,$+=J.normal.y*this.max.y;else Q+=J.normal.y*this.max.y,$+=J.normal.y*this.min.y;if(J.normal.z>0)Q+=J.normal.z*this.min.z,$+=J.normal.z*this.max.z;else Q+=J.normal.z*this.max.z,$+=J.normal.z*this.min.z;return Q<=-J.constant&&$>=-J.constant}intersectsTriangle(J){if(this.isEmpty())return!1;this.getCenter(I8),J7.subVectors(this.max,I8),J8.subVectors(J.a,I8),Q8.subVectors(J.b,I8),$8.subVectors(J.c,I8),D9.subVectors(Q8,J8),O9.subVectors($8,Q8),A9.subVectors(J8,$8);let Q=[0,-D9.z,D9.y,0,-O9.z,O9.y,0,-A9.z,A9.y,D9.z,0,-D9.x,O9.z,0,-O9.x,A9.z,0,-A9.x,-D9.y,D9.x,0,-O9.y,O9.x,0,-A9.y,A9.x,0];if(!R6(Q,J8,Q8,$8,J7))return!1;if(Q=[1,0,0,0,1,0,0,0,1],!R6(Q,J8,Q8,$8,J7))return!1;return Q7.crossVectors(D9,O9),Q=[Q7.x,Q7.y,Q7.z],R6(Q,J8,Q8,$8,J7)}clampPoint(J,Q){return Q.copy(J).clamp(this.min,this.max)}distanceToPoint(J){return this.clampPoint(J,dJ).distanceTo(J)}getBoundingSphere(J){if(this.isEmpty())J.makeEmpty();else this.getCenter(J.center),J.radius=this.getSize(dJ).length()*0.5;return J}intersect(J){if(this.min.max(J.min),this.max.min(J.max),this.isEmpty())this.makeEmpty();return this}union(J){return this.min.min(J.min),this.max.max(J.max),this}applyMatrix4(J){if(this.isEmpty())return this;return K9[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(J),K9[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(J),K9[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(J),K9[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(J),K9[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(J),K9[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(J),K9[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(J),K9[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(J),this.setFromPoints(K9),this}translate(J){return this.min.add(J),this.max.add(J),this}equals(J){return J.min.equals(this.min)&&J.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(J){return this.min.fromArray(J.min),this.max.fromArray(J.max),this}}var K9=[new x,new x,new x,new x,new x,new x,new x,new x],dJ=new x,e8=new v9,J8=new x,Q8=new x,$8=new x,D9=new x,O9=new x,A9=new x,I8=new x,J7=new x,Q7=new x,C9=new x;function R6(J,Q,$,Z,K){for(let U=0,W=J.length-3;U<=W;U+=3){C9.fromArray(J,U);let H=K.x*Math.abs(C9.x)+K.y*Math.abs(C9.y)+K.z*Math.abs(C9.z),G=Q.dot(C9),Y=$.dot(C9),E=Z.dot(C9);if(Math.max(-Math.max(G,Y,E),Math.min(G,Y,E))>H)return!1}return!0}var XJ=new x,$7=new i0,FU=0;class vJ{constructor(J,Q,$=!1){if(Array.isArray(J))throw TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:FU++}),this.name="",this.array=J,this.itemSize=Q,this.count=J!==void 0?J.length/Q:0,this.normalized=$,this.usage=35044,this.updateRanges=[],this.gpuType=1015,this.version=0}onUploadCallback(){}set needsUpdate(J){if(J===!0)this.version++}setUsage(J){return this.usage=J,this}addUpdateRange(J,Q){this.updateRanges.push({start:J,count:Q})}clearUpdateRanges(){this.updateRanges.length=0}copy(J){return this.name=J.name,this.array=new J.array.constructor(J.array),this.itemSize=J.itemSize,this.count=J.count,this.normalized=J.normalized,this.usage=J.usage,this.gpuType=J.gpuType,this}copyAt(J,Q,$){J*=this.itemSize,$*=Q.itemSize;for(let Z=0,K=this.itemSize;Z<K;Z++)this.array[J+Z]=Q.array[$+Z];return this}copyArray(J){return this.array.set(J),this}applyMatrix3(J){if(this.itemSize===2)for(let Q=0,$=this.count;Q<$;Q++)$7.fromBufferAttribute(this,Q),$7.applyMatrix3(J),this.setXY(Q,$7.x,$7.y);else if(this.itemSize===3)for(let Q=0,$=this.count;Q<$;Q++)XJ.fromBufferAttribute(this,Q),XJ.applyMatrix3(J),this.setXYZ(Q,XJ.x,XJ.y,XJ.z);return this}applyMatrix4(J){for(let Q=0,$=this.count;Q<$;Q++)XJ.fromBufferAttribute(this,Q),XJ.applyMatrix4(J),this.setXYZ(Q,XJ.x,XJ.y,XJ.z);return this}applyNormalMatrix(J){for(let Q=0,$=this.count;Q<$;Q++)XJ.fromBufferAttribute(this,Q),XJ.applyNormalMatrix(J),this.setXYZ(Q,XJ.x,XJ.y,XJ.z);return this}transformDirection(J){for(let Q=0,$=this.count;Q<$;Q++)XJ.fromBufferAttribute(this,Q),XJ.transformDirection(J),this.setXYZ(Q,XJ.x,XJ.y,XJ.z);return this}set(J,Q=0){return this.array.set(J,Q),this}getComponent(J,Q){let $=this.array[J*this.itemSize+Q];if(this.normalized)$=B8($,this.array);return $}setComponent(J,Q,$){if(this.normalized)$=AJ($,this.array);return this.array[J*this.itemSize+Q]=$,this}getX(J){let Q=this.array[J*this.itemSize];if(this.normalized)Q=B8(Q,this.array);return Q}setX(J,Q){if(this.normalized)Q=AJ(Q,this.array);return this.array[J*this.itemSize]=Q,this}getY(J){let Q=this.array[J*this.itemSize+1];if(this.normalized)Q=B8(Q,this.array);return Q}setY(J,Q){if(this.normalized)Q=AJ(Q,this.array);return this.array[J*this.itemSize+1]=Q,this}getZ(J){let Q=this.array[J*this.itemSize+2];if(this.normalized)Q=B8(Q,this.array);return Q}setZ(J,Q){if(this.normalized)Q=AJ(Q,this.array);return this.array[J*this.itemSize+2]=Q,this}getW(J){let Q=this.array[J*this.itemSize+3];if(this.normalized)Q=B8(Q,this.array);return Q}setW(J,Q){if(this.normalized)Q=AJ(Q,this.array);return this.array[J*this.itemSize+3]=Q,this}setXY(J,Q,$){if(J*=this.itemSize,this.normalized)Q=AJ(Q,this.array),$=AJ($,this.array);return this.array[J+0]=Q,this.array[J+1]=$,this}setXYZ(J,Q,$,Z){if(J*=this.itemSize,this.normalized)Q=AJ(Q,this.array),$=AJ($,this.array),Z=AJ(Z,this.array);return this.array[J+0]=Q,this.array[J+1]=$,this.array[J+2]=Z,this}setXYZW(J,Q,$,Z,K){if(J*=this.itemSize,this.normalized)Q=AJ(Q,this.array),$=AJ($,this.array),Z=AJ(Z,this.array),K=AJ(K,this.array);return this.array[J+0]=Q,this.array[J+1]=$,this.array[J+2]=Z,this.array[J+3]=K,this}onUpload(J){return this.onUploadCallback=J,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let J={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};if(this.name!=="")J.name=this.name;if(this.usage!==35044)J.usage=this.usage;return J}}class f7 extends vJ{constructor(J,Q,$){super(new Uint16Array(J),Q,$)}}class v7 extends vJ{constructor(J,Q,$){super(new Uint32Array(J),Q,$)}}class _J extends vJ{constructor(J,Q,$){super(new Float32Array(J),Q,$)}}var DU=new v9,_8=new x,M6=new x;class F8{constructor(J=new x,Q=-1){this.isSphere=!0,this.center=J,this.radius=Q}set(J,Q){return this.center.copy(J),this.radius=Q,this}setFromPoints(J,Q){let $=this.center;if(Q!==void 0)$.copy(Q);else DU.setFromPoints(J).getCenter($);let Z=0;for(let K=0,U=J.length;K<U;K++)Z=Math.max(Z,$.distanceToSquared(J[K]));return this.radius=Math.sqrt(Z),this}copy(J){return this.center.copy(J.center),this.radius=J.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(J){return J.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(J){return J.distanceTo(this.center)-this.radius}intersectsSphere(J){let Q=this.radius+J.radius;return J.center.distanceToSquared(this.center)<=Q*Q}intersectsBox(J){return J.intersectsSphere(this)}intersectsPlane(J){return Math.abs(J.distanceToPoint(this.center))<=this.radius}clampPoint(J,Q){let $=this.center.distanceToSquared(J);if(Q.copy(J),$>this.radius*this.radius)Q.sub(this.center).normalize(),Q.multiplyScalar(this.radius).add(this.center);return Q}getBoundingBox(J){if(this.isEmpty())return J.makeEmpty(),J;return J.set(this.center,this.center),J.expandByScalar(this.radius),J}applyMatrix4(J){return this.center.applyMatrix4(J),this.radius=this.radius*J.getMaxScaleOnAxis(),this}translate(J){return this.center.add(J),this}expandByPoint(J){if(this.isEmpty())return this.center.copy(J),this.radius=0,this;_8.subVectors(J,this.center);let Q=_8.lengthSq();if(Q>this.radius*this.radius){let $=Math.sqrt(Q),Z=($-this.radius)*0.5;this.center.addScaledVector(_8,Z/$),this.radius+=Z}return this}union(J){if(J.isEmpty())return this;if(this.isEmpty())return this.copy(J),this;if(this.center.equals(J.center)===!0)this.radius=Math.max(this.radius,J.radius);else M6.subVectors(J.center,this.center).setLength(J.radius),this.expandByPoint(_8.copy(J.center).add(M6)),this.expandByPoint(_8.copy(J.center).sub(M6));return this}equals(J){return J.center.equals(this.center)&&J.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(J){return this.radius=J.radius,this.center.fromArray(J.center),this}}var OU=0,yJ=new WJ,k6=new IJ,Z8=new x,jJ=new v9,A8=new v9,FJ=new x;class LJ extends B9{constructor(){super();this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:OU++}),this.uuid=b8(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(J){if(Array.isArray(J))this.index=new((QU(J))?v7:f7)(J,1);else this.index=J;return this}setIndirect(J,Q=0){return this.indirect=J,this.indirectOffset=Q,this}getIndirect(){return this.indirect}getAttribute(J){return this.attributes[J]}setAttribute(J,Q){return this.attributes[J]=Q,this}deleteAttribute(J){return delete this.attributes[J],this}hasAttribute(J){return this.attributes[J]!==void 0}addGroup(J,Q,$=0){this.groups.push({start:J,count:Q,materialIndex:$})}clearGroups(){this.groups=[]}setDrawRange(J,Q){this.drawRange.start=J,this.drawRange.count=Q}applyMatrix4(J){let Q=this.attributes.position;if(Q!==void 0)Q.applyMatrix4(J),Q.needsUpdate=!0;let $=this.attributes.normal;if($!==void 0){let K=new j0().getNormalMatrix(J);$.applyNormalMatrix(K),$.needsUpdate=!0}let Z=this.attributes.tangent;if(Z!==void 0)Z.transformDirection(J),Z.needsUpdate=!0;if(this.boundingBox!==null)this.computeBoundingBox();if(this.boundingSphere!==null)this.computeBoundingSphere();return this}applyQuaternion(J){return yJ.makeRotationFromQuaternion(J),this.applyMatrix4(yJ),this}rotateX(J){return yJ.makeRotationX(J),this.applyMatrix4(yJ),this}rotateY(J){return yJ.makeRotationY(J),this.applyMatrix4(yJ),this}rotateZ(J){return yJ.makeRotationZ(J),this.applyMatrix4(yJ),this}translate(J,Q,$){return yJ.makeTranslation(J,Q,$),this.applyMatrix4(yJ),this}scale(J,Q,$){return yJ.makeScale(J,Q,$),this.applyMatrix4(yJ),this}lookAt(J){return k6.lookAt(J),k6.updateMatrix(),this.applyMatrix4(k6.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Z8).negate(),this.translate(Z8.x,Z8.y,Z8.z),this}setFromPoints(J){let Q=this.getAttribute("position");if(Q===void 0){let $=[];for(let Z=0,K=J.length;Z<K;Z++){let U=J[Z];$.push(U.x,U.y,U.z||0)}this.setAttribute("position",new _J($,3))}else{let $=Math.min(J.length,Q.count);for(let Z=0;Z<$;Z++){let K=J[Z];Q.setXYZ(Z,K.x,K.y,K.z||0)}if(J.length>Q.count)w0("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.");Q.needsUpdate=!0}return this}computeBoundingBox(){if(this.boundingBox===null)this.boundingBox=new v9;let J=this.attributes.position,Q=this.morphAttributes.position;if(J&&J.isGLBufferAttribute){P0("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new x(-1/0,-1/0,-1/0),new x(1/0,1/0,1/0));return}if(J!==void 0){if(this.boundingBox.setFromBufferAttribute(J),Q)for(let $=0,Z=Q.length;$<Z;$++){let K=Q[$];if(jJ.setFromBufferAttribute(K),this.morphTargetsRelative)FJ.addVectors(this.boundingBox.min,jJ.min),this.boundingBox.expandByPoint(FJ),FJ.addVectors(this.boundingBox.max,jJ.max),this.boundingBox.expandByPoint(FJ);else this.boundingBox.expandByPoint(jJ.min),this.boundingBox.expandByPoint(jJ.max)}}else this.boundingBox.makeEmpty();if(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))P0('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){if(this.boundingSphere===null)this.boundingSphere=new F8;let J=this.attributes.position,Q=this.morphAttributes.position;if(J&&J.isGLBufferAttribute){P0("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new x,1/0);return}if(J){let $=this.boundingSphere.center;if(jJ.setFromBufferAttribute(J),Q)for(let K=0,U=Q.length;K<U;K++){let W=Q[K];if(A8.setFromBufferAttribute(W),this.morphTargetsRelative)FJ.addVectors(jJ.min,A8.min),jJ.expandByPoint(FJ),FJ.addVectors(jJ.max,A8.max),jJ.expandByPoint(FJ);else jJ.expandByPoint(A8.min),jJ.expandByPoint(A8.max)}jJ.getCenter($);let Z=0;for(let K=0,U=J.count;K<U;K++)FJ.fromBufferAttribute(J,K),Z=Math.max(Z,$.distanceToSquared(FJ));if(Q)for(let K=0,U=Q.length;K<U;K++){let W=Q[K],H=this.morphTargetsRelative;for(let G=0,Y=W.count;G<Y;G++){if(FJ.fromBufferAttribute(W,G),H)Z8.fromBufferAttribute(J,G),FJ.add(Z8);Z=Math.max(Z,$.distanceToSquared(FJ))}}if(this.boundingSphere.radius=Math.sqrt(Z),isNaN(this.boundingSphere.radius))P0('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let J=this.index,Q=this.attributes;if(J===null||Q.position===void 0||Q.normal===void 0||Q.uv===void 0){P0("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let{position:$,normal:Z,uv:K}=Q;if(this.hasAttribute("tangent")===!1)this.setAttribute("tangent",new vJ(new Float32Array(4*$.count),4));let U=this.getAttribute("tangent"),W=[],H=[];for(let C=0;C<$.count;C++)W[C]=new x,H[C]=new x;let G=new x,Y=new x,E=new x,N=new i0,X=new i0,R=new i0,D=new x,V=new x;function q(C,O,P){G.fromBufferAttribute($,C),Y.fromBufferAttribute($,O),E.fromBufferAttribute($,P),N.fromBufferAttribute(K,C),X.fromBufferAttribute(K,O),R.fromBufferAttribute(K,P),Y.sub(G),E.sub(G),X.sub(N),R.sub(N);let y=1/(X.x*R.y-R.x*X.y);if(!isFinite(y))return;D.copy(Y).multiplyScalar(R.y).addScaledVector(E,-X.y).multiplyScalar(y),V.copy(E).multiplyScalar(X.x).addScaledVector(Y,-R.x).multiplyScalar(y),W[C].add(D),W[O].add(D),W[P].add(D),H[C].add(V),H[O].add(V),H[P].add(V)}let F=this.groups;if(F.length===0)F=[{start:0,count:J.count}];for(let C=0,O=F.length;C<O;++C){let P=F[C],y=P.start,A=P.count;for(let b=y,u=y+A;b<u;b+=3)q(J.getX(b+0),J.getX(b+1),J.getX(b+2))}let z=new x,B=new x,L=new x,w=new x;function _(C){L.fromBufferAttribute(Z,C),w.copy(L);let O=W[C];z.copy(O),z.sub(L.multiplyScalar(L.dot(O))).normalize(),B.crossVectors(w,O);let y=B.dot(H[C])<0?-1:1;U.setXYZW(C,z.x,z.y,z.z,y)}for(let C=0,O=F.length;C<O;++C){let P=F[C],y=P.start,A=P.count;for(let b=y,u=y+A;b<u;b+=3)_(J.getX(b+0)),_(J.getX(b+1)),_(J.getX(b+2))}}computeVertexNormals(){let J=this.index,Q=this.getAttribute("position");if(Q!==void 0){let $=this.getAttribute("normal");if($===void 0)$=new vJ(new Float32Array(Q.count*3),3),this.setAttribute("normal",$);else for(let N=0,X=$.count;N<X;N++)$.setXYZ(N,0,0,0);let Z=new x,K=new x,U=new x,W=new x,H=new x,G=new x,Y=new x,E=new x;if(J)for(let N=0,X=J.count;N<X;N+=3){let R=J.getX(N+0),D=J.getX(N+1),V=J.getX(N+2);Z.fromBufferAttribute(Q,R),K.fromBufferAttribute(Q,D),U.fromBufferAttribute(Q,V),Y.subVectors(U,K),E.subVectors(Z,K),Y.cross(E),W.fromBufferAttribute($,R),H.fromBufferAttribute($,D),G.fromBufferAttribute($,V),W.add(Y),H.add(Y),G.add(Y),$.setXYZ(R,W.x,W.y,W.z),$.setXYZ(D,H.x,H.y,H.z),$.setXYZ(V,G.x,G.y,G.z)}else for(let N=0,X=Q.count;N<X;N+=3)Z.fromBufferAttribute(Q,N+0),K.fromBufferAttribute(Q,N+1),U.fromBufferAttribute(Q,N+2),Y.subVectors(U,K),E.subVectors(Z,K),Y.cross(E),$.setXYZ(N+0,Y.x,Y.y,Y.z),$.setXYZ(N+1,Y.x,Y.y,Y.z),$.setXYZ(N+2,Y.x,Y.y,Y.z);this.normalizeNormals(),$.needsUpdate=!0}}normalizeNormals(){let J=this.attributes.normal;for(let Q=0,$=J.count;Q<$;Q++)FJ.fromBufferAttribute(J,Q),FJ.normalize(),J.setXYZ(Q,FJ.x,FJ.y,FJ.z)}toNonIndexed(){function J(W,H){let{array:G,itemSize:Y,normalized:E}=W,N=new G.constructor(H.length*Y),X=0,R=0;for(let D=0,V=H.length;D<V;D++){if(W.isInterleavedBufferAttribute)X=H[D]*W.data.stride+W.offset;else X=H[D]*Y;for(let q=0;q<Y;q++)N[R++]=G[X++]}return new vJ(N,Y,E)}if(this.index===null)return w0("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let Q=new LJ,$=this.index.array,Z=this.attributes;for(let W in Z){let H=Z[W],G=J(H,$);Q.setAttribute(W,G)}let K=this.morphAttributes;for(let W in K){let H=[],G=K[W];for(let Y=0,E=G.length;Y<E;Y++){let N=G[Y],X=J(N,$);H.push(X)}Q.morphAttributes[W]=H}Q.morphTargetsRelative=this.morphTargetsRelative;let U=this.groups;for(let W=0,H=U.length;W<H;W++){let G=U[W];Q.addGroup(G.start,G.count,G.materialIndex)}return Q}toJSON(){let J={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(J.uuid=this.uuid,J.type=this.type,this.name!=="")J.name=this.name;if(Object.keys(this.userData).length>0)J.userData=this.userData;if(this.parameters!==void 0){let H=this.parameters;for(let G in H)if(H[G]!==void 0)J[G]=H[G];return J}J.data={attributes:{}};let Q=this.index;if(Q!==null)J.data.index={type:Q.array.constructor.name,array:Array.prototype.slice.call(Q.array)};let $=this.attributes;for(let H in $){let G=$[H];J.data.attributes[H]=G.toJSON(J.data)}let Z={},K=!1;for(let H in this.morphAttributes){let G=this.morphAttributes[H],Y=[];for(let E=0,N=G.length;E<N;E++){let X=G[E];Y.push(X.toJSON(J.data))}if(Y.length>0)Z[H]=Y,K=!0}if(K)J.data.morphAttributes=Z,J.data.morphTargetsRelative=this.morphTargetsRelative;let U=this.groups;if(U.length>0)J.data.groups=JSON.parse(JSON.stringify(U));let W=this.boundingSphere;if(W!==null)J.data.boundingSphere=W.toJSON();return J}clone(){return new this.constructor().copy(this)}copy(J){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let Q={};this.name=J.name;let $=J.index;if($!==null)this.setIndex($.clone());let Z=J.attributes;for(let G in Z){let Y=Z[G];this.setAttribute(G,Y.clone(Q))}let K=J.morphAttributes;for(let G in K){let Y=[],E=K[G];for(let N=0,X=E.length;N<X;N++)Y.push(E[N].clone(Q));this.morphAttributes[G]=Y}this.morphTargetsRelative=J.morphTargetsRelative;let U=J.groups;for(let G=0,Y=U.length;G<Y;G++){let E=U[G];this.addGroup(E.start,E.count,E.materialIndex)}let W=J.boundingBox;if(W!==null)this.boundingBox=W.clone();let H=J.boundingSphere;if(H!==null)this.boundingSphere=H.clone();return this.drawRange.start=J.drawRange.start,this.drawRange.count=J.drawRange.count,this.userData=J.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}var RU=0;class b9 extends B9{constructor(){super();this.isMaterial=!0,Object.defineProperty(this,"id",{value:RU++}),this.uuid=b8(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new l0(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=7680,this.stencilZFail=7680,this.stencilZPass=7680,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(J){if(this._alphaTest>0!==J>0)this.version++;this._alphaTest=J}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(J){if(J===void 0)return;for(let Q in J){let $=J[Q];if($===void 0){w0(`Material: parameter '${Q}' has value of undefined.`);continue}let Z=this[Q];if(Z===void 0){w0(`Material: '${Q}' is not a property of THREE.${this.type}.`);continue}if(Z&&Z.isColor)Z.set($);else if(Z&&Z.isVector3&&($&&$.isVector3))Z.copy($);else this[Q]=$}}toJSON(J){let Q=J===void 0||typeof J==="string";if(Q)J={textures:{},images:{}};let $={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};if($.uuid=this.uuid,$.type=this.type,this.name!=="")$.name=this.name;if(this.color&&this.color.isColor)$.color=this.color.getHex();if(this.roughness!==void 0)$.roughness=this.roughness;if(this.metalness!==void 0)$.metalness=this.metalness;if(this.sheen!==void 0)$.sheen=this.sheen;if(this.sheenColor&&this.sheenColor.isColor)$.sheenColor=this.sheenColor.getHex();if(this.sheenRoughness!==void 0)$.sheenRoughness=this.sheenRoughness;if(this.emissive&&this.emissive.isColor)$.emissive=this.emissive.getHex();if(this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1)$.emissiveIntensity=this.emissiveIntensity;if(this.specular&&this.specular.isColor)$.specular=this.specular.getHex();if(this.specularIntensity!==void 0)$.specularIntensity=this.specularIntensity;if(this.specularColor&&this.specularColor.isColor)$.specularColor=this.specularColor.getHex();if(this.shininess!==void 0)$.shininess=this.shininess;if(this.clearcoat!==void 0)$.clearcoat=this.clearcoat;if(this.clearcoatRoughness!==void 0)$.clearcoatRoughness=this.clearcoatRoughness;if(this.clearcoatMap&&this.clearcoatMap.isTexture)$.clearcoatMap=this.clearcoatMap.toJSON(J).uuid;if(this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture)$.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(J).uuid;if(this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture)$.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(J).uuid,$.clearcoatNormalScale=this.clearcoatNormalScale.toArray();if(this.sheenColorMap&&this.sheenColorMap.isTexture)$.sheenColorMap=this.sheenColorMap.toJSON(J).uuid;if(this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture)$.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(J).uuid;if(this.dispersion!==void 0)$.dispersion=this.dispersion;if(this.iridescence!==void 0)$.iridescence=this.iridescence;if(this.iridescenceIOR!==void 0)$.iridescenceIOR=this.iridescenceIOR;if(this.iridescenceThicknessRange!==void 0)$.iridescenceThicknessRange=this.iridescenceThicknessRange;if(this.iridescenceMap&&this.iridescenceMap.isTexture)$.iridescenceMap=this.iridescenceMap.toJSON(J).uuid;if(this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture)$.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(J).uuid;if(this.anisotropy!==void 0)$.anisotropy=this.anisotropy;if(this.anisotropyRotation!==void 0)$.anisotropyRotation=this.anisotropyRotation;if(this.anisotropyMap&&this.anisotropyMap.isTexture)$.anisotropyMap=this.anisotropyMap.toJSON(J).uuid;if(this.map&&this.map.isTexture)$.map=this.map.toJSON(J).uuid;if(this.matcap&&this.matcap.isTexture)$.matcap=this.matcap.toJSON(J).uuid;if(this.alphaMap&&this.alphaMap.isTexture)$.alphaMap=this.alphaMap.toJSON(J).uuid;if(this.lightMap&&this.lightMap.isTexture)$.lightMap=this.lightMap.toJSON(J).uuid,$.lightMapIntensity=this.lightMapIntensity;if(this.aoMap&&this.aoMap.isTexture)$.aoMap=this.aoMap.toJSON(J).uuid,$.aoMapIntensity=this.aoMapIntensity;if(this.bumpMap&&this.bumpMap.isTexture)$.bumpMap=this.bumpMap.toJSON(J).uuid,$.bumpScale=this.bumpScale;if(this.normalMap&&this.normalMap.isTexture)$.normalMap=this.normalMap.toJSON(J).uuid,$.normalMapType=this.normalMapType,$.normalScale=this.normalScale.toArray();if(this.displacementMap&&this.displacementMap.isTexture)$.displacementMap=this.displacementMap.toJSON(J).uuid,$.displacementScale=this.displacementScale,$.displacementBias=this.displacementBias;if(this.roughnessMap&&this.roughnessMap.isTexture)$.roughnessMap=this.roughnessMap.toJSON(J).uuid;if(this.metalnessMap&&this.metalnessMap.isTexture)$.metalnessMap=this.metalnessMap.toJSON(J).uuid;if(this.emissiveMap&&this.emissiveMap.isTexture)$.emissiveMap=this.emissiveMap.toJSON(J).uuid;if(this.specularMap&&this.specularMap.isTexture)$.specularMap=this.specularMap.toJSON(J).uuid;if(this.specularIntensityMap&&this.specularIntensityMap.isTexture)$.specularIntensityMap=this.specularIntensityMap.toJSON(J).uuid;if(this.specularColorMap&&this.specularColorMap.isTexture)$.specularColorMap=this.specularColorMap.toJSON(J).uuid;if(this.envMap&&this.envMap.isTexture){if($.envMap=this.envMap.toJSON(J).uuid,this.combine!==void 0)$.combine=this.combine}if(this.envMapRotation!==void 0)$.envMapRotation=this.envMapRotation.toArray();if(this.envMapIntensity!==void 0)$.envMapIntensity=this.envMapIntensity;if(this.reflectivity!==void 0)$.reflectivity=this.reflectivity;if(this.refractionRatio!==void 0)$.refractionRatio=this.refractionRatio;if(this.gradientMap&&this.gradientMap.isTexture)$.gradientMap=this.gradientMap.toJSON(J).uuid;if(this.transmission!==void 0)$.transmission=this.transmission;if(this.transmissionMap&&this.transmissionMap.isTexture)$.transmissionMap=this.transmissionMap.toJSON(J).uuid;if(this.thickness!==void 0)$.thickness=this.thickness;if(this.thicknessMap&&this.thicknessMap.isTexture)$.thicknessMap=this.thicknessMap.toJSON(J).uuid;if(this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0)$.attenuationDistance=this.attenuationDistance;if(this.attenuationColor!==void 0)$.attenuationColor=this.attenuationColor.getHex();if(this.size!==void 0)$.size=this.size;if(this.shadowSide!==null)$.shadowSide=this.shadowSide;if(this.sizeAttenuation!==void 0)$.sizeAttenuation=this.sizeAttenuation;if(this.blending!==1)$.blending=this.blending;if(this.side!==0)$.side=this.side;if(this.vertexColors===!0)$.vertexColors=!0;if(this.opacity<1)$.opacity=this.opacity;if(this.transparent===!0)$.transparent=!0;if(this.blendSrc!==204)$.blendSrc=this.blendSrc;if(this.blendDst!==205)$.blendDst=this.blendDst;if(this.blendEquation!==100)$.blendEquation=this.blendEquation;if(this.blendSrcAlpha!==null)$.blendSrcAlpha=this.blendSrcAlpha;if(this.blendDstAlpha!==null)$.blendDstAlpha=this.blendDstAlpha;if(this.blendEquationAlpha!==null)$.blendEquationAlpha=this.blendEquationAlpha;if(this.blendColor&&this.blendColor.isColor)$.blendColor=this.blendColor.getHex();if(this.blendAlpha!==0)$.blendAlpha=this.blendAlpha;if(this.depthFunc!==3)$.depthFunc=this.depthFunc;if(this.depthTest===!1)$.depthTest=this.depthTest;if(this.depthWrite===!1)$.depthWrite=this.depthWrite;if(this.colorWrite===!1)$.colorWrite=this.colorWrite;if(this.stencilWriteMask!==255)$.stencilWriteMask=this.stencilWriteMask;if(this.stencilFunc!==519)$.stencilFunc=this.stencilFunc;if(this.stencilRef!==0)$.stencilRef=this.stencilRef;if(this.stencilFuncMask!==255)$.stencilFuncMask=this.stencilFuncMask;if(this.stencilFail!==7680)$.stencilFail=this.stencilFail;if(this.stencilZFail!==7680)$.stencilZFail=this.stencilZFail;if(this.stencilZPass!==7680)$.stencilZPass=this.stencilZPass;if(this.stencilWrite===!0)$.stencilWrite=this.stencilWrite;if(this.rotation!==void 0&&this.rotation!==0)$.rotation=this.rotation;if(this.polygonOffset===!0)$.polygonOffset=!0;if(this.polygonOffsetFactor!==0)$.polygonOffsetFactor=this.polygonOffsetFactor;if(this.polygonOffsetUnits!==0)$.polygonOffsetUnits=this.polygonOffsetUnits;if(this.linewidth!==void 0&&this.linewidth!==1)$.linewidth=this.linewidth;if(this.dashSize!==void 0)$.dashSize=this.dashSize;if(this.gapSize!==void 0)$.gapSize=this.gapSize;if(this.scale!==void 0)$.scale=this.scale;if(this.dithering===!0)$.dithering=!0;if(this.alphaTest>0)$.alphaTest=this.alphaTest;if(this.alphaHash===!0)$.alphaHash=!0;if(this.alphaToCoverage===!0)$.alphaToCoverage=!0;if(this.premultipliedAlpha===!0)$.premultipliedAlpha=!0;if(this.forceSinglePass===!0)$.forceSinglePass=!0;if(this.allowOverride===!1)$.allowOverride=!1;if(this.wireframe===!0)$.wireframe=!0;if(this.wireframeLinewidth>1)$.wireframeLinewidth=this.wireframeLinewidth;if(this.wireframeLinecap!=="round")$.wireframeLinecap=this.wireframeLinecap;if(this.wireframeLinejoin!=="round")$.wireframeLinejoin=this.wireframeLinejoin;if(this.flatShading===!0)$.flatShading=!0;if(this.visible===!1)$.visible=!1;if(this.toneMapped===!1)$.toneMapped=!1;if(this.fog===!1)$.fog=!1;if(Object.keys(this.userData).length>0)$.userData=this.userData;function Z(K){let U=[];for(let W in K){let H=K[W];delete H.metadata,U.push(H)}return U}if(Q){let K=Z(J.textures),U=Z(J.images);if(K.length>0)$.textures=K;if(U.length>0)$.images=U}return $}clone(){return new this.constructor().copy(this)}copy(J){this.name=J.name,this.blending=J.blending,this.side=J.side,this.vertexColors=J.vertexColors,this.opacity=J.opacity,this.transparent=J.transparent,this.blendSrc=J.blendSrc,this.blendDst=J.blendDst,this.blendEquation=J.blendEquation,this.blendSrcAlpha=J.blendSrcAlpha,this.blendDstAlpha=J.blendDstAlpha,this.blendEquationAlpha=J.blendEquationAlpha,this.blendColor.copy(J.blendColor),this.blendAlpha=J.blendAlpha,this.depthFunc=J.depthFunc,this.depthTest=J.depthTest,this.depthWrite=J.depthWrite,this.stencilWriteMask=J.stencilWriteMask,this.stencilFunc=J.stencilFunc,this.stencilRef=J.stencilRef,this.stencilFuncMask=J.stencilFuncMask,this.stencilFail=J.stencilFail,this.stencilZFail=J.stencilZFail,this.stencilZPass=J.stencilZPass,this.stencilWrite=J.stencilWrite;let Q=J.clippingPlanes,$=null;if(Q!==null){let Z=Q.length;$=Array(Z);for(let K=0;K!==Z;++K)$[K]=Q[K].clone()}return this.clippingPlanes=$,this.clipIntersection=J.clipIntersection,this.clipShadows=J.clipShadows,this.shadowSide=J.shadowSide,this.colorWrite=J.colorWrite,this.precision=J.precision,this.polygonOffset=J.polygonOffset,this.polygonOffsetFactor=J.polygonOffsetFactor,this.polygonOffsetUnits=J.polygonOffsetUnits,this.dithering=J.dithering,this.alphaTest=J.alphaTest,this.alphaHash=J.alphaHash,this.alphaToCoverage=J.alphaToCoverage,this.premultipliedAlpha=J.premultipliedAlpha,this.forceSinglePass=J.forceSinglePass,this.allowOverride=J.allowOverride,this.visible=J.visible,this.toneMapped=J.toneMapped,this.userData=JSON.parse(JSON.stringify(J.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(J){if(J===!0)this.version++}}var U9=new x,V6=new x,Z7=new x,R9=new x,L6=new x,K7=new x,B6=new x;class b7{constructor(J=new x,Q=new x(0,0,-1)){this.origin=J,this.direction=Q}set(J,Q){return this.origin.copy(J),this.direction.copy(Q),this}copy(J){return this.origin.copy(J.origin),this.direction.copy(J.direction),this}at(J,Q){return Q.copy(this.origin).addScaledVector(this.direction,J)}lookAt(J){return this.direction.copy(J).sub(this.origin).normalize(),this}recast(J){return this.origin.copy(this.at(J,U9)),this}closestPointToPoint(J,Q){Q.subVectors(J,this.origin);let $=Q.dot(this.direction);if($<0)return Q.copy(this.origin);return Q.copy(this.origin).addScaledVector(this.direction,$)}distanceToPoint(J){return Math.sqrt(this.distanceSqToPoint(J))}distanceSqToPoint(J){let Q=U9.subVectors(J,this.origin).dot(this.direction);if(Q<0)return this.origin.distanceToSquared(J);return U9.copy(this.origin).addScaledVector(this.direction,Q),U9.distanceToSquared(J)}distanceSqToSegment(J,Q,$,Z){V6.copy(J).add(Q).multiplyScalar(0.5),Z7.copy(Q).sub(J).normalize(),R9.copy(this.origin).sub(V6);let K=J.distanceTo(Q)*0.5,U=-this.direction.dot(Z7),W=R9.dot(this.direction),H=-R9.dot(Z7),G=R9.lengthSq(),Y=Math.abs(1-U*U),E,N,X,R;if(Y>0)if(E=U*H-W,N=U*W-H,R=K*Y,E>=0)if(N>=-R)if(N<=R){let D=1/Y;E*=D,N*=D,X=E*(E+U*N+2*W)+N*(U*E+N+2*H)+G}else N=K,E=Math.max(0,-(U*N+W)),X=-E*E+N*(N+2*H)+G;else N=-K,E=Math.max(0,-(U*N+W)),X=-E*E+N*(N+2*H)+G;else if(N<=-R)E=Math.max(0,-(-U*K+W)),N=E>0?-K:Math.min(Math.max(-K,-H),K),X=-E*E+N*(N+2*H)+G;else if(N<=R)E=0,N=Math.min(Math.max(-K,-H),K),X=N*(N+2*H)+G;else E=Math.max(0,-(U*K+W)),N=E>0?K:Math.min(Math.max(-K,-H),K),X=-E*E+N*(N+2*H)+G;else N=U>0?-K:K,E=Math.max(0,-(U*N+W)),X=-E*E+N*(N+2*H)+G;if($)$.copy(this.origin).addScaledVector(this.direction,E);if(Z)Z.copy(V6).addScaledVector(Z7,N);return X}intersectSphere(J,Q){U9.subVectors(J.center,this.origin);let $=U9.dot(this.direction),Z=U9.dot(U9)-$*$,K=J.radius*J.radius;if(Z>K)return null;let U=Math.sqrt(K-Z),W=$-U,H=$+U;if(H<0)return null;if(W<0)return this.at(H,Q);return this.at(W,Q)}intersectsSphere(J){if(J.radius<0)return!1;return this.distanceSqToPoint(J.center)<=J.radius*J.radius}distanceToPlane(J){let Q=J.normal.dot(this.direction);if(Q===0){if(J.distanceToPoint(this.origin)===0)return 0;return null}let $=-(this.origin.dot(J.normal)+J.constant)/Q;return $>=0?$:null}intersectPlane(J,Q){let $=this.distanceToPlane(J);if($===null)return null;return this.at($,Q)}intersectsPlane(J){let Q=J.distanceToPoint(this.origin);if(Q===0)return!0;if(J.normal.dot(this.direction)*Q<0)return!0;return!1}intersectBox(J,Q){let $,Z,K,U,W,H,G=1/this.direction.x,Y=1/this.direction.y,E=1/this.direction.z,N=this.origin;if(G>=0)$=(J.min.x-N.x)*G,Z=(J.max.x-N.x)*G;else $=(J.max.x-N.x)*G,Z=(J.min.x-N.x)*G;if(Y>=0)K=(J.min.y-N.y)*Y,U=(J.max.y-N.y)*Y;else K=(J.max.y-N.y)*Y,U=(J.min.y-N.y)*Y;if($>U||K>Z)return null;if(K>$||isNaN($))$=K;if(U<Z||isNaN(Z))Z=U;if(E>=0)W=(J.min.z-N.z)*E,H=(J.max.z-N.z)*E;else W=(J.max.z-N.z)*E,H=(J.min.z-N.z)*E;if($>H||W>Z)return null;if(W>$||$!==$)$=W;if(H<Z||Z!==Z)Z=H;if(Z<0)return null;return this.at($>=0?$:Z,Q)}intersectsBox(J){return this.intersectBox(J,U9)!==null}intersectTriangle(J,Q,$,Z,K){L6.subVectors(Q,J),K7.subVectors($,J),B6.crossVectors(L6,K7);let U=this.direction.dot(B6),W;if(U>0){if(Z)return null;W=1}else if(U<0)W=-1,U=-U;else return null;R9.subVectors(this.origin,J);let H=W*this.direction.dot(K7.crossVectors(R9,K7));if(H<0)return null;let G=W*this.direction.dot(L6.cross(R9));if(G<0)return null;if(H+G>U)return null;let Y=-W*R9.dot(B6);if(Y<0)return null;return this.at(Y/U,K)}applyMatrix4(J){return this.origin.applyMatrix4(J),this.direction.transformDirection(J),this}equals(J){return J.origin.equals(this.origin)&&J.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class D8 extends b9{constructor(J){super();this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new l0(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new iJ,this.combine=0,this.reflectivity=1,this.refractionRatio=0.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.color.copy(J.color),this.map=J.map,this.lightMap=J.lightMap,this.lightMapIntensity=J.lightMapIntensity,this.aoMap=J.aoMap,this.aoMapIntensity=J.aoMapIntensity,this.specularMap=J.specularMap,this.alphaMap=J.alphaMap,this.envMap=J.envMap,this.envMapRotation.copy(J.envMapRotation),this.combine=J.combine,this.reflectivity=J.reflectivity,this.refractionRatio=J.refractionRatio,this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this.wireframeLinecap=J.wireframeLinecap,this.wireframeLinejoin=J.wireframeLinejoin,this.fog=J.fog,this}}var g$=new WJ,P9=new b7,U7=new F8,x$=new x,W7=new x,H7=new x,G7=new x,z6=new x,Y7=new x,p$=new x,X7=new x;class wJ extends IJ{constructor(J=new LJ,Q=new D8){super();this.isMesh=!0,this.type="Mesh",this.geometry=J,this.material=Q,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(J,Q){if(super.copy(J,Q),J.morphTargetInfluences!==void 0)this.morphTargetInfluences=J.morphTargetInfluences.slice();if(J.morphTargetDictionary!==void 0)this.morphTargetDictionary=Object.assign({},J.morphTargetDictionary);return this.material=Array.isArray(J.material)?J.material.slice():J.material,this.geometry=J.geometry,this}updateMorphTargets(){let Q=this.geometry.morphAttributes,$=Object.keys(Q);if($.length>0){let Z=Q[$[0]];if(Z!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let K=0,U=Z.length;K<U;K++){let W=Z[K].name||String(K);this.morphTargetInfluences.push(0),this.morphTargetDictionary[W]=K}}}}getVertexPosition(J,Q){let $=this.geometry,Z=$.attributes.position,K=$.morphAttributes.position,U=$.morphTargetsRelative;Q.fromBufferAttribute(Z,J);let W=this.morphTargetInfluences;if(K&&W){Y7.set(0,0,0);for(let H=0,G=K.length;H<G;H++){let Y=W[H],E=K[H];if(Y===0)continue;if(z6.fromBufferAttribute(E,J),U)Y7.addScaledVector(z6,Y);else Y7.addScaledVector(z6.sub(Q),Y)}Q.add(Y7)}return Q}raycast(J,Q){let $=this.geometry,Z=this.material,K=this.matrixWorld;if(Z===void 0)return;if($.boundingSphere===null)$.computeBoundingSphere();if(U7.copy($.boundingSphere),U7.applyMatrix4(K),P9.copy(J.ray).recast(J.near),U7.containsPoint(P9.origin)===!1){if(P9.intersectSphere(U7,x$)===null)return;if(P9.origin.distanceToSquared(x$)>(J.far-J.near)**2)return}if(g$.copy(K).invert(),P9.copy(J.ray).applyMatrix4(g$),$.boundingBox!==null){if(P9.intersectsBox($.boundingBox)===!1)return}this._computeIntersections(J,Q,P9)}_computeIntersections(J,Q,$){let Z,K=this.geometry,U=this.material,W=K.index,H=K.attributes.position,G=K.attributes.uv,Y=K.attributes.uv1,E=K.attributes.normal,N=K.groups,X=K.drawRange;if(W!==null)if(Array.isArray(U))for(let R=0,D=N.length;R<D;R++){let V=N[R],q=U[V.materialIndex],F=Math.max(V.start,X.start),z=Math.min(W.count,Math.min(V.start+V.count,X.start+X.count));for(let B=F,L=z;B<L;B+=3){let w=W.getX(B),_=W.getX(B+1),C=W.getX(B+2);if(Z=N7(this,q,J,$,G,Y,E,w,_,C),Z)Z.faceIndex=Math.floor(B/3),Z.face.materialIndex=V.materialIndex,Q.push(Z)}}else{let R=Math.max(0,X.start),D=Math.min(W.count,X.start+X.count);for(let V=R,q=D;V<q;V+=3){let F=W.getX(V),z=W.getX(V+1),B=W.getX(V+2);if(Z=N7(this,U,J,$,G,Y,E,F,z,B),Z)Z.faceIndex=Math.floor(V/3),Q.push(Z)}}else if(H!==void 0)if(Array.isArray(U))for(let R=0,D=N.length;R<D;R++){let V=N[R],q=U[V.materialIndex],F=Math.max(V.start,X.start),z=Math.min(H.count,Math.min(V.start+V.count,X.start+X.count));for(let B=F,L=z;B<L;B+=3){let w=B,_=B+1,C=B+2;if(Z=N7(this,q,J,$,G,Y,E,w,_,C),Z)Z.faceIndex=Math.floor(B/3),Z.face.materialIndex=V.materialIndex,Q.push(Z)}}else{let R=Math.max(0,X.start),D=Math.min(H.count,X.start+X.count);for(let V=R,q=D;V<q;V+=3){let F=V,z=V+1,B=V+2;if(Z=N7(this,U,J,$,G,Y,E,F,z,B),Z)Z.faceIndex=Math.floor(V/3),Q.push(Z)}}}}function MU(J,Q,$,Z,K,U,W,H){let G;if(Q.side===1)G=Z.intersectTriangle(W,U,K,!0,H);else G=Z.intersectTriangle(K,U,W,Q.side===0,H);if(G===null)return null;X7.copy(H),X7.applyMatrix4(J.matrixWorld);let Y=$.ray.origin.distanceTo(X7);if(Y<$.near||Y>$.far)return null;return{distance:Y,point:X7.clone(),object:J}}function N7(J,Q,$,Z,K,U,W,H,G,Y){J.getVertexPosition(H,W7),J.getVertexPosition(G,H7),J.getVertexPosition(Y,G7);let E=MU(J,Q,$,Z,W7,H7,G7,p$);if(E){let N=new x;if(fJ.getBarycoord(p$,W7,H7,G7,N),K)E.uv=fJ.getInterpolatedAttribute(K,H,G,Y,N,new i0);if(U)E.uv1=fJ.getInterpolatedAttribute(U,H,G,Y,N,new i0);if(W){if(E.normal=fJ.getInterpolatedAttribute(W,H,G,Y,N,new x),E.normal.dot(Z.direction)>0)E.normal.multiplyScalar(-1)}let X={a:H,b:G,c:Y,normal:new x,materialIndex:0};fJ.getNormal(W7,H7,G7,X.normal),E.face=X,E.barycoord=N}return E}class wQ extends VJ{constructor(J=null,Q=1,$=1,Z,K,U,W,H,G=1003,Y=1003,E,N){super(null,U,W,H,G,Y,Z,K,E,N);this.isDataTexture=!0,this.image={data:J,width:Q,height:$},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}var I6=new x,kU=new x,VU=new j0;class W9{constructor(J=new x(1,0,0),Q=0){this.isPlane=!0,this.normal=J,this.constant=Q}set(J,Q){return this.normal.copy(J),this.constant=Q,this}setComponents(J,Q,$,Z){return this.normal.set(J,Q,$),this.constant=Z,this}setFromNormalAndCoplanarPoint(J,Q){return this.normal.copy(J),this.constant=-Q.dot(this.normal),this}setFromCoplanarPoints(J,Q,$){let Z=I6.subVectors($,Q).cross(kU.subVectors(J,Q)).normalize();return this.setFromNormalAndCoplanarPoint(Z,J),this}copy(J){return this.normal.copy(J.normal),this.constant=J.constant,this}normalize(){let J=1/this.normal.length();return this.normal.multiplyScalar(J),this.constant*=J,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(J){return this.normal.dot(J)+this.constant}distanceToSphere(J){return this.distanceToPoint(J.center)-J.radius}projectPoint(J,Q){return Q.copy(J).addScaledVector(this.normal,-this.distanceToPoint(J))}intersectLine(J,Q){let $=J.delta(I6),Z=this.normal.dot($);if(Z===0){if(this.distanceToPoint(J.start)===0)return Q.copy(J.start);return null}let K=-(J.start.dot(this.normal)+this.constant)/Z;if(K<0||K>1)return null;return Q.copy(J.start).addScaledVector($,K)}intersectsLine(J){let Q=this.distanceToPoint(J.start),$=this.distanceToPoint(J.end);return Q<0&&$>0||$<0&&Q>0}intersectsBox(J){return J.intersectsPlane(this)}intersectsSphere(J){return J.intersectsPlane(this)}coplanarPoint(J){return J.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(J,Q){let $=Q||VU.getNormalMatrix(J),Z=this.coplanarPoint(I6).applyMatrix4(J),K=this.normal.applyMatrix3($).normalize();return this.constant=-Z.dot(K),this}translate(J){return this.constant-=J.dot(this.normal),this}equals(J){return J.normal.equals(this.normal)&&J.constant===this.constant}clone(){return new this.constructor().copy(this)}}var w9=new F8,LU=new i0(0.5,0.5),E7=new x;class h7{constructor(J=new W9,Q=new W9,$=new W9,Z=new W9,K=new W9,U=new W9){this.planes=[J,Q,$,Z,K,U]}set(J,Q,$,Z,K,U){let W=this.planes;return W[0].copy(J),W[1].copy(Q),W[2].copy($),W[3].copy(Z),W[4].copy(K),W[5].copy(U),this}copy(J){let Q=this.planes;for(let $=0;$<6;$++)Q[$].copy(J.planes[$]);return this}setFromProjectionMatrix(J,Q=2000,$=!1){let Z=this.planes,K=J.elements,U=K[0],W=K[1],H=K[2],G=K[3],Y=K[4],E=K[5],N=K[6],X=K[7],R=K[8],D=K[9],V=K[10],q=K[11],F=K[12],z=K[13],B=K[14],L=K[15];if(Z[0].setComponents(G-U,X-Y,q-R,L-F).normalize(),Z[1].setComponents(G+U,X+Y,q+R,L+F).normalize(),Z[2].setComponents(G+W,X+E,q+D,L+z).normalize(),Z[3].setComponents(G-W,X-E,q-D,L-z).normalize(),$)Z[4].setComponents(H,N,V,B).normalize(),Z[5].setComponents(G-H,X-N,q-V,L-B).normalize();else if(Z[4].setComponents(G-H,X-N,q-V,L-B).normalize(),Q===2000)Z[5].setComponents(G+H,X+N,q+V,L+B).normalize();else if(Q===2001)Z[5].setComponents(H,N,V,B).normalize();else throw Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+Q);return this}intersectsObject(J){if(J.boundingSphere!==void 0){if(J.boundingSphere===null)J.computeBoundingSphere();w9.copy(J.boundingSphere).applyMatrix4(J.matrixWorld)}else{let Q=J.geometry;if(Q.boundingSphere===null)Q.computeBoundingSphere();w9.copy(Q.boundingSphere).applyMatrix4(J.matrixWorld)}return this.intersectsSphere(w9)}intersectsSprite(J){w9.center.set(0,0,0);let Q=LU.distanceTo(J.center);return w9.radius=0.7071067811865476+Q,w9.applyMatrix4(J.matrixWorld),this.intersectsSphere(w9)}intersectsSphere(J){let Q=this.planes,$=J.center,Z=-J.radius;for(let K=0;K<6;K++)if(Q[K].distanceToPoint($)<Z)return!1;return!0}intersectsBox(J){let Q=this.planes;for(let $=0;$<6;$++){let Z=Q[$];if(E7.x=Z.normal.x>0?J.max.x:J.min.x,E7.y=Z.normal.y>0?J.max.y:J.min.y,E7.z=Z.normal.z>0?J.max.z:J.min.z,Z.distanceToPoint(E7)<0)return!1}return!0}containsPoint(J){let Q=this.planes;for(let $=0;$<6;$++)if(Q[$].distanceToPoint(J)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class O8 extends b9{constructor(J){super();this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new l0(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(J)}copy(J){return super.copy(J),this.color.copy(J.color),this.map=J.map,this.linewidth=J.linewidth,this.linecap=J.linecap,this.linejoin=J.linejoin,this.fog=J.fog,this}}var k7=new x,V7=new x,m$=new WJ,C8=new b7,q7=new F8,_6=new x,d$=new x;class R8 extends IJ{constructor(J=new LJ,Q=new O8){super();this.isLine=!0,this.type="Line",this.geometry=J,this.material=Q,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(J,Q){return super.copy(J,Q),this.material=Array.isArray(J.material)?J.material.slice():J.material,this.geometry=J.geometry,this}computeLineDistances(){let J=this.geometry;if(J.index===null){let Q=J.attributes.position,$=[0];for(let Z=1,K=Q.count;Z<K;Z++)k7.fromBufferAttribute(Q,Z-1),V7.fromBufferAttribute(Q,Z),$[Z]=$[Z-1],$[Z]+=k7.distanceTo(V7);J.setAttribute("lineDistance",new _J($,1))}else w0("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(J,Q){let $=this.geometry,Z=this.matrixWorld,K=J.params.Line.threshold,U=$.drawRange;if($.boundingSphere===null)$.computeBoundingSphere();if(q7.copy($.boundingSphere),q7.applyMatrix4(Z),q7.radius+=K,J.ray.intersectsSphere(q7)===!1)return;m$.copy(Z).invert(),C8.copy(J.ray).applyMatrix4(m$);let W=K/((this.scale.x+this.scale.y+this.scale.z)/3),H=W*W,G=this.isLineSegments?2:1,Y=$.index,N=$.attributes.position;if(Y!==null){let X=Math.max(0,U.start),R=Math.min(Y.count,U.start+U.count);for(let D=X,V=R-1;D<V;D+=G){let q=Y.getX(D),F=Y.getX(D+1),z=F7(this,J,C8,H,q,F,D);if(z)Q.push(z)}if(this.isLineLoop){let D=Y.getX(R-1),V=Y.getX(X),q=F7(this,J,C8,H,D,V,R-1);if(q)Q.push(q)}}else{let X=Math.max(0,U.start),R=Math.min(N.count,U.start+U.count);for(let D=X,V=R-1;D<V;D+=G){let q=F7(this,J,C8,H,D,D+1,D);if(q)Q.push(q)}if(this.isLineLoop){let D=F7(this,J,C8,H,R-1,X,R-1);if(D)Q.push(D)}}}updateMorphTargets(){let Q=this.geometry.morphAttributes,$=Object.keys(Q);if($.length>0){let Z=Q[$[0]];if(Z!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let K=0,U=Z.length;K<U;K++){let W=Z[K].name||String(K);this.morphTargetInfluences.push(0),this.morphTargetDictionary[W]=K}}}}}function F7(J,Q,$,Z,K,U,W){let H=J.geometry.attributes.position;if(k7.fromBufferAttribute(H,K),V7.fromBufferAttribute(H,U),$.distanceSqToSegment(k7,V7,_6,d$)>Z)return;_6.applyMatrix4(J.matrixWorld);let Y=Q.ray.origin.distanceTo(_6);if(Y<Q.near||Y>Q.far)return;return{distance:Y,point:d$.clone().applyMatrix4(J.matrixWorld),index:W,face:null,faceIndex:null,barycoord:null,object:J}}class g7 extends VJ{constructor(J=[],Q=301,$,Z,K,U,W,H,G,Y){super(J,Q,$,Z,K,U,W,H,G,Y);this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(J){this.image=J}}class h9 extends VJ{constructor(J,Q,$=1014,Z,K,U,W=1003,H=1003,G,Y=1026,E=1){if(Y!==1026&&Y!==1027)throw Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let N={width:J,height:Q,depth:E};super(N,Z,K,U,W,H,Y,$,G);this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(J){return super.copy(J),this.source=new h8(Object.assign({},J.image)),this.compareFunction=J.compareFunction,this}toJSON(J){let Q=super.toJSON(J);if(this.compareFunction!==null)Q.compareFunction=this.compareFunction;return Q}}class TQ extends h9{constructor(J,Q=1014,$=301,Z,K,U=1003,W=1003,H,G=1026){let Y={width:J,height:J,depth:1},E=[Y,Y,Y,Y,Y,Y];super(J,J,Q,$,Z,K,U,W,H,G);this.image=E,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(J){this.image=J}}class x7 extends VJ{constructor(J=null){super();this.sourceTexture=J,this.isExternalTexture=!0}copy(J){return super.copy(J),this.sourceTexture=J.sourceTexture,this}}class M8 extends LJ{constructor(J=1,Q=1,$=1,Z=1,K=1,U=1){super();this.type="BoxGeometry",this.parameters={width:J,height:Q,depth:$,widthSegments:Z,heightSegments:K,depthSegments:U};let W=this;Z=Math.floor(Z),K=Math.floor(K),U=Math.floor(U);let H=[],G=[],Y=[],E=[],N=0,X=0;R("z","y","x",-1,-1,$,Q,J,U,K,0),R("z","y","x",1,-1,$,Q,-J,U,K,1),R("x","z","y",1,1,J,$,Q,Z,U,2),R("x","z","y",1,-1,J,$,-Q,Z,U,3),R("x","y","z",1,-1,J,Q,$,Z,K,4),R("x","y","z",-1,-1,J,Q,-$,Z,K,5),this.setIndex(H),this.setAttribute("position",new _J(G,3)),this.setAttribute("normal",new _J(Y,3)),this.setAttribute("uv",new _J(E,2));function R(D,V,q,F,z,B,L,w,_,C,O){let P=B/_,y=L/C,A=B/2,b=L/2,u=w/2,j=_+1,p=C+1,v=0,h=0,i=new x;for(let n=0;n<p;n++){let J0=n*y-b;for(let q0=0;q0<j;q0++){let H0=q0*P-A;i[D]=H0*F,i[V]=J0*z,i[q]=u,G.push(i.x,i.y,i.z),i[D]=0,i[V]=0,i[q]=w>0?1:-1,Y.push(i.x,i.y,i.z),E.push(q0/_),E.push(1-n/C),v+=1}}for(let n=0;n<C;n++)for(let J0=0;J0<_;J0++){let q0=N+J0+j*n,H0=N+J0+j*(n+1),QJ=N+(J0+1)+j*(n+1),c0=N+(J0+1)+j*n;H.push(q0,H0,c0),H.push(H0,QJ,c0),h+=6}W.addGroup(X,h,O),X+=h,N+=v}}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new M8(J.width,J.height,J.depth,J.widthSegments,J.heightSegments,J.depthSegments)}}class x8 extends LJ{constructor(J=1,Q=1,$=1,Z=1){super();this.type="PlaneGeometry",this.parameters={width:J,height:Q,widthSegments:$,heightSegments:Z};let K=J/2,U=Q/2,W=Math.floor($),H=Math.floor(Z),G=W+1,Y=H+1,E=J/W,N=Q/H,X=[],R=[],D=[],V=[];for(let q=0;q<Y;q++){let F=q*N-U;for(let z=0;z<G;z++){let B=z*E-K;R.push(B,-F,0),D.push(0,0,1),V.push(z/W),V.push(1-q/H)}}for(let q=0;q<H;q++)for(let F=0;F<W;F++){let z=F+G*q,B=F+G*(q+1),L=F+1+G*(q+1),w=F+1+G*q;X.push(z,B,w),X.push(B,L,w)}this.setIndex(X),this.setAttribute("position",new _J(R,3)),this.setAttribute("normal",new _J(D,3)),this.setAttribute("uv",new _J(V,2))}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new x8(J.width,J.height,J.widthSegments,J.heightSegments)}}class p8 extends LJ{constructor(J=1,Q=32,$=16,Z=0,K=Math.PI*2,U=0,W=Math.PI){super();this.type="SphereGeometry",this.parameters={radius:J,widthSegments:Q,heightSegments:$,phiStart:Z,phiLength:K,thetaStart:U,thetaLength:W},Q=Math.max(3,Math.floor(Q)),$=Math.max(2,Math.floor($));let H=Math.min(U+W,Math.PI),G=0,Y=[],E=new x,N=new x,X=[],R=[],D=[],V=[];for(let q=0;q<=$;q++){let F=[],z=q/$,B=0;if(q===0&&U===0)B=0.5/Q;else if(q===$&&H===Math.PI)B=-0.5/Q;for(let L=0;L<=Q;L++){let w=L/Q;E.x=-J*Math.cos(Z+w*K)*Math.sin(U+z*W),E.y=J*Math.cos(U+z*W),E.z=J*Math.sin(Z+w*K)*Math.sin(U+z*W),R.push(E.x,E.y,E.z),N.copy(E).normalize(),D.push(N.x,N.y,N.z),V.push(w+B,1-z),F.push(G++)}Y.push(F)}for(let q=0;q<$;q++)for(let F=0;F<Q;F++){let z=Y[q][F+1],B=Y[q][F],L=Y[q+1][F],w=Y[q+1][F+1];if(q!==0||U>0)X.push(z,B,w);if(q!==$-1||H<Math.PI)X.push(B,L,w)}this.setIndex(X),this.setAttribute("position",new _J(R,3)),this.setAttribute("normal",new _J(D,3)),this.setAttribute("uv",new _J(V,2))}copy(J){return super.copy(J),this.parameters=Object.assign({},J.parameters),this}static fromJSON(J){return new p8(J.radius,J.widthSegments,J.heightSegments,J.phiStart,J.phiLength,J.thetaStart,J.thetaLength)}}function g9(J){let Q={};for(let $ in J){Q[$]={};for(let Z in J[$]){let K=J[$][Z];if(K&&(K.isColor||K.isMatrix3||K.isMatrix4||K.isVector2||K.isVector3||K.isVector4||K.isTexture||K.isQuaternion))if(K.isRenderTargetTexture)w0("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),Q[$][Z]=null;else Q[$][Z]=K.clone();else if(Array.isArray(K))Q[$][Z]=K.slice();else Q[$][Z]=K}}return Q}function BJ(J){let Q={};for(let $=0;$<J.length;$++){let Z=g9(J[$]);for(let K in Z)Q[K]=Z[K]}return Q}function BU(J){let Q=[];for(let $=0;$<J.length;$++)Q.push(J[$].clone());return Q}function SQ(J){let Q=J.getRenderTarget();if(Q===null)return J.outputColorSpace;if(Q.isXRRenderTarget===!0)return Q.texture.colorSpace;return x0.workingColorSpace}var oZ={clone:g9,merge:BJ},zU=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,IU=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class hJ extends b9{constructor(J){super();if(this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=zU,this.fragmentShader=IU,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,J!==void 0)this.setValues(J)}copy(J){return super.copy(J),this.fragmentShader=J.fragmentShader,this.vertexShader=J.vertexShader,this.uniforms=g9(J.uniforms),this.uniformsGroups=BU(J.uniformsGroups),this.defines=Object.assign({},J.defines),this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this.fog=J.fog,this.lights=J.lights,this.clipping=J.clipping,this.extensions=Object.assign({},J.extensions),this.glslVersion=J.glslVersion,this.defaultAttributeValues=Object.assign({},J.defaultAttributeValues),this.index0AttributeName=J.index0AttributeName,this.uniformsNeedUpdate=J.uniformsNeedUpdate,this}toJSON(J){let Q=super.toJSON(J);Q.glslVersion=this.glslVersion,Q.uniforms={};for(let Z in this.uniforms){let U=this.uniforms[Z].value;if(U&&U.isTexture)Q.uniforms[Z]={type:"t",value:U.toJSON(J).uuid};else if(U&&U.isColor)Q.uniforms[Z]={type:"c",value:U.getHex()};else if(U&&U.isVector2)Q.uniforms[Z]={type:"v2",value:U.toArray()};else if(U&&U.isVector3)Q.uniforms[Z]={type:"v3",value:U.toArray()};else if(U&&U.isVector4)Q.uniforms[Z]={type:"v4",value:U.toArray()};else if(U&&U.isMatrix3)Q.uniforms[Z]={type:"m3",value:U.toArray()};else if(U&&U.isMatrix4)Q.uniforms[Z]={type:"m4",value:U.toArray()};else Q.uniforms[Z]={value:U}}if(Object.keys(this.defines).length>0)Q.defines=this.defines;Q.vertexShader=this.vertexShader,Q.fragmentShader=this.fragmentShader,Q.lights=this.lights,Q.clipping=this.clipping;let $={};for(let Z in this.extensions)if(this.extensions[Z]===!0)$[Z]=!0;if(Object.keys($).length>0)Q.extensions=$;return Q}}class jQ extends hJ{constructor(J){super(J);this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class yQ extends b9{constructor(J){super();this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(J)}copy(J){return super.copy(J),this.depthPacking=J.depthPacking,this.map=J.map,this.alphaMap=J.alphaMap,this.displacementMap=J.displacementMap,this.displacementScale=J.displacementScale,this.displacementBias=J.displacementBias,this.wireframe=J.wireframe,this.wireframeLinewidth=J.wireframeLinewidth,this}}class fQ extends b9{constructor(J){super();this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(J)}copy(J){return super.copy(J),this.map=J.map,this.alphaMap=J.alphaMap,this.displacementMap=J.displacementMap,this.displacementScale=J.displacementScale,this.displacementBias=J.displacementBias,this}}function D7(J,Q){if(!J||J.constructor===Q)return J;if(typeof Q.BYTES_PER_ELEMENT==="number")return new Q(J);return Array.prototype.slice.call(J)}class x9{constructor(J,Q,$,Z){this.parameterPositions=J,this._cachedIndex=0,this.resultBuffer=Z!==void 0?Z:new Q.constructor($),this.sampleValues=Q,this.valueSize=$,this.settings=null,this.DefaultSettings_={}}evaluate(J){let Q=this.parameterPositions,$=this._cachedIndex,Z=Q[$],K=Q[$-1];$:{J:{let U;Q:{Z:if(!(J<Z)){for(let W=$+2;;){if(Z===void 0){if(J<K)break Z;return $=Q.length,this._cachedIndex=$,this.copySampleValue_($-1)}if($===W)break;if(K=Z,Z=Q[++$],J<Z)break J}U=Q.length;break Q}if(!(J>=K)){let W=Q[1];if(J<W)$=2,K=W;for(let H=$-2;;){if(K===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if($===H)break;if(Z=K,K=Q[--$-1],J>=K)break J}U=$,$=0;break Q}break $}while($<U){let W=$+U>>>1;if(J<Q[W])U=W;else $=W+1}if(Z=Q[$],K=Q[$-1],K===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(Z===void 0)return $=Q.length,this._cachedIndex=$,this.copySampleValue_($-1)}this._cachedIndex=$,this.intervalChanged_($,K,Z)}return this.interpolate_($,K,J,Z)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(J){let Q=this.resultBuffer,$=this.sampleValues,Z=this.valueSize,K=J*Z;for(let U=0;U!==Z;++U)Q[U]=$[K+U];return Q}interpolate_(){throw Error("call to abstract method")}intervalChanged_(){}}class vQ extends x9{constructor(J,Q,$,Z){super(J,Q,$,Z);this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:2400,endingEnd:2400}}intervalChanged_(J,Q,$){let Z=this.parameterPositions,K=J-2,U=J+1,W=Z[K],H=Z[U];if(W===void 0)switch(this.getSettings_().endingStart){case 2401:K=J,W=2*Q-$;break;case 2402:K=Z.length-2,W=Q+Z[K]-Z[K+1];break;default:K=J,W=$}if(H===void 0)switch(this.getSettings_().endingEnd){case 2401:U=J,H=2*$-Q;break;case 2402:U=1,H=$+Z[1]-Z[0];break;default:U=J-1,H=Q}let G=($-Q)*0.5,Y=this.valueSize;this._weightPrev=G/(Q-W),this._weightNext=G/(H-$),this._offsetPrev=K*Y,this._offsetNext=U*Y}interpolate_(J,Q,$,Z){let K=this.resultBuffer,U=this.sampleValues,W=this.valueSize,H=J*W,G=H-W,Y=this._offsetPrev,E=this._offsetNext,N=this._weightPrev,X=this._weightNext,R=($-Q)/(Z-Q),D=R*R,V=D*R,q=-N*V+2*N*D-N*R,F=(1+N)*V+(-1.5-2*N)*D+(-0.5+N)*R+1,z=(-1-X)*V+(1.5+X)*D+0.5*R,B=X*V-X*D;for(let L=0;L!==W;++L)K[L]=q*U[Y+L]+F*U[G+L]+z*U[H+L]+B*U[E+L];return K}}class bQ extends x9{constructor(J,Q,$,Z){super(J,Q,$,Z)}interpolate_(J,Q,$,Z){let K=this.resultBuffer,U=this.sampleValues,W=this.valueSize,H=J*W,G=H-W,Y=($-Q)/(Z-Q),E=1-Y;for(let N=0;N!==W;++N)K[N]=U[G+N]*E+U[H+N]*Y;return K}}class hQ extends x9{constructor(J,Q,$,Z){super(J,Q,$,Z)}interpolate_(J){return this.copySampleValue_(J-1)}}class gQ extends x9{interpolate_(J,Q,$,Z){let K=this.resultBuffer,U=this.sampleValues,W=this.valueSize,H=J*W,G=H-W,Y=this.settings||this.DefaultSettings_,E=Y.inTangents,N=Y.outTangents;if(!E||!N){let D=($-Q)/(Z-Q),V=1-D;for(let q=0;q!==W;++q)K[q]=U[G+q]*V+U[H+q]*D;return K}let X=W*2,R=J-1;for(let D=0;D!==W;++D){let V=U[G+D],q=U[H+D],F=R*X+D*2,z=N[F],B=N[F+1],L=J*X+D*2,w=E[L],_=E[L+1],C=($-Q)/(Z-Q),O,P,y,A,b;for(let u=0;u<8;u++){O=C*C,P=O*C,y=1-C,A=y*y,b=A*y;let p=b*Q+3*A*C*z+3*y*O*w+P*Z-$;if(Math.abs(p)<0.0000000001)break;let v=3*A*(z-Q)+6*y*C*(w-z)+3*O*(Z-w);if(Math.abs(v)<0.0000000001)break;C=C-p/v,C=Math.max(0,Math.min(1,C))}K[D]=b*V+3*A*C*B+3*y*O*_+P*q}return K}}class gJ{constructor(J,Q,$,Z){if(J===void 0)throw Error("THREE.KeyframeTrack: track name is undefined");if(Q===void 0||Q.length===0)throw Error("THREE.KeyframeTrack: no keyframes in track named "+J);this.name=J,this.times=D7(Q,this.TimeBufferType),this.values=D7($,this.ValueBufferType),this.setInterpolation(Z||this.DefaultInterpolation)}static toJSON(J){let Q=J.constructor,$;if(Q.toJSON!==this.toJSON)$=Q.toJSON(J);else{$={name:J.name,times:D7(J.times,Array),values:D7(J.values,Array)};let Z=J.getInterpolation();if(Z!==J.DefaultInterpolation)$.interpolation=Z}return $.type=J.ValueTypeName,$}InterpolantFactoryMethodDiscrete(J){return new hQ(this.times,this.values,this.getValueSize(),J)}InterpolantFactoryMethodLinear(J){return new bQ(this.times,this.values,this.getValueSize(),J)}InterpolantFactoryMethodSmooth(J){return new vQ(this.times,this.values,this.getValueSize(),J)}InterpolantFactoryMethodBezier(J){let Q=new gQ(this.times,this.values,this.getValueSize(),J);if(this.settings)Q.settings=this.settings;return Q}setInterpolation(J){let Q;switch(J){case 2300:Q=this.InterpolantFactoryMethodDiscrete;break;case 2301:Q=this.InterpolantFactoryMethodLinear;break;case 2302:Q=this.InterpolantFactoryMethodSmooth;break;case 2303:Q=this.InterpolantFactoryMethodBezier;break}if(Q===void 0){let $="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(J!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error($);return w0("KeyframeTrack:",$),this}return this.createInterpolant=Q,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return 2300;case this.InterpolantFactoryMethodLinear:return 2301;case this.InterpolantFactoryMethodSmooth:return 2302;case this.InterpolantFactoryMethodBezier:return 2303}}getValueSize(){return this.values.length/this.times.length}shift(J){if(J!==0){let Q=this.times;for(let $=0,Z=Q.length;$!==Z;++$)Q[$]+=J}return this}scale(J){if(J!==1){let Q=this.times;for(let $=0,Z=Q.length;$!==Z;++$)Q[$]*=J}return this}trim(J,Q){let $=this.times,Z=$.length,K=0,U=Z-1;while(K!==Z&&$[K]<J)++K;while(U!==-1&&$[U]>Q)--U;if(++U,K!==0||U!==Z){if(K>=U)U=Math.max(U,1),K=U-1;let W=this.getValueSize();this.times=$.slice(K,U),this.values=this.values.slice(K*W,U*W)}return this}validate(){let J=!0,Q=this.getValueSize();if(Q-Math.floor(Q)!==0)P0("KeyframeTrack: Invalid value size in track.",this),J=!1;let $=this.times,Z=this.values,K=$.length;if(K===0)P0("KeyframeTrack: Track is empty.",this),J=!1;let U=null;for(let W=0;W!==K;W++){let H=$[W];if(typeof H==="number"&&isNaN(H)){P0("KeyframeTrack: Time is not a valid number.",this,W,H),J=!1;break}if(U!==null&&U>H){P0("KeyframeTrack: Out of order keys.",this,W,H,U),J=!1;break}U=H}if(Z!==void 0){if($U(Z))for(let W=0,H=Z.length;W!==H;++W){let G=Z[W];if(isNaN(G)){P0("KeyframeTrack: Value is not a valid number.",this,W,G),J=!1;break}}}return J}optimize(){let J=this.times.slice(),Q=this.values.slice(),$=this.getValueSize(),Z=this.getInterpolation()===2302,K=J.length-1,U=1;for(let W=1;W<K;++W){let H=!1,G=J[W],Y=J[W+1];if(G!==Y&&(W!==1||G!==J[0]))if(!Z){let E=W*$,N=E-$,X=E+$;for(let R=0;R!==$;++R){let D=Q[E+R];if(D!==Q[N+R]||D!==Q[X+R]){H=!0;break}}}else H=!0;if(H){if(W!==U){J[U]=J[W];let E=W*$,N=U*$;for(let X=0;X!==$;++X)Q[N+X]=Q[E+X]}++U}}if(K>0){J[U]=J[K];for(let W=K*$,H=U*$,G=0;G!==$;++G)Q[H+G]=Q[W+G];++U}if(U!==J.length)this.times=J.slice(0,U),this.values=Q.slice(0,U*$);else this.times=J,this.values=Q;return this}clone(){let J=this.times.slice(),Q=this.values.slice(),Z=new this.constructor(this.name,J,Q);return Z.createInterpolant=this.createInterpolant,Z}}gJ.prototype.ValueTypeName="";gJ.prototype.TimeBufferType=Float32Array;gJ.prototype.ValueBufferType=Float32Array;gJ.prototype.DefaultInterpolation=2301;class p9 extends gJ{constructor(J,Q,$){super(J,Q,$)}}p9.prototype.ValueTypeName="bool";p9.prototype.ValueBufferType=Array;p9.prototype.DefaultInterpolation=2300;p9.prototype.InterpolantFactoryMethodLinear=void 0;p9.prototype.InterpolantFactoryMethodSmooth=void 0;class xQ extends gJ{constructor(J,Q,$,Z){super(J,Q,$,Z)}}xQ.prototype.ValueTypeName="color";class pQ extends gJ{constructor(J,Q,$,Z){super(J,Q,$,Z)}}pQ.prototype.ValueTypeName="number";class mQ extends x9{constructor(J,Q,$,Z){super(J,Q,$,Z)}interpolate_(J,Q,$,Z){let K=this.resultBuffer,U=this.sampleValues,W=this.valueSize,H=($-Q)/(Z-Q),G=J*W;for(let Y=G+W;G!==Y;G+=4)X9.slerpFlat(K,0,U,G-W,U,G,H);return K}}class p7 extends gJ{constructor(J,Q,$,Z){super(J,Q,$,Z)}InterpolantFactoryMethodLinear(J){return new mQ(this.times,this.values,this.getValueSize(),J)}}p7.prototype.ValueTypeName="quaternion";p7.prototype.InterpolantFactoryMethodSmooth=void 0;class m9 extends gJ{constructor(J,Q,$){super(J,Q,$)}}m9.prototype.ValueTypeName="string";m9.prototype.ValueBufferType=Array;m9.prototype.DefaultInterpolation=2300;m9.prototype.InterpolantFactoryMethodLinear=void 0;m9.prototype.InterpolantFactoryMethodSmooth=void 0;class dQ extends gJ{constructor(J,Q,$,Z){super(J,Q,$,Z)}}dQ.prototype.ValueTypeName="vector";class uQ{constructor(J,Q,$){let Z=this,K=!1,U=0,W=0,H=void 0,G=[];this.onStart=void 0,this.onLoad=J,this.onProgress=Q,this.onError=$,this._abortController=null,this.itemStart=function(Y){if(W++,K===!1){if(Z.onStart!==void 0)Z.onStart(Y,U,W)}K=!0},this.itemEnd=function(Y){if(U++,Z.onProgress!==void 0)Z.onProgress(Y,U,W);if(U===W){if(K=!1,Z.onLoad!==void 0)Z.onLoad()}},this.itemError=function(Y){if(Z.onError!==void 0)Z.onError(Y)},this.resolveURL=function(Y){if(H)return H(Y);return Y},this.setURLModifier=function(Y){return H=Y,this},this.addHandler=function(Y,E){return G.push(Y,E),this},this.removeHandler=function(Y){let E=G.indexOf(Y);if(E!==-1)G.splice(E,2);return this},this.getHandler=function(Y){for(let E=0,N=G.length;E<N;E+=2){let X=G[E],R=G[E+1];if(X.global)X.lastIndex=0;if(X.test(Y))return R}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){if(!this._abortController)this._abortController=new AbortController;return this._abortController}}var aZ=new uQ;class lQ{constructor(J){if(this.manager=J!==void 0?J:aZ,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(J,Q){let $=this;return new Promise(function(Z,K){$.load(J,Z,Q,K)})}parse(){}setCrossOrigin(J){return this.crossOrigin=J,this}setWithCredentials(J){return this.withCredentials=J,this}setPath(J){return this.path=J,this}setResourcePath(J){return this.resourcePath=J,this}setRequestHeader(J){return this.requestHeader=J,this}abort(){return this}}lQ.DEFAULT_MATERIAL_NAME="__DEFAULT";var O7=new x,R7=new X9,sJ=new x;class m7 extends IJ{constructor(){super();this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new WJ,this.projectionMatrix=new WJ,this.projectionMatrixInverse=new WJ,this.coordinateSystem=2000,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(J,Q){return super.copy(J,Q),this.matrixWorldInverse.copy(J.matrixWorldInverse),this.projectionMatrix.copy(J.projectionMatrix),this.projectionMatrixInverse.copy(J.projectionMatrixInverse),this.coordinateSystem=J.coordinateSystem,this}getWorldDirection(J){return super.getWorldDirection(J).negate()}updateMatrixWorld(J){if(super.updateMatrixWorld(J),this.matrixWorld.decompose(O7,R7,sJ),sJ.x===1&&sJ.y===1&&sJ.z===1)this.matrixWorldInverse.copy(this.matrixWorld).invert();else this.matrixWorldInverse.compose(O7,R7,sJ.set(1,1,1)).invert()}updateWorldMatrix(J,Q){if(super.updateWorldMatrix(J,Q),this.matrixWorld.decompose(O7,R7,sJ),sJ.x===1&&sJ.y===1&&sJ.z===1)this.matrixWorldInverse.copy(this.matrixWorld).invert();else this.matrixWorldInverse.compose(O7,R7,sJ.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}var M9=new x,u$=new i0,l$=new i0;class zJ extends m7{constructor(J=50,Q=1,$=0.1,Z=2000){super();this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=J,this.zoom=1,this.near=$,this.far=Z,this.focus=10,this.aspect=Q,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(J,Q){return super.copy(J,Q),this.fov=J.fov,this.zoom=J.zoom,this.near=J.near,this.far=J.far,this.focus=J.focus,this.aspect=J.aspect,this.view=J.view===null?null:Object.assign({},J.view),this.filmGauge=J.filmGauge,this.filmOffset=J.filmOffset,this}setFocalLength(J){let Q=0.5*this.getFilmHeight()/J;this.fov=M7*2*Math.atan(Q),this.updateProjectionMatrix()}getFocalLength(){let J=Math.tan($6*0.5*this.fov);return 0.5*this.getFilmHeight()/J}getEffectiveFOV(){return M7*2*Math.atan(Math.tan($6*0.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(J,Q,$){M9.set(-1,-1,0.5).applyMatrix4(this.projectionMatrixInverse),Q.set(M9.x,M9.y).multiplyScalar(-J/M9.z),M9.set(1,1,0.5).applyMatrix4(this.projectionMatrixInverse),$.set(M9.x,M9.y).multiplyScalar(-J/M9.z)}getViewSize(J,Q){return this.getViewBounds(J,u$,l$),Q.subVectors(l$,u$)}setViewOffset(J,Q,$,Z,K,U){if(this.aspect=J/Q,this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=J,this.view.fullHeight=Q,this.view.offsetX=$,this.view.offsetY=Z,this.view.width=K,this.view.height=U,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let J=this.near,Q=J*Math.tan($6*0.5*this.fov)/this.zoom,$=2*Q,Z=this.aspect*$,K=-0.5*Z,U=this.view;if(this.view!==null&&this.view.enabled){let{fullWidth:H,fullHeight:G}=U;K+=U.offsetX*Z/H,Q-=U.offsetY*$/G,Z*=U.width/H,$*=U.height/G}let W=this.filmOffset;if(W!==0)K+=J*W/this.getFilmWidth();this.projectionMatrix.makePerspective(K,K+Z,Q,Q-$,J,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(J){let Q=super.toJSON(J);if(Q.object.fov=this.fov,Q.object.zoom=this.zoom,Q.object.near=this.near,Q.object.far=this.far,Q.object.focus=this.focus,Q.object.aspect=this.aspect,this.view!==null)Q.object.view=Object.assign({},this.view);return Q.object.filmGauge=this.filmGauge,Q.object.filmOffset=this.filmOffset,Q}}class d7 extends m7{constructor(J=-1,Q=1,$=1,Z=-1,K=0.1,U=2000){super();this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=J,this.right=Q,this.top=$,this.bottom=Z,this.near=K,this.far=U,this.updateProjectionMatrix()}copy(J,Q){return super.copy(J,Q),this.left=J.left,this.right=J.right,this.top=J.top,this.bottom=J.bottom,this.near=J.near,this.far=J.far,this.zoom=J.zoom,this.view=J.view===null?null:Object.assign({},J.view),this}setViewOffset(J,Q,$,Z,K,U){if(this.view===null)this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1};this.view.enabled=!0,this.view.fullWidth=J,this.view.fullHeight=Q,this.view.offsetX=$,this.view.offsetY=Z,this.view.width=K,this.view.height=U,this.updateProjectionMatrix()}clearViewOffset(){if(this.view!==null)this.view.enabled=!1;this.updateProjectionMatrix()}updateProjectionMatrix(){let J=(this.right-this.left)/(2*this.zoom),Q=(this.top-this.bottom)/(2*this.zoom),$=(this.right+this.left)/2,Z=(this.top+this.bottom)/2,K=$-J,U=$+J,W=Z+Q,H=Z-Q;if(this.view!==null&&this.view.enabled){let G=(this.right-this.left)/this.view.fullWidth/this.zoom,Y=(this.top-this.bottom)/this.view.fullHeight/this.zoom;K+=G*this.view.offsetX,U=K+G*this.view.width,W-=Y*this.view.offsetY,H=W-Y*this.view.height}this.projectionMatrix.makeOrthographic(K,U,W,H,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(J){let Q=super.toJSON(J);if(Q.object.zoom=this.zoom,Q.object.left=this.left,Q.object.right=this.right,Q.object.top=this.top,Q.object.bottom=this.bottom,Q.object.near=this.near,Q.object.far=this.far,this.view!==null)Q.object.view=Object.assign({},this.view);return Q}}var K8=-90,U8=1;class cQ extends IJ{constructor(J,Q,$){super();this.type="CubeCamera",this.renderTarget=$,this.coordinateSystem=null,this.activeMipmapLevel=0;let Z=new zJ(K8,U8,J,Q);Z.layers=this.layers,this.add(Z);let K=new zJ(K8,U8,J,Q);K.layers=this.layers,this.add(K);let U=new zJ(K8,U8,J,Q);U.layers=this.layers,this.add(U);let W=new zJ(K8,U8,J,Q);W.layers=this.layers,this.add(W);let H=new zJ(K8,U8,J,Q);H.layers=this.layers,this.add(H);let G=new zJ(K8,U8,J,Q);G.layers=this.layers,this.add(G)}updateCoordinateSystem(){let J=this.coordinateSystem,Q=this.children.concat(),[$,Z,K,U,W,H]=Q;for(let G of Q)this.remove(G);if(J===2000)$.up.set(0,1,0),$.lookAt(1,0,0),Z.up.set(0,1,0),Z.lookAt(-1,0,0),K.up.set(0,0,-1),K.lookAt(0,1,0),U.up.set(0,0,1),U.lookAt(0,-1,0),W.up.set(0,1,0),W.lookAt(0,0,1),H.up.set(0,1,0),H.lookAt(0,0,-1);else if(J===2001)$.up.set(0,-1,0),$.lookAt(-1,0,0),Z.up.set(0,-1,0),Z.lookAt(1,0,0),K.up.set(0,0,1),K.lookAt(0,1,0),U.up.set(0,0,-1),U.lookAt(0,-1,0),W.up.set(0,-1,0),W.lookAt(0,0,1),H.up.set(0,-1,0),H.lookAt(0,0,-1);else throw Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+J);for(let G of Q)this.add(G),G.updateMatrixWorld()}update(J,Q){if(this.parent===null)this.updateMatrixWorld();let{renderTarget:$,activeMipmapLevel:Z}=this;if(this.coordinateSystem!==J.coordinateSystem)this.coordinateSystem=J.coordinateSystem,this.updateCoordinateSystem();let[K,U,W,H,G,Y]=this.children,E=J.getRenderTarget(),N=J.getActiveCubeFace(),X=J.getActiveMipmapLevel(),R=J.xr.enabled;J.xr.enabled=!1;let D=$.texture.generateMipmaps;$.texture.generateMipmaps=!1;let V=!1;if(J.isWebGLRenderer===!0)V=J.state.buffers.depth.getReversed();else V=J.reversedDepthBuffer;if(J.setRenderTarget($,0,Z),V&&J.autoClear===!1)J.clearDepth();if(J.render(Q,K),J.setRenderTarget($,1,Z),V&&J.autoClear===!1)J.clearDepth();if(J.render(Q,U),J.setRenderTarget($,2,Z),V&&J.autoClear===!1)J.clearDepth();if(J.render(Q,W),J.setRenderTarget($,3,Z),V&&J.autoClear===!1)J.clearDepth();if(J.render(Q,H),J.setRenderTarget($,4,Z),V&&J.autoClear===!1)J.clearDepth();if(J.render(Q,G),$.texture.generateMipmaps=D,J.setRenderTarget($,5,Z),V&&J.autoClear===!1)J.clearDepth();J.render(Q,Y),J.setRenderTarget(E,N,X),J.xr.enabled=R,$.texture.needsPMREMUpdate=!0}}class nQ extends zJ{constructor(J=[]){super();this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=J}}var sQ="\\[\\]\\.:\\/",_U=new RegExp("["+sQ+"]","g"),iQ="[^"+sQ+"]",AU="[^"+sQ.replace("\\.","")+"]",CU=/((?:WC+[\/:])*)/.source.replace("WC",iQ),PU=/(WCOD+)?/.source.replace("WCOD",AU),wU=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",iQ),TU=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",iQ),SU=new RegExp("^"+CU+PU+wU+TU+"$"),jU=["material","materials","bones","map"];class rZ{constructor(J,Q,$){let Z=$||s0.parseTrackName(Q);this._targetGroup=J,this._bindings=J.subscribe_(Q,Z)}getValue(J,Q){this.bind();let $=this._targetGroup.nCachedObjects_,Z=this._bindings[$];if(Z!==void 0)Z.getValue(J,Q)}setValue(J,Q){let $=this._bindings;for(let Z=this._targetGroup.nCachedObjects_,K=$.length;Z!==K;++Z)$[Z].setValue(J,Q)}bind(){let J=this._bindings;for(let Q=this._targetGroup.nCachedObjects_,$=J.length;Q!==$;++Q)J[Q].bind()}unbind(){let J=this._bindings;for(let Q=this._targetGroup.nCachedObjects_,$=J.length;Q!==$;++Q)J[Q].unbind()}}class s0{constructor(J,Q,$){this.path=Q,this.parsedPath=$||s0.parseTrackName(Q),this.node=s0.findNode(J,this.parsedPath.nodeName),this.rootNode=J,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(J,Q,$){if(!(J&&J.isAnimationObjectGroup))return new s0(J,Q,$);else return new s0.Composite(J,Q,$)}static sanitizeNodeName(J){return J.replace(/\s/g,"_").replace(_U,"")}static parseTrackName(J){let Q=SU.exec(J);if(Q===null)throw Error("PropertyBinding: Cannot parse trackName: "+J);let $={nodeName:Q[2],objectName:Q[3],objectIndex:Q[4],propertyName:Q[5],propertyIndex:Q[6]},Z=$.nodeName&&$.nodeName.lastIndexOf(".");if(Z!==void 0&&Z!==-1){let K=$.nodeName.substring(Z+1);if(jU.indexOf(K)!==-1)$.nodeName=$.nodeName.substring(0,Z),$.objectName=K}if($.propertyName===null||$.propertyName.length===0)throw Error("PropertyBinding: can not parse propertyName from trackName: "+J);return $}static findNode(J,Q){if(Q===void 0||Q===""||Q==="."||Q===-1||Q===J.name||Q===J.uuid)return J;if(J.skeleton){let $=J.skeleton.getBoneByName(Q);if($!==void 0)return $}if(J.children){let $=function(K){for(let U=0;U<K.length;U++){let W=K[U];if(W.name===Q||W.uuid===Q)return W;let H=$(W.children);if(H)return H}return null},Z=$(J.children);if(Z)return Z}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(J,Q){J[Q]=this.targetObject[this.propertyName]}_getValue_array(J,Q){let $=this.resolvedProperty;for(let Z=0,K=$.length;Z!==K;++Z)J[Q++]=$[Z]}_getValue_arrayElement(J,Q){J[Q]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(J,Q){this.resolvedProperty.toArray(J,Q)}_setValue_direct(J,Q){this.targetObject[this.propertyName]=J[Q]}_setValue_direct_setNeedsUpdate(J,Q){this.targetObject[this.propertyName]=J[Q],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(J,Q){this.targetObject[this.propertyName]=J[Q],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(J,Q){let $=this.resolvedProperty;for(let Z=0,K=$.length;Z!==K;++Z)$[Z]=J[Q++]}_setValue_array_setNeedsUpdate(J,Q){let $=this.resolvedProperty;for(let Z=0,K=$.length;Z!==K;++Z)$[Z]=J[Q++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(J,Q){let $=this.resolvedProperty;for(let Z=0,K=$.length;Z!==K;++Z)$[Z]=J[Q++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(J,Q){this.resolvedProperty[this.propertyIndex]=J[Q]}_setValue_arrayElement_setNeedsUpdate(J,Q){this.resolvedProperty[this.propertyIndex]=J[Q],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(J,Q){this.resolvedProperty[this.propertyIndex]=J[Q],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(J,Q){this.resolvedProperty.fromArray(J,Q)}_setValue_fromArray_setNeedsUpdate(J,Q){this.resolvedProperty.fromArray(J,Q),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(J,Q){this.resolvedProperty.fromArray(J,Q),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(J,Q){this.bind(),this.getValue(J,Q)}_setValue_unbound(J,Q){this.bind(),this.setValue(J,Q)}bind(){let J=this.node,Q=this.parsedPath,$=Q.objectName,Z=Q.propertyName,K=Q.propertyIndex;if(!J)J=s0.findNode(this.rootNode,Q.nodeName),this.node=J;if(this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!J){w0("PropertyBinding: No target node found for track: "+this.path+".");return}if($){let G=Q.objectIndex;switch($){case"materials":if(!J.material){P0("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!J.material.materials){P0("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}J=J.material.materials;break;case"bones":if(!J.skeleton){P0("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}J=J.skeleton.bones;for(let Y=0;Y<J.length;Y++)if(J[Y].name===G){G=Y;break}break;case"map":if("map"in J){J=J.map;break}if(!J.material){P0("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!J.material.map){P0("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}J=J.material.map;break;default:if(J[$]===void 0){P0("PropertyBinding: Can not bind to objectName of node undefined.",this);return}J=J[$]}if(G!==void 0){if(J[G]===void 0){P0("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,J);return}J=J[G]}}let U=J[Z];if(U===void 0){let G=Q.nodeName;P0("PropertyBinding: Trying to update property for track: "+G+"."+Z+" but it wasn't found.",J);return}let W=this.Versioning.None;if(this.targetObject=J,J.isMaterial===!0)W=this.Versioning.NeedsUpdate;else if(J.isObject3D===!0)W=this.Versioning.MatrixWorldNeedsUpdate;let H=this.BindingType.Direct;if(K!==void 0){if(Z==="morphTargetInfluences"){if(!J.geometry){P0("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!J.geometry.morphAttributes){P0("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}if(J.morphTargetDictionary[K]!==void 0)K=J.morphTargetDictionary[K]}H=this.BindingType.ArrayElement,this.resolvedProperty=U,this.propertyIndex=K}else if(U.fromArray!==void 0&&U.toArray!==void 0)H=this.BindingType.HasFromToArray,this.resolvedProperty=U;else if(Array.isArray(U))H=this.BindingType.EntireArray,this.resolvedProperty=U;else this.propertyName=Z;this.getValue=this.GetterByBindingType[H],this.setValue=this.SetterByBindingTypeAndVersioning[H][W]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}s0.Composite=rZ;s0.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};s0.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};s0.prototype.GetterByBindingType=[s0.prototype._getValue_direct,s0.prototype._getValue_array,s0.prototype._getValue_arrayElement,s0.prototype._getValue_toArray];s0.prototype.SetterByBindingTypeAndVersioning=[[s0.prototype._setValue_direct,s0.prototype._setValue_direct_setNeedsUpdate,s0.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[s0.prototype._setValue_array,s0.prototype._setValue_array_setNeedsUpdate,s0.prototype._setValue_array_setMatrixWorldNeedsUpdate],[s0.prototype._setValue_arrayElement,s0.prototype._setValue_arrayElement_setNeedsUpdate,s0.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[s0.prototype._setValue_fromArray,s0.prototype._setValue_fromArray_setNeedsUpdate,s0.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var pX=new Float32Array(1);function oQ(J,Q,$,Z){let K=yU(Z);switch($){case 1021:return J*Q;case 1028:return J*Q/K.components*K.byteLength;case 1029:return J*Q/K.components*K.byteLength;case 1030:return J*Q*2/K.components*K.byteLength;case 1031:return J*Q*2/K.components*K.byteLength;case 1022:return J*Q*3/K.components*K.byteLength;case 1023:return J*Q*4/K.components*K.byteLength;case 1033:return J*Q*4/K.components*K.byteLength;case 33776:case 33777:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*8;case 33778:case 33779:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*16;case 35841:case 35843:return Math.max(J,16)*Math.max(Q,8)/4;case 35840:case 35842:return Math.max(J,8)*Math.max(Q,8)/2;case 36196:case 37492:case 37488:case 37489:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*8;case 37496:case 37490:case 37491:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*16;case 37808:return Math.floor((J+3)/4)*Math.floor((Q+3)/4)*16;case 37809:return Math.floor((J+4)/5)*Math.floor((Q+3)/4)*16;case 37810:return Math.floor((J+4)/5)*Math.floor((Q+4)/5)*16;case 37811:return Math.floor((J+5)/6)*Math.floor((Q+4)/5)*16;case 37812:return Math.floor((J+5)/6)*Math.floor((Q+5)/6)*16;case 37813:return Math.floor((J+7)/8)*Math.floor((Q+4)/5)*16;case 37814:return Math.floor((J+7)/8)*Math.floor((Q+5)/6)*16;case 37815:return Math.floor((J+7)/8)*Math.floor((Q+7)/8)*16;case 37816:return Math.floor((J+9)/10)*Math.floor((Q+4)/5)*16;case 37817:return Math.floor((J+9)/10)*Math.floor((Q+5)/6)*16;case 37818:return Math.floor((J+9)/10)*Math.floor((Q+7)/8)*16;case 37819:return Math.floor((J+9)/10)*Math.floor((Q+9)/10)*16;case 37820:return Math.floor((J+11)/12)*Math.floor((Q+9)/10)*16;case 37821:return Math.floor((J+11)/12)*Math.floor((Q+11)/12)*16;case 36492:case 36494:case 36495:return Math.ceil(J/4)*Math.ceil(Q/4)*16;case 36283:case 36284:return Math.ceil(J/4)*Math.ceil(Q/4)*8;case 36285:case 36286:return Math.ceil(J/4)*Math.ceil(Q/4)*16}throw Error(`Unable to determine texture byte length for ${$} format.`)}function yU(J){switch(J){case 1009:case 1010:return{byteLength:1,components:1};case 1012:case 1011:case 1016:return{byteLength:2,components:1};case 1017:case 1018:return{byteLength:2,components:4};case 1014:case 1013:case 1015:return{byteLength:4,components:1};case 35902:case 35899:return{byteLength:4,components:3}}throw Error(`Unknown texture type ${J}.`)}if(typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"183"}}));if(typeof window<"u")if(window.__THREE__)w0("WARNING: Multiple instances of Three.js being imported.");else window.__THREE__="183";function VK(){let J=null,Q=!1,$=null,Z=null;function K(U,W){$(U,W),Z=J.requestAnimationFrame(K)}return{start:function(){if(Q===!0)return;if($===null)return;Z=J.requestAnimationFrame(K),Q=!0},stop:function(){J.cancelAnimationFrame(Z),Q=!1},setAnimationLoop:function(U){$=U},setContext:function(U){J=U}}}function fU(J){let Q=new WeakMap;function $(H,G){let{array:Y,usage:E}=H,N=Y.byteLength,X=J.createBuffer();J.bindBuffer(G,X),J.bufferData(G,Y,E),H.onUploadCallback();let R;if(Y instanceof Float32Array)R=J.FLOAT;else if(typeof Float16Array<"u"&&Y instanceof Float16Array)R=J.HALF_FLOAT;else if(Y instanceof Uint16Array)if(H.isFloat16BufferAttribute)R=J.HALF_FLOAT;else R=J.UNSIGNED_SHORT;else if(Y instanceof Int16Array)R=J.SHORT;else if(Y instanceof Uint32Array)R=J.UNSIGNED_INT;else if(Y instanceof Int32Array)R=J.INT;else if(Y instanceof Int8Array)R=J.BYTE;else if(Y instanceof Uint8Array)R=J.UNSIGNED_BYTE;else if(Y instanceof Uint8ClampedArray)R=J.UNSIGNED_BYTE;else throw Error("THREE.WebGLAttributes: Unsupported buffer data format: "+Y);return{buffer:X,type:R,bytesPerElement:Y.BYTES_PER_ELEMENT,version:H.version,size:N}}function Z(H,G,Y){let{array:E,updateRanges:N}=G;if(J.bindBuffer(Y,H),N.length===0)J.bufferSubData(Y,0,E);else{N.sort((R,D)=>R.start-D.start);let X=0;for(let R=1;R<N.length;R++){let D=N[X],V=N[R];if(V.start<=D.start+D.count+1)D.count=Math.max(D.count,V.start+V.count-D.start);else++X,N[X]=V}N.length=X+1;for(let R=0,D=N.length;R<D;R++){let V=N[R];J.bufferSubData(Y,V.start*E.BYTES_PER_ELEMENT,E,V.start,V.count)}G.clearUpdateRanges()}G.onUploadCallback()}function K(H){if(H.isInterleavedBufferAttribute)H=H.data;return Q.get(H)}function U(H){if(H.isInterleavedBufferAttribute)H=H.data;let G=Q.get(H);if(G)J.deleteBuffer(G.buffer),Q.delete(H)}function W(H,G){if(H.isInterleavedBufferAttribute)H=H.data;if(H.isGLBufferAttribute){let E=Q.get(H);if(!E||E.version<H.version)Q.set(H,{buffer:H.buffer,type:H.type,bytesPerElement:H.elementSize,version:H.version});return}let Y=Q.get(H);if(Y===void 0)Q.set(H,$(H,G));else if(Y.version<H.version){if(Y.size!==H.array.byteLength)throw Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");Z(Y.buffer,H,G),Y.version=H.version}}return{get:K,remove:U,update:W}}var vU=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,bU=`#ifdef USE_ALPHAHASH
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
#endif`,hU=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,gU=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,xU=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,pU=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,mU=`#ifdef USE_AOMAP
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
#endif`,dU=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,uU=`#ifdef USE_BATCHING
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
#endif`,lU=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,cU=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,nU=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,sU=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,iU=`#ifdef USE_IRIDESCENCE
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
#endif`,oU=`#ifdef USE_BUMPMAP
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
#endif`,aU=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,rU=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,tU=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,eU=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,JW=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,QW=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,$W=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,ZW=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,KW=`#define PI 3.141592653589793
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
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
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
} // validated`,UW=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,WW=`vec3 transformedNormal = objectNormal;
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
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,HW=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,GW=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,YW=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,XW=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,NW="gl_FragColor = linearToOutputTexel( gl_FragColor );",EW=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,qW=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,FW=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,DW=`#ifdef USE_ENVMAP
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
#endif`,OW=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,RW=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,MW=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,kW=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,VW=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,LW=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,BW=`#ifdef USE_GRADIENTMAP
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
}`,zW=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,IW=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,_W=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,AW=`uniform bool receiveShadow;
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
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
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
#endif`,CW=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
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
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
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
	#endif
#endif`,PW=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,wW=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,TW=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,SW=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,jW=`PhysicalMaterial material;
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
#endif`,yW=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
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
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
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
		float v = 0.5 / ( gv + gl );
		return v;
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
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
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
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
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
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
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
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
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
}`,fW=`
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
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
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
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,vW=`#if defined( RE_IndirectDiffuse )
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
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,bW=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,hW=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,gW=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,xW=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,pW=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,mW=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,dW=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,uW=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,lW=`#if defined( USE_POINTS_UV )
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
#endif`,cW=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,nW=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,sW=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,iW=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,oW=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,aW=`#ifdef USE_MORPHTARGETS
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
#endif`,rW=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,tW=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,eW=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,JH=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,QH=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$H=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ZH=`#ifdef USE_NORMALMAP
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
#endif`,KH=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,UH=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,WH=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,HH=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,GH=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,YH=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,XH=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,NH=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,EH=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,qH=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,FH=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,DH=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,OH=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
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
#endif`,RH=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
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
#endif`,MH=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
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
#endif`,kH=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
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
}`,VH=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,LH=`#ifdef USE_SKINNING
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
#endif`,BH=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,zH=`#ifdef USE_SKINNING
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
#endif`,IH=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,_H=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,AH=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,CH=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,PH=`#ifdef USE_TRANSMISSION
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
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,wH=`#ifdef USE_TRANSMISSION
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
#endif`,TH=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,SH=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,jH=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,yH=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,fH=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,vH=`uniform sampler2D t2D;
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
}`,bH=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hH=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gH=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xH=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pH=`#include <common>
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
}`,mH=`#if DEPTH_PACKING == 3200
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
}`,dH=`#define DISTANCE
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
}`,uH=`#define DISTANCE
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
void main () {
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
}`,lH=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,cH=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nH=`uniform float scale;
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
}`,sH=`uniform vec3 diffuse;
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
}`,iH=`#include <common>
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
}`,oH=`uniform vec3 diffuse;
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
}`,aH=`#define LAMBERT
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
}`,rH=`#define LAMBERT
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
}`,tH=`#define MATCAP
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
}`,eH=`#define MATCAP
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
}`,JG=`#define NORMAL
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
}`,QG=`#define NORMAL
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
}`,$G=`#define PHONG
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
}`,ZG=`#define PHONG
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
}`,KG=`#define STANDARD
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
}`,UG=`#define STANDARD
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
}`,WG=`#define TOON
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
}`,HG=`#define TOON
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
}`,GG=`uniform float size;
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
}`,YG=`uniform vec3 diffuse;
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
}`,XG=`#include <common>
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
}`,NG=`uniform vec3 color;
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
}`,EG=`uniform float rotation;
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
}`,qG=`uniform vec3 diffuse;
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
}`,y0={alphahash_fragment:vU,alphahash_pars_fragment:bU,alphamap_fragment:hU,alphamap_pars_fragment:gU,alphatest_fragment:xU,alphatest_pars_fragment:pU,aomap_fragment:mU,aomap_pars_fragment:dU,batching_pars_vertex:uU,batching_vertex:lU,begin_vertex:cU,beginnormal_vertex:nU,bsdfs:sU,iridescence_fragment:iU,bumpmap_pars_fragment:oU,clipping_planes_fragment:aU,clipping_planes_pars_fragment:rU,clipping_planes_pars_vertex:tU,clipping_planes_vertex:eU,color_fragment:JW,color_pars_fragment:QW,color_pars_vertex:$W,color_vertex:ZW,common:KW,cube_uv_reflection_fragment:UW,defaultnormal_vertex:WW,displacementmap_pars_vertex:HW,displacementmap_vertex:GW,emissivemap_fragment:YW,emissivemap_pars_fragment:XW,colorspace_fragment:NW,colorspace_pars_fragment:EW,envmap_fragment:qW,envmap_common_pars_fragment:FW,envmap_pars_fragment:DW,envmap_pars_vertex:OW,envmap_physical_pars_fragment:CW,envmap_vertex:RW,fog_vertex:MW,fog_pars_vertex:kW,fog_fragment:VW,fog_pars_fragment:LW,gradientmap_pars_fragment:BW,lightmap_pars_fragment:zW,lights_lambert_fragment:IW,lights_lambert_pars_fragment:_W,lights_pars_begin:AW,lights_toon_fragment:PW,lights_toon_pars_fragment:wW,lights_phong_fragment:TW,lights_phong_pars_fragment:SW,lights_physical_fragment:jW,lights_physical_pars_fragment:yW,lights_fragment_begin:fW,lights_fragment_maps:vW,lights_fragment_end:bW,logdepthbuf_fragment:hW,logdepthbuf_pars_fragment:gW,logdepthbuf_pars_vertex:xW,logdepthbuf_vertex:pW,map_fragment:mW,map_pars_fragment:dW,map_particle_fragment:uW,map_particle_pars_fragment:lW,metalnessmap_fragment:cW,metalnessmap_pars_fragment:nW,morphinstance_vertex:sW,morphcolor_vertex:iW,morphnormal_vertex:oW,morphtarget_pars_vertex:aW,morphtarget_vertex:rW,normal_fragment_begin:tW,normal_fragment_maps:eW,normal_pars_fragment:JH,normal_pars_vertex:QH,normal_vertex:$H,normalmap_pars_fragment:ZH,clearcoat_normal_fragment_begin:KH,clearcoat_normal_fragment_maps:UH,clearcoat_pars_fragment:WH,iridescence_pars_fragment:HH,opaque_fragment:GH,packing:YH,premultiplied_alpha_fragment:XH,project_vertex:NH,dithering_fragment:EH,dithering_pars_fragment:qH,roughnessmap_fragment:FH,roughnessmap_pars_fragment:DH,shadowmap_pars_fragment:OH,shadowmap_pars_vertex:RH,shadowmap_vertex:MH,shadowmask_pars_fragment:kH,skinbase_vertex:VH,skinning_pars_vertex:LH,skinning_vertex:BH,skinnormal_vertex:zH,specularmap_fragment:IH,specularmap_pars_fragment:_H,tonemapping_fragment:AH,tonemapping_pars_fragment:CH,transmission_fragment:PH,transmission_pars_fragment:wH,uv_pars_fragment:TH,uv_pars_vertex:SH,uv_vertex:jH,worldpos_vertex:yH,background_vert:fH,background_frag:vH,backgroundCube_vert:bH,backgroundCube_frag:hH,cube_vert:gH,cube_frag:xH,depth_vert:pH,depth_frag:mH,distance_vert:dH,distance_frag:uH,equirect_vert:lH,equirect_frag:cH,linedashed_vert:nH,linedashed_frag:sH,meshbasic_vert:iH,meshbasic_frag:oH,meshlambert_vert:aH,meshlambert_frag:rH,meshmatcap_vert:tH,meshmatcap_frag:eH,meshnormal_vert:JG,meshnormal_frag:QG,meshphong_vert:$G,meshphong_frag:ZG,meshphysical_vert:KG,meshphysical_frag:UG,meshtoon_vert:WG,meshtoon_frag:HG,points_vert:GG,points_frag:YG,shadow_vert:XG,shadow_frag:NG,sprite_vert:EG,sprite_frag:qG},W0={common:{diffuse:{value:new l0(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new j0},alphaMap:{value:null},alphaMapTransform:{value:new j0},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new j0}},envmap:{envMap:{value:null},envMapRotation:{value:new j0},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:0.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new j0}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new j0}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new j0},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new j0},normalScale:{value:new i0(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new j0},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new j0}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new j0}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new j0}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:0.00025},fogNear:{value:1},fogFar:{value:2000},fogColor:{value:new l0(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new l0(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new j0},alphaTest:{value:0},uvTransform:{value:new j0}},sprite:{diffuse:{value:new l0(16777215)},opacity:{value:1},center:{value:new i0(0.5,0.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new j0},alphaMap:{value:null},alphaMapTransform:{value:new j0},alphaTest:{value:0}}},eJ={basic:{uniforms:BJ([W0.common,W0.specularmap,W0.envmap,W0.aomap,W0.lightmap,W0.fog]),vertexShader:y0.meshbasic_vert,fragmentShader:y0.meshbasic_frag},lambert:{uniforms:BJ([W0.common,W0.specularmap,W0.envmap,W0.aomap,W0.lightmap,W0.emissivemap,W0.bumpmap,W0.normalmap,W0.displacementmap,W0.fog,W0.lights,{emissive:{value:new l0(0)},envMapIntensity:{value:1}}]),vertexShader:y0.meshlambert_vert,fragmentShader:y0.meshlambert_frag},phong:{uniforms:BJ([W0.common,W0.specularmap,W0.envmap,W0.aomap,W0.lightmap,W0.emissivemap,W0.bumpmap,W0.normalmap,W0.displacementmap,W0.fog,W0.lights,{emissive:{value:new l0(0)},specular:{value:new l0(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:y0.meshphong_vert,fragmentShader:y0.meshphong_frag},standard:{uniforms:BJ([W0.common,W0.envmap,W0.aomap,W0.lightmap,W0.emissivemap,W0.bumpmap,W0.normalmap,W0.displacementmap,W0.roughnessmap,W0.metalnessmap,W0.fog,W0.lights,{emissive:{value:new l0(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:y0.meshphysical_vert,fragmentShader:y0.meshphysical_frag},toon:{uniforms:BJ([W0.common,W0.aomap,W0.lightmap,W0.emissivemap,W0.bumpmap,W0.normalmap,W0.displacementmap,W0.gradientmap,W0.fog,W0.lights,{emissive:{value:new l0(0)}}]),vertexShader:y0.meshtoon_vert,fragmentShader:y0.meshtoon_frag},matcap:{uniforms:BJ([W0.common,W0.bumpmap,W0.normalmap,W0.displacementmap,W0.fog,{matcap:{value:null}}]),vertexShader:y0.meshmatcap_vert,fragmentShader:y0.meshmatcap_frag},points:{uniforms:BJ([W0.points,W0.fog]),vertexShader:y0.points_vert,fragmentShader:y0.points_frag},dashed:{uniforms:BJ([W0.common,W0.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:y0.linedashed_vert,fragmentShader:y0.linedashed_frag},depth:{uniforms:BJ([W0.common,W0.displacementmap]),vertexShader:y0.depth_vert,fragmentShader:y0.depth_frag},normal:{uniforms:BJ([W0.common,W0.bumpmap,W0.normalmap,W0.displacementmap,{opacity:{value:1}}]),vertexShader:y0.meshnormal_vert,fragmentShader:y0.meshnormal_frag},sprite:{uniforms:BJ([W0.sprite,W0.fog]),vertexShader:y0.sprite_vert,fragmentShader:y0.sprite_frag},background:{uniforms:{uvTransform:{value:new j0},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:y0.background_vert,fragmentShader:y0.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new j0}},vertexShader:y0.backgroundCube_vert,fragmentShader:y0.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:y0.cube_vert,fragmentShader:y0.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:y0.equirect_vert,fragmentShader:y0.equirect_frag},distance:{uniforms:BJ([W0.common,W0.displacementmap,{referencePosition:{value:new x},nearDistance:{value:1},farDistance:{value:1000}}]),vertexShader:y0.distance_vert,fragmentShader:y0.distance_frag},shadow:{uniforms:BJ([W0.lights,W0.fog,{color:{value:new l0(0)},opacity:{value:1}}]),vertexShader:y0.shadow_vert,fragmentShader:y0.shadow_frag}};eJ.physical={uniforms:BJ([eJ.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new j0},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new j0},clearcoatNormalScale:{value:new i0(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new j0},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new j0},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new j0},sheen:{value:0},sheenColor:{value:new l0(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new j0},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new j0},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new j0},transmissionSamplerSize:{value:new i0},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new j0},attenuationDistance:{value:0},attenuationColor:{value:new l0(0)},specularColor:{value:new l0(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new j0},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new j0},anisotropyVector:{value:new i0},anisotropyMap:{value:null},anisotropyMapTransform:{value:new j0}}]),vertexShader:y0.meshphysical_vert,fragmentShader:y0.meshphysical_frag};var u7={r:0,b:0,g:0},d9=new iJ,FG=new WJ;function DG(J,Q,$,Z,K,U){let W=new l0(0),H=K===!0?0:1,G,Y,E=null,N=0,X=null;function R(z){let B=z.isScene===!0?z.background:null;if(B&&B.isTexture){let L=z.backgroundBlurriness>0;B=Q.get(B,L)}return B}function D(z){let B=!1,L=R(z);if(L===null)q(W,H);else if(L&&L.isColor)q(L,1),B=!0;let w=J.xr.getEnvironmentBlendMode();if(w==="additive")$.buffers.color.setClear(0,0,0,1,U);else if(w==="alpha-blend")$.buffers.color.setClear(0,0,0,0,U);if(J.autoClear||B)$.buffers.depth.setTest(!0),$.buffers.depth.setMask(!0),$.buffers.color.setMask(!0),J.clear(J.autoClearColor,J.autoClearDepth,J.autoClearStencil)}function V(z,B){let L=R(B);if(L&&(L.isCubeTexture||L.mapping===j8)){if(Y===void 0)Y=new wJ(new M8(1,1,1),new hJ({name:"BackgroundCubeMaterial",uniforms:g9(eJ.backgroundCube.uniforms),vertexShader:eJ.backgroundCube.vertexShader,fragmentShader:eJ.backgroundCube.fragmentShader,side:CJ,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),Y.geometry.deleteAttribute("normal"),Y.geometry.deleteAttribute("uv"),Y.onBeforeRender=function(w,_,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(Y.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),Z.update(Y);if(d9.copy(B.backgroundRotation),d9.x*=-1,d9.y*=-1,d9.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1)d9.y*=-1,d9.z*=-1;if(Y.material.uniforms.envMap.value=L,Y.material.uniforms.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,Y.material.uniforms.backgroundBlurriness.value=B.backgroundBlurriness,Y.material.uniforms.backgroundIntensity.value=B.backgroundIntensity,Y.material.uniforms.backgroundRotation.value.setFromMatrix4(FG.makeRotationFromEuler(d9)),Y.material.toneMapped=x0.getTransfer(L.colorSpace)!==JJ,E!==L||N!==L.version||X!==J.toneMapping)Y.material.needsUpdate=!0,E=L,N=L.version,X=J.toneMapping;Y.layers.enableAll(),z.unshift(Y,Y.geometry,Y.material,0,0,null)}else if(L&&L.isTexture){if(G===void 0)G=new wJ(new x8(2,2),new hJ({name:"BackgroundMaterial",uniforms:g9(eJ.background.uniforms),vertexShader:eJ.background.vertexShader,fragmentShader:eJ.background.fragmentShader,side:Y8,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),G.geometry.deleteAttribute("normal"),Object.defineProperty(G.material,"map",{get:function(){return this.uniforms.t2D.value}}),Z.update(G);if(G.material.uniforms.t2D.value=L,G.material.uniforms.backgroundIntensity.value=B.backgroundIntensity,G.material.toneMapped=x0.getTransfer(L.colorSpace)!==JJ,L.matrixAutoUpdate===!0)L.updateMatrix();if(G.material.uniforms.uvTransform.value.copy(L.matrix),E!==L||N!==L.version||X!==J.toneMapping)G.material.needsUpdate=!0,E=L,N=L.version,X=J.toneMapping;G.layers.enableAll(),z.unshift(G,G.geometry,G.material,0,0,null)}}function q(z,B){z.getRGB(u7,SQ(J)),$.buffers.color.setClear(u7.r,u7.g,u7.b,B,U)}function F(){if(Y!==void 0)Y.geometry.dispose(),Y.material.dispose(),Y=void 0;if(G!==void 0)G.geometry.dispose(),G.material.dispose(),G=void 0}return{getClearColor:function(){return W},setClearColor:function(z,B=1){W.set(z),H=B,q(W,H)},getClearAlpha:function(){return H},setClearAlpha:function(z){H=z,q(W,H)},render:D,addToRenderList:V,dispose:F}}function OG(J,Q){let $=J.getParameter(J.MAX_VERTEX_ATTRIBS),Z={},K=X(null),U=K,W=!1;function H(A,b,u,j,p){let v=!1,h=N(A,j,u,b);if(U!==h)U=h,Y(U.object);if(v=R(A,j,u,p),v)D(A,j,u,p);if(p!==null)Q.update(p,J.ELEMENT_ARRAY_BUFFER);if(v||W){if(W=!1,L(A,b,u,j),p!==null)J.bindBuffer(J.ELEMENT_ARRAY_BUFFER,Q.get(p).buffer)}}function G(){return J.createVertexArray()}function Y(A){return J.bindVertexArray(A)}function E(A){return J.deleteVertexArray(A)}function N(A,b,u,j){let p=j.wireframe===!0,v=Z[b.id];if(v===void 0)v={},Z[b.id]=v;let h=A.isInstancedMesh===!0?A.id:0,i=v[h];if(i===void 0)i={},v[h]=i;let n=i[u.id];if(n===void 0)n={},i[u.id]=n;let J0=n[p];if(J0===void 0)J0=X(G()),n[p]=J0;return J0}function X(A){let b=[],u=[],j=[];for(let p=0;p<$;p++)b[p]=0,u[p]=0,j[p]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:b,enabledAttributes:u,attributeDivisors:j,object:A,attributes:{},index:null}}function R(A,b,u,j){let p=U.attributes,v=b.attributes,h=0,i=u.getAttributes();for(let n in i)if(i[n].location>=0){let q0=p[n],H0=v[n];if(H0===void 0){if(n==="instanceMatrix"&&A.instanceMatrix)H0=A.instanceMatrix;if(n==="instanceColor"&&A.instanceColor)H0=A.instanceColor}if(q0===void 0)return!0;if(q0.attribute!==H0)return!0;if(H0&&q0.data!==H0.data)return!0;h++}if(U.attributesNum!==h)return!0;if(U.index!==j)return!0;return!1}function D(A,b,u,j){let p={},v=b.attributes,h=0,i=u.getAttributes();for(let n in i)if(i[n].location>=0){let q0=v[n];if(q0===void 0){if(n==="instanceMatrix"&&A.instanceMatrix)q0=A.instanceMatrix;if(n==="instanceColor"&&A.instanceColor)q0=A.instanceColor}let H0={};if(H0.attribute=q0,q0&&q0.data)H0.data=q0.data;p[n]=H0,h++}U.attributes=p,U.attributesNum=h,U.index=j}function V(){let A=U.newAttributes;for(let b=0,u=A.length;b<u;b++)A[b]=0}function q(A){F(A,0)}function F(A,b){let{newAttributes:u,enabledAttributes:j,attributeDivisors:p}=U;if(u[A]=1,j[A]===0)J.enableVertexAttribArray(A),j[A]=1;if(p[A]!==b)J.vertexAttribDivisor(A,b),p[A]=b}function z(){let{newAttributes:A,enabledAttributes:b}=U;for(let u=0,j=b.length;u<j;u++)if(b[u]!==A[u])J.disableVertexAttribArray(u),b[u]=0}function B(A,b,u,j,p,v,h){if(h===!0)J.vertexAttribIPointer(A,b,u,p,v);else J.vertexAttribPointer(A,b,u,j,p,v)}function L(A,b,u,j){V();let p=j.attributes,v=u.getAttributes(),h=b.defaultAttributeValues;for(let i in v){let n=v[i];if(n.location>=0){let J0=p[i];if(J0===void 0){if(i==="instanceMatrix"&&A.instanceMatrix)J0=A.instanceMatrix;if(i==="instanceColor"&&A.instanceColor)J0=A.instanceColor}if(J0!==void 0){let{normalized:q0,itemSize:H0}=J0,QJ=Q.get(J0);if(QJ===void 0)continue;let{buffer:c0,type:o,bytesPerElement:K0}=QJ,F0=o===J.INT||o===J.UNSIGNED_INT||J0.gpuType===g6;if(J0.isInterleavedBufferAttribute){let X0=J0.data,A0=X0.stride,p0=J0.offset;if(X0.isInstancedInterleavedBuffer){for(let m0=0;m0<n.locationSize;m0++)F(n.location+m0,X0.meshPerAttribute);if(A.isInstancedMesh!==!0&&j._maxInstanceCount===void 0)j._maxInstanceCount=X0.meshPerAttribute*X0.count}else for(let m0=0;m0<n.locationSize;m0++)q(n.location+m0);J.bindBuffer(J.ARRAY_BUFFER,c0);for(let m0=0;m0<n.locationSize;m0++)B(n.location+m0,H0/n.locationSize,o,q0,A0*K0,(p0+H0/n.locationSize*m0)*K0,F0)}else{if(J0.isInstancedBufferAttribute){for(let X0=0;X0<n.locationSize;X0++)F(n.location+X0,J0.meshPerAttribute);if(A.isInstancedMesh!==!0&&j._maxInstanceCount===void 0)j._maxInstanceCount=J0.meshPerAttribute*J0.count}else for(let X0=0;X0<n.locationSize;X0++)q(n.location+X0);J.bindBuffer(J.ARRAY_BUFFER,c0);for(let X0=0;X0<n.locationSize;X0++)B(n.location+X0,H0/n.locationSize,o,q0,H0*K0,H0/n.locationSize*X0*K0,F0)}}else if(h!==void 0){let q0=h[i];if(q0!==void 0)switch(q0.length){case 2:J.vertexAttrib2fv(n.location,q0);break;case 3:J.vertexAttrib3fv(n.location,q0);break;case 4:J.vertexAttrib4fv(n.location,q0);break;default:J.vertexAttrib1fv(n.location,q0)}}}}z()}function w(){P();for(let A in Z){let b=Z[A];for(let u in b){let j=b[u];for(let p in j){let v=j[p];for(let h in v)E(v[h].object),delete v[h];delete j[p]}}delete Z[A]}}function _(A){if(Z[A.id]===void 0)return;let b=Z[A.id];for(let u in b){let j=b[u];for(let p in j){let v=j[p];for(let h in v)E(v[h].object),delete v[h];delete j[p]}}delete Z[A.id]}function C(A){for(let b in Z){let u=Z[b];for(let j in u){let p=u[j];if(p[A.id]===void 0)continue;let v=p[A.id];for(let h in v)E(v[h].object),delete v[h];delete p[A.id]}}}function O(A){for(let b in Z){let u=Z[b],j=A.isInstancedMesh===!0?A.id:0,p=u[j];if(p===void 0)continue;for(let v in p){let h=p[v];for(let i in h)E(h[i].object),delete h[i];delete p[v]}if(delete u[j],Object.keys(u).length===0)delete Z[b]}}function P(){if(y(),W=!0,U===K)return;U=K,Y(U.object)}function y(){K.geometry=null,K.program=null,K.wireframe=!1}return{setup:H,reset:P,resetDefaultState:y,dispose:w,releaseStatesOfGeometry:_,releaseStatesOfObject:O,releaseStatesOfProgram:C,initAttributes:V,enableAttribute:q,disableUnusedAttributes:z}}function RG(J,Q,$){let Z;function K(Y){Z=Y}function U(Y,E){J.drawArrays(Z,Y,E),$.update(E,Z,1)}function W(Y,E,N){if(N===0)return;J.drawArraysInstanced(Z,Y,E,N),$.update(E,Z,N)}function H(Y,E,N){if(N===0)return;Q.get("WEBGL_multi_draw").multiDrawArraysWEBGL(Z,Y,0,E,0,N);let R=0;for(let D=0;D<N;D++)R+=E[D];$.update(R,Z,1)}function G(Y,E,N,X){if(N===0)return;let R=Q.get("WEBGL_multi_draw");if(R===null)for(let D=0;D<Y.length;D++)W(Y[D],E[D],X[D]);else{R.multiDrawArraysInstancedWEBGL(Z,Y,0,E,0,X,0,N);let D=0;for(let V=0;V<N;V++)D+=E[V]*X[V];$.update(D,Z,1)}}this.setMode=K,this.render=U,this.renderInstances=W,this.renderMultiDraw=H,this.renderMultiDrawInstances=G}function MG(J,Q,$,Z){let K;function U(){if(K!==void 0)return K;if(Q.has("EXT_texture_filter_anisotropic")===!0){let C=Q.get("EXT_texture_filter_anisotropic");K=J.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else K=0;return K}function W(C){if(C!==rJ&&Z.convert(C)!==J.getParameter(J.IMPLEMENTATION_COLOR_READ_FORMAT))return!1;return!0}function H(C){let O=C===Y9&&(Q.has("EXT_color_buffer_half_float")||Q.has("EXT_color_buffer_float"));if(C!==lJ&&Z.convert(C)!==J.getParameter(J.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==G9&&!O)return!1;return!0}function G(C){if(C==="highp"){if(J.getShaderPrecisionFormat(J.VERTEX_SHADER,J.HIGH_FLOAT).precision>0&&J.getShaderPrecisionFormat(J.FRAGMENT_SHADER,J.HIGH_FLOAT).precision>0)return"highp";C="mediump"}if(C==="mediump"){if(J.getShaderPrecisionFormat(J.VERTEX_SHADER,J.MEDIUM_FLOAT).precision>0&&J.getShaderPrecisionFormat(J.FRAGMENT_SHADER,J.MEDIUM_FLOAT).precision>0)return"mediump"}return"lowp"}let Y=$.precision!==void 0?$.precision:"highp",E=G(Y);if(E!==Y)w0("WebGLRenderer:",Y,"not supported, using",E,"instead."),Y=E;let N=$.logarithmicDepthBuffer===!0,X=$.reversedDepthBuffer===!0&&Q.has("EXT_clip_control"),R=J.getParameter(J.MAX_TEXTURE_IMAGE_UNITS),D=J.getParameter(J.MAX_VERTEX_TEXTURE_IMAGE_UNITS),V=J.getParameter(J.MAX_TEXTURE_SIZE),q=J.getParameter(J.MAX_CUBE_MAP_TEXTURE_SIZE),F=J.getParameter(J.MAX_VERTEX_ATTRIBS),z=J.getParameter(J.MAX_VERTEX_UNIFORM_VECTORS),B=J.getParameter(J.MAX_VARYING_VECTORS),L=J.getParameter(J.MAX_FRAGMENT_UNIFORM_VECTORS),w=J.getParameter(J.MAX_SAMPLES),_=J.getParameter(J.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:U,getMaxPrecision:G,textureFormatReadable:W,textureTypeReadable:H,precision:Y,logarithmicDepthBuffer:N,reversedDepthBuffer:X,maxTextures:R,maxVertexTextures:D,maxTextureSize:V,maxCubemapSize:q,maxAttributes:F,maxVertexUniforms:z,maxVaryings:B,maxFragmentUniforms:L,maxSamples:w,samples:_}}function kG(J){let Q=this,$=null,Z=0,K=!1,U=!1,W=new W9,H=new j0,G={value:null,needsUpdate:!1};this.uniform=G,this.numPlanes=0,this.numIntersection=0,this.init=function(N,X){let R=N.length!==0||X||Z!==0||K;return K=X,Z=N.length,R},this.beginShadows=function(){U=!0,E(null)},this.endShadows=function(){U=!1},this.setGlobalState=function(N,X){$=E(N,X,0)},this.setState=function(N,X,R){let{clippingPlanes:D,clipIntersection:V,clipShadows:q}=N,F=J.get(N);if(!K||D===null||D.length===0||U&&!q)if(U)E(null);else Y();else{let z=U?0:Z,B=z*4,L=F.clippingState||null;G.value=L,L=E(D,X,B,R);for(let w=0;w!==B;++w)L[w]=$[w];F.clippingState=L,this.numIntersection=V?this.numPlanes:0,this.numPlanes+=z}};function Y(){if(G.value!==$)G.value=$,G.needsUpdate=Z>0;Q.numPlanes=Z,Q.numIntersection=0}function E(N,X,R,D){let V=N!==null?N.length:0,q=null;if(V!==0){if(q=G.value,D!==!0||q===null){let F=R+V*4,z=X.matrixWorldInverse;if(H.getNormalMatrix(z),q===null||q.length<F)q=new Float32Array(F);for(let B=0,L=R;B!==V;++B,L+=4)W.copy(N[B]).applyMatrix4(z,H),W.normal.toArray(q,L),q[L+3]=W.constant}G.value=q,G.needsUpdate=!0}return Q.numPlanes=V,Q.numIntersection=0,q}}var z9=4,tZ=[0.125,0.215,0.35,0.446,0.526,0.582],l9=20,VG=256,m8=new d7,eZ=new l0,aQ=null,rQ=0,tQ=0,eQ=!1,LG=new x;class $${constructor(J){this._renderer=J,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(J,Q=0,$=0.1,Z=100,K={}){let{size:U=256,position:W=LG}=K;aQ=this._renderer.getRenderTarget(),rQ=this._renderer.getActiveCubeFace(),tQ=this._renderer.getActiveMipmapLevel(),eQ=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(U);let H=this._allocateTargets();if(H.depthBuffer=!0,this._sceneToCubeUV(J,$,Z,H,W),Q>0)this._blur(H,0,0,Q);return this._applyPMREM(H),this._cleanup(H),H}fromEquirectangular(J,Q=null){return this._fromTexture(J,Q)}fromCubemap(J,Q=null){return this._fromTexture(J,Q)}compileCubemapShader(){if(this._cubemapMaterial===null)this._cubemapMaterial=$K(),this._compileMaterial(this._cubemapMaterial)}compileEquirectangularShader(){if(this._equirectMaterial===null)this._equirectMaterial=QK(),this._compileMaterial(this._equirectMaterial)}dispose(){if(this._dispose(),this._cubemapMaterial!==null)this._cubemapMaterial.dispose();if(this._equirectMaterial!==null)this._equirectMaterial.dispose();if(this._backgroundBox!==null)this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose()}_setSize(J){this._lodMax=Math.floor(Math.log2(J)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){if(this._blurMaterial!==null)this._blurMaterial.dispose();if(this._ggxMaterial!==null)this._ggxMaterial.dispose();if(this._pingPongRenderTarget!==null)this._pingPongRenderTarget.dispose();for(let J=0;J<this._lodMeshes.length;J++)this._lodMeshes[J].geometry.dispose()}_cleanup(J){this._renderer.setRenderTarget(aQ,rQ,tQ),this._renderer.xr.enabled=eQ,J.scissorTest=!1,k8(J,0,0,J.width,J.height)}_fromTexture(J,Q){if(J.mapping===N8||J.mapping===T9)this._setSize(J.image.length===0?16:J.image[0].width||J.image[0].image.width);else this._setSize(J.image.width/4);aQ=this._renderer.getRenderTarget(),rQ=this._renderer.getActiveCubeFace(),tQ=this._renderer.getActiveMipmapLevel(),eQ=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let $=Q||this._allocateTargets();return this._textureToCubeUV(J,$),this._applyPMREM($),this._cleanup($),$}_allocateTargets(){let J=3*Math.max(this._cubeSize,112),Q=4*this._cubeSize,$={magFilter:PJ,minFilter:PJ,generateMipmaps:!1,type:Y9,format:rJ,colorSpace:v8,depthBuffer:!1},Z=JK(J,Q,$);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==J||this._pingPongRenderTarget.height!==Q){if(this._pingPongRenderTarget!==null)this._dispose();this._pingPongRenderTarget=JK(J,Q,$);let{_lodMax:K}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=BG(K)),this._blurMaterial=IG(K,J,Q),this._ggxMaterial=zG(K,J,Q)}return Z}_compileMaterial(J){let Q=new wJ(new LJ,J);this._renderer.compile(Q,m8)}_sceneToCubeUV(J,Q,$,Z,K){let H=new zJ(90,1,Q,$),G=[1,-1,1,1,1,1],Y=[1,1,1,-1,-1,-1],E=this._renderer,N=E.autoClear,X=E.toneMapping;if(E.getClearColor(eZ),E.toneMapping=uJ,E.autoClear=!1,E.state.buffers.depth.getReversed())E.setRenderTarget(Z),E.clearDepth(),E.setRenderTarget(null);if(this._backgroundBox===null)this._backgroundBox=new wJ(new M8,new D8({name:"PMREM.Background",side:CJ,depthWrite:!1,depthTest:!1}));let D=this._backgroundBox,V=D.material,q=!1,F=J.background;if(F){if(F.isColor)V.color.copy(F),J.background=null,q=!0}else V.color.copy(eZ),q=!0;for(let z=0;z<6;z++){let B=z%3;if(B===0)H.up.set(0,G[z],0),H.position.set(K.x,K.y,K.z),H.lookAt(K.x+Y[z],K.y,K.z);else if(B===1)H.up.set(0,0,G[z]),H.position.set(K.x,K.y,K.z),H.lookAt(K.x,K.y+Y[z],K.z);else H.up.set(0,G[z],0),H.position.set(K.x,K.y,K.z),H.lookAt(K.x,K.y,K.z+Y[z]);let L=this._cubeSize;if(k8(Z,B*L,z>2?L:0,L,L),E.setRenderTarget(Z),q)E.render(D,H);E.render(J,H)}E.toneMapping=X,E.autoClear=N,J.background=F}_textureToCubeUV(J,Q){let $=this._renderer,Z=J.mapping===N8||J.mapping===T9;if(Z){if(this._cubemapMaterial===null)this._cubemapMaterial=$K();this._cubemapMaterial.uniforms.flipEnvMap.value=J.isRenderTargetTexture===!1?-1:1}else if(this._equirectMaterial===null)this._equirectMaterial=QK();let K=Z?this._cubemapMaterial:this._equirectMaterial,U=this._lodMeshes[0];U.material=K;let W=K.uniforms;W.envMap.value=J;let H=this._cubeSize;k8(Q,0,0,3*H,2*H),$.setRenderTarget(Q),$.render(U,m8)}_applyPMREM(J){let Q=this._renderer,$=Q.autoClear;Q.autoClear=!1;let Z=this._lodMeshes.length;for(let K=1;K<Z;K++)this._applyGGXFilter(J,K-1,K);Q.autoClear=$}_applyGGXFilter(J,Q,$){let Z=this._renderer,K=this._pingPongRenderTarget,U=this._ggxMaterial,W=this._lodMeshes[$];W.material=U;let H=U.uniforms,G=$/(this._lodMeshes.length-1),Y=Q/(this._lodMeshes.length-1),E=Math.sqrt(G*G-Y*Y),N=0+G*1.25,X=E*N,{_lodMax:R}=this,D=this._sizeLods[$],V=3*D*($>R-z9?$-R+z9:0),q=4*(this._cubeSize-D);H.envMap.value=J.texture,H.roughness.value=X,H.mipInt.value=R-Q,k8(K,V,q,3*D,2*D),Z.setRenderTarget(K),Z.render(W,m8),H.envMap.value=K.texture,H.roughness.value=0,H.mipInt.value=R-$,k8(J,V,q,3*D,2*D),Z.setRenderTarget(J),Z.render(W,m8)}_blur(J,Q,$,Z,K){let U=this._pingPongRenderTarget;this._halfBlur(J,U,Q,$,Z,"latitudinal",K),this._halfBlur(U,J,$,$,Z,"longitudinal",K)}_halfBlur(J,Q,$,Z,K,U,W){let H=this._renderer,G=this._blurMaterial;if(U!=="latitudinal"&&U!=="longitudinal")P0("blur direction must be either latitudinal or longitudinal!");let Y=3,E=this._lodMeshes[Z];E.material=G;let N=G.uniforms,X=this._sizeLods[$]-1,R=isFinite(K)?Math.PI/(2*X):2*Math.PI/(2*l9-1),D=K/R,V=isFinite(K)?1+Math.floor(Y*D):l9;if(V>l9)w0(`sigmaRadians, ${K}, is too large and will clip, as it requested ${V} samples when the maximum is set to ${l9}`);let q=[],F=0;for(let _=0;_<l9;++_){let C=_/D,O=Math.exp(-C*C/2);if(q.push(O),_===0)F+=O;else if(_<V)F+=2*O}for(let _=0;_<q.length;_++)q[_]=q[_]/F;if(N.envMap.value=J.texture,N.samples.value=V,N.weights.value=q,N.latitudinal.value=U==="latitudinal",W)N.poleAxis.value=W;let{_lodMax:z}=this;N.dTheta.value=R,N.mipInt.value=z-$;let B=this._sizeLods[Z],L=3*B*(Z>z-z9?Z-z+z9:0),w=4*(this._cubeSize-B);k8(Q,L,w,3*B,2*B),H.setRenderTarget(Q),H.render(E,m8)}}function BG(J){let Q=[],$=[],Z=[],K=J,U=J-z9+1+tZ.length;for(let W=0;W<U;W++){let H=Math.pow(2,K);Q.push(H);let G=1/H;if(W>J-z9)G=tZ[W-J+z9-1];else if(W===0)G=0;$.push(G);let Y=1/(H-2),E=-Y,N=1+Y,X=[E,E,N,E,N,N,E,E,N,N,E,N],R=6,D=6,V=3,q=2,F=1,z=new Float32Array(V*D*R),B=new Float32Array(q*D*R),L=new Float32Array(F*D*R);for(let _=0;_<R;_++){let C=_%3*2/3-1,O=_>2?0:-1,P=[C,O,0,C+0.6666666666666666,O,0,C+0.6666666666666666,O+1,0,C,O,0,C+0.6666666666666666,O+1,0,C,O+1,0];z.set(P,V*D*_),B.set(X,q*D*_);let y=[_,_,_,_,_,_];L.set(y,F*D*_)}let w=new LJ;if(w.setAttribute("position",new vJ(z,V)),w.setAttribute("uv",new vJ(B,q)),w.setAttribute("faceIndex",new vJ(L,F)),Z.push(new wJ(w,null)),K>z9)K--}return{lodMeshes:Z,sizeLods:Q,sigmas:$}}function JK(J,Q,$){let Z=new bJ(J,Q,$);return Z.texture.mapping=j8,Z.texture.name="PMREM.cubeUv",Z.scissorTest=!0,Z}function k8(J,Q,$,Z,K){J.viewport.set(Q,$,Z,K),J.scissor.set(Q,$,Z,K)}function zG(J,Q,$){return new hJ({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:VG,CUBEUV_TEXEL_WIDTH:1/Q,CUBEUV_TEXEL_HEIGHT:1/$,CUBEUV_MAX_MIP:`${J}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:c7(),fragmentShader:`

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
		`,blending:aJ,depthTest:!1,depthWrite:!1})}function IG(J,Q,$){let Z=new Float32Array(l9),K=new x(0,1,0);return new hJ({name:"SphericalGaussianBlur",defines:{n:l9,CUBEUV_TEXEL_WIDTH:1/Q,CUBEUV_TEXEL_HEIGHT:1/$,CUBEUV_MAX_MIP:`${J}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:Z},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:K}},vertexShader:c7(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:aJ,depthTest:!1,depthWrite:!1})}function QK(){return new hJ({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:c7(),fragmentShader:`

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
		`,blending:aJ,depthTest:!1,depthWrite:!1})}function $K(){return new hJ({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:c7(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:aJ,depthTest:!1,depthWrite:!1})}function c7(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class U$ extends bJ{constructor(J=1,Q={}){super(J,J,Q);this.isWebGLCubeRenderTarget=!0;let $={width:J,height:J,depth:1},Z=[$,$,$,$,$,$];this.texture=new g7(Z),this._setTextureOptions(Q),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(J,Q){this.texture.type=Q.type,this.texture.colorSpace=Q.colorSpace,this.texture.generateMipmaps=Q.generateMipmaps,this.texture.minFilter=Q.minFilter,this.texture.magFilter=Q.magFilter;let $={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},Z=new M8(5,5,5),K=new hJ({name:"CubemapFromEquirect",uniforms:g9($.uniforms),vertexShader:$.vertexShader,fragmentShader:$.fragmentShader,side:CJ,blending:aJ});K.uniforms.tEquirect.value=Q;let U=new wJ(Z,K),W=Q.minFilter;if(Q.minFilter===S9)Q.minFilter=PJ;return new cQ(1,10,this).update(J,U),Q.minFilter=W,U.geometry.dispose(),U.material.dispose(),this}clear(J,Q=!0,$=!0,Z=!0){let K=J.getRenderTarget();for(let U=0;U<6;U++)J.setRenderTarget(this,U),J.clear(Q,$,Z);J.setRenderTarget(K)}}function _G(J){let Q=new WeakMap,$=new WeakMap,Z=null;function K(X,R=!1){if(X===null||X===void 0)return null;if(R)return W(X);return U(X)}function U(X){if(X&&X.isTexture){let R=X.mapping;if(R===L7||R===B7)if(Q.has(X)){let D=Q.get(X).texture;return H(D,X.mapping)}else{let D=X.image;if(D&&D.height>0){let V=new U$(D.height);return V.fromEquirectangularTexture(J,X),Q.set(X,V),X.addEventListener("dispose",Y),H(V.texture,X.mapping)}else return null}}return X}function W(X){if(X&&X.isTexture){let R=X.mapping,D=R===L7||R===B7,V=R===N8||R===T9;if(D||V){let q=$.get(X),F=q!==void 0?q.texture.pmremVersion:0;if(X.isRenderTargetTexture&&X.pmremVersion!==F){if(Z===null)Z=new $$(J);return q=D?Z.fromEquirectangular(X,q):Z.fromCubemap(X,q),q.texture.pmremVersion=X.pmremVersion,$.set(X,q),q.texture}else if(q!==void 0)return q.texture;else{let z=X.image;if(D&&z&&z.height>0||V&&z&&G(z)){if(Z===null)Z=new $$(J);return q=D?Z.fromEquirectangular(X):Z.fromCubemap(X),q.texture.pmremVersion=X.pmremVersion,$.set(X,q),X.addEventListener("dispose",E),q.texture}else return null}}}return X}function H(X,R){if(R===L7)X.mapping=N8;else if(R===B7)X.mapping=T9;return X}function G(X){let R=0,D=6;for(let V=0;V<D;V++)if(X[V]!==void 0)R++;return R===D}function Y(X){let R=X.target;R.removeEventListener("dispose",Y);let D=Q.get(R);if(D!==void 0)Q.delete(R),D.dispose()}function E(X){let R=X.target;R.removeEventListener("dispose",E);let D=$.get(R);if(D!==void 0)$.delete(R),D.dispose()}function N(){if(Q=new WeakMap,$=new WeakMap,Z!==null)Z.dispose(),Z=null}return{get:K,dispose:N}}function AG(J){let Q={};function $(Z){if(Q[Z]!==void 0)return Q[Z];let K=J.getExtension(Z);return Q[Z]=K,K}return{has:function(Z){return $(Z)!==null},init:function(){$("EXT_color_buffer_float"),$("WEBGL_clip_cull_distance"),$("OES_texture_float_linear"),$("EXT_color_buffer_half_float"),$("WEBGL_multisampled_render_to_texture"),$("WEBGL_render_shared_exponent")},get:function(Z){let K=$(Z);if(K===null)w8("WebGLRenderer: "+Z+" extension not supported.");return K}}}function CG(J,Q,$,Z){let K={},U=new WeakMap;function W(N){let X=N.target;if(X.index!==null)Q.remove(X.index);for(let D in X.attributes)Q.remove(X.attributes[D]);X.removeEventListener("dispose",W),delete K[X.id];let R=U.get(X);if(R)Q.remove(R),U.delete(X);if(Z.releaseStatesOfGeometry(X),X.isInstancedBufferGeometry===!0)delete X._maxInstanceCount;$.memory.geometries--}function H(N,X){if(K[X.id]===!0)return X;return X.addEventListener("dispose",W),K[X.id]=!0,$.memory.geometries++,X}function G(N){let X=N.attributes;for(let R in X)Q.update(X[R],J.ARRAY_BUFFER)}function Y(N){let X=[],R=N.index,D=N.attributes.position,V=0;if(D===void 0)return;if(R!==null){let z=R.array;V=R.version;for(let B=0,L=z.length;B<L;B+=3){let w=z[B+0],_=z[B+1],C=z[B+2];X.push(w,_,_,C,C,w)}}else{let z=D.array;V=D.version;for(let B=0,L=z.length/3-1;B<L;B+=3){let w=B+0,_=B+1,C=B+2;X.push(w,_,_,C,C,w)}}let q=new(D.count>=65535?v7:f7)(X,1);q.version=V;let F=U.get(N);if(F)Q.remove(F);U.set(N,q)}function E(N){let X=U.get(N);if(X){let R=N.index;if(R!==null){if(X.version<R.version)Y(N)}}else Y(N);return U.get(N)}return{get:H,update:G,getWireframeAttribute:E}}function PG(J,Q,$){let Z;function K(X){Z=X}let U,W;function H(X){U=X.type,W=X.bytesPerElement}function G(X,R){J.drawElements(Z,R,U,X*W),$.update(R,Z,1)}function Y(X,R,D){if(D===0)return;J.drawElementsInstanced(Z,R,U,X*W,D),$.update(R,Z,D)}function E(X,R,D){if(D===0)return;Q.get("WEBGL_multi_draw").multiDrawElementsWEBGL(Z,R,0,U,X,0,D);let q=0;for(let F=0;F<D;F++)q+=R[F];$.update(q,Z,1)}function N(X,R,D,V){if(D===0)return;let q=Q.get("WEBGL_multi_draw");if(q===null)for(let F=0;F<X.length;F++)Y(X[F]/W,R[F],V[F]);else{q.multiDrawElementsInstancedWEBGL(Z,R,0,U,X,0,V,0,D);let F=0;for(let z=0;z<D;z++)F+=R[z]*V[z];$.update(F,Z,1)}}this.setMode=K,this.setIndex=H,this.render=G,this.renderInstances=Y,this.renderMultiDraw=E,this.renderMultiDrawInstances=N}function wG(J){let Q={geometries:0,textures:0},$={frame:0,calls:0,triangles:0,points:0,lines:0};function Z(U,W,H){switch($.calls++,W){case J.TRIANGLES:$.triangles+=H*(U/3);break;case J.LINES:$.lines+=H*(U/2);break;case J.LINE_STRIP:$.lines+=H*(U-1);break;case J.LINE_LOOP:$.lines+=H*U;break;case J.POINTS:$.points+=H*U;break;default:P0("WebGLInfo: Unknown draw mode:",W);break}}function K(){$.calls=0,$.triangles=0,$.points=0,$.lines=0}return{memory:Q,render:$,programs:null,autoReset:!0,reset:K,update:Z}}function TG(J,Q,$){let Z=new WeakMap,K=new HJ;function U(W,H,G){let Y=W.morphTargetInfluences,E=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,N=E!==void 0?E.length:0,X=Z.get(H);if(X===void 0||X.count!==N){let P=function(){C.dispose(),Z.delete(H),H.removeEventListener("dispose",P)};if(X!==void 0)X.texture.dispose();let R=H.morphAttributes.position!==void 0,D=H.morphAttributes.normal!==void 0,V=H.morphAttributes.color!==void 0,q=H.morphAttributes.position||[],F=H.morphAttributes.normal||[],z=H.morphAttributes.color||[],B=0;if(R===!0)B=1;if(D===!0)B=2;if(V===!0)B=3;let L=H.attributes.position.count*B,w=1;if(L>Q.maxTextureSize)w=Math.ceil(L/Q.maxTextureSize),L=Q.maxTextureSize;let _=new Float32Array(L*w*4*N),C=new S7(_,L,w,N);C.type=G9,C.needsUpdate=!0;let O=B*4;for(let y=0;y<N;y++){let A=q[y],b=F[y],u=z[y],j=L*w*4*y;for(let p=0;p<A.count;p++){let v=p*O;if(R===!0)K.fromBufferAttribute(A,p),_[j+v+0]=K.x,_[j+v+1]=K.y,_[j+v+2]=K.z,_[j+v+3]=0;if(D===!0)K.fromBufferAttribute(b,p),_[j+v+4]=K.x,_[j+v+5]=K.y,_[j+v+6]=K.z,_[j+v+7]=0;if(V===!0)K.fromBufferAttribute(u,p),_[j+v+8]=K.x,_[j+v+9]=K.y,_[j+v+10]=K.z,_[j+v+11]=u.itemSize===4?K.w:1}}X={count:N,texture:C,size:new i0(L,w)},Z.set(H,X),H.addEventListener("dispose",P)}if(W.isInstancedMesh===!0&&W.morphTexture!==null)G.getUniforms().setValue(J,"morphTexture",W.morphTexture,$);else{let R=0;for(let V=0;V<Y.length;V++)R+=Y[V];let D=H.morphTargetsRelative?1:1-R;G.getUniforms().setValue(J,"morphTargetBaseInfluence",D),G.getUniforms().setValue(J,"morphTargetInfluences",Y)}G.getUniforms().setValue(J,"morphTargetsTexture",X.texture,$),G.getUniforms().setValue(J,"morphTargetsTextureSize",X.size)}return{update:U}}function SG(J,Q,$,Z,K){let U=new WeakMap;function W(Y){let E=K.render.frame,N=Y.geometry,X=Q.get(Y,N);if(U.get(X)!==E)Q.update(X),U.set(X,E);if(Y.isInstancedMesh){if(Y.hasEventListener("dispose",G)===!1)Y.addEventListener("dispose",G);if(U.get(Y)!==E){if($.update(Y.instanceMatrix,J.ARRAY_BUFFER),Y.instanceColor!==null)$.update(Y.instanceColor,J.ARRAY_BUFFER);U.set(Y,E)}}if(Y.isSkinnedMesh){let R=Y.skeleton;if(U.get(R)!==E)R.update(),U.set(R,E)}return X}function H(){U=new WeakMap}function G(Y){let E=Y.target;if(E.removeEventListener("dispose",G),Z.releaseStatesOfObject(E),$.remove(E.instanceMatrix),E.instanceColor!==null)$.remove(E.instanceColor)}return{update:W,dispose:H}}var jG={[S6]:"LINEAR_TONE_MAPPING",[j6]:"REINHARD_TONE_MAPPING",[y6]:"CINEON_TONE_MAPPING",[f6]:"ACES_FILMIC_TONE_MAPPING",[b6]:"AGX_TONE_MAPPING",[h6]:"NEUTRAL_TONE_MAPPING",[v6]:"CUSTOM_TONE_MAPPING"};function yG(J,Q,$,Z,K){let U=new bJ(Q,$,{type:J,depthBuffer:Z,stencilBuffer:K}),W=new bJ(Q,$,{type:Y9,depthBuffer:!1,stencilBuffer:!1}),H=new LJ;H.setAttribute("position",new _J([-1,3,0,-1,-1,0,3,-1,0],3)),H.setAttribute("uv",new _J([0,2,0,0,2,0],2));let G=new jQ({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),Y=new wJ(H,G),E=new d7(-1,1,1,-1,0,1),N=null,X=null,R=!1,D,V=null,q=[],F=!1;this.setSize=function(z,B){U.setSize(z,B),W.setSize(z,B);for(let L=0;L<q.length;L++){let w=q[L];if(w.setSize)w.setSize(z,B)}},this.setEffects=function(z){q=z,F=q.length>0&&q[0].isRenderPass===!0;let{width:B,height:L}=U;for(let w=0;w<q.length;w++){let _=q[w];if(_.setSize)_.setSize(B,L)}},this.begin=function(z,B){if(R)return!1;if(z.toneMapping===uJ&&q.length===0)return!1;if(V=B,B!==null){let{width:L,height:w}=B;if(U.width!==L||U.height!==w)this.setSize(L,w)}if(F===!1)z.setRenderTarget(U);return D=z.toneMapping,z.toneMapping=uJ,!0},this.hasRenderPass=function(){return F},this.end=function(z,B){z.toneMapping=D,R=!0;let L=U,w=W;for(let _=0;_<q.length;_++){let C=q[_];if(C.enabled===!1)continue;if(C.render(z,w,L,B),C.needsSwap!==!1){let O=L;L=w,w=O}}if(N!==z.outputColorSpace||X!==z.toneMapping){if(N=z.outputColorSpace,X=z.toneMapping,G.defines={},x0.getTransfer(N)===JJ)G.defines.SRGB_TRANSFER="";let _=jG[X];if(_)G.defines[_]="";G.needsUpdate=!0}G.uniforms.tDiffuse.value=L.texture,z.setRenderTarget(V),z.render(Y,E),V=null,R=!1},this.isCompositing=function(){return R},this.dispose=function(){U.dispose(),W.dispose(),H.dispose(),G.dispose()}}var LK=new VJ,Z$=new h9(1,1),BK=new S7,zK=new PQ,IK=new g7,ZK=[],KK=[],UK=new Float32Array(16),WK=new Float32Array(9),HK=new Float32Array(4);function V8(J,Q,$){let Z=J[0];if(Z<=0||Z>0)return J;let K=Q*$,U=ZK[K];if(U===void 0)U=new Float32Array(K),ZK[K]=U;if(Q!==0){Z.toArray(U,0);for(let W=1,H=0;W!==Q;++W)H+=$,J[W].toArray(U,H)}return U}function NJ(J,Q){if(J.length!==Q.length)return!1;for(let $=0,Z=J.length;$<Z;$++)if(J[$]!==Q[$])return!1;return!0}function EJ(J,Q){for(let $=0,Z=Q.length;$<Z;$++)J[$]=Q[$]}function n7(J,Q){let $=KK[Q];if($===void 0)$=new Int32Array(Q),KK[Q]=$;for(let Z=0;Z!==Q;++Z)$[Z]=J.allocateTextureUnit();return $}function fG(J,Q){let $=this.cache;if($[0]===Q)return;J.uniform1f(this.addr,Q),$[0]=Q}function vG(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y)J.uniform2f(this.addr,Q.x,Q.y),$[0]=Q.x,$[1]=Q.y}else{if(NJ($,Q))return;J.uniform2fv(this.addr,Q),EJ($,Q)}}function bG(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z)J.uniform3f(this.addr,Q.x,Q.y,Q.z),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z}else if(Q.r!==void 0){if($[0]!==Q.r||$[1]!==Q.g||$[2]!==Q.b)J.uniform3f(this.addr,Q.r,Q.g,Q.b),$[0]=Q.r,$[1]=Q.g,$[2]=Q.b}else{if(NJ($,Q))return;J.uniform3fv(this.addr,Q),EJ($,Q)}}function hG(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z||$[3]!==Q.w)J.uniform4f(this.addr,Q.x,Q.y,Q.z,Q.w),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z,$[3]=Q.w}else{if(NJ($,Q))return;J.uniform4fv(this.addr,Q),EJ($,Q)}}function gG(J,Q){let $=this.cache,Z=Q.elements;if(Z===void 0){if(NJ($,Q))return;J.uniformMatrix2fv(this.addr,!1,Q),EJ($,Q)}else{if(NJ($,Z))return;HK.set(Z),J.uniformMatrix2fv(this.addr,!1,HK),EJ($,Z)}}function xG(J,Q){let $=this.cache,Z=Q.elements;if(Z===void 0){if(NJ($,Q))return;J.uniformMatrix3fv(this.addr,!1,Q),EJ($,Q)}else{if(NJ($,Z))return;WK.set(Z),J.uniformMatrix3fv(this.addr,!1,WK),EJ($,Z)}}function pG(J,Q){let $=this.cache,Z=Q.elements;if(Z===void 0){if(NJ($,Q))return;J.uniformMatrix4fv(this.addr,!1,Q),EJ($,Q)}else{if(NJ($,Z))return;UK.set(Z),J.uniformMatrix4fv(this.addr,!1,UK),EJ($,Z)}}function mG(J,Q){let $=this.cache;if($[0]===Q)return;J.uniform1i(this.addr,Q),$[0]=Q}function dG(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y)J.uniform2i(this.addr,Q.x,Q.y),$[0]=Q.x,$[1]=Q.y}else{if(NJ($,Q))return;J.uniform2iv(this.addr,Q),EJ($,Q)}}function uG(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z)J.uniform3i(this.addr,Q.x,Q.y,Q.z),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z}else{if(NJ($,Q))return;J.uniform3iv(this.addr,Q),EJ($,Q)}}function lG(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z||$[3]!==Q.w)J.uniform4i(this.addr,Q.x,Q.y,Q.z,Q.w),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z,$[3]=Q.w}else{if(NJ($,Q))return;J.uniform4iv(this.addr,Q),EJ($,Q)}}function cG(J,Q){let $=this.cache;if($[0]===Q)return;J.uniform1ui(this.addr,Q),$[0]=Q}function nG(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y)J.uniform2ui(this.addr,Q.x,Q.y),$[0]=Q.x,$[1]=Q.y}else{if(NJ($,Q))return;J.uniform2uiv(this.addr,Q),EJ($,Q)}}function sG(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z)J.uniform3ui(this.addr,Q.x,Q.y,Q.z),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z}else{if(NJ($,Q))return;J.uniform3uiv(this.addr,Q),EJ($,Q)}}function iG(J,Q){let $=this.cache;if(Q.x!==void 0){if($[0]!==Q.x||$[1]!==Q.y||$[2]!==Q.z||$[3]!==Q.w)J.uniform4ui(this.addr,Q.x,Q.y,Q.z,Q.w),$[0]=Q.x,$[1]=Q.y,$[2]=Q.z,$[3]=Q.w}else{if(NJ($,Q))return;J.uniform4uiv(this.addr,Q),EJ($,Q)}}function oG(J,Q,$){let Z=this.cache,K=$.allocateTextureUnit();if(Z[0]!==K)J.uniform1i(this.addr,K),Z[0]=K;let U;if(this.type===J.SAMPLER_2D_SHADOW)Z$.compareFunction=$.isReversedDepthBuffer()?T7:w7,U=Z$;else U=LK;$.setTexture2D(Q||U,K)}function aG(J,Q,$){let Z=this.cache,K=$.allocateTextureUnit();if(Z[0]!==K)J.uniform1i(this.addr,K),Z[0]=K;$.setTexture3D(Q||zK,K)}function rG(J,Q,$){let Z=this.cache,K=$.allocateTextureUnit();if(Z[0]!==K)J.uniform1i(this.addr,K),Z[0]=K;$.setTextureCube(Q||IK,K)}function tG(J,Q,$){let Z=this.cache,K=$.allocateTextureUnit();if(Z[0]!==K)J.uniform1i(this.addr,K),Z[0]=K;$.setTexture2DArray(Q||BK,K)}function eG(J){switch(J){case 5126:return fG;case 35664:return vG;case 35665:return bG;case 35666:return hG;case 35674:return gG;case 35675:return xG;case 35676:return pG;case 5124:case 35670:return mG;case 35667:case 35671:return dG;case 35668:case 35672:return uG;case 35669:case 35673:return lG;case 5125:return cG;case 36294:return nG;case 36295:return sG;case 36296:return iG;case 35678:case 36198:case 36298:case 36306:case 35682:return oG;case 35679:case 36299:case 36307:return aG;case 35680:case 36300:case 36308:case 36293:return rG;case 36289:case 36303:case 36311:case 36292:return tG}}function JY(J,Q){J.uniform1fv(this.addr,Q)}function QY(J,Q){let $=V8(Q,this.size,2);J.uniform2fv(this.addr,$)}function $Y(J,Q){let $=V8(Q,this.size,3);J.uniform3fv(this.addr,$)}function ZY(J,Q){let $=V8(Q,this.size,4);J.uniform4fv(this.addr,$)}function KY(J,Q){let $=V8(Q,this.size,4);J.uniformMatrix2fv(this.addr,!1,$)}function UY(J,Q){let $=V8(Q,this.size,9);J.uniformMatrix3fv(this.addr,!1,$)}function WY(J,Q){let $=V8(Q,this.size,16);J.uniformMatrix4fv(this.addr,!1,$)}function HY(J,Q){J.uniform1iv(this.addr,Q)}function GY(J,Q){J.uniform2iv(this.addr,Q)}function YY(J,Q){J.uniform3iv(this.addr,Q)}function XY(J,Q){J.uniform4iv(this.addr,Q)}function NY(J,Q){J.uniform1uiv(this.addr,Q)}function EY(J,Q){J.uniform2uiv(this.addr,Q)}function qY(J,Q){J.uniform3uiv(this.addr,Q)}function FY(J,Q){J.uniform4uiv(this.addr,Q)}function DY(J,Q,$){let Z=this.cache,K=Q.length,U=n7($,K);if(!NJ(Z,U))J.uniform1iv(this.addr,U),EJ(Z,U);let W;if(this.type===J.SAMPLER_2D_SHADOW)W=Z$;else W=LK;for(let H=0;H!==K;++H)$.setTexture2D(Q[H]||W,U[H])}function OY(J,Q,$){let Z=this.cache,K=Q.length,U=n7($,K);if(!NJ(Z,U))J.uniform1iv(this.addr,U),EJ(Z,U);for(let W=0;W!==K;++W)$.setTexture3D(Q[W]||zK,U[W])}function RY(J,Q,$){let Z=this.cache,K=Q.length,U=n7($,K);if(!NJ(Z,U))J.uniform1iv(this.addr,U),EJ(Z,U);for(let W=0;W!==K;++W)$.setTextureCube(Q[W]||IK,U[W])}function MY(J,Q,$){let Z=this.cache,K=Q.length,U=n7($,K);if(!NJ(Z,U))J.uniform1iv(this.addr,U),EJ(Z,U);for(let W=0;W!==K;++W)$.setTexture2DArray(Q[W]||BK,U[W])}function kY(J){switch(J){case 5126:return JY;case 35664:return QY;case 35665:return $Y;case 35666:return ZY;case 35674:return KY;case 35675:return UY;case 35676:return WY;case 5124:case 35670:return HY;case 35667:case 35671:return GY;case 35668:case 35672:return YY;case 35669:case 35673:return XY;case 5125:return NY;case 36294:return EY;case 36295:return qY;case 36296:return FY;case 35678:case 36198:case 36298:case 36306:case 35682:return DY;case 35679:case 36299:case 36307:return OY;case 35680:case 36300:case 36308:case 36293:return RY;case 36289:case 36303:case 36311:case 36292:return MY}}class _K{constructor(J,Q,$){this.id=J,this.addr=$,this.cache=[],this.type=Q.type,this.setValue=eG(Q.type)}}class AK{constructor(J,Q,$){this.id=J,this.addr=$,this.cache=[],this.type=Q.type,this.size=Q.size,this.setValue=kY(Q.type)}}class CK{constructor(J){this.id=J,this.seq=[],this.map={}}setValue(J,Q,$){let Z=this.seq;for(let K=0,U=Z.length;K!==U;++K){let W=Z[K];W.setValue(J,Q[W.id],$)}}}var J$=/(\w+)(\])?(\[|\.)?/g;function GK(J,Q){J.seq.push(Q),J.map[Q.id]=Q}function VY(J,Q,$){let Z=J.name,K=Z.length;J$.lastIndex=0;while(!0){let U=J$.exec(Z),W=J$.lastIndex,H=U[1],G=U[2]==="]",Y=U[3];if(G)H=H|0;if(Y===void 0||Y==="["&&W+2===K){GK($,Y===void 0?new _K(H,J,Q):new AK(H,J,Q));break}else{let N=$.map[H];if(N===void 0)N=new CK(H),GK($,N);$=N}}}class l8{constructor(J,Q){this.seq=[],this.map={};let $=J.getProgramParameter(Q,J.ACTIVE_UNIFORMS);for(let U=0;U<$;++U){let W=J.getActiveUniform(Q,U),H=J.getUniformLocation(Q,W.name);VY(W,H,this)}let Z=[],K=[];for(let U of this.seq)if(U.type===J.SAMPLER_2D_SHADOW||U.type===J.SAMPLER_CUBE_SHADOW||U.type===J.SAMPLER_2D_ARRAY_SHADOW)Z.push(U);else K.push(U);if(Z.length>0)this.seq=Z.concat(K)}setValue(J,Q,$,Z){let K=this.map[Q];if(K!==void 0)K.setValue(J,$,Z)}setOptional(J,Q,$){let Z=Q[$];if(Z!==void 0)this.setValue(J,$,Z)}static upload(J,Q,$,Z){for(let K=0,U=Q.length;K!==U;++K){let W=Q[K],H=$[W.id];if(H.needsUpdate!==!1)W.setValue(J,H.value,Z)}}static seqWithValue(J,Q){let $=[];for(let Z=0,K=J.length;Z!==K;++Z){let U=J[Z];if(U.id in Q)$.push(U)}return $}}function YK(J,Q,$){let Z=J.createShader(Q);return J.shaderSource(Z,$),J.compileShader(Z),Z}var LY=37297,BY=0;function zY(J,Q){let $=J.split(`
`),Z=[],K=Math.max(Q-6,0),U=Math.min(Q+6,$.length);for(let W=K;W<U;W++){let H=W+1;Z.push(`${H===Q?">":" "} ${H}: ${$[W]}`)}return Z.join(`
`)}var XK=new j0;function IY(J){x0._getMatrix(XK,x0.workingColorSpace,J);let Q=`mat3( ${XK.elements.map(($)=>$.toFixed(4))} )`;switch(x0.getTransfer(J)){case BQ:return[Q,"LinearTransferOETF"];case JJ:return[Q,"sRGBTransferOETF"];default:return w0("WebGLProgram: Unsupported color space: ",J),[Q,"LinearTransferOETF"]}}function NK(J,Q,$){let Z=J.getShaderParameter(Q,J.COMPILE_STATUS),U=(J.getShaderInfoLog(Q)||"").trim();if(Z&&U==="")return"";let W=/ERROR: 0:(\d+)/.exec(U);if(W){let H=parseInt(W[1]);return $.toUpperCase()+`

`+U+`

`+zY(J.getShaderSource(Q),H)}else return U}function _Y(J,Q){let $=IY(Q);return[`vec4 ${J}( vec4 value ) {`,`	return ${$[1]}( vec4( value.rgb * ${$[0]}, value.a ) );`,"}"].join(`
`)}var AY={[S6]:"Linear",[j6]:"Reinhard",[y6]:"Cineon",[f6]:"ACESFilmic",[b6]:"AgX",[h6]:"Neutral",[v6]:"Custom"};function CY(J,Q){let $=AY[Q];if($===void 0)return w0("WebGLProgram: Unsupported toneMapping:",Q),"vec3 "+J+"( vec3 color ) { return LinearToneMapping( color ); }";return"vec3 "+J+"( vec3 color ) { return "+$+"ToneMapping( color ); }"}var l7=new x;function PY(){x0.getLuminanceCoefficients(l7);let J=l7.x.toFixed(4),Q=l7.y.toFixed(4),$=l7.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${J}, ${Q}, ${$} );`,"\treturn dot( weights, rgb );","}"].join(`
`)}function wY(J){return[J.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",J.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(u8).join(`
`)}function TY(J){let Q=[];for(let $ in J){let Z=J[$];if(Z===!1)continue;Q.push("#define "+$+" "+Z)}return Q.join(`
`)}function SY(J,Q){let $={},Z=J.getProgramParameter(Q,J.ACTIVE_ATTRIBUTES);for(let K=0;K<Z;K++){let U=J.getActiveAttrib(Q,K),W=U.name,H=1;if(U.type===J.FLOAT_MAT2)H=2;if(U.type===J.FLOAT_MAT3)H=3;if(U.type===J.FLOAT_MAT4)H=4;$[W]={type:U.type,location:J.getAttribLocation(Q,W),locationSize:H}}return $}function u8(J){return J!==""}function EK(J,Q){let $=Q.numSpotLightShadows+Q.numSpotLightMaps-Q.numSpotLightShadowsWithMaps;return J.replace(/NUM_DIR_LIGHTS/g,Q.numDirLights).replace(/NUM_SPOT_LIGHTS/g,Q.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,Q.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,$).replace(/NUM_RECT_AREA_LIGHTS/g,Q.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,Q.numPointLights).replace(/NUM_HEMI_LIGHTS/g,Q.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,Q.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,Q.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,Q.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,Q.numPointLightShadows)}function qK(J,Q){return J.replace(/NUM_CLIPPING_PLANES/g,Q.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,Q.numClippingPlanes-Q.numClipIntersection)}var jY=/^[ \t]*#include +<([\w\d./]+)>/gm;function K$(J){return J.replace(jY,fY)}var yY=new Map;function fY(J,Q){let $=y0[Q];if($===void 0){let Z=yY.get(Q);if(Z!==void 0)$=y0[Z],w0('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',Q,Z);else throw Error("Can not resolve #include <"+Q+">")}return K$($)}var vY=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function FK(J){return J.replace(vY,bY)}function bY(J,Q,$,Z){let K="";for(let U=parseInt(Q);U<parseInt($);U++)K+=Z.replace(/\[\s*i\s*\]/g,"[ "+U+" ]").replace(/UNROLLED_LOOP_INDEX/g,U);return K}function DK(J){let Q=`precision ${J.precision} float;
	precision ${J.precision} int;
	precision ${J.precision} sampler2D;
	precision ${J.precision} samplerCube;
	precision ${J.precision} sampler3D;
	precision ${J.precision} sampler2DArray;
	precision ${J.precision} sampler2DShadow;
	precision ${J.precision} samplerCubeShadow;
	precision ${J.precision} sampler2DArrayShadow;
	precision ${J.precision} isampler2D;
	precision ${J.precision} isampler3D;
	precision ${J.precision} isamplerCube;
	precision ${J.precision} isampler2DArray;
	precision ${J.precision} usampler2D;
	precision ${J.precision} usampler3D;
	precision ${J.precision} usamplerCube;
	precision ${J.precision} usampler2DArray;
	`;if(J.precision==="highp")Q+=`
#define HIGH_PRECISION`;else if(J.precision==="mediump")Q+=`
#define MEDIUM_PRECISION`;else if(J.precision==="lowp")Q+=`
#define LOW_PRECISION`;return Q}var hY={[T8]:"SHADOWMAP_TYPE_PCF",[G8]:"SHADOWMAP_TYPE_VSM"};function gY(J){return hY[J.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var xY={[N8]:"ENVMAP_TYPE_CUBE",[T9]:"ENVMAP_TYPE_CUBE",[j8]:"ENVMAP_TYPE_CUBE_UV"};function pY(J){if(J.envMap===!1)return"ENVMAP_TYPE_CUBE";return xY[J.envMapMode]||"ENVMAP_TYPE_CUBE"}var mY={[T9]:"ENVMAP_MODE_REFRACTION"};function dY(J){if(J.envMap===!1)return"ENVMAP_MODE_REFLECTION";return mY[J.envMapMode]||"ENVMAP_MODE_REFLECTION"}var uY={[BZ]:"ENVMAP_BLENDING_MULTIPLY",[zZ]:"ENVMAP_BLENDING_MIX",[IZ]:"ENVMAP_BLENDING_ADD"};function lY(J){if(J.envMap===!1)return"ENVMAP_BLENDING_NONE";return uY[J.combine]||"ENVMAP_BLENDING_NONE"}function cY(J){let Q=J.envMapCubeUVHeight;if(Q===null)return null;let $=Math.log2(Q)-2,Z=1/Q;return{texelWidth:1/(3*Math.max(Math.pow(2,$),112)),texelHeight:Z,maxMip:$}}function nY(J,Q,$,Z){let K=J.getContext(),U=$.defines,W=$.vertexShader,H=$.fragmentShader,G=gY($),Y=pY($),E=dY($),N=lY($),X=cY($),R=wY($),D=TY(U),V=K.createProgram(),q,F,z=$.glslVersion?"#version "+$.glslVersion+`
`:"";if($.isRawShaderMaterial){if(q=["#define SHADER_TYPE "+$.shaderType,"#define SHADER_NAME "+$.shaderName,D].filter(u8).join(`
`),q.length>0)q+=`
`;if(F=["#define SHADER_TYPE "+$.shaderType,"#define SHADER_NAME "+$.shaderName,D].filter(u8).join(`
`),F.length>0)F+=`
`}else q=[DK($),"#define SHADER_TYPE "+$.shaderType,"#define SHADER_NAME "+$.shaderName,D,$.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",$.batching?"#define USE_BATCHING":"",$.batchingColor?"#define USE_BATCHING_COLOR":"",$.instancing?"#define USE_INSTANCING":"",$.instancingColor?"#define USE_INSTANCING_COLOR":"",$.instancingMorph?"#define USE_INSTANCING_MORPH":"",$.useFog&&$.fog?"#define USE_FOG":"",$.useFog&&$.fogExp2?"#define FOG_EXP2":"",$.map?"#define USE_MAP":"",$.envMap?"#define USE_ENVMAP":"",$.envMap?"#define "+E:"",$.lightMap?"#define USE_LIGHTMAP":"",$.aoMap?"#define USE_AOMAP":"",$.bumpMap?"#define USE_BUMPMAP":"",$.normalMap?"#define USE_NORMALMAP":"",$.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",$.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",$.displacementMap?"#define USE_DISPLACEMENTMAP":"",$.emissiveMap?"#define USE_EMISSIVEMAP":"",$.anisotropy?"#define USE_ANISOTROPY":"",$.anisotropyMap?"#define USE_ANISOTROPYMAP":"",$.clearcoatMap?"#define USE_CLEARCOATMAP":"",$.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",$.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",$.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",$.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",$.specularMap?"#define USE_SPECULARMAP":"",$.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",$.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",$.roughnessMap?"#define USE_ROUGHNESSMAP":"",$.metalnessMap?"#define USE_METALNESSMAP":"",$.alphaMap?"#define USE_ALPHAMAP":"",$.alphaHash?"#define USE_ALPHAHASH":"",$.transmission?"#define USE_TRANSMISSION":"",$.transmissionMap?"#define USE_TRANSMISSIONMAP":"",$.thicknessMap?"#define USE_THICKNESSMAP":"",$.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",$.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",$.mapUv?"#define MAP_UV "+$.mapUv:"",$.alphaMapUv?"#define ALPHAMAP_UV "+$.alphaMapUv:"",$.lightMapUv?"#define LIGHTMAP_UV "+$.lightMapUv:"",$.aoMapUv?"#define AOMAP_UV "+$.aoMapUv:"",$.emissiveMapUv?"#define EMISSIVEMAP_UV "+$.emissiveMapUv:"",$.bumpMapUv?"#define BUMPMAP_UV "+$.bumpMapUv:"",$.normalMapUv?"#define NORMALMAP_UV "+$.normalMapUv:"",$.displacementMapUv?"#define DISPLACEMENTMAP_UV "+$.displacementMapUv:"",$.metalnessMapUv?"#define METALNESSMAP_UV "+$.metalnessMapUv:"",$.roughnessMapUv?"#define ROUGHNESSMAP_UV "+$.roughnessMapUv:"",$.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+$.anisotropyMapUv:"",$.clearcoatMapUv?"#define CLEARCOATMAP_UV "+$.clearcoatMapUv:"",$.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+$.clearcoatNormalMapUv:"",$.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+$.clearcoatRoughnessMapUv:"",$.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+$.iridescenceMapUv:"",$.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+$.iridescenceThicknessMapUv:"",$.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+$.sheenColorMapUv:"",$.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+$.sheenRoughnessMapUv:"",$.specularMapUv?"#define SPECULARMAP_UV "+$.specularMapUv:"",$.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+$.specularColorMapUv:"",$.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+$.specularIntensityMapUv:"",$.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+$.transmissionMapUv:"",$.thicknessMapUv?"#define THICKNESSMAP_UV "+$.thicknessMapUv:"",$.vertexTangents&&$.flatShading===!1?"#define USE_TANGENT":"",$.vertexColors?"#define USE_COLOR":"",$.vertexAlphas?"#define USE_COLOR_ALPHA":"",$.vertexUv1s?"#define USE_UV1":"",$.vertexUv2s?"#define USE_UV2":"",$.vertexUv3s?"#define USE_UV3":"",$.pointsUvs?"#define USE_POINTS_UV":"",$.flatShading?"#define FLAT_SHADED":"",$.skinning?"#define USE_SKINNING":"",$.morphTargets?"#define USE_MORPHTARGETS":"",$.morphNormals&&$.flatShading===!1?"#define USE_MORPHNORMALS":"",$.morphColors?"#define USE_MORPHCOLORS":"",$.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+$.morphTextureStride:"",$.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+$.morphTargetsCount:"",$.doubleSided?"#define DOUBLE_SIDED":"",$.flipSided?"#define FLIP_SIDED":"",$.shadowMapEnabled?"#define USE_SHADOWMAP":"",$.shadowMapEnabled?"#define "+G:"",$.sizeAttenuation?"#define USE_SIZEATTENUATION":"",$.numLightProbes>0?"#define USE_LIGHT_PROBES":"",$.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",$.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","\tattribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","\tattribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","\tuniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","\tattribute vec2 uv1;","#endif","#ifdef USE_UV2","\tattribute vec2 uv2;","#endif","#ifdef USE_UV3","\tattribute vec2 uv3;","#endif","#ifdef USE_TANGENT","\tattribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","\tattribute vec4 color;","#elif defined( USE_COLOR )","\tattribute vec3 color;","#endif","#ifdef USE_SKINNING","\tattribute vec4 skinIndex;","\tattribute vec4 skinWeight;","#endif",`
`].filter(u8).join(`
`),F=[DK($),"#define SHADER_TYPE "+$.shaderType,"#define SHADER_NAME "+$.shaderName,D,$.useFog&&$.fog?"#define USE_FOG":"",$.useFog&&$.fogExp2?"#define FOG_EXP2":"",$.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",$.map?"#define USE_MAP":"",$.matcap?"#define USE_MATCAP":"",$.envMap?"#define USE_ENVMAP":"",$.envMap?"#define "+Y:"",$.envMap?"#define "+E:"",$.envMap?"#define "+N:"",X?"#define CUBEUV_TEXEL_WIDTH "+X.texelWidth:"",X?"#define CUBEUV_TEXEL_HEIGHT "+X.texelHeight:"",X?"#define CUBEUV_MAX_MIP "+X.maxMip+".0":"",$.lightMap?"#define USE_LIGHTMAP":"",$.aoMap?"#define USE_AOMAP":"",$.bumpMap?"#define USE_BUMPMAP":"",$.normalMap?"#define USE_NORMALMAP":"",$.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",$.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",$.emissiveMap?"#define USE_EMISSIVEMAP":"",$.anisotropy?"#define USE_ANISOTROPY":"",$.anisotropyMap?"#define USE_ANISOTROPYMAP":"",$.clearcoat?"#define USE_CLEARCOAT":"",$.clearcoatMap?"#define USE_CLEARCOATMAP":"",$.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",$.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",$.dispersion?"#define USE_DISPERSION":"",$.iridescence?"#define USE_IRIDESCENCE":"",$.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",$.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",$.specularMap?"#define USE_SPECULARMAP":"",$.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",$.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",$.roughnessMap?"#define USE_ROUGHNESSMAP":"",$.metalnessMap?"#define USE_METALNESSMAP":"",$.alphaMap?"#define USE_ALPHAMAP":"",$.alphaTest?"#define USE_ALPHATEST":"",$.alphaHash?"#define USE_ALPHAHASH":"",$.sheen?"#define USE_SHEEN":"",$.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",$.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",$.transmission?"#define USE_TRANSMISSION":"",$.transmissionMap?"#define USE_TRANSMISSIONMAP":"",$.thicknessMap?"#define USE_THICKNESSMAP":"",$.vertexTangents&&$.flatShading===!1?"#define USE_TANGENT":"",$.vertexColors||$.instancingColor?"#define USE_COLOR":"",$.vertexAlphas||$.batchingColor?"#define USE_COLOR_ALPHA":"",$.vertexUv1s?"#define USE_UV1":"",$.vertexUv2s?"#define USE_UV2":"",$.vertexUv3s?"#define USE_UV3":"",$.pointsUvs?"#define USE_POINTS_UV":"",$.gradientMap?"#define USE_GRADIENTMAP":"",$.flatShading?"#define FLAT_SHADED":"",$.doubleSided?"#define DOUBLE_SIDED":"",$.flipSided?"#define FLIP_SIDED":"",$.shadowMapEnabled?"#define USE_SHADOWMAP":"",$.shadowMapEnabled?"#define "+G:"",$.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",$.numLightProbes>0?"#define USE_LIGHT_PROBES":"",$.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",$.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",$.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",$.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",$.toneMapping!==uJ?"#define TONE_MAPPING":"",$.toneMapping!==uJ?y0.tonemapping_pars_fragment:"",$.toneMapping!==uJ?CY("toneMapping",$.toneMapping):"",$.dithering?"#define DITHERING":"",$.opaque?"#define OPAQUE":"",y0.colorspace_pars_fragment,_Y("linearToOutputTexel",$.outputColorSpace),PY(),$.useDepthPacking?"#define DEPTH_PACKING "+$.depthPacking:"",`
`].filter(u8).join(`
`);if(W=K$(W),W=EK(W,$),W=qK(W,$),H=K$(H),H=EK(H,$),H=qK(H,$),W=FK(W),H=FK(H),$.isRawShaderMaterial!==!0)z=`#version 300 es
`,q=[R,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+q,F=["#define varying in",$.glslVersion===zQ?"":"layout(location = 0) out highp vec4 pc_fragColor;",$.glslVersion===zQ?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+F;let B=z+q+W,L=z+F+H,w=YK(K,K.VERTEX_SHADER,B),_=YK(K,K.FRAGMENT_SHADER,L);if(K.attachShader(V,w),K.attachShader(V,_),$.index0AttributeName!==void 0)K.bindAttribLocation(V,0,$.index0AttributeName);else if($.morphTargets===!0)K.bindAttribLocation(V,0,"position");K.linkProgram(V);function C(A){if(J.debug.checkShaderErrors){let b=K.getProgramInfoLog(V)||"",u=K.getShaderInfoLog(w)||"",j=K.getShaderInfoLog(_)||"",p=b.trim(),v=u.trim(),h=j.trim(),i=!0,n=!0;if(K.getProgramParameter(V,K.LINK_STATUS)===!1)if(i=!1,typeof J.debug.onShaderError==="function")J.debug.onShaderError(K,V,w,_);else{let J0=NK(K,w,"vertex"),q0=NK(K,_,"fragment");P0("THREE.WebGLProgram: Shader Error "+K.getError()+" - VALIDATE_STATUS "+K.getProgramParameter(V,K.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+p+`
`+J0+`
`+q0)}else if(p!=="")w0("WebGLProgram: Program Info Log:",p);else if(v===""||h==="")n=!1;if(n)A.diagnostics={runnable:i,programLog:p,vertexShader:{log:v,prefix:q},fragmentShader:{log:h,prefix:F}}}K.deleteShader(w),K.deleteShader(_),O=new l8(K,V),P=SY(K,V)}let O;this.getUniforms=function(){if(O===void 0)C(this);return O};let P;this.getAttributes=function(){if(P===void 0)C(this);return P};let y=$.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){if(y===!1)y=K.getProgramParameter(V,LY);return y},this.destroy=function(){Z.releaseStatesOfProgram(this),K.deleteProgram(V),this.program=void 0},this.type=$.shaderType,this.name=$.shaderName,this.id=BY++,this.cacheKey=Q,this.usedTimes=1,this.program=V,this.vertexShader=w,this.fragmentShader=_,this}var sY=0;class PK{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(J){let{vertexShader:Q,fragmentShader:$}=J,Z=this._getShaderStage(Q),K=this._getShaderStage($),U=this._getShaderCacheForMaterial(J);if(U.has(Z)===!1)U.add(Z),Z.usedTimes++;if(U.has(K)===!1)U.add(K),K.usedTimes++;return this}remove(J){let Q=this.materialCache.get(J);for(let $ of Q)if($.usedTimes--,$.usedTimes===0)this.shaderCache.delete($.code);return this.materialCache.delete(J),this}getVertexShaderID(J){return this._getShaderStage(J.vertexShader).id}getFragmentShaderID(J){return this._getShaderStage(J.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(J){let Q=this.materialCache,$=Q.get(J);if($===void 0)$=new Set,Q.set(J,$);return $}_getShaderStage(J){let Q=this.shaderCache,$=Q.get(J);if($===void 0)$=new wK(J),Q.set(J,$);return $}}class wK{constructor(J){this.id=sY++,this.code=J,this.usedTimes=0}}function iY(J,Q,$,Z,K,U){let W=new j7,H=new PK,G=new Set,Y=[],E=new Map,N=Z.logarithmicDepthBuffer,X=Z.precision,R={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function D(O){if(G.add(O),O===0)return"uv";return`uv${O}`}function V(O,P,y,A,b){let u=A.fog,j=b.geometry,p=O.isMeshStandardMaterial||O.isMeshLambertMaterial||O.isMeshPhongMaterial?A.environment:null,v=O.isMeshStandardMaterial||O.isMeshLambertMaterial&&!O.envMap||O.isMeshPhongMaterial&&!O.envMap,h=Q.get(O.envMap||p,v),i=!!h&&h.mapping===j8?h.image.height:null,n=R[O.type];if(O.precision!==null){if(X=Z.getMaxPrecision(O.precision),X!==O.precision)w0("WebGLProgram.getParameters:",O.precision,"not supported, using",X,"instead.")}let J0=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,q0=J0!==void 0?J0.length:0,H0=0;if(j.morphAttributes.position!==void 0)H0=1;if(j.morphAttributes.normal!==void 0)H0=2;if(j.morphAttributes.color!==void 0)H0=3;let QJ,c0,o,K0;if(n){let o0=eJ[n];QJ=o0.vertexShader,c0=o0.fragmentShader}else QJ=O.vertexShader,c0=O.fragmentShader,H.update(O),o=H.getVertexShaderID(O),K0=H.getFragmentShaderID(O);let F0=J.getRenderTarget(),X0=J.state.buffers.depth.getReversed(),A0=b.isInstancedMesh===!0,p0=b.isBatchedMesh===!0,m0=!!O.map,d0=!!O.matcap,n0=!!h,t0=!!O.aoMap,h0=!!O.lightMap,YJ=!!O.bumpMap,T=!!O.normalMap,DJ=!!O.displacementMap,f0=!!O.emissiveMap,KJ=!!O.metalnessMap,B0=!!O.roughnessMap,$J=O.anisotropy>0,I=O.clearcoat>0,M=O.dispersion>0,g=O.iridescence>0,s=O.sheen>0,t=O.transmission>0,c=$J&&!!O.anisotropyMap,D0=I&&!!O.clearcoatMap,U0=I&&!!O.clearcoatNormalMap,I0=I&&!!O.clearcoatRoughnessMap,C0=g&&!!O.iridescenceMap,e=g&&!!O.iridescenceThicknessMap,Q0=s&&!!O.sheenColorMap,R0=s&&!!O.sheenRoughnessMap,_0=!!O.specularMap,N0=!!O.specularColorMap,v0=!!O.specularIntensityMap,S=t&&!!O.transmissionMap,$0=t&&!!O.thicknessMap,Z0=!!O.gradientMap,O0=!!O.alphaMap,a=O.alphaTest>0,r=!!O.alphaHash,M0=!!O.extensions,T0=uJ;if(O.toneMapped){if(F0===null||F0.isXRRenderTarget===!0)T0=J.toneMapping}let ZJ={shaderID:n,shaderType:O.type,shaderName:O.name,vertexShader:QJ,fragmentShader:c0,defines:O.defines,customVertexShaderID:o,customFragmentShaderID:K0,isRawShaderMaterial:O.isRawShaderMaterial===!0,glslVersion:O.glslVersion,precision:X,batching:p0,batchingColor:p0&&b._colorsTexture!==null,instancing:A0,instancingColor:A0&&b.instanceColor!==null,instancingMorph:A0&&b.morphTexture!==null,outputColorSpace:F0===null?J.outputColorSpace:F0.isXRRenderTarget===!0?F0.texture.colorSpace:v8,alphaToCoverage:!!O.alphaToCoverage,map:m0,matcap:d0,envMap:n0,envMapMode:n0&&h.mapping,envMapCubeUVHeight:i,aoMap:t0,lightMap:h0,bumpMap:YJ,normalMap:T,displacementMap:DJ,emissiveMap:f0,normalMapObjectSpace:T&&O.normalMapType===bZ,normalMapTangentSpace:T&&O.normalMapType===vZ,metalnessMap:KJ,roughnessMap:B0,anisotropy:$J,anisotropyMap:c,clearcoat:I,clearcoatMap:D0,clearcoatNormalMap:U0,clearcoatRoughnessMap:I0,dispersion:M,iridescence:g,iridescenceMap:C0,iridescenceThicknessMap:e,sheen:s,sheenColorMap:Q0,sheenRoughnessMap:R0,specularMap:_0,specularColorMap:N0,specularIntensityMap:v0,transmission:t,transmissionMap:S,thicknessMap:$0,gradientMap:Z0,opaque:O.transparent===!1&&O.blending===S8&&O.alphaToCoverage===!1,alphaMap:O0,alphaTest:a,alphaHash:r,combine:O.combine,mapUv:m0&&D(O.map.channel),aoMapUv:t0&&D(O.aoMap.channel),lightMapUv:h0&&D(O.lightMap.channel),bumpMapUv:YJ&&D(O.bumpMap.channel),normalMapUv:T&&D(O.normalMap.channel),displacementMapUv:DJ&&D(O.displacementMap.channel),emissiveMapUv:f0&&D(O.emissiveMap.channel),metalnessMapUv:KJ&&D(O.metalnessMap.channel),roughnessMapUv:B0&&D(O.roughnessMap.channel),anisotropyMapUv:c&&D(O.anisotropyMap.channel),clearcoatMapUv:D0&&D(O.clearcoatMap.channel),clearcoatNormalMapUv:U0&&D(O.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:I0&&D(O.clearcoatRoughnessMap.channel),iridescenceMapUv:C0&&D(O.iridescenceMap.channel),iridescenceThicknessMapUv:e&&D(O.iridescenceThicknessMap.channel),sheenColorMapUv:Q0&&D(O.sheenColorMap.channel),sheenRoughnessMapUv:R0&&D(O.sheenRoughnessMap.channel),specularMapUv:_0&&D(O.specularMap.channel),specularColorMapUv:N0&&D(O.specularColorMap.channel),specularIntensityMapUv:v0&&D(O.specularIntensityMap.channel),transmissionMapUv:S&&D(O.transmissionMap.channel),thicknessMapUv:$0&&D(O.thicknessMap.channel),alphaMapUv:O0&&D(O.alphaMap.channel),vertexTangents:!!j.attributes.tangent&&(T||$J),vertexColors:O.vertexColors,vertexAlphas:O.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,pointsUvs:b.isPoints===!0&&!!j.attributes.uv&&(m0||O0),fog:!!u,useFog:O.fog===!0,fogExp2:!!u&&u.isFogExp2,flatShading:O.wireframe===!1&&(O.flatShading===!0||j.attributes.normal===void 0&&T===!1&&(O.isMeshLambertMaterial||O.isMeshPhongMaterial||O.isMeshStandardMaterial||O.isMeshPhysicalMaterial)),sizeAttenuation:O.sizeAttenuation===!0,logarithmicDepthBuffer:N,reversedDepthBuffer:X0,skinning:b.isSkinnedMesh===!0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:q0,morphTextureStride:H0,numDirLights:P.directional.length,numPointLights:P.point.length,numSpotLights:P.spot.length,numSpotLightMaps:P.spotLightMap.length,numRectAreaLights:P.rectArea.length,numHemiLights:P.hemi.length,numDirLightShadows:P.directionalShadowMap.length,numPointLightShadows:P.pointShadowMap.length,numSpotLightShadows:P.spotShadowMap.length,numSpotLightShadowsWithMaps:P.numSpotLightShadowsWithMaps,numLightProbes:P.numLightProbes,numClippingPlanes:U.numPlanes,numClipIntersection:U.numIntersection,dithering:O.dithering,shadowMapEnabled:J.shadowMap.enabled&&y.length>0,shadowMapType:J.shadowMap.type,toneMapping:T0,decodeVideoTexture:m0&&O.map.isVideoTexture===!0&&x0.getTransfer(O.map.colorSpace)===JJ,decodeVideoTextureEmissive:f0&&O.emissiveMap.isVideoTexture===!0&&x0.getTransfer(O.emissiveMap.colorSpace)===JJ,premultipliedAlpha:O.premultipliedAlpha,doubleSided:O.side===oJ,flipSided:O.side===CJ,useDepthPacking:O.depthPacking>=0,depthPacking:O.depthPacking||0,index0AttributeName:O.index0AttributeName,extensionClipCullDistance:M0&&O.extensions.clipCullDistance===!0&&$.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(M0&&O.extensions.multiDraw===!0||p0)&&$.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:$.has("KHR_parallel_shader_compile"),customProgramCacheKey:O.customProgramCacheKey()};return ZJ.vertexUv1s=G.has(1),ZJ.vertexUv2s=G.has(2),ZJ.vertexUv3s=G.has(3),G.clear(),ZJ}function q(O){let P=[];if(O.shaderID)P.push(O.shaderID);else P.push(O.customVertexShaderID),P.push(O.customFragmentShaderID);if(O.defines!==void 0)for(let y in O.defines)P.push(y),P.push(O.defines[y]);if(O.isRawShaderMaterial===!1)F(P,O),z(P,O),P.push(J.outputColorSpace);return P.push(O.customProgramCacheKey),P.join()}function F(O,P){O.push(P.precision),O.push(P.outputColorSpace),O.push(P.envMapMode),O.push(P.envMapCubeUVHeight),O.push(P.mapUv),O.push(P.alphaMapUv),O.push(P.lightMapUv),O.push(P.aoMapUv),O.push(P.bumpMapUv),O.push(P.normalMapUv),O.push(P.displacementMapUv),O.push(P.emissiveMapUv),O.push(P.metalnessMapUv),O.push(P.roughnessMapUv),O.push(P.anisotropyMapUv),O.push(P.clearcoatMapUv),O.push(P.clearcoatNormalMapUv),O.push(P.clearcoatRoughnessMapUv),O.push(P.iridescenceMapUv),O.push(P.iridescenceThicknessMapUv),O.push(P.sheenColorMapUv),O.push(P.sheenRoughnessMapUv),O.push(P.specularMapUv),O.push(P.specularColorMapUv),O.push(P.specularIntensityMapUv),O.push(P.transmissionMapUv),O.push(P.thicknessMapUv),O.push(P.combine),O.push(P.fogExp2),O.push(P.sizeAttenuation),O.push(P.morphTargetsCount),O.push(P.morphAttributeCount),O.push(P.numDirLights),O.push(P.numPointLights),O.push(P.numSpotLights),O.push(P.numSpotLightMaps),O.push(P.numHemiLights),O.push(P.numRectAreaLights),O.push(P.numDirLightShadows),O.push(P.numPointLightShadows),O.push(P.numSpotLightShadows),O.push(P.numSpotLightShadowsWithMaps),O.push(P.numLightProbes),O.push(P.shadowMapType),O.push(P.toneMapping),O.push(P.numClippingPlanes),O.push(P.numClipIntersection),O.push(P.depthPacking)}function z(O,P){if(W.disableAll(),P.instancing)W.enable(0);if(P.instancingColor)W.enable(1);if(P.instancingMorph)W.enable(2);if(P.matcap)W.enable(3);if(P.envMap)W.enable(4);if(P.normalMapObjectSpace)W.enable(5);if(P.normalMapTangentSpace)W.enable(6);if(P.clearcoat)W.enable(7);if(P.iridescence)W.enable(8);if(P.alphaTest)W.enable(9);if(P.vertexColors)W.enable(10);if(P.vertexAlphas)W.enable(11);if(P.vertexUv1s)W.enable(12);if(P.vertexUv2s)W.enable(13);if(P.vertexUv3s)W.enable(14);if(P.vertexTangents)W.enable(15);if(P.anisotropy)W.enable(16);if(P.alphaHash)W.enable(17);if(P.batching)W.enable(18);if(P.dispersion)W.enable(19);if(P.batchingColor)W.enable(20);if(P.gradientMap)W.enable(21);if(O.push(W.mask),W.disableAll(),P.fog)W.enable(0);if(P.useFog)W.enable(1);if(P.flatShading)W.enable(2);if(P.logarithmicDepthBuffer)W.enable(3);if(P.reversedDepthBuffer)W.enable(4);if(P.skinning)W.enable(5);if(P.morphTargets)W.enable(6);if(P.morphNormals)W.enable(7);if(P.morphColors)W.enable(8);if(P.premultipliedAlpha)W.enable(9);if(P.shadowMapEnabled)W.enable(10);if(P.doubleSided)W.enable(11);if(P.flipSided)W.enable(12);if(P.useDepthPacking)W.enable(13);if(P.dithering)W.enable(14);if(P.transmission)W.enable(15);if(P.sheen)W.enable(16);if(P.opaque)W.enable(17);if(P.pointsUvs)W.enable(18);if(P.decodeVideoTexture)W.enable(19);if(P.decodeVideoTextureEmissive)W.enable(20);if(P.alphaToCoverage)W.enable(21);O.push(W.mask)}function B(O){let P=R[O.type],y;if(P){let A=eJ[P];y=oZ.clone(A.uniforms)}else y=O.uniforms;return y}function L(O,P){let y=E.get(P);if(y!==void 0)++y.usedTimes;else y=new nY(J,P,O,K),Y.push(y),E.set(P,y);return y}function w(O){if(--O.usedTimes===0){let P=Y.indexOf(O);Y[P]=Y[Y.length-1],Y.pop(),E.delete(O.cacheKey),O.destroy()}}function _(O){H.remove(O)}function C(){H.dispose()}return{getParameters:V,getProgramCacheKey:q,getUniforms:B,acquireProgram:L,releaseProgram:w,releaseShaderCache:_,programs:Y,dispose:C}}function oY(){let J=new WeakMap;function Q(W){return J.has(W)}function $(W){let H=J.get(W);if(H===void 0)H={},J.set(W,H);return H}function Z(W){J.delete(W)}function K(W,H,G){J.get(W)[H]=G}function U(){J=new WeakMap}return{has:Q,get:$,remove:Z,update:K,dispose:U}}function aY(J,Q){if(J.groupOrder!==Q.groupOrder)return J.groupOrder-Q.groupOrder;else if(J.renderOrder!==Q.renderOrder)return J.renderOrder-Q.renderOrder;else if(J.material.id!==Q.material.id)return J.material.id-Q.material.id;else if(J.materialVariant!==Q.materialVariant)return J.materialVariant-Q.materialVariant;else if(J.z!==Q.z)return J.z-Q.z;else return J.id-Q.id}function OK(J,Q){if(J.groupOrder!==Q.groupOrder)return J.groupOrder-Q.groupOrder;else if(J.renderOrder!==Q.renderOrder)return J.renderOrder-Q.renderOrder;else if(J.z!==Q.z)return Q.z-J.z;else return J.id-Q.id}function RK(){let J=[],Q=0,$=[],Z=[],K=[];function U(){Q=0,$.length=0,Z.length=0,K.length=0}function W(X){let R=0;if(X.isInstancedMesh)R+=2;if(X.isSkinnedMesh)R+=1;return R}function H(X,R,D,V,q,F){let z=J[Q];if(z===void 0)z={id:X.id,object:X,geometry:R,material:D,materialVariant:W(X),groupOrder:V,renderOrder:X.renderOrder,z:q,group:F},J[Q]=z;else z.id=X.id,z.object=X,z.geometry=R,z.material=D,z.materialVariant=W(X),z.groupOrder=V,z.renderOrder=X.renderOrder,z.z=q,z.group=F;return Q++,z}function G(X,R,D,V,q,F){let z=H(X,R,D,V,q,F);if(D.transmission>0)Z.push(z);else if(D.transparent===!0)K.push(z);else $.push(z)}function Y(X,R,D,V,q,F){let z=H(X,R,D,V,q,F);if(D.transmission>0)Z.unshift(z);else if(D.transparent===!0)K.unshift(z);else $.unshift(z)}function E(X,R){if($.length>1)$.sort(X||aY);if(Z.length>1)Z.sort(R||OK);if(K.length>1)K.sort(R||OK)}function N(){for(let X=Q,R=J.length;X<R;X++){let D=J[X];if(D.id===null)break;D.id=null,D.object=null,D.geometry=null,D.material=null,D.group=null}}return{opaque:$,transmissive:Z,transparent:K,init:U,push:G,unshift:Y,finish:N,sort:E}}function rY(){let J=new WeakMap;function Q(Z,K){let U=J.get(Z),W;if(U===void 0)W=new RK,J.set(Z,[W]);else if(K>=U.length)W=new RK,U.push(W);else W=U[K];return W}function $(){J=new WeakMap}return{get:Q,dispose:$}}function tY(){let J={};return{get:function(Q){if(J[Q.id]!==void 0)return J[Q.id];let $;switch(Q.type){case"DirectionalLight":$={direction:new x,color:new l0};break;case"SpotLight":$={position:new x,direction:new x,color:new l0,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":$={position:new x,color:new l0,distance:0,decay:0};break;case"HemisphereLight":$={direction:new x,skyColor:new l0,groundColor:new l0};break;case"RectAreaLight":$={color:new l0,position:new x,halfWidth:new x,halfHeight:new x};break}return J[Q.id]=$,$}}}function eY(){let J={};return{get:function(Q){if(J[Q.id]!==void 0)return J[Q.id];let $;switch(Q.type){case"DirectionalLight":$={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new i0};break;case"SpotLight":$={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new i0};break;case"PointLight":$={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new i0,shadowCameraNear:1,shadowCameraFar:1000};break}return J[Q.id]=$,$}}}var JX=0;function QX(J,Q){return(Q.castShadow?2:0)-(J.castShadow?2:0)+(Q.map?1:0)-(J.map?1:0)}function $X(J){let Q=new tY,$=eY(),Z={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let Y=0;Y<9;Y++)Z.probe.push(new x);let K=new x,U=new WJ,W=new WJ;function H(Y){let E=0,N=0,X=0;for(let P=0;P<9;P++)Z.probe[P].set(0,0,0);let R=0,D=0,V=0,q=0,F=0,z=0,B=0,L=0,w=0,_=0,C=0;Y.sort(QX);for(let P=0,y=Y.length;P<y;P++){let A=Y[P],b=A.color,u=A.intensity,j=A.distance,p=null;if(A.shadow&&A.shadow.map)if(A.shadow.map.texture.format===q8)p=A.shadow.map.texture;else p=A.shadow.map.depthTexture||A.shadow.map.texture;if(A.isAmbientLight)E+=b.r*u,N+=b.g*u,X+=b.b*u;else if(A.isLightProbe){for(let v=0;v<9;v++)Z.probe[v].addScaledVector(A.sh.coefficients[v],u);C++}else if(A.isDirectionalLight){let v=Q.get(A);if(v.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){let h=A.shadow,i=$.get(A);i.shadowIntensity=h.intensity,i.shadowBias=h.bias,i.shadowNormalBias=h.normalBias,i.shadowRadius=h.radius,i.shadowMapSize=h.mapSize,Z.directionalShadow[R]=i,Z.directionalShadowMap[R]=p,Z.directionalShadowMatrix[R]=A.shadow.matrix,z++}Z.directional[R]=v,R++}else if(A.isSpotLight){let v=Q.get(A);v.position.setFromMatrixPosition(A.matrixWorld),v.color.copy(b).multiplyScalar(u),v.distance=j,v.coneCos=Math.cos(A.angle),v.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),v.decay=A.decay,Z.spot[V]=v;let h=A.shadow;if(A.map){if(Z.spotLightMap[w]=A.map,w++,h.updateMatrices(A),A.castShadow)_++}if(Z.spotLightMatrix[V]=h.matrix,A.castShadow){let i=$.get(A);i.shadowIntensity=h.intensity,i.shadowBias=h.bias,i.shadowNormalBias=h.normalBias,i.shadowRadius=h.radius,i.shadowMapSize=h.mapSize,Z.spotShadow[V]=i,Z.spotShadowMap[V]=p,L++}V++}else if(A.isRectAreaLight){let v=Q.get(A);v.color.copy(b).multiplyScalar(u),v.halfWidth.set(A.width*0.5,0,0),v.halfHeight.set(0,A.height*0.5,0),Z.rectArea[q]=v,q++}else if(A.isPointLight){let v=Q.get(A);if(v.color.copy(A.color).multiplyScalar(A.intensity),v.distance=A.distance,v.decay=A.decay,A.castShadow){let h=A.shadow,i=$.get(A);i.shadowIntensity=h.intensity,i.shadowBias=h.bias,i.shadowNormalBias=h.normalBias,i.shadowRadius=h.radius,i.shadowMapSize=h.mapSize,i.shadowCameraNear=h.camera.near,i.shadowCameraFar=h.camera.far,Z.pointShadow[D]=i,Z.pointShadowMap[D]=p,Z.pointShadowMatrix[D]=A.shadow.matrix,B++}Z.point[D]=v,D++}else if(A.isHemisphereLight){let v=Q.get(A);v.skyColor.copy(A.color).multiplyScalar(u),v.groundColor.copy(A.groundColor).multiplyScalar(u),Z.hemi[F]=v,F++}}if(q>0)if(J.has("OES_texture_float_linear")===!0)Z.rectAreaLTC1=W0.LTC_FLOAT_1,Z.rectAreaLTC2=W0.LTC_FLOAT_2;else Z.rectAreaLTC1=W0.LTC_HALF_1,Z.rectAreaLTC2=W0.LTC_HALF_2;Z.ambient[0]=E,Z.ambient[1]=N,Z.ambient[2]=X;let O=Z.hash;if(O.directionalLength!==R||O.pointLength!==D||O.spotLength!==V||O.rectAreaLength!==q||O.hemiLength!==F||O.numDirectionalShadows!==z||O.numPointShadows!==B||O.numSpotShadows!==L||O.numSpotMaps!==w||O.numLightProbes!==C)Z.directional.length=R,Z.spot.length=V,Z.rectArea.length=q,Z.point.length=D,Z.hemi.length=F,Z.directionalShadow.length=z,Z.directionalShadowMap.length=z,Z.pointShadow.length=B,Z.pointShadowMap.length=B,Z.spotShadow.length=L,Z.spotShadowMap.length=L,Z.directionalShadowMatrix.length=z,Z.pointShadowMatrix.length=B,Z.spotLightMatrix.length=L+w-_,Z.spotLightMap.length=w,Z.numSpotLightShadowsWithMaps=_,Z.numLightProbes=C,O.directionalLength=R,O.pointLength=D,O.spotLength=V,O.rectAreaLength=q,O.hemiLength=F,O.numDirectionalShadows=z,O.numPointShadows=B,O.numSpotShadows=L,O.numSpotMaps=w,O.numLightProbes=C,Z.version=JX++}function G(Y,E){let N=0,X=0,R=0,D=0,V=0,q=E.matrixWorldInverse;for(let F=0,z=Y.length;F<z;F++){let B=Y[F];if(B.isDirectionalLight){let L=Z.directional[N];L.direction.setFromMatrixPosition(B.matrixWorld),K.setFromMatrixPosition(B.target.matrixWorld),L.direction.sub(K),L.direction.transformDirection(q),N++}else if(B.isSpotLight){let L=Z.spot[R];L.position.setFromMatrixPosition(B.matrixWorld),L.position.applyMatrix4(q),L.direction.setFromMatrixPosition(B.matrixWorld),K.setFromMatrixPosition(B.target.matrixWorld),L.direction.sub(K),L.direction.transformDirection(q),R++}else if(B.isRectAreaLight){let L=Z.rectArea[D];L.position.setFromMatrixPosition(B.matrixWorld),L.position.applyMatrix4(q),W.identity(),U.copy(B.matrixWorld),U.premultiply(q),W.extractRotation(U),L.halfWidth.set(B.width*0.5,0,0),L.halfHeight.set(0,B.height*0.5,0),L.halfWidth.applyMatrix4(W),L.halfHeight.applyMatrix4(W),D++}else if(B.isPointLight){let L=Z.point[X];L.position.setFromMatrixPosition(B.matrixWorld),L.position.applyMatrix4(q),X++}else if(B.isHemisphereLight){let L=Z.hemi[V];L.direction.setFromMatrixPosition(B.matrixWorld),L.direction.transformDirection(q),V++}}}return{setup:H,setupView:G,state:Z}}function MK(J){let Q=new $X(J),$=[],Z=[];function K(E){Y.camera=E,$.length=0,Z.length=0}function U(E){$.push(E)}function W(E){Z.push(E)}function H(){Q.setup($)}function G(E){Q.setupView($,E)}let Y={lightsArray:$,shadowsArray:Z,camera:null,lights:Q,transmissionRenderTarget:{}};return{init:K,state:Y,setupLights:H,setupLightsView:G,pushLight:U,pushShadow:W}}function ZX(J){let Q=new WeakMap;function $(K,U=0){let W=Q.get(K),H;if(W===void 0)H=new MK(J),Q.set(K,[H]);else if(U>=W.length)H=new MK(J),W.push(H);else H=W[U];return H}function Z(){Q=new WeakMap}return{get:$,dispose:Z}}var KX=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,UX=`uniform sampler2D shadow_pass;
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
}`,WX=[new x(1,0,0),new x(-1,0,0),new x(0,1,0),new x(0,-1,0),new x(0,0,1),new x(0,0,-1)],HX=[new x(0,-1,0),new x(0,-1,0),new x(0,0,1),new x(0,0,-1),new x(0,-1,0),new x(0,-1,0)],kK=new WJ,d8=new x,Q$=new x;function GX(J,Q,$){let Z=new h7,K=new i0,U=new i0,W=new HJ,H=new yQ,G=new fQ,Y={},E=$.maxTextureSize,N={[Y8]:CJ,[CJ]:Y8,[oJ]:oJ},X=new hJ({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new i0},radius:{value:4}},vertexShader:KX,fragmentShader:UX}),R=X.clone();R.defines.HORIZONTAL_PASS=1;let D=new LJ;D.setAttribute("position",new vJ(new Float32Array([-1,-1,0.5,3,-1,0.5,-1,3,0.5]),3));let V=new wJ(D,X),q=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=T8;let F=this.type;this.render=function(_,C,O){if(q.enabled===!1)return;if(q.autoUpdate===!1&&q.needsUpdate===!1)return;if(_.length===0)return;if(this.type===i$)w0("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=T8;let P=J.getRenderTarget(),y=J.getActiveCubeFace(),A=J.getActiveMipmapLevel(),b=J.state;if(b.setBlending(aJ),b.buffers.depth.getReversed()===!0)b.buffers.color.setClear(0,0,0,0);else b.buffers.color.setClear(1,1,1,1);b.buffers.depth.setTest(!0),b.setScissorTest(!1);let u=F!==this.type;if(u)C.traverse(function(j){if(j.material)if(Array.isArray(j.material))j.material.forEach((p)=>p.needsUpdate=!0);else j.material.needsUpdate=!0});for(let j=0,p=_.length;j<p;j++){let v=_[j],h=v.shadow;if(h===void 0){w0("WebGLShadowMap:",v,"has no shadow.");continue}if(h.autoUpdate===!1&&h.needsUpdate===!1)continue;K.copy(h.mapSize);let i=h.getFrameExtents();if(K.multiply(i),U.copy(h.mapSize),K.x>E||K.y>E){if(K.x>E)U.x=Math.floor(E/i.x),K.x=U.x*i.x,h.mapSize.x=U.x;if(K.y>E)U.y=Math.floor(E/i.y),K.y=U.y*i.y,h.mapSize.y=U.y}let n=J.state.buffers.depth.getReversed();if(h.camera._reversedDepth=n,h.map===null||u===!0){if(h.map!==null){if(h.map.depthTexture!==null)h.map.depthTexture.dispose(),h.map.depthTexture=null;h.map.dispose()}if(this.type===G8){if(v.isPointLight){w0("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}h.map=new bJ(K.x,K.y,{format:q8,type:Y9,minFilter:PJ,magFilter:PJ,generateMipmaps:!1}),h.map.texture.name=v.name+".shadowMap",h.map.depthTexture=new h9(K.x,K.y,G9),h.map.depthTexture.name=v.name+".shadowMapDepth",h.map.depthTexture.format=j9,h.map.depthTexture.compareFunction=null,h.map.depthTexture.minFilter=V9,h.map.depthTexture.magFilter=V9}else{if(v.isPointLight)h.map=new U$(K.x),h.map.depthTexture=new TQ(K.x,L9);else h.map=new bJ(K.x,K.y),h.map.depthTexture=new h9(K.x,K.y,L9);if(h.map.depthTexture.name=v.name+".shadowMap",h.map.depthTexture.format=j9,this.type===T8)h.map.depthTexture.compareFunction=n?T7:w7,h.map.depthTexture.minFilter=PJ,h.map.depthTexture.magFilter=PJ;else h.map.depthTexture.compareFunction=null,h.map.depthTexture.minFilter=V9,h.map.depthTexture.magFilter=V9}h.camera.updateProjectionMatrix()}let J0=h.map.isWebGLCubeRenderTarget?6:1;for(let q0=0;q0<J0;q0++){if(h.map.isWebGLCubeRenderTarget)J.setRenderTarget(h.map,q0),J.clear();else{if(q0===0)J.setRenderTarget(h.map),J.clear();let H0=h.getViewport(q0);W.set(U.x*H0.x,U.y*H0.y,U.x*H0.z,U.y*H0.w),b.viewport(W)}if(v.isPointLight){let{camera:H0,matrix:QJ}=h,c0=v.distance||H0.far;if(c0!==H0.far)H0.far=c0,H0.updateProjectionMatrix();d8.setFromMatrixPosition(v.matrixWorld),H0.position.copy(d8),Q$.copy(H0.position),Q$.add(WX[q0]),H0.up.copy(HX[q0]),H0.lookAt(Q$),H0.updateMatrixWorld(),QJ.makeTranslation(-d8.x,-d8.y,-d8.z),kK.multiplyMatrices(H0.projectionMatrix,H0.matrixWorldInverse),h._frustum.setFromProjectionMatrix(kK,H0.coordinateSystem,H0.reversedDepth)}else h.updateMatrices(v);Z=h.getFrustum(),L(C,O,h.camera,v,this.type)}if(h.isPointLightShadow!==!0&&this.type===G8)z(h,O);h.needsUpdate=!1}F=this.type,q.needsUpdate=!1,J.setRenderTarget(P,y,A)};function z(_,C){let O=Q.update(V);if(X.defines.VSM_SAMPLES!==_.blurSamples)X.defines.VSM_SAMPLES=_.blurSamples,R.defines.VSM_SAMPLES=_.blurSamples,X.needsUpdate=!0,R.needsUpdate=!0;if(_.mapPass===null)_.mapPass=new bJ(K.x,K.y,{format:q8,type:Y9});X.uniforms.shadow_pass.value=_.map.depthTexture,X.uniforms.resolution.value=_.mapSize,X.uniforms.radius.value=_.radius,J.setRenderTarget(_.mapPass),J.clear(),J.renderBufferDirect(C,null,O,X,V,null),R.uniforms.shadow_pass.value=_.mapPass.texture,R.uniforms.resolution.value=_.mapSize,R.uniforms.radius.value=_.radius,J.setRenderTarget(_.map),J.clear(),J.renderBufferDirect(C,null,O,R,V,null)}function B(_,C,O,P){let y=null,A=O.isPointLight===!0?_.customDistanceMaterial:_.customDepthMaterial;if(A!==void 0)y=A;else if(y=O.isPointLight===!0?G:H,J.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){let b=y.uuid,u=C.uuid,j=Y[b];if(j===void 0)j={},Y[b]=j;let p=j[u];if(p===void 0)p=y.clone(),j[u]=p,C.addEventListener("dispose",w);y=p}if(y.visible=C.visible,y.wireframe=C.wireframe,P===G8)y.side=C.shadowSide!==null?C.shadowSide:C.side;else y.side=C.shadowSide!==null?C.shadowSide:N[C.side];if(y.alphaMap=C.alphaMap,y.alphaTest=C.alphaToCoverage===!0?0.5:C.alphaTest,y.map=C.map,y.clipShadows=C.clipShadows,y.clippingPlanes=C.clippingPlanes,y.clipIntersection=C.clipIntersection,y.displacementMap=C.displacementMap,y.displacementScale=C.displacementScale,y.displacementBias=C.displacementBias,y.wireframeLinewidth=C.wireframeLinewidth,y.linewidth=C.linewidth,O.isPointLight===!0&&y.isMeshDistanceMaterial===!0){let b=J.properties.get(y);b.light=O}return y}function L(_,C,O,P,y){if(_.visible===!1)return;if(_.layers.test(C.layers)&&(_.isMesh||_.isLine||_.isPoints)){if((_.castShadow||_.receiveShadow&&y===G8)&&(!_.frustumCulled||Z.intersectsObject(_))){_.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,_.matrixWorld);let u=Q.update(_),j=_.material;if(Array.isArray(j)){let p=u.groups;for(let v=0,h=p.length;v<h;v++){let i=p[v],n=j[i.materialIndex];if(n&&n.visible){let J0=B(_,n,P,y);_.onBeforeShadow(J,_,C,O,u,J0,i),J.renderBufferDirect(O,null,u,J0,_,i),_.onAfterShadow(J,_,C,O,u,J0,i)}}}else if(j.visible){let p=B(_,j,P,y);_.onBeforeShadow(J,_,C,O,u,p,null),J.renderBufferDirect(O,null,u,p,_,null),_.onAfterShadow(J,_,C,O,u,p,null)}}}let b=_.children;for(let u=0,j=b.length;u<j;u++)L(b[u],C,O,P,y)}function w(_){_.target.removeEventListener("dispose",w);for(let O in Y){let P=Y[O],y=_.target.uuid;if(y in P)P[y].dispose(),delete P[y]}}}function YX(J,Q){function $(){let S=!1,$0=new HJ,Z0=null,O0=new HJ(0,0,0,0);return{setMask:function(a){if(Z0!==a&&!S)J.colorMask(a,a,a,a),Z0=a},setLocked:function(a){S=a},setClear:function(a,r,M0,T0,ZJ){if(ZJ===!0)a*=T0,r*=T0,M0*=T0;if($0.set(a,r,M0,T0),O0.equals($0)===!1)J.clearColor(a,r,M0,T0),O0.copy($0)},reset:function(){S=!1,Z0=null,O0.set(-1,0,0,0)}}}function Z(){let S=!1,$0=!1,Z0=null,O0=null,a=null;return{setReversed:function(r){if($0!==r){let M0=Q.get("EXT_clip_control");if(r)M0.clipControlEXT(M0.LOWER_LEFT_EXT,M0.ZERO_TO_ONE_EXT);else M0.clipControlEXT(M0.LOWER_LEFT_EXT,M0.NEGATIVE_ONE_TO_ONE_EXT);$0=r;let T0=a;a=null,this.setClear(T0)}},getReversed:function(){return $0},setTest:function(r){if(r)F0(J.DEPTH_TEST);else X0(J.DEPTH_TEST)},setMask:function(r){if(Z0!==r&&!S)J.depthMask(r),Z0=r},setFunc:function(r){if($0)r=sZ[r];if(O0!==r){switch(r){case DZ:J.depthFunc(J.NEVER);break;case OZ:J.depthFunc(J.ALWAYS);break;case RZ:J.depthFunc(J.LESS);break;case T6:J.depthFunc(J.LEQUAL);break;case MZ:J.depthFunc(J.EQUAL);break;case kZ:J.depthFunc(J.GEQUAL);break;case VZ:J.depthFunc(J.GREATER);break;case LZ:J.depthFunc(J.NOTEQUAL);break;default:J.depthFunc(J.LEQUAL)}O0=r}},setLocked:function(r){S=r},setClear:function(r){if(a!==r){if(a=r,$0)r=1-r;J.clearDepth(r)}},reset:function(){S=!1,Z0=null,O0=null,a=null,$0=!1}}}function K(){let S=!1,$0=null,Z0=null,O0=null,a=null,r=null,M0=null,T0=null,ZJ=null;return{setTest:function(o0){if(!S)if(o0)F0(J.STENCIL_TEST);else X0(J.STENCIL_TEST)},setMask:function(o0){if($0!==o0&&!S)J.stencilMask(o0),$0=o0},setFunc:function(o0,J9,cJ){if(Z0!==o0||O0!==J9||a!==cJ)J.stencilFunc(o0,J9,cJ),Z0=o0,O0=J9,a=cJ},setOp:function(o0,J9,cJ){if(r!==o0||M0!==J9||T0!==cJ)J.stencilOp(o0,J9,cJ),r=o0,M0=J9,T0=cJ},setLocked:function(o0){S=o0},setClear:function(o0){if(ZJ!==o0)J.clearStencil(o0),ZJ=o0},reset:function(){S=!1,$0=null,Z0=null,O0=null,a=null,r=null,M0=null,T0=null,ZJ=null}}}let U=new $,W=new Z,H=new K,G=new WeakMap,Y=new WeakMap,E={},N={},X=new WeakMap,R=[],D=null,V=!1,q=null,F=null,z=null,B=null,L=null,w=null,_=null,C=new l0(0,0,0),O=0,P=!1,y=null,A=null,b=null,u=null,j=null,p=J.getParameter(J.MAX_COMBINED_TEXTURE_IMAGE_UNITS),v=!1,h=0,i=J.getParameter(J.VERSION);if(i.indexOf("WebGL")!==-1)h=parseFloat(/^WebGL (\d)/.exec(i)[1]),v=h>=1;else if(i.indexOf("OpenGL ES")!==-1)h=parseFloat(/^OpenGL ES (\d)/.exec(i)[1]),v=h>=2;let n=null,J0={},q0=J.getParameter(J.SCISSOR_BOX),H0=J.getParameter(J.VIEWPORT),QJ=new HJ().fromArray(q0),c0=new HJ().fromArray(H0);function o(S,$0,Z0,O0){let a=new Uint8Array(4),r=J.createTexture();J.bindTexture(S,r),J.texParameteri(S,J.TEXTURE_MIN_FILTER,J.NEAREST),J.texParameteri(S,J.TEXTURE_MAG_FILTER,J.NEAREST);for(let M0=0;M0<Z0;M0++)if(S===J.TEXTURE_3D||S===J.TEXTURE_2D_ARRAY)J.texImage3D($0,0,J.RGBA,1,1,O0,0,J.RGBA,J.UNSIGNED_BYTE,a);else J.texImage2D($0+M0,0,J.RGBA,1,1,0,J.RGBA,J.UNSIGNED_BYTE,a);return r}let K0={};K0[J.TEXTURE_2D]=o(J.TEXTURE_2D,J.TEXTURE_2D,1),K0[J.TEXTURE_CUBE_MAP]=o(J.TEXTURE_CUBE_MAP,J.TEXTURE_CUBE_MAP_POSITIVE_X,6),K0[J.TEXTURE_2D_ARRAY]=o(J.TEXTURE_2D_ARRAY,J.TEXTURE_2D_ARRAY,1,1),K0[J.TEXTURE_3D]=o(J.TEXTURE_3D,J.TEXTURE_3D,1,1),U.setClear(0,0,0,1),W.setClear(1),H.setClear(0),F0(J.DEPTH_TEST),W.setFunc(T6),YJ(!1),T(A6),F0(J.CULL_FACE),t0(aJ);function F0(S){if(E[S]!==!0)J.enable(S),E[S]=!0}function X0(S){if(E[S]!==!1)J.disable(S),E[S]=!1}function A0(S,$0){if(N[S]!==$0){if(J.bindFramebuffer(S,$0),N[S]=$0,S===J.DRAW_FRAMEBUFFER)N[J.FRAMEBUFFER]=$0;if(S===J.FRAMEBUFFER)N[J.DRAW_FRAMEBUFFER]=$0;return!0}return!1}function p0(S,$0){let Z0=R,O0=!1;if(S){if(Z0=X.get($0),Z0===void 0)Z0=[],X.set($0,Z0);let a=S.textures;if(Z0.length!==a.length||Z0[0]!==J.COLOR_ATTACHMENT0){for(let r=0,M0=a.length;r<M0;r++)Z0[r]=J.COLOR_ATTACHMENT0+r;Z0.length=a.length,O0=!0}}else if(Z0[0]!==J.BACK)Z0[0]=J.BACK,O0=!0;if(O0)J.drawBuffers(Z0)}function m0(S){if(D!==S)return J.useProgram(S),D=S,!0;return!1}let d0={[X8]:J.FUNC_ADD,[a$]:J.FUNC_SUBTRACT,[r$]:J.FUNC_REVERSE_SUBTRACT};d0[t$]=J.MIN,d0[e$]=J.MAX;let n0={[JZ]:J.ZERO,[QZ]:J.ONE,[$Z]:J.SRC_COLOR,[KZ]:J.SRC_ALPHA,[XZ]:J.SRC_ALPHA_SATURATE,[GZ]:J.DST_COLOR,[WZ]:J.DST_ALPHA,[ZZ]:J.ONE_MINUS_SRC_COLOR,[UZ]:J.ONE_MINUS_SRC_ALPHA,[YZ]:J.ONE_MINUS_DST_COLOR,[HZ]:J.ONE_MINUS_DST_ALPHA,[NZ]:J.CONSTANT_COLOR,[EZ]:J.ONE_MINUS_CONSTANT_COLOR,[qZ]:J.CONSTANT_ALPHA,[FZ]:J.ONE_MINUS_CONSTANT_ALPHA};function t0(S,$0,Z0,O0,a,r,M0,T0,ZJ,o0){if(S===aJ){if(V===!0)X0(J.BLEND),V=!1;return}if(V===!1)F0(J.BLEND),V=!0;if(S!==o$){if(S!==q||o0!==P){if(F!==X8||L!==X8)J.blendEquation(J.FUNC_ADD),F=X8,L=X8;if(o0)switch(S){case S8:J.blendFuncSeparate(J.ONE,J.ONE_MINUS_SRC_ALPHA,J.ONE,J.ONE_MINUS_SRC_ALPHA);break;case C6:J.blendFunc(J.ONE,J.ONE);break;case P6:J.blendFuncSeparate(J.ZERO,J.ONE_MINUS_SRC_COLOR,J.ZERO,J.ONE);break;case w6:J.blendFuncSeparate(J.DST_COLOR,J.ONE_MINUS_SRC_ALPHA,J.ZERO,J.ONE);break;default:P0("WebGLState: Invalid blending: ",S);break}else switch(S){case S8:J.blendFuncSeparate(J.SRC_ALPHA,J.ONE_MINUS_SRC_ALPHA,J.ONE,J.ONE_MINUS_SRC_ALPHA);break;case C6:J.blendFuncSeparate(J.SRC_ALPHA,J.ONE,J.ONE,J.ONE);break;case P6:P0("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case w6:P0("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:P0("WebGLState: Invalid blending: ",S);break}z=null,B=null,w=null,_=null,C.set(0,0,0),O=0,q=S,P=o0}return}if(a=a||$0,r=r||Z0,M0=M0||O0,$0!==F||a!==L)J.blendEquationSeparate(d0[$0],d0[a]),F=$0,L=a;if(Z0!==z||O0!==B||r!==w||M0!==_)J.blendFuncSeparate(n0[Z0],n0[O0],n0[r],n0[M0]),z=Z0,B=O0,w=r,_=M0;if(T0.equals(C)===!1||ZJ!==O)J.blendColor(T0.r,T0.g,T0.b,ZJ),C.copy(T0),O=ZJ;q=S,P=!1}function h0(S,$0){S.side===oJ?X0(J.CULL_FACE):F0(J.CULL_FACE);let Z0=S.side===CJ;if($0)Z0=!Z0;YJ(Z0),S.blending===S8&&S.transparent===!1?t0(aJ):t0(S.blending,S.blendEquation,S.blendSrc,S.blendDst,S.blendEquationAlpha,S.blendSrcAlpha,S.blendDstAlpha,S.blendColor,S.blendAlpha,S.premultipliedAlpha),W.setFunc(S.depthFunc),W.setTest(S.depthTest),W.setMask(S.depthWrite),U.setMask(S.colorWrite);let O0=S.stencilWrite;if(H.setTest(O0),O0)H.setMask(S.stencilWriteMask),H.setFunc(S.stencilFunc,S.stencilRef,S.stencilFuncMask),H.setOp(S.stencilFail,S.stencilZFail,S.stencilZPass);f0(S.polygonOffset,S.polygonOffsetFactor,S.polygonOffsetUnits),S.alphaToCoverage===!0?F0(J.SAMPLE_ALPHA_TO_COVERAGE):X0(J.SAMPLE_ALPHA_TO_COVERAGE)}function YJ(S){if(y!==S){if(S)J.frontFace(J.CW);else J.frontFace(J.CCW);y=S}}function T(S){if(S!==n$){if(F0(J.CULL_FACE),S!==A)if(S===A6)J.cullFace(J.BACK);else if(S===s$)J.cullFace(J.FRONT);else J.cullFace(J.FRONT_AND_BACK)}else X0(J.CULL_FACE);A=S}function DJ(S){if(S!==b){if(v)J.lineWidth(S);b=S}}function f0(S,$0,Z0){if(S){if(F0(J.POLYGON_OFFSET_FILL),u!==$0||j!==Z0){if(u=$0,j=Z0,W.getReversed())$0=-$0;J.polygonOffset($0,Z0)}}else X0(J.POLYGON_OFFSET_FILL)}function KJ(S){if(S)F0(J.SCISSOR_TEST);else X0(J.SCISSOR_TEST)}function B0(S){if(S===void 0)S=J.TEXTURE0+p-1;if(n!==S)J.activeTexture(S),n=S}function $J(S,$0,Z0){if(Z0===void 0)if(n===null)Z0=J.TEXTURE0+p-1;else Z0=n;let O0=J0[Z0];if(O0===void 0)O0={type:void 0,texture:void 0},J0[Z0]=O0;if(O0.type!==S||O0.texture!==$0){if(n!==Z0)J.activeTexture(Z0),n=Z0;J.bindTexture(S,$0||K0[S]),O0.type=S,O0.texture=$0}}function I(){let S=J0[n];if(S!==void 0&&S.type!==void 0)J.bindTexture(S.type,null),S.type=void 0,S.texture=void 0}function M(){try{J.compressedTexImage2D(...arguments)}catch(S){P0("WebGLState:",S)}}function g(){try{J.compressedTexImage3D(...arguments)}catch(S){P0("WebGLState:",S)}}function s(){try{J.texSubImage2D(...arguments)}catch(S){P0("WebGLState:",S)}}function t(){try{J.texSubImage3D(...arguments)}catch(S){P0("WebGLState:",S)}}function c(){try{J.compressedTexSubImage2D(...arguments)}catch(S){P0("WebGLState:",S)}}function D0(){try{J.compressedTexSubImage3D(...arguments)}catch(S){P0("WebGLState:",S)}}function U0(){try{J.texStorage2D(...arguments)}catch(S){P0("WebGLState:",S)}}function I0(){try{J.texStorage3D(...arguments)}catch(S){P0("WebGLState:",S)}}function C0(){try{J.texImage2D(...arguments)}catch(S){P0("WebGLState:",S)}}function e(){try{J.texImage3D(...arguments)}catch(S){P0("WebGLState:",S)}}function Q0(S){if(QJ.equals(S)===!1)J.scissor(S.x,S.y,S.z,S.w),QJ.copy(S)}function R0(S){if(c0.equals(S)===!1)J.viewport(S.x,S.y,S.z,S.w),c0.copy(S)}function _0(S,$0){let Z0=Y.get($0);if(Z0===void 0)Z0=new WeakMap,Y.set($0,Z0);let O0=Z0.get(S);if(O0===void 0)O0=J.getUniformBlockIndex($0,S.name),Z0.set(S,O0)}function N0(S,$0){let O0=Y.get($0).get(S);if(G.get($0)!==O0)J.uniformBlockBinding($0,O0,S.__bindingPointIndex),G.set($0,O0)}function v0(){J.disable(J.BLEND),J.disable(J.CULL_FACE),J.disable(J.DEPTH_TEST),J.disable(J.POLYGON_OFFSET_FILL),J.disable(J.SCISSOR_TEST),J.disable(J.STENCIL_TEST),J.disable(J.SAMPLE_ALPHA_TO_COVERAGE),J.blendEquation(J.FUNC_ADD),J.blendFunc(J.ONE,J.ZERO),J.blendFuncSeparate(J.ONE,J.ZERO,J.ONE,J.ZERO),J.blendColor(0,0,0,0),J.colorMask(!0,!0,!0,!0),J.clearColor(0,0,0,0),J.depthMask(!0),J.depthFunc(J.LESS),W.setReversed(!1),J.clearDepth(1),J.stencilMask(4294967295),J.stencilFunc(J.ALWAYS,0,4294967295),J.stencilOp(J.KEEP,J.KEEP,J.KEEP),J.clearStencil(0),J.cullFace(J.BACK),J.frontFace(J.CCW),J.polygonOffset(0,0),J.activeTexture(J.TEXTURE0),J.bindFramebuffer(J.FRAMEBUFFER,null),J.bindFramebuffer(J.DRAW_FRAMEBUFFER,null),J.bindFramebuffer(J.READ_FRAMEBUFFER,null),J.useProgram(null),J.lineWidth(1),J.scissor(0,0,J.canvas.width,J.canvas.height),J.viewport(0,0,J.canvas.width,J.canvas.height),E={},n=null,J0={},N={},X=new WeakMap,R=[],D=null,V=!1,q=null,F=null,z=null,B=null,L=null,w=null,_=null,C=new l0(0,0,0),O=0,P=!1,y=null,A=null,b=null,u=null,j=null,QJ.set(0,0,J.canvas.width,J.canvas.height),c0.set(0,0,J.canvas.width,J.canvas.height),U.reset(),W.reset(),H.reset()}return{buffers:{color:U,depth:W,stencil:H},enable:F0,disable:X0,bindFramebuffer:A0,drawBuffers:p0,useProgram:m0,setBlending:t0,setMaterial:h0,setFlipSided:YJ,setCullFace:T,setLineWidth:DJ,setPolygonOffset:f0,setScissorTest:KJ,activeTexture:B0,bindTexture:$J,unbindTexture:I,compressedTexImage2D:M,compressedTexImage3D:g,texImage2D:C0,texImage3D:e,updateUBOMapping:_0,uniformBlockBinding:N0,texStorage2D:U0,texStorage3D:I0,texSubImage2D:s,texSubImage3D:t,compressedTexSubImage2D:c,compressedTexSubImage3D:D0,scissor:Q0,viewport:R0,reset:v0}}function XX(J,Q,$,Z,K,U,W){let H=Q.has("WEBGL_multisampled_render_to_texture")?Q.get("WEBGL_multisampled_render_to_texture"):null,G=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),Y=new i0,E=new WeakMap,N,X=new WeakMap,R=!1;try{R=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch(I){}function D(I,M){return R?new OffscreenCanvas(I,M):P8("canvas")}function V(I,M,g){let s=1,t=$J(I);if(t.width>g||t.height>g)s=g/Math.max(t.width,t.height);if(s<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){let c=Math.floor(s*t.width),D0=Math.floor(s*t.height);if(N===void 0)N=D(c,D0);let U0=M?D(c,D0):N;return U0.width=c,U0.height=D0,U0.getContext("2d").drawImage(I,0,0,c,D0),w0("WebGLRenderer: Texture has been resized from ("+t.width+"x"+t.height+") to ("+c+"x"+D0+")."),U0}else{if("data"in I)w0("WebGLRenderer: Image in DataTexture is too big ("+t.width+"x"+t.height+").");return I}return I}function q(I){return I.generateMipmaps}function F(I){J.generateMipmap(I)}function z(I){if(I.isWebGLCubeRenderTarget)return J.TEXTURE_CUBE_MAP;if(I.isWebGL3DRenderTarget)return J.TEXTURE_3D;if(I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture)return J.TEXTURE_2D_ARRAY;return J.TEXTURE_2D}function B(I,M,g,s,t=!1){if(I!==null){if(J[I]!==void 0)return J[I];w0("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let c=M;if(M===J.RED){if(g===J.FLOAT)c=J.R32F;if(g===J.HALF_FLOAT)c=J.R16F;if(g===J.UNSIGNED_BYTE)c=J.R8}if(M===J.RED_INTEGER){if(g===J.UNSIGNED_BYTE)c=J.R8UI;if(g===J.UNSIGNED_SHORT)c=J.R16UI;if(g===J.UNSIGNED_INT)c=J.R32UI;if(g===J.BYTE)c=J.R8I;if(g===J.SHORT)c=J.R16I;if(g===J.INT)c=J.R32I}if(M===J.RG){if(g===J.FLOAT)c=J.RG32F;if(g===J.HALF_FLOAT)c=J.RG16F;if(g===J.UNSIGNED_BYTE)c=J.RG8}if(M===J.RG_INTEGER){if(g===J.UNSIGNED_BYTE)c=J.RG8UI;if(g===J.UNSIGNED_SHORT)c=J.RG16UI;if(g===J.UNSIGNED_INT)c=J.RG32UI;if(g===J.BYTE)c=J.RG8I;if(g===J.SHORT)c=J.RG16I;if(g===J.INT)c=J.RG32I}if(M===J.RGB_INTEGER){if(g===J.UNSIGNED_BYTE)c=J.RGB8UI;if(g===J.UNSIGNED_SHORT)c=J.RGB16UI;if(g===J.UNSIGNED_INT)c=J.RGB32UI;if(g===J.BYTE)c=J.RGB8I;if(g===J.SHORT)c=J.RGB16I;if(g===J.INT)c=J.RGB32I}if(M===J.RGBA_INTEGER){if(g===J.UNSIGNED_BYTE)c=J.RGBA8UI;if(g===J.UNSIGNED_SHORT)c=J.RGBA16UI;if(g===J.UNSIGNED_INT)c=J.RGBA32UI;if(g===J.BYTE)c=J.RGBA8I;if(g===J.SHORT)c=J.RGBA16I;if(g===J.INT)c=J.RGBA32I}if(M===J.RGB){if(g===J.UNSIGNED_INT_5_9_9_9_REV)c=J.RGB9_E5;if(g===J.UNSIGNED_INT_10F_11F_11F_REV)c=J.R11F_G11F_B10F}if(M===J.RGBA){let D0=t?BQ:x0.getTransfer(s);if(g===J.FLOAT)c=J.RGBA32F;if(g===J.HALF_FLOAT)c=J.RGBA16F;if(g===J.UNSIGNED_BYTE)c=D0===JJ?J.SRGB8_ALPHA8:J.RGBA8;if(g===J.UNSIGNED_SHORT_4_4_4_4)c=J.RGBA4;if(g===J.UNSIGNED_SHORT_5_5_5_1)c=J.RGB5_A1}if(c===J.R16F||c===J.R32F||c===J.RG16F||c===J.RG32F||c===J.RGBA16F||c===J.RGBA32F)Q.get("EXT_color_buffer_float");return c}function L(I,M){let g;if(I){if(M===null||M===L9||M===E8)g=J.DEPTH24_STENCIL8;else if(M===G9)g=J.DEPTH32F_STENCIL8;else if(M===f8)g=J.DEPTH24_STENCIL8,w0("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")}else if(M===null||M===L9||M===E8)g=J.DEPTH_COMPONENT24;else if(M===G9)g=J.DEPTH_COMPONENT32F;else if(M===f8)g=J.DEPTH_COMPONENT16;return g}function w(I,M){if(q(I)===!0||I.isFramebufferTexture&&I.minFilter!==V9&&I.minFilter!==PJ)return Math.log2(Math.max(M.width,M.height))+1;else if(I.mipmaps!==void 0&&I.mipmaps.length>0)return I.mipmaps.length;else if(I.isCompressedTexture&&Array.isArray(I.image))return M.mipmaps.length;else return 1}function _(I){let M=I.target;if(M.removeEventListener("dispose",_),O(M),M.isVideoTexture)E.delete(M)}function C(I){let M=I.target;M.removeEventListener("dispose",C),y(M)}function O(I){let M=Z.get(I);if(M.__webglInit===void 0)return;let g=I.source,s=X.get(g);if(s){let t=s[M.__cacheKey];if(t.usedTimes--,t.usedTimes===0)P(I);if(Object.keys(s).length===0)X.delete(g)}Z.remove(I)}function P(I){let M=Z.get(I);J.deleteTexture(M.__webglTexture);let g=I.source,s=X.get(g);delete s[M.__cacheKey],W.memory.textures--}function y(I){let M=Z.get(I);if(I.depthTexture)I.depthTexture.dispose(),Z.remove(I.depthTexture);if(I.isWebGLCubeRenderTarget)for(let s=0;s<6;s++){if(Array.isArray(M.__webglFramebuffer[s]))for(let t=0;t<M.__webglFramebuffer[s].length;t++)J.deleteFramebuffer(M.__webglFramebuffer[s][t]);else J.deleteFramebuffer(M.__webglFramebuffer[s]);if(M.__webglDepthbuffer)J.deleteRenderbuffer(M.__webglDepthbuffer[s])}else{if(Array.isArray(M.__webglFramebuffer))for(let s=0;s<M.__webglFramebuffer.length;s++)J.deleteFramebuffer(M.__webglFramebuffer[s]);else J.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer)J.deleteRenderbuffer(M.__webglDepthbuffer);if(M.__webglMultisampledFramebuffer)J.deleteFramebuffer(M.__webglMultisampledFramebuffer);if(M.__webglColorRenderbuffer){for(let s=0;s<M.__webglColorRenderbuffer.length;s++)if(M.__webglColorRenderbuffer[s])J.deleteRenderbuffer(M.__webglColorRenderbuffer[s])}if(M.__webglDepthRenderbuffer)J.deleteRenderbuffer(M.__webglDepthRenderbuffer)}let g=I.textures;for(let s=0,t=g.length;s<t;s++){let c=Z.get(g[s]);if(c.__webglTexture)J.deleteTexture(c.__webglTexture),W.memory.textures--;Z.remove(g[s])}Z.remove(I)}let A=0;function b(){A=0}function u(){let I=A;if(I>=K.maxTextures)w0("WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+K.maxTextures);return A+=1,I}function j(I){let M=[];return M.push(I.wrapS),M.push(I.wrapT),M.push(I.wrapR||0),M.push(I.magFilter),M.push(I.minFilter),M.push(I.anisotropy),M.push(I.internalFormat),M.push(I.format),M.push(I.type),M.push(I.generateMipmaps),M.push(I.premultiplyAlpha),M.push(I.flipY),M.push(I.unpackAlignment),M.push(I.colorSpace),M.join()}function p(I,M){let g=Z.get(I);if(I.isVideoTexture)KJ(I);if(I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&g.__version!==I.version){let s=I.image;if(s===null)w0("WebGLRenderer: Texture marked for update but no image data found.");else if(s.complete===!1)w0("WebGLRenderer: Texture marked for update but image is incomplete");else{K0(g,I,M);return}}else if(I.isExternalTexture)g.__webglTexture=I.sourceTexture?I.sourceTexture:null;$.bindTexture(J.TEXTURE_2D,g.__webglTexture,J.TEXTURE0+M)}function v(I,M){let g=Z.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&g.__version!==I.version){K0(g,I,M);return}else if(I.isExternalTexture)g.__webglTexture=I.sourceTexture?I.sourceTexture:null;$.bindTexture(J.TEXTURE_2D_ARRAY,g.__webglTexture,J.TEXTURE0+M)}function h(I,M){let g=Z.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&g.__version!==I.version){K0(g,I,M);return}$.bindTexture(J.TEXTURE_3D,g.__webglTexture,J.TEXTURE0+M)}function i(I,M){let g=Z.get(I);if(I.isCubeDepthTexture!==!0&&I.version>0&&g.__version!==I.version){F0(g,I,M);return}$.bindTexture(J.TEXTURE_CUBE_MAP,g.__webglTexture,J.TEXTURE0+M)}let n={[_Z]:J.REPEAT,[z7]:J.CLAMP_TO_EDGE,[AZ]:J.MIRRORED_REPEAT},J0={[V9]:J.NEAREST,[CZ]:J.NEAREST_MIPMAP_NEAREST,[y8]:J.NEAREST_MIPMAP_LINEAR,[PJ]:J.LINEAR,[I7]:J.LINEAR_MIPMAP_NEAREST,[S9]:J.LINEAR_MIPMAP_LINEAR},q0={[gZ]:J.NEVER,[uZ]:J.ALWAYS,[xZ]:J.LESS,[w7]:J.LEQUAL,[pZ]:J.EQUAL,[T7]:J.GEQUAL,[mZ]:J.GREATER,[dZ]:J.NOTEQUAL};function H0(I,M){if(M.type===G9&&Q.has("OES_texture_float_linear")===!1&&(M.magFilter===PJ||M.magFilter===I7||M.magFilter===y8||M.magFilter===S9||M.minFilter===PJ||M.minFilter===I7||M.minFilter===y8||M.minFilter===S9))w0("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.");if(J.texParameteri(I,J.TEXTURE_WRAP_S,n[M.wrapS]),J.texParameteri(I,J.TEXTURE_WRAP_T,n[M.wrapT]),I===J.TEXTURE_3D||I===J.TEXTURE_2D_ARRAY)J.texParameteri(I,J.TEXTURE_WRAP_R,n[M.wrapR]);if(J.texParameteri(I,J.TEXTURE_MAG_FILTER,J0[M.magFilter]),J.texParameteri(I,J.TEXTURE_MIN_FILTER,J0[M.minFilter]),M.compareFunction)J.texParameteri(I,J.TEXTURE_COMPARE_MODE,J.COMPARE_REF_TO_TEXTURE),J.texParameteri(I,J.TEXTURE_COMPARE_FUNC,q0[M.compareFunction]);if(Q.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===V9)return;if(M.minFilter!==y8&&M.minFilter!==S9)return;if(M.type===G9&&Q.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||Z.get(M).__currentAnisotropy){let g=Q.get("EXT_texture_filter_anisotropic");J.texParameterf(I,g.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,K.getMaxAnisotropy())),Z.get(M).__currentAnisotropy=M.anisotropy}}}function QJ(I,M){let g=!1;if(I.__webglInit===void 0)I.__webglInit=!0,M.addEventListener("dispose",_);let s=M.source,t=X.get(s);if(t===void 0)t={},X.set(s,t);let c=j(M);if(c!==I.__cacheKey){if(t[c]===void 0)t[c]={texture:J.createTexture(),usedTimes:0},W.memory.textures++,g=!0;t[c].usedTimes++;let D0=t[I.__cacheKey];if(D0!==void 0){if(t[I.__cacheKey].usedTimes--,D0.usedTimes===0)P(M)}I.__cacheKey=c,I.__webglTexture=t[c].texture}return g}function c0(I,M,g){return Math.floor(Math.floor(I/g)/M)}function o(I,M,g,s){let c=I.updateRanges;if(c.length===0)$.texSubImage2D(J.TEXTURE_2D,0,0,0,M.width,M.height,g,s,M.data);else{c.sort((e,Q0)=>e.start-Q0.start);let D0=0;for(let e=1;e<c.length;e++){let Q0=c[D0],R0=c[e],_0=Q0.start+Q0.count,N0=c0(R0.start,M.width,4),v0=c0(Q0.start,M.width,4);if(R0.start<=_0+1&&N0===v0&&c0(R0.start+R0.count-1,M.width,4)===N0)Q0.count=Math.max(Q0.count,R0.start+R0.count-Q0.start);else++D0,c[D0]=R0}c.length=D0+1;let U0=J.getParameter(J.UNPACK_ROW_LENGTH),I0=J.getParameter(J.UNPACK_SKIP_PIXELS),C0=J.getParameter(J.UNPACK_SKIP_ROWS);J.pixelStorei(J.UNPACK_ROW_LENGTH,M.width);for(let e=0,Q0=c.length;e<Q0;e++){let R0=c[e],_0=Math.floor(R0.start/4),N0=Math.ceil(R0.count/4),v0=_0%M.width,S=Math.floor(_0/M.width),$0=N0,Z0=1;J.pixelStorei(J.UNPACK_SKIP_PIXELS,v0),J.pixelStorei(J.UNPACK_SKIP_ROWS,S),$.texSubImage2D(J.TEXTURE_2D,0,v0,S,$0,1,g,s,M.data)}I.clearUpdateRanges(),J.pixelStorei(J.UNPACK_ROW_LENGTH,U0),J.pixelStorei(J.UNPACK_SKIP_PIXELS,I0),J.pixelStorei(J.UNPACK_SKIP_ROWS,C0)}}function K0(I,M,g){let s=J.TEXTURE_2D;if(M.isDataArrayTexture||M.isCompressedArrayTexture)s=J.TEXTURE_2D_ARRAY;if(M.isData3DTexture)s=J.TEXTURE_3D;let t=QJ(I,M),c=M.source;$.bindTexture(s,I.__webglTexture,J.TEXTURE0+g);let D0=Z.get(c);if(c.version!==D0.__version||t===!0){$.activeTexture(J.TEXTURE0+g);let U0=x0.getPrimaries(x0.workingColorSpace),I0=M.colorSpace===f9?null:x0.getPrimaries(M.colorSpace),C0=M.colorSpace===f9||U0===I0?J.NONE:J.BROWSER_DEFAULT_WEBGL;J.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,M.flipY),J.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),J.pixelStorei(J.UNPACK_ALIGNMENT,M.unpackAlignment),J.pixelStorei(J.UNPACK_COLORSPACE_CONVERSION_WEBGL,C0);let e=V(M.image,!1,K.maxTextureSize);e=B0(M,e);let Q0=U.convert(M.format,M.colorSpace),R0=U.convert(M.type),_0=B(M.internalFormat,Q0,R0,M.colorSpace,M.isVideoTexture);H0(s,M);let N0,v0=M.mipmaps,S=M.isVideoTexture!==!0,$0=D0.__version===void 0||t===!0,Z0=c.dataReady,O0=w(M,e);if(M.isDepthTexture){if(_0=L(M.format===y9,M.type),$0)if(S)$.texStorage2D(J.TEXTURE_2D,1,_0,e.width,e.height);else $.texImage2D(J.TEXTURE_2D,0,_0,e.width,e.height,0,Q0,R0,null)}else if(M.isDataTexture)if(v0.length>0){if(S&&$0)$.texStorage2D(J.TEXTURE_2D,O0,_0,v0[0].width,v0[0].height);for(let a=0,r=v0.length;a<r;a++)if(N0=v0[a],S){if(Z0)$.texSubImage2D(J.TEXTURE_2D,a,0,0,N0.width,N0.height,Q0,R0,N0.data)}else $.texImage2D(J.TEXTURE_2D,a,_0,N0.width,N0.height,0,Q0,R0,N0.data);M.generateMipmaps=!1}else if(S){if($0)$.texStorage2D(J.TEXTURE_2D,O0,_0,e.width,e.height);if(Z0)o(M,e,Q0,R0)}else $.texImage2D(J.TEXTURE_2D,0,_0,e.width,e.height,0,Q0,R0,e.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){if(S&&$0)$.texStorage3D(J.TEXTURE_2D_ARRAY,O0,_0,v0[0].width,v0[0].height,e.depth);for(let a=0,r=v0.length;a<r;a++)if(N0=v0[a],M.format!==rJ)if(Q0!==null)if(S){if(Z0)if(M.layerUpdates.size>0){let M0=oQ(N0.width,N0.height,M.format,M.type);for(let T0 of M.layerUpdates){let ZJ=N0.data.subarray(T0*M0/N0.data.BYTES_PER_ELEMENT,(T0+1)*M0/N0.data.BYTES_PER_ELEMENT);$.compressedTexSubImage3D(J.TEXTURE_2D_ARRAY,a,0,0,T0,N0.width,N0.height,1,Q0,ZJ)}M.clearLayerUpdates()}else $.compressedTexSubImage3D(J.TEXTURE_2D_ARRAY,a,0,0,0,N0.width,N0.height,e.depth,Q0,N0.data)}else $.compressedTexImage3D(J.TEXTURE_2D_ARRAY,a,_0,N0.width,N0.height,e.depth,0,N0.data,0,0);else w0("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(S){if(Z0)$.texSubImage3D(J.TEXTURE_2D_ARRAY,a,0,0,0,N0.width,N0.height,e.depth,Q0,R0,N0.data)}else $.texImage3D(J.TEXTURE_2D_ARRAY,a,_0,N0.width,N0.height,e.depth,0,Q0,R0,N0.data)}else{if(S&&$0)$.texStorage2D(J.TEXTURE_2D,O0,_0,v0[0].width,v0[0].height);for(let a=0,r=v0.length;a<r;a++)if(N0=v0[a],M.format!==rJ)if(Q0!==null)if(S){if(Z0)$.compressedTexSubImage2D(J.TEXTURE_2D,a,0,0,N0.width,N0.height,Q0,N0.data)}else $.compressedTexImage2D(J.TEXTURE_2D,a,_0,N0.width,N0.height,0,N0.data);else w0("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else if(S){if(Z0)$.texSubImage2D(J.TEXTURE_2D,a,0,0,N0.width,N0.height,Q0,R0,N0.data)}else $.texImage2D(J.TEXTURE_2D,a,_0,N0.width,N0.height,0,Q0,R0,N0.data)}else if(M.isDataArrayTexture)if(S){if($0)$.texStorage3D(J.TEXTURE_2D_ARRAY,O0,_0,e.width,e.height,e.depth);if(Z0)if(M.layerUpdates.size>0){let a=oQ(e.width,e.height,M.format,M.type);for(let r of M.layerUpdates){let M0=e.data.subarray(r*a/e.data.BYTES_PER_ELEMENT,(r+1)*a/e.data.BYTES_PER_ELEMENT);$.texSubImage3D(J.TEXTURE_2D_ARRAY,0,0,0,r,e.width,e.height,1,Q0,R0,M0)}M.clearLayerUpdates()}else $.texSubImage3D(J.TEXTURE_2D_ARRAY,0,0,0,0,e.width,e.height,e.depth,Q0,R0,e.data)}else $.texImage3D(J.TEXTURE_2D_ARRAY,0,_0,e.width,e.height,e.depth,0,Q0,R0,e.data);else if(M.isData3DTexture)if(S){if($0)$.texStorage3D(J.TEXTURE_3D,O0,_0,e.width,e.height,e.depth);if(Z0)$.texSubImage3D(J.TEXTURE_3D,0,0,0,0,e.width,e.height,e.depth,Q0,R0,e.data)}else $.texImage3D(J.TEXTURE_3D,0,_0,e.width,e.height,e.depth,0,Q0,R0,e.data);else if(M.isFramebufferTexture){if($0)if(S)$.texStorage2D(J.TEXTURE_2D,O0,_0,e.width,e.height);else{let{width:a,height:r}=e;for(let M0=0;M0<O0;M0++)$.texImage2D(J.TEXTURE_2D,M0,_0,a,r,0,Q0,R0,null),a>>=1,r>>=1}}else if(v0.length>0){if(S&&$0){let a=$J(v0[0]);$.texStorage2D(J.TEXTURE_2D,O0,_0,a.width,a.height)}for(let a=0,r=v0.length;a<r;a++)if(N0=v0[a],S){if(Z0)$.texSubImage2D(J.TEXTURE_2D,a,0,0,Q0,R0,N0)}else $.texImage2D(J.TEXTURE_2D,a,_0,Q0,R0,N0);M.generateMipmaps=!1}else if(S){if($0){let a=$J(e);$.texStorage2D(J.TEXTURE_2D,O0,_0,a.width,a.height)}if(Z0)$.texSubImage2D(J.TEXTURE_2D,0,0,0,Q0,R0,e)}else $.texImage2D(J.TEXTURE_2D,0,_0,Q0,R0,e);if(q(M))F(s);if(D0.__version=c.version,M.onUpdate)M.onUpdate(M)}I.__version=M.version}function F0(I,M,g){if(M.image.length!==6)return;let s=QJ(I,M),t=M.source;$.bindTexture(J.TEXTURE_CUBE_MAP,I.__webglTexture,J.TEXTURE0+g);let c=Z.get(t);if(t.version!==c.__version||s===!0){$.activeTexture(J.TEXTURE0+g);let D0=x0.getPrimaries(x0.workingColorSpace),U0=M.colorSpace===f9?null:x0.getPrimaries(M.colorSpace),I0=M.colorSpace===f9||D0===U0?J.NONE:J.BROWSER_DEFAULT_WEBGL;J.pixelStorei(J.UNPACK_FLIP_Y_WEBGL,M.flipY),J.pixelStorei(J.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),J.pixelStorei(J.UNPACK_ALIGNMENT,M.unpackAlignment),J.pixelStorei(J.UNPACK_COLORSPACE_CONVERSION_WEBGL,I0);let C0=M.isCompressedTexture||M.image[0].isCompressedTexture,e=M.image[0]&&M.image[0].isDataTexture,Q0=[];for(let r=0;r<6;r++){if(!C0&&!e)Q0[r]=V(M.image[r],!0,K.maxCubemapSize);else Q0[r]=e?M.image[r].image:M.image[r];Q0[r]=B0(M,Q0[r])}let R0=Q0[0],_0=U.convert(M.format,M.colorSpace),N0=U.convert(M.type),v0=B(M.internalFormat,_0,N0,M.colorSpace),S=M.isVideoTexture!==!0,$0=c.__version===void 0||s===!0,Z0=t.dataReady,O0=w(M,R0);H0(J.TEXTURE_CUBE_MAP,M);let a;if(C0){if(S&&$0)$.texStorage2D(J.TEXTURE_CUBE_MAP,O0,v0,R0.width,R0.height);for(let r=0;r<6;r++){a=Q0[r].mipmaps;for(let M0=0;M0<a.length;M0++){let T0=a[M0];if(M.format!==rJ)if(_0!==null)if(S){if(Z0)$.compressedTexSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+r,M0,0,0,T0.width,T0.height,_0,T0.data)}else $.compressedTexImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+r,M0,v0,T0.width,T0.height,0,T0.data);else w0("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()");else if(S){if(Z0)$.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+r,M0,0,0,T0.width,T0.height,_0,N0,T0.data)}else $.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+r,M0,v0,T0.width,T0.height,0,_0,N0,T0.data)}}}else{if(a=M.mipmaps,S&&$0){if(a.length>0)O0++;let r=$J(Q0[0]);$.texStorage2D(J.TEXTURE_CUBE_MAP,O0,v0,r.width,r.height)}for(let r=0;r<6;r++)if(e){if(S){if(Z0)$.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+r,0,0,0,Q0[r].width,Q0[r].height,_0,N0,Q0[r].data)}else $.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+r,0,v0,Q0[r].width,Q0[r].height,0,_0,N0,Q0[r].data);for(let M0=0;M0<a.length;M0++){let ZJ=a[M0].image[r].image;if(S){if(Z0)$.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+r,M0+1,0,0,ZJ.width,ZJ.height,_0,N0,ZJ.data)}else $.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+r,M0+1,v0,ZJ.width,ZJ.height,0,_0,N0,ZJ.data)}}else{if(S){if(Z0)$.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+r,0,0,0,_0,N0,Q0[r])}else $.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+r,0,v0,_0,N0,Q0[r]);for(let M0=0;M0<a.length;M0++){let T0=a[M0];if(S){if(Z0)$.texSubImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+r,M0+1,0,0,_0,N0,T0.image[r])}else $.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+r,M0+1,v0,_0,N0,T0.image[r])}}}if(q(M))F(J.TEXTURE_CUBE_MAP);if(c.__version=t.version,M.onUpdate)M.onUpdate(M)}I.__version=M.version}function X0(I,M,g,s,t,c){let D0=U.convert(g.format,g.colorSpace),U0=U.convert(g.type),I0=B(g.internalFormat,D0,U0,g.colorSpace),C0=Z.get(M),e=Z.get(g);if(e.__renderTarget=M,!C0.__hasExternalTextures){let Q0=Math.max(1,M.width>>c),R0=Math.max(1,M.height>>c);if(t===J.TEXTURE_3D||t===J.TEXTURE_2D_ARRAY)$.texImage3D(t,c,I0,Q0,R0,M.depth,0,D0,U0,null);else $.texImage2D(t,c,I0,Q0,R0,0,D0,U0,null)}if($.bindFramebuffer(J.FRAMEBUFFER,I),f0(M))H.framebufferTexture2DMultisampleEXT(J.FRAMEBUFFER,s,t,e.__webglTexture,0,DJ(M));else if(t===J.TEXTURE_2D||t>=J.TEXTURE_CUBE_MAP_POSITIVE_X&&t<=J.TEXTURE_CUBE_MAP_NEGATIVE_Z)J.framebufferTexture2D(J.FRAMEBUFFER,s,t,e.__webglTexture,c);$.bindFramebuffer(J.FRAMEBUFFER,null)}function A0(I,M,g){if(J.bindRenderbuffer(J.RENDERBUFFER,I),M.depthBuffer){let s=M.depthTexture,t=s&&s.isDepthTexture?s.type:null,c=L(M.stencilBuffer,t),D0=M.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT;if(f0(M))H.renderbufferStorageMultisampleEXT(J.RENDERBUFFER,DJ(M),c,M.width,M.height);else if(g)J.renderbufferStorageMultisample(J.RENDERBUFFER,DJ(M),c,M.width,M.height);else J.renderbufferStorage(J.RENDERBUFFER,c,M.width,M.height);J.framebufferRenderbuffer(J.FRAMEBUFFER,D0,J.RENDERBUFFER,I)}else{let s=M.textures;for(let t=0;t<s.length;t++){let c=s[t],D0=U.convert(c.format,c.colorSpace),U0=U.convert(c.type),I0=B(c.internalFormat,D0,U0,c.colorSpace);if(f0(M))H.renderbufferStorageMultisampleEXT(J.RENDERBUFFER,DJ(M),I0,M.width,M.height);else if(g)J.renderbufferStorageMultisample(J.RENDERBUFFER,DJ(M),I0,M.width,M.height);else J.renderbufferStorage(J.RENDERBUFFER,I0,M.width,M.height)}}J.bindRenderbuffer(J.RENDERBUFFER,null)}function p0(I,M,g){let s=M.isWebGLCubeRenderTarget===!0;if($.bindFramebuffer(J.FRAMEBUFFER,I),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let t=Z.get(M.depthTexture);if(t.__renderTarget=M,!t.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0;if(s){if(t.__webglInit===void 0)t.__webglInit=!0,M.depthTexture.addEventListener("dispose",_);if(t.__webglTexture===void 0){t.__webglTexture=J.createTexture(),$.bindTexture(J.TEXTURE_CUBE_MAP,t.__webglTexture),H0(J.TEXTURE_CUBE_MAP,M.depthTexture);let C0=U.convert(M.depthTexture.format),e=U.convert(M.depthTexture.type),Q0;if(M.depthTexture.format===j9)Q0=J.DEPTH_COMPONENT24;else if(M.depthTexture.format===y9)Q0=J.DEPTH24_STENCIL8;for(let R0=0;R0<6;R0++)J.texImage2D(J.TEXTURE_CUBE_MAP_POSITIVE_X+R0,0,Q0,M.width,M.height,0,C0,e,null)}}else p(M.depthTexture,0);let c=t.__webglTexture,D0=DJ(M),U0=s?J.TEXTURE_CUBE_MAP_POSITIVE_X+g:J.TEXTURE_2D,I0=M.depthTexture.format===y9?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT;if(M.depthTexture.format===j9)if(f0(M))H.framebufferTexture2DMultisampleEXT(J.FRAMEBUFFER,I0,U0,c,0,D0);else J.framebufferTexture2D(J.FRAMEBUFFER,I0,U0,c,0);else if(M.depthTexture.format===y9)if(f0(M))H.framebufferTexture2DMultisampleEXT(J.FRAMEBUFFER,I0,U0,c,0,D0);else J.framebufferTexture2D(J.FRAMEBUFFER,I0,U0,c,0);else throw Error("Unknown depthTexture format")}function m0(I){let M=Z.get(I),g=I.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==I.depthTexture){let s=I.depthTexture;if(M.__depthDisposeCallback)M.__depthDisposeCallback();if(s){let t=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,s.removeEventListener("dispose",t)};s.addEventListener("dispose",t),M.__depthDisposeCallback=t}M.__boundDepthTexture=s}if(I.depthTexture&&!M.__autoAllocateDepthBuffer)if(g)for(let s=0;s<6;s++)p0(M.__webglFramebuffer[s],I,s);else{let s=I.texture.mipmaps;if(s&&s.length>0)p0(M.__webglFramebuffer[0],I,0);else p0(M.__webglFramebuffer,I,0)}else if(g){M.__webglDepthbuffer=[];for(let s=0;s<6;s++)if($.bindFramebuffer(J.FRAMEBUFFER,M.__webglFramebuffer[s]),M.__webglDepthbuffer[s]===void 0)M.__webglDepthbuffer[s]=J.createRenderbuffer(),A0(M.__webglDepthbuffer[s],I,!1);else{let t=I.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT,c=M.__webglDepthbuffer[s];J.bindRenderbuffer(J.RENDERBUFFER,c),J.framebufferRenderbuffer(J.FRAMEBUFFER,t,J.RENDERBUFFER,c)}}else{let s=I.texture.mipmaps;if(s&&s.length>0)$.bindFramebuffer(J.FRAMEBUFFER,M.__webglFramebuffer[0]);else $.bindFramebuffer(J.FRAMEBUFFER,M.__webglFramebuffer);if(M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=J.createRenderbuffer(),A0(M.__webglDepthbuffer,I,!1);else{let t=I.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT,c=M.__webglDepthbuffer;J.bindRenderbuffer(J.RENDERBUFFER,c),J.framebufferRenderbuffer(J.FRAMEBUFFER,t,J.RENDERBUFFER,c)}}$.bindFramebuffer(J.FRAMEBUFFER,null)}function d0(I,M,g){let s=Z.get(I);if(M!==void 0)X0(s.__webglFramebuffer,I,I.texture,J.COLOR_ATTACHMENT0,J.TEXTURE_2D,0);if(g!==void 0)m0(I)}function n0(I){let M=I.texture,g=Z.get(I),s=Z.get(M);I.addEventListener("dispose",C);let t=I.textures,c=I.isWebGLCubeRenderTarget===!0,D0=t.length>1;if(!D0){if(s.__webglTexture===void 0)s.__webglTexture=J.createTexture();s.__version=M.version,W.memory.textures++}if(c){g.__webglFramebuffer=[];for(let U0=0;U0<6;U0++)if(M.mipmaps&&M.mipmaps.length>0){g.__webglFramebuffer[U0]=[];for(let I0=0;I0<M.mipmaps.length;I0++)g.__webglFramebuffer[U0][I0]=J.createFramebuffer()}else g.__webglFramebuffer[U0]=J.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){g.__webglFramebuffer=[];for(let U0=0;U0<M.mipmaps.length;U0++)g.__webglFramebuffer[U0]=J.createFramebuffer()}else g.__webglFramebuffer=J.createFramebuffer();if(D0)for(let U0=0,I0=t.length;U0<I0;U0++){let C0=Z.get(t[U0]);if(C0.__webglTexture===void 0)C0.__webglTexture=J.createTexture(),W.memory.textures++}if(I.samples>0&&f0(I)===!1){g.__webglMultisampledFramebuffer=J.createFramebuffer(),g.__webglColorRenderbuffer=[],$.bindFramebuffer(J.FRAMEBUFFER,g.__webglMultisampledFramebuffer);for(let U0=0;U0<t.length;U0++){let I0=t[U0];g.__webglColorRenderbuffer[U0]=J.createRenderbuffer(),J.bindRenderbuffer(J.RENDERBUFFER,g.__webglColorRenderbuffer[U0]);let C0=U.convert(I0.format,I0.colorSpace),e=U.convert(I0.type),Q0=B(I0.internalFormat,C0,e,I0.colorSpace,I.isXRRenderTarget===!0),R0=DJ(I);J.renderbufferStorageMultisample(J.RENDERBUFFER,R0,Q0,I.width,I.height),J.framebufferRenderbuffer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+U0,J.RENDERBUFFER,g.__webglColorRenderbuffer[U0])}if(J.bindRenderbuffer(J.RENDERBUFFER,null),I.depthBuffer)g.__webglDepthRenderbuffer=J.createRenderbuffer(),A0(g.__webglDepthRenderbuffer,I,!0);$.bindFramebuffer(J.FRAMEBUFFER,null)}}if(c){$.bindTexture(J.TEXTURE_CUBE_MAP,s.__webglTexture),H0(J.TEXTURE_CUBE_MAP,M);for(let U0=0;U0<6;U0++)if(M.mipmaps&&M.mipmaps.length>0)for(let I0=0;I0<M.mipmaps.length;I0++)X0(g.__webglFramebuffer[U0][I0],I,M,J.COLOR_ATTACHMENT0,J.TEXTURE_CUBE_MAP_POSITIVE_X+U0,I0);else X0(g.__webglFramebuffer[U0],I,M,J.COLOR_ATTACHMENT0,J.TEXTURE_CUBE_MAP_POSITIVE_X+U0,0);if(q(M))F(J.TEXTURE_CUBE_MAP);$.unbindTexture()}else if(D0){for(let U0=0,I0=t.length;U0<I0;U0++){let C0=t[U0],e=Z.get(C0),Q0=J.TEXTURE_2D;if(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)Q0=I.isWebGL3DRenderTarget?J.TEXTURE_3D:J.TEXTURE_2D_ARRAY;if($.bindTexture(Q0,e.__webglTexture),H0(Q0,C0),X0(g.__webglFramebuffer,I,C0,J.COLOR_ATTACHMENT0+U0,Q0,0),q(C0))F(Q0)}$.unbindTexture()}else{let U0=J.TEXTURE_2D;if(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)U0=I.isWebGL3DRenderTarget?J.TEXTURE_3D:J.TEXTURE_2D_ARRAY;if($.bindTexture(U0,s.__webglTexture),H0(U0,M),M.mipmaps&&M.mipmaps.length>0)for(let I0=0;I0<M.mipmaps.length;I0++)X0(g.__webglFramebuffer[I0],I,M,J.COLOR_ATTACHMENT0,U0,I0);else X0(g.__webglFramebuffer,I,M,J.COLOR_ATTACHMENT0,U0,0);if(q(M))F(U0);$.unbindTexture()}if(I.depthBuffer)m0(I)}function t0(I){let M=I.textures;for(let g=0,s=M.length;g<s;g++){let t=M[g];if(q(t)){let c=z(I),D0=Z.get(t).__webglTexture;$.bindTexture(c,D0),F(c),$.unbindTexture()}}}let h0=[],YJ=[];function T(I){if(I.samples>0){if(f0(I)===!1){let{textures:M,width:g,height:s}=I,t=J.COLOR_BUFFER_BIT,c=I.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT,D0=Z.get(I),U0=M.length>1;if(U0)for(let C0=0;C0<M.length;C0++)$.bindFramebuffer(J.FRAMEBUFFER,D0.__webglMultisampledFramebuffer),J.framebufferRenderbuffer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+C0,J.RENDERBUFFER,null),$.bindFramebuffer(J.FRAMEBUFFER,D0.__webglFramebuffer),J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0+C0,J.TEXTURE_2D,null,0);$.bindFramebuffer(J.READ_FRAMEBUFFER,D0.__webglMultisampledFramebuffer);let I0=I.texture.mipmaps;if(I0&&I0.length>0)$.bindFramebuffer(J.DRAW_FRAMEBUFFER,D0.__webglFramebuffer[0]);else $.bindFramebuffer(J.DRAW_FRAMEBUFFER,D0.__webglFramebuffer);for(let C0=0;C0<M.length;C0++){if(I.resolveDepthBuffer){if(I.depthBuffer)t|=J.DEPTH_BUFFER_BIT;if(I.stencilBuffer&&I.resolveStencilBuffer)t|=J.STENCIL_BUFFER_BIT}if(U0){J.framebufferRenderbuffer(J.READ_FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.RENDERBUFFER,D0.__webglColorRenderbuffer[C0]);let e=Z.get(M[C0]).__webglTexture;J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0,J.TEXTURE_2D,e,0)}if(J.blitFramebuffer(0,0,g,s,0,0,g,s,t,J.NEAREST),G===!0){if(h0.length=0,YJ.length=0,h0.push(J.COLOR_ATTACHMENT0+C0),I.depthBuffer&&I.resolveDepthBuffer===!1)h0.push(c),YJ.push(c),J.invalidateFramebuffer(J.DRAW_FRAMEBUFFER,YJ);J.invalidateFramebuffer(J.READ_FRAMEBUFFER,h0)}}if($.bindFramebuffer(J.READ_FRAMEBUFFER,null),$.bindFramebuffer(J.DRAW_FRAMEBUFFER,null),U0)for(let C0=0;C0<M.length;C0++){$.bindFramebuffer(J.FRAMEBUFFER,D0.__webglMultisampledFramebuffer),J.framebufferRenderbuffer(J.FRAMEBUFFER,J.COLOR_ATTACHMENT0+C0,J.RENDERBUFFER,D0.__webglColorRenderbuffer[C0]);let e=Z.get(M[C0]).__webglTexture;$.bindFramebuffer(J.FRAMEBUFFER,D0.__webglFramebuffer),J.framebufferTexture2D(J.DRAW_FRAMEBUFFER,J.COLOR_ATTACHMENT0+C0,J.TEXTURE_2D,e,0)}$.bindFramebuffer(J.DRAW_FRAMEBUFFER,D0.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&G){let M=I.stencilBuffer?J.DEPTH_STENCIL_ATTACHMENT:J.DEPTH_ATTACHMENT;J.invalidateFramebuffer(J.DRAW_FRAMEBUFFER,[M])}}}function DJ(I){return Math.min(K.maxSamples,I.samples)}function f0(I){let M=Z.get(I);return I.samples>0&&Q.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function KJ(I){let M=W.render.frame;if(E.get(I)!==M)E.set(I,M),I.update()}function B0(I,M){let{colorSpace:g,format:s,type:t}=I;if(I.isCompressedTexture===!0||I.isVideoTexture===!0)return M;if(g!==v8&&g!==f9)if(x0.getTransfer(g)===JJ){if(s!==rJ||t!==lJ)w0("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.")}else P0("WebGLTextures: Unsupported texture color space:",g);return M}function $J(I){if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement)Y.width=I.naturalWidth||I.width,Y.height=I.naturalHeight||I.height;else if(typeof VideoFrame<"u"&&I instanceof VideoFrame)Y.width=I.displayWidth,Y.height=I.displayHeight;else Y.width=I.width,Y.height=I.height;return Y}this.allocateTextureUnit=u,this.resetTextureUnits=b,this.setTexture2D=p,this.setTexture2DArray=v,this.setTexture3D=h,this.setTextureCube=i,this.rebindTextures=d0,this.setupRenderTarget=n0,this.updateRenderTargetMipmap=t0,this.updateMultisampleRenderTarget=T,this.setupDepthRenderbuffer=m0,this.setupFrameBufferTexture=X0,this.useMultisampledRTT=f0,this.isReversedDepthBuffer=function(){return $.buffers.depth.getReversed()}}function NX(J,Q){function $(Z,K=f9){let U,W=x0.getTransfer(K);if(Z===lJ)return J.UNSIGNED_BYTE;if(Z===x6)return J.UNSIGNED_SHORT_4_4_4_4;if(Z===p6)return J.UNSIGNED_SHORT_5_5_5_1;if(Z===TZ)return J.UNSIGNED_INT_5_9_9_9_REV;if(Z===SZ)return J.UNSIGNED_INT_10F_11F_11F_REV;if(Z===PZ)return J.BYTE;if(Z===wZ)return J.SHORT;if(Z===f8)return J.UNSIGNED_SHORT;if(Z===g6)return J.INT;if(Z===L9)return J.UNSIGNED_INT;if(Z===G9)return J.FLOAT;if(Z===Y9)return J.HALF_FLOAT;if(Z===jZ)return J.ALPHA;if(Z===yZ)return J.RGB;if(Z===rJ)return J.RGBA;if(Z===j9)return J.DEPTH_COMPONENT;if(Z===y9)return J.DEPTH_STENCIL;if(Z===fZ)return J.RED;if(Z===m6)return J.RED_INTEGER;if(Z===q8)return J.RG;if(Z===d6)return J.RG_INTEGER;if(Z===u6)return J.RGBA_INTEGER;if(Z===_7||Z===A7||Z===C7||Z===P7)if(W===JJ)if(U=Q.get("WEBGL_compressed_texture_s3tc_srgb"),U!==null){if(Z===_7)return U.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(Z===A7)return U.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(Z===C7)return U.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(Z===P7)return U.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(U=Q.get("WEBGL_compressed_texture_s3tc"),U!==null){if(Z===_7)return U.COMPRESSED_RGB_S3TC_DXT1_EXT;if(Z===A7)return U.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(Z===C7)return U.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(Z===P7)return U.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(Z===l6||Z===c6||Z===n6||Z===s6)if(U=Q.get("WEBGL_compressed_texture_pvrtc"),U!==null){if(Z===l6)return U.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(Z===c6)return U.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(Z===n6)return U.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(Z===s6)return U.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(Z===i6||Z===o6||Z===a6||Z===r6||Z===t6||Z===e6||Z===JQ)if(U=Q.get("WEBGL_compressed_texture_etc"),U!==null){if(Z===i6||Z===o6)return W===JJ?U.COMPRESSED_SRGB8_ETC2:U.COMPRESSED_RGB8_ETC2;if(Z===a6)return W===JJ?U.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:U.COMPRESSED_RGBA8_ETC2_EAC;if(Z===r6)return U.COMPRESSED_R11_EAC;if(Z===t6)return U.COMPRESSED_SIGNED_R11_EAC;if(Z===e6)return U.COMPRESSED_RG11_EAC;if(Z===JQ)return U.COMPRESSED_SIGNED_RG11_EAC}else return null;if(Z===QQ||Z===$Q||Z===ZQ||Z===KQ||Z===UQ||Z===WQ||Z===HQ||Z===GQ||Z===YQ||Z===XQ||Z===NQ||Z===EQ||Z===qQ||Z===FQ)if(U=Q.get("WEBGL_compressed_texture_astc"),U!==null){if(Z===QQ)return W===JJ?U.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:U.COMPRESSED_RGBA_ASTC_4x4_KHR;if(Z===$Q)return W===JJ?U.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:U.COMPRESSED_RGBA_ASTC_5x4_KHR;if(Z===ZQ)return W===JJ?U.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:U.COMPRESSED_RGBA_ASTC_5x5_KHR;if(Z===KQ)return W===JJ?U.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:U.COMPRESSED_RGBA_ASTC_6x5_KHR;if(Z===UQ)return W===JJ?U.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:U.COMPRESSED_RGBA_ASTC_6x6_KHR;if(Z===WQ)return W===JJ?U.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:U.COMPRESSED_RGBA_ASTC_8x5_KHR;if(Z===HQ)return W===JJ?U.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:U.COMPRESSED_RGBA_ASTC_8x6_KHR;if(Z===GQ)return W===JJ?U.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:U.COMPRESSED_RGBA_ASTC_8x8_KHR;if(Z===YQ)return W===JJ?U.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:U.COMPRESSED_RGBA_ASTC_10x5_KHR;if(Z===XQ)return W===JJ?U.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:U.COMPRESSED_RGBA_ASTC_10x6_KHR;if(Z===NQ)return W===JJ?U.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:U.COMPRESSED_RGBA_ASTC_10x8_KHR;if(Z===EQ)return W===JJ?U.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:U.COMPRESSED_RGBA_ASTC_10x10_KHR;if(Z===qQ)return W===JJ?U.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:U.COMPRESSED_RGBA_ASTC_12x10_KHR;if(Z===FQ)return W===JJ?U.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:U.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(Z===DQ||Z===OQ||Z===RQ)if(U=Q.get("EXT_texture_compression_bptc"),U!==null){if(Z===DQ)return W===JJ?U.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:U.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(Z===OQ)return U.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(Z===RQ)return U.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(Z===MQ||Z===kQ||Z===VQ||Z===LQ)if(U=Q.get("EXT_texture_compression_rgtc"),U!==null){if(Z===MQ)return U.COMPRESSED_RED_RGTC1_EXT;if(Z===kQ)return U.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(Z===VQ)return U.COMPRESSED_RED_GREEN_RGTC2_EXT;if(Z===LQ)return U.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;if(Z===E8)return J.UNSIGNED_INT_24_8;return J[Z]!==void 0?J[Z]:null}return{convert:$}}var EX=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,qX=`
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

}`;class TK{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(J,Q){if(this.texture===null){let $=new x7(J.texture);if(J.depthNear!==Q.depthNear||J.depthFar!==Q.depthFar)this.depthNear=J.depthNear,this.depthFar=J.depthFar;this.texture=$}}getMesh(J){if(this.texture!==null){if(this.mesh===null){let Q=J.cameras[0].viewport,$=new hJ({vertexShader:EX,fragmentShader:qX,uniforms:{depthColor:{value:this.texture},depthWidth:{value:Q.z},depthHeight:{value:Q.w}}});this.mesh=new wJ(new x8(20,20),$)}}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class SK extends B9{constructor(J,Q){super();let $=this,Z=null,K=1,U=null,W="local-floor",H=1,G=null,Y=null,E=null,N=null,X=null,R=null,D=typeof XRWebGLBinding<"u",V=new TK,q={},F=Q.getContextAttributes(),z=null,B=null,L=[],w=[],_=new i0,C=null,O=new zJ;O.viewport=new HJ;let P=new zJ;P.viewport=new HJ;let y=[O,P],A=new nQ,b=null,u=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(o){let K0=L[o];if(K0===void 0)K0=new g8,L[o]=K0;return K0.getTargetRaySpace()},this.getControllerGrip=function(o){let K0=L[o];if(K0===void 0)K0=new g8,L[o]=K0;return K0.getGripSpace()},this.getHand=function(o){let K0=L[o];if(K0===void 0)K0=new g8,L[o]=K0;return K0.getHandSpace()};function j(o){let K0=w.indexOf(o.inputSource);if(K0===-1)return;let F0=L[K0];if(F0!==void 0)F0.update(o.inputSource,o.frame,G||U),F0.dispatchEvent({type:o.type,data:o.inputSource})}function p(){Z.removeEventListener("select",j),Z.removeEventListener("selectstart",j),Z.removeEventListener("selectend",j),Z.removeEventListener("squeeze",j),Z.removeEventListener("squeezestart",j),Z.removeEventListener("squeezeend",j),Z.removeEventListener("end",p),Z.removeEventListener("inputsourceschange",v);for(let o=0;o<L.length;o++){let K0=w[o];if(K0===null)continue;w[o]=null,L[o].disconnect(K0)}b=null,u=null,V.reset();for(let o in q)delete q[o];J.setRenderTarget(z),X=null,N=null,E=null,Z=null,B=null,c0.stop(),$.isPresenting=!1,J.setPixelRatio(C),J.setSize(_.width,_.height,!1),$.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(o){if(K=o,$.isPresenting===!0)w0("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(o){if(W=o,$.isPresenting===!0)w0("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return G||U},this.setReferenceSpace=function(o){G=o},this.getBaseLayer=function(){return N!==null?N:X},this.getBinding=function(){if(E===null&&D)E=new XRWebGLBinding(Z,Q);return E},this.getFrame=function(){return R},this.getSession=function(){return Z},this.setSession=async function(o){if(Z=o,Z!==null){if(z=J.getRenderTarget(),Z.addEventListener("select",j),Z.addEventListener("selectstart",j),Z.addEventListener("selectend",j),Z.addEventListener("squeeze",j),Z.addEventListener("squeezestart",j),Z.addEventListener("squeezeend",j),Z.addEventListener("end",p),Z.addEventListener("inputsourceschange",v),F.xrCompatible!==!0)await Q.makeXRCompatible();if(C=J.getPixelRatio(),J.getSize(_),!(D&&("createProjectionLayer"in XRWebGLBinding.prototype))){let F0={antialias:F.antialias,alpha:!0,depth:F.depth,stencil:F.stencil,framebufferScaleFactor:K};X=new XRWebGLLayer(Z,Q,F0),Z.updateRenderState({baseLayer:X}),J.setPixelRatio(1),J.setSize(X.framebufferWidth,X.framebufferHeight,!1),B=new bJ(X.framebufferWidth,X.framebufferHeight,{format:rJ,type:lJ,colorSpace:J.outputColorSpace,stencilBuffer:F.stencil,resolveDepthBuffer:X.ignoreDepthValues===!1,resolveStencilBuffer:X.ignoreDepthValues===!1})}else{let F0=null,X0=null,A0=null;if(F.depth)A0=F.stencil?Q.DEPTH24_STENCIL8:Q.DEPTH_COMPONENT24,F0=F.stencil?y9:j9,X0=F.stencil?E8:L9;let p0={colorFormat:Q.RGBA8,depthFormat:A0,scaleFactor:K};E=this.getBinding(),N=E.createProjectionLayer(p0),Z.updateRenderState({layers:[N]}),J.setPixelRatio(1),J.setSize(N.textureWidth,N.textureHeight,!1),B=new bJ(N.textureWidth,N.textureHeight,{format:rJ,type:lJ,depthTexture:new h9(N.textureWidth,N.textureHeight,X0,void 0,void 0,void 0,void 0,void 0,void 0,F0),stencilBuffer:F.stencil,colorSpace:J.outputColorSpace,samples:F.antialias?4:0,resolveDepthBuffer:N.ignoreDepthValues===!1,resolveStencilBuffer:N.ignoreDepthValues===!1})}B.isXRRenderTarget=!0,this.setFoveation(H),G=null,U=await Z.requestReferenceSpace(W),c0.setContext(Z),c0.start(),$.isPresenting=!0,$.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(Z!==null)return Z.environmentBlendMode},this.getDepthTexture=function(){return V.getDepthTexture()};function v(o){for(let K0=0;K0<o.removed.length;K0++){let F0=o.removed[K0],X0=w.indexOf(F0);if(X0>=0)w[X0]=null,L[X0].disconnect(F0)}for(let K0=0;K0<o.added.length;K0++){let F0=o.added[K0],X0=w.indexOf(F0);if(X0===-1){for(let p0=0;p0<L.length;p0++)if(p0>=w.length){w.push(F0),X0=p0;break}else if(w[p0]===null){w[p0]=F0,X0=p0;break}if(X0===-1)break}let A0=L[X0];if(A0)A0.connect(F0)}}let h=new x,i=new x;function n(o,K0,F0){h.setFromMatrixPosition(K0.matrixWorld),i.setFromMatrixPosition(F0.matrixWorld);let X0=h.distanceTo(i),A0=K0.projectionMatrix.elements,p0=F0.projectionMatrix.elements,m0=A0[14]/(A0[10]-1),d0=A0[14]/(A0[10]+1),n0=(A0[9]+1)/A0[5],t0=(A0[9]-1)/A0[5],h0=(A0[8]-1)/A0[0],YJ=(p0[8]+1)/p0[0],T=m0*h0,DJ=m0*YJ,f0=X0/(-h0+YJ),KJ=f0*-h0;if(K0.matrixWorld.decompose(o.position,o.quaternion,o.scale),o.translateX(KJ),o.translateZ(f0),o.matrixWorld.compose(o.position,o.quaternion,o.scale),o.matrixWorldInverse.copy(o.matrixWorld).invert(),A0[10]===-1)o.projectionMatrix.copy(K0.projectionMatrix),o.projectionMatrixInverse.copy(K0.projectionMatrixInverse);else{let B0=m0+f0,$J=d0+f0,I=T-KJ,M=DJ+(X0-KJ),g=n0*d0/$J*B0,s=t0*d0/$J*B0;o.projectionMatrix.makePerspective(I,M,g,s,B0,$J),o.projectionMatrixInverse.copy(o.projectionMatrix).invert()}}function J0(o,K0){if(K0===null)o.matrixWorld.copy(o.matrix);else o.matrixWorld.multiplyMatrices(K0.matrixWorld,o.matrix);o.matrixWorldInverse.copy(o.matrixWorld).invert()}this.updateCamera=function(o){if(Z===null)return;let{near:K0,far:F0}=o;if(V.texture!==null){if(V.depthNear>0)K0=V.depthNear;if(V.depthFar>0)F0=V.depthFar}if(A.near=P.near=O.near=K0,A.far=P.far=O.far=F0,b!==A.near||u!==A.far)Z.updateRenderState({depthNear:A.near,depthFar:A.far}),b=A.near,u=A.far;A.layers.mask=o.layers.mask|6,O.layers.mask=A.layers.mask&-5,P.layers.mask=A.layers.mask&-3;let X0=o.parent,A0=A.cameras;J0(A,X0);for(let p0=0;p0<A0.length;p0++)J0(A0[p0],X0);if(A0.length===2)n(A,O,P);else A.projectionMatrix.copy(O.projectionMatrix);q0(o,A,X0)};function q0(o,K0,F0){if(F0===null)o.matrix.copy(K0.matrixWorld);else o.matrix.copy(F0.matrixWorld),o.matrix.invert(),o.matrix.multiply(K0.matrixWorld);if(o.matrix.decompose(o.position,o.quaternion,o.scale),o.updateMatrixWorld(!0),o.projectionMatrix.copy(K0.projectionMatrix),o.projectionMatrixInverse.copy(K0.projectionMatrixInverse),o.isPerspectiveCamera)o.fov=M7*2*Math.atan(1/o.projectionMatrix.elements[5]),o.zoom=1}this.getCamera=function(){return A},this.getFoveation=function(){if(N===null&&X===null)return;return H},this.setFoveation=function(o){if(H=o,N!==null)N.fixedFoveation=o;if(X!==null&&X.fixedFoveation!==void 0)X.fixedFoveation=o},this.hasDepthSensing=function(){return V.texture!==null},this.getDepthSensingMesh=function(){return V.getMesh(A)},this.getCameraTexture=function(o){return q[o]};let H0=null;function QJ(o,K0){if(Y=K0.getViewerPose(G||U),R=K0,Y!==null){let F0=Y.views;if(X!==null)J.setRenderTargetFramebuffer(B,X.framebuffer),J.setRenderTarget(B);let X0=!1;if(F0.length!==A.cameras.length)A.cameras.length=0,X0=!0;for(let d0=0;d0<F0.length;d0++){let n0=F0[d0],t0=null;if(X!==null)t0=X.getViewport(n0);else{let YJ=E.getViewSubImage(N,n0);if(t0=YJ.viewport,d0===0)J.setRenderTargetTextures(B,YJ.colorTexture,YJ.depthStencilTexture),J.setRenderTarget(B)}let h0=y[d0];if(h0===void 0)h0=new zJ,h0.layers.enable(d0),h0.viewport=new HJ,y[d0]=h0;if(h0.matrix.fromArray(n0.transform.matrix),h0.matrix.decompose(h0.position,h0.quaternion,h0.scale),h0.projectionMatrix.fromArray(n0.projectionMatrix),h0.projectionMatrixInverse.copy(h0.projectionMatrix).invert(),h0.viewport.set(t0.x,t0.y,t0.width,t0.height),d0===0)A.matrix.copy(h0.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale);if(X0===!0)A.cameras.push(h0)}let A0=Z.enabledFeatures;if(A0&&A0.includes("depth-sensing")&&Z.depthUsage=="gpu-optimized"&&D){E=$.getBinding();let d0=E.getDepthInformation(F0[0]);if(d0&&d0.isValid&&d0.texture)V.init(d0,Z.renderState)}if(A0&&A0.includes("camera-access")&&D){J.state.unbindTexture(),E=$.getBinding();for(let d0=0;d0<F0.length;d0++){let n0=F0[d0].camera;if(n0){let t0=q[n0];if(!t0)t0=new x7,q[n0]=t0;let h0=E.getCameraImage(n0);t0.sourceTexture=h0}}}}for(let F0=0;F0<L.length;F0++){let X0=w[F0],A0=L[F0];if(X0!==null&&A0!==void 0)A0.update(X0,K0,G||U)}if(H0)H0(o,K0);if(K0.detectedPlanes)$.dispatchEvent({type:"planesdetected",data:K0});R=null}let c0=new VK;c0.setAnimationLoop(QJ),this.setAnimationLoop=function(o){H0=o},this.dispose=function(){}}}var u9=new iJ,FX=new WJ;function DX(J,Q){function $(q,F){if(q.matrixAutoUpdate===!0)q.updateMatrix();F.value.copy(q.matrix)}function Z(q,F){if(F.color.getRGB(q.fogColor.value,SQ(J)),F.isFog)q.fogNear.value=F.near,q.fogFar.value=F.far;else if(F.isFogExp2)q.fogDensity.value=F.density}function K(q,F,z,B,L){if(F.isMeshBasicMaterial)U(q,F);else if(F.isMeshLambertMaterial){if(U(q,F),F.envMap)q.envMapIntensity.value=F.envMapIntensity}else if(F.isMeshToonMaterial)U(q,F),N(q,F);else if(F.isMeshPhongMaterial){if(U(q,F),E(q,F),F.envMap)q.envMapIntensity.value=F.envMapIntensity}else if(F.isMeshStandardMaterial){if(U(q,F),X(q,F),F.isMeshPhysicalMaterial)R(q,F,L)}else if(F.isMeshMatcapMaterial)U(q,F),D(q,F);else if(F.isMeshDepthMaterial)U(q,F);else if(F.isMeshDistanceMaterial)U(q,F),V(q,F);else if(F.isMeshNormalMaterial)U(q,F);else if(F.isLineBasicMaterial){if(W(q,F),F.isLineDashedMaterial)H(q,F)}else if(F.isPointsMaterial)G(q,F,z,B);else if(F.isSpriteMaterial)Y(q,F);else if(F.isShadowMaterial)q.color.value.copy(F.color),q.opacity.value=F.opacity;else if(F.isShaderMaterial)F.uniformsNeedUpdate=!1}function U(q,F){if(q.opacity.value=F.opacity,F.color)q.diffuse.value.copy(F.color);if(F.emissive)q.emissive.value.copy(F.emissive).multiplyScalar(F.emissiveIntensity);if(F.map)q.map.value=F.map,$(F.map,q.mapTransform);if(F.alphaMap)q.alphaMap.value=F.alphaMap,$(F.alphaMap,q.alphaMapTransform);if(F.bumpMap){if(q.bumpMap.value=F.bumpMap,$(F.bumpMap,q.bumpMapTransform),q.bumpScale.value=F.bumpScale,F.side===CJ)q.bumpScale.value*=-1}if(F.normalMap){if(q.normalMap.value=F.normalMap,$(F.normalMap,q.normalMapTransform),q.normalScale.value.copy(F.normalScale),F.side===CJ)q.normalScale.value.negate()}if(F.displacementMap)q.displacementMap.value=F.displacementMap,$(F.displacementMap,q.displacementMapTransform),q.displacementScale.value=F.displacementScale,q.displacementBias.value=F.displacementBias;if(F.emissiveMap)q.emissiveMap.value=F.emissiveMap,$(F.emissiveMap,q.emissiveMapTransform);if(F.specularMap)q.specularMap.value=F.specularMap,$(F.specularMap,q.specularMapTransform);if(F.alphaTest>0)q.alphaTest.value=F.alphaTest;let z=Q.get(F),B=z.envMap,L=z.envMapRotation;if(B){if(q.envMap.value=B,u9.copy(L),u9.x*=-1,u9.y*=-1,u9.z*=-1,B.isCubeTexture&&B.isRenderTargetTexture===!1)u9.y*=-1,u9.z*=-1;q.envMapRotation.value.setFromMatrix4(FX.makeRotationFromEuler(u9)),q.flipEnvMap.value=B.isCubeTexture&&B.isRenderTargetTexture===!1?-1:1,q.reflectivity.value=F.reflectivity,q.ior.value=F.ior,q.refractionRatio.value=F.refractionRatio}if(F.lightMap)q.lightMap.value=F.lightMap,q.lightMapIntensity.value=F.lightMapIntensity,$(F.lightMap,q.lightMapTransform);if(F.aoMap)q.aoMap.value=F.aoMap,q.aoMapIntensity.value=F.aoMapIntensity,$(F.aoMap,q.aoMapTransform)}function W(q,F){if(q.diffuse.value.copy(F.color),q.opacity.value=F.opacity,F.map)q.map.value=F.map,$(F.map,q.mapTransform)}function H(q,F){q.dashSize.value=F.dashSize,q.totalSize.value=F.dashSize+F.gapSize,q.scale.value=F.scale}function G(q,F,z,B){if(q.diffuse.value.copy(F.color),q.opacity.value=F.opacity,q.size.value=F.size*z,q.scale.value=B*0.5,F.map)q.map.value=F.map,$(F.map,q.uvTransform);if(F.alphaMap)q.alphaMap.value=F.alphaMap,$(F.alphaMap,q.alphaMapTransform);if(F.alphaTest>0)q.alphaTest.value=F.alphaTest}function Y(q,F){if(q.diffuse.value.copy(F.color),q.opacity.value=F.opacity,q.rotation.value=F.rotation,F.map)q.map.value=F.map,$(F.map,q.mapTransform);if(F.alphaMap)q.alphaMap.value=F.alphaMap,$(F.alphaMap,q.alphaMapTransform);if(F.alphaTest>0)q.alphaTest.value=F.alphaTest}function E(q,F){q.specular.value.copy(F.specular),q.shininess.value=Math.max(F.shininess,0.0001)}function N(q,F){if(F.gradientMap)q.gradientMap.value=F.gradientMap}function X(q,F){if(q.metalness.value=F.metalness,F.metalnessMap)q.metalnessMap.value=F.metalnessMap,$(F.metalnessMap,q.metalnessMapTransform);if(q.roughness.value=F.roughness,F.roughnessMap)q.roughnessMap.value=F.roughnessMap,$(F.roughnessMap,q.roughnessMapTransform);if(F.envMap)q.envMapIntensity.value=F.envMapIntensity}function R(q,F,z){if(q.ior.value=F.ior,F.sheen>0){if(q.sheenColor.value.copy(F.sheenColor).multiplyScalar(F.sheen),q.sheenRoughness.value=F.sheenRoughness,F.sheenColorMap)q.sheenColorMap.value=F.sheenColorMap,$(F.sheenColorMap,q.sheenColorMapTransform);if(F.sheenRoughnessMap)q.sheenRoughnessMap.value=F.sheenRoughnessMap,$(F.sheenRoughnessMap,q.sheenRoughnessMapTransform)}if(F.clearcoat>0){if(q.clearcoat.value=F.clearcoat,q.clearcoatRoughness.value=F.clearcoatRoughness,F.clearcoatMap)q.clearcoatMap.value=F.clearcoatMap,$(F.clearcoatMap,q.clearcoatMapTransform);if(F.clearcoatRoughnessMap)q.clearcoatRoughnessMap.value=F.clearcoatRoughnessMap,$(F.clearcoatRoughnessMap,q.clearcoatRoughnessMapTransform);if(F.clearcoatNormalMap){if(q.clearcoatNormalMap.value=F.clearcoatNormalMap,$(F.clearcoatNormalMap,q.clearcoatNormalMapTransform),q.clearcoatNormalScale.value.copy(F.clearcoatNormalScale),F.side===CJ)q.clearcoatNormalScale.value.negate()}}if(F.dispersion>0)q.dispersion.value=F.dispersion;if(F.iridescence>0){if(q.iridescence.value=F.iridescence,q.iridescenceIOR.value=F.iridescenceIOR,q.iridescenceThicknessMinimum.value=F.iridescenceThicknessRange[0],q.iridescenceThicknessMaximum.value=F.iridescenceThicknessRange[1],F.iridescenceMap)q.iridescenceMap.value=F.iridescenceMap,$(F.iridescenceMap,q.iridescenceMapTransform);if(F.iridescenceThicknessMap)q.iridescenceThicknessMap.value=F.iridescenceThicknessMap,$(F.iridescenceThicknessMap,q.iridescenceThicknessMapTransform)}if(F.transmission>0){if(q.transmission.value=F.transmission,q.transmissionSamplerMap.value=z.texture,q.transmissionSamplerSize.value.set(z.width,z.height),F.transmissionMap)q.transmissionMap.value=F.transmissionMap,$(F.transmissionMap,q.transmissionMapTransform);if(q.thickness.value=F.thickness,F.thicknessMap)q.thicknessMap.value=F.thicknessMap,$(F.thicknessMap,q.thicknessMapTransform);q.attenuationDistance.value=F.attenuationDistance,q.attenuationColor.value.copy(F.attenuationColor)}if(F.anisotropy>0){if(q.anisotropyVector.value.set(F.anisotropy*Math.cos(F.anisotropyRotation),F.anisotropy*Math.sin(F.anisotropyRotation)),F.anisotropyMap)q.anisotropyMap.value=F.anisotropyMap,$(F.anisotropyMap,q.anisotropyMapTransform)}if(q.specularIntensity.value=F.specularIntensity,q.specularColor.value.copy(F.specularColor),F.specularColorMap)q.specularColorMap.value=F.specularColorMap,$(F.specularColorMap,q.specularColorMapTransform);if(F.specularIntensityMap)q.specularIntensityMap.value=F.specularIntensityMap,$(F.specularIntensityMap,q.specularIntensityMapTransform)}function D(q,F){if(F.matcap)q.matcap.value=F.matcap}function V(q,F){let z=Q.get(F).light;q.referencePosition.value.setFromMatrixPosition(z.matrixWorld),q.nearDistance.value=z.shadow.camera.near,q.farDistance.value=z.shadow.camera.far}return{refreshFogUniforms:Z,refreshMaterialUniforms:K}}function OX(J,Q,$,Z){let K={},U={},W=[],H=J.getParameter(J.MAX_UNIFORM_BUFFER_BINDINGS);function G(z,B){let L=B.program;Z.uniformBlockBinding(z,L)}function Y(z,B){let L=K[z.id];if(L===void 0)D(z),L=E(z),K[z.id]=L,z.addEventListener("dispose",q);let w=B.program;Z.updateUBOMapping(z,w);let _=Q.render.frame;if(U[z.id]!==_)X(z),U[z.id]=_}function E(z){let B=N();z.__bindingPointIndex=B;let L=J.createBuffer(),w=z.__size,_=z.usage;return J.bindBuffer(J.UNIFORM_BUFFER,L),J.bufferData(J.UNIFORM_BUFFER,w,_),J.bindBuffer(J.UNIFORM_BUFFER,null),J.bindBufferBase(J.UNIFORM_BUFFER,B,L),L}function N(){for(let z=0;z<H;z++)if(W.indexOf(z)===-1)return W.push(z),z;return P0("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function X(z){let B=K[z.id],L=z.uniforms,w=z.__cache;J.bindBuffer(J.UNIFORM_BUFFER,B);for(let _=0,C=L.length;_<C;_++){let O=Array.isArray(L[_])?L[_]:[L[_]];for(let P=0,y=O.length;P<y;P++){let A=O[P];if(R(A,_,P,w)===!0){let b=A.__offset,u=Array.isArray(A.value)?A.value:[A.value],j=0;for(let p=0;p<u.length;p++){let v=u[p],h=V(v);if(typeof v==="number"||typeof v==="boolean")A.__data[0]=v,J.bufferSubData(J.UNIFORM_BUFFER,b+j,A.__data);else if(v.isMatrix3)A.__data[0]=v.elements[0],A.__data[1]=v.elements[1],A.__data[2]=v.elements[2],A.__data[3]=0,A.__data[4]=v.elements[3],A.__data[5]=v.elements[4],A.__data[6]=v.elements[5],A.__data[7]=0,A.__data[8]=v.elements[6],A.__data[9]=v.elements[7],A.__data[10]=v.elements[8],A.__data[11]=0;else v.toArray(A.__data,j),j+=h.storage/Float32Array.BYTES_PER_ELEMENT}J.bufferSubData(J.UNIFORM_BUFFER,b,A.__data)}}}J.bindBuffer(J.UNIFORM_BUFFER,null)}function R(z,B,L,w){let _=z.value,C=B+"_"+L;if(w[C]===void 0){if(typeof _==="number"||typeof _==="boolean")w[C]=_;else w[C]=_.clone();return!0}else{let O=w[C];if(typeof _==="number"||typeof _==="boolean"){if(O!==_)return w[C]=_,!0}else if(O.equals(_)===!1)return O.copy(_),!0}return!1}function D(z){let B=z.uniforms,L=0,w=16;for(let C=0,O=B.length;C<O;C++){let P=Array.isArray(B[C])?B[C]:[B[C]];for(let y=0,A=P.length;y<A;y++){let b=P[y],u=Array.isArray(b.value)?b.value:[b.value];for(let j=0,p=u.length;j<p;j++){let v=u[j],h=V(v),i=L%w,n=i%h.boundary,J0=i+n;if(L+=n,J0!==0&&w-J0<h.storage)L+=w-J0;b.__data=new Float32Array(h.storage/Float32Array.BYTES_PER_ELEMENT),b.__offset=L,L+=h.storage}}}let _=L%w;if(_>0)L+=w-_;return z.__size=L,z.__cache={},this}function V(z){let B={boundary:0,storage:0};if(typeof z==="number"||typeof z==="boolean")B.boundary=4,B.storage=4;else if(z.isVector2)B.boundary=8,B.storage=8;else if(z.isVector3||z.isColor)B.boundary=16,B.storage=12;else if(z.isVector4)B.boundary=16,B.storage=16;else if(z.isMatrix3)B.boundary=48,B.storage=48;else if(z.isMatrix4)B.boundary=64,B.storage=64;else if(z.isTexture)w0("WebGLRenderer: Texture samplers can not be part of an uniforms group.");else w0("WebGLRenderer: Unsupported uniform value type.",z);return B}function q(z){let B=z.target;B.removeEventListener("dispose",q);let L=W.indexOf(B.__bindingPointIndex);W.splice(L,1),J.deleteBuffer(K[B.id]),delete K[B.id],delete U[B.id]}function F(){for(let z in K)J.deleteBuffer(K[z]);W=[],K={},U={}}return{bind:G,update:Y,dispose:F}}var RX=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),tJ=null;function MX(){if(tJ===null)tJ=new wQ(RX,16,16,q8,Y9),tJ.name="DFG_LUT",tJ.minFilter=PJ,tJ.magFilter=PJ,tJ.wrapS=z7,tJ.wrapT=z7,tJ.generateMipmaps=!1,tJ.needsUpdate=!0;return tJ}class W${constructor(J={}){let{canvas:Q=lZ(),context:$=null,depth:Z=!0,stencil:K=!1,alpha:U=!1,antialias:W=!1,premultipliedAlpha:H=!0,preserveDrawingBuffer:G=!1,powerPreference:Y="default",failIfMajorPerformanceCaveat:E=!1,reversedDepthBuffer:N=!1,outputBufferType:X=lJ}=J;this.isWebGLRenderer=!0;let R;if($!==null){if(typeof WebGLRenderingContext<"u"&&$ instanceof WebGLRenderingContext)throw Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");R=$.getContextAttributes().alpha}else R=U;let D=X,V=new Set([u6,d6,m6]),q=new Set([lJ,L9,f8,E8,x6,p6]),F=new Uint32Array(4),z=new Int32Array(4),B=null,L=null,w=[],_=[],C=null;this.domElement=Q,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=uJ,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let O=this,P=!1;this._outputColorSpace=hZ;let y=0,A=0,b=null,u=-1,j=null,p=new HJ,v=new HJ,h=null,i=new l0(0),n=0,J0=Q.width,q0=Q.height,H0=1,QJ=null,c0=null,o=new HJ(0,0,J0,q0),K0=new HJ(0,0,J0,q0),F0=!1,X0=new h7,A0=!1,p0=!1,m0=new WJ,d0=new x,n0=new HJ,t0={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},h0=!1;function YJ(){return b===null?H0:1}let T=$;function DJ(k,f){return Q.getContext(k,f)}try{let k={alpha:!0,depth:Z,stencil:K,antialias:W,premultipliedAlpha:H,preserveDrawingBuffer:G,powerPreference:Y,failIfMajorPerformanceCaveat:E};if("setAttribute"in Q)Q.setAttribute("data-engine",`three.js r${c$}`);if(Q.addEventListener("webglcontextlost",r,!1),Q.addEventListener("webglcontextrestored",M0,!1),Q.addEventListener("webglcontextcreationerror",T0,!1),T===null){if(T=DJ("webgl2",k),T===null)if(DJ("webgl2"))throw Error("Error creating WebGL context with your selected attributes.");else throw Error("Error creating WebGL context.")}}catch(k){throw P0("WebGLRenderer: "+k.message),k}let f0,KJ,B0,$J,I,M,g,s,t,c,D0,U0,I0,C0,e,Q0,R0,_0,N0,v0,S,$0,Z0;function O0(){if(f0=new AG(T),f0.init(),S=new NX(T,f0),KJ=new MG(T,f0,J,S),B0=new YX(T,f0),KJ.reversedDepthBuffer&&N)B0.buffers.depth.setReversed(!0);$J=new wG(T),I=new oY,M=new XX(T,f0,B0,I,KJ,S,$J),g=new _G(O),s=new fU(T),$0=new OG(T,s),t=new CG(T,s,$J,$0),c=new SG(T,t,s,$0,$J),_0=new TG(T,KJ,M),e=new kG(I),D0=new iY(O,g,f0,KJ,$0,e),U0=new DX(O,I),I0=new rY,C0=new ZX(f0),R0=new DG(O,g,B0,c,R,H),Q0=new GX(O,c,KJ),Z0=new OX(T,$J,KJ,B0),N0=new RG(T,f0,$J),v0=new PG(T,f0,$J),$J.programs=D0.programs,O.capabilities=KJ,O.extensions=f0,O.properties=I,O.renderLists=I0,O.shadowMap=Q0,O.state=B0,O.info=$J}if(O0(),D!==lJ)C=new yG(D,Q.width,Q.height,Z,K);let a=new SK(O,T);this.xr=a,this.getContext=function(){return T},this.getContextAttributes=function(){return T.getContextAttributes()},this.forceContextLoss=function(){let k=f0.get("WEBGL_lose_context");if(k)k.loseContext()},this.forceContextRestore=function(){let k=f0.get("WEBGL_lose_context");if(k)k.restoreContext()},this.getPixelRatio=function(){return H0},this.setPixelRatio=function(k){if(k===void 0)return;H0=k,this.setSize(J0,q0,!1)},this.getSize=function(k){return k.set(J0,q0)},this.setSize=function(k,f,l=!0){if(a.isPresenting){w0("WebGLRenderer: Can't change size while VR device is presenting.");return}if(J0=k,q0=f,Q.width=Math.floor(k*H0),Q.height=Math.floor(f*H0),l===!0)Q.style.width=k+"px",Q.style.height=f+"px";if(C!==null)C.setSize(Q.width,Q.height);this.setViewport(0,0,k,f)},this.getDrawingBufferSize=function(k){return k.set(J0*H0,q0*H0).floor()},this.setDrawingBufferSize=function(k,f,l){J0=k,q0=f,H0=l,Q.width=Math.floor(k*l),Q.height=Math.floor(f*l),this.setViewport(0,0,k,f)},this.setEffects=function(k){if(D===lJ){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(k){for(let f=0;f<k.length;f++)if(k[f].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}C.setEffects(k||[])},this.getCurrentViewport=function(k){return k.copy(p)},this.getViewport=function(k){return k.copy(o)},this.setViewport=function(k,f,l,d){if(k.isVector4)o.set(k.x,k.y,k.z,k.w);else o.set(k,f,l,d);B0.viewport(p.copy(o).multiplyScalar(H0).round())},this.getScissor=function(k){return k.copy(K0)},this.setScissor=function(k,f,l,d){if(k.isVector4)K0.set(k.x,k.y,k.z,k.w);else K0.set(k,f,l,d);B0.scissor(v.copy(K0).multiplyScalar(H0).round())},this.getScissorTest=function(){return F0},this.setScissorTest=function(k){B0.setScissorTest(F0=k)},this.setOpaqueSort=function(k){QJ=k},this.setTransparentSort=function(k){c0=k},this.getClearColor=function(k){return k.copy(R0.getClearColor())},this.setClearColor=function(){R0.setClearColor(...arguments)},this.getClearAlpha=function(){return R0.getClearAlpha()},this.setClearAlpha=function(){R0.setClearAlpha(...arguments)},this.clear=function(k=!0,f=!0,l=!0){let d=0;if(k){let m=!1;if(b!==null){let G0=b.texture.format;m=V.has(G0)}if(m){let G0=b.texture.type,E0=q.has(G0),Y0=R0.getClearColor(),k0=R0.getClearAlpha(),L0=Y0.r,S0=Y0.g,b0=Y0.b;if(E0)F[0]=L0,F[1]=S0,F[2]=b0,F[3]=k0,T.clearBufferuiv(T.COLOR,0,F);else z[0]=L0,z[1]=S0,z[2]=b0,z[3]=k0,T.clearBufferiv(T.COLOR,0,z)}else d|=T.COLOR_BUFFER_BIT}if(f)d|=T.DEPTH_BUFFER_BIT;if(l)d|=T.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295);if(d!==0)T.clear(d)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){Q.removeEventListener("webglcontextlost",r,!1),Q.removeEventListener("webglcontextrestored",M0,!1),Q.removeEventListener("webglcontextcreationerror",T0,!1),R0.dispose(),I0.dispose(),C0.dispose(),I.dispose(),g.dispose(),c.dispose(),$0.dispose(),Z0.dispose(),D0.dispose(),a.dispose(),a.removeEventListener("sessionstart",D$),a.removeEventListener("sessionend",O$),I9.stop()};function r(k){k.preventDefault(),_Q("WebGLRenderer: Context Lost."),P=!0}function M0(){_Q("WebGLRenderer: Context Restored."),P=!1;let k=$J.autoReset,f=Q0.enabled,l=Q0.autoUpdate,d=Q0.needsUpdate,m=Q0.type;O0(),$J.autoReset=k,Q0.enabled=f,Q0.autoUpdate=l,Q0.needsUpdate=d,Q0.type=m}function T0(k){P0("WebGLRenderer: A WebGL context could not be created. Reason: ",k.statusMessage)}function ZJ(k){let f=k.target;f.removeEventListener("dispose",ZJ),o0(f)}function o0(k){J9(k),I.remove(k)}function J9(k){let f=I.get(k).programs;if(f!==void 0){if(f.forEach(function(l){D0.releaseProgram(l)}),k.isShaderMaterial)D0.releaseShaderCache(k)}}this.renderBufferDirect=function(k,f,l,d,m,G0){if(f===null)f=t0;let E0=m.isMesh&&m.matrixWorld.determinant()<0,Y0=sK(k,f,l,d,m);B0.setMaterial(d,E0);let k0=l.index,L0=1;if(d.wireframe===!0){if(k0=t.getWireframeAttribute(l),k0===void 0)return;L0=2}let S0=l.drawRange,b0=l.attributes.position,z0=S0.start*L0,a0=(S0.start+S0.count)*L0;if(G0!==null)z0=Math.max(z0,G0.start*L0),a0=Math.min(a0,(G0.start+G0.count)*L0);if(k0!==null)z0=Math.max(z0,0),a0=Math.min(a0,k0.count);else if(b0!==void 0&&b0!==null)z0=Math.max(z0,0),a0=Math.min(a0,b0.count);let GJ=a0-z0;if(GJ<0||GJ===1/0)return;$0.setup(m,d,Y0,l,k0);let UJ,r0=N0;if(k0!==null)UJ=s.get(k0),r0=v0,r0.setIndex(UJ);if(m.isMesh)if(d.wireframe===!0)B0.setLineWidth(d.wireframeLinewidth*YJ()),r0.setMode(T.LINES);else r0.setMode(T.TRIANGLES);else if(m.isLine){let RJ=d.linewidth;if(RJ===void 0)RJ=1;if(B0.setLineWidth(RJ*YJ()),m.isLineSegments)r0.setMode(T.LINES);else if(m.isLineLoop)r0.setMode(T.LINE_LOOP);else r0.setMode(T.LINE_STRIP)}else if(m.isPoints)r0.setMode(T.POINTS);else if(m.isSprite)r0.setMode(T.TRIANGLES);if(m.isBatchedMesh)if(m._multiDrawInstances!==null)w8("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),r0.renderMultiDrawInstances(m._multiDrawStarts,m._multiDrawCounts,m._multiDrawCount,m._multiDrawInstances);else if(!f0.get("WEBGL_multi_draw")){let{_multiDrawStarts:RJ,_multiDrawCounts:V0,_multiDrawCount:TJ}=m,u0=k0?s.get(k0).bytesPerElement:1,xJ=I.get(d).currentProgram.getUniforms();for(let nJ=0;nJ<TJ;nJ++)xJ.setValue(T,"_gl_DrawID",nJ),r0.render(RJ[nJ]/u0,V0[nJ])}else r0.renderMultiDraw(m._multiDrawStarts,m._multiDrawCounts,m._multiDrawCount);else if(m.isInstancedMesh)r0.renderInstances(z0,GJ,m.count);else if(l.isInstancedBufferGeometry){let RJ=l._maxInstanceCount!==void 0?l._maxInstanceCount:1/0,V0=Math.min(l.instanceCount,RJ);r0.renderInstances(z0,GJ,V0)}else r0.render(z0,GJ)};function cJ(k,f,l){if(k.transparent===!0&&k.side===oJ&&k.forceSinglePass===!1)k.side=CJ,k.needsUpdate=!0,o8(k,f,l),k.side=Y8,k.needsUpdate=!0,o8(k,f,l),k.side=oJ;else o8(k,f,l)}this.compile=function(k,f,l=null){if(l===null)l=k;if(L=C0.get(l),L.init(f),_.push(L),l.traverseVisible(function(m){if(m.isLight&&m.layers.test(f.layers)){if(L.pushLight(m),m.castShadow)L.pushShadow(m)}}),k!==l)k.traverseVisible(function(m){if(m.isLight&&m.layers.test(f.layers)){if(L.pushLight(m),m.castShadow)L.pushShadow(m)}});L.setupLights();let d=new Set;return k.traverse(function(m){if(!(m.isMesh||m.isPoints||m.isLine||m.isSprite))return;let G0=m.material;if(G0)if(Array.isArray(G0))for(let E0=0;E0<G0.length;E0++){let Y0=G0[E0];cJ(Y0,l,m),d.add(Y0)}else cJ(G0,l,m),d.add(G0)}),L=_.pop(),d},this.compileAsync=function(k,f,l=null){let d=this.compile(k,f,l);return new Promise((m)=>{function G0(){if(d.forEach(function(E0){if(I.get(E0).currentProgram.isReady())d.delete(E0)}),d.size===0){m(k);return}setTimeout(G0,10)}if(f0.get("KHR_parallel_shader_compile")!==null)G0();else setTimeout(G0,10)})};let r7=null;function nK(k){if(r7)r7(k)}function D$(){I9.stop()}function O$(){I9.start()}let I9=new VK;if(I9.setAnimationLoop(nK),typeof self<"u")I9.setContext(self);this.setAnimationLoop=function(k){r7=k,a.setAnimationLoop(k),k===null?I9.stop():I9.start()},a.addEventListener("sessionstart",D$),a.addEventListener("sessionend",O$),this.render=function(k,f){if(f!==void 0&&f.isCamera!==!0){P0("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;let l=a.enabled===!0&&a.isPresenting===!0,d=C!==null&&(b===null||l)&&C.begin(O,b);if(k.matrixWorldAutoUpdate===!0)k.updateMatrixWorld();if(f.parent===null&&f.matrixWorldAutoUpdate===!0)f.updateMatrixWorld();if(a.enabled===!0&&a.isPresenting===!0&&(C===null||C.isCompositing()===!1)){if(a.cameraAutoUpdate===!0)a.updateCamera(f);f=a.getCamera()}if(k.isScene===!0)k.onBeforeRender(O,k,f,b);if(L=C0.get(k,_.length),L.init(f),_.push(L),m0.multiplyMatrices(f.projectionMatrix,f.matrixWorldInverse),X0.setFromProjectionMatrix(m0,IQ,f.reversedDepth),p0=this.localClippingEnabled,A0=e.init(this.clippingPlanes,p0),B=I0.get(k,w.length),B.init(),w.push(B),a.enabled===!0&&a.isPresenting===!0){let E0=O.xr.getDepthSensingMesh();if(E0!==null)t7(E0,f,-1/0,O.sortObjects)}if(t7(k,f,0,O.sortObjects),B.finish(),O.sortObjects===!0)B.sort(QJ,c0);if(h0=a.enabled===!1||a.isPresenting===!1||a.hasDepthSensing()===!1,h0)R0.addToRenderList(B,k);if(this.info.render.frame++,A0===!0)e.beginShadows();let m=L.state.shadowsArray;if(Q0.render(m,k,f),A0===!0)e.endShadows();if(this.info.autoReset===!0)this.info.reset();if((d&&C.hasRenderPass())===!1){let{opaque:E0,transmissive:Y0}=B;if(L.setupLights(),f.isArrayCamera){let k0=f.cameras;if(Y0.length>0)for(let L0=0,S0=k0.length;L0<S0;L0++){let b0=k0[L0];M$(E0,Y0,k,b0)}if(h0)R0.render(k);for(let L0=0,S0=k0.length;L0<S0;L0++){let b0=k0[L0];R$(B,k,b0,b0.viewport)}}else{if(Y0.length>0)M$(E0,Y0,k,f);if(h0)R0.render(k);R$(B,k,f)}}if(b!==null&&A===0)M.updateMultisampleRenderTarget(b),M.updateRenderTargetMipmap(b);if(d)C.end(O);if(k.isScene===!0)k.onAfterRender(O,k,f);if($0.resetDefaultState(),u=-1,j=null,_.pop(),_.length>0){if(L=_[_.length-1],A0===!0)e.setGlobalState(O.clippingPlanes,L.state.camera)}else L=null;if(w.pop(),w.length>0)B=w[w.length-1];else B=null};function t7(k,f,l,d){if(k.visible===!1)return;if(k.layers.test(f.layers)){if(k.isGroup)l=k.renderOrder;else if(k.isLOD){if(k.autoUpdate===!0)k.update(f)}else if(k.isLight){if(L.pushLight(k),k.castShadow)L.pushShadow(k)}else if(k.isSprite){if(!k.frustumCulled||X0.intersectsSprite(k)){if(d)n0.setFromMatrixPosition(k.matrixWorld).applyMatrix4(m0);let E0=c.update(k),Y0=k.material;if(Y0.visible)B.push(k,E0,Y0,l,n0.z,null)}}else if(k.isMesh||k.isLine||k.isPoints){if(!k.frustumCulled||X0.intersectsObject(k)){let E0=c.update(k),Y0=k.material;if(d){if(k.boundingSphere!==void 0){if(k.boundingSphere===null)k.computeBoundingSphere();n0.copy(k.boundingSphere.center)}else{if(E0.boundingSphere===null)E0.computeBoundingSphere();n0.copy(E0.boundingSphere.center)}n0.applyMatrix4(k.matrixWorld).applyMatrix4(m0)}if(Array.isArray(Y0)){let k0=E0.groups;for(let L0=0,S0=k0.length;L0<S0;L0++){let b0=k0[L0],z0=Y0[b0.materialIndex];if(z0&&z0.visible)B.push(k,E0,z0,l,n0.z,b0)}}else if(Y0.visible)B.push(k,E0,Y0,l,n0.z,null)}}}let G0=k.children;for(let E0=0,Y0=G0.length;E0<Y0;E0++)t7(G0[E0],f,l,d)}function R$(k,f,l,d){let{opaque:m,transmissive:G0,transparent:E0}=k;if(L.setupLightsView(l),A0===!0)e.setGlobalState(O.clippingPlanes,l);if(d)B0.viewport(p.copy(d));if(m.length>0)i8(m,f,l);if(G0.length>0)i8(G0,f,l);if(E0.length>0)i8(E0,f,l);B0.buffers.depth.setTest(!0),B0.buffers.depth.setMask(!0),B0.buffers.color.setMask(!0),B0.setPolygonOffset(!1)}function M$(k,f,l,d){if((l.isScene===!0?l.overrideMaterial:null)!==null)return;if(L.state.transmissionRenderTarget[d.id]===void 0){let z0=f0.has("EXT_color_buffer_half_float")||f0.has("EXT_color_buffer_float");L.state.transmissionRenderTarget[d.id]=new bJ(1,1,{generateMipmaps:!0,type:z0?Y9:lJ,minFilter:S9,samples:Math.max(4,KJ.samples),stencilBuffer:K,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:x0.workingColorSpace})}let G0=L.state.transmissionRenderTarget[d.id],E0=d.viewport||p;G0.setSize(E0.z*O.transmissionResolutionScale,E0.w*O.transmissionResolutionScale);let Y0=O.getRenderTarget(),k0=O.getActiveCubeFace(),L0=O.getActiveMipmapLevel();if(O.setRenderTarget(G0),O.getClearColor(i),n=O.getClearAlpha(),n<1)O.setClearColor(16777215,0.5);if(O.clear(),h0)R0.render(l);let S0=O.toneMapping;O.toneMapping=uJ;let b0=d.viewport;if(d.viewport!==void 0)d.viewport=void 0;if(L.setupLightsView(d),A0===!0)e.setGlobalState(O.clippingPlanes,d);if(i8(k,l,d),M.updateMultisampleRenderTarget(G0),M.updateRenderTargetMipmap(G0),f0.has("WEBGL_multisampled_render_to_texture")===!1){let z0=!1;for(let a0=0,GJ=f.length;a0<GJ;a0++){let UJ=f[a0],{object:r0,geometry:RJ,material:V0,group:TJ}=UJ;if(V0.side===oJ&&r0.layers.test(d.layers)){let u0=V0.side;V0.side=CJ,V0.needsUpdate=!0,k$(r0,l,d,RJ,V0,TJ),V0.side=u0,V0.needsUpdate=!0,z0=!0}}if(z0===!0)M.updateMultisampleRenderTarget(G0),M.updateRenderTargetMipmap(G0)}if(O.setRenderTarget(Y0,k0,L0),O.setClearColor(i,n),b0!==void 0)d.viewport=b0;O.toneMapping=S0}function i8(k,f,l){let d=f.isScene===!0?f.overrideMaterial:null;for(let m=0,G0=k.length;m<G0;m++){let E0=k[m],{object:Y0,geometry:k0,group:L0}=E0,S0=E0.material;if(S0.allowOverride===!0&&d!==null)S0=d;if(Y0.layers.test(l.layers))k$(Y0,f,l,k0,S0,L0)}}function k$(k,f,l,d,m,G0){if(k.onBeforeRender(O,f,l,d,m,G0),k.modelViewMatrix.multiplyMatrices(l.matrixWorldInverse,k.matrixWorld),k.normalMatrix.getNormalMatrix(k.modelViewMatrix),m.onBeforeRender(O,f,l,d,k,G0),m.transparent===!0&&m.side===oJ&&m.forceSinglePass===!1)m.side=CJ,m.needsUpdate=!0,O.renderBufferDirect(l,f,d,m,k,G0),m.side=Y8,m.needsUpdate=!0,O.renderBufferDirect(l,f,d,m,k,G0),m.side=oJ;else O.renderBufferDirect(l,f,d,m,k,G0);k.onAfterRender(O,f,l,d,m,G0)}function o8(k,f,l){if(f.isScene!==!0)f=t0;let d=I.get(k),m=L.state.lights,G0=L.state.shadowsArray,E0=m.state.version,Y0=D0.getParameters(k,m.state,G0,f,l),k0=D0.getProgramCacheKey(Y0),L0=d.programs;d.environment=k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial?f.environment:null,d.fog=f.fog;let S0=k.isMeshStandardMaterial||k.isMeshLambertMaterial&&!k.envMap||k.isMeshPhongMaterial&&!k.envMap;if(d.envMap=g.get(k.envMap||d.environment,S0),d.envMapRotation=d.environment!==null&&k.envMap===null?f.environmentRotation:k.envMapRotation,L0===void 0)k.addEventListener("dispose",ZJ),L0=new Map,d.programs=L0;let b0=L0.get(k0);if(b0!==void 0){if(d.currentProgram===b0&&d.lightsStateVersion===E0)return L$(k,Y0),b0}else Y0.uniforms=D0.getUniforms(k),k.onBeforeCompile(Y0,O),b0=D0.acquireProgram(Y0,k0),L0.set(k0,b0),d.uniforms=Y0.uniforms;let z0=d.uniforms;if(!k.isShaderMaterial&&!k.isRawShaderMaterial||k.clipping===!0)z0.clippingPlanes=e.uniform;if(L$(k,Y0),d.needsLights=oK(k),d.lightsStateVersion=E0,d.needsLights)z0.ambientLightColor.value=m.state.ambient,z0.lightProbe.value=m.state.probe,z0.directionalLights.value=m.state.directional,z0.directionalLightShadows.value=m.state.directionalShadow,z0.spotLights.value=m.state.spot,z0.spotLightShadows.value=m.state.spotShadow,z0.rectAreaLights.value=m.state.rectArea,z0.ltc_1.value=m.state.rectAreaLTC1,z0.ltc_2.value=m.state.rectAreaLTC2,z0.pointLights.value=m.state.point,z0.pointLightShadows.value=m.state.pointShadow,z0.hemisphereLights.value=m.state.hemi,z0.directionalShadowMatrix.value=m.state.directionalShadowMatrix,z0.spotLightMatrix.value=m.state.spotLightMatrix,z0.spotLightMap.value=m.state.spotLightMap,z0.pointShadowMatrix.value=m.state.pointShadowMatrix;return d.currentProgram=b0,d.uniformsList=null,b0}function V$(k){if(k.uniformsList===null){let f=k.currentProgram.getUniforms();k.uniformsList=l8.seqWithValue(f.seq,k.uniforms)}return k.uniformsList}function L$(k,f){let l=I.get(k);l.outputColorSpace=f.outputColorSpace,l.batching=f.batching,l.batchingColor=f.batchingColor,l.instancing=f.instancing,l.instancingColor=f.instancingColor,l.instancingMorph=f.instancingMorph,l.skinning=f.skinning,l.morphTargets=f.morphTargets,l.morphNormals=f.morphNormals,l.morphColors=f.morphColors,l.morphTargetsCount=f.morphTargetsCount,l.numClippingPlanes=f.numClippingPlanes,l.numIntersection=f.numClipIntersection,l.vertexAlphas=f.vertexAlphas,l.vertexTangents=f.vertexTangents,l.toneMapping=f.toneMapping}function sK(k,f,l,d,m){if(f.isScene!==!0)f=t0;M.resetTextureUnits();let G0=f.fog,E0=d.isMeshStandardMaterial||d.isMeshLambertMaterial||d.isMeshPhongMaterial?f.environment:null,Y0=b===null?O.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:v8,k0=d.isMeshStandardMaterial||d.isMeshLambertMaterial&&!d.envMap||d.isMeshPhongMaterial&&!d.envMap,L0=g.get(d.envMap||E0,k0),S0=d.vertexColors===!0&&!!l.attributes.color&&l.attributes.color.itemSize===4,b0=!!l.attributes.tangent&&(!!d.normalMap||d.anisotropy>0),z0=!!l.morphAttributes.position,a0=!!l.morphAttributes.normal,GJ=!!l.morphAttributes.color,UJ=uJ;if(d.toneMapped){if(b===null||b.isXRRenderTarget===!0)UJ=O.toneMapping}let r0=l.morphAttributes.position||l.morphAttributes.normal||l.morphAttributes.color,RJ=r0!==void 0?r0.length:0,V0=I.get(d),TJ=L.state.lights;if(A0===!0){if(p0===!0||k!==j){let qJ=k===j&&d.id===u;e.setState(d,k,qJ)}}let u0=!1;if(d.version===V0.__version){if(V0.needsLights&&V0.lightsStateVersion!==TJ.state.version)u0=!0;else if(V0.outputColorSpace!==Y0)u0=!0;else if(m.isBatchedMesh&&V0.batching===!1)u0=!0;else if(!m.isBatchedMesh&&V0.batching===!0)u0=!0;else if(m.isBatchedMesh&&V0.batchingColor===!0&&m.colorTexture===null)u0=!0;else if(m.isBatchedMesh&&V0.batchingColor===!1&&m.colorTexture!==null)u0=!0;else if(m.isInstancedMesh&&V0.instancing===!1)u0=!0;else if(!m.isInstancedMesh&&V0.instancing===!0)u0=!0;else if(m.isSkinnedMesh&&V0.skinning===!1)u0=!0;else if(!m.isSkinnedMesh&&V0.skinning===!0)u0=!0;else if(m.isInstancedMesh&&V0.instancingColor===!0&&m.instanceColor===null)u0=!0;else if(m.isInstancedMesh&&V0.instancingColor===!1&&m.instanceColor!==null)u0=!0;else if(m.isInstancedMesh&&V0.instancingMorph===!0&&m.morphTexture===null)u0=!0;else if(m.isInstancedMesh&&V0.instancingMorph===!1&&m.morphTexture!==null)u0=!0;else if(V0.envMap!==L0)u0=!0;else if(d.fog===!0&&V0.fog!==G0)u0=!0;else if(V0.numClippingPlanes!==void 0&&(V0.numClippingPlanes!==e.numPlanes||V0.numIntersection!==e.numIntersection))u0=!0;else if(V0.vertexAlphas!==S0)u0=!0;else if(V0.vertexTangents!==b0)u0=!0;else if(V0.morphTargets!==z0)u0=!0;else if(V0.morphNormals!==a0)u0=!0;else if(V0.morphColors!==GJ)u0=!0;else if(V0.toneMapping!==UJ)u0=!0;else if(V0.morphTargetsCount!==RJ)u0=!0}else u0=!0,V0.__version=d.version;let xJ=V0.currentProgram;if(u0===!0)xJ=o8(d,f,m);let nJ=!1,_9=!1,n9=!1,e0=xJ.getUniforms(),OJ=V0.uniforms;if(B0.useProgram(xJ.program))nJ=!0,_9=!0,n9=!0;if(d.id!==u)u=d.id,_9=!0;if(nJ||j!==k){if(B0.buffers.depth.getReversed()&&k.reversedDepth!==!0)k._reversedDepth=!0,k.updateProjectionMatrix();e0.setValue(T,"projectionMatrix",k.projectionMatrix),e0.setValue(T,"viewMatrix",k.matrixWorldInverse);let E9=e0.map.cameraPosition;if(E9!==void 0)E9.setValue(T,d0.setFromMatrixPosition(k.matrixWorld));if(KJ.logarithmicDepthBuffer)e0.setValue(T,"logDepthBufFC",2/(Math.log(k.far+1)/Math.LN2));if(d.isMeshPhongMaterial||d.isMeshToonMaterial||d.isMeshLambertMaterial||d.isMeshBasicMaterial||d.isMeshStandardMaterial||d.isShaderMaterial)e0.setValue(T,"isOrthographic",k.isOrthographicCamera===!0);if(j!==k)j=k,_9=!0,n9=!0}if(V0.needsLights){if(TJ.state.directionalShadowMap.length>0)e0.setValue(T,"directionalShadowMap",TJ.state.directionalShadowMap,M);if(TJ.state.spotShadowMap.length>0)e0.setValue(T,"spotShadowMap",TJ.state.spotShadowMap,M);if(TJ.state.pointShadowMap.length>0)e0.setValue(T,"pointShadowMap",TJ.state.pointShadowMap,M)}if(m.isSkinnedMesh){e0.setOptional(T,m,"bindMatrix"),e0.setOptional(T,m,"bindMatrixInverse");let qJ=m.skeleton;if(qJ){if(qJ.boneTexture===null)qJ.computeBoneTexture();e0.setValue(T,"boneTexture",qJ.boneTexture,M)}}if(m.isBatchedMesh){if(e0.setOptional(T,m,"batchingTexture"),e0.setValue(T,"batchingTexture",m._matricesTexture,M),e0.setOptional(T,m,"batchingIdTexture"),e0.setValue(T,"batchingIdTexture",m._indirectTexture,M),e0.setOptional(T,m,"batchingColorTexture"),m._colorsTexture!==null)e0.setValue(T,"batchingColorTexture",m._colorsTexture,M)}let N9=l.morphAttributes;if(N9.position!==void 0||N9.normal!==void 0||N9.color!==void 0)_0.update(m,l,xJ);if(_9||V0.receiveShadow!==m.receiveShadow)V0.receiveShadow=m.receiveShadow,e0.setValue(T,"receiveShadow",m.receiveShadow);if((d.isMeshStandardMaterial||d.isMeshLambertMaterial||d.isMeshPhongMaterial)&&d.envMap===null&&f.environment!==null)OJ.envMapIntensity.value=f.environmentIntensity;if(OJ.dfgLUT!==void 0)OJ.dfgLUT.value=MX();if(_9){if(e0.setValue(T,"toneMappingExposure",O.toneMappingExposure),V0.needsLights)iK(OJ,n9);if(G0&&d.fog===!0)U0.refreshFogUniforms(OJ,G0);U0.refreshMaterialUniforms(OJ,d,H0,q0,L.state.transmissionRenderTarget[k.id]),l8.upload(T,V$(V0),OJ,M)}if(d.isShaderMaterial&&d.uniformsNeedUpdate===!0)l8.upload(T,V$(V0),OJ,M),d.uniformsNeedUpdate=!1;if(d.isSpriteMaterial)e0.setValue(T,"center",m.center);if(e0.setValue(T,"modelViewMatrix",m.modelViewMatrix),e0.setValue(T,"normalMatrix",m.normalMatrix),e0.setValue(T,"modelMatrix",m.matrixWorld),d.isShaderMaterial||d.isRawShaderMaterial){let qJ=d.uniformsGroups;for(let E9=0,s9=qJ.length;E9<s9;E9++){let B$=qJ[E9];Z0.update(B$,xJ),Z0.bind(B$,xJ)}}return xJ}function iK(k,f){k.ambientLightColor.needsUpdate=f,k.lightProbe.needsUpdate=f,k.directionalLights.needsUpdate=f,k.directionalLightShadows.needsUpdate=f,k.pointLights.needsUpdate=f,k.pointLightShadows.needsUpdate=f,k.spotLights.needsUpdate=f,k.spotLightShadows.needsUpdate=f,k.rectAreaLights.needsUpdate=f,k.hemisphereLights.needsUpdate=f}function oK(k){return k.isMeshLambertMaterial||k.isMeshToonMaterial||k.isMeshPhongMaterial||k.isMeshStandardMaterial||k.isShadowMaterial||k.isShaderMaterial&&k.lights===!0}this.getActiveCubeFace=function(){return y},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(k,f,l){let d=I.get(k);if(d.__autoAllocateDepthBuffer=k.resolveDepthBuffer===!1,d.__autoAllocateDepthBuffer===!1)d.__useRenderToTexture=!1;I.get(k.texture).__webglTexture=f,I.get(k.depthTexture).__webglTexture=d.__autoAllocateDepthBuffer?void 0:l,d.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(k,f){let l=I.get(k);l.__webglFramebuffer=f,l.__useDefaultFramebuffer=f===void 0};let aK=T.createFramebuffer();this.setRenderTarget=function(k,f=0,l=0){b=k,y=f,A=l;let d=null,m=!1,G0=!1;if(k){let Y0=I.get(k);if(Y0.__useDefaultFramebuffer!==void 0){B0.bindFramebuffer(T.FRAMEBUFFER,Y0.__webglFramebuffer),p.copy(k.viewport),v.copy(k.scissor),h=k.scissorTest,B0.viewport(p),B0.scissor(v),B0.setScissorTest(h),u=-1;return}else if(Y0.__webglFramebuffer===void 0)M.setupRenderTarget(k);else if(Y0.__hasExternalTextures)M.rebindTextures(k,I.get(k.texture).__webglTexture,I.get(k.depthTexture).__webglTexture);else if(k.depthBuffer){let S0=k.depthTexture;if(Y0.__boundDepthTexture!==S0){if(S0!==null&&I.has(S0)&&(k.width!==S0.image.width||k.height!==S0.image.height))throw Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");M.setupDepthRenderbuffer(k)}}let k0=k.texture;if(k0.isData3DTexture||k0.isDataArrayTexture||k0.isCompressedArrayTexture)G0=!0;let L0=I.get(k).__webglFramebuffer;if(k.isWebGLCubeRenderTarget){if(Array.isArray(L0[f]))d=L0[f][l];else d=L0[f];m=!0}else if(k.samples>0&&M.useMultisampledRTT(k)===!1)d=I.get(k).__webglMultisampledFramebuffer;else if(Array.isArray(L0))d=L0[l];else d=L0;p.copy(k.viewport),v.copy(k.scissor),h=k.scissorTest}else p.copy(o).multiplyScalar(H0).floor(),v.copy(K0).multiplyScalar(H0).floor(),h=F0;if(l!==0)d=aK;if(B0.bindFramebuffer(T.FRAMEBUFFER,d))B0.drawBuffers(k,d);if(B0.viewport(p),B0.scissor(v),B0.setScissorTest(h),m){let Y0=I.get(k.texture);T.framebufferTexture2D(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_CUBE_MAP_POSITIVE_X+f,Y0.__webglTexture,l)}else if(G0){let Y0=f;for(let k0=0;k0<k.textures.length;k0++){let L0=I.get(k.textures[k0]);T.framebufferTextureLayer(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0+k0,L0.__webglTexture,l,Y0)}}else if(k!==null&&l!==0){let Y0=I.get(k.texture);T.framebufferTexture2D(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_2D,Y0.__webglTexture,l)}u=-1},this.readRenderTargetPixels=function(k,f,l,d,m,G0,E0,Y0=0){if(!(k&&k.isWebGLRenderTarget)){P0("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let k0=I.get(k).__webglFramebuffer;if(k.isWebGLCubeRenderTarget&&E0!==void 0)k0=k0[E0];if(k0){B0.bindFramebuffer(T.FRAMEBUFFER,k0);try{let L0=k.textures[Y0],S0=L0.format,b0=L0.type;if(k.textures.length>1)T.readBuffer(T.COLOR_ATTACHMENT0+Y0);if(!KJ.textureFormatReadable(S0)){P0("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!KJ.textureTypeReadable(b0)){P0("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}if(f>=0&&f<=k.width-d&&(l>=0&&l<=k.height-m))T.readPixels(f,l,d,m,S.convert(S0),S.convert(b0),G0)}finally{let L0=b!==null?I.get(b).__webglFramebuffer:null;B0.bindFramebuffer(T.FRAMEBUFFER,L0)}}},this.readRenderTargetPixelsAsync=async function(k,f,l,d,m,G0,E0,Y0=0){if(!(k&&k.isWebGLRenderTarget))throw Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let k0=I.get(k).__webglFramebuffer;if(k.isWebGLCubeRenderTarget&&E0!==void 0)k0=k0[E0];if(k0)if(f>=0&&f<=k.width-d&&(l>=0&&l<=k.height-m)){B0.bindFramebuffer(T.FRAMEBUFFER,k0);let L0=k.textures[Y0],S0=L0.format,b0=L0.type;if(k.textures.length>1)T.readBuffer(T.COLOR_ATTACHMENT0+Y0);if(!KJ.textureFormatReadable(S0))throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!KJ.textureTypeReadable(b0))throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let z0=T.createBuffer();T.bindBuffer(T.PIXEL_PACK_BUFFER,z0),T.bufferData(T.PIXEL_PACK_BUFFER,G0.byteLength,T.STREAM_READ),T.readPixels(f,l,d,m,S.convert(S0),S.convert(b0),0);let a0=b!==null?I.get(b).__webglFramebuffer:null;B0.bindFramebuffer(T.FRAMEBUFFER,a0);let GJ=T.fenceSync(T.SYNC_GPU_COMMANDS_COMPLETE,0);return T.flush(),await nZ(T,GJ,4),T.bindBuffer(T.PIXEL_PACK_BUFFER,z0),T.getBufferSubData(T.PIXEL_PACK_BUFFER,0,G0),T.deleteBuffer(z0),T.deleteSync(GJ),G0}else throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(k,f=null,l=0){let d=Math.pow(2,-l),m=Math.floor(k.image.width*d),G0=Math.floor(k.image.height*d),E0=f!==null?f.x:0,Y0=f!==null?f.y:0;M.setTexture2D(k,0),T.copyTexSubImage2D(T.TEXTURE_2D,l,0,0,E0,Y0,m,G0),B0.unbindTexture()};let rK=T.createFramebuffer(),tK=T.createFramebuffer();if(this.copyTextureToTexture=function(k,f,l=null,d=null,m=0,G0=0){let E0,Y0,k0,L0,S0,b0,z0,a0,GJ,UJ=k.isCompressedTexture?k.mipmaps[G0]:k.image;if(l!==null)E0=l.max.x-l.min.x,Y0=l.max.y-l.min.y,k0=l.isBox3?l.max.z-l.min.z:1,L0=l.min.x,S0=l.min.y,b0=l.isBox3?l.min.z:0;else{let OJ=Math.pow(2,-m);if(E0=Math.floor(UJ.width*OJ),Y0=Math.floor(UJ.height*OJ),k.isDataArrayTexture)k0=UJ.depth;else if(k.isData3DTexture)k0=Math.floor(UJ.depth*OJ);else k0=1;L0=0,S0=0,b0=0}if(d!==null)z0=d.x,a0=d.y,GJ=d.z;else z0=0,a0=0,GJ=0;let r0=S.convert(f.format),RJ=S.convert(f.type),V0;if(f.isData3DTexture)M.setTexture3D(f,0),V0=T.TEXTURE_3D;else if(f.isDataArrayTexture||f.isCompressedArrayTexture)M.setTexture2DArray(f,0),V0=T.TEXTURE_2D_ARRAY;else M.setTexture2D(f,0),V0=T.TEXTURE_2D;T.pixelStorei(T.UNPACK_FLIP_Y_WEBGL,f.flipY),T.pixelStorei(T.UNPACK_PREMULTIPLY_ALPHA_WEBGL,f.premultiplyAlpha),T.pixelStorei(T.UNPACK_ALIGNMENT,f.unpackAlignment);let TJ=T.getParameter(T.UNPACK_ROW_LENGTH),u0=T.getParameter(T.UNPACK_IMAGE_HEIGHT),xJ=T.getParameter(T.UNPACK_SKIP_PIXELS),nJ=T.getParameter(T.UNPACK_SKIP_ROWS),_9=T.getParameter(T.UNPACK_SKIP_IMAGES);T.pixelStorei(T.UNPACK_ROW_LENGTH,UJ.width),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,UJ.height),T.pixelStorei(T.UNPACK_SKIP_PIXELS,L0),T.pixelStorei(T.UNPACK_SKIP_ROWS,S0),T.pixelStorei(T.UNPACK_SKIP_IMAGES,b0);let n9=k.isDataArrayTexture||k.isData3DTexture,e0=f.isDataArrayTexture||f.isData3DTexture;if(k.isDepthTexture){let OJ=I.get(k),N9=I.get(f),qJ=I.get(OJ.__renderTarget),E9=I.get(N9.__renderTarget);B0.bindFramebuffer(T.READ_FRAMEBUFFER,qJ.__webglFramebuffer),B0.bindFramebuffer(T.DRAW_FRAMEBUFFER,E9.__webglFramebuffer);for(let s9=0;s9<k0;s9++){if(n9)T.framebufferTextureLayer(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,I.get(k).__webglTexture,m,b0+s9),T.framebufferTextureLayer(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,I.get(f).__webglTexture,G0,GJ+s9);T.blitFramebuffer(L0,S0,E0,Y0,z0,a0,E0,Y0,T.DEPTH_BUFFER_BIT,T.NEAREST)}B0.bindFramebuffer(T.READ_FRAMEBUFFER,null),B0.bindFramebuffer(T.DRAW_FRAMEBUFFER,null)}else if(m!==0||k.isRenderTargetTexture||I.has(k)){let OJ=I.get(k),N9=I.get(f);B0.bindFramebuffer(T.READ_FRAMEBUFFER,rK),B0.bindFramebuffer(T.DRAW_FRAMEBUFFER,tK);for(let qJ=0;qJ<k0;qJ++){if(n9)T.framebufferTextureLayer(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,OJ.__webglTexture,m,b0+qJ);else T.framebufferTexture2D(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_2D,OJ.__webglTexture,m);if(e0)T.framebufferTextureLayer(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,N9.__webglTexture,G0,GJ+qJ);else T.framebufferTexture2D(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_2D,N9.__webglTexture,G0);if(m!==0)T.blitFramebuffer(L0,S0,E0,Y0,z0,a0,E0,Y0,T.COLOR_BUFFER_BIT,T.NEAREST);else if(e0)T.copyTexSubImage3D(V0,G0,z0,a0,GJ+qJ,L0,S0,E0,Y0);else T.copyTexSubImage2D(V0,G0,z0,a0,L0,S0,E0,Y0)}B0.bindFramebuffer(T.READ_FRAMEBUFFER,null),B0.bindFramebuffer(T.DRAW_FRAMEBUFFER,null)}else if(e0)if(k.isDataTexture||k.isData3DTexture)T.texSubImage3D(V0,G0,z0,a0,GJ,E0,Y0,k0,r0,RJ,UJ.data);else if(f.isCompressedArrayTexture)T.compressedTexSubImage3D(V0,G0,z0,a0,GJ,E0,Y0,k0,r0,UJ.data);else T.texSubImage3D(V0,G0,z0,a0,GJ,E0,Y0,k0,r0,RJ,UJ);else if(k.isDataTexture)T.texSubImage2D(T.TEXTURE_2D,G0,z0,a0,E0,Y0,r0,RJ,UJ.data);else if(k.isCompressedTexture)T.compressedTexSubImage2D(T.TEXTURE_2D,G0,z0,a0,UJ.width,UJ.height,r0,UJ.data);else T.texSubImage2D(T.TEXTURE_2D,G0,z0,a0,E0,Y0,r0,RJ,UJ);if(T.pixelStorei(T.UNPACK_ROW_LENGTH,TJ),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,u0),T.pixelStorei(T.UNPACK_SKIP_PIXELS,xJ),T.pixelStorei(T.UNPACK_SKIP_ROWS,nJ),T.pixelStorei(T.UNPACK_SKIP_IMAGES,_9),G0===0&&f.generateMipmaps)T.generateMipmap(V0);B0.unbindTexture()},this.initRenderTarget=function(k){if(I.get(k).__webglFramebuffer===void 0)M.setupRenderTarget(k)},this.initTexture=function(k){if(k.isCubeTexture)M.setTextureCube(k,0);else if(k.isData3DTexture)M.setTexture3D(k,0);else if(k.isDataArrayTexture||k.isCompressedArrayTexture)M.setTexture2DArray(k,0);else M.setTexture2D(k,0);B0.unbindTexture()},this.resetState=function(){y=0,A=0,b=null,B0.reset(),$0.reset()},typeof __THREE_DEVTOOLS__<"u")__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return IQ}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(J){this._outputColorSpace=J;let Q=this.getContext();Q.drawingBufferColorSpace=x0._getDrawingBufferColorSpace(J),Q.unpackColorSpace=x0._getUnpackColorSpace()}}function jK(J){if(window.innerWidth<768)return null;try{let Q=new W$({canvas:J,alpha:!0,antialias:!0});Q.setPixelRatio(Math.min(window.devicePixelRatio,2)),Q.setClearColor(0,0);let $=new y7,Z=new zJ(50,1,0.1,100);Z.position.z=5;let K=new k9,U=4,H=U*40,G=0.8,Y=6,E=Y/2,N=[],X=[];for(let B=0;B<=H;B++){let L=B/H,w=L*U*Math.PI*2,_=L*Y-E;N.push(new x(Math.cos(w)*G,_,Math.sin(w)*G)),X.push(new x(Math.cos(w+Math.PI)*G,_,Math.sin(w+Math.PI)*G))}let R=new O8({color:58998,transparent:!0,opacity:0.35}),D=new LJ().setFromPoints(N),V=new LJ().setFromPoints(X);K.add(new R8(D,R)),K.add(new R8(V,R));let q=new O8({color:58998,transparent:!0,opacity:0.15});for(let B=0;B<=H;B+=4){let L=B/H,w=L*U*Math.PI*2,_=L*Y-E,C=new x(Math.cos(w)*G,_,Math.sin(w)*G),O=new x(Math.cos(w+Math.PI)*G,_,Math.sin(w+Math.PI)*G),P=new LJ().setFromPoints([C,O]);K.add(new R8(P,q))}let F=new p8(0.04,6,6),z=new D8({color:58998,transparent:!0,opacity:0.25});for(let B=0;B<=H;B+=4){let L=B/H,w=L*U*Math.PI*2,_=L*Y-E,C=new wJ(F,z);C.position.set(Math.cos(w)*G,_,Math.sin(w)*G),K.add(C);let O=new wJ(F,z);O.position.set(Math.cos(w+Math.PI)*G,_,Math.sin(w+Math.PI)*G),K.add(O)}return $.add(K),{canvas:J,renderer:Q,scene:$,camera:Z,helix:K,scrollY:0}}catch{return null}}function yK(J,Q){if(!J)return;let $=J.canvas.clientWidth,Z=J.canvas.clientHeight;if($<=0||Z<=0)return;J.renderer.setSize($,Z,!1),J.camera.aspect=$/Z,J.camera.updateProjectionMatrix(),J.helix.rotation.y=Q*0.0002,J.helix.position.y=J.scrollY*0.002,J.renderer.render(J.scene,J.camera)}function fK(J,Q){if(J)J.scrollY=Q}var VX=(J,Q,$,Z,K)=>{if(K.custom.c===void 0)K.custom.c=0.35,K.custom.l=0.5,K.custom.drag=0;let U=$-28,W=$-12,H=8,G=Q*0.42,Y=5;if(K.mouseDown&&K.mouseX>=0){let i=K.mouseX>=H&&K.mouseX<=H+G;if(K.custom.drag===0){let n=H+K.custom.c*G,J0=H+K.custom.l*G;if(i&&Math.abs(K.mouseY-U)<12)K.custom.drag=1;else if(i&&Math.abs(K.mouseY-W)<12)K.custom.drag=2}if(K.custom.drag===1)K.custom.c=Math.max(0,Math.min(1,(K.mouseX-H)/G));else if(K.custom.drag===2)K.custom.l=Math.max(0.05,Math.min(1,(K.mouseX-H)/G))}else K.custom.drag=0;let E=K.custom.c,N=K.custom.l,R=2.5*N*E,D=Math.pow(10,-R),V=$*0.3,q=Q*0.18,F=N*Q*0.25+Q*0.05,z=q+F,B=$*0.32,L=V-B/2,w=z+Q*0.06,_=J.createRadialGradient(10,V,1,10,V,14);_.addColorStop(0,"rgba(0, 230, 118, 0.9)"),_.addColorStop(1,"rgba(0, 230, 118, 0)"),J.fillStyle=_,J.beginPath(),J.arc(10,V,14,0,Math.PI*2),J.fill(),J.strokeStyle="rgba(0, 230, 118, 0.7)",J.lineWidth=3,J.beginPath(),J.moveTo(16,V),J.lineTo(q,V),J.stroke(),J.fillStyle="#00e676",J.font="7px JetBrains Mono",J.fillText("I₀",q-12,V-8),J.strokeStyle="rgba(0, 230, 118, 0.3)",J.lineWidth=1.5,J.strokeRect(q,L,F,B),J.fillStyle=`rgba(0, 230, 118, ${0.03+E*0.15})`,J.fillRect(q+1,L+1,F-2,B-2);let C=Math.floor(E*35),O=42,P=()=>{return O=O*1664525+1013904223&4294967295,(O>>>0)/4294967296};J.fillStyle=`rgba(0, 230, 118, ${0.15+E*0.25})`;for(let i=0;i<C;i++){let n=q+4+P()*(F-8),J0=L+4+P()*(B-8);J.beginPath(),J.arc(n,J0,1.5+P()*1.5,0,Math.PI*2),J.fill()}J.strokeStyle="rgba(200,208,216,0.3)",J.lineWidth=0.5;let y=L+B+4;J.beginPath(),J.moveTo(q,y),J.lineTo(q,y+4),J.stroke(),J.beginPath(),J.moveTo(z,y),J.lineTo(z,y+4),J.stroke(),J.beginPath(),J.moveTo(q,y+2),J.lineTo(z,y+2),J.stroke(),J.fillStyle="rgba(200,208,216,0.4)",J.font="7px JetBrains Mono",J.fillText("l",q+F/2-2,y+11),J.strokeStyle=`rgba(0, 230, 118, ${Math.max(0.05,D*0.7)})`,J.lineWidth=Math.max(0.5,3*D),J.beginPath(),J.moveTo(z,V),J.lineTo(w,V),J.stroke(),J.fillStyle=`rgba(0, 230, 118, ${0.3+D*0.5})`,J.font="7px JetBrains Mono",J.fillText("I",w-10,V-8),J.fillStyle=`rgba(0, 230, 118, ${0.08+D*0.35})`,J.fillRect(w,V-8,8,16),J.strokeStyle="rgba(0, 230, 118, 0.3)",J.lineWidth=1,J.strokeRect(w,V-8,8,16);let A=Q*0.56,b=Q*0.4,u=6,j=$*0.42;J.strokeStyle="rgba(0, 230, 118, 0.2)",J.lineWidth=0.5,J.beginPath(),J.moveTo(A,u),J.lineTo(A,u+j),J.lineTo(A+b,u+j),J.stroke(),J.fillStyle="rgba(200,208,216,0.3)",J.font="7px JetBrains Mono",J.fillText("Absorbance",A+2,u+8),J.fillText("λ (nm)",A+b-28,u+j+10),J.fillText("800",A-2,u+j+10),J.fillText("2500",A+b-16,u+j+10),J.strokeStyle="#00e676",J.lineWidth=1.5,J.beginPath();for(let i=0;i<b;i++){let n=800+i/b*1700,J0=0.02;J0+=0.3*Math.exp(-((n-1000)**2)/8000),J0+=0.6*Math.exp(-((n-1550)**2)/12000),J0+=0.9*Math.exp(-((n-2100)**2)/15000),J0*=E*N*2;let q0=u+j-Math.min(J0,1)*j*0.9;i===0?J.moveTo(A+i,q0):J.lineTo(A+i,q0)}J.stroke(),J.globalAlpha=0.15,J.lineWidth=4,J.stroke(),J.globalAlpha=1,J.lineWidth=1;let p=A,v=u+j+16;J.fillStyle="#00e676",J.font="8px JetBrains Mono",J.fillText(`A = ${R.toFixed(2)}  T = ${(D*100).toFixed(1)}%`,p,v),J.fillText(`c = ${(E*200).toFixed(0)} mg/dL  l = ${(N*10).toFixed(1)} mm`,p,v+11),J.fillStyle="rgba(200,208,216,0.4)",J.fillText("A = ε·l·c",p,v+22);let h=(i,n,J0,q0,H0,QJ)=>{J.fillStyle="rgba(0, 230, 118, 0.1)",J.fillRect(H,J0-3,G,6),J.fillStyle=q0?"rgba(0, 230, 118, 0.4)":"rgba(0, 230, 118, 0.2)",J.fillRect(H,J0-3,n*G,6);let c0=H+n*G;J.fillStyle=q0?"#00e676":"rgba(0, 230, 118, 0.7)",J.beginPath(),J.arc(c0,J0,q0?Y+1:Y,0,Math.PI*2),J.fill(),J.fillStyle="rgba(200,208,216,0.5)",J.font="8px JetBrains Mono",J.fillText(`${i}: ${QJ}${H0}`,H+G+8,J0+3)};h("c",E,U,K.custom.drag===1," mg/dL",(E*200).toFixed(0)),h("l",N,W,K.custom.drag===2," mm",(N*10).toFixed(1))},LX=(J,Q,$,Z,K)=>{let W=Math.min(Math.floor(($-24)/7),Math.floor(Q*0.35/7)),H=8,G=10,Y=123,E=()=>{return Y=Y*1664525+1013904223&4294967295,(Y>>>0)/4294967296},N=[];for(let _=0;_<7;_++){N[_]=[];for(let C=0;C<7;C++){let O=C-3.5,P=_-3,y=Math.sqrt(O*O+P*P);N[_][C]=y<2?0.6+E()*0.3:E()*0.3}}let X=[[-1,-1,-1],[-1,8,-1],[-1,-1,-1]],R,D;if(K.mouseX>=0&&K.mouseX<8+7*W&&K.mouseY<10+7*W)D=Math.floor((K.mouseX-8)/W)-1,R=Math.floor((K.mouseY-10)/W)-1;else{let _=Math.floor(Z*3)%25;R=Math.floor(_/5),D=_%5}D=Math.max(0,Math.min(4,D)),R=Math.max(0,Math.min(4,R));for(let _=0;_<7;_++)for(let C=0;C<7;C++){let O=N[_][C];J.fillStyle=`rgba(0, 230, 118, ${O*0.6})`,J.fillRect(8+C*W,10+_*W,W-1,W-1)}J.strokeStyle="#ff6d3a",J.lineWidth=1.5,J.strokeRect(8+D*W-1,10+R*W-1,W*3+1,W*3+1);let V=0;for(let _=0;_<3;_++)for(let C=0;C<3;C++)V+=N[R+_][D+C]*X[_][C];let q=Math.max(0,V),F=Q*0.42,z=14;J.fillStyle="#00e676",J.font="8px JetBrains Mono",J.fillText("3x3 kernel",F,z-1);for(let _=0;_<3;_++)for(let C=0;C<3;C++){let O=X[_][C];J.fillStyle=O>0?"rgba(0, 230, 118, 0.4)":"rgba(255, 109, 58, 0.25)";let P=Math.min(W,14);J.fillRect(F+C*(P+1),z+4+_*(P+1),P,P),J.fillStyle="#c8d0d8",J.font="7px JetBrains Mono",J.fillText(String(O),F+C*(P+1)+2,z+4+_*(P+1)+P-3)}J.strokeStyle="rgba(0,230,118,0.3)",J.lineWidth=1;let B=F+50;J.beginPath(),J.moveTo(B,$*0.5),J.lineTo(B+16,$*0.5),J.stroke(),J.beginPath(),J.moveTo(B+12,$*0.5-3),J.lineTo(B+16,$*0.5),J.lineTo(B+12,$*0.5+3),J.fill();let L=Q*0.72,w=5;J.fillStyle="#00e676",J.font="8px JetBrains Mono",J.fillText("feature map",L,9);for(let _=0;_<w;_++)for(let C=0;C<w;C++){let O=0;for(let y=0;y<3;y++)for(let A=0;A<3;A++)O+=N[_+y][C+A]*X[y][A];O=Math.max(0,O)/3;let P=_===R&&C===D;J.fillStyle=P?`rgba(255, 109, 58, ${Math.min(1,O+0.3)})`:`rgba(0, 230, 118, ${O*0.6})`,J.fillRect(L+C*W,14+_*W,W-1,W-1)}J.fillStyle="#ff6d3a",J.font="8px JetBrains Mono",J.fillText(`conv=${V.toFixed(1)} ReLU=${q.toFixed(1)}`,L,$-4),J.fillStyle="rgba(200,208,216,0.3)",J.font="8px JetBrains Mono",J.fillText("hover kernel",4,$-4)},BX=(J,Q,$,Z,K)=>{if(!K.custom.priceInit){K.custom.priceInit=1;let p=314,v=()=>{return p=p*1664525+1013904223&4294967295,(p>>>0)/4294967296},h=450,i=120;for(let n=0;n<i;n++){let J0=Math.sin(n*0.05)*0.3;if(h+=(v()-0.47+J0)*2.5,h=Math.max(420,Math.min(480,h)),K.custom["p"+n]=h,K.custom["sig"+n]=0,n>5){let q0=(K.custom["p"+(n-3)]+K.custom["p"+(n-2)]+K.custom["p"+(n-1)])/3;if(h<q0-3)K.custom["sig"+n]=1;if(h>q0+3)K.custom["sig"+n]=-1}}K.custom.totalPts=i}let U=K.custom.totalPts,W=[{start:5,text:"Fed hints at rate cut",sent:0.6},{start:25,text:"Inflation data misses",sent:-0.5},{start:45,text:"Tech earnings beat",sent:0.7},{start:65,text:"Trade tensions rise",sent:-0.6},{start:85,text:"Jobs report strong",sent:0.4},{start:105,text:"GDP growth slows",sent:-0.4}],H=50,G=U-H,Y=K.mouseX>=0?Math.floor(K.mouseX/Q*G):Math.floor(Z*4%G),E=Math.max(0,Math.min(G,Y)),N=30,X=6,R=Q-N-6,D=$*0.52,V=1/0,q=-1/0;for(let p=E;p<E+H;p++){let v=K.custom["p"+p]??450;if(v<V)V=v;if(v>q)q=v}let F=q-V||1;V-=F*0.1,q+=F*0.1;let z=q-V;J.fillStyle="rgba(200,208,216,0.3)",J.font="7px JetBrains Mono",J.fillText(q.toFixed(0),2,X+8),J.fillText(V.toFixed(0),2,X+D),J.strokeStyle="rgba(0,230,118,0.1)",J.lineWidth=0.5,J.strokeRect(N,X,R,D);for(let p=0;p<4;p++){let v=X+p/3*D;J.beginPath(),J.moveTo(N,v),J.lineTo(N+R,v),J.stroke()}J.strokeStyle="#00e676",J.lineWidth=1.5,J.beginPath();for(let p=0;p<H;p++){let v=N+p/(H-1)*R,h=K.custom["p"+(E+p)]??450,i=X+D-(h-V)/z*D;p===0?J.moveTo(v,i):J.lineTo(v,i)}J.stroke();let B=N+R,L=K.custom["p"+(E+H-1)]??450,w=X+D-(L-V)/z*D;J.lineTo(B,X+D),J.lineTo(N,X+D),J.closePath(),J.fillStyle="rgba(0, 230, 118, 0.04)",J.fill();for(let p=0;p<H;p++){let v=K.custom["sig"+(E+p)]??0;if(v===0)continue;let h=N+p/(H-1)*R,i=K.custom["p"+(E+p)]??450,n=X+D-(i-V)/z*D;if(v===1)J.fillStyle="#00e676",J.beginPath(),J.moveTo(h,n-2),J.lineTo(h-4,n+6),J.lineTo(h+4,n+6),J.fill();else J.fillStyle="#ff6d3a",J.beginPath(),J.moveTo(h,n+2),J.lineTo(h-4,n-6),J.lineTo(h+4,n-6),J.fill()}J.fillStyle="#00e676",J.font="8px JetBrains Mono",J.fillText("SPY",N+4,X+12);let _=K.custom["p"+(E+H-1)]??450;J.fillText(`$${_.toFixed(2)}`,N+28,X+12);let C=X+D+10,O=W[0];for(let p of W)if(p.start>=E&&p.start<E+H){O=p;break}let P=["NEWS","NLP","SIGNAL","EXECUTE"],y=(Q-16)/P.length;J.font="7px JetBrains Mono";for(let p=0;p<P.length;p++){let v=8+p*y;if(J.strokeStyle="rgba(0,230,118,0.2)",J.lineWidth=0.5,J.strokeRect(v,C,y-8,16),J.fillStyle="rgba(0,230,118,0.5)",J.fillText(P[p],v+3,C+11),p<P.length-1)J.strokeStyle="rgba(0,230,118,0.2)",J.beginPath(),J.moveTo(v+y-8,C+8),J.lineTo(v+y-2,C+8),J.stroke()}let A=C+24;J.font="8px JetBrains Mono",J.fillStyle=O.sent>0?"#00e676":"#ff6d3a",J.fillText(`"${O.text}"`,8,A);let b=O.sent>0.2?"BULLISH":O.sent<-0.2?"BEARISH":"NEUTRAL";J.fillStyle=O.sent>0?"#00e676":"#ff6d3a",J.font="8px JetBrains Mono",J.fillText(`${b} (${O.sent>0?"+":""}${O.sent.toFixed(1)})`,8,A+12);let u=O.sent>0.2?"BUY SPY":O.sent<-0.2?"SELL SPY":"HOLD",j=O.sent>0.2?"#00e676":O.sent<-0.2?"#ff6d3a":"#7b8594";J.fillStyle=j,J.font="9px JetBrains Mono",J.fillText(`→ ${u}`,Q*0.55,A+6),J.fillStyle="rgba(200,208,216,0.3)",J.font="7px JetBrains Mono",J.fillText("drag to scroll timeline",8,$-3)},zX=(J,Q,$,Z,K)=>{let U=Q*0.35,W=$*0.38,H=Math.sin(Z*1.8)*0.5+0.5,G=K.mouseY>=0?K.mouseY/$:H,Y=[{name:"head",x:U,y:W-18+G*6,conf:0.97},{name:"l_shoulder",x:U-14,y:W+G*8,conf:0.95},{name:"r_shoulder",x:U+14,y:W+G*8,conf:0.96},{name:"l_elbow",x:U-22,y:W+14+G*10,conf:0.91},{name:"r_elbow",x:U+22,y:W+14+G*10,conf:0.93},{name:"l_hip",x:U-8,y:W+26+G*12,conf:0.94},{name:"r_hip",x:U+8,y:W+26+G*12,conf:0.95},{name:"l_knee",x:U-12-G*6,y:W+46+G*16,conf:0.89},{name:"r_knee",x:U+12+G*6,y:W+46+G*16,conf:0.9},{name:"l_ankle",x:U-10,y:W+66+G*8,conf:0.85},{name:"r_ankle",x:U+10,y:W+66+G*8,conf:0.87}],E=[[0,1],[0,2],[1,3],[2,4],[1,5],[2,6],[5,7],[6,8],[7,9],[8,10],[5,6]];J.strokeStyle="rgba(0, 230, 118, 0.4)",J.lineWidth=2;for(let[B,L]of E)J.beginPath(),J.moveTo(Y[B].x,Y[B].y),J.lineTo(Y[L].x,Y[L].y),J.stroke();for(let B of Y)J.strokeStyle=`rgba(0, 230, 118, ${B.conf*0.4})`,J.lineWidth=1,J.beginPath(),J.arc(B.x,B.y,4+(1-B.conf)*10,0,Math.PI*2),J.stroke(),J.fillStyle=B.conf>0.9?"#00e676":"#ff6d3a",J.beginPath(),J.arc(B.x,B.y,2.5,0,Math.PI*2),J.fill();let N=Q*0.6;J.fillStyle="#00e676",J.font="9px JetBrains Mono",J.fillText("KEYPOINTS DETECTED",N,12);let X=-1;if(K.mouseX>=0){let B=20;for(let L=0;L<Y.length;L++){let w=Math.sqrt((K.mouseX-Y[L].x)**2+(K.mouseY-Y[L].y)**2);if(w<B)B=w,X=L}}J.font="8px JetBrains Mono";let R=X>=0?[Y[X]]:Y.slice(0,6);for(let B=0;B<R.length;B++){let L=R[B];J.fillStyle=L.conf>0.9?"#00e676":"#ff6d3a",J.fillText(`${L.name}`,N,26+B*11),J.fillStyle="#7b8594",J.fillText(`${(L.conf*100).toFixed(0)}%`,N+70,26+B*11)}let D=Y[7],V=Y[5],q=Y[9],F=Math.atan2(q.y-D.y,q.x-D.x)-Math.atan2(V.y-D.y,V.x-D.x),z=Math.abs(F*57.3);J.fillStyle="#00e676",J.font="9px JetBrains Mono",J.fillText(`knee: ${z.toFixed(0)}°`,N,$-14),J.fillStyle="rgba(200,208,216,0.35)",J.fillText("mouse ↕ = squat depth",4,$-4)},IX=(J,Q,$,Z,K)=>{let H=Q*0.55,G=$-20;J.strokeStyle="rgba(0, 230, 118, 0.2)",J.lineWidth=1,J.beginPath(),J.moveTo(8,8),J.lineTo(8,8+G),J.lineTo(8+H,8+G),J.stroke(),J.fillStyle="#7b8594",J.font="7px JetBrains Mono",J.fillText("HRV",8+H/2-8,8+G+10),J.save(),J.translate(6,8+G/2),J.rotate(-Math.PI/2),J.fillText("RR interval",-20,0),J.restore();let Y=55,E=()=>{return Y=Y*1664525+1013904223&4294967295,(Y>>>0)/4294967296},N=[],X=[];for(let D=0;D<15;D++)N.push({x:0.25+E()*0.35,y:0.55+E()*0.3}),X.push({x:0.55+E()*0.35,y:0.15+E()*0.35});J.strokeStyle="rgba(255, 255, 255, 0.3)",J.lineWidth=1,J.setLineDash([4,3]),J.beginPath(),J.moveTo(8+H*0.1,8+G*0.15),J.lineTo(8+H*0.9,8+G*0.85),J.stroke(),J.setLineDash([]),J.fillStyle="rgba(0, 230, 118, 0.04)",J.beginPath(),J.moveTo(8+H*0.05,8+G*0.15),J.lineTo(8+H*0.85,8+G*0.85),J.lineTo(8+H*0.95,8+G*0.85),J.lineTo(8+H*0.15,8+G*0.15),J.fill();for(let D of N)J.fillStyle="rgba(0, 230, 118, 0.6)",J.beginPath(),J.arc(8+D.x*H,8+(1-D.y)*G,3,0,Math.PI*2),J.fill();for(let D of X)J.fillStyle="rgba(255, 109, 58, 0.6)",J.beginPath(),J.arc(8+D.x*H,8+(1-D.y)*G,3,0,Math.PI*2),J.fill();if(K.clicked&&K.clickX<8+H){let D=(K.clickX-8)/H,V=1-(K.clickY-8)/G;K.custom.testX=D,K.custom.testY=V,K.custom.testClass=V>0.15+(D-0.1)*0.875?0:1}if(K.custom.testX!==void 0){let D=8+K.custom.testX*H,V=8+(1-K.custom.testY)*G,q=K.custom.testClass===1;J.strokeStyle=q?"#ff6d3a":"#00e676",J.lineWidth=2,J.beginPath(),J.arc(D,V,6,0,Math.PI*2),J.stroke(),J.fillStyle=q?"#ff6d3a":"#00e676",J.beginPath(),J.arc(D,V,2,0,Math.PI*2),J.fill()}let R=Q*0.62;if(J.fillStyle="#00e676",J.font="9px JetBrains Mono",J.fillText("SVM CLASSIFIER",R,14),J.fillStyle="rgba(0, 230, 118, 0.6)",J.beginPath(),J.arc(R+4,28,3,0,Math.PI*2),J.fill(),J.fillStyle="#c8d0d8",J.font="8px JetBrains Mono",J.fillText("Normal",R+12,31),J.fillStyle="rgba(255, 109, 58, 0.6)",J.beginPath(),J.arc(R+4,42,3,0,Math.PI*2),J.fill(),J.fillStyle="#c8d0d8",J.fillText("AFib",R+12,45),J.fillStyle="#7b8594",J.fillText("margin",R+12,59),K.custom.testClass!==void 0)J.fillStyle=K.custom.testClass===1?"#ff6d3a":"#00e676",J.font="10px JetBrains Mono",J.fillText(K.custom.testClass===1?"AFIB":"NORMAL",R,$-14);J.fillStyle="rgba(200,208,216,0.35)",J.font="9px JetBrains Mono",J.fillText("click to classify",R,$-4)},_X=(J,Q,$,Z,K)=>{let W={A:"#00e676",T:"#ff6d3a",C:"#42a5f5",G:"#ffd740"},H=Math.floor(Z*3)%10,G=10,Y=$*0.5,E=($-Y)/2;for(let N=0;N<Math.ceil(Q/12);N++){let R="ATCGATCGAATTCCGGAATCGATCGTTAACCGGAATCGAATTCCGG"[(N+H)%46],D=N*12,V=Y*(0.5+Math.sin(N*0.5+Z)*0.3);J.fillStyle=W[R]||"#00e676",J.globalAlpha=0.5,J.fillRect(D,E+(Y-V)/2,10,V),J.globalAlpha=0.8,J.font="9px JetBrains Mono",J.fillText(R,D+1,E-3)}if(J.globalAlpha=1,K.mouseX>=0){let N=Math.floor(K.mouseX/12),X=N*12;J.strokeStyle="rgba(255,255,255,0.4)",J.lineWidth=1,J.strokeRect(X-1,E-12,36,Y+16);let R="ATCGATCGAATTCCGGAATCGATCGTTAACCGGAATCGAATTCCGG"[(N+H)%46],D="ATCGATCGAATTCCGGAATCGATCGTTAACCGGAATCGAATTCCGG"[(N+H+1)%46],V="ATCGATCGAATTCCGGAATCGATCGTTAACCGGAATCGAATTCCGG"[(N+H+2)%46];J.fillStyle="#c8d0d8",J.font="10px JetBrains Mono",J.fillText(`${R}${D}${V}`,X,$-4)}J.fillStyle="rgba(200,208,216,0.35)",J.font="9px JetBrains Mono",J.fillText("hover codons",Q-82,$-4)},AX=(J,Q,$,Z,K)=>{let H=Q*0.28,G=$-16,Y=8,E=H*0.35;J.strokeStyle="rgba(0, 230, 118, 0.3)",J.lineWidth=1.5,J.beginPath(),J.roundRect(8,8,H,G,8),J.stroke(),J.fillStyle="#0a0a0f",J.strokeStyle="rgba(0, 230, 118, 0.2)",J.lineWidth=1,J.beginPath(),J.roundRect(8+(H-E)/2,7,E,8,[0,0,4,4]),J.fill(),J.stroke();let N=12,X=20,R=H-8,D=G-20;J.fillStyle="rgba(0, 230, 118, 0.2)",J.fillRect(N,X,R,2),J.fillStyle="rgba(200, 208, 216, 0.08)",J.fillRect(N,X+5,R,8),J.fillStyle="rgba(200, 208, 216, 0.2)",J.font="5px JetBrains Mono",J.fillText("App Under Test",N+2,X+11);for(let y=0;y<4;y++){let A=X+18+y*(D*0.18),b=D*0.13;J.fillStyle="rgba(200, 208, 216, 0.04)",J.fillRect(N+2,A,R-4,b);let u=(Z*1.5+y*2.3)%8;if(u>0&&u<0.6){let j=u*18;J.strokeStyle=`rgba(0, 230, 118, ${0.5-u*0.7})`,J.lineWidth=1,J.beginPath(),J.arc(N+R/2,A+b/2,j,0,Math.PI*2),J.stroke()}}let V=8+H+14,q=Q-V-4,F=[{action:"launch",target:"com.app.test",icon:"▶"},{action:"tap",target:"Sign In button",icon:"●"},{action:"type",target:"email field",icon:"⌨"},{action:"swipe",target:"scroll down",icon:"↕"},{action:"assert",target:"dashboard visible",icon:"✔"},{action:"screenshot",target:"capture state",icon:"▣"},{action:"tap",target:"Settings tab",icon:"●"},{action:"assert",target:"profile loaded",icon:"✔"}],z=12,B=Z*0.8%z,L=Math.min(F.length,Math.floor(B*F.length/z));J.fillStyle="rgba(200, 208, 216, 0.35)",J.font="7px JetBrains Mono",J.fillText("QA EXECUTION LOG",V,12);let w=18,_=3;J.fillStyle="rgba(0, 230, 118, 0.1)",J.fillRect(V,w,q,_);let C=L/F.length;J.fillStyle=C>=1?"#00e676":"rgba(0, 230, 118, 0.5)",J.fillRect(V,w,q*C,_);let O=14,P=28;for(let y=0;y<F.length;y++){let A=P+y*O;if(A+O>$-12)break;let b=F[y],u=y<L,j=y===L&&B<z,p=K.mouseX>=V&&K.mouseX<=V+q&&K.mouseY>=A&&K.mouseY<=A+O;if(u)J.fillStyle="#00e676",J.font="8px JetBrains Mono",J.fillText("✓",V,A+9);else if(j)J.fillStyle=`rgba(0, 230, 118, ${0.4+Math.sin(Z*6)*0.3})`,J.beginPath(),J.arc(V+3,A+6,2,0,Math.PI*2),J.fill();else J.fillStyle="rgba(123, 133, 148, 0.3)",J.beginPath(),J.arc(V+3,A+6,2,0,Math.PI*2),J.fill();if(J.fillStyle=u?"rgba(200, 208, 216, 0.7)":j?"#c8d0d8":"rgba(123, 133, 148, 0.4)",J.font="8px JetBrains Mono",J.fillText(`${b.icon} ${b.action}`,V+10,A+9),p&&u)J.fillStyle="rgba(0, 230, 118, 0.5)",J.font="7px JetBrains Mono",J.fillText(b.target,V+10,A+9+O*0.7)}if(L>=F.length){let y=$-16;J.fillStyle="#00e676",J.font="9px JetBrains Mono",J.fillText(`${F.length}/${F.length} PASSED`,V,y),J.fillStyle="rgba(0, 230, 118, 0.3)",J.font="7px JetBrains Mono",J.fillText("0 failures",V+70,y)}J.fillStyle="rgba(200,208,216,0.3)",J.font="9px JetBrains Mono",J.fillText("hover steps",V,$-4)},CX=(J,Q,$,Z,K)=>{let U=Q*0.52,W=[{label:"ECG II",color:"#00e676",freq:4.2,amp:0.8,spike:!0},{label:"ART",color:"#ff6d3a",freq:1.8,amp:0.6,spike:!1},{label:"PLETH",color:"#42a5f5",freq:1.8,amp:0.5,spike:!1}],H=($-30)/W.length;for(let w=0;w<W.length;w++){let _=W[w],C=14+w*H+H/2;J.fillStyle=_.color,J.globalAlpha=0.5,J.font="7px JetBrains Mono",J.fillText(_.label,4,C-H*0.35),J.globalAlpha=1,J.strokeStyle=_.color,J.lineWidth=1.2,J.beginPath();for(let O=0;O<U;O++){let P=O/U*Math.PI*8+Z*_.freq,y;if(_.spike){let u=(P%(Math.PI*2)+Math.PI*2)%(Math.PI*2)/(Math.PI*2);if(u>0.38&&u<0.42)y=-_.amp*3.5;else if(u>0.42&&u<0.44)y=_.amp*1.2;else if(u>0.44&&u<0.46)y=-_.amp*0.3;else y=Math.sin(P*0.3)*_.amp*0.08}else if(y=Math.sin(P)*_.amp,_.label==="ART")y+=Math.sin(P*2.1)*_.amp*0.3;let A=C+y*H*0.35;O===0?J.moveTo(O+2,A):J.lineTo(O+2,A)}J.stroke(),J.globalAlpha=0.1,J.lineWidth=4,J.stroke(),J.globalAlpha=1,J.lineWidth=1}J.strokeStyle="rgba(0, 230, 118, 0.15)",J.lineWidth=1,J.beginPath(),J.moveTo(U+6,4),J.lineTo(U+6,$-4),J.stroke();let G=[{label:"HR",value:72+Math.floor(Math.sin(Z*0.4)*3),color:"#00e676"},{label:"MAP",value:85+Math.floor(Math.sin(Z*0.25)*4),color:"#ff6d3a"},{label:"SpO₂",value:98+Math.floor(Math.sin(Z*0.15)*1),color:"#42a5f5"}],Y=$-10,E=U/G.length;for(let w=0;w<G.length;w++){let _=G[w],C=4+w*E;J.fillStyle="rgba(200,208,216,0.35)",J.font="7px JetBrains Mono",J.fillText(_.label,C,Y),J.fillStyle=_.color,J.font="10px JetBrains Mono",J.fillText(`${_.value}`,C+26,Y)}let N=U+14,X=Q-N-4,R=["PRE-OP","INCISION","BONE PREP","IMPLANT","CLOSURE"],D=Math.floor(Z*0.15%R.length);J.fillStyle="rgba(200,208,216,0.35)",J.font="7px JetBrains Mono",J.fillText("PHASE",N,12),J.fillStyle="#00e676",J.font="9px JetBrains Mono",J.fillText(R[D],N,23);let V=[{level:"YELLOW",color:"#ffd740",driver:"MAP trending low",detail:"Systolic drift >15%"},{level:"RED",color:"#ff6d3a",driver:"HR above baseline",detail:"Sustained +20 bpm"}],q=Z*0.3%10,F=q<3?0:q<7?1:2,z=28,B=4,L=32;if(F===0)J.fillStyle="rgba(0, 230, 118, 0.25)",J.font="9px JetBrains Mono",J.fillText("NO ACTIVE RISKS",N,L+14),J.fillStyle="rgba(0, 230, 118, 0.12)",J.beginPath(),J.arc(N+X/2,L+40,12,0,Math.PI*2),J.fill(),J.fillStyle="#00e676",J.font="14px JetBrains Mono",J.fillText("✓",N+X/2-5,L+45);for(let w=0;w<F&&w<V.length;w++){let _=V[w],C=L+w*(z+B),O=K.mouseX>=N&&K.mouseX<=N+X&&K.mouseY>=C&&K.mouseY<=C+z;if(J.fillStyle=O?`rgba(${_.color==="#ffd740"?"255,215,64":"255,109,58"},0.12)`:"rgba(255,255,255,0.03)",J.fillRect(N,C,X,z),J.fillStyle=_.color,J.fillRect(N,C,3,z),J.fillStyle=_.color,J.font="7px JetBrains Mono",J.fillText(_.level,N+8,C+10),J.fillStyle="#c8d0d8",J.font="8px JetBrains Mono",J.fillText(_.driver,N+8,C+21),O)J.fillStyle="rgba(200,208,216,0.5)",J.font="7px JetBrains Mono",J.fillText(_.detail,N+8,C+z+10)}if(F>=2)J.strokeStyle=`rgba(255, 109, 58, ${0.15+Math.sin(Z*3)*0.1})`,J.lineWidth=2,J.shadowColor="rgba(255, 109, 58, 0.4)",J.shadowBlur=8,J.beginPath(),J.moveTo(U+6,4),J.lineTo(U+6,$-4),J.stroke(),J.shadowBlur=0;J.fillStyle="rgba(200,208,216,0.3)",J.font="9px JetBrains Mono",J.fillText("hover risks",N,$-4)},PX={gluco:VX,zerisk:CX,mobileqa:AX,tumor:LX,trading:BX,gym:zX,afib:IX,gene:_X},vK=new WeakMap;function bK(J){let Q=vK.get(J);if(!Q)Q={mouseX:-1,mouseY:-1,mouseDown:!1,clicked:!1,clickX:0,clickY:0,custom:{}},vK.set(J,Q);return Q}function hK(J){let Q=bK(J);J.addEventListener("mousemove",($)=>{let Z=J.getBoundingClientRect();Q.mouseX=$.clientX-Z.left,Q.mouseY=$.clientY-Z.top}),J.addEventListener("mouseleave",()=>{Q.mouseX=-1,Q.mouseY=-1,Q.mouseDown=!1}),J.addEventListener("mousedown",($)=>{Q.mouseDown=!0,$.preventDefault()}),J.addEventListener("mouseup",()=>{Q.mouseDown=!1}),window.addEventListener("mouseup",()=>{Q.mouseDown=!1}),J.addEventListener("click",($)=>{let Z=J.getBoundingClientRect();Q.clicked=!0,Q.clickX=$.clientX-Z.left,Q.clickY=$.clientY-Z.top,$.stopPropagation()})}function gK(J,Q,$,Z){let K=PX[Q];if(!K)return;let U=window.devicePixelRatio||1,W=J.clientWidth,H=J.clientHeight;if(W<=0||H<=0)return;let G=Math.ceil(W*U),Y=Math.ceil(H*U);if(J.width!==G||J.height!==Y)J.width=G,J.height=Y;let E=bK(J),N=J.getContext("2d");N.clearRect(0,0,G,Y),N.save(),N.scale(U,U),K(N,W,H,$,E),E.clicked=!1,N.restore()}var c8="TENZIN DHONYOE",xK="Biomedical Engineering · GlucoSolutions · Toronto",s7="I'm a final-year Biomedical Engineering student at Toronto Metropolitan University and Co-Founder of GlucoSolutions, where we're building personalized tools for pre-diabetes management. I spend most of my time at the intersection of healthcare and AI, from tumor detection prototypes to cardiac arrhythmia classification, gene sequence analysis to computer vision for fitness tracking. The work that excites me most is the kind that bridges a real gap: taking a signal from the body, running it through something smart, and turning it into something a patient or clinician can actually use. I believe the best software disappears into the problem it solves. Right now I'm focused on making glucose monitoring more accessible and actionable, so that people at risk of diabetes can intervene before it's too late. When I'm not writing code, I'm probably reading about signal processing, training ML models, or figuring out how to make biomedical data tell a clearer story.",pK=[{id:"gluco",title:"GlucoSolutions",tag:"Startup",text:"Personalized pre-diabetes management platform. Patient-facing app for glucose and metabolic health tracking, plus a dietitian dashboard for monitoring client stability. Full-stack TypeScript.",url:"https://glucosolutions.ca"},{id:"zerisk",title:"0risk.ai",tag:"AI / Surgical Tech",text:"Real-time intraoperative risk monitoring overlay for surgical teams. Surfaces situational awareness cues during knee replacement surgery without diagnoses or predictions. React + TypeScript.",url:"https://github.com/TenzinDhonyoe/0risk.ai"},{id:"mobileqa",title:"Mobile QA Engine",tag:"Dev Tools / Open Source",text:"Fully automated mobile QA tool for iOS apps. Appium-backed simulator testing with Revyl cloud device support, auto-permission config, and real-time bug fixing. Zero-dep pure HTTP client. Contributed to gstack.",url:"https://github.com/TenzinDhonyoe/gstack/tree/feat/browse-mobile"},{id:"tumor",title:"Tumor Detection",tag:"ML / Healthcare",text:"Proof-of-concept for identifying tumor-like structures through image analysis. Preprocessing, segmentation, and classification pipeline for flagging regions of interest in biomedical imagery.",url:"https://github.com/TenzinDhonyoe/Tumor-Detection-Prototype"},{id:"trading",title:"ML Trading Bot",tag:"ML / Finance",text:"Automated trading system for SPY ETF using sentiment analysis of financial news. NLP-driven signal generation combined with the Alpaca API for live trade execution.",url:"https://github.com/TenzinDhonyoe/TradingBot-Using-ML"},{id:"gym",title:"ML Gym App",tag:"Computer Vision",text:"Real-time exercise tracking using pose estimation. Analyzes body joint positions frame-by-frame to detect movement patterns and count repetitions automatically.",url:"https://github.com/TenzinDhonyoe/ML-Gym-App"},{id:"afib",title:"AFib Detection",tag:"Signal Processing",text:"SVM-based classifier for detecting atrial fibrillation from ECG signal data. Signal preprocessing, feature extraction, and classification for cardiac arrhythmia detection.",url:"https://github.com/TenzinDhonyoe/SVM_data_processing_for_atrial_fibrillation_detection"},{id:"gene",title:"Gene Sequence Analysis",tag:"Bioinformatics",text:"DNA analysis toolkit for pattern matching, gene finding, and promoter region detection. Parses FASTA files, compares sequences, and identifies biologically relevant motifs.",url:"https://github.com/TenzinDhonyoe/Gene-Sequence-Analysis"}],mK=[{label:"GitHub",url:"https://github.com/TenzinDhonyoe",icon:"github"},{label:"LinkedIn",url:"https://www.linkedin.com/in/tenzindhonyoe/",icon:"linkedin"},{label:"GlucoSolutions",url:"https://glucosolutions.ca",icon:"globe"}];var n8,X$,F$=null,H$=0,a7=-1,N$=-1,s8=!1,i7=null,c9=0,E$=[],o7="#00e676",q$="#ff6d3a",G$=["> INITIALIZING BIOSCAN...","> LOADING BIOMETRIC MODULES...",`> SUBJECT IDENTIFIED: ${c8}`,"> CALIBRATING SENSORS... DONE","> ENTERING MONITORING MODE"];function Y$(){if(document.getElementById("boot").classList.add("done"),s8=!0,i7)i7(),i7=null}function wX(){return new Promise((J)=>{if(window.matchMedia("(prefers-reduced-motion: reduce)").matches){Y$(),J();return}i7=J,setTimeout(()=>{document.getElementById("boot-skip")?.classList.add("visible")},800);let Q=()=>{document.removeEventListener("keydown",Q),document.removeEventListener("click",Q),Y$()};document.addEventListener("keydown",Q,{once:!0}),document.addEventListener("click",Q,{once:!0});let $=document.getElementById("boot-text"),Z=0,K=()=>{if(s8)return;if(Z>=G$.length){setTimeout(()=>{if(!s8)Y$()},400);return}let U=document.createElement("div");if(U.className="boot-line",U.textContent=G$[Z],Z===G$.length-1){let W=document.createElement("span");W.className="boot-cursor",U.appendChild(W)}$.appendChild(U),requestAnimationFrame(()=>U.classList.add("visible")),Z++,setTimeout(K,350+Math.random()*200)};K()})}function TX(){let J=document.getElementById("vitals"),Q=[{label:"HR",id:"v-hr",value:"72",unit:"bpm"},{label:"SpO2",id:"v-spo2",value:"98",unit:"%"},{label:"BP",id:"v-bp",value:"120/80",unit:""},{label:"RESP",id:"v-resp",value:"16",unit:"/min"}];for(let $ of Q){let Z=document.createElement("div");Z.className="vital-row",Z.innerHTML=`<span class="vital-label">${$.label}</span> <span class="vital-value" id="${$.id}">${$.value}</span><span class="vital-label">${$.unit}</span>`,J.appendChild(Z)}}function SX(){let J=document.getElementById("hero-links"),Q={github:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>',linkedin:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>',globe:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg>'};for(let $ of mK){let Z=document.createElement("a");Z.href=$.url,Z.target="_blank",Z.rel="noopener",Z.className="hero-link",Z.innerHTML=`${Q[$.icon]||""}${$.label}`,J.appendChild(Z)}}function jX(){let J=document.getElementById("project-grid");for(let Q of pK){let $=document.createElement("div");$.className="project-card",$.innerHTML=`
      <span class="scan-label">SCAN COMPLETE</span>
      <div class="card-status">
        <span class="status-dot"></span>
        <span class="card-tag">${Q.tag}</span>
      </div>
      <div class="card-title">${Q.title}</div>
      <div class="card-desc">${Q.text}</div>
      <canvas class="card-signal" data-signal="${Q.id}"></canvas>
      <a href="${Q.url}" target="_blank" rel="noopener" class="card-link">VIEW PROJECT</a>
    `,J.appendChild($)}}var dK=0;function yX(J){let Q=document.getElementById("v-hr"),$=document.getElementById("v-spo2"),Z=document.getElementById("v-bp"),K=document.getElementById("v-resp");if(!Q)return;dK++;let U=()=>Math.round((Math.random()-0.5)*2);if(Q.textContent=String(Math.round(J)),Q.style.color=J>100?q$:o7,dK%30===0){$.textContent=String(97+Math.round(Math.random()*2));let W=118+Math.round(Math.random()*8),H=78+Math.round(Math.random()*6);Z.textContent=`${W}/${H}`,K.textContent=String(15+U())}}function fX(){if(a7<0)return 72;let Q=document.getElementById("hero").getBoundingClientRect(),$=Q.left+Q.width/2,Z=Q.top+Q.height/2,K=Math.sqrt((a7-$)**2+(N$-Z)**2),U=Math.sqrt(Q.width**2+Q.height**2)/2;return 72+(1-Math.min(1,K/U))*68}function vX(J){if(!s8)return;if(!c9)c9=J;let Q=J-c9,$=Math.min(s7.length,Math.floor(Q/1000*120)),Z=document.getElementById("bio-text"),K=document.getElementById("bio-cursor");Z.textContent=s7.substring(0,$),K.style.display=$<s7.length?"inline-block":"none"}var uK=!1;function bX(J){if(!s8)return;if(!c9)c9=J;let Q=J-c9,$=Math.min(c8.length,Math.floor(Q/1000*60)),Z=document.getElementById("hero-title");if(Z.textContent=c8.substring(0,$),$>=c8.length&&!uK)uK=!0,document.getElementById("hero-subtitle").textContent=xK,document.getElementById("hero-subtitle").classList.add("visible")}function hX(J,Q){let $=document.getElementById("shock");$.classList.remove("active"),$.offsetWidth,$.style.setProperty("--sx",`${J}px`),$.style.setProperty("--sy",`${Q}px`),$.classList.add("active"),_$(n8),$.addEventListener("animationend",()=>$.classList.remove("active"),{once:!0})}function cK(J){let Q=H$?(J-H$)/1000:0;H$=J;let $=fX();J6(n8,$),J6(X$,$),yX(n8.bpm),Q6(n8,Q,o7,q$),Q6(X$,Q,o7,q$),yK(F$,J),bX(J),vX(J);let Z=J/1000;for(let K of E$){let U=K.dataset.signal;if(U)gK(K,U,Z,o7)}requestAnimationFrame(cK)}function gX(){document.addEventListener("mousemove",(J)=>{a7=J.clientX,N$=J.clientY}),window.addEventListener("blur",()=>{a7=-1,N$=-1}),document.getElementById("hero-canvas").addEventListener("click",(J)=>{hX(J.clientX,J.clientY)}),window.addEventListener("scroll",()=>{fK(F$,window.scrollY);let J=document.getElementById("scroll-indicator");if(J&&window.scrollY>50)J.style.opacity="0",J.style.transition="opacity 0.3s ease"})}async function lK(){TX(),SX(),jX(),E$=Array.from(document.querySelectorAll(".card-signal"));for(let J of E$)hK(J);n8=e7(document.getElementById("hero-canvas"),42),X$=e7(document.getElementById("strip-canvas"),42),F$=jK(document.getElementById("dna-canvas")),gX(),await document.fonts.ready,await wX(),c9=performance.now(),requestAnimationFrame(cK)}if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",()=>lK());else lK();

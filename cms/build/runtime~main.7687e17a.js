(()=>{"use strict";var h={},g={};function f(e){var b=g[e];if(b!==void 0)return b.exports;var a=g[e]={id:e,loaded:!1,exports:{}};return h[e].call(a.exports,a,a.exports,f),a.loaded=!0,a.exports}f.m=h,(()=>{var e=[];f.O=(b,a,d,r)=>{if(a){r=r||0;for(var t=e.length;t>0&&e[t-1][2]>r;t--)e[t]=e[t-1];e[t]=[a,d,r];return}for(var c=1/0,t=0;t<e.length;t++){for(var[a,d,r]=e[t],s=!0,n=0;n<a.length;n++)(r&!1||c>=r)&&Object.keys(f.O).every(p=>f.O[p](a[n]))?a.splice(n--,1):(s=!1,r<c&&(c=r));if(s){e.splice(t--,1);var o=d();o!==void 0&&(b=o)}}return b}})(),f.n=e=>{var b=e&&e.__esModule?()=>e.default:()=>e;return f.d(b,{a:b}),b},(()=>{var e=Object.getPrototypeOf?a=>Object.getPrototypeOf(a):a=>a.__proto__,b;f.t=function(a,d){if(d&1&&(a=this(a)),d&8||typeof a=="object"&&a&&(d&4&&a.__esModule||d&16&&typeof a.then=="function"))return a;var r=Object.create(null);f.r(r);var t={};b=b||[null,e({}),e([]),e(e)];for(var c=d&2&&a;typeof c=="object"&&!~b.indexOf(c);c=e(c))Object.getOwnPropertyNames(c).forEach(s=>t[s]=()=>a[s]);return t.default=()=>a,f.d(r,t),r}})(),f.d=(e,b)=>{for(var a in b)f.o(b,a)&&!f.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:b[a]})},f.f={},f.e=e=>Promise.all(Object.keys(f.f).reduce((b,a)=>(f.f[a](e,b),b),[])),f.u=e=>""+e+"."+{157:"9844a5ea",159:"ccdce9cb",277:"8b300a2a",286:"336fc715",352:"90ceb40d",417:"0e2c553b",431:"f3df4ecd",474:"e5d69fb9",545:"195c035e",559:"b46a0f43",678:"c73fc39e",843:"e94f4124",870:"35858863",995:"0966f9a4",1005:"5851ad9a",1021:"42e24c15",1041:"7fed7bdb",1047:"541b332b",1067:"02879d18",1089:"ceff261f",1139:"9bf415c8",1189:"6aa426d0",1226:"2bc87554",1289:"e9cae1ce",1540:"d7ca996d",1547:"c7b9c19e",1556:"eee795c2",1636:"24d98e60",1712:"4134cda0",1833:"70d9d770",1834:"9d83e513",1840:"f20be5ca",1888:"4c29d129",1921:"f303a70a",1943:"ab92eb62",1957:"170d854d",2008:"3fe50e72",2037:"7377cde1",2227:"46a12e1f",2301:"470fc807",2306:"2f24a74b",2345:"244a0392",2389:"eadd09a8",2431:"6b5a40b1",2445:"6f450de1",2538:"4d38e628",2540:"382c0e10",2585:"c2b86402",2613:"867f0734",2687:"520af8a4",2709:"1c8167d0",2752:"3e4ee093",2772:"2642efcd",2782:"750257f2",2884:"cf88f91f",2927:"f7824841",2947:"3195fae8",3042:"72070334",3106:"a6bd5baa",3200:"8b27510e",3265:"40623614",3277:"a3213839",3282:"a5aedb51",3288:"5d71b0ac",3379:"737693b7",3471:"4070da17",3512:"6b0c4450",3544:"9d4190db",3667:"f72f9182",3775:"1b18565f",3801:"66202ee6",3829:"cbe8f9bb",3882:"23dc3678",3938:"b411be56",3985:"866eed53",4011:"919e018c",4014:"7de400c9",4041:"99a61d95",4110:"6363e79a",4141:"a4d64b0f",4207:"02df4607",4243:"eebec3af",4259:"db439a57",4306:"25e7713e",4338:"ca4075e3",4342:"79d9d062",4347:"21530baa",4384:"0227fe95",4407:"06cfbb4d",4475:"7689afb2",4495:"0dd01ac0",4513:"606f84b4",4550:"e49fd910",4675:"af00f80d",4678:"edfd5526",4799:"3b9a4d05",4857:"ab89e893",4878:"395cc36d",4911:"2d357dcf",4972:"dd23d385",4998:"6d776ddb",5029:"b3ffbe3b",5030:"ab77d7b0",5090:"6816e891",5097:"ea8c965f",5174:"eb139a19",5199:"c6f9684e",5275:"5497ab99",5411:"5a1ed9db",5445:"a4fc54b9",5465:"a09611bf",5480:"553344f0",5494:"0a9eefe8",5506:"c953ec23",5517:"70b07008",5533:"2387b82f",5608:"64dae56a",5707:"2b2a0120",5736:"dc43558a",5853:"ff707e85",5874:"8341a151",5904:"e892eefb",6079:"87d20c36",6085:"40b4144d",6103:"a4afcf30",6126:"788d3c61",6309:"606de336",6323:"abc4d3d4",6349:"c1b1c1bd",6354:"43ed6025",6460:"ff10847d",6488:"59d62673",6511:"dbffe2f8",6539:"e114c4da",6582:"bbcb0630",6587:"8d33240c",6588:"8a2f3f05",6624:"74f5de1c",6704:"f4ac5aa2",6744:"f92698d4",6876:"a3c5ac96",6888:"5d6e4973",7015:"ea373a02",7171:"bc33e988",7186:"fec65d8f",7225:"b8904ee6",7311:"1bdad4ac",7320:"a8430e11",7396:"1cbbef1e",7407:"38039775",7410:"a2478b01",7412:"14ec1553",7534:"abd1996c",7539:"7b48af42",7542:"b9b99fe8",7550:"abff2973",7570:"2ef88080",7665:"9e967c80",7690:"4d5a683c",7702:"71a4fbc0",7750:"c28f79d3",7808:"1a6d528f",7838:"c3d47704",7904:"6e9c280f",7970:"f68677e4",7977:"088c41ec",7983:"4869320c",8055:"58aeeea8",8227:"2d72b2b4",8267:"fd0f52a5",8283:"aae75cb4",8366:"a8ea816c",8441:"fc84002b",8548:"469a366e",8597:"d2495fbc",8657:"a083584f",8679:"0df9dad7",8705:"99936c27",8734:"db81df6e",8739:"0333801e",8786:"8226891c",8848:"a4eed5b9",9015:"c12a13b1",9055:"8fa9bbd3",9095:"fab41aac",9127:"49bf774c",9133:"dc3d248a",9454:"cd3dccac",9473:"cb566ff4",9483:"af0b07a7",9496:"c770a610",9509:"120110eb",9589:"7d9133f5",9628:"61a69fb2",9633:"b9b22b77",9732:"2fc87f95",9781:"2f5a7701",9785:"ebe7a130",9881:"cc8be0d9",9916:"4981a646",9953:"02aaa124",9958:"ab5206c7",9966:"6d06742b",9969:"3213201a",9971:"350ebb32"}[e]+".chunk.js",f.miniCssF=e=>{},f.g=function(){if(typeof globalThis=="object")return globalThis;try{return this||new Function("return this")()}catch{if(typeof window=="object")return window}}(),f.o=(e,b)=>Object.prototype.hasOwnProperty.call(e,b),(()=>{var e={},b="swasthmind:";f.l=(a,d,r,t)=>{if(e[a]){e[a].push(d);return}var c,s;if(r!==void 0)for(var n=document.getElementsByTagName("script"),o=0;o<n.length;o++){var i=n[o];if(i.getAttribute("src")==a||i.getAttribute("data-webpack")==b+r){c=i;break}}c||(s=!0,c=document.createElement("script"),c.charset="utf-8",c.timeout=120,f.nc&&c.setAttribute("nonce",f.nc),c.setAttribute("data-webpack",b+r),c.src=a),e[a]=[d];var l=(v,p)=>{c.onerror=c.onload=null,clearTimeout(u);var _=e[a];if(delete e[a],c.parentNode&&c.parentNode.removeChild(c),_&&_.forEach(m=>m(p)),v)return v(p)},u=setTimeout(l.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=l.bind(null,c.onerror),c.onload=l.bind(null,c.onload),s&&document.head.appendChild(c)}})(),f.r=e=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},f.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),f.p="/admin/",(()=>{f.b=document.baseURI||self.location.href;var e={5354:0};f.f.j=(d,r)=>{var t=f.o(e,d)?e[d]:void 0;if(t!==0)if(t)r.push(t[2]);else if(d!=5354){var c=new Promise((i,l)=>t=e[d]=[i,l]);r.push(t[2]=c);var s=f.p+f.u(d),n=new Error,o=i=>{if(f.o(e,d)&&(t=e[d],t!==0&&(e[d]=void 0),t)){var l=i&&(i.type==="load"?"missing":i.type),u=i&&i.target&&i.target.src;n.message="Loading chunk "+d+` failed.
(`+l+": "+u+")",n.name="ChunkLoadError",n.type=l,n.request=u,t[1](n)}};f.l(s,o,"chunk-"+d,d)}else e[d]=0},f.O.j=d=>e[d]===0;var b=(d,r)=>{var[t,c,s]=r,n,o,i=0;if(t.some(u=>e[u]!==0)){for(n in c)f.o(c,n)&&(f.m[n]=c[n]);if(s)var l=s(f)}for(d&&d(r);i<t.length;i++)o=t[i],f.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return f.O(l)},a=self.webpackChunkswasthmind=self.webpackChunkswasthmind||[];a.forEach(b.bind(null,0)),a.push=b.bind(null,a.push.bind(a))})(),f.nc=void 0})();
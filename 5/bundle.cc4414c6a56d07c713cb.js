(()=>{var e={10:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});var s=n(537),i=n.n(s),r=n(645),a=n.n(r)()(i());a.push([e.id,".shake {\n  animation: shake 0.6s;\n  position: relative;\n  z-index: 10;\n}\n\n@keyframes shake {\n  0%,\n  100% {\n    transform: translateX(0);\n  }\n\n  10%,\n  30%,\n  50%,\n  70%,\n  90% {\n    transform: translateX(-5px);\n  }\n\n  20%,\n  40%,\n  60%,\n  80% {\n    transform: translateX(5px);\n  }\n}\n","",{version:3,sources:["webpack://./src/framework/view/abstract-view.css"],names:[],mappings:"AAAA;EACE,qBAAqB;EACrB,kBAAkB;EAClB,WAAW;AACb;;AAEA;EACE;;IAEE,wBAAwB;EAC1B;;EAEA;;;;;IAKE,2BAA2B;EAC7B;;EAEA;;;;IAIE,0BAA0B;EAC5B;AACF",sourcesContent:[".shake {\n  animation: shake 0.6s;\n  position: relative;\n  z-index: 10;\n}\n\n@keyframes shake {\n  0%,\n  100% {\n    transform: translateX(0);\n  }\n\n  10%,\n  30%,\n  50%,\n  70%,\n  90% {\n    transform: translateX(-5px);\n  }\n\n  20%,\n  40%,\n  60%,\n  80% {\n    transform: translateX(5px);\n  }\n}\n"],sourceRoot:""}]);const o=a},645:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",s=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),s&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),s&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,s,i,r){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(s)for(var o=0;o<this.length;o++){var l=this[o][0];null!=l&&(a[l]=!0)}for(var c=0;c<e.length;c++){var u=[].concat(e[c]);s&&a[u[0]]||(void 0!==r&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=r),n&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=n):u[2]=n),i&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=i):u[4]="".concat(i)),t.push(u))}},t}},537:e=>{"use strict";e.exports=function(e){var t=e[1],n=e[3];if(!n)return t;if("function"==typeof btoa){var s=btoa(unescape(encodeURIComponent(JSON.stringify(n)))),i="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),r="/*# ".concat(i," */");return[t].concat([r]).join("\n")}return[t].join("\n")}},484:function(e){e.exports=function(){"use strict";var e=6e4,t=36e5,n="millisecond",s="second",i="minute",r="hour",a="day",o="week",l="month",c="quarter",u="year",d="date",p="Invalid Date",f=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,v=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,h={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],n=e%100;return"["+e+(t[(n-20)%10]||t[n]||t[0])+"]"}},m=function(e,t,n){var s=String(e);return!s||s.length>=t?e:""+Array(t+1-s.length).join(n)+e},_={s:m,z:function(e){var t=-e.utcOffset(),n=Math.abs(t),s=Math.floor(n/60),i=n%60;return(t<=0?"+":"-")+m(s,2,"0")+":"+m(i,2,"0")},m:function e(t,n){if(t.date()<n.date())return-e(n,t);var s=12*(n.year()-t.year())+(n.month()-t.month()),i=t.clone().add(s,l),r=n-i<0,a=t.clone().add(s+(r?-1:1),l);return+(-(s+(n-i)/(r?i-a:a-i))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:l,y:u,w:o,d:a,D:d,h:r,m:i,s,ms:n,Q:c}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},y="en",b={};b[y]=h;var $="$isDayjsObject",w=function(e){return e instanceof E||!(!e||!e[$])},g=function e(t,n,s){var i;if(!t)return y;if("string"==typeof t){var r=t.toLowerCase();b[r]&&(i=r),n&&(b[r]=n,i=r);var a=t.split("-");if(!i&&a.length>1)return e(a[0])}else{var o=t.name;b[o]=t,i=o}return!s&&i&&(y=i),i||!s&&y},M=function(e,t){if(w(e))return e.clone();var n="object"==typeof t?t:{};return n.date=e,n.args=arguments,new E(n)},C=_;C.l=g,C.i=w,C.w=function(e,t){return M(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var E=function(){function h(e){this.$L=g(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[$]=!0}var m=h.prototype;return m.parse=function(e){this.$d=function(e){var t=e.date,n=e.utc;if(null===t)return new Date(NaN);if(C.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var s=t.match(f);if(s){var i=s[2]-1||0,r=(s[7]||"0").substring(0,3);return n?new Date(Date.UTC(s[1],i,s[3]||1,s[4]||0,s[5]||0,s[6]||0,r)):new Date(s[1],i,s[3]||1,s[4]||0,s[5]||0,s[6]||0,r)}}return new Date(t)}(e),this.init()},m.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},m.$utils=function(){return C},m.isValid=function(){return!(this.$d.toString()===p)},m.isSame=function(e,t){var n=M(e);return this.startOf(t)<=n&&n<=this.endOf(t)},m.isAfter=function(e,t){return M(e)<this.startOf(t)},m.isBefore=function(e,t){return this.endOf(t)<M(e)},m.$g=function(e,t,n){return C.u(e)?this[t]:this.set(n,e)},m.unix=function(){return Math.floor(this.valueOf()/1e3)},m.valueOf=function(){return this.$d.getTime()},m.startOf=function(e,t){var n=this,c=!!C.u(t)||t,p=C.p(e),f=function(e,t){var s=C.w(n.$u?Date.UTC(n.$y,t,e):new Date(n.$y,t,e),n);return c?s:s.endOf(a)},v=function(e,t){return C.w(n.toDate()[e].apply(n.toDate("s"),(c?[0,0,0,0]:[23,59,59,999]).slice(t)),n)},h=this.$W,m=this.$M,_=this.$D,y="set"+(this.$u?"UTC":"");switch(p){case u:return c?f(1,0):f(31,11);case l:return c?f(1,m):f(0,m+1);case o:var b=this.$locale().weekStart||0,$=(h<b?h+7:h)-b;return f(c?_-$:_+(6-$),m);case a:case d:return v(y+"Hours",0);case r:return v(y+"Minutes",1);case i:return v(y+"Seconds",2);case s:return v(y+"Milliseconds",3);default:return this.clone()}},m.endOf=function(e){return this.startOf(e,!1)},m.$set=function(e,t){var o,c=C.p(e),p="set"+(this.$u?"UTC":""),f=(o={},o[a]=p+"Date",o[d]=p+"Date",o[l]=p+"Month",o[u]=p+"FullYear",o[r]=p+"Hours",o[i]=p+"Minutes",o[s]=p+"Seconds",o[n]=p+"Milliseconds",o)[c],v=c===a?this.$D+(t-this.$W):t;if(c===l||c===u){var h=this.clone().set(d,1);h.$d[f](v),h.init(),this.$d=h.set(d,Math.min(this.$D,h.daysInMonth())).$d}else f&&this.$d[f](v);return this.init(),this},m.set=function(e,t){return this.clone().$set(e,t)},m.get=function(e){return this[C.p(e)]()},m.add=function(n,c){var d,p=this;n=Number(n);var f=C.p(c),v=function(e){var t=M(p);return C.w(t.date(t.date()+Math.round(e*n)),p)};if(f===l)return this.set(l,this.$M+n);if(f===u)return this.set(u,this.$y+n);if(f===a)return v(1);if(f===o)return v(7);var h=(d={},d[i]=e,d[r]=t,d[s]=1e3,d)[f]||1,m=this.$d.getTime()+n*h;return C.w(m,this)},m.subtract=function(e,t){return this.add(-1*e,t)},m.format=function(e){var t=this,n=this.$locale();if(!this.isValid())return n.invalidDate||p;var s=e||"YYYY-MM-DDTHH:mm:ssZ",i=C.z(this),r=this.$H,a=this.$m,o=this.$M,l=n.weekdays,c=n.months,u=n.meridiem,d=function(e,n,i,r){return e&&(e[n]||e(t,s))||i[n].slice(0,r)},f=function(e){return C.s(r%12||12,e,"0")},h=u||function(e,t,n){var s=e<12?"AM":"PM";return n?s.toLowerCase():s};return s.replace(v,(function(e,s){return s||function(e){switch(e){case"YY":return String(t.$y).slice(-2);case"YYYY":return C.s(t.$y,4,"0");case"M":return o+1;case"MM":return C.s(o+1,2,"0");case"MMM":return d(n.monthsShort,o,c,3);case"MMMM":return d(c,o);case"D":return t.$D;case"DD":return C.s(t.$D,2,"0");case"d":return String(t.$W);case"dd":return d(n.weekdaysMin,t.$W,l,2);case"ddd":return d(n.weekdaysShort,t.$W,l,3);case"dddd":return l[t.$W];case"H":return String(r);case"HH":return C.s(r,2,"0");case"h":return f(1);case"hh":return f(2);case"a":return h(r,a,!0);case"A":return h(r,a,!1);case"m":return String(a);case"mm":return C.s(a,2,"0");case"s":return String(t.$s);case"ss":return C.s(t.$s,2,"0");case"SSS":return C.s(t.$ms,3,"0");case"Z":return i}return null}(e)||i.replace(":","")}))},m.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},m.diff=function(n,d,p){var f,v=this,h=C.p(d),m=M(n),_=(m.utcOffset()-this.utcOffset())*e,y=this-m,b=function(){return C.m(v,m)};switch(h){case u:f=b()/12;break;case l:f=b();break;case c:f=b()/3;break;case o:f=(y-_)/6048e5;break;case a:f=(y-_)/864e5;break;case r:f=y/t;break;case i:f=y/e;break;case s:f=y/1e3;break;default:f=y}return p?f:C.a(f)},m.daysInMonth=function(){return this.endOf(l).$D},m.$locale=function(){return b[this.$L]},m.locale=function(e,t){if(!e)return this.$L;var n=this.clone(),s=g(e,t,!0);return s&&(n.$L=s),n},m.clone=function(){return C.w(this.$d,this)},m.toDate=function(){return new Date(this.valueOf())},m.toJSON=function(){return this.isValid()?this.toISOString():null},m.toISOString=function(){return this.$d.toISOString()},m.toString=function(){return this.$d.toUTCString()},h}(),x=E.prototype;return M.prototype=x,[["$ms",n],["$s",s],["$m",i],["$H",r],["$W",a],["$M",l],["$y",u],["$D",d]].forEach((function(e){x[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),M.extend=function(e,t){return e.$i||(e(t,E,M),e.$i=!0),M},M.locale=g,M.isDayjs=w,M.unix=function(e){return M(1e3*e)},M.en=b[y],M.Ls=b,M.p={},M}()},379:e=>{"use strict";var t=[];function n(e){for(var n=-1,s=0;s<t.length;s++)if(t[s].identifier===e){n=s;break}return n}function s(e,s){for(var r={},a=[],o=0;o<e.length;o++){var l=e[o],c=s.base?l[0]+s.base:l[0],u=r[c]||0,d="".concat(c," ").concat(u);r[c]=u+1;var p=n(d),f={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==p)t[p].references++,t[p].updater(f);else{var v=i(f,s);s.byIndex=o,t.splice(o,0,{identifier:d,updater:v,references:1})}a.push(d)}return a}function i(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,i){var r=s(e=e||[],i=i||{});return function(e){e=e||[];for(var a=0;a<r.length;a++){var o=n(r[a]);t[o].references--}for(var l=s(e,i),c=0;c<r.length;c++){var u=n(r[c]);0===t[u].references&&(t[u].updater(),t.splice(u,1))}r=l}}},569:e=>{"use strict";var t={};e.exports=function(e,n){var s=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!s)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");s.appendChild(n)}},216:e=>{"use strict";e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{"use strict";e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{"use strict";e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var s="";n.supports&&(s+="@supports (".concat(n.supports,") {")),n.media&&(s+="@media ".concat(n.media," {"));var i=void 0!==n.layer;i&&(s+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),s+=n.css,i&&(s+="}"),n.media&&(s+="}"),n.supports&&(s+="}");var r=n.sourceMap;r&&"undefined"!=typeof btoa&&(s+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),t.styleTagTransform(s,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{"use strict";e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(s){var i=t[s];if(void 0!==i)return i.exports;var r=t[s]={id:s,exports:{}};return e[s].call(r.exports,r,r.exports,n),r.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var s in t)n.o(t,s)&&!n.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{"use strict";var e=n(484),t=n.n(e);const s="DD/MM/YY HH:mm",i="YYYY-MM-DD",r="HH:mm",a=(e,n)=>e?t()(e).format(n):"",o=e=>e.charAt(0).toUpperCase()+e.slice(1),l=[{id:"f4b62099-293f-4c3d-a702-94eec4a2808c",base_price:1100,date_from:"2024-06-01T14:30:56.845Z",date_to:"2024-06-11T00:00:13.375Z",destination:"bfa5cb75-a1fe-4b77-a83c-0e528e910e04",is_favorite:!1,offers:["b4c3e4e6-9053-42ce-b747-e281314baa31"],type:"taxi"},{id:"f4b62099-293f-4c3d-a702-94eec4a2808c",base_price:100,date_from:"2019-07-10T09:55:56.845Z",date_to:"2019-07-11T12:22:13.375Z",destination:"bfa5cb22-a1fe-4b77-a83c-0e528e910e04",is_favorite:!1,offers:["b4c3e4e6-9053-42ce-b747-e281314baa31"],type:"bus"},{id:"f4b62099-293f-4c3d-a702-94eec4a2808c",base_price:500,date_from:"2019-12-02T10:01:56.845Z",date_to:"2019-12-11T11:20:13.375Z",destination:"bfa5cb75-a1fe-4b77-a11c-0e528e910e04",is_favorite:!0,offers:["b4c3e4e6-9053-42ce-b747-e281314baa31"],type:"flight"}].map((e=>(e=>{for(const n of Object.keys(e))n.includes("_")&&(e[(t=n,t.toLowerCase().replace(/([-_][a-z])/g,(e=>e.toUpperCase().replace("-","").replace("_",""))))]=e[n],delete e[n]);var t;return e})(e))),c=()=>{return(e=l)[Math.floor(Math.random()*e.length)];var e},u=["Taxi","Bus","Train","Ship","Drive","Flight","Check-in","Sightseeing","Restaurant"],d=["Amsterdam","Chamonix","Geneva","Moscow"],p="https://loremflickr.com/248/152?random=",f="everything",v="future",h="present",m="past",_=[{id:"bfa5cb75-a1fe-4b77-a83c-0e528e910e04",description:"Chamonix, is a beautiful city, a true asian pearl, with crowded streets.",name:"Chamonix",pictures:[{src:`${p}1`,description:"Chamonix parliament building"},{src:`${p}2`,description:"Chamonix parliament building"}]},{id:"bfa5cb22-a1fe-4b77-a83c-0e528e910e04",description:"Paris, is a beautiful city, a true asian pearl, with crowded streets.",name:"Paris",pictures:[{src:`${p}3`,description:"Chamonix parliament building"}]},{id:"bfa5cb75-a1fe-4b77-a11c-0e528e910e04",description:"Moscow, is a beautiful city, a true asian pearl, with crowded streets.",name:"Moscow",pictures:[]}],y=[{type:"taxi",offers:[{id:"b4c3e4e6-9053-42ce-b747-e281314baa31",title:"Upgrade to a business class",price:120},{id:"b4c3e4e6-9053-42ce-b747-e281314baa31",title:"Child seat",price:10},{id:"b4c3e4e6-9053-42ce-b747-e281314baa21",title:"Dogs",price:300}]},{type:"bus",offers:[{id:"b4c3e4e6-9053-42ce-b747-e281314baa31",title:"Window seat",price:100}]},{type:"flight",offers:[]}];var b=n(379),$=n.n(b),w=n(795),g=n.n(w),M=n(569),C=n.n(M),E=n(565),x=n.n(E),A=n(216),S=n.n(A),D=n(589),k=n.n(D),T=n(10),O={};O.styleTagTransform=k(),O.setAttributes=x(),O.insert=C().bind(null,"head"),O.domAPI=g(),O.insertStyleElement=S(),$()(T.Z,O),T.Z&&T.Z.locals&&T.Z.locals;const L="shake";class F{#e=null;constructor(){if(new.target===F)throw new Error("Can't instantiate AbstractView, only concrete one.")}get element(){return this.#e||(this.#e=function(e){const t=document.createElement("div");return t.innerHTML=e,t.firstElementChild}(this.template)),this.#e}get template(){throw new Error("Abstract method not implemented: get template")}removeElement(){this.#e=null}shake(e){this.element.classList.add(L),setTimeout((()=>{this.element.classList.remove(L),e?.()}),600)}}function H(e,t,n="beforeend"){if(!(e instanceof F))throw new Error("Can render only components");if(null===t)throw new Error("Container element doesn't exist");t.insertAdjacentElement(n,e.element)}function j(e,t){if(!(e instanceof F&&t instanceof F))throw new Error("Can replace only components");const n=e.element,s=t.element,i=s.parentElement;if(null===i)throw new Error("Parent element doesn't exist");i.replaceChild(n,s)}class B extends F{get template(){return'<form class="trip-events__trip-sort  trip-sort" action="#" method="get">\n            <div class="trip-sort__item  trip-sort__item--day">\n              <input id="sort-day" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-day">\n              <label class="trip-sort__btn" for="sort-day">Day</label>\n            </div>\n\n            <div class="trip-sort__item  trip-sort__item--event">\n              <input id="sort-event" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-event" disabled>\n              <label class="trip-sort__btn" for="sort-event">Event</label>\n            </div>\n\n            <div class="trip-sort__item  trip-sort__item--time">\n              <input id="sort-time" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-time">\n              <label class="trip-sort__btn" for="sort-time">Time</label>\n            </div>\n\n            <div class="trip-sort__item  trip-sort__item--price">\n              <input id="sort-price" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-price" checked>\n              <label class="trip-sort__btn" for="sort-price">Price</label>\n            </div>\n\n            <div class="trip-sort__item  trip-sort__item--offer">\n              <input id="sort-offer" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-offer" disabled>\n              <label class="trip-sort__btn" for="sort-offer">Offers</label>\n            </div>\n          </form>'}}class Y extends F{#t=null;constructor(e){super(),this.#t=e}get template(){return function(e){const t=e.map(((e,t)=>function(e){const{type:t}=e;return`<div class="trip-filters__filter">\n                  <input id="filter-${t}" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="${t}">\n                  <label class="trip-filters__filter-label" for="filter-${t}">${o(t)}</label>\n                </div>`}(e))).join("");return`<form class="trip-filters" action="#" method="get">\n                ${t}\n                <button class="visually-hidden" type="submit">Accept filter</button>\n              </form>`}(this.#t)}}class I extends F{#n=null;#s=null;#i=null;#r=null;constructor({waypoint:e,destinations:t,offers:n,onEditClick:s}){super(),this.#n=e,this.#s=t,this.#i=n,this.#r=s,this.element.querySelector(".event__rollup-btn").addEventListener("click",this.#a)}get template(){return function(e,n,s){const{basePrice:o,dateFrom:l,dateTo:c,destination:u,type:d,isFavorite:p}=e,f=n.find((e=>e.id===u)),{name:v}=f,h=s.find((e=>e.type===d)).offers.filter((t=>e.offers.includes(t.id))),m=0===h.length?"":h.map((e=>`<li class="event__offer">\n                    <span class="event__offer-title">${e.title}</span>\n                    &plus;&euro;&nbsp;\n                    <span class="event__offer-price">${e.price}</span>\n                  </li>`)).join(""),_=a(l,i),y=a(c,i),b=a(l,"MMM DD").toUpperCase(),$=a(l,r),w=a(c,r),g=(C=c,(M=l)&&C?t()(C).diff(t()(M),"d"):"");var M,C;return`<li class="trip-events__item">\n              <div class="event">\n                <time class="event__date" datetime="${_}">${b}</time>\n                <div class="event__type">\n                  <img class="event__type-icon" width="42" height="42" src="img/icons/${d}.png" alt="Event type icon">\n                </div>\n                <h3 class="event__title">${d} ${v}</h3>\n                <div class="event__schedule">\n                  <p class="event__time">\n                    <time class="event__start-time" datetime="${_}T${$}">${$}</time>\n                    &mdash;\n                    <time class="event__end-time" datetime="${y}T${w}">${w}</time>\n                  </p>\n                  <p class="event__duration">${g}D</p>\n                </div>\n                <p class="event__price">\n                  &euro;&nbsp;<span class="event__price-value">${o}</span>\n                </p>\n                <h4 class="visually-hidden">Offers:</h4>\n                <ul class="event__selected-offers">\n                  ${m}\n                </ul>\n                <button class="event__favorite-btn ${p?"event__favorite-btn--active":""}" type="button">\n                  <span class="visually-hidden">Add to favorite</span>\n                  <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">\n                    <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"/>\n                  </svg>\n                </button>\n                <button class="event__rollup-btn" type="button">\n                  <span class="visually-hidden">Open event</span>\n                </button>\n              </div>\n            </li>`}(this.#n,this.#s,this.#i)}#a=e=>{e.preventDefault(),this.#r()}}class P extends F{#n=null;#s=null;#i=null;#o=null;constructor({waypoint:e,destinations:t,offers:n,onFormSubmit:s}){super(),this.#n=e,this.#s=t,this.#i=n,this.#o=s,this.element.querySelector("form").addEventListener("submit",this.#l)}get template(){return function(e,t,n){const{basePrice:i,dateFrom:r,dateTo:l,destination:c,type:p}=e,f=t.find((e=>e.id===c)),{description:v}=f,h=n.find((e=>e.type===p)).offers.filter((t=>e.offers.includes(t.id))),m=u.map((e=>`<div class="event__type-item">\n                          <input id="event-type-${e.toLowerCase()}-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="${e.toLowerCase()}">\n                          <label class="event__type-label  event__type-label--${e.toLowerCase()}" for="event-type-${e.toLowerCase()}-1">${e}</label>\n                        </div>`)).join(""),_=d.map((e=>`<option value="${e}"></option>`)).join(""),y=0===h.length?"":`<section class="event__section  event__section--offers">\n                    <h3 class="event__section-title  event__section-title--offers">Offers</h3>\n                    <div class="event__available-offers">\n                      ${h.map((e=>`<div class="event__offer-selector">\n                        <input class="event__offer-checkbox  visually-hidden" id="event-offer-${e.type}-1" type="checkbox" name="event-offer-${e.type}" checked>\n                        <label class="event__offer-label" for="event-offer-${e.type}-1">\n                          <span class="event__offer-title">${e.title}</span>\n                          &plus;&euro;&nbsp;\n                          <span class="event__offer-price">${e.price}</span>\n                        </label>\n                      </div>`)).join("")}\n                    </div>\n                  </section>`,b=a(r,s),$=a(l,s);return`            <li class="trip-events__item">\n              <form class="event event--edit" action="#" method="post">\n                <header class="event__header">\n                  <div class="event__type-wrapper">\n                    <label class="event__type  event__type-btn" for="event-type-toggle-1">\n                      <span class="visually-hidden">Choose event type</span>\n                      <img class="event__type-icon" width="17" height="17" src="img/icons/${p}.png" alt="Event type icon">\n                    </label>\n                    <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">\n\n                    <div class="event__type-list">\n                      <fieldset class="event__type-group">\n                        <legend class="visually-hidden">Event type</legend>\n                        ${m}\n                      </fieldset>\n                    </div>\n                  </div>\n\n                  <div class="event__field-group  event__field-group--destination">\n                    <label class="event__label  event__type-output" for="event-destination-1">\n                      ${o(p)}\n                    </label>\n                    <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value="${f.name}" list="destination-list-1">\n                    <datalist id="destination-list-1">\n                      ${_}\n                    </datalist>\n                  </div>\n\n                  <div class="event__field-group  event__field-group--time">\n                    <label class="visually-hidden" for="event-start-time-1">From</label>\n                    <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="${b}">\n                    &mdash;\n                    <label class="visually-hidden" for="event-end-time-1">To</label>\n                    <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="${$}">\n                  </div>\n\n                  <div class="event__field-group  event__field-group--price">\n                    <label class="event__label" for="event-price-1">\n                      <span class="visually-hidden">Price</span>\n                      &euro;\n                    </label>\n                    <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="${i}">\n                  </div>\n\n                  <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>\n                  <button class="event__reset-btn" type="reset">Delete</button>\n                  <button class="event__rollup-btn" type="button">\n                    <span class="visually-hidden">Open event</span>\n                  </button>\n                </header>\n                <section class="event__details">\n                  ${y}\n                  <section class="event__section  event__section--destination">\n                    <h3 class="event__section-title  event__section-title--destination">Destination</h3>\n                    <p class="event__destination-description">${v}</p>\n                  </section>\n                </section>\n              </form>\n            </li>`}(this.#n,this.#s,this.#i)}#l=e=>{e.preventDefault(),this.#o()}}class Z extends F{get template(){return'<ul class="trip-events__list"></ul>'}}class W extends F{#c="";constructor(e){super(),this.#c=e}get template(){return(e=>`<section class="trip-events">\n          <h2 class="visually-hidden">Trip events</h2>\n\n          <p class="trip-events__msg">${(()=>{switch(e){case"Past":return"There are no past events now";case"Present":return"There are no present events now";case"Future":return"There are no future events now";default:return"Click New Event to create your first point"}})()}</p>\n\n          \x3c!--\n            Значение отображаемого текста зависит от выбранного фильтра:\n              * Everthing – 'Click New Event to create your first point'\n              * Past — 'There are no past events now';\n              * Present — 'There are no present events now';\n              * Future — 'There are no future events now'.\n          --\x3e\n        </section>`)(this.#c)}}const U={[f]:e=>e,[v]:e=>e.filter((e=>t()(e.dateFrom)>t()())),[h]:e=>e.filter((e=>t()(e.dateFrom)<=t()()&&t()(e.dateTo)>=t()())),[m]:e=>e.filter((e=>t()(e.dateTo)<t()()))},N=new class{#u=Array.from({length:3},c);#s=_;#i=y;get waypoints(){return this.#u}get destinations(){return this.#s}get offers(){return this.#i}},q=new class{#d=null;constructor({waypointsModel:e}){this.#d=e}#p=new Z;tripEventsElement=document.querySelector(".trip-events");tripControlsFiltersElement=document.querySelector(".trip-controls__filters");pageBodyContainer=document.querySelector(".page-main > .page-body__container");#u=[];#s=[];#i=[];#f(e,t,n){const s=e=>{"Escape"===e.key&&(e.preventDefault(),a(),document.removeEventListener("keydown",s))},i=new I({waypoint:e,destinations:t,offers:n,onEditClick:()=>{j(r,i),document.addEventListener("keydown",s)}}),r=new P({waypoint:e,destinations:t,offers:n,onFormSubmit:()=>{a(),document.removeEventListener("keydown",s)}});function a(){j(i,r)}H(i,this.#p.element)}init(){this.#u=[...this.#d.waypoints],this.#s=[...this.#d.destinations],this.#i=[...this.#d.offers];const e=(t=this.#u,Object.entries(U).map((([e,n])=>({type:e,trips:n(t),count:n(t).length}))));var t;if(H(new B,this.tripEventsElement),H(new Y(e),this.tripControlsFiltersElement),H(this.#p,this.tripEventsElement),0===this.#u.length)H(new W,this.pageBodyContainer);else for(let e=0;e<this.#u.length;e++)this.#f(this.#u[e],this.#s,this.#i)}}({waypointsModel:N});q.init()})()})();
//# sourceMappingURL=bundle.cc4414c6a56d07c713cb.js.map
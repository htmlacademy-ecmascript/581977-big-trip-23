(()=>{var e={484:function(e){e.exports=function(){"use strict";var e=6e4,t=36e5,n="millisecond",i="second",s="minute",a="hour",r="day",l="week",o="month",c="quarter",p="year",v="date",u="Invalid Date",d=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,_=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,f={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],n=e%100;return"["+e+(t[(n-20)%10]||t[n]||t[0])+"]"}},h=function(e,t,n){var i=String(e);return!i||i.length>=t?e:""+Array(t+1-i.length).join(n)+e},y={s:h,z:function(e){var t=-e.utcOffset(),n=Math.abs(t),i=Math.floor(n/60),s=n%60;return(t<=0?"+":"-")+h(i,2,"0")+":"+h(s,2,"0")},m:function e(t,n){if(t.date()<n.date())return-e(n,t);var i=12*(n.year()-t.year())+(n.month()-t.month()),s=t.clone().add(i,o),a=n-s<0,r=t.clone().add(i+(a?-1:1),o);return+(-(i+(n-s)/(a?s-r:r-s))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:o,y:p,w:l,d:r,D:v,h:a,m:s,s:i,ms:n,Q:c}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},m="en",b={};b[m]=f;var g="$isDayjsObject",$=function(e){return e instanceof D||!(!e||!e[g])},M=function e(t,n,i){var s;if(!t)return m;if("string"==typeof t){var a=t.toLowerCase();b[a]&&(s=a),n&&(b[a]=n,s=a);var r=t.split("-");if(!s&&r.length>1)return e(r[0])}else{var l=t.name;b[l]=t,s=l}return!i&&s&&(m=s),s||!i&&m},w=function(e,t){if($(e))return e.clone();var n="object"==typeof t?t:{};return n.date=e,n.args=arguments,new D(n)},x=y;x.l=M,x.i=$,x.w=function(e,t){return w(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var D=function(){function f(e){this.$L=M(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[g]=!0}var h=f.prototype;return h.parse=function(e){this.$d=function(e){var t=e.date,n=e.utc;if(null===t)return new Date(NaN);if(x.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var i=t.match(d);if(i){var s=i[2]-1||0,a=(i[7]||"0").substring(0,3);return n?new Date(Date.UTC(i[1],s,i[3]||1,i[4]||0,i[5]||0,i[6]||0,a)):new Date(i[1],s,i[3]||1,i[4]||0,i[5]||0,i[6]||0,a)}}return new Date(t)}(e),this.init()},h.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},h.$utils=function(){return x},h.isValid=function(){return!(this.$d.toString()===u)},h.isSame=function(e,t){var n=w(e);return this.startOf(t)<=n&&n<=this.endOf(t)},h.isAfter=function(e,t){return w(e)<this.startOf(t)},h.isBefore=function(e,t){return this.endOf(t)<w(e)},h.$g=function(e,t,n){return x.u(e)?this[t]:this.set(n,e)},h.unix=function(){return Math.floor(this.valueOf()/1e3)},h.valueOf=function(){return this.$d.getTime()},h.startOf=function(e,t){var n=this,c=!!x.u(t)||t,u=x.p(e),d=function(e,t){var i=x.w(n.$u?Date.UTC(n.$y,t,e):new Date(n.$y,t,e),n);return c?i:i.endOf(r)},_=function(e,t){return x.w(n.toDate()[e].apply(n.toDate("s"),(c?[0,0,0,0]:[23,59,59,999]).slice(t)),n)},f=this.$W,h=this.$M,y=this.$D,m="set"+(this.$u?"UTC":"");switch(u){case p:return c?d(1,0):d(31,11);case o:return c?d(1,h):d(0,h+1);case l:var b=this.$locale().weekStart||0,g=(f<b?f+7:f)-b;return d(c?y-g:y+(6-g),h);case r:case v:return _(m+"Hours",0);case a:return _(m+"Minutes",1);case s:return _(m+"Seconds",2);case i:return _(m+"Milliseconds",3);default:return this.clone()}},h.endOf=function(e){return this.startOf(e,!1)},h.$set=function(e,t){var l,c=x.p(e),u="set"+(this.$u?"UTC":""),d=(l={},l[r]=u+"Date",l[v]=u+"Date",l[o]=u+"Month",l[p]=u+"FullYear",l[a]=u+"Hours",l[s]=u+"Minutes",l[i]=u+"Seconds",l[n]=u+"Milliseconds",l)[c],_=c===r?this.$D+(t-this.$W):t;if(c===o||c===p){var f=this.clone().set(v,1);f.$d[d](_),f.init(),this.$d=f.set(v,Math.min(this.$D,f.daysInMonth())).$d}else d&&this.$d[d](_);return this.init(),this},h.set=function(e,t){return this.clone().$set(e,t)},h.get=function(e){return this[x.p(e)]()},h.add=function(n,c){var v,u=this;n=Number(n);var d=x.p(c),_=function(e){var t=w(u);return x.w(t.date(t.date()+Math.round(e*n)),u)};if(d===o)return this.set(o,this.$M+n);if(d===p)return this.set(p,this.$y+n);if(d===r)return _(1);if(d===l)return _(7);var f=(v={},v[s]=e,v[a]=t,v[i]=1e3,v)[d]||1,h=this.$d.getTime()+n*f;return x.w(h,this)},h.subtract=function(e,t){return this.add(-1*e,t)},h.format=function(e){var t=this,n=this.$locale();if(!this.isValid())return n.invalidDate||u;var i=e||"YYYY-MM-DDTHH:mm:ssZ",s=x.z(this),a=this.$H,r=this.$m,l=this.$M,o=n.weekdays,c=n.months,p=n.meridiem,v=function(e,n,s,a){return e&&(e[n]||e(t,i))||s[n].slice(0,a)},d=function(e){return x.s(a%12||12,e,"0")},f=p||function(e,t,n){var i=e<12?"AM":"PM";return n?i.toLowerCase():i};return i.replace(_,(function(e,i){return i||function(e){switch(e){case"YY":return String(t.$y).slice(-2);case"YYYY":return x.s(t.$y,4,"0");case"M":return l+1;case"MM":return x.s(l+1,2,"0");case"MMM":return v(n.monthsShort,l,c,3);case"MMMM":return v(c,l);case"D":return t.$D;case"DD":return x.s(t.$D,2,"0");case"d":return String(t.$W);case"dd":return v(n.weekdaysMin,t.$W,o,2);case"ddd":return v(n.weekdaysShort,t.$W,o,3);case"dddd":return o[t.$W];case"H":return String(a);case"HH":return x.s(a,2,"0");case"h":return d(1);case"hh":return d(2);case"a":return f(a,r,!0);case"A":return f(a,r,!1);case"m":return String(r);case"mm":return x.s(r,2,"0");case"s":return String(t.$s);case"ss":return x.s(t.$s,2,"0");case"SSS":return x.s(t.$ms,3,"0");case"Z":return s}return null}(e)||s.replace(":","")}))},h.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},h.diff=function(n,v,u){var d,_=this,f=x.p(v),h=w(n),y=(h.utcOffset()-this.utcOffset())*e,m=this-h,b=function(){return x.m(_,h)};switch(f){case p:d=b()/12;break;case o:d=b();break;case c:d=b()/3;break;case l:d=(m-y)/6048e5;break;case r:d=(m-y)/864e5;break;case a:d=m/t;break;case s:d=m/e;break;case i:d=m/1e3;break;default:d=m}return u?d:x.a(d)},h.daysInMonth=function(){return this.endOf(o).$D},h.$locale=function(){return b[this.$L]},h.locale=function(e,t){if(!e)return this.$L;var n=this.clone(),i=M(e,t,!0);return i&&(n.$L=i),n},h.clone=function(){return x.w(this.$d,this)},h.toDate=function(){return new Date(this.valueOf())},h.toJSON=function(){return this.isValid()?this.toISOString():null},h.toISOString=function(){return this.$d.toISOString()},h.toString=function(){return this.$d.toUTCString()},f}(),k=D.prototype;return w.prototype=k,[["$ms",n],["$s",i],["$m",s],["$H",a],["$W",r],["$M",o],["$y",p],["$D",v]].forEach((function(e){k[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),w.extend=function(e,t){return e.$i||(e(t,D,w),e.$i=!0),w},w.locale=M,w.isDayjs=$,w.unix=function(e){return w(1e3*e)},w.en=b[m],w.Ls=b,w.p={},w}()}},t={};function n(i){var s=t[i];if(void 0!==s)return s.exports;var a=t[i]={exports:{}};return e[i].call(a.exports,a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var i in t)n.o(t,i)&&!n.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";const e=["Taxi","Bus","Train","Ship","Drive","Flight","Check-in","Sightseeing","Restaurant"],t=["Amsterdam","Chamonix","Geneva","Moscow"];var i=n(484),s=n.n(i);const a=e=>e?s()(e).format("DD/MM/YY HH:mm"):"",r=[{id:"f4b62099-293f-4c3d-a702-94eec4a2808c",base_price:1100,date_from:"2019-07-10T22:55:56.845Z",date_to:"2019-07-11T11:22:13.375Z",destination:{id:"cfe416cq-10xa-ye10-8077-2fs9a01edcab",description:"Chamonix, is a beautiful city, a true asian pearl, with crowded streets.",name:"Chamonix",pictures:[{src:"https://loremflickr.com/248/152?random="+((e,t)=>{const n=Math.ceil(Math.min(Math.abs(1),Math.abs(15))),i=Math.floor(Math.max(Math.abs(1),Math.abs(15))),s=Math.random()*(i-n+1)+n;return Math.floor(s)})(),description:"Chamonix parliament building"}]},is_favorite:!1,offers:[{type:"taxi",offers:[{id:"b4c3e4e6-9053-42ce-b747-e281314baa31",title:"Upgrade to a business class",price:120}]}],type:"taxi"}].map((e=>(e=>{for(const n of Object.keys(e))n.includes("_")&&(e[(t=n,t.toLowerCase().replace(/([-_][a-z])/g,(e=>e.toUpperCase().replace("-","").replace("_",""))))]=e[n],delete e[n]);var t;return e})(e))),l=()=>{return(e=r)[Math.floor(Math.random()*e.length)];var e};function o(e){const t=document.createElement("div");return t.innerHTML=e,t.firstElementChild}function c(e,t,n="beforeend"){t.insertAdjacentElement(n,e.getElement())}class p{getTemplate(){return'<form class="trip-events__trip-sort  trip-sort" action="#" method="get">\n            <div class="trip-sort__item  trip-sort__item--day">\n              <input id="sort-day" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-day">\n              <label class="trip-sort__btn" for="sort-day">Day</label>\n            </div>\n\n            <div class="trip-sort__item  trip-sort__item--event">\n              <input id="sort-event" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-event" disabled>\n              <label class="trip-sort__btn" for="sort-event">Event</label>\n            </div>\n\n            <div class="trip-sort__item  trip-sort__item--time">\n              <input id="sort-time" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-time">\n              <label class="trip-sort__btn" for="sort-time">Time</label>\n            </div>\n\n            <div class="trip-sort__item  trip-sort__item--price">\n              <input id="sort-price" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-price" checked>\n              <label class="trip-sort__btn" for="sort-price">Price</label>\n            </div>\n\n            <div class="trip-sort__item  trip-sort__item--offer">\n              <input id="sort-offer" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-offer" disabled>\n              <label class="trip-sort__btn" for="sort-offer">Offers</label>\n            </div>\n          </form>'}getElement(){return this.element||(this.element=o(this.getTemplate())),this.element}}class v{getTemplate(){return'<form class="trip-filters" action="#" method="get">\n                <div class="trip-filters__filter">\n                  <input id="filter-everything" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="everything">\n                  <label class="trip-filters__filter-label" for="filter-everything">Everything</label>\n                </div>\n\n                <div class="trip-filters__filter">\n                  <input id="filter-future" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="future">\n                  <label class="trip-filters__filter-label" for="filter-future">Future</label>\n                </div>\n\n                <div class="trip-filters__filter">\n                  <input id="filter-present" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="present">\n                  <label class="trip-filters__filter-label" for="filter-present">Present</label>\n                </div>\n\n                <div class="trip-filters__filter">\n                  <input id="filter-past" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="past" checked>\n                  <label class="trip-filters__filter-label" for="filter-past">Past</label>\n                </div>\n\n                <button class="visually-hidden" type="submit">Accept filter</button>\n              </form>'}getElement(){return this.element||(this.element=o(this.getTemplate())),this.element}}class u{constructor({trip:e}){this.trip=e}getTemplate(){return function(e){const{type:t,destination:{name:n},basePrice:i}=e;return`<li class="trip-events__item">\n              <div class="event">\n                <time class="event__date" datetime="2019-03-18">MAR 18</time>\n                <div class="event__type">\n                  <img class="event__type-icon" width="42" height="42" src="img/icons/${t}.png" alt="Event type icon">\n                </div>\n                <h3 class="event__title">${t} ${n}</h3>\n                <div class="event__schedule">\n                  <p class="event__time">\n                    <time class="event__start-time" datetime="2019-03-18T10:30">10:30</time>\n                    &mdash;\n                    <time class="event__end-time" datetime="2019-03-18T11:00">11:00</time>\n                  </p>\n                  <p class="event__duration">30M</p>\n                </div>\n                <p class="event__price">\n                  &euro;&nbsp;<span class="event__price-value">${i}</span>\n                </p>\n                <h4 class="visually-hidden">Offers:</h4>\n                <ul class="event__selected-offers">\n                  <li class="event__offer">\n                    <span class="event__offer-title">Order Uber</span>\n                    &plus;&euro;&nbsp;\n                    <span class="event__offer-price">20</span>\n                  </li>\n                </ul>\n                <button class="event__favorite-btn event__favorite-btn--active" type="button">\n                  <span class="visually-hidden">Add to favorite</span>\n                  <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">\n                    <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"/>\n                  </svg>\n                </button>\n                <button class="event__rollup-btn" type="button">\n                  <span class="visually-hidden">Open event</span>\n                </button>\n              </div>\n            </li>`}(this.trip)}getElement(){return this.element||(this.element=o(this.getTemplate())),this.element}}class d{getTemplate(){return'            <li class="trip-events__item">\n              <form class="event event--edit" action="#" method="post">\n                <header class="event__header">\n                  <div class="event__type-wrapper">\n                    <label class="event__type  event__type-btn" for="event-type-toggle-1">\n                      <span class="visually-hidden">Choose event type</span>\n                      <img class="event__type-icon" width="17" height="17" src="img/icons/flight.png" alt="Event type icon">\n                    </label>\n                    <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">\n\n                    <div class="event__type-list">\n                      <fieldset class="event__type-group">\n                        <legend class="visually-hidden">Event type</legend>\n\n                        <div class="event__type-item">\n                          <input id="event-type-taxi-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="taxi">\n                          <label class="event__type-label  event__type-label--taxi" for="event-type-taxi-1">Taxi</label>\n                        </div>\n\n                        <div class="event__type-item">\n                          <input id="event-type-bus-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="bus">\n                          <label class="event__type-label  event__type-label--bus" for="event-type-bus-1">Bus</label>\n                        </div>\n\n                        <div class="event__type-item">\n                          <input id="event-type-train-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="train">\n                          <label class="event__type-label  event__type-label--train" for="event-type-train-1">Train</label>\n                        </div>\n\n                        <div class="event__type-item">\n                          <input id="event-type-ship-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="ship">\n                          <label class="event__type-label  event__type-label--ship" for="event-type-ship-1">Ship</label>\n                        </div>\n\n                        <div class="event__type-item">\n                          <input id="event-type-drive-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="drive">\n                          <label class="event__type-label  event__type-label--drive" for="event-type-drive-1">Drive</label>\n                        </div>\n\n                        <div class="event__type-item">\n                          <input id="event-type-flight-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="flight" checked>\n                          <label class="event__type-label  event__type-label--flight" for="event-type-flight-1">Flight</label>\n                        </div>\n\n                        <div class="event__type-item">\n                          <input id="event-type-check-in-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="check-in">\n                          <label class="event__type-label  event__type-label--check-in" for="event-type-check-in-1">Check-in</label>\n                        </div>\n\n                        <div class="event__type-item">\n                          <input id="event-type-sightseeing-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="sightseeing">\n                          <label class="event__type-label  event__type-label--sightseeing" for="event-type-sightseeing-1">Sightseeing</label>\n                        </div>\n\n                        <div class="event__type-item">\n                          <input id="event-type-restaurant-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="restaurant">\n                          <label class="event__type-label  event__type-label--restaurant" for="event-type-restaurant-1">Restaurant</label>\n                        </div>\n                      </fieldset>\n                    </div>\n                  </div>\n\n                  <div class="event__field-group  event__field-group--destination">\n                    <label class="event__label  event__type-output" for="event-destination-1">\n                      Flight\n                    </label>\n                    <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value="Chamonix" list="destination-list-1">\n                    <datalist id="destination-list-1">\n                      <option value="Amsterdam"></option>\n                      <option value="Geneva"></option>\n                      <option value="Chamonix"></option>\n                    </datalist>\n                  </div>\n\n                  <div class="event__field-group  event__field-group--time">\n                    <label class="visually-hidden" for="event-start-time-1">From</label>\n                    <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="18/03/19 12:25">\n                    &mdash;\n                    <label class="visually-hidden" for="event-end-time-1">To</label>\n                    <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="18/03/19 13:35">\n                  </div>\n\n                  <div class="event__field-group  event__field-group--price">\n                    <label class="event__label" for="event-price-1">\n                      <span class="visually-hidden">Price</span>\n                      &euro;\n                    </label>\n                    <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="160">\n                  </div>\n\n                  <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>\n                  <button class="event__reset-btn" type="reset">Delete</button>\n                  <button class="event__rollup-btn" type="button">\n                    <span class="visually-hidden">Open event</span>\n                  </button>\n                </header>\n                <section class="event__details">\n                  <section class="event__section  event__section--offers">\n                    <h3 class="event__section-title  event__section-title--offers">Offers</h3>\n\n                    <div class="event__available-offers">\n                      <div class="event__offer-selector">\n                        <input class="event__offer-checkbox  visually-hidden" id="event-offer-luggage-1" type="checkbox" name="event-offer-luggage" checked>\n                        <label class="event__offer-label" for="event-offer-luggage-1">\n                          <span class="event__offer-title">Add luggage</span>\n                          &plus;&euro;&nbsp;\n                          <span class="event__offer-price">50</span>\n                        </label>\n                      </div>\n\n                      <div class="event__offer-selector">\n                        <input class="event__offer-checkbox  visually-hidden" id="event-offer-comfort-1" type="checkbox" name="event-offer-comfort" checked>\n                        <label class="event__offer-label" for="event-offer-comfort-1">\n                          <span class="event__offer-title">Switch to comfort</span>\n                          &plus;&euro;&nbsp;\n                          <span class="event__offer-price">80</span>\n                        </label>\n                      </div>\n\n                      <div class="event__offer-selector">\n                        <input class="event__offer-checkbox  visually-hidden" id="event-offer-meal-1" type="checkbox" name="event-offer-meal">\n                        <label class="event__offer-label" for="event-offer-meal-1">\n                          <span class="event__offer-title">Add meal</span>\n                          &plus;&euro;&nbsp;\n                          <span class="event__offer-price">15</span>\n                        </label>\n                      </div>\n\n                      <div class="event__offer-selector">\n                        <input class="event__offer-checkbox  visually-hidden" id="event-offer-seats-1" type="checkbox" name="event-offer-seats">\n                        <label class="event__offer-label" for="event-offer-seats-1">\n                          <span class="event__offer-title">Choose seats</span>\n                          &plus;&euro;&nbsp;\n                          <span class="event__offer-price">5</span>\n                        </label>\n                      </div>\n\n                      <div class="event__offer-selector">\n                        <input class="event__offer-checkbox  visually-hidden" id="event-offer-train-1" type="checkbox" name="event-offer-train">\n                        <label class="event__offer-label" for="event-offer-train-1">\n                          <span class="event__offer-title">Travel by train</span>\n                          &plus;&euro;&nbsp;\n                          <span class="event__offer-price">40</span>\n                        </label>\n                      </div>\n                    </div>\n                  </section>\n\n                  <section class="event__section  event__section--destination">\n                    <h3 class="event__section-title  event__section-title--destination">Destination</h3>\n                    <p class="event__destination-description">Chamonix-Mont-Blanc (usually shortened to Chamonix) is a resort area near the junction of France, Switzerland and Italy. At the base of Mont Blanc, the highest summit in the Alps, it\'s renowned for its skiing.</p>\n                  </section>\n                </section>\n              </form>\n            </li>'}getElement(){return this.element||(this.element=o(this.getTemplate())),this.element}}class _{getTemplate(){return'<ul class="trip-events__list"></ul>'}getElement(){return this.element||(this.element=o(this.getTemplate())),this.element}}class f{constructor({trip:e}){this.trip=e}getTemplate(){return function(n){const{destination:{description:i,name:s,pictures:r},basePrice:l,offers:[{offers:o}],dateFrom:c,dateTo:p}=n,v=e.map((e=>`<div class="event__type-item">\n                          <input id="event-type-${e.toLowerCase()}-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="${e.toLowerCase()}">\n                          <label class="event__type-label  event__type-label--${e.toLowerCase()}" for="event-type-${e.toLowerCase()}-1">${e}</label>\n                        </div>`)).join(""),u=t.map((e=>`<option value="${e}"></option>`)).join(""),d=r.map((e=>`<img class="event__photo" src="${e.src}" alt="Event photo">`)).join(""),_=null!==o?o.map((e=>`<div class="event__offer-selector">\n                        <input class="event__offer-checkbox  visually-hidden" id="event-offer-${e.type}-1" type="checkbox" name="event-offer-${e.type}" checked>\n                        <label class="event__offer-label" for="event-offer-${e.type}-1">\n                          <span class="event__offer-title">${e.title}</span>\n                          &plus;&euro;&nbsp;\n                          <span class="event__offer-price">${e.price}</span>\n                        </label>\n                      </div>`)).join(""):"";return`<li class="trip-events__item">\n              <form class="event event--edit" action="#" method="post">\n                <header class="event__header">\n                  <div class="event__type-wrapper">\n                    <label class="event__type  event__type-btn" for="event-type-toggle-1">\n                      <span class="visually-hidden">Choose event type</span>\n                      <img class="event__type-icon" width="17" height="17" src="img/icons/flight.png" alt="Event type icon">\n                    </label>\n                    <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">\n\n                    <div class="event__type-list">\n                      <fieldset class="event__type-group">\n                        <legend class="visually-hidden">Event type</legend>\n                        ${v}\n                      </fieldset>\n                    </div>\n                  </div>\n\n                  <div class="event__field-group  event__field-group--destination">\n                    <label class="event__label  event__type-output" for="event-destination-1">\n                      Flight\n                    </label>\n                    <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value="${s}" list="destination-list-1">\n                    <datalist id="destination-list-1">\n                      ${u}\n                    </datalist>\n                  </div>\n\n                  <div class="event__field-group  event__field-group--time">\n                    <label class="visually-hidden" for="event-start-time-1">From</label>\n                    <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="${a(c)}">\n                    &mdash;\n                    <label class="visually-hidden" for="event-end-time-1">To</label>\n                    <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="${a(p)}">\n                  </div>\n\n                  <div class="event__field-group  event__field-group--price">\n                    <label class="event__label" for="event-price-1">\n                      <span class="visually-hidden">Price</span>\n                      &euro;\n                    </label>\n                    <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="${l}">\n                  </div>\n\n                  <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>\n                  <button class="event__reset-btn" type="reset">Cancel</button>\n                </header>\n                <section class="event__details">\n                  <section class="event__section  event__section--offers">\n                    <h3 class="event__section-title  event__section-title--offers">Offers</h3>\n\n                    <div class="event__available-offers">\n                      ${_}\n                    </div>\n                  </section>\n\n                  <section class="event__section  event__section--destination">\n                    <h3 class="event__section-title  event__section-title--destination">Destination</h3>\n                    <p class="event__destination-description">${i}</p>\n\n                    <div class="event__photos-container">\n                      <div class="event__photos-tape">\n                        ${d}\n                      </div>\n                    </div>\n                  </section>\n                </section>\n              </form>\n            </li>`}(this.trip)}getElement(){return this.element||(this.element=o(this.getTemplate())),this.element}}const h=new class{trips=Array.from({length:3},l);getTrips(){return this.trips}},y=new class{constructor({tripModel:e}){this.tripModel=e}waypointListView=new _;tripEventsElement=document.querySelector(".trip-events");tripControlsFiltersElement=document.querySelector(".trip-controls__filters");init(){this.trips=[...this.tripModel.getTrips()],c(new p,this.tripEventsElement),c(new v,this.tripControlsFiltersElement),c(this.waypointListView,this.tripEventsElement),c(new f({trip:this.trips[0]}),this.waypointListView.getElement()),c(new d,this.waypointListView.getElement(),"afterbegin");for(let e=0;e<this.trips.length;e++)c(new u({trip:this.trips[e]}),this.waypointListView.getElement())}}({tripModel:h});y.init()})()})();
//# sourceMappingURL=bundle.78faa4aaf17e6c479a9e.js.map
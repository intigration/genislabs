(window.webpackJsonp=window.webpackJsonp||[]).push([[28,3,4,9,12,13,14,18,19,20,22,23,24,25,27],{321:function(t,e,n){"use strict";n.r(e);var o={},l=n(57),component=Object(l.a)(o,(function(){var t=this,e=t._self._c;return e("footer",{staticClass:"section-padding-top bg-light overflow-hidden"},[e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-12 text-center"},[e("div",{staticClass:"footer-logo"},[e("n-link",{attrs:{to:"/"}},[e("img",{attrs:{src:"/images/logo/logo-black.png",alt:"Logo Black"}})])],1),t._v(" "),e("ul",{staticClass:"footer-nav mb-n3"},[e("li",{staticClass:"mb-3"},[e("n-link",{attrs:{to:"/"}},[t._v("Home")])],1),t._v(" "),e("li",{staticClass:"mb-3"},[e("n-link",{attrs:{to:"/project"}},[t._v("Project")])],1),t._v(" "),e("li",{staticClass:"mb-3"},[e("n-link",{attrs:{to:"/blog"}},[t._v("Blogs")])],1),t._v(" "),e("li",{staticClass:"mb-3"},[e("n-link",{attrs:{to:"/about"}},[t._v("About")])],1),t._v(" "),e("li",{staticClass:"mb-3"},[e("n-link",{attrs:{to:"/contact"}},[t._v("Contact")])],1)]),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2)])])])])}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"contact-info"},[t._v("AB Road XX, AB Floor, New York, AA 123456"),e("br"),t._v(" "),e("a",{attrs:{href:"tel:0123456789"}},[t._v("0123456789")]),t._v(" "),e("br"),t._v(" "),e("a",{attrs:{href:"mailto:demo@example.com"}},[t._v("demo@example.com")])])},function(){var t=this,e=t._self._c;return e("ul",{staticClass:"footer-social-icons social-media-link justify-content-center"},[e("li",[e("a",{staticClass:"icofont-facebook",attrs:{href:"https://www.facebook.com/",target:"_blank"}})]),t._v(" "),e("li",[e("a",{staticClass:"icofont-twitter",attrs:{href:"https://twitter.com/",target:"_blank"}})]),t._v(" "),e("li",[e("a",{staticClass:"icofont-instagram",attrs:{href:"https://www.instagram.com/",target:"_blank"}})]),t._v(" "),e("li",[e("a",{staticClass:"icofont-linkedin",attrs:{href:"https://www.linkedin.com/",target:"_blank"}})]),t._v(" "),e("li",[e("a",{staticClass:"icofont-pinterest",attrs:{href:"https://www.pinterest.com/",target:"_blank"}})]),t._v(" "),e("li",[e("a",{staticClass:"icofont-dribbble",attrs:{href:"https://dribbble.com/",target:"_blank"}})])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"copyright"},[t._v("© 2021 "),e("span",[t._v("GOTHIC")]),t._v(" Made with "),e("i",{staticClass:"icofont-heart-alt text-danger"}),t._v(" by "),e("a",{attrs:{href:"https://hasthemes.com/"}},[t._v("HasThemes")])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{Footer:n(321).default})},322:function(t,e,n){t.exports={}},323:function(t,e,n){"use strict";n.r(e);var o={props:["addClassNeme"]},l=n(57),component=Object(l.a)(o,(function(){var t=this,e=t._self._c;return e("nav",{staticClass:"main-menu",class:t.addClassNeme},[e("ul",[e("li",{staticClass:"has-children"},[e("n-link",{attrs:{to:"/"}},[t._v("Home")])],1),t._v(" "),e("li",{staticClass:"has-children"},[e("n-link",{attrs:{to:"/about"}},[t._v("About")])],1),t._v(" "),e("li",{staticClass:"has-children"},[e("n-link",{attrs:{to:"/project"}},[t._v("Project")]),t._v(" "),e("ul",{staticClass:"submenu"},[e("li",[e("n-link",{attrs:{to:"/project"}},[t._v("Project")])],1),t._v(" "),e("li",[e("n-link",{attrs:{to:"/project-details"}},[t._v("Project Details")])],1)])],1),t._v(" "),e("li",{staticClass:"has-children"},[e("n-link",{attrs:{to:"/blog"}},[t._v("Blog")]),t._v(" "),e("ul",{staticClass:"submenu"},[e("li",[e("n-link",{attrs:{to:"/blog"}},[t._v("Blog")])],1),t._v(" "),e("li",[e("n-link",{attrs:{to:"/blog-details"}},[t._v("Blog Details")])],1)])],1),t._v(" "),e("li",[e("n-link",{attrs:{to:"/contact"}},[t._v("Contact")])],1)])])}),[],!1,null,null,null);e.default=component.exports},324:function(t,e,n){"use strict";n(322)},325:function(t,e,n){"use strict";n.r(e);var o={name:"MobileNavMenu",mounted:function(){for(var t=document.querySelector("#offcanvas-navigation"),e=t.querySelectorAll(".sub-menu"),n=t.querySelectorAll("a"),i=0;i<e.length;i++)e[i].insertAdjacentHTML("beforebegin","<span class='menu-expand'><i></i></span>");for(var o=t.querySelectorAll(".menu-expand"),l=o.length,r=0;r<l;r++)o[r].addEventListener("click",(function(t){d(t)}));for(var c=0;c<n.length;c++)n[c].addEventListener("click",(function(){m()}));var d=function(t){t.currentTarget.parentElement.classList.toggle("active")},m=function(){document.querySelector("#offcanvas-mobile-menu").classList.remove("active")}}},l=(n(324),n(57)),component=Object(l.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"mobile-navigation"},[e("nav",{staticClass:"offcanvas-navigation",attrs:{id:"offcanvas-navigation"}},[e("ul",[e("li",{staticClass:"menu-item-has-children"},[e("n-link",{attrs:{to:"/"}},[t._v("Home")])],1),t._v(" "),e("li",[e("n-link",{attrs:{to:"/about"}},[t._v("About Us")])],1),t._v(" "),e("li",{staticClass:"menu-item-has-children"},[e("n-link",{attrs:{to:"/project"}},[t._v("Project")]),t._v(" "),e("ul",{staticClass:"sub-menu"},[e("li",[e("n-link",{attrs:{to:"/project"}},[t._v("Project")])],1),t._v(" "),e("li",[e("n-link",{attrs:{to:"/project-details"}},[t._v("Project Details")])],1)])],1),t._v(" "),e("li",{staticClass:"menu-item-has-children"},[e("n-link",{attrs:{to:"/blog"}},[t._v("Blog")]),t._v(" "),e("ul",{staticClass:"sub-menu"},[e("li",[e("n-link",{attrs:{to:"/blog"}},[t._v("Blog")])],1),t._v(" "),e("li",[e("n-link",{attrs:{to:"/blog-details"}},[t._v("Blog Details")])],1)])],1),t._v(" "),e("li",[e("n-link",{attrs:{to:"/contact"}},[t._v("Contact Us")])],1)])])])}),[],!1,null,null,null);e.default=component.exports},326:function(t,e,n){"use strict";n.r(e);n(1),n(49),n(53);var o={components:{MobileNavigation:function(){return Promise.resolve().then(n.bind(null,325))}},methods:{mobiletoggleClass:function(t,e){var n=document.querySelector("#offcanvas-menu");"addClass"===t?n.classList.add(e):n.classList.remove(e)}}},l=n(57),component=Object(l.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"popup-mobile-menu popup-mobile-visiable",attrs:{id:"offcanvas-menu"}},[e("div",{staticClass:"mobile-menu-overlay",on:{click:function(e){return t.mobiletoggleClass("removeClass","show-mobile-menu")}}}),t._v(" "),e("div",{staticClass:"inner custom-scrollbar"},[e("div",{staticClass:"mobile-header"},[e("div",{staticClass:"logo"},[e("n-link",{attrs:{to:"/"}},[e("img",{attrs:{src:"/images/logo/logo-white.png",alt:"site logo"}})])],1),t._v(" "),e("button",{staticClass:"mobile-close-btn",on:{click:function(e){return t.mobiletoggleClass("removeClass","show-mobile-menu")}}})]),t._v(" "),e("div",{staticClass:"menu-content"},[e("MobileNavigation")],1)])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{MobileNavigation:n(325).default})},329:function(t,e,n){t.exports=function(t){function e(n){if(i[n])return i[n].exports;var a=i[n]={i:n,l:!1,exports:{}};return t[n].call(a.exports,a,a.exports,e),a.l=!0,a.exports}var i={};return e.m=t,e.c=i,e.i=function(t){return t},e.d=function(t,i,n){e.o(t,i)||Object.defineProperty(t,i,{configurable:!1,enumerable:!0,get:n})},e.n=function(t){var i=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(i,"a",i),i},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/dist/",e(e.s=2)}([function(t,e,i){var n=i(4)(i(1),i(5),null,null);t.exports=n.exports},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(3);e.default={props:{startVal:{type:Number,required:!1,default:0},endVal:{type:Number,required:!1,default:2017},duration:{type:Number,required:!1,default:3e3},autoplay:{type:Boolean,required:!1,default:!0},decimals:{type:Number,required:!1,default:0,validator:function(t){return t>=0}},decimal:{type:String,required:!1,default:"."},separator:{type:String,required:!1,default:","},prefix:{type:String,required:!1,default:""},suffix:{type:String,required:!1,default:""},useEasing:{type:Boolean,required:!1,default:!0},easingFn:{type:Function,default:function(t,e,i,n){return i*(1-Math.pow(2,-10*t/n))*1024/1023+e}}},data:function(){return{localStartVal:this.startVal,displayValue:this.formatNumber(this.startVal),printVal:null,paused:!1,localDuration:this.duration,startTime:null,timestamp:null,remaining:null,rAF:null}},computed:{countDown:function(){return this.startVal>this.endVal}},watch:{startVal:function(){this.autoplay&&this.start()},endVal:function(){this.autoplay&&this.start()}},mounted:function(){this.autoplay&&this.start(),this.$emit("mountedCallback")},methods:{start:function(){this.localStartVal=this.startVal,this.startTime=null,this.localDuration=this.duration,this.paused=!1,this.rAF=(0,n.requestAnimationFrame)(this.count)},pauseResume:function(){this.paused?(this.resume(),this.paused=!1):(this.pause(),this.paused=!0)},pause:function(){(0,n.cancelAnimationFrame)(this.rAF)},resume:function(){this.startTime=null,this.localDuration=+this.remaining,this.localStartVal=+this.printVal,(0,n.requestAnimationFrame)(this.count)},reset:function(){this.startTime=null,(0,n.cancelAnimationFrame)(this.rAF),this.displayValue=this.formatNumber(this.startVal)},count:function(t){this.startTime||(this.startTime=t),this.timestamp=t;var e=t-this.startTime;this.remaining=this.localDuration-e,this.useEasing?this.countDown?this.printVal=this.localStartVal-this.easingFn(e,0,this.localStartVal-this.endVal,this.localDuration):this.printVal=this.easingFn(e,this.localStartVal,this.endVal-this.localStartVal,this.localDuration):this.countDown?this.printVal=this.localStartVal-(this.localStartVal-this.endVal)*(e/this.localDuration):this.printVal=this.localStartVal+(this.localStartVal-this.startVal)*(e/this.localDuration),this.countDown?this.printVal=this.printVal<this.endVal?this.endVal:this.printVal:this.printVal=this.printVal>this.endVal?this.endVal:this.printVal,this.displayValue=this.formatNumber(this.printVal),e<this.localDuration?this.rAF=(0,n.requestAnimationFrame)(this.count):this.$emit("callback")},isNumber:function(t){return!isNaN(parseFloat(t))},formatNumber:function(t){t=t.toFixed(this.decimals);var e=(t+="").split("."),i=e[0],n=e.length>1?this.decimal+e[1]:"",a=/(\d+)(\d{3})/;if(this.separator&&!this.isNumber(this.separator))for(;a.test(i);)i=i.replace(a,"$1"+this.separator+"$2");return this.prefix+i+n+this.suffix}},destroyed:function(){(0,n.cancelAnimationFrame)(this.rAF)}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=function(t){return t&&t.__esModule?t:{default:t}}(i(0));e.default=a.default,"undefined"!=typeof window&&window.Vue&&window.Vue.component("count-to",a.default)},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=0,a="webkit moz ms o".split(" "),o=void 0,l=void 0;if("undefined"==typeof window)e.requestAnimationFrame=o=function(){},e.cancelAnimationFrame=l=function(){};else{e.requestAnimationFrame=o=window.requestAnimationFrame,e.cancelAnimationFrame=l=window.cancelAnimationFrame;for(var s=void 0,u=0;u<a.length&&(!o||!l);u++)s=a[u],e.requestAnimationFrame=o=o||window[s+"RequestAnimationFrame"],e.cancelAnimationFrame=l=l||window[s+"CancelAnimationFrame"]||window[s+"CancelRequestAnimationFrame"];o&&l||(e.requestAnimationFrame=o=function(t){var e=(new Date).getTime(),i=Math.max(0,16-(e-n)),a=window.setTimeout((function(){t(e+i)}),i);return n=e+i,a},e.cancelAnimationFrame=l=function(t){window.clearTimeout(t)})}e.requestAnimationFrame=o,e.cancelAnimationFrame=l},function(t,e){t.exports=function(t,e,i,n){var a,o=t=t||{},l=typeof t.default;"object"!==l&&"function"!==l||(a=t,o=t.default);var s="function"==typeof o?o.options:o;if(e&&(s.render=e.render,s.staticRenderFns=e.staticRenderFns),i&&(s._scopeId=i),n){var u=Object.create(s.computed||null);Object.keys(n).forEach((function(t){var e=n[t];u[t]=function(){return e}})),s.computed=u}return{esModule:a,exports:o,options:s}}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("span",[t._v("\n  "+t._s(t.displayValue)+"\n")])},staticRenderFns:[]}}])},330:function(t,e,n){"use strict";n.r(e);n(1),n(49),n(53);var o={components:{Navigation:function(){return Promise.resolve().then(n.bind(null,323))}},data:function(){return{isSticky:!1}},mounted:function(){var t=this;window.addEventListener("scroll",(function(){var e=window.scrollY;t.isSticky=e>=200}))},methods:{mobiletoggleClass:function(t,e){var n=document.querySelector("#offcanvas-menu");"addClass"===t?n.classList.add(e):n.classList.remove(e)}}},l=n(57),component=Object(l.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"header header-transparent section-fluid",class:{"is-sticky":t.isSticky}},[e("div",{staticClass:"header-wrapper"},[e("div",{staticClass:"header-sticky"},[e("div",{staticClass:"container-fluid"},[e("div",{staticClass:"row align-items-center"},[e("div",{staticClass:"col-lg-2 col-md-3 col-6"},[e("div",{staticClass:"header-logo"},[e("n-link",{attrs:{to:"/"}},[e("img",{staticClass:"fit-image",attrs:{src:"/images/logo/logo-white.png",alt:"Header Logo"}})])],1)]),t._v(" "),e("div",{staticClass:"col-lg-8 col-md-7 d-none d-md-block"},[e("div",{staticClass:"main-menu-language-wrapper"},[e("Navigation",{attrs:{addClassNeme:"main-menu-white"}}),t._v(" "),t._m(0)],1)]),t._v(" "),e("div",{staticClass:"col-lg-2 col-md-2 col-6"},[e("div",{staticClass:"mobile-menu-toggle mobile-menu-toggle--white",on:{click:function(e){return t.mobiletoggleClass("addClass","show-mobile-menu")}}},[e("span",[t._v("menu")]),t._v(" "),t._m(1)])])])])])])])}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"language language-white d-md-none d-lg-flex"},[e("a",{attrs:{href:"javascript:void(0)"}},[t._v("Eng")]),t._v(" "),e("a",{attrs:{href:"javascript:void(0)"}},[e("span",[t._v("Fra")])])])},function(){var t=this,e=t._self._c;return e("button",{staticClass:"toggle"},[e("i",{staticClass:"icon-top"}),t._v(" "),e("i",{staticClass:"icon-middle"}),t._v(" "),e("i",{staticClass:"icon-bottom"})])}],!1,null,null,null);e.default=component.exports;installComponents(component,{Navigation:n(323).default})},331:function(t,e,n){"use strict";n.r(e);var o={},l=n(57),component=Object(l.a)(o,(function(){this._self._c;return this._m(0)}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"section-padding-top overflow-hidden"},[e("div",{staticClass:"container"},[e("div",{staticClass:"row mb-n10"},[e("div",{staticClass:"col-lg-6 mb-10 col-md-12 order-2 order-lg-1",attrs:{"data-aos":"fade-right","data-aos-delay":"500"}},[e("div",{staticClass:"history-image"},[e("img",{staticClass:"fit-image",attrs:{src:"/images/history/history-1.png",alt:""}})])]),t._v(" "),e("div",{staticClass:"col-lg-6 mb-10 col-md-12 align-self-center order-1 order-lg-2",attrs:{"data-aos":"fade-left","data-aos-delay":"500"}},[e("div",{staticClass:"history-wrapper"},[e("h1",{staticClass:"title"},[t._v("Gothic Studio")]),t._v(" "),e("div",{staticClass:"history-content"},[e("h4",{staticClass:"subtitle"},[t._v("Founded in Lebanon in 1967, Archo Architecture Company (KCC) has grown to become one of the Middle East's leading construction contractors.")]),t._v(" "),e("p",[t._v("We specialise in complex and prestigious construction and infrastructure projects. Our portfolio includes some of the region’s most iconic landmarks, from super high-rise luxury developments, to five star hotels, hospitals and intricately sophisticated smart buildings. ")]),t._v(" "),e("p",[t._v("We have compiled an extensive list of other area clinics and health resources, so that when someone calls.")])]),t._v(" "),e("div",{staticClass:"signature"},[e("img",{attrs:{src:"/images/icon/sign.png",alt:"Sign"}}),t._v(" "),e("h4",{staticClass:"title"},[t._v("Daniel JR")])])])])])])])}],!1,null,null,null);e.default=component.exports},332:function(t,e,n){"use strict";n.r(e);var o={data:function(){return{services:[{title:"profressional and dedicate team",desc:"Building architectures with modern technology.",icon:"icofont-labour"},{title:"unique design",desc:"Bring the beautifully for your house. Just enjoy!",icon:"icofont-ruler-compass-alt"},{title:"affordable and flexiable",desc:"Bring nature in your house. Health is important",icon:"icofont-credit-card"},{title:"24/7 support",desc:"Consulting solutions and make plan to renovation",icon:"icofont-live-support"}]}}},l=n(57),component=Object(l.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"section-padding-top bg-light"},[e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[t._m(0),t._v(" "),e("div",{staticClass:"col-12"},[e("div",{staticClass:"service-inner-container"},t._l(t.services,(function(n,o){return e("div",{key:o,staticClass:"service-block",attrs:{"data-aos":"fade-up","data-aos-delay":"300"}},[e("div",{staticClass:"inner-box"},[e("h5",{staticClass:"title"},[e("n-link",{attrs:{to:"/about"}},[t._v(t._s(n.title))])],1),t._v(" "),e("p",[t._v(t._s(n.desc))]),t._v(" "),e("div",{staticClass:"inner-box-bottom"},[e("div",{staticClass:"icon"},[e("i",{class:n.icon})]),t._v(" "),e("n-link",{staticClass:"more",attrs:{to:"/about"}},[t._v("more details")])],1)])])})),0)])])])])}),[function(){var t=this._self._c;return t("div",{staticClass:"col-12"},[t("div",{staticClass:"section-title",attrs:{"data-aos":"fade-up","data-aos-delay":"300"}},[t("h2",{staticClass:"title"},[this._v("Why Choose Us")])])])}],!1,null,null,null);e.default=component.exports},333:function(t,e,n){"use strict";n.r(e);var o=n(329),l={components:{countTo:n.n(o).a},data:function(){return{counterUpContent:[{endVal:8e3,title:"Partner <br> worldwide"},{endVal:1250,title:"employees and <br> staffs"},{endVal:904,title:"project completed <br> on 60 countries"}]}}},r=n(57),component=Object(r.a)(l,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"section-padding-bottom bg-light funfact-wrapper"},[e("div",{staticClass:"container"},[e("div",{staticClass:"funfact-inner"},[e("div",{staticClass:"row mtn-30"},t._l(t.counterUpContent,(function(n,o){return e("div",{key:o,staticClass:"col-sm-4 col-6 mt-30",attrs:{"data-aos":"fade-up"}},[e("div",{staticClass:"single-funfact"},[e("countTo",{attrs:{startVal:0,endVal:n.endVal,duration:3e3}}),t._v(" "),e("h6",{staticClass:"title",domProps:{innerHTML:t._s(n.title)}},[t._v(t._s(n.title))])],1)])})),0)])])])}),[],!1,null,null,null);e.default=component.exports},334:function(t,e,n){"use strict";n.r(e);n(27);var o={props:["member"]},l=n(57),component=Object(l.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"team-block"},[e("div",{staticClass:"inner-box"},[e("div",{staticClass:"image"},[e("img",{attrs:{src:t.member.imgSrc,alt:t.member.name}}),t._v(" "),e("ul",{staticClass:"social-icons"},t._l(t.member.socials,(function(t,n){return e("li",{key:n},[e("a",{class:t.icon,attrs:{href:t.url}})])})),0)]),t._v(" "),e("div",{staticClass:"team-content"},[e("h4",{staticClass:"title"},[t._v(t._s(t.member.name))]),t._v(" "),e("h5",{staticClass:"subtitle"},[t._v(t._s(t.member.position))])])])])}),[],!1,null,null,null);e.default=component.exports},335:function(t,e,n){"use strict";n.r(e);n(27);var o={data:function(){return{swiperOptions:{speed:1e3,loop:!0,slidesPerView:2,spaceBetween:30,pagination:{el:".client-carousel .swiper-pagination"},navigation:{nextEl:".client-carousel .client-carousel-next",prevEl:".client-carousel .client-carousel-prev"},breakpoints:{320:{slidesPerView:1},992:{slidesPerView:2}}},clients:[{id:1,imgSrc:"/images/client/1.png",name:"Ryan Betthalyn",position:"Director at Chobham Manor",desc:"Sed elit quam, iaculis sed semper sit amet udin vitae nibh. Rubino at magna akal semperFusce commodo molestie luctus.Lorem ipsum Dolor tusima olatiup."},{id:2,imgSrc:"/images/client/2.png",name:"Bobs Hanely",position:"Director at Spotify",desc:"Sed elit quam, iaculis sed semper sit amet udin vitae nibh. Rubino at magna akal semperFusce commodo molestie luctus.Lorem ipsum Dolor tusima olatiup."}]}}},l=n(57),component=Object(l.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"section-padding-top"},[e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-12 position-relative"},[t._m(0),t._v(" "),e("div",{staticClass:"client-carousel",attrs:{"data-aos":"fade-up","data-aos-delay":"300"}},[e("swiper",{attrs:{options:t.swiperOptions}},t._l(t.clients,(function(n,o){return e("div",{key:o,staticClass:"swiper-slide"},[e("div",{staticClass:"single-client-wrapper"},[e("div",{staticClass:"client-thumb-icon"},[e("div",{staticClass:"thumb"},[e("img",{attrs:{src:n.imgSrc,alt:n.name}})]),t._v(" "),e("div",{staticClass:"icon"},[e("i",{staticClass:"icofont-quote-right"})])]),t._v(" "),e("div",{staticClass:"client-content"},[e("h6",{staticClass:"name"},[e("a",{attrs:{href:"#"}},[t._v(t._s(n.name))]),t._v(" / "),e("span",[t._v(" "+t._s(n.position))])]),t._v(" "),e("p",[t._v(t._s(n.desc))])])])])})),0),t._v(" "),e("div",{staticClass:"swiper-pagination d-none"}),t._v(" "),t._m(1),t._v(" "),t._m(2)],1)])])])])}),[function(){var t=this._self._c;return t("div",{staticClass:"section-title client-title",attrs:{"data-aos":"fade-up","data-aos-delay":"300"}},[t("h2",{staticClass:"title"},[this._v("+2,500 clients love us")])])},function(){var t=this._self._c;return t("div",{staticClass:"client-carousel-prev swiper-button-prev"},[t("i",{staticClass:"icofont-thin-left"})])},function(){var t=this._self._c;return t("div",{staticClass:"client-carousel-next swiper-button-next"},[t("i",{staticClass:"icofont-thin-right"})])}],!1,null,null,null);e.default=component.exports},336:function(t,e,n){"use strict";n.r(e);var o={data:function(){return{swiperOptions:{loop:!0,speed:750,spaceBetween:30,slidesPerView:5,autoplay:!0,breakpoints:{320:{slidesPerView:2},480:{slidesPerView:3},768:{slidesPerView:4},992:{slidesPerView:5}}},brandLogos:[{imgSrc:"/images/brand-logo/1.png",alt:"brand logo"},{imgSrc:"/images/brand-logo/2.png",alt:"brand logo"},{imgSrc:"/images/brand-logo/3.png",alt:"brand logo"},{imgSrc:"/images/brand-logo/4.png",alt:"brand logo"},{imgSrc:"/images/brand-logo/5.png",alt:"brand logo"}]}}},l=n(57),component=Object(l.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"brand-logo-wrapper"},[e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-12"},[e("div",{staticClass:"brand-logo-carousel",attrs:{"data-aos":"fade-up","data-aos-delay":"300"}},[e("swiper",{attrs:{options:t.swiperOptions}},t._l(t.brandLogos,(function(t,n){return e("div",{key:n,staticClass:"swiper-slide single-brand-logo"},[e("n-link",{attrs:{to:""}},[e("img",{attrs:{src:t.imgSrc,alt:t.alt}})])],1)})),0)],1)])])])])}),[],!1,null,null,null);e.default=component.exports},340:function(t,e,n){"use strict";n.r(e);var o=n(338),l=(n(339),{components:{CoolLightBox:o.a},data:function(){return{items:[{src:"https://www.youtube.com/watch?v=eS9Qm4AOOBY",autoplay:!0}],index:null}}}),r=n(57),component=Object(r.a)(l,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"work-image-bg"},[e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-12"},[e("div",{staticClass:"content"},[e("h4",{staticClass:"subtitle",attrs:{"data-aos":"fade-up","data-aos-delay":"300"}},[t._v("how we work")]),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),e("CoolLightBox",{attrs:{items:t.items,index:t.index},on:{close:function(e){t.index=null}}}),t._v(" "),t._l(t.items,(function(image,n){return e("a",{key:n,staticClass:"video-box clearfix",attrs:{href:"javascript:void(0)","data-aos":"fade-up","data-aos-delay":"300"},on:{click:function(e){t.index=n}}},[t._v("\n                            See How we work\n                            "),t._m(3,!0)])}))],2)])])])])}),[function(){var t=this,e=t._self._c;return e("h2",{staticClass:"title",attrs:{"data-aos":"fade-up","data-aos-delay":"300"}},[t._v("Easy & Trusted "),e("br"),t._v(" Progress")])},function(){var t=this,e=t._self._c;return e("p",{attrs:{"data-aos":"fade-up","data-aos-delay":"300"}},[t._v("We understand that you’re hiring us to actually listen, and more "),e("br"),t._v(" importantly, understand your vision, so that your home reflects your spirit and "),e("br"),t._v(" personality, not ours. Above all else, when the project is finished, "),e("br"),t._v(" we want you to  LOVE WHERE YOU LIVE")])},function(){var t=this._self._c;return t("a",{staticClass:"pdf-file",attrs:{href:"images/sample.pdf",target:"_blank","data-aos":"fade-up","data-aos-delay":"300"}},[t("span",{staticClass:"icon icofont-file-pdf"}),this._v("Download Offer [.PDF]")])},function(){var t=this._self._c;return t("span",{staticClass:"fa-play icofont-play"},[t("i",{staticClass:"ripple"})])}],!1,null,null,null);e.default=component.exports},341:function(t,e,n){"use strict";n.r(e);n(1),n(49),n(53);var o={components:{SingleTeamMember:function(){return Promise.resolve().then(n.bind(null,334))}},data:function(){return{members:[{name:"Edward Eric",position:"CEO Founder",imgSrc:"/images/team/team-1.jpg",socials:[{icon:"icofont-twitter",url:"https://twitter.com/"},{icon:"icofont-facebook",url:"https://www.facebook.com/"},{icon:"icofont-instagram",url:"https://www.instagram.com/"},{icon:"icofont-linkedin",url:"https://www.linkedin.com/"}]},{name:"Tom Holland",position:"Architect & Project Management",imgSrc:"/images/team/team-2.jpg",socials:[{icon:"icofont-twitter",url:"https://twitter.com/"},{icon:"icofont-facebook",url:"https://www.facebook.com/"},{icon:"icofont-instagram",url:"https://www.instagram.com/"},{icon:"icofont-linkedin",url:"https://www.linkedin.com/"}]},{name:"Laura Erakovic",position:"Executive & Marketing Management",imgSrc:"/images/team/team-3.jpg",socials:[{icon:"icofont-twitter",url:"https://twitter.com/"},{icon:"icofont-facebook",url:"https://www.facebook.com/"},{icon:"icofont-instagram",url:"https://www.instagram.com/"},{icon:"icofont-linkedin",url:"https://www.linkedin.com/"}]}]}}},l=n(57),component=Object(l.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"section-padding bg-light"},[e("div",{staticClass:"container"},[t._m(0),t._v(" "),e("div",{staticClass:"row mtn-30"},t._l(t.members,(function(t,n){return e("div",{key:n,staticClass:"col-lg-4 col-md-6 mt-30",attrs:{"data-aos":"fade-up","data-aos-delay":"300"}},[e("SingleTeamMember",{attrs:{member:t}})],1)})),0)])])}),[function(){var t=this._self._c;return t("div",{staticClass:"row"},[t("div",{staticClass:"col-12"},[t("div",{staticClass:"section-title",attrs:{"data-aos":"fade-up","data-aos-delay":"300"}},[t("h2",{staticClass:"title"},[this._v("Our Team")])])])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{SingleTeamMember:n(334).default})},349:function(t,e,n){"use strict";n.r(e);var o=n(57),component=Object(o.a)({},(function(){return(0,this._self._c)("div",{staticClass:"about-banner-image",style:{backgroundImage:"url('/images/about/large-about-1.jpg')"}},[this._m(0)])}),[function(){var t=this._self._c;return t("div",{staticClass:"container"},[t("div",{staticClass:"row"},[t("div",{staticClass:"col-12"},[t("div",{staticClass:"content",attrs:{"data-aos":"fade-up","data-aos-delay":"300"}},[t("h1",{staticClass:"title"},[this._v("Studio")])])])])])}],!1,null,null,null);e.default=component.exports},352:function(t,e,n){"use strict";n.r(e);n(1),n(49),n(53);var o={components:{TheHeader:function(){return Promise.resolve().then(n.bind(null,330))},OffCanvasMobileMenu:function(){return Promise.resolve().then(n.bind(null,326))},BannerOne:function(){return Promise.resolve().then(n.bind(null,349))},AboutOne:function(){return Promise.resolve().then(n.bind(null,331))},Features:function(){return Promise.resolve().then(n.bind(null,332))},Counterup:function(){return Promise.resolve().then(n.bind(null,333))},VideoCallToAction:function(){return Promise.resolve().then(n.bind(null,340))},TeamOne:function(){return Promise.resolve().then(n.bind(null,341))},Testimonial:function(){return Promise.resolve().then(n.bind(null,335))},BrandLogoCarousel:function(){return Promise.resolve().then(n.bind(null,336))},Footer:function(){return Promise.resolve().then(n.bind(null,321))}},head:function(){return{title:"About Us"}}},l=n(57),component=Object(l.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"main-container"},[e("TheHeader"),t._v(" "),e("OffCanvasMobileMenu"),t._v(" "),e("BannerOne"),t._v(" "),e("AboutOne"),t._v(" "),e("Features"),t._v(" "),e("Counterup"),t._v(" "),e("VideoCallToAction"),t._v(" "),e("TeamOne"),t._v(" "),e("Testimonial"),t._v(" "),e("BrandLogoCarousel"),t._v(" "),e("Footer"),t._v(" "),e("client-only",[e("back-to-top",{staticClass:"scroll-top",attrs:{bottom:"30px"}},[e("i",{staticClass:"arrow-top icofont-rounded-up"}),t._v(" "),e("i",{staticClass:"arrow-bottom icofont-rounded-up"})])],1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{TheHeader:n(330).default,OffCanvasMobileMenu:n(326).default,BannerOne:n(349).default,AboutOne:n(331).default,Features:n(332).default,Counterup:n(333).default,VideoCallToAction:n(340).default,TeamOne:n(341).default,Testimonial:n(335).default,BrandLogoCarousel:n(336).default,Footer:n(321).default})}}]);
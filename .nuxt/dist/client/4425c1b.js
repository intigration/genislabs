(window.webpackJsonp=window.webpackJsonp||[]).push([[33,10,14,15,18,19,20,26],{321:function(t,e,l){"use strict";l.r(e);var n={},o=l(57),component=Object(o.a)(n,(function(){var t=this,e=t._self._c;return e("footer",{staticClass:"section-padding-top bg-light overflow-hidden"},[e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-12 text-center"},[e("div",{staticClass:"footer-logo"},[e("n-link",{attrs:{to:"/"}},[e("img",{attrs:{src:"/images/logo/logo-black.png",alt:"Logo Black"}})])],1),t._v(" "),e("ul",{staticClass:"footer-nav mb-n3"},[e("li",{staticClass:"mb-3"},[e("n-link",{attrs:{to:"/"}},[t._v("Home")])],1),t._v(" "),e("li",{staticClass:"mb-3"},[e("n-link",{attrs:{to:"/project"}},[t._v("Project")])],1),t._v(" "),e("li",{staticClass:"mb-3"},[e("n-link",{attrs:{to:"/blog"}},[t._v("Blogs")])],1),t._v(" "),e("li",{staticClass:"mb-3"},[e("n-link",{attrs:{to:"/about"}},[t._v("About")])],1),t._v(" "),e("li",{staticClass:"mb-3"},[e("n-link",{attrs:{to:"/contact"}},[t._v("Contact")])],1)]),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2)])])])])}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"contact-info"},[t._v("AB Road XX, AB Floor, New York, AA 123456"),e("br"),t._v(" "),e("a",{attrs:{href:"tel:0123456789"}},[t._v("0123456789")]),t._v(" "),e("br"),t._v(" "),e("a",{attrs:{href:"mailto:demo@example.com"}},[t._v("demo@example.com")])])},function(){var t=this,e=t._self._c;return e("ul",{staticClass:"footer-social-icons social-media-link justify-content-center"},[e("li",[e("a",{staticClass:"icofont-facebook",attrs:{href:"https://www.facebook.com/",target:"_blank"}})]),t._v(" "),e("li",[e("a",{staticClass:"icofont-twitter",attrs:{href:"https://twitter.com/",target:"_blank"}})]),t._v(" "),e("li",[e("a",{staticClass:"icofont-instagram",attrs:{href:"https://www.instagram.com/",target:"_blank"}})]),t._v(" "),e("li",[e("a",{staticClass:"icofont-linkedin",attrs:{href:"https://www.linkedin.com/",target:"_blank"}})]),t._v(" "),e("li",[e("a",{staticClass:"icofont-pinterest",attrs:{href:"https://www.pinterest.com/",target:"_blank"}})]),t._v(" "),e("li",[e("a",{staticClass:"icofont-dribbble",attrs:{href:"https://dribbble.com/",target:"_blank"}})])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"copyright"},[t._v("© 2021 "),e("span",[t._v("GOTHIC")]),t._v(" Made with "),e("i",{staticClass:"icofont-heart-alt text-danger"}),t._v(" by "),e("a",{attrs:{href:"https://hasthemes.com/"}},[t._v("HasThemes")])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{Footer:l(321).default})},322:function(t,e,l){t.exports={}},323:function(t,e,l){"use strict";l.r(e);var n={props:["addClassNeme"]},o=l(57),component=Object(o.a)(n,(function(){var t=this,e=t._self._c;return e("nav",{staticClass:"main-menu",class:t.addClassNeme},[e("ul",[e("li",{staticClass:"has-children"},[e("n-link",{attrs:{to:"/"}},[t._v("Home")])],1),t._v(" "),e("li",{staticClass:"has-children"},[e("n-link",{attrs:{to:"/about"}},[t._v("About")])],1),t._v(" "),e("li",{staticClass:"has-children"},[e("n-link",{attrs:{to:"/project"}},[t._v("Project")]),t._v(" "),e("ul",{staticClass:"submenu"},[e("li",[e("n-link",{attrs:{to:"/project"}},[t._v("Project")])],1),t._v(" "),e("li",[e("n-link",{attrs:{to:"/project-details"}},[t._v("Project Details")])],1)])],1),t._v(" "),e("li",{staticClass:"has-children"},[e("n-link",{attrs:{to:"/blog"}},[t._v("Blog")]),t._v(" "),e("ul",{staticClass:"submenu"},[e("li",[e("n-link",{attrs:{to:"/blog"}},[t._v("Blog")])],1),t._v(" "),e("li",[e("n-link",{attrs:{to:"/blog-details"}},[t._v("Blog Details")])],1)])],1),t._v(" "),e("li",[e("n-link",{attrs:{to:"/contact"}},[t._v("Contact")])],1)])])}),[],!1,null,null,null);e.default=component.exports},324:function(t,e,l){"use strict";l(322)},325:function(t,e,l){"use strict";l.r(e);var n={name:"MobileNavMenu",mounted:function(){for(var t=document.querySelector("#offcanvas-navigation"),e=t.querySelectorAll(".sub-menu"),l=t.querySelectorAll("a"),i=0;i<e.length;i++)e[i].insertAdjacentHTML("beforebegin","<span class='menu-expand'><i></i></span>");for(var n=t.querySelectorAll(".menu-expand"),o=n.length,r=0;r<o;r++)n[r].addEventListener("click",(function(t){v(t)}));for(var c=0;c<l.length;c++)l[c].addEventListener("click",(function(){d()}));var v=function(t){t.currentTarget.parentElement.classList.toggle("active")},d=function(){document.querySelector("#offcanvas-mobile-menu").classList.remove("active")}}},o=(l(324),l(57)),component=Object(o.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"mobile-navigation"},[e("nav",{staticClass:"offcanvas-navigation",attrs:{id:"offcanvas-navigation"}},[e("ul",[e("li",{staticClass:"menu-item-has-children"},[e("n-link",{attrs:{to:"/"}},[t._v("Home")])],1),t._v(" "),e("li",[e("n-link",{attrs:{to:"/about"}},[t._v("About Us")])],1),t._v(" "),e("li",{staticClass:"menu-item-has-children"},[e("n-link",{attrs:{to:"/project"}},[t._v("Project")]),t._v(" "),e("ul",{staticClass:"sub-menu"},[e("li",[e("n-link",{attrs:{to:"/project"}},[t._v("Project")])],1),t._v(" "),e("li",[e("n-link",{attrs:{to:"/project-details"}},[t._v("Project Details")])],1)])],1),t._v(" "),e("li",{staticClass:"menu-item-has-children"},[e("n-link",{attrs:{to:"/blog"}},[t._v("Blog")]),t._v(" "),e("ul",{staticClass:"sub-menu"},[e("li",[e("n-link",{attrs:{to:"/blog"}},[t._v("Blog")])],1),t._v(" "),e("li",[e("n-link",{attrs:{to:"/blog-details"}},[t._v("Blog Details")])],1)])],1),t._v(" "),e("li",[e("n-link",{attrs:{to:"/contact"}},[t._v("Contact Us")])],1)])])])}),[],!1,null,null,null);e.default=component.exports},326:function(t,e,l){"use strict";l.r(e);l(1),l(49),l(53);var n={components:{MobileNavigation:function(){return Promise.resolve().then(l.bind(null,325))}},methods:{mobiletoggleClass:function(t,e){var l=document.querySelector("#offcanvas-menu");"addClass"===t?l.classList.add(e):l.classList.remove(e)}}},o=l(57),component=Object(o.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"popup-mobile-menu popup-mobile-visiable",attrs:{id:"offcanvas-menu"}},[e("div",{staticClass:"mobile-menu-overlay",on:{click:function(e){return t.mobiletoggleClass("removeClass","show-mobile-menu")}}}),t._v(" "),e("div",{staticClass:"inner custom-scrollbar"},[e("div",{staticClass:"mobile-header"},[e("div",{staticClass:"logo"},[e("n-link",{attrs:{to:"/"}},[e("img",{attrs:{src:"/images/logo/logo-white.png",alt:"site logo"}})])],1),t._v(" "),e("button",{staticClass:"mobile-close-btn",on:{click:function(e){return t.mobiletoggleClass("removeClass","show-mobile-menu")}}})]),t._v(" "),e("div",{staticClass:"menu-content"},[e("MobileNavigation")],1)])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{MobileNavigation:l(325).default})},327:function(t,e,l){"use strict";l.r(e);l(1),l(49),l(53);var n={components:{Navigation:function(){return Promise.resolve().then(l.bind(null,323))}},data:function(){return{isSticky:!1}},mounted:function(){var t=this;window.addEventListener("scroll",(function(){var e=window.scrollY;t.isSticky=e>=200}))},methods:{mobiletoggleClass:function(t,e){var l=document.querySelector("#offcanvas-menu");"addClass"===t?l.classList.add(e):l.classList.remove(e)}}},o=l(57),component=Object(o.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"header section-fluid border-bottom header-black",class:{"is-sticky":t.isSticky}},[e("div",{staticClass:"header-wrapper"},[e("div",{staticClass:"header-sticky"},[e("div",{staticClass:"container-fluid"},[e("div",{staticClass:"row align-items-center"},[e("div",{staticClass:"col-lg-2 col-md-3 col-6"},[e("div",{staticClass:"header-logo"},[e("n-link",{attrs:{to:"/"}},[e("img",{staticClass:"fit-image",attrs:{src:"/images/logo/logo-black.png",alt:"Header Logo"}})])],1)]),t._v(" "),e("div",{staticClass:"col-lg-8 col-md-7 d-none d-md-block"},[e("div",{staticClass:"main-menu-language-wrapper"},[e("Navigation"),t._v(" "),t._m(0)],1)]),t._v(" "),e("div",{staticClass:"col-lg-2 col-md-2 col-6"},[e("div",{staticClass:"mobile-menu-toggle",on:{click:function(e){return t.mobiletoggleClass("addClass","show-mobile-menu")}}},[e("span",[t._v("menu")]),t._v(" "),t._m(1)])])])])])])])}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"language d-md-none d-lg-flex"},[e("a",{attrs:{href:"javascript:void(0)"}},[t._v("Eng")]),t._v(" "),e("a",{attrs:{href:"javascript:void(0)"}},[e("span",[t._v("Fra")])])])},function(){var t=this,e=t._self._c;return e("button",{staticClass:"toggle"},[e("i",{staticClass:"icon-top"}),t._v(" "),e("i",{staticClass:"icon-middle"}),t._v(" "),e("i",{staticClass:"icon-bottom"})])}],!1,null,null,null);e.default=component.exports;installComponents(component,{Navigation:l(323).default})},337:function(t,e,l){"use strict";l.r(e);var n={props:["items","title"]},o=l(57),component=Object(o.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"section-padding"},[e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-12",attrs:{"data-aos":"fade-up","data-aos-delay":"300"}},[e("div",{staticClass:"breadcrumb-wrapper"},[e("div",{staticClass:"bread-title"},[e("h1",{staticClass:"title"},[t._v(t._s(t.title))])]),t._v(" "),e("b-breadcrumb",{staticClass:"post-meta",attrs:{items:t.items}})],1)])])])])}),[],!1,null,null,null);e.default=component.exports},345:function(t,e,l){"use strict";l.r(e);var n={data:function(){return{mixer:null,projects:[{imgSrc:"/images/gallery/2.jpg",title:"Dustin Villa, Spain",category:"residential"},{imgSrc:"/images/gallery/3.jpg",title:"ABC Financial Bank",category:"commercial"},{imgSrc:"/images/gallery/4.jpg",title:"Cubic Villa",category:"residential"},{imgSrc:"/images/gallery/5.jpg",title:"Culture House",category:"architecture"},{imgSrc:"/images/gallery/6.jpg",title:"B6-No.5 OLA Tower",category:"interior"},{imgSrc:"/images/gallery/7.jpg",title:"Minimal Interior - A5, Italy",category:"interior"}]}},mounted:function(){var t=this;this.$nextTick((function(){var e=document.querySelector(".box");t.mixer=new t.mixitup(e)}))}},o=l(57),component=Object(o.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"project-masonry-section section-padding-bottom"},[e("div",{staticClass:"container"},[t._m(0),t._v(" "),e("div",{staticClass:"row row-cols-lg-3 row-cols-md-2 row-cols-1 box mesonry-list mtn-30"},t._l(t.projects,(function(l,n){return e("div",{key:n,staticClass:"col mix mt-30",class:l.category},[e("div",{staticClass:"single-project-wrap"},[e("div",{staticClass:"project-thumb position-relative"},[e("n-link",{staticClass:"image",attrs:{to:"/project-details"}},[e("img",{attrs:{src:l.imgSrc,alt:l.title}})])],1),t._v(" "),e("div",{staticClass:"inner-content"},[e("div",{staticClass:"sub-title"},[t._v(t._s(l.category))]),t._v(" "),e("h4",{staticClass:"title"},[e("n-link",{attrs:{to:"/project-details"}},[t._v(t._s(l.title))])],1)])])])})),0)])])}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"row"},[e("div",{staticClass:"sorting-button"},[e("button",{staticClass:"port-filter",attrs:{"data-filter":"all"}},[t._v("All")]),t._v(" "),e("button",{staticClass:"port-filter",attrs:{"data-filter":".residential"}},[t._v("Residentials")]),t._v(" "),e("button",{staticClass:"port-filter",attrs:{"data-filter":".commercial"}},[t._v("Commercials")]),t._v(" "),e("button",{staticClass:"port-filter",attrs:{"data-filter":".architecture"}},[t._v("Architecture")]),t._v(" "),e("button",{staticClass:"port-filter",attrs:{"data-filter":".interior"}},[t._v("Interior")])])])}],!1,null,null,null);e.default=component.exports},356:function(t,e,l){"use strict";l.r(e);l(1),l(49),l(53);var n={components:{TheHeaderTwo:function(){return Promise.resolve().then(l.bind(null,327))},OffCanvasMobileMenu:function(){return Promise.resolve().then(l.bind(null,326))},Breadcrumb:function(){return Promise.resolve().then(l.bind(null,337))},GalleryWithFilter:function(){return Promise.resolve().then(l.bind(null,345))},Footer:function(){return Promise.resolve().then(l.bind(null,321))}},data:function(){return{items:[{text:"Home",to:"/"},{text:"Project",active:!0}]}},head:function(){return{title:"Our Projects"}}},o=l(57),component=Object(o.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"main-container"},[e("TheHeaderTwo"),t._v(" "),e("OffCanvasMobileMenu"),t._v(" "),e("Breadcrumb",{attrs:{items:t.items,title:"Our Project"}}),t._v(" "),e("GalleryWithFilter"),t._v(" "),e("Footer"),t._v(" "),e("client-only",[e("back-to-top",{staticClass:"scroll-top",attrs:{bottom:"30px"}},[e("i",{staticClass:"arrow-top icofont-rounded-up"}),t._v(" "),e("i",{staticClass:"arrow-bottom icofont-rounded-up"})])],1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{TheHeaderTwo:l(327).default,OffCanvasMobileMenu:l(326).default,Breadcrumb:l(337).default,GalleryWithFilter:l(345).default,Footer:l(321).default})}}]);
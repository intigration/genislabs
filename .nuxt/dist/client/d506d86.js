(window.webpackJsonp=window.webpackJsonp||[]).push([[34,14,18,19,20,26],{321:function(t,e,o){"use strict";o.r(e);var n={},l=o(57),component=Object(l.a)(n,(function(){var t=this,e=t._self._c;return e("footer",{staticClass:"section-padding-top bg-light overflow-hidden"},[e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-12 text-center"},[e("div",{staticClass:"footer-logo"},[e("n-link",{attrs:{to:"/"}},[e("img",{attrs:{src:"/images/logo/logo-black.png",alt:"Logo Black"}})])],1),t._v(" "),e("ul",{staticClass:"footer-nav mb-n3"},[e("li",{staticClass:"mb-3"},[e("n-link",{attrs:{to:"/"}},[t._v("Home")])],1),t._v(" "),e("li",{staticClass:"mb-3"},[e("n-link",{attrs:{to:"/project"}},[t._v("Project")])],1),t._v(" "),e("li",{staticClass:"mb-3"},[e("n-link",{attrs:{to:"/blog"}},[t._v("Blogs")])],1),t._v(" "),e("li",{staticClass:"mb-3"},[e("n-link",{attrs:{to:"/about"}},[t._v("About")])],1),t._v(" "),e("li",{staticClass:"mb-3"},[e("n-link",{attrs:{to:"/contact"}},[t._v("Contact")])],1)]),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2)])])])])}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"contact-info"},[t._v("AB Road XX, AB Floor, New York, AA 123456"),e("br"),t._v(" "),e("a",{attrs:{href:"tel:0123456789"}},[t._v("0123456789")]),t._v(" "),e("br"),t._v(" "),e("a",{attrs:{href:"mailto:demo@example.com"}},[t._v("demo@example.com")])])},function(){var t=this,e=t._self._c;return e("ul",{staticClass:"footer-social-icons social-media-link justify-content-center"},[e("li",[e("a",{staticClass:"icofont-facebook",attrs:{href:"https://www.facebook.com/",target:"_blank"}})]),t._v(" "),e("li",[e("a",{staticClass:"icofont-twitter",attrs:{href:"https://twitter.com/",target:"_blank"}})]),t._v(" "),e("li",[e("a",{staticClass:"icofont-instagram",attrs:{href:"https://www.instagram.com/",target:"_blank"}})]),t._v(" "),e("li",[e("a",{staticClass:"icofont-linkedin",attrs:{href:"https://www.linkedin.com/",target:"_blank"}})]),t._v(" "),e("li",[e("a",{staticClass:"icofont-pinterest",attrs:{href:"https://www.pinterest.com/",target:"_blank"}})]),t._v(" "),e("li",[e("a",{staticClass:"icofont-dribbble",attrs:{href:"https://dribbble.com/",target:"_blank"}})])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"copyright"},[t._v("© 2021 "),e("span",[t._v("GOTHIC")]),t._v(" Made with "),e("i",{staticClass:"icofont-heart-alt text-danger"}),t._v(" by "),e("a",{attrs:{href:"https://hasthemes.com/"}},[t._v("HasThemes")])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{Footer:o(321).default})},322:function(t,e,o){t.exports={}},323:function(t,e,o){"use strict";o.r(e);var n={props:["addClassNeme"]},l=o(57),component=Object(l.a)(n,(function(){var t=this,e=t._self._c;return e("nav",{staticClass:"main-menu",class:t.addClassNeme},[e("ul",[e("li",{staticClass:"has-children"},[e("n-link",{attrs:{to:"/"}},[t._v("Home")])],1),t._v(" "),e("li",{staticClass:"has-children"},[e("n-link",{attrs:{to:"/about"}},[t._v("About")])],1),t._v(" "),e("li",{staticClass:"has-children"},[e("n-link",{attrs:{to:"/project"}},[t._v("Project")]),t._v(" "),e("ul",{staticClass:"submenu"},[e("li",[e("n-link",{attrs:{to:"/project"}},[t._v("Project")])],1),t._v(" "),e("li",[e("n-link",{attrs:{to:"/project-details"}},[t._v("Project Details")])],1)])],1),t._v(" "),e("li",{staticClass:"has-children"},[e("n-link",{attrs:{to:"/blog"}},[t._v("Blog")]),t._v(" "),e("ul",{staticClass:"submenu"},[e("li",[e("n-link",{attrs:{to:"/blog"}},[t._v("Blog")])],1),t._v(" "),e("li",[e("n-link",{attrs:{to:"/blog-details"}},[t._v("Blog Details")])],1)])],1),t._v(" "),e("li",[e("n-link",{attrs:{to:"/contact"}},[t._v("Contact")])],1)])])}),[],!1,null,null,null);e.default=component.exports},324:function(t,e,o){"use strict";o(322)},325:function(t,e,o){"use strict";o.r(e);var n={name:"MobileNavMenu",mounted:function(){for(var t=document.querySelector("#offcanvas-navigation"),e=t.querySelectorAll(".sub-menu"),o=t.querySelectorAll("a"),i=0;i<e.length;i++)e[i].insertAdjacentHTML("beforebegin","<span class='menu-expand'><i></i></span>");for(var n=t.querySelectorAll(".menu-expand"),l=n.length,r=0;r<l;r++)n[r].addEventListener("click",(function(t){v(t)}));for(var c=0;c<o.length;c++)o[c].addEventListener("click",(function(){d()}));var v=function(t){t.currentTarget.parentElement.classList.toggle("active")},d=function(){document.querySelector("#offcanvas-mobile-menu").classList.remove("active")}}},l=(o(324),o(57)),component=Object(l.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"mobile-navigation"},[e("nav",{staticClass:"offcanvas-navigation",attrs:{id:"offcanvas-navigation"}},[e("ul",[e("li",{staticClass:"menu-item-has-children"},[e("n-link",{attrs:{to:"/"}},[t._v("Home")])],1),t._v(" "),e("li",[e("n-link",{attrs:{to:"/about"}},[t._v("About Us")])],1),t._v(" "),e("li",{staticClass:"menu-item-has-children"},[e("n-link",{attrs:{to:"/project"}},[t._v("Project")]),t._v(" "),e("ul",{staticClass:"sub-menu"},[e("li",[e("n-link",{attrs:{to:"/project"}},[t._v("Project")])],1),t._v(" "),e("li",[e("n-link",{attrs:{to:"/project-details"}},[t._v("Project Details")])],1)])],1),t._v(" "),e("li",{staticClass:"menu-item-has-children"},[e("n-link",{attrs:{to:"/blog"}},[t._v("Blog")]),t._v(" "),e("ul",{staticClass:"sub-menu"},[e("li",[e("n-link",{attrs:{to:"/blog"}},[t._v("Blog")])],1),t._v(" "),e("li",[e("n-link",{attrs:{to:"/blog-details"}},[t._v("Blog Details")])],1)])],1),t._v(" "),e("li",[e("n-link",{attrs:{to:"/contact"}},[t._v("Contact Us")])],1)])])])}),[],!1,null,null,null);e.default=component.exports},326:function(t,e,o){"use strict";o.r(e);o(1),o(49),o(53);var n={components:{MobileNavigation:function(){return Promise.resolve().then(o.bind(null,325))}},methods:{mobiletoggleClass:function(t,e){var o=document.querySelector("#offcanvas-menu");"addClass"===t?o.classList.add(e):o.classList.remove(e)}}},l=o(57),component=Object(l.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"popup-mobile-menu popup-mobile-visiable",attrs:{id:"offcanvas-menu"}},[e("div",{staticClass:"mobile-menu-overlay",on:{click:function(e){return t.mobiletoggleClass("removeClass","show-mobile-menu")}}}),t._v(" "),e("div",{staticClass:"inner custom-scrollbar"},[e("div",{staticClass:"mobile-header"},[e("div",{staticClass:"logo"},[e("n-link",{attrs:{to:"/"}},[e("img",{attrs:{src:"/images/logo/logo-white.png",alt:"site logo"}})])],1),t._v(" "),e("button",{staticClass:"mobile-close-btn",on:{click:function(e){return t.mobiletoggleClass("removeClass","show-mobile-menu")}}})]),t._v(" "),e("div",{staticClass:"menu-content"},[e("MobileNavigation")],1)])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{MobileNavigation:o(325).default})},327:function(t,e,o){"use strict";o.r(e);o(1),o(49),o(53);var n={components:{Navigation:function(){return Promise.resolve().then(o.bind(null,323))}},data:function(){return{isSticky:!1}},mounted:function(){var t=this;window.addEventListener("scroll",(function(){var e=window.scrollY;t.isSticky=e>=200}))},methods:{mobiletoggleClass:function(t,e){var o=document.querySelector("#offcanvas-menu");"addClass"===t?o.classList.add(e):o.classList.remove(e)}}},l=o(57),component=Object(l.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"header section-fluid border-bottom header-black",class:{"is-sticky":t.isSticky}},[e("div",{staticClass:"header-wrapper"},[e("div",{staticClass:"header-sticky"},[e("div",{staticClass:"container-fluid"},[e("div",{staticClass:"row align-items-center"},[e("div",{staticClass:"col-lg-2 col-md-3 col-6"},[e("div",{staticClass:"header-logo"},[e("n-link",{attrs:{to:"/"}},[e("img",{staticClass:"fit-image",attrs:{src:"/images/logo/logo-black.png",alt:"Header Logo"}})])],1)]),t._v(" "),e("div",{staticClass:"col-lg-8 col-md-7 d-none d-md-block"},[e("div",{staticClass:"main-menu-language-wrapper"},[e("Navigation"),t._v(" "),t._m(0)],1)]),t._v(" "),e("div",{staticClass:"col-lg-2 col-md-2 col-6"},[e("div",{staticClass:"mobile-menu-toggle",on:{click:function(e){return t.mobiletoggleClass("addClass","show-mobile-menu")}}},[e("span",[t._v("menu")]),t._v(" "),t._m(1)])])])])])])])}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"language d-md-none d-lg-flex"},[e("a",{attrs:{href:"javascript:void(0)"}},[t._v("Eng")]),t._v(" "),e("a",{attrs:{href:"javascript:void(0)"}},[e("span",[t._v("Fra")])])])},function(){var t=this,e=t._self._c;return e("button",{staticClass:"toggle"},[e("i",{staticClass:"icon-top"}),t._v(" "),e("i",{staticClass:"icon-middle"}),t._v(" "),e("i",{staticClass:"icon-bottom"})])}],!1,null,null,null);e.default=component.exports;installComponents(component,{Navigation:o(323).default})},357:function(t,e,o){"use strict";o.r(e);o(1),o(49),o(53);var n={components:{TheHeaderTwo:function(){return Promise.resolve().then(o.bind(null,327))},OffCanvasMobileMenu:function(){return Promise.resolve().then(o.bind(null,326))},Footer:function(){return Promise.resolve().then(o.bind(null,321))}},data:function(){return{swiperOptions:{loop:!0,speed:1150,spaceBetween:30,slidesPerView:1,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".project-details-carousel .swiper-pagination",type:"bullets",clickable:"true"}}}},head:function(){return{title:"Projects Details"}}},l=o(57),component=Object(l.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"main-container"},[e("TheHeaderTwo"),t._v(" "),e("OffCanvasMobileMenu"),t._v(" "),e("div",{staticClass:"project-details-banner bg-cover",style:{backgroundImage:"url('/images/project/large-project.jpg')"}}),t._v(" "),e("div",{staticClass:"section-padding-top"},[e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[t._m(0),t._v(" "),e("div",{staticClass:"col-12",attrs:{"data-aos":"fade-up","data-aos-delay":"400"}},[e("div",{staticClass:"project-details-carousel"},[e("swiper",{attrs:{options:t.swiperOptions}},[e("div",{staticClass:"swiper-slide"},[e("div",{staticClass:"image"},[e("img",{staticClass:"fit-image",attrs:{src:"/images/project/slide-1.jpg",alt:"Project Image"}})])]),t._v(" "),e("div",{staticClass:"swiper-slide"},[e("div",{staticClass:"image"},[e("img",{staticClass:"fit-image",attrs:{src:"/images/project/slide-2.jpg",alt:"Project Image"}})])])]),t._v(" "),e("div",{staticClass:"swiper-pagination"}),t._v(" "),t._m(1),t._v(" "),t._m(2)],1)])]),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5)])]),t._v(" "),e("Footer"),t._v(" "),e("client-only",[e("back-to-top",{staticClass:"scroll-top",attrs:{bottom:"30px"}},[e("i",{staticClass:"arrow-top icofont-rounded-up"}),t._v(" "),e("i",{staticClass:"arrow-bottom icofont-rounded-up"})])],1)],1)}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"col-lg-8 offset-lg-2 col-md-12"},[e("div",{staticClass:"project-details-content",attrs:{"data-aos":"fade-up","data-aos-delay":"300"}},[e("h1",{staticClass:"project-details-title"},[t._v("Culture House")]),t._v(" "),e("p",[t._v("The Mercedes-Benz Museum is the only museum in the world that can document in a single continuous timeline the more than 130 years of auto industry history from its very beginnings to the present day. On nine levels and covering a floor space of 16,500 square metres, the museum presents 160 vehicles and over 1,500 exhibits. As a place of innovation, it also demonstrates that history can point the way ahead")]),t._v(" "),e("div",{staticClass:"info-boxed"},[e("ul",[e("li",[e("span",[t._v("location")]),t._v("246 Sample Street, ABB Dist, Belgium")]),t._v(" "),e("li",[e("span",[t._v("client")]),t._v("Belgium Goverment")]),t._v(" "),e("li",[e("span",[t._v("date")]),t._v("2021")]),t._v(" "),e("li",[e("span",[t._v("type")]),t._v("Architecture, Interior")]),t._v(" "),e("li",[e("span",[t._v("Service")]),t._v("Design, Construction, Consulting")])])]),t._v(" "),e("h2",{staticClass:"project-details-title section-padding-top"},[t._v("Concept")]),t._v(" "),e("p",[t._v("There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.")])])])},function(){var t=this._self._c;return t("div",{staticClass:"swiper-nav-center swiper-button-prev"},[t("i",{staticClass:"icofont-thin-left"})])},function(){var t=this._self._c;return t("div",{staticClass:"swiper-nav-center swiper-button-next"},[t("i",{staticClass:"icofont-thin-right"})])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"row project-right-content-box section-padding mtn-30"},[e("div",{staticClass:"col-lg-8 mt-30 order-2 order-lg-1",attrs:{"data-aos":"fade-up","data-aos-delay":"300"}},[e("div",{staticClass:"project-box-image"},[e("img",{staticClass:"fit-image",attrs:{src:"/images/project/medium-1.jpg",alt:"Project Image"}})])]),t._v(" "),e("div",{staticClass:"col-lg-4 mt-30 order-1 order-lg-2",attrs:{"data-aos":"fade-up","data-aos-delay":"500"}},[e("div",{staticClass:"project-box-inner"},[e("div",{staticClass:"section-title"},[e("h2",{staticClass:"text-capitalize title"},[t._v("Challenge")])]),t._v(" "),e("p",[t._v("One of the most successful designer solutions was the use of unifying concept for the meeting rooms through a common design theme: each of the meeting rooms is named after one of the planets of our solar system and is decorated with the relevant cosmic images.")])])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"row project-left-content-box mtn-30"},[e("div",{staticClass:"col-lg-5 mt-30",attrs:{"data-aos":"fade-up","data-aos-delay":"300"}},[e("div",{staticClass:"project-box-inner"},[e("div",{staticClass:"section-title"},[e("h2",{staticClass:"text-capitalize title"},[t._v("Solution")])]),t._v(" "),e("p",[t._v("A modern engineering system with a high degree of automation was installed in the building. In order to guarantee the uninterrupted functioning of all systems and maintain a comfortable climate in the office, an additional high-power cooler was installed on the roof of the business center.")])])]),t._v(" "),e("div",{staticClass:"col-lg-7 mt-30",attrs:{"data-aos":"fade-up","data-aos-delay":"500"}},[e("div",{staticClass:"project-box-image"},[e("img",{staticClass:"fit-image",attrs:{src:"/images/project/medium-2.jpg",alt:"Project Image"}})])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"row section-padding"},[e("div",{staticClass:"col-lg-8 offset-lg-2 col-md-12",attrs:{"data-aos":"fade-up","data-aos-delay":"300"}},[e("blockquote",{staticClass:"blockquote"},[e("p",[t._v("“ The secret to the successful implementation of this project is simple. We just brought together the best people and understood that we were facing a task that is unique in its scale and significance. ”")]),t._v(" "),e("footer",{staticClass:"blockquote-footer"},[e("h2",{staticClass:"title-name"},[t._v("John Doe")]),t._v(" "),e("h4",{staticClass:"title-desig"},[t._v("Project Director")])])])])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{TheHeaderTwo:o(327).default,OffCanvasMobileMenu:o(326).default,Footer:o(321).default,Footer:o(321).default})}}]);
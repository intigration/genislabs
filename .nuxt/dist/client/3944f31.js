(window.webpackJsonp=window.webpackJsonp||[]).push([[26,19],{323:function(t,l,n){"use strict";n.r(l);var o={props:["addClassNeme"]},e=n(57),component=Object(e.a)(o,(function(){var t=this,l=t._self._c;return l("nav",{staticClass:"main-menu",class:t.addClassNeme},[l("ul",[l("li",{staticClass:"has-children"},[l("n-link",{attrs:{to:"/"}},[t._v("Home")])],1),t._v(" "),l("li",{staticClass:"has-children"},[l("n-link",{attrs:{to:"/about"}},[t._v("About")])],1),t._v(" "),l("li",{staticClass:"has-children"},[l("n-link",{attrs:{to:"/project"}},[t._v("Project")]),t._v(" "),l("ul",{staticClass:"submenu"},[l("li",[l("n-link",{attrs:{to:"/project"}},[t._v("Project")])],1),t._v(" "),l("li",[l("n-link",{attrs:{to:"/project-details"}},[t._v("Project Details")])],1)])],1),t._v(" "),l("li",{staticClass:"has-children"},[l("n-link",{attrs:{to:"/blog"}},[t._v("Blog")]),t._v(" "),l("ul",{staticClass:"submenu"},[l("li",[l("n-link",{attrs:{to:"/blog"}},[t._v("Blog")])],1),t._v(" "),l("li",[l("n-link",{attrs:{to:"/blog-details"}},[t._v("Blog Details")])],1)])],1),t._v(" "),l("li",[l("n-link",{attrs:{to:"/contact"}},[t._v("Contact")])],1)])])}),[],!1,null,null,null);l.default=component.exports},327:function(t,l,n){"use strict";n.r(l);n(1),n(49),n(53);var o={components:{Navigation:function(){return Promise.resolve().then(n.bind(null,323))}},data:function(){return{isSticky:!1}},mounted:function(){var t=this;window.addEventListener("scroll",(function(){var l=window.scrollY;t.isSticky=l>=200}))},methods:{mobiletoggleClass:function(t,l){var n=document.querySelector("#offcanvas-menu");"addClass"===t?n.classList.add(l):n.classList.remove(l)}}},e=n(57),component=Object(e.a)(o,(function(){var t=this,l=t._self._c;return l("div",{staticClass:"header section-fluid border-bottom header-black",class:{"is-sticky":t.isSticky}},[l("div",{staticClass:"header-wrapper"},[l("div",{staticClass:"header-sticky"},[l("div",{staticClass:"container-fluid"},[l("div",{staticClass:"row align-items-center"},[l("div",{staticClass:"col-lg-2 col-md-3 col-6"},[l("div",{staticClass:"header-logo"},[l("n-link",{attrs:{to:"/"}},[l("img",{staticClass:"fit-image",attrs:{src:"/images/logo/logo-black.png",alt:"Header Logo"}})])],1)]),t._v(" "),l("div",{staticClass:"col-lg-8 col-md-7 d-none d-md-block"},[l("div",{staticClass:"main-menu-language-wrapper"},[l("Navigation"),t._v(" "),t._m(0)],1)]),t._v(" "),l("div",{staticClass:"col-lg-2 col-md-2 col-6"},[l("div",{staticClass:"mobile-menu-toggle",on:{click:function(l){return t.mobiletoggleClass("addClass","show-mobile-menu")}}},[l("span",[t._v("menu")]),t._v(" "),t._m(1)])])])])])])])}),[function(){var t=this,l=t._self._c;return l("div",{staticClass:"language d-md-none d-lg-flex"},[l("a",{attrs:{href:"javascript:void(0)"}},[t._v("Eng")]),t._v(" "),l("a",{attrs:{href:"javascript:void(0)"}},[l("span",[t._v("Fra")])])])},function(){var t=this,l=t._self._c;return l("button",{staticClass:"toggle"},[l("i",{staticClass:"icon-top"}),t._v(" "),l("i",{staticClass:"icon-middle"}),t._v(" "),l("i",{staticClass:"icon-bottom"})])}],!1,null,null,null);l.default=component.exports;installComponents(component,{Navigation:n(323).default})}}]);
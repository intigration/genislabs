(window.webpackJsonp=window.webpackJsonp||[]).push([[30,5,6,11,14,18,19,20,21,26],{321:function(t,e,l){"use strict";l.r(e);var o={},n=l(57),component=Object(n.a)(o,(function(){var t=this,e=t._self._c;return e("footer",{staticClass:"section-padding-top bg-light overflow-hidden"},[e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-12 text-center"},[e("div",{staticClass:"footer-logo"},[e("n-link",{attrs:{to:"/"}},[e("img",{attrs:{src:"/images/logo/logo-black.png",alt:"Logo Black"}})])],1),t._v(" "),e("ul",{staticClass:"footer-nav mb-n3"},[e("li",{staticClass:"mb-3"},[e("n-link",{attrs:{to:"/"}},[t._v("Home")])],1),t._v(" "),e("li",{staticClass:"mb-3"},[e("n-link",{attrs:{to:"/project"}},[t._v("Project")])],1),t._v(" "),e("li",{staticClass:"mb-3"},[e("n-link",{attrs:{to:"/blog"}},[t._v("Blogs")])],1),t._v(" "),e("li",{staticClass:"mb-3"},[e("n-link",{attrs:{to:"/about"}},[t._v("About")])],1),t._v(" "),e("li",{staticClass:"mb-3"},[e("n-link",{attrs:{to:"/contact"}},[t._v("Contact")])],1)]),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2)])])])])}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"contact-info"},[t._v("AB Road XX, AB Floor, New York, AA 123456"),e("br"),t._v(" "),e("a",{attrs:{href:"tel:0123456789"}},[t._v("0123456789")]),t._v(" "),e("br"),t._v(" "),e("a",{attrs:{href:"mailto:demo@example.com"}},[t._v("demo@example.com")])])},function(){var t=this,e=t._self._c;return e("ul",{staticClass:"footer-social-icons social-media-link justify-content-center"},[e("li",[e("a",{staticClass:"icofont-facebook",attrs:{href:"https://www.facebook.com/",target:"_blank"}})]),t._v(" "),e("li",[e("a",{staticClass:"icofont-twitter",attrs:{href:"https://twitter.com/",target:"_blank"}})]),t._v(" "),e("li",[e("a",{staticClass:"icofont-instagram",attrs:{href:"https://www.instagram.com/",target:"_blank"}})]),t._v(" "),e("li",[e("a",{staticClass:"icofont-linkedin",attrs:{href:"https://www.linkedin.com/",target:"_blank"}})]),t._v(" "),e("li",[e("a",{staticClass:"icofont-pinterest",attrs:{href:"https://www.pinterest.com/",target:"_blank"}})]),t._v(" "),e("li",[e("a",{staticClass:"icofont-dribbble",attrs:{href:"https://dribbble.com/",target:"_blank"}})])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"copyright"},[t._v("© 2021 "),e("span",[t._v("GOTHIC")]),t._v(" Made with "),e("i",{staticClass:"icofont-heart-alt text-danger"}),t._v(" by "),e("a",{attrs:{href:"https://hasthemes.com/"}},[t._v("HasThemes")])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{Footer:l(321).default})},322:function(t,e,l){t.exports={}},323:function(t,e,l){"use strict";l.r(e);var o={props:["addClassNeme"]},n=l(57),component=Object(n.a)(o,(function(){var t=this,e=t._self._c;return e("nav",{staticClass:"main-menu",class:t.addClassNeme},[e("ul",[e("li",{staticClass:"has-children"},[e("n-link",{attrs:{to:"/"}},[t._v("Home")])],1),t._v(" "),e("li",{staticClass:"has-children"},[e("n-link",{attrs:{to:"/about"}},[t._v("About")])],1),t._v(" "),e("li",{staticClass:"has-children"},[e("n-link",{attrs:{to:"/project"}},[t._v("Project")]),t._v(" "),e("ul",{staticClass:"submenu"},[e("li",[e("n-link",{attrs:{to:"/project"}},[t._v("Project")])],1),t._v(" "),e("li",[e("n-link",{attrs:{to:"/project-details"}},[t._v("Project Details")])],1)])],1),t._v(" "),e("li",{staticClass:"has-children"},[e("n-link",{attrs:{to:"/blog"}},[t._v("Blog")]),t._v(" "),e("ul",{staticClass:"submenu"},[e("li",[e("n-link",{attrs:{to:"/blog"}},[t._v("Blog")])],1),t._v(" "),e("li",[e("n-link",{attrs:{to:"/blog-details"}},[t._v("Blog Details")])],1)])],1),t._v(" "),e("li",[e("n-link",{attrs:{to:"/contact"}},[t._v("Contact")])],1)])])}),[],!1,null,null,null);e.default=component.exports},324:function(t,e,l){"use strict";l(322)},325:function(t,e,l){"use strict";l.r(e);var o={name:"MobileNavMenu",mounted:function(){for(var t=document.querySelector("#offcanvas-navigation"),e=t.querySelectorAll(".sub-menu"),l=t.querySelectorAll("a"),i=0;i<e.length;i++)e[i].insertAdjacentHTML("beforebegin","<span class='menu-expand'><i></i></span>");for(var o=t.querySelectorAll(".menu-expand"),n=o.length,r=0;r<n;r++)o[r].addEventListener("click",(function(t){v(t)}));for(var c=0;c<l.length;c++)l[c].addEventListener("click",(function(){d()}));var v=function(t){t.currentTarget.parentElement.classList.toggle("active")},d=function(){document.querySelector("#offcanvas-mobile-menu").classList.remove("active")}}},n=(l(324),l(57)),component=Object(n.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"mobile-navigation"},[e("nav",{staticClass:"offcanvas-navigation",attrs:{id:"offcanvas-navigation"}},[e("ul",[e("li",{staticClass:"menu-item-has-children"},[e("n-link",{attrs:{to:"/"}},[t._v("Home")])],1),t._v(" "),e("li",[e("n-link",{attrs:{to:"/about"}},[t._v("About Us")])],1),t._v(" "),e("li",{staticClass:"menu-item-has-children"},[e("n-link",{attrs:{to:"/project"}},[t._v("Project")]),t._v(" "),e("ul",{staticClass:"sub-menu"},[e("li",[e("n-link",{attrs:{to:"/project"}},[t._v("Project")])],1),t._v(" "),e("li",[e("n-link",{attrs:{to:"/project-details"}},[t._v("Project Details")])],1)])],1),t._v(" "),e("li",{staticClass:"menu-item-has-children"},[e("n-link",{attrs:{to:"/blog"}},[t._v("Blog")]),t._v(" "),e("ul",{staticClass:"sub-menu"},[e("li",[e("n-link",{attrs:{to:"/blog"}},[t._v("Blog")])],1),t._v(" "),e("li",[e("n-link",{attrs:{to:"/blog-details"}},[t._v("Blog Details")])],1)])],1),t._v(" "),e("li",[e("n-link",{attrs:{to:"/contact"}},[t._v("Contact Us")])],1)])])])}),[],!1,null,null,null);e.default=component.exports},326:function(t,e,l){"use strict";l.r(e);l(1),l(49),l(53);var o={components:{MobileNavigation:function(){return Promise.resolve().then(l.bind(null,325))}},methods:{mobiletoggleClass:function(t,e){var l=document.querySelector("#offcanvas-menu");"addClass"===t?l.classList.add(e):l.classList.remove(e)}}},n=l(57),component=Object(n.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"popup-mobile-menu popup-mobile-visiable",attrs:{id:"offcanvas-menu"}},[e("div",{staticClass:"mobile-menu-overlay",on:{click:function(e){return t.mobiletoggleClass("removeClass","show-mobile-menu")}}}),t._v(" "),e("div",{staticClass:"inner custom-scrollbar"},[e("div",{staticClass:"mobile-header"},[e("div",{staticClass:"logo"},[e("n-link",{attrs:{to:"/"}},[e("img",{attrs:{src:"/images/logo/logo-white.png",alt:"site logo"}})])],1),t._v(" "),e("button",{staticClass:"mobile-close-btn",on:{click:function(e){return t.mobiletoggleClass("removeClass","show-mobile-menu")}}})]),t._v(" "),e("div",{staticClass:"menu-content"},[e("MobileNavigation")],1)])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{MobileNavigation:l(325).default})},327:function(t,e,l){"use strict";l.r(e);l(1),l(49),l(53);var o={components:{Navigation:function(){return Promise.resolve().then(l.bind(null,323))}},data:function(){return{isSticky:!1}},mounted:function(){var t=this;window.addEventListener("scroll",(function(){var e=window.scrollY;t.isSticky=e>=200}))},methods:{mobiletoggleClass:function(t,e){var l=document.querySelector("#offcanvas-menu");"addClass"===t?l.classList.add(e):l.classList.remove(e)}}},n=l(57),component=Object(n.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"header section-fluid border-bottom header-black",class:{"is-sticky":t.isSticky}},[e("div",{staticClass:"header-wrapper"},[e("div",{staticClass:"header-sticky"},[e("div",{staticClass:"container-fluid"},[e("div",{staticClass:"row align-items-center"},[e("div",{staticClass:"col-lg-2 col-md-3 col-6"},[e("div",{staticClass:"header-logo"},[e("n-link",{attrs:{to:"/"}},[e("img",{staticClass:"fit-image",attrs:{src:"/images/logo/logo-black.png",alt:"Header Logo"}})])],1)]),t._v(" "),e("div",{staticClass:"col-lg-8 col-md-7 d-none d-md-block"},[e("div",{staticClass:"main-menu-language-wrapper"},[e("Navigation"),t._v(" "),t._m(0)],1)]),t._v(" "),e("div",{staticClass:"col-lg-2 col-md-2 col-6"},[e("div",{staticClass:"mobile-menu-toggle",on:{click:function(e){return t.mobiletoggleClass("addClass","show-mobile-menu")}}},[e("span",[t._v("menu")]),t._v(" "),t._m(1)])])])])])])])}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"language d-md-none d-lg-flex"},[e("a",{attrs:{href:"javascript:void(0)"}},[t._v("Eng")]),t._v(" "),e("a",{attrs:{href:"javascript:void(0)"}},[e("span",[t._v("Fra")])])])},function(){var t=this,e=t._self._c;return e("button",{staticClass:"toggle"},[e("i",{staticClass:"icon-top"}),t._v(" "),e("i",{staticClass:"icon-middle"}),t._v(" "),e("i",{staticClass:"icon-bottom"})])}],!1,null,null,null);e.default=component.exports;installComponents(component,{Navigation:l(323).default})},328:function(t,e,l){"use strict";l.r(e);var o={props:["blog"]},n=l(57),component=Object(n.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"news-block"},[e("div",{staticClass:"image"},[e("n-link",{attrs:{to:"/blog-details"}},[e("img",{staticClass:"fit-image",attrs:{src:t.blog.imgSrc,alt:t.blog.title}})])],1),t._v(" "),e("div",{staticClass:"lower-content"},[e("ul",{staticClass:"info-list"},[e("li",[t._v(t._s(t.blog.date))]),t._v(" "),e("li",[t._v(t._s(t.blog.category))])]),t._v(" "),e("h4",{staticClass:"title"},[e("n-link",{attrs:{to:"/blog-details"}},[t._v(t._s(t.blog.title))])],1)])])}),[],!1,null,null,null);e.default=component.exports},343:function(t,e,l){"use strict";l.r(e);var o={},n=l(57),component=Object(n.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"blog-details-wrapper"},[t._m(0),t._v(" "),e("div",{staticClass:"section-padding-top"},[e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-xl-8 col-lg-10 offset-xl-2 offset-lg-1"},[e("div",{staticClass:"blog-details-content",attrs:{"data-aos":"fade-up","data-aos-delay":"300"}},[e("div",{staticClass:"inner-container"},[e("ul",{staticClass:"page-breadcrumb"},[e("li",[e("n-link",{attrs:{to:"/"}},[t._v("Home")])],1),t._v(" "),e("li",[e("n-link",{attrs:{to:"/blog"}},[t._v("Blog")])],1),t._v(" "),e("li",[t._v("Nordic Interior STyle")])]),t._v(" "),e("h1",{staticClass:"title"},[t._v("Nordic Interior Style")]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),e("h3",{staticClass:"sub-title"},[t._v("Defaulting to Mindfulness")]),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),e("p",[t._v("Both of these assumptions, of course, could be entirely false. Self-censoring is firmly rooted in our experiences with mistakes in the past and not the present. The brain messages arising from those experiences can be deceptive. ")]),t._v(" "),t._m(7)])])])])])])])}),[function(){var t=this._self._c;return t("div",{staticClass:"blog-detils-image"},[t("img",{staticClass:"fit-image",attrs:{src:"/images/news/blog/large-blog.jpg",alt:"Project"}})])},function(){var t=this,e=t._self._c;return e("ul",{staticClass:"info-list"},[e("li",[t._v("Dec 23, 2021")]),t._v(" "),e("li",[t._v("news")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"big-text"},[t._v("To mark the first UK show of artist "),e("br"),t._v(" Henri Barande, graphic designer Alex Maxell and German studio Schultzschultz have created "),e("br"),t._v(" The Lodge Wooden")])},function(){var t=this,e=t._self._c;return e("p",[t._v("This response is important for our ability to learn from mistakes, but it also "),e("br"),t._v(" gives rise to self-criticism, because it is part of the threat-protection system. In other words, what keeps us safe can go too far, and keep us too safe. In fact "),e("br"),t._v(" it can trigger self-censoring.")])},function(){var t=this,e=t._self._c;return e("ul",{staticClass:"list-style-one"},[e("li",[t._v("Welsh novelist Sarah Waters sums it up eloquently")]),t._v(" "),e("li",[t._v("In their classic book, Creativity in Business, based on a popular course they co-taught")]),t._v(" "),e("li",[t._v("Novelist and screenwriter Steven Pressfield")]),t._v(" "),e("li",[t._v("A possible off-the-wall idea or solution appears like a blip and disappears without us")])])},function(){var t=this,e=t._self._c;return e("p",[t._v("Everything along the way, to and from, fascinated her: every pebble, ant, stick, leaf, blade of grass, and crack in the sidewalk was something to be picked up, looked at, tasted, smelled, and shaken. Everything was interesting to her. She knew nothing. "),e("br"),t._v("I knew everything…been there, done that. She was in the moment, I was in the past. She was mindful. I was mindless.")])},function(){var t=this,e=t._self._c;return e("blockquote",{staticClass:"blockquote"},[e("p",[t._v("Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.")]),t._v(" "),e("footer",{staticClass:"blockquote-footer"},[e("h2",{staticClass:"title-name"},[t._v("John Doe")]),t._v(" "),e("h4",{staticClass:"title-desig"},[t._v("Project Director")])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"post-share-options"},[e("div",{staticClass:"post-share-inner"},[e("div",{staticClass:"post-title"},[t._v("Tags:")]),t._v(" "),e("ul",{staticClass:"tags"},[e("li",[e("a",{attrs:{href:"#"}},[t._v("Construction,")])]),t._v(" "),e("li",[e("a",{attrs:{href:"#"}},[t._v("Building,")])]),t._v(" "),e("li",[e("a",{attrs:{href:"#"}},[t._v("Structure,")])])]),e("br"),t._v(" "),e("ul",{staticClass:"social-box"},[e("li",{staticClass:"facebook"},[e("a",{attrs:{href:"https://www.facebook.com/"}},[e("i",{staticClass:"icofont-facebook"})])]),t._v(" "),e("li",{staticClass:"twitter"},[e("a",{attrs:{href:"https://twitter.com/"}},[e("i",{staticClass:"icofont-twitter"})])]),t._v(" "),e("li",{staticClass:"linkedin"},[e("a",{attrs:{href:"https://www.linkedin.com/"}},[e("i",{staticClass:"icofont-linkedin"})])]),t._v(" "),e("li",{staticClass:"rss"},[e("a",{attrs:{href:"#"}},[e("i",{staticClass:"icofont-rss"})])])])])])}],!1,null,"20fb9152",null);e.default=component.exports;installComponents(component,{Footer:l(321).default})},344:function(t,e,l){"use strict";l.r(e);l(19),l(1),l(49),l(53);var o={components:{BlogPost:function(){return Promise.resolve().then(l.bind(null,328))}},data:function(){return{blogs:[{imgSrc:"/images/news/1.jpg",title:"The Way Of Building Nordic Interior",date:"Jan 28, 2021",category:"news"},{imgSrc:"/images/news/2.jpg",title:"The Arch In Modern Architecture & Art",date:"Mar 21, 2021",category:"inspiration"},{imgSrc:"/images/news/3.jpg",title:"Spiral Stair, New Interior Design Trends 2020",date:"Apr 26, 2021",category:"lifestyle"}]}}},n=l(57),component=Object(n.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"section-padding-bottom"},[e("div",{staticClass:"container"},[e("div",{staticClass:"blog-related-news"},[t._m(0),t._v(" "),e("div",{staticClass:"row mtn-30"},t._l(t.blogs.slice(0,3),(function(t,l){return e("div",{key:l,staticClass:"col-lg-4 col-md-6 mt-30",attrs:{"data-aos":"fade-up","data-aos-delay":"100"}},[e("BlogPost",{attrs:{blog:t}})],1)})),0)])])])}),[function(){var t=this._self._c;return t("div",{staticClass:"row"},[t("div",{staticClass:"col-xl-8 col-lg-10 offset-xl-2 offset-lg-1",attrs:{"data-aos":"fade-up","data-aos-delay":"300"}},[t("div",{staticClass:"section-title"},[t("h4",{staticClass:"title text-capitalize"},[this._v("Related Posts")])])])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{BlogPost:l(328).default})},350:function(t,e,l){"use strict";l.r(e);var o=l(57),component=Object(o.a)({},(function(){this._self._c;return this._m(0)}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"blog-comment-section"},[e("div",{staticClass:"container"},[e("div",{staticClass:"row inner-container"},[e("div",{staticClass:"col-xl-8 col-lg-10 offset-xl-2 offset-lg-1 comment-form"},[e("div",{staticClass:"group-title"},[e("h4",{staticClass:"title"},[t._v("Leave A Comment")])]),t._v(" "),e("form",[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-6 form-group",attrs:{"data-aos":"fade-right","data-aos-delay":"300"}},[e("input",{attrs:{type:"text",name:"username",placeholder:"Name *",required:""}})]),t._v(" "),e("div",{staticClass:"col-md-6 form-group",attrs:{"data-aos":"fade-left","data-aos-delay":"300"}},[e("input",{attrs:{type:"email",name:"email",placeholder:"Email *",required:""}})]),t._v(" "),e("div",{staticClass:"col-12 form-group",attrs:{"data-aos":"fade-up","data-aos-delay":"300"}},[e("input",{attrs:{type:"text",name:"subject",placeholder:"Subject (Optional)",required:""}})]),t._v(" "),e("div",{staticClass:"col-12 form-group",attrs:{"data-aos":"fade-up","data-aos-delay":"300"}},[e("textarea",{staticClass:"darma",attrs:{name:"message",placeholder:"Message"}})]),t._v(" "),e("div",{staticClass:"col-12 form-group"},[e("button",{staticClass:"btn btn-primary btn-hover-dark",attrs:{type:"submit",name:"submit-form"}},[e("span",{staticClass:"txt"},[t._v("Post Comments")])])])])])])])])])}],!1,null,null,null);e.default=component.exports},354:function(t,e,l){"use strict";l.r(e);l(1),l(49),l(53);var o={components:{TheHeaderTwo:function(){return Promise.resolve().then(l.bind(null,327))},OffCanvasMobileMenu:function(){return Promise.resolve().then(l.bind(null,326))},BlogDetailsPost:function(){return Promise.resolve().then(l.bind(null,343))},RelatedBlogPost:function(){return Promise.resolve().then(l.bind(null,344))},CommentForm:function(){return Promise.resolve().then(l.bind(null,350))},Footer:function(){return Promise.resolve().then(l.bind(null,321))}},head:function(){return{title:"Blog Details"}}},n=l(57),component=Object(n.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"main-container"},[e("TheHeaderTwo"),t._v(" "),e("OffCanvasMobileMenu"),t._v(" "),e("BlogDetailsPost"),t._v(" "),e("RelatedBlogPost"),t._v(" "),e("div",{staticClass:"old-new-post-section overflow-hidden"},[e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-12"},[e("div",{staticClass:"old-new-post-content mtn-30"},[e("n-link",{staticClass:"old-post mt-30",attrs:{to:"/blog-details","data-aos":"fade-right","data-aos-delay":"300"}},[t._v("Older"),e("span",[t._v("The Way Of Building")])]),t._v(" "),e("n-link",{staticClass:"new-post mt-30",attrs:{to:"/blog-details","data-aos":"fade-left","data-aos-delay":"300"}},[t._v("Newer"),e("span",[t._v("New Interior Design Trends")])])],1)])])])]),t._v(" "),e("CommentForm"),t._v(" "),e("Footer"),t._v(" "),e("client-only",[e("back-to-top",{staticClass:"scroll-top",attrs:{bottom:"30px"}},[e("i",{staticClass:"arrow-top icofont-rounded-up"}),t._v(" "),e("i",{staticClass:"arrow-bottom icofont-rounded-up"})])],1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{TheHeaderTwo:l(327).default,OffCanvasMobileMenu:l(326).default,BlogDetailsPost:l(343).default,RelatedBlogPost:l(344).default,CommentForm:l(350).default,Footer:l(321).default})}}]);
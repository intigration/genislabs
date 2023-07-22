exports.ids = [21,20];
exports.modules = {

/***/ 36:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/SingleTeamMember.vue?vue&type=template&id=147596be&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "team-block"
  }, [_vm._ssrNode("<div class=\"inner-box\"><div class=\"image\"><img" + _vm._ssrAttr("src", _vm.member.imgSrc) + _vm._ssrAttr("alt", _vm.member.name) + "> <ul class=\"social-icons\">" + _vm._ssrList(_vm.member.socials, function (social, index) {
    return "<li><a" + _vm._ssrAttr("href", social.url) + _vm._ssrClass(null, social.icon) + "></a></li>";
  }) + "</ul></div> <div class=\"team-content\"><h4 class=\"title\">" + _vm._ssrEscape(_vm._s(_vm.member.name)) + "</h4> <h5 class=\"subtitle\">" + _vm._ssrEscape(_vm._s(_vm.member.position)) + "</h5></div></div>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/SingleTeamMember.vue?vue&type=template&id=147596be&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/SingleTeamMember.vue?vue&type=script&lang=js&
/* harmony default export */ var SingleTeamMembervue_type_script_lang_js_ = ({
  props: ['member']
});
// CONCATENATED MODULE: ./components/SingleTeamMember.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_SingleTeamMembervue_type_script_lang_js_ = (SingleTeamMembervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/SingleTeamMember.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_SingleTeamMembervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "205c6de0"
  
)

/* harmony default export */ var SingleTeamMember = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 42:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/TeamOne.vue?vue&type=template&id=23f6e080&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "section-padding bg-light"
  }, [_vm._ssrNode("<div class=\"container\">", "</div>", [_vm._ssrNode("<div class=\"row\"><div class=\"col-12\"><div data-aos=\"fade-up\" data-aos-delay=\"300\" class=\"section-title\"><h2 class=\"title\">Our Team</h2></div></div></div> "), _vm._ssrNode("<div class=\"row mtn-30\">", "</div>", _vm._l(_vm.members, function (member, index) {
    return _vm._ssrNode("<div data-aos=\"fade-up\" data-aos-delay=\"300\" class=\"col-lg-4 col-md-6 mt-30\">", "</div>", [_c('SingleTeamMember', {
      attrs: {
        "member": member
      }
    })], 1);
  }), 0)], 2)]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/TeamOne.vue?vue&type=template&id=23f6e080&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/TeamOne.vue?vue&type=script&lang=js&
/* harmony default export */ var TeamOnevue_type_script_lang_js_ = ({
  components: {
    SingleTeamMember: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 36))
  },
  data() {
    return {
      members: [{
        name: "Edward Eric",
        position: "CEO Founder",
        imgSrc: "/images/team/team-1.jpg",
        socials: [{
          icon: "icofont-twitter",
          url: "https://twitter.com/"
        }, {
          icon: "icofont-facebook",
          url: "https://www.facebook.com/"
        }, {
          icon: "icofont-instagram",
          url: "https://www.instagram.com/"
        }, {
          icon: "icofont-linkedin",
          url: "https://www.linkedin.com/"
        }]
      }, {
        name: "Tom Holland",
        position: "Architect & Project Management",
        imgSrc: "/images/team/team-2.jpg",
        socials: [{
          icon: "icofont-twitter",
          url: "https://twitter.com/"
        }, {
          icon: "icofont-facebook",
          url: "https://www.facebook.com/"
        }, {
          icon: "icofont-instagram",
          url: "https://www.instagram.com/"
        }, {
          icon: "icofont-linkedin",
          url: "https://www.linkedin.com/"
        }]
      }, {
        name: "Laura Erakovic",
        position: "Executive & Marketing Management",
        imgSrc: "/images/team/team-3.jpg",
        socials: [{
          icon: "icofont-twitter",
          url: "https://twitter.com/"
        }, {
          icon: "icofont-facebook",
          url: "https://www.facebook.com/"
        }, {
          icon: "icofont-instagram",
          url: "https://www.instagram.com/"
        }, {
          icon: "icofont-linkedin",
          url: "https://www.linkedin.com/"
        }]
      }]
    };
  }
});
// CONCATENATED MODULE: ./components/TeamOne.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_TeamOnevue_type_script_lang_js_ = (TeamOnevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/TeamOne.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_TeamOnevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "72ccb6f0"
  
)

/* harmony default export */ var TeamOne = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {SingleTeamMember: __webpack_require__(36).default})


/***/ })

};;
//# sourceMappingURL=team-one.js.map
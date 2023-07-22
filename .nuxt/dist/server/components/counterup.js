exports.ids = [10];
exports.modules = {

/***/ 35:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Counterup.vue?vue&type=template&id=0fc3045c&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "section-padding-bottom bg-light funfact-wrapper"
  }, [_vm._ssrNode("<div class=\"container\">", "</div>", [_vm._ssrNode("<div class=\"funfact-inner\">", "</div>", [_vm._ssrNode("<div class=\"row mtn-30\">", "</div>", _vm._l(_vm.counterUpContent, function (counter, index) {
    return _vm._ssrNode("<div data-aos=\"fade-up\" class=\"col-sm-4 col-6 mt-30\">", "</div>", [_vm._ssrNode("<div class=\"single-funfact\">", "</div>", [_c('countTo', {
      attrs: {
        "startVal": 0,
        "endVal": counter.endVal,
        "duration": 3000
      }
    }), _vm._ssrNode(" <h6 class=\"title\">" + _vm._s(counter.title) + "</h6>")], 2)]);
  }), 0)])])]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/Counterup.vue?vue&type=template&id=0fc3045c&

// EXTERNAL MODULE: external "vue-count-to"
var external_vue_count_to_ = __webpack_require__(22);
var external_vue_count_to_default = /*#__PURE__*/__webpack_require__.n(external_vue_count_to_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Counterup.vue?vue&type=script&lang=js&

/* harmony default export */ var Counterupvue_type_script_lang_js_ = ({
  components: {
    countTo: external_vue_count_to_default.a
  },
  data() {
    return {
      counterUpContent: [{
        endVal: 8000,
        title: "Partner <br> worldwide"
      }, {
        endVal: 1250,
        title: "employees and <br> staffs"
      }, {
        endVal: 904,
        title: "project completed <br> on 60 countries"
      }]
    };
  }
});
// CONCATENATED MODULE: ./components/Counterup.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Counterupvue_type_script_lang_js_ = (Counterupvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Counterup.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Counterupvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "faf5cad4"
  
)

/* harmony default export */ var Counterup = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=counterup.js.map
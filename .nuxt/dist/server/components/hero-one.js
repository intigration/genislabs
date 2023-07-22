exports.ids = [15];
exports.modules = {

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/HeroOne.vue?vue&type=template&id=4c524686&
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "hero-slider"
  }, [_c('swiper', {
    attrs: {
      "options": _vm.swiperOptions
    }
  }, _vm._l(_vm.heros, function (hero, index) {
    return _c('div', {
      key: index,
      staticClass: "swiper-slide"
    }, [_c('div', {
      staticClass: "hero-slide-item bg-cover",
      style: {
        backgroundImage: `url('${hero.imgSrc}')`
      }
    }, [_c('div', {
      staticClass: "container"
    }, [_c('div', {
      staticClass: "row"
    }, [_c('div', {
      staticClass: "col-12"
    }, [_c('div', {
      staticClass: "hero-slide-content"
    }, [_c('h4', {
      staticClass: "subtitle"
    }, [_vm._v(_vm._s(hero.subTitle))]), _vm._v(" "), _c('h2', {
      staticClass: "title",
      domProps: {
        "innerHTML": _vm._s(hero.title)
      }
    }, [_vm._v(_vm._s(hero.title))]), _vm._v(" "), _c('p', [_vm._v(_vm._s(hero.desc))]), _vm._v(" "), _c('n-link', {
      staticClass: "btn-link",
      attrs: {
        "to": hero.btnUrl
      }
    }, [_vm._v("See Project")])], 1)])])])])]);
  }), 0), _vm._ssrNode(" <div class=\"swiper-pagination d-md-none\"></div> <div class=\"home-slider-prev swiper-button-prev d-md-flex d-none\"><i class=\"icofont-long-arrow-left\"></i></div> <div class=\"home-slider-next swiper-button-next d-md-flex d-none\"><i class=\"icofont-long-arrow-right\"></i></div>")], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/HeroOne.vue?vue&type=template&id=4c524686&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/HeroOne.vue?vue&type=script&lang=js&
/* harmony default export */ var HeroOnevue_type_script_lang_js_ = ({
  data() {
    return {
      swiperOptions: {
        loop: true,
        speed: 1150,
        spaceBetween: 30,
        // Navigation arrows
        navigation: {
          nextEl: '.hero-slider .home-slider-next',
          prevEl: '.hero-slider .home-slider-prev'
        },
        pagination: {
          el: '.hero-slider .swiper-pagination',
          type: 'bullets',
          clickable: 'true'
        }
      },
      heros: [{
        id: 1,
        subTitle: "Residence",
        title: "Dustin Villa, <br> Spain",
        desc: "Combine with ideas of owner, Dustin Mahone. Arquito’s team completed a super villa with many powerful features, help owner really enjoy his life beside the beach",
        btnUrl: "/project",
        imgSrc: "/images/slider/slide-1.jpg"
      }, {
        id: 2,
        subTitle: "Residence",
        title: "Dustin Villa, <br> Spain",
        desc: "Combine with ideas of owner, Dustin Mahone. Arquito’s team completed a super villa with many powerful features, help owner really enjoy his life beside the beach",
        btnUrl: "/project",
        imgSrc: "/images/slider/slide-2.jpg"
      }]
    };
  }
});
// CONCATENATED MODULE: ./components/HeroOne.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_HeroOnevue_type_script_lang_js_ = (HeroOnevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/HeroOne.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_HeroOnevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "742efc4b"
  
)

/* harmony default export */ var HeroOne = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=hero-one.js.map
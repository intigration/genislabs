import Vue from 'vue'
import { wrapFunctional } from './index'

const components = {
  AboutOne: () => import('../..\\components\\AboutOne.vue' /* webpackChunkName: "components/about-one" */).then(c => wrapFunctional(c.default || c)),
  BannerOne: () => import('../..\\components\\BannerOne.vue' /* webpackChunkName: "components/banner-one" */).then(c => wrapFunctional(c.default || c)),
  BlogDetailsPost: () => import('../..\\components\\BlogDetailsPost.vue' /* webpackChunkName: "components/blog-details-post" */).then(c => wrapFunctional(c.default || c)),
  BlogPost: () => import('../..\\components\\BlogPost.vue' /* webpackChunkName: "components/blog-post" */).then(c => wrapFunctional(c.default || c)),
  BlogStyleOne: () => import('../..\\components\\BlogStyleOne.vue' /* webpackChunkName: "components/blog-style-one" */).then(c => wrapFunctional(c.default || c)),
  BlogWithFilter: () => import('../..\\components\\BlogWithFilter.vue' /* webpackChunkName: "components/blog-with-filter" */).then(c => wrapFunctional(c.default || c)),
  BrandLogoCarousel: () => import('../..\\components\\BrandLogoCarousel.vue' /* webpackChunkName: "components/brand-logo-carousel" */).then(c => wrapFunctional(c.default || c)),
  Breadcrumb: () => import('../..\\components\\Breadcrumb.vue' /* webpackChunkName: "components/breadcrumb" */).then(c => wrapFunctional(c.default || c)),
  CommentForm: () => import('../..\\components\\CommentForm.vue' /* webpackChunkName: "components/comment-form" */).then(c => wrapFunctional(c.default || c)),
  Counterup: () => import('../..\\components\\Counterup.vue' /* webpackChunkName: "components/counterup" */).then(c => wrapFunctional(c.default || c)),
  Features: () => import('../..\\components\\Features.vue' /* webpackChunkName: "components/features" */).then(c => wrapFunctional(c.default || c)),
  Footer: () => import('../..\\components\\Footer.vue' /* webpackChunkName: "components/footer" */).then(c => wrapFunctional(c.default || c)),
  GalleryWithFilter: () => import('../..\\components\\GalleryWithFilter.vue' /* webpackChunkName: "components/gallery-with-filter" */).then(c => wrapFunctional(c.default || c)),
  GelleryOne: () => import('../..\\components\\GelleryOne.vue' /* webpackChunkName: "components/gellery-one" */).then(c => wrapFunctional(c.default || c)),
  HeroOne: () => import('../..\\components\\HeroOne.vue' /* webpackChunkName: "components/hero-one" */).then(c => wrapFunctional(c.default || c)),
  MobileNavigation: () => import('../..\\components\\MobileNavigation.vue' /* webpackChunkName: "components/mobile-navigation" */).then(c => wrapFunctional(c.default || c)),
  Navigation: () => import('../..\\components\\Navigation.vue' /* webpackChunkName: "components/navigation" */).then(c => wrapFunctional(c.default || c)),
  OffCanvasMobileMenu: () => import('../..\\components\\OffCanvasMobileMenu.vue' /* webpackChunkName: "components/off-canvas-mobile-menu" */).then(c => wrapFunctional(c.default || c)),
  RelatedBlogPost: () => import('../..\\components\\RelatedBlogPost.vue' /* webpackChunkName: "components/related-blog-post" */).then(c => wrapFunctional(c.default || c)),
  SingleTeamMember: () => import('../..\\components\\SingleTeamMember.vue' /* webpackChunkName: "components/single-team-member" */).then(c => wrapFunctional(c.default || c)),
  TeamOne: () => import('../..\\components\\TeamOne.vue' /* webpackChunkName: "components/team-one" */).then(c => wrapFunctional(c.default || c)),
  Testimonial: () => import('../..\\components\\Testimonial.vue' /* webpackChunkName: "components/testimonial" */).then(c => wrapFunctional(c.default || c)),
  TheHeader: () => import('../..\\components\\TheHeader.vue' /* webpackChunkName: "components/the-header" */).then(c => wrapFunctional(c.default || c)),
  TheHeaderTwo: () => import('../..\\components\\TheHeaderTwo.vue' /* webpackChunkName: "components/the-header-two" */).then(c => wrapFunctional(c.default || c)),
  VideoCallToAction: () => import('../..\\components\\VideoCallToAction.vue' /* webpackChunkName: "components/video-call-to-action" */).then(c => wrapFunctional(c.default || c))
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}

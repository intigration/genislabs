import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _0b0e1d9a = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _ad4ba428 = () => interopDefault(import('../pages/blog.vue' /* webpackChunkName: "pages/blog" */))
const _1f0face1 = () => interopDefault(import('../pages/blog-details.vue' /* webpackChunkName: "pages/blog-details" */))
const _427e44c6 = () => interopDefault(import('../pages/contact.vue' /* webpackChunkName: "pages/contact" */))
const _0809473f = () => interopDefault(import('../pages/project.vue' /* webpackChunkName: "pages/project" */))
const _1fc5c334 = () => interopDefault(import('../pages/project-details.vue' /* webpackChunkName: "pages/project-details" */))
const _1a30cbf8 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _0b0e1d9a,
    name: "about"
  }, {
    path: "/blog",
    component: _ad4ba428,
    name: "blog"
  }, {
    path: "/blog-details",
    component: _1f0face1,
    name: "blog-details"
  }, {
    path: "/contact",
    component: _427e44c6,
    name: "contact"
  }, {
    path: "/project",
    component: _0809473f,
    name: "project"
  }, {
    path: "/project-details",
    component: _1fc5c334,
    name: "project-details"
  }, {
    path: "/",
    component: _1a30cbf8,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}

import Vue from 'vue'
import Router from 'vue-router'

const _7689b144 = () => import('../pages/minniec-project.vue' /* webpackChunkName: "pages/minniec-project" */).then(m => m.default || m)
const _9b66bb40 = () => import('../pages/minniec-branding.vue' /* webpackChunkName: "pages/minniec-branding" */).then(m => m.default || m)
const _6bcda5ad = () => import('../pages/contact.vue' /* webpackChunkName: "pages/contact" */).then(m => m.default || m)
const _4e295fda = () => import('../pages/about.vue' /* webpackChunkName: "pages/about" */).then(m => m.default || m)
const _1cf4589d = () => import('../pages/minniec-photo.vue' /* webpackChunkName: "pages/minniec-photo" */).then(m => m.default || m)
const _3048b5c6 = () => import('../pages/minniec-website.vue' /* webpackChunkName: "pages/minniec-website" */).then(m => m.default || m)
const _3ff78efa = () => import('../pages/projects/project1.vue' /* webpackChunkName: "pages/projects/project1" */).then(m => m.default || m)
const _6de13a9f = () => import('../pages/index.vue' /* webpackChunkName: "pages/index" */).then(m => m.default || m)

Vue.use(Router)


if (process.client) {
  window.history.scrollRestoration = 'manual'
}
const scrollBehavior = function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false

  // if no children detected
  if (to.matched.length < 2) {
    // scroll to the top of the page
    position = { x: 0, y: 0 }
  } else if (to.matched.some((r) => r.components.default.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = { x: 0, y: 0 }
  }

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition
  }

  return new Promise(resolve => {
    // wait for the out transition to complete (if necessary)
    window.$nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash
        // CSS.escape() is not supported with IE and Edge.
        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1))
        }
        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = { selector: hash }
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).')
        }
      }
      resolve(position)
    })
  })
}


export function createRouter () {
  return new Router({
    mode: 'history',
    base: '/',
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,
    routes: [
		{
			path: "/minniec-project",
			component: _7689b144,
			name: "minniec-project"
		},
		{
			path: "/minniec-branding",
			component: _9b66bb40,
			name: "minniec-branding"
		},
		{
			path: "/contact",
			component: _6bcda5ad,
			name: "contact"
		},
		{
			path: "/about",
			component: _4e295fda,
			name: "about"
		},
		{
			path: "/minniec-photo",
			component: _1cf4589d,
			name: "minniec-photo"
		},
		{
			path: "/minniec-website",
			component: _3048b5c6,
			name: "minniec-website"
		},
		{
			path: "/projects/project1",
			component: _3ff78efa,
			name: "projects-project1"
		},
		{
			path: "/",
			component: _6de13a9f,
			name: "index"
		}
    ],
    
    
    fallback: false
  })
}

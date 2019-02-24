import Vue from "vue";
import Router from "vue-router";

const _46d2e6e0 = () =>
  import("../pages/minniec-project.vue" /* webpackChunkName: "pages/minniec-project" */).then(
    m => m.default || m
  );
const _470b44e4 = () =>
  import("../pages/minniec-website.vue" /* webpackChunkName: "pages/minniec-website" */).then(
    m => m.default || m
  );
const _4e295fda = () =>
  import("../pages/about.vue" /* webpackChunkName: "pages/about" */).then(
    m => m.default || m
  );
const _6bcda5ad = () =>
  import("../pages/contact.vue" /* webpackChunkName: "pages/contact" */).then(
    m => m.default || m
  );
const _472773e6 = () =>
  import("../pages/minniec-branding.vue" /* webpackChunkName: "pages/minniec-branding" */).then(
    m => m.default || m
  );
const _46ef15e2 = () =>
  import("../pages/minniec-photo.vue" /* webpackChunkName: "pages/minniec-photo" */).then(
    m => m.default || m
  );
const _6de13a9f = () =>
  import("../pages/index.vue" /* webpackChunkName: "pages/index" */).then(
    m => m.default || m
  );

Vue.use(Router);

if (process.client) {
  window.history.scrollRestoration = "manual";
}
const scrollBehavior = function(to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false;

  // if no children detected
  if (to.matched.length < 2) {
    // scroll to the top of the page
    position = { x: 0, y: 0 };
  } else if (to.matched.some(r => r.components.default.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = { x: 0, y: 0 };
  }

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition;
  }

  return new Promise(resolve => {
    // wait for the out transition to complete (if necessary)
    window.$nuxt.$once("triggerScroll", () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash;
        // CSS.escape() is not supported with IE and Edge.
        if (
          typeof window.CSS !== "undefined" &&
          typeof window.CSS.escape !== "undefined"
        ) {
          hash = "#" + window.CSS.escape(hash.substr(1));
        }
        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = { selector: hash };
          }
        } catch (e) {
          console.warn(
            "Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape)."
          );
        }
      }
      resolve(position);
    });
  });
};

export function createRouter() {
  return new Router({
    mode: "history",
    base: "/",
    linkActiveClass: "nuxt-link-active",
    linkExactActiveClass: "nuxt-link-exact-active",
    scrollBehavior,
    routes: [
      {
        path: "/minniec-project",
        component: _46d2e6e0,
        name: "minniec-project"
      },
      {
        path: "/minniec-website",
        component: _470b44e4,
        name: "minniec-website"
      },
      {
        path: "/about",
        component: _4e295fda,
        name: "about"
      },
      {
        path: "/contact",
        component: _6bcda5ad,
        name: "contact"
      },
      {
        path: "/minniec-branding",
        component: _472773e6,
        name: "minniec-branding"
      },
      {
        path: "/minniec-photo",
        component: _46ef15e2,
        name: "minniec-photo"
      },
      {
        path: "/",
        component: _6de13a9f,
        name: "index"
      }
    ],

    fallback: false
  });
}

import Vue from 'vue'
import router from '@router'
import { sync } from 'vuex-router-sync'
import Fragment from 'vue-fragment'

import store from '@state/store'
import AppLayout from '@src/app.vue'
import * as filters from '@config/filters'

// Globally register all `_base`-prefixed components
import '@components/BaseComponent/_globals'

// Implement Global Filters
// register global utility filters.
Object.keys(filters).forEach((key) => {
  Vue.filter(key, filters[key])
})

Vue.use(Fragment.Plugin)

// Don't warn about using the dev version of Vue in development.
Vue.config.productionTip = process.env.NODE_ENV === 'production'

// If running inside Cypress...
if (process.env.VUE_APP_TEST === 'e2e') {
  // Ensure tests fail when Vue emits an error.
  Vue.config.errorHandler = window.Cypress.cy.onUncaughtException
}

// Expose a factory function that creates a fresh set of store, router
export function createApp() {
  // sync the router with the vuex store.
  // this registers `store.state.route`
  sync(store, router)

  // create the app instance.
  // here we inject the router, store and ssr context to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.
  const app = new Vue({
    router,
    store,
    render: (h) => h(AppLayout),
  })

  // expose the app, the router and the store.
  // note we are not mounting the app here, since bootstrapping will be
  // different depending on whether we are in a browser or on the server.
  return { app, router, store }
}

import store from '@state/store'
import lazyLoadView from '@router/helper/lazyLoadView'

export default [
  {
    path: '/',
    name: 'home',
    component: () =>
      lazyLoadView(import(/* webpackChunkName: "main" */ '@views/home.vue')),
  },
  {
    path: '/profile',
    name: 'profile',
    component: () =>
      lazyLoadView(import(/* webpackChunkName: "main" */ '@views/profile.vue')),
    meta: {
      authRequired: true,
    },
    props: (route) => ({ user: store.state.auth.currentUser || {} }),
  },
  {
    path: '/profile/:username',
    name: 'username-profile',
    component: () =>
      lazyLoadView(import(/* webpackChunkName: "main" */ '@views/profile.vue')),
    meta: {
      authRequired: true,
      // HACK: In order to share data between the `beforeResolve` hook
      // and the `props` function, we must create an object for temporary
      // data only used during route resolution.
      tmp: {},
      beforeResolve(routeTo, routeFrom, next) {
        store
          // Try to fetch the user's information by their username
          .dispatch('users/fetchUser', { username: routeTo.params.username })
          .then((user) => {
            // Add the user to `meta.tmp`, so that it can
            // be provided as a prop.
            routeTo.meta.tmp.user = user
            // Continue to the route.
            next()
          })
          .catch(() => {
            // If a user with the provided username could not be
            // found, redirect to the 404 page.
            next({ name: '404', params: { resource: 'User' } })
          })
      },
    },
    // Set the user from the route params, once it's set in the
    // beforeResolve route guard.
    props: (route) => ({ user: route.meta.tmp.user }),
  },
]

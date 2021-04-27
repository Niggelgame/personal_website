export default {
  target: 'static',
  modern: process.env.NODE_ENV === 'production' && 'client',
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'niggelgame',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      {
        hid: 'og:title',
        name: 'og:title',
        property: 'og:title',
        content: 'niggelgame - Nicolas'
      },
      {
        hid: 'og:site_name',
        name: 'og:site_name',
        property: 'og:site_name',
        content: 'niggelgame - Nicolas'
      },
      {
        hid: 'og:description',
        name: 'og:description',
        property: 'og:description',
        content: "niggelgame's so called portfolio"
      },
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        property: 'twitter:card',
        content: 'summary'
      },
      {
        hid: 'twitter:creator',
        name: 'twitter:creator',
        property: 'twitter:creator',
        content: '@niggelgame'
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/tooltip.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/fontawesome',
    '@nuxtjs/pwa'
  ],

  modules: [],

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  fontawesome: {
    component: 'fa',
    icons: {
      brands: ['faDiscord', 'faTwitch', 'faTwitter']
    }
  }
}

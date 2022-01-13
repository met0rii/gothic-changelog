import redirectSSL from 'redirect-ssl'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - Sefaris',
    title: 'Sefaris',
    htmlAttrs: {
      lang: 'pl'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Najnowsze aktualizacje modyfikacji do Gothica I, Gothica II oraz Gothica III.' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'theme-color', content: '#ffb74d'}
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  pwa: {
    manifest: {
      name: 'Sefaris',
      description: 'Najnowsze aktualizacje modyfikacji do Gothica I, Gothica II oraz Gothica III przygotowane przez Team Sefaris.',
      theme_color: '#ffb74d'
    }
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
    '@nuxtjs/pwa',
    '@nuxtjs/google-gtag',
    ['nuxt-compress',       {
      gzip: {
        threshold: 8192,
      },
      brotli: {
        threshold: 8192,
      },
    }]
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/dayjs',
    '@nuxtjs/google-gtag',
  ],

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    icons: {
      iconfont: "mdi", // default - only for display purposes
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
  env: {
    appUrl: process.env.APP_URL || 'http://localhost:3000'
  },
  // serverMiddleware: [
  //   redirectSSL.create({
  //     enabled: process.env.NODE_ENV === 'production'
  //   }),
  // ],
  'google-gtag':{
    id: 'G-70MWY7X2NK',
    config:{
      send_page_view: true,
    },
    disableAutoPageTrack: false,
   }
}

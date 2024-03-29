import redirectSSL from 'redirect-ssl'
import fs from 'fs';
import path from "path";

const modsDirectory = path.resolve(__dirname, 'static', 'mods');
const mods = fs.readdirSync(modsDirectory).map(x => x.split('.')[0]);
const appUrl = process.env.APP_URL || 'http://localhost:3000';
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
      { name: 'theme-color', content: '#ffb74d'},
      { name: 'twitter:card', content: 'summary_large_image'},
      { name: 'robots', content: 'index, follow' },
      { name: 'og:type', content: 'article' },
      { name: 'og:site_name', content: 'Sefaris - modyfikacje do gier serii Gothic' },
      { name: 'twitter:site', content: 'Sefaris - modyfikacje do gier serii Gothic' },
      { name: 'twitter:creator', content: 'Sefaris' },
      { name: 'revisit-after', content: '7 days'},
      { name: 'keywords', content: 'gothic, modyfikacje, tłumaczenie, new balance, odyseja, gothic II, gothic III, gry, granie, instrukcja, instalacja'}
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  pwa: {
    manifest: {
      lang: 'pl',
      name: 'Sefaris',
      short_name: 'Sefaris',
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
    '@nuxtjs/sitemap'
  ],

  sitemap: {
    hostname: appUrl,
    gzip: true,
    exclude: ['/redirect'],
    routes: [{
      url: '/', lastmod: new Date().toDateString(), changefreq: 'daily', priority: 1
    }, ...mods.map(mod => ({
      url: `/${mod}`,
      lastmod: new Date().toDateString(),
      changefreq: 'daily',
      priority: 1
    }))]
  },

  dayjs: {
    locales: ['pl'],
    defaultLocale: 'pl'
  },

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
    appUrl: appUrl
  },
  serverMiddleware: [
    redirectSSL.create({
      statusCode: 301,
      enabled: process.env.NODE_ENV === 'production'
    }),
  ],
  'google-gtag':{
    id: 'G-70MWY7X2NK',
    config:{
      send_page_view: true,
    },
    disableAutoPageTrack: false,
   }
}

const envPath = `config/.env.${process.env.ENV || 'local'}`
require('dotenv').config({ path: envPath })

export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'lifewear-square',
    meta: [
      { charset: 'utf-8' },
      { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    ],
    script: [
      { src: 'https://polyfill.io/v3/polyfill.min.js?features=default' }
    ],
    bodyAttrs: {
      class: 'js-trackEventScroll',
      'data-measurement-points': '[10, 20, 30, 40, 50, 60, 70, 80, 90, 100]',
      'data-action':'scroll'
    }
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '@/assets/scss/_app.scss',
    '@/assets/scss/swiper.min.css',
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    { src:'~/plugins/app.js', ssr: false }
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    '@nuxtjs/style-resources',
    'nuxt-webfontloader',
    [
      '@nuxtjs/dotenv',
      { filename: envPath }
    ]
  ],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    extractCSS: false,
    transpile: [
      'app',
      'swiper',
      'dom7',
    ],
    babel: {
      presets({ isServer }) {
        return [
          [
            require.resolve('@nuxt/babel-preset-app'),
            // require.resolve('@nuxt/babel-preset-app-edge'), // For nuxt-edge users
            {
              buildTarget: isServer ? 'server' : 'client',
              corejs: { version: 3 }
            }
          ]
        ]
      }
    },
    babelrc: false,
    cacheDirectory: undefined,
    presets: ['@nuxt/babel-preset-app']
  },

  webfontloader: {
    google: {
      families: ['Noto+Serif+JP:wght@600']
    }
  },

  router: {
    base: '/SSG_nuxt-js_boilerplate/',
    trailingSlash: true
  },

  generate: {
    subFolders: true,
    fallback: false,
    concurrency: 1,
    dir: "dist/SSG_nuxt-js_boilerplate/"
  }
}


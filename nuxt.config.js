export default {
  // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
  ssr: false,

  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Ubiquitous Wearable Workshop 2020',
    htmlAttrs: {
      lang: 'ja',
      prefix:
        'og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# website: http://ogp.me/ns/websaite#',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'ユビキタス・ウェアラブル技術に関するワークショップ「UWW2020」を12月12日（土）-13日（日） にオンラインと神戸大学でハイブリッド開催予定',
      },
      // ogp settings
      {
        hid: 'og:site_name',
        property: 'og:site_name',
        content: 'Ubiquitous Wearable Workshop 2020',
      },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      {
        hid: 'og:url',
        property: 'og:url',
        content: process.env.BASE_URL + process.env.BASE_URL_SUFFIX,
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'Ubiquitous Wearable Workshop 2020',
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content:
          'ユビキタス・ウェアラブル技術に関するワークショップ「UWW2020」を12月12日（土）-13日（日） にオンラインと神戸大学でハイブリッド開催予定',
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content:
          process.env.BASE_URL + process.env.BASE_URL_SUFFIX + 'ogp-common.jpg',
      },
      { hid: 'og:locale', property: 'og:locale', content: 'ja_JP' },
      // facebook ogp settings
      { hid: 'fb:app_id', property: 'fb:app_id', content: '503287080465103' },
      {
        hid: 'article:publisher',
        property: 'article:publisher',
        content: 'https://www.facebook.com/tsukalab/',
      },
      // twitter ogp settings
      { hid: 'twitter:card', property: 'twitter:card', content: 'summary' },
      { hid: 'twitter:site', property: 'twitter:site', content: '@tsukalab' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'apple-touch-icon',
        type: 'image/png',
        href:
          process.env.BASE_URL_SUFFIX + 'apple-touch-icon-180x180.png?ver=1.01',
      },
      // import custom fonts
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css2?family=Montserrat&family=Noto+Sans+JP&display=swap',
      },
    ],
  },

  env: {
    baseUrl:
      process.env.NODE_ENV === 'production'
        ? process.env.BASE_URL
        : 'http://localhost:3000',
  },

  router: {
    base:
      process.env.NODE_ENV === 'production' ? process.env.BASE_URL_SUFFIX : '/',
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ['~/assets/styles/main.css'],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: ['~/plugins/components'],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/dotenv',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    'nuxt-fontawesome',
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  /*
   ** FontAwesome
   */
  fontawesome: {
    imports: [
      {
        set: '@fortawesome/free-solid-svg-icons',
        icons: ['faEnvelope'],
      },
    ],
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},
}

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'ws-fe',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', crossorigin: "anonymous", href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css' },
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'primeflex/primeflex.css',
    'primevue/resources/themes/saga-blue/theme.css',
    'primevue/resources/primevue.css',
    'primeicons/primeicons.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/primevue.client.js', mode: 'client' },
    { src: '~/plugins/toast.client.js', mode: 'client' },
    { src: '~/plugins/bus.client.js', mode: 'client' },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // Doc: https://www.primefaces.org/primevue/showcase-v2/#/setup
    'primevue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/auth-next',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: 'http://localhost:8080',
    headers : {
      common: {
        'Accept' : 'application/json',
        'Content-Type': 'application/json'
      }
    }
  },

  router: {
    middleware: ['auth']
  },

  auth: {
    strategies: {
      local: {
        token: {
          property: 'access_token',
          global: true,
          required: true,
          type: 'Bearer'
        },
        refreshToken: {
          property: 'refresh_token',
          // data: 'refresh_token',
          // maxAge: 60 * 60 * 24 * 30
        },
        user: {
          property: '',
          // autoFetch: true
        },
        endpoints: {
          login: { 
            url: 'http://localhost:8080/api/login', 
            method: 'post', 
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, 
            propertyName: 'access_token'
          },
          refresh: { url: '/api/refresh', method: 'post' },
          logout: { url: 'http://localhost:8080/api/logout', method: 'post' },
          user: { 
            url: 'http://localhost:8080/api/users', 
            method: 'get'
          }
        }
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    // https://github.com/primefaces/primevue/issues/844
    transpile: ['primevue'],
  }
}

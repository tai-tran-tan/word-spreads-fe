// require('dotenv').config()
const CONFIG = {
  public: {
    baseURL: process.env.BASE_URL || 'http://localhost:3000',
    baseBackendURL: process.env.BASE_BACKEND_URL || 'http://localhost:8080',
    baseAuthURL: process.env.BASE_AUTH_URL || 'http://keycloak.local.webapp',
    //local development, watch out for credentials 
    keycloak: {
      grant_type: process.env.KEYCLOAK_GRANT_TYPE || 'password',
      client_id: process.env.KEYCLOAK_CLIENT_ID || 'word-spreads-web',
      scope: process.env.KEYCLOAK_SCOPE || 'openid',
      client_secret: process.env.KEYCLOAK_CLIENT_SECRET || '4MaTdYjhCK89J4ZWoV1ePs4a3UkJo9yp'
    }
  },
  private: {
  },
}

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
    { src: '~/plugins/refresh-token.client.js', mode: 'client' },
    { src: '~/plugins/backend.client.js', mode: 'client' },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // '@nuxtjs/dotenv',
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
    baseURL: CONFIG.public.baseBackendURL,
    headers: {
      common: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }
  },

  router: {
    middleware: ['auth']
  },

  auth: {
    // redirect: {
    //   login: '/login',
    //   logout: '/',
    //   callback: '/authenticated',
    //   home: '/'
    // },
    strategies: {
      local: {
        scheme: 'refresh',
        // grantType: CONFIG.private.keycloak.KEYCLOAK_GRANT_TYPE, //check this, currently set in code
        // clientId: CONFIG.private.keycloak.KEYCLOAK_CLIENT_ID,
        token: {
          property: 'access_token',
          global: true,
          required: true,
          type: 'Bearer',
        },
        refreshToken: {
          property: 'refresh_token',
          type: 'Bearer',
          tokenRequired: true,
        },
        user: {
          property: false,
          autoFetch: true
        },
        endpoints: {
          login: {
            url: `${CONFIG.public.baseAuthURL}/realms/WordSpreads/protocol/openid-connect/token`,
            method: 'post',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            // transformRequest: [(data, headers) => new URLSearchParams(data)]
          },
          refresh: {
            baseURL: CONFIG.public.baseAuthURL,
            url: '/realms/WordSpreads/protocol/openid-connect/token',
            method: 'post',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          },
          logout: { url: `${CONFIG.public.baseAuthURL}/realms/WordSpreads/protocol/openid-connect/logout`, method: 'get' },
          user: {
            url: `${CONFIG.public.baseAuthURL}/realms/WordSpreads/protocol/openid-connect/userinfo`, method: 'get',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          }
        },
        autoLogout: false
      },
      openIDConnect: {
        scheme: 'openIDConnect',
        clientId: CONFIG.public.keycloak.client_id,
        user: {
          property: false,
          autoFetch: true
        },
        endpoints: {
          configuration: 'http://keycloak.local.webapp/realms/WordSpreads/.well-known/openid-configuration',
        },
        idToken: {
          property: 'id_token',
          maxAge: 60 * 60 * 24 * 30,
        },
        redirectUri: CONFIG.public.baseURL,
        logoutRedirectUri: CONFIG.public.baseURL
      },
      keycloak: {
        scheme: "oauth2",
        clientId: CONFIG.public.keycloak.client_id,
        user: {
          property: false,
          autoFetch: true
        },
        endpoints: {
          authorization: CONFIG.public.baseAuthURL + '/realms/WordSpreads/protocol/openid-connect/auth',
            // headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
          token: CONFIG.public.baseAuthURL + '/realms/WordSpreads/protocol/openid-connect/token',
          //   method: 'post',
          //   headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
          // },
          userInfo: CONFIG.public.baseAuthURL + '/realms/WordSpreads/protocol/openid-connect/userinfo', 
          logout: CONFIG.public.baseAuthURL + "/realms/WordSpreads/protocol/openid-connect/logout",
        },
        token: {
          property: "access_token",
          maxAge: 60 * 5,
        },
        refreshToken: {
          property: "refresh_token",
          maxAge: 60 * 15,
        },
        // responseType: "code",
        // grantType: "authorization_code",
        scope: ["openid", "profile", "email"],
        codeChallengeMethod: "S256",
        redirectUri: CONFIG.public.baseURL + '/login',
        logoutRedirectUri: CONFIG.public.baseURL
      },
    },

    publicRuntimeConfig: CONFIG.public,
    privateRuntimeConfig: CONFIG.private,

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {
      // https://github.com/primefaces/primevue/issues/844
      transpile: ['primevue'],
    }
  }
}
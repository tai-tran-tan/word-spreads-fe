import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    app: {
        head: {
            link: [
                { rel: 'stylesheet', crossorigin: "anonymous", href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css' },
                { rel: 'stylesheet', crossorigin: "anonymous", href: 'https://unpkg.com/primeflex@3.1.2/primeflex.css' }
            ]
        }
    }
})

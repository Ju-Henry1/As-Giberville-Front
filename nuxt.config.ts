// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      directusUrl: process.env.DIRECTUS_URL
    },
  },
  css: [
    '~/assets/css/global.css'
  ]
})


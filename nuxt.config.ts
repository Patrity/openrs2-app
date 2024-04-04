// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/ui'
  ],
  app: {
    head: {
      titleTemplate: '%s %separator %siteName',
      templateParams: {
        separator: '-'
      }
    }
  },
  devtools: { enabled: true }
})

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/ui',
    '@nuxtjs/seo'
  ],
  site: {
    url: 'https://openrs2.netlify.app',
    name: 'OpenRS2 Archive',
    description: 'The OpenRS2 Archive is a collection of caches and XTEA keys for all versions of RuneScape that use JS5, and its precursor, to manage assets (mainline RuneScape builds 234 and greater, and all builds of Old School RuneScape).',
    defaultLocale: 'en', // not needed if you have @nuxtjs/i18n installed
  },
  app: {
    head: {
      titleTemplate: '%s %separator %siteName',
      templateParams: {
        separator: '-'
      }
    }
  },
  ui: {

  },
  devtools: { enabled: true }
})

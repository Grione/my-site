// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    datoCmsToken: process.env.DATO_CMS_TOKEN,
  },
  devtools: { enabled: true }
})

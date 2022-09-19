import { defineNuxtConfig } from 'nuxt'

export default defineNuxtConfig({
     ssr: false,
     target: 'static',
     app: {
          head: {
               title: "Weather App",
               meta: [
                    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                    { charset: 'UTF-8' }
               ],
               link: [
                    { rel: 'stylesheet', href: './style.css' }
               ],
               noscript: [
                    { children: 'Javascript is required' }
               ]
          },           
     },
     alias: {
          "~~": "./<rootDir>",
          "@@": "./<rootDir>",
          "~": "./<rootDir>",
          "@": "./<rootDir>",
          "assets": "./<rootDir>/assets",
          "public": "./<rootDir>/public"
     }  
})

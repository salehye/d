import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({



  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: ['@nuxt/content', 'shadcn-nuxt'],

  css: [
    './app/assets/css/tailwind.css',
    // './app/assets/css/custom.css'
  ],

  vite: { plugins: [tailwindcss(),], },
  // content: {
  //   sources: {
  //     content: {
  //       driver: 'fs',
  //       base: '~/content'
  //     }
  //   }
  // },
  // modules: ['shadcn-nuxt'],
  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: '',
    /**
     * Directory that the component lives in.
     * @default "./app/components/ui"
     */
    componentDir: './app/components/ui'
  },


  // content: {
  //   database: {
  //     type: 'sqlite',
  //     filename: './.data/content/contents.sqlite'
  //   }
  // }

  content: {
    preview: {
      api: 'https://api.nuxt.studio'
    }
  }
})
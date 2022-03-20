export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: "static",

  router: {
    base: "/princesstreet/",
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "test",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  loading: {
    color: "#FE6601",
    height: "4px",
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["@/assets/css/style.scss"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],

  /*   router: {
    base: "/princesstreet/",
  }, */

  generate: {
    fallback: true, // Uses '404.html' instead of the default '200.html'
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  env: {
    //fixed axios ECONNREFUSED for static local json
    baseUrl: process.env.BASE_URL || "http://localhost:3000",
  },
};

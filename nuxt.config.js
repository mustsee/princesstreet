export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: "static",

  router: {
    base: "/princesstreet/",
  },

  googleAnalytics: {
    asyncID: async () => {
      console.log("googleAnalytics ON");
      return process.env.GA_CODE;
    },
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
      {
        hid: "description",
        name: "description",
        content:
          "Princes Street Hostel is changing with Edinburgh, from Old town to New Town we still are the first hostel ever in Edinburgh and enjoyed a thorough refurbishment in the last few years. We are now reopen to the world visiting the Scottish Capital and looking for a comfortable and cosy place were to rest their head. We are the most central tourist hostel in the Scottish capital. The Princes Street Hostel is right off the Waverley train station and the iconic Balmoral building. As we are overlooking North Bridge which let you go from Old to New town in a brisk.",
      },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/princesstreet/favicon.ico" }, // TODO: Remove prefix princesstreet when needed !
    ],
  },

  loading: {
    color: "#005eb8",
    height: "4px",
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["@/assets/css/style.scss"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ["@nuxtjs/google-analytics"],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],

  generate: {
    fallback: true, // Uses '404.html' instead of the default '200.html'
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};

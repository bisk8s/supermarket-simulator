var GAME_TITLE = "Super market Simulator";

var softConfig = {
  defaultLanguage: "pt-br",
  showLanguageUrl: false,

  documentTitle: "",
  documentTitleSeparator: "",

  pageTitleSeparator: " :: ",

  headTags: [
    /* Do not index */
    {
      type: "meta",
      attributes: [
        { attribute: "name", value: "robots" },
        { attribute: "content", value: "noindex, nofollow" },
      ],
    },
    {
      type: "meta",
      attributes: [
        { attribute: "name", value: "googlebot" },
        { attribute: "content", value: "noindex" },
      ],
    },
    {
      type: "meta",
      attributes: [
        { attribute: "name", value: "googlebot-news" },
        { attribute: "content", value: "noindex" },
      ],
    },
    {
      type: "meta",
      attributes: [
        { attribute: "name", value: "googlebot-news" },
        { attribute: "content", value: "nosnippet" },
      ],
    },

    /* Meta tags */
    { type: "meta", attributes: [{ attribute: "charset", value: "utf-8" }] },
    {
      type: "meta",
      attributes: [
        { attribute: "http-equiv", value: "X-UA-Compatible" },
        { attribute: "content", value: "IE=edge" },
      ],
    },
    {
      type: "meta",
      attributes: [
        { attribute: "name", value: "viewport" },
        {
          attribute: "content",
          value:
            "width=device-width, height=device-height, initial-scale=1, user-scalable=no",
        },
      ],
    },
    {
      type: "meta",
      attributes: [
        { attribute: "name", value: "description" },
        { attribute: "content", value: "" },
      ],
    },

    /* SEO tags */
    {
      type: "meta",
      attributes: [
        { attribute: "property", value: "og:locale" },
        { attribute: "content", value: "pt_BR" },
      ],
    },
    {
      type: "meta",
      attributes: [
        { attribute: "property", value: "og:type" },
        { attribute: "content", value: "website" },
      ],
    },
    {
      type: "meta",
      attributes: [
        { attribute: "property", value: "og:title" },
        { attribute: "content", value: GAME_TITLE },
      ],
    },
    {
      type: "meta",
      attributes: [
        { attribute: "property", value: "og:description" },
        { attribute: "content", value: "" },
      ],
    },
    {
      type: "meta",
      attributes: [
        { attribute: "property", value: "og:url" },
        { attribute: "content", value: "" },
      ],
    },
    {
      type: "meta",
      attributes: [
        { attribute: "property", value: "og:site_name" },
        { attribute: "content", value: GAME_TITLE },
      ],
    },
  ],

  headJsScripts: [],

  blockContextMenu: true,
  blockF12KeyAndCtrlShiftI: true,

  touchCallout: false,
  userSelect: false,
  userDrag: false,

  splashScreen: true,

  bodyJsScripts: [],

  theme: {
    themePath: "grupo-positivo",
    themeFaviconFilePath: "assets/img/favicon.png",

    themeFiles: {
      cssFiles: {
        head: [
          "assets/css/reset.css",
          "assets/css/styles.css",
          "assets/css/responsive.css",
        ],
        body: "",
      },
      jsFiles: {
        head: "",
        body: ["assets/js/theme.js"],
      },
    },
  },

  extensions: [
    {
      extensionName: "html2canvas",
      extensionPath: "",
      extensionVersion: "1.4.1",
      extensionFiles: {
        cssFiles: {
          head: "",
          body: "",
        },
        jsFiles: {
          head: ["html2canvas.min.js"],
          body: "",
        },
      },
      extensionHeadScript: {},
      extensionBodyScript: {},
      extensionActive: true,
    },

    {
      extensionName: "FileSaver",
      extensionPath: "",
      extensionVersion: "",
      extensionFiles: {
        cssFiles: {
          head: "",
          body: "",
        },
        jsFiles: {
          head: ["FileSaver.min.js"],
          body: "",
        },
      },
      extensionHeadScript: {},
      extensionBodyScript: {},
      extensionActive: true,
    },

    {
      extensionName: "GreenSock",
      extensionPath: "GSAP",
      extensionVersion: "3.11.3",
      extensionFiles: {
        cssFiles: {
          head: "",
          body: "",
        },
        jsFiles: {
          head: "",
          body: ["gsap.min.js", "CustomEase.min.js", "Draggable.min.js"],
        },
      },
      extensionHeadScript: {},
      extensionBodyScript: {},
      extensionActive: true,
    },

    {
      extensionName: "howler.js",
      extensionPath: "howler",
      extensionVersion: "2.2.3",
      extensionFiles: {
        cssFiles: {
          head: "",
          body: "",
        },
        jsFiles: {
          head: "",
          body: ["howler.min.js"],
        },
      },
      extensionHeadScript: {},
      extensionBodyScript: {},
      extensionActive: true,
    },
  ],
};

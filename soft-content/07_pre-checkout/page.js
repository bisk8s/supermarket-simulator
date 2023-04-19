var pagePreCheckout = {
  pageLoader: {
    loaderShowMethod: "theme.showLoader()",
    loaderFiles: {
      files: [],
    },
  },

  pageHtml:
    '\
      <div class="soft-scaled" initial-width="1920" initial-height="1080">\
        <div class="message">\
          <div class="message-bg" />\
          <div class="message-text" />\
        </div>\
        <div class="soft-btn btn btn-checkout">\
          <div class="bg" />\
        </div>\
      </div>\
    ',

  pageTemplate: "no-template",

  pageIncludes: [
    {
      includeId: "top-buttons",
      includeHandler: "",
      includeClass: "",
    },
  ],

  pageShowMethod: "theme.preCheckout()",
  pageHideMethod: "",
};

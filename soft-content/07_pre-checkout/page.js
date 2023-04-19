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
        <div class="centred">\
          <div class="logo"></div>\
          <div class="soft-btn btn-intro btn"><div class="bg"></div><p soft-page-content="btnIntro"></p></div>\
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

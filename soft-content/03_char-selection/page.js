var pageCharSelection = {
  pageLoader: {
    loaderShowMethod: "theme.showLoader()",
    loaderFiles: {
      files: [],
    },
  },

  pageHtml:
    '\
      <div class="soft-scaled" initial-width="1920" initial-height="1080">\
        <div class="header" />\
        <div class="title" />\
        <div class="char-container">\
          <div class="char char-f" />\
          <div class="soft-btn btn btn-char btn-f"><div class="bg"/></div>\
        </div>\
        <div class="char-container">\
          <div class="char char-m" />\
          <div class="soft-btn btn btn-char btn-m"><div class="bg"/></div>\
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

  pageShowMethod: "theme.charSelection()",
  pageHideMethod: "",
};

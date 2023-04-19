var pageGameplay = {
  pageLoader: {
    loaderShowMethod: "theme.showLoader()",
    loaderFiles: {
      files: [],
    },
  },

  pageHtml:
    '\
      <div class="soft-scaled" initial-width="1920" initial-height="1080">\
        <div class="prateleiras" />\
        <div class="items">\
        </div>\
        <div class="char">\
          <div class="char-f-a" />\
          <div class="char-f-b" />\
          <div class="char-m-a" />\
          <div class="char-m-b" />\
        </div>\
        <div class="soft-btn btn btn-list" />\
        <div class="profile" >\
          <div class="profile-f" />\
          <div class="profile-m" />\
        </div>\
        <div class="soft-btn btn btn-prev"><div class="bg"/></div>\
        <div class="soft-btn btn btn-next"><div class="bg"/></div>\
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

  pageShowMethod: "theme.gameplay()",
  pageHideMethod: "",
};

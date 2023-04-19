var pageCart = {
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
        <div class="cart-container">\
          <div class="cart" />\
          <div class="soft-btn btn btn-cart btn-f"><div class="bg"/></div>\
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

  pageShowMethod: "theme.cart()",
  pageHideMethod: "",
};

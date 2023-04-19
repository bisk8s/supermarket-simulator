var pageCheckout = {
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
        <div class="cashier" />\
        <div class="scanner" />\
        <div class="scanner-area" />\
        <div class="value-container" />\
        <div class="value" />\
        <div class="table" />\
        <div class="cart-icon" />\
        <div class="items-area">\
          <div class="items-content" />\
        </div>\
        <div class="soft-btn btn btn-left" />\
        <div class="soft-btn btn btn-right" />\
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

  pageShowMethod: "theme.checkout()",
  pageHideMethod: "",
};

var pageCheckoutItem = {
  ...pageCheckout,
  pageShowMethod: "theme.checkoutItems()",
};
var pageCheckoutPayment = {
  ...pageCheckout,
  pageShowMethod: "theme.checkoutPayment()",
};
var pageCheckoutEnd = {
  ...pageCheckout,
  pageShowMethod: "theme.checkoutEnd()",
};

var pageList = {
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
        <div class="list">\
          <div class="list-bg" />\
          <div class="coluna coluna-l">\
            <div class="item"><div class="mark" selected/><div class="description"><p>bread</p></div></div>\
            <div class="item"><div class="mark"/><div class="description"><p>milk</p></div></div>\
            <div class="item"><div class="mark"/><div class="description"><p>milk</p></div></div>\
            <div class="item"><div class="mark"/><div class="description"><p>milk</p></div></div>\
            <div class="item"><div class="mark"/><div class="description"><p>milk</p></div></div>\
            <div class="item"><div class="mark"/><div class="description"><p>milk</p></div></div>\
            <div class="item"><div class="mark"/><div class="description"><p>milk</p></div></div>\
            <div class="item"><div class="mark"/><div class="description"><p>milk</p></div></div>\
            <div class="item"><div class="mark"/><div class="description"><p>milk</p></div></div>\
          </div>\
          <div class="coluna coluna-r">\
            <div class="item"><div class="mark" selected/><div class="description"><p>bread</p></div></div>\
            <div class="item"><div class="mark"/><div class="description"><p>milk</p></div></div>\
            <div class="item"><div class="mark"/><div class="description"><p>milk</p></div></div>\
            <div class="item"><div class="mark"/><div class="description"><p>milk</p></div></div>\
            <div class="item"><div class="mark"/><div class="description"><p>milk</p></div></div>\
            <div class="item"><div class="mark"/><div class="description"><p>milk</p></div></div>\
            <div class="item"><div class="mark"/><div class="description"><p>milk</p></div></div>\
            <div class="item"><div class="mark"/><div class="description"><p>milk</p></div></div>\
            <div class="item"><div class="mark"/><div class="description"><p>milk</p></div></div>\
          </div>\
        </div>\
        <div class="soft-btn btn btn-gameplay">\
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

  pageShowMethod: "theme.list()",
  pageHideMethod: "",
};

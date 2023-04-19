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
        <div class="prateleiras items">\
          <div class="spawn-item abacate" />\
          <div class="spawn-item alface" />\
          <div class="spawn-item banana" />\
          <div class="spawn-item batata" />\
          <div class="spawn-item beterraba" />\
          <div class="spawn-item bife" />\
          <div class="spawn-item biscoito" />\
          <div class="spawn-item bolo" />\
          <div class="spawn-item brocolis" />\
          <div class="spawn-item carne" />\
          <div class="spawn-item cenoura" />\
          <div class="spawn-item coca" />\
          <div class="spawn-item frango" />\
          <div class="spawn-item goiaba" />\
          <div class="spawn-item iogurte" />\
          <div class="spawn-item leite" />\
          <div class="spawn-item limao" />\
          <div class="spawn-item maca" />\
          <div class="spawn-item mexirica" />\
          <div class="spawn-item milho" />\
          <div class="spawn-item pao" />\
          <div class="spawn-item peixe" />\
          <div class="spawn-item peixe i-2" />\
          <div class="spawn-item queijo" />\
          <div class="spawn-item rosquinha" />\
          <div class="spawn-item salmao" />\
          <div class="spawn-item suco-laranja" />\
          <div class="spawn-item suco-limao" />\
          <div class="spawn-item suco-uva" />\
          <div class="spawn-item tomate" />\
          <div class="spawn-item uva" />\
          <div class="char">\
            <div class="char-f-a" />\
            <div class="char-f-b" />\
            <div class="char-m-a" />\
            <div class="char-m-b" />\
          </div>\
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

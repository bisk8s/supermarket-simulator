var softContent = [
  {
    languageLabel: "Pt-Br",
    languageClass: "pt-br",

    contentTitle: GAME_TITLE,

    contentPages: [
      {
        pageTitle: "Splash Screen",
        pageId: "splash-screen",
        pageClass: "",
        pageAttribute: "",
        pageFilePath: "00_splash-screen/page.js",
        pageVarBase: "pageSplashScreen",
        pageActive: true,
        pageContent: {},
      },
      {
        pageTitle: "Capa",
        pageId: "start",
        pageClass: "",
        pageAttribute: "",
        pageFilePath: "01_start/page.js",
        pageVarBase: "pageStart",
        pageActive: true,
        pageContent: {},
      },
      {
        pageTitle: "Abertura",
        pageId: "intro",
        pageClass: "",
        pageAttribute: "",
        pageFilePath: "02_intro/page.js",
        pageVarBase: "pageIntro",
        pageActive: true,
        pageContent: {},
      },
      {
        pageTitle: "Personagens",
        pageId: "char-selection",
        pageClass: "",
        pageAttribute: "",
        pageFilePath: "03_char-selection/page.js",
        pageVarBase: "pageCharSelection",
        pageActive: true,
        pageContent: {},
      },
      {
        pageTitle: "Carrinho",
        pageId: "cart",
        pageClass: "",
        pageAttribute: "",
        pageFilePath: "04_cart/page.js",
        pageVarBase: "pageCart",
        pageActive: true,
        pageContent: {},
      },
      {
        pageTitle: "Lista",
        pageId: "list",
        pageClass: "",
        pageAttribute: "",
        pageFilePath: "05_list/page.js",
        pageVarBase: "pageList",
        pageActive: true,
        pageContent: {},
      },
      {
        pageTitle: "Jogo",
        pageId: "gameplay",
        pageClass: "",
        pageAttribute: "",
        pageFilePath: "06_gameplay/page.js",
        pageVarBase: "pageGameplay",
        pageActive: true,
        pageContent: {},
      },
      {
        pageTitle: "Pre Caixa",
        pageId: "pre-checkout",
        pageClass: "",
        pageAttribute: "",
        pageFilePath: "07_pre-checkout/page.js",
        pageVarBase: "pagePreCheckout",
        pageActive: true,
        pageContent: {},
      },
      {
        pageTitle: "Caixa - Produtos",
        pageId: "checkout-items",
        pageClass: "checkout",
        pageAttribute: "",
        pageFilePath: "08_checkout/page.js",
        pageVarBase: "pageCheckoutItem",
        pageActive: true,
        pageContent: {},
      },
      {
        pageTitle: "Caixa - Pagamento",
        pageId: "checkout-payment",
        pageClass: "checkout",
        pageAttribute: "",
        pageFilePath: "08_checkout/page.js",
        pageVarBase: "pageCheckoutPayment",
        pageActive: true,
        pageContent: {},
      },
      {
        pageTitle: "Caixa - Fim",
        pageId: "checkout-end",
        pageClass: "checkout",
        pageAttribute: "",
        pageFilePath: "08_checkout/page.js",
        pageVarBase: "pageCheckoutEnd",
        pageActive: true,
        pageContent: {},
      },
    ],

    // Templates
    contentTemplates: [
      {
        templateLabel: "",
        templateId: "",
        templateHtml: "",
      },
    ],

    // Includes
    contentIncludes: [
      {
        includeLabel: "Top buttons",
        includeId: "top-buttons",
        includeHtml:
          '\
            <div class="buttons">\
                <div title="Voltar ao início" class="soft-btn btn btn-home"><div class="bg"></div><div class="icon"></div></div>\
                <div title="Créditos" class="soft-btn btn btn-credits"><div class="bg"></div><div class="icon"></div></div>\
                <div title="Ligar/Desligar som" class="soft-btn btn btn-sound sound-on"><div class="bg"></div><div class="icon"></div></div>\
                <div title="Ativar/Desativar tela cheia" class="soft-btn btn btn-fullscreen"><div class="bg"></div><div class="icon"></div></div>\
            </div>',
      },
    ],

    contentGlobal: {
      template: "",

      includes: [
        {
          includeLabel: "Device Rotate",
          includeId: "device-rotate",
          includeClass: "",
          includeHtml: "",
        },
      ],

      overlays: [
        {
          overlayLabel: "Sair e Capa",
          overlayId: "exit-home",
          overlayClass: "",
          overlayContent: {
            title: "Sair do jogo?",
            text: "<p>Se sair agora, sua jornada será perdida.<br/><strong>O que deseja fazer?</strong></p>",
            btnPrev: "Continuar",
            btnNext: "Sair",
          },
        },
        {
          overlayLabel: "Créditos",
          overlayId: "credits",
          overlayClass: "",
          overlayContent: {
            title: "Créditos",
            text: "<p></p>",
            btnPrev: "Fechar",
          },
        },
      ],

      paginationSeparator: "/",

      messages: {
        pageNotFound: "Erro 404. Página não encontrada.",
        pageInactive: "Acesso negado à página.",
        languageNotFound: "Idioma não encontrado.",
      },
    },
  },
];

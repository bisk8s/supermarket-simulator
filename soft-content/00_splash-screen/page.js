var pageSplashScreen = {
  pageLoader: {
    loaderShowMethod: "theme.showLoader()",
    loaderFiles: {
      files: [
        {
          type: "IMAGE",
          source:
            "soft-theme/grupo-positivo/assets/img/splashscreen/logo-aprende-brasil.png",
          size: 38048,
        },

        // intro
        {
          type: "IMAGE",
          source: "soft-theme/grupo-positivo/assets/img/intro/bg.png",
          size: 394169,
        },
        {
          type: "IMAGE",
          source: "soft-theme/grupo-positivo/assets/img/intro/btn.png",
          size: 1418,
        },
        {
          type: "IMAGE",
          source: "soft-theme/grupo-positivo/assets/img/intro/logo.png",
          size: 27384,
        },

        // char selection
        {
          type: "IMAGE",
          source: "soft-theme/grupo-positivo/assets/img/charSelection/Ana.png",
          size: 15921,
        },
        {
          type: "IMAGE",
          source:
            "soft-theme/grupo-positivo/assets/img/charSelection/Anabg.png",
          size: 5897,
        },
        {
          type: "IMAGE",
          source:
            "soft-theme/grupo-positivo/assets/img/charSelection/Botao2.png",
          size: 1075,
        },
        {
          type: "IMAGE",
          source: "soft-theme/grupo-positivo/assets/img/charSelection/Joao.png",
          size: 19948,
        },
        {
          type: "IMAGE",
          source:
            "soft-theme/grupo-positivo/assets/img/charSelection/Joaobg.png",
          size: 6128,
        },
        {
          type: "IMAGE",
          source: "soft-theme/grupo-positivo/assets/img/charSelection/Manu.png",
          size: 27191,
        },
        {
          type: "IMAGE",
          source:
            "soft-theme/grupo-positivo/assets/img/charSelection/Manubg.png",
          size: 5723,
        },

        // audio
        {
          type: "AUDIO",
          sources: {
            mp3: {
              source: "soft-theme/grupo-positivo/assets/medias/bg-sound.mp3",
              size: 3010560,
            },
          },
        },
        {
          type: "AUDIO",
          sources: {
            mp3: {
              source: "soft-theme/grupo-positivo/assets/medias/click.mp3",
              size: 8192,
            },
          },
        },
        {
          type: "AUDIO",
          sources: {
            mp3: {
              source:
                "soft-theme/grupo-positivo/assets/medias/correct-answer.mp3",
              size: 16384,
            },
          },
        },
        {
          type: "AUDIO",
          sources: {
            mp3: {
              source:
                "soft-theme/grupo-positivo/assets/medias/end-game-success.mp3",
              size: 77824,
            },
          },
        },
        {
          type: "AUDIO",
          sources: {
            mp3: {
              source:
                "soft-theme/grupo-positivo/assets/medias/incorrect-answer.mp3",
              size: 8192,
            },
          },
        },
        {
          type: "AUDIO",
          sources: {
            mp3: {
              source:
                "soft-theme/grupo-positivo/assets/medias/overlay-open.mp3",
              size: 8192,
            },
          },
        },
      ],
    },
  },

  pageHtml: '<div class="logo-aprende-brasil"></div>',

  pageTemplate: "no-template",

  pageIncludes: [],

  pageShowMethod: "theme.splashScreen()",
  pageHideMethod: "",
};

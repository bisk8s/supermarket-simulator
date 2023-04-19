var theme = {
  version: "1.0.0",

  // Variáveis globais
  vars: {
    globalOverlayShow: false,
    char: "f",
    list: [
      "abacate",
      "alface",
      "tomate",
      "beterraba",
      "bife",
      "biscoito",
      "bolo",
      "brocolis",
      "carne",
      "cenoura",
      "frango",
      "goiaba",
      "leite",
      "maca",
      "mexirica",
      "milho",
      "pao",
      "peixe",
      "salmao",
      "suco-laranja",
      "suco-uva",
    ],
    cart: [],
  },

  audios: {
    bg: new Howl({
      src: ["soft-theme/grupo-positivo/assets/medias/bg-sound.mp3"],
      loop: true,
      volume: 0.4,
      onend: function () {},
    }),
    click: new Howl({
      src: ["soft-theme/grupo-positivo/assets/medias/click.mp3"],
      loop: false,
      volume: 0.2,
      onend: function () {},
    }),
    overlayOpen: new Howl({
      src: ["soft-theme/grupo-positivo/assets/medias/overlay-open.mp3"],
      loop: false,
      volume: 1,
      onend: function () {},
    }),
    correctAnswer: new Howl({
      src: ["soft-theme/grupo-positivo/assets/medias/correct-answer.mp3"],
      loop: false,
      volume: 0.6,
      onend: function () {},
    }),
    incorrectAnswer: new Howl({
      src: ["soft-theme/grupo-positivo/assets/medias/incorrect-answer.mp3"],
      loop: false,
      volume: 0.6,
      onend: function () {},
    }),
    endGameSuccess: new Howl({
      src: ["soft-theme/grupo-positivo/assets/medias/end-game-success.mp3"],
      loop: false,
      volume: 1,
      onend: function () {},
    }),
  },

  // Método inicial
  init: function () {},

  // Método para exibir o preloader
  // ** NÃO ALTERAR **
  showLoader: function () {
    $("body#soft > main").append(
      '<div id="soft-loader"><div></div></div></main>'
    );
    gsap.to($("body#soft > main > #soft-loader"), {
      duration: 0.5,
      delay: 0,
      autoAlpha: 1,
      ease: "power4.out",
      onComplete: function () {},
    });
  },

  // Método útil para ações comuns em todas ou na maioria das telas
  default: function () {
    if (!theme.audios.bg.playing()) {
      theme.audios.bg.play();
    }

    $("#soft main #soft-pages .soft-current-page *").each(function () {
      if ($(this).attr("soft-global-content") != undefined) {
        if ($(this).attr("soft-global-content") == "title") {
          $(this).html(softContent[soft.languageIndex].contentTitle);
          $(this).val(softContent[soft.languageIndex].contentTitle);
        }
      }
      if ($(this).attr("soft-page-content") != undefined) {
        $(this).html(soft.pageContent[$(this).attr("soft-page-content")]);
        $(this).val(soft.pageContent[$(this).attr("soft-page-content")]);
      }
    });

    // Caso a hash mude pra qualquer outra página
    $(window).on("hashchange", function () {
      if (theme.vars.pageOverlayShow == true) theme.pageOverlay("hide");
      if (theme.vars.globalOverlayShow == true) theme.globalOverlay("hide");
    });

    gsap.to($("#soft main #soft-pages .soft-current-page"), {
      delay: 1,
      duration: 0.5,
      autoAlpha: 1,
      scale: 1,
      ease: "expo.out",
      onComplete: function () {},
    });
  },

  // Método útil para ações após o final das transições de telas e elementos
  endTransition: function () {
    soft.blockAll(false);

    $("body#soft > main > #soft-loader").remove();

    $("#soft main .btn").addClass("ease");

    // Click dos botões
    $(document)
      .off("click", "#soft main .btn")
      .on("click", "#soft main .btn", function () {
        if (theme.vars.initApp == false) theme.audios.click.play();
      });
  },

  // Método para avançar telas
  nextPage: function () {
    soft.blockAll(true);

    gsap.to($("#soft main #soft-pages .soft-page"), {
      delay: 0,
      duration: 0.5,
      autoAlpha: 0,
      scale: 2,
      ease: "expo.out",
      onComplete: function () {
        soft.nextPage();
      },
    });
  },

  // Método para voltar telas
  prevPage: function () {
    soft.blockAll(true);

    gsap.to($("#soft main #soft-pages .soft-page"), {
      delay: 0,
      duration: 0.5,
      autoAlpha: 0,
      scale: 2,
      ease: "expo.out",
      onComplete: function () {
        soft.prevPage();
      },
    });
  },

  // Método para ir à uma tela específica
  goToPage: function (id) {
    soft.blockAll(true);

    gsap.to($("#soft main #soft-pages .soft-page"), {
      delay: 0,
      duration: 0.5,
      autoAlpha: 0,
      scale: 2,
      ease: "expo.out",
      onComplete: function () {
        soft.goToPage(id);
      },
    });
  },

  // Método do Overlay global
  globalOverlay: function (action, globalOverlayIndex) {
    theme.vars.globalOverlayShow = true;

    theme.audios.overlayOpen.play();

    if (action == "show") {
      $("#soft main").append(
        '\
        <div id="' +
          softContent[soft.languageIndex].contentGlobal.overlays[
            globalOverlayIndex
          ].overlayId +
          '" class="overlay">\
          <div class="wrap-scaled soft-scaled" initial-width="1920" initial-height="1080">\
            <div class="content-box">\
              <h2 soft-page-content="title">' +
          softContent[soft.languageIndex].contentGlobal.overlays[
            globalOverlayIndex
          ].overlayContent.title +
          '</h2>\
              <div soft-page-content="text">' +
          softContent[soft.languageIndex].contentGlobal.overlays[
            globalOverlayIndex
          ].overlayContent.text +
          '</div>\
              <div class="buttons">\
                <div class="soft-btn btn-prev btn ease"><div class="bg"></div><p>' +
          softContent[soft.languageIndex].contentGlobal.overlays[
            globalOverlayIndex
          ].overlayContent.btnPrev +
          '</p></div>\
                <div class="soft-btn btn-next btn ease"><div class="bg"></div><p>' +
          softContent[soft.languageIndex].contentGlobal.overlays[
            globalOverlayIndex
          ].overlayContent.btnNext +
          "</p></div>\
              </div>\
            </div>\
          </div>\
        </div>\
      "
      );

      soft.toScale();

      gsap.to(
        $(
          "#soft > main > #" +
            softContent[soft.languageIndex].contentGlobal.overlays[
              globalOverlayIndex
            ].overlayId
        ),
        {
          delay: 0,
          duration: 0.5,
          autoAlpha: 1,
          scale: 1,
          ease: "expo.out",
          onComplete: function () {},
        }
      );
    } else if (action == "hide") {
      if (globalOverlayIndex == undefined) {
        gsap.to($("#soft > main > .overlay"), {
          delay: 0,
          duration: 0.5,
          autoAlpha: 0,
          scale: 1.5,
          ease: "expo.in",
          onComplete: function () {
            $("#soft > main > .overlay").remove();
            theme.vars.globalOverlayShow = false;
          },
        });
      } else {
        gsap.to(
          $(
            "#soft > main > #" +
              softContent[soft.languageIndex].contentGlobal.overlays[
                globalOverlayIndex
              ].overlayId
          ),
          {
            delay: 0,
            duration: 0.5,
            autoAlpha: 0,
            scale: 1.5,
            ease: "expo.out",
            onComplete: function () {
              $(
                "#soft > main > #" +
                  softContent[soft.languageIndex].contentGlobal.overlays[
                    globalOverlayIndex
                  ].overlayId
              ).remove();
              theme.vars.globalOverlayShow = false;
            },
          }
        );
      }
    }

    $(document)
      .off("click", "#soft > main > .overlay .btn-prev")
      .on("click", "#soft > main > .overlay .btn-prev", function () {
        theme.globalOverlay("hide");
      });

    $(document)
      .off("click", "#soft > main > .overlay .btn-next")
      .on("click", "#soft > main > .overlay .btn-next", function () {
        theme.resetVars();
        theme.globalOverlay("hide");
        gsap.to($(document), {
          delay: 0.5,
          duration: 0,
          onComplete: function () {
            theme.goToPage("start");
          },
        });
      });
  },

  // Método da tela SplashScreen
  splashScreen: function () {
    theme.default();

    gsap.to($("#soft main #soft-pages #splash-screen .logo-aprende-brasil"), {
      delay: 1,
      duration: 0.8,
      scale: 1,
      ease: "expo.out",
      onComplete: function () {},
    });
    gsap.to($("#soft main #soft-pages #splash-screen .logo-aprende-brasil"), {
      delay: 2,
      duration: 0.8,
      autoAlpha: 0,
      scale: 2,
      ease: "expo.out",
      onComplete: function () {
        soft.nextPage();
      },
    });
  },

  start: function () {
    theme.default();
    function step1() {
      var tl = gsap.timeline();
      const $logo = $("#soft-pages #start .logo-game");
      tl.to($logo, {
        duration: 1,
        scale: 1,
        opacity: 1,
        ease: "expo.out",
        onComplete: step2,
      });
    }
    function step2() {
      const $btn = $("#soft-pages #start .btn-next");
      fancyShow($btn, step3);
    }
    function step3() {
      theme.endTransition();
      const $btn = $("#soft-pages #start .btn-next");
      $btn.one("click", function () {
        theme.goToPage("intro");
      });
    }
    step1();
  },
  intro: function () {
    theme.default();
    function step1() {
      const $bg = $("#soft-pages #intro .bg-intro");
      const $content = $("#soft-pages #intro .content");
      var tl = gsap.timeline();
      tl.to($bg, {
        delay: 2,
        duration: 1,
        left: 0,
        opacity: 1,
        ease: "expo.out",
      })
        .to($content, {
          duration: 1,
          scale: 1,
          opacity: 1,
          ease: "expo.out",
        })
        .to($content, {
          delay: 1,
          duration: 1,
          scale: 0,
          opacity: 0,
          ease: "expo.out",
        })
        .to($bg, {
          duration: 1,
          left: 2000,
          opacity: 0,
          ease: "expo.out",
          onComplete: step2,
        });
    }
    function step2() {
      theme.endTransition();
      theme.goToPage("char-selection");
    }
    step1();
  },
  charSelection: function () {
    theme.default();
    function step1() {
      const $header = $("#soft-pages #char-selection .header");
      const $title = $("#soft-pages #char-selection .title");
      const $charF = $("#soft-pages #char-selection .char-f");
      const $charM = $("#soft-pages #char-selection .char-m");
      const $btnF = $("#soft-pages #char-selection .btn-f");
      const $btnM = $("#soft-pages #char-selection .btn-m");

      var tl = gsap.timeline();
      tl.to($header, {
        delay: 2,
        height: 85,
        ease: "expo.out",
      })
        .to($title, {
          duration: 1,
          scale: 1,
          opacity: 1,
          ease: "expo.out",
        })
        .to($btnF, {
          duration: 0.5,
          scale: 1,
          opacity: 1,
          ease: "expo.out",
        })
        .to($charF, {
          duration: 0.5,
          scale: 1,
          opacity: 1,
          ease: "expo.out",
        })
        .to($btnM, {
          duration: 0.5,
          scale: 1,
          opacity: 1,
          ease: "expo.out",
        })
        .to($charM, {
          duration: 0.5,
          scale: 1,
          opacity: 1,
          ease: "expo.out",
          onComplete: step2,
        });
    }
    function step2() {
      theme.endTransition();

      const $btnF = $("#soft-pages #char-selection .btn-f");
      $btnF.one("click", function () {
        $btnM.off("click");
        theme.vars.char = "f";
        theme.goToPage("cart");
      });

      const $btnM = $("#soft-pages #char-selection .btn-m");
      $btnM.one("click", function () {
        $btnF.off("click");
        theme.vars.char = "m";
        theme.goToPage("cart");
      });
    }
    step1();
  },
  cart: function () {
    theme.default();
    function step1() {
      const $header = $("#soft-pages #cart .header");
      const $title = $("#soft-pages #cart .title");
      const $cart = $("#soft-pages #cart .cart");
      const $btnCart = $("#soft-pages #cart .btn-cart");

      var tl = gsap.timeline();
      tl.to($header, {
        delay: 2,
        height: 85,
        ease: "expo.out",
      })
        .to($title, {
          duration: 1,
          scale: 1,
          opacity: 1,
          ease: "expo.out",
        })
        .to($btnCart, {
          duration: 0.5,
          scale: 1,
          opacity: 1,
          ease: "expo.out",
        })
        .to($cart, {
          duration: 0.5,
          scale: 1,
          opacity: 1,
          ease: "expo.out",
          onComplete: step2,
        });
    }
    function step2() {
      theme.endTransition();

      const $btnCart = $("#soft-pages #cart .btn-cart");
      $btnCart.one("click", function () {
        theme.goToPage("list");
      });
    }
    step1();
  },
  list: function () {
    theme.default();
    function step1() {
      const $header = $("#soft-pages #list .header");
      const $title = $("#soft-pages #list .title");
      const $btn = $("#soft-pages #list .btn-gameplay");

      var tl = gsap.timeline();
      tl.to($header, {
        delay: 2,
        height: 85,
        ease: "expo.out",
      }).to($title, {
        duration: 1,
        scale: 1,
        opacity: 1,
        ease: "expo.out",
        onComplete: function () {
          fancyShow($btn, step2);
        },
      });
    }
    function step2() {
      theme.endTransition();

      const $btn = $("#soft-pages #list .btn-gameplay");
      $btn.one("click", function () {
        theme.goToPage("gameplay");
      });
    }
    step1();
  },
  preCheckout: function () {
    theme.default();
    function step1() {
      const $messageBg = $("#soft-pages #pre-checkout .message-bg");
      const $messageText = $("#soft-pages #pre-checkout .message-text");
      const $btn = $("#soft-pages #pre-checkout .btn-checkout");

      var tl = gsap.timeline();
      tl.to($messageBg, {
        delay: 2,
        duration: 1,
        scale: 1,
        opacity: 1,
        ease: "expo.out",
      }).to($messageText, {
        duration: 1,
        scale: 1,
        opacity: 1,
        ease: "expo.out",
        onComplete: function () {
          fancyShow($btn, step2);
        },
      });
    }
    function step2() {
      theme.endTransition();

      const $btn = $("#soft-pages #pre-checkout .btn-checkout");
      $btn.one("click", function () {
        theme.goToPage("checkout");
      });
    }
    step1();
  },

  gameplay: function () {
    theme.default();
    function step1() {
      const char = theme.vars.char;
      const $profile = $("#soft-pages #gameplay .profile-" + char);
      const $btn = $("#soft-pages #gameplay .btn-list");

      var tl = gsap.timeline();
      tl.to($profile, {
        delay: 2,
        duration: 1,
        scale: 1,
        opacity: 1,
        ease: "expo.out",
        onComplete: function () {
          fancyShow($btn, step2);
        },
      });
    }
    function step2() {
      theme.endTransition();

      const $btn = $("#soft-pages #gameplay .btn-list");
      $btn.one("click", function () {
        theme.goToPage("list");
      });

      const $prateleira = $("#soft-pages #gameplay .prateleiras");
      const $spawn = $("#soft-pages #gameplay .spawn-item");
      $spawn.off("mousedown");
      $spawn.on("mousedown", function (e) {
        gsap.to($spawn, { scale: 0 });
        const event = e.originalEvent;
        const $this = $(this);

        const top = +$this.css("top").replace("px", "");
        const left = +$this.css("left").replace("px", "");
        const target = {
          left: event.layerX + left,
          top: event.layerY + top,
        };

        const classAttr = $this.attr("class").replace("spawn", "drag");
        const $newItem = $('<div class="' + classAttr + '"></div>');

        $prateleira.append($newItem);
        $newItem.css(target);
        gsap.to($newItem, {
          ...target,
          opacity: 1,
          scale: 1,
          duration: 0.2,
          onComplete: function () {
            $prateleira.on("mousemove", function (e) {
              const event = e.originalEvent;
              const target = { left: event.layerX, top: event.layerY };
              var tl = gsap.timeline();
              tl.to($newItem, { ...target, duration: 0.5 }, "someLabel");
            });
          },
        });

        $(document).one("mouseup", function () {
          $prateleira.off("mousemove");
          gsap.to($newItem, {
            opacity: 0,
            scale: 0,
            onComplete: function () {
              gsap.to($spawn, { scale: 1 });
              $newItem.remove();
            },
          });
        });
      });

      setupControlls();
    }

    function setupControlls() {
      const $prateleira = $("#soft-pages #gameplay .prateleiras");
      const $btnNext = $("#soft-pages #gameplay .btn-next");
      const $btnPrev = $("#soft-pages #gameplay .btn-prev");

      const pos = $prateleira.position();

      if (pos.left > -1332) {
        fancyShow($btnNext);
        $btnNext.one("click", function () {
          hideButtons();
          gsap.to($prateleira, {
            x: "-=1080",
            duration: 1,
            onComplete: setupControlls,
          });
        });
      }

      if (pos.left < 0) {
        fancyShow($btnPrev);
        $btnPrev.one("click", function () {
          hideButtons();
          gsap.to($prateleira, {
            x: "+=1080",
            duration: 1,
            onComplete: setupControlls,
          });
        });
      }

      function hideButtons() {
        $btnNext.off("click");
        $btnPrev.off("click");
        gsap.to($btnNext, { scale: 0, alpha: 0, duration: 0.2 });
        gsap.to($btnPrev, { scale: 0, alpha: 0, duration: 0.2 });
      }
    }

    step1();
  },
  checkout: function () {},

  resetVars: function () {
    theme.vars = {
      ...themetheme.vars,
      ...{ char: "f" },
    };
  },
};

$(document).on("ready", function () {
  theme.init();
});

// Botão Home/Sair
$(document)
  .off("click", "#soft .btn-home")
  .on("click", "#soft .btn-home", function () {
    theme.globalOverlay("show", 0);
  });

// Botão Créditos
$(document)
  .off("click", "#soft .btn-credits")
  .on("click", "#soft .btn-credits", function () {
    theme.globalOverlay("show", 1);
  });

// Botão Som
$(document)
  .off("click", "#soft .btn-sound")
  .on("click", "#soft .btn-sound", function () {
    if (Howler._muted == false) {
      $(this).removeClass("sound-on").addClass("sound-off");
      Howler.mute(true);
    } else {
      $(this).removeClass("sound-off").addClass("sound-on");
      Howler.mute(false);
    }
  });

// Botão Fullscreen
$(document)
  .off("click", "#soft .btn-fullscreen")
  .on("click", "#soft .btn-fullscreen", function () {
    if ($("body").hasClass("fullscreen")) soft.fullScreen("off");
    else soft.fullScreen("on");
  });

function ratClone(obj) {
  return JSON.parse(JSON.stringify(obj));
}

function fancyShow(element, onComplete = null) {
  var tl = gsap.timeline();
  tl.to(element, { opacity: 0, duration: 0.0 }).to(element, {
    opacity: 1,
    duration: 0.5,
  });

  var tl3 = gsap.timeline();
  tl3
    .to(element, { scale: 0, duration: 0 })
    .to(element, { scale: 1, duration: 0.5 });

  var tl2 = gsap.timeline();
  tl2
    .to(element, { rotate: -2, duration: 0.1 })
    .to(element, { rotate: 0, duration: 0.1 })
    .to(element, { skewX: -10, duration: 0.1 })
    .to(element, { skewX: 0, duration: 0.1 })
    .to(element, { skewY: -5, duration: 0.1 })
    .to(element, { skewY: 0, duration: 0.1 })
    .to(element, { rotation: 2, duration: 0.1 })
    .to(element, { rotation: 0, duration: 0.1, onComplete: onComplete });
}

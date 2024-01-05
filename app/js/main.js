const tabs = document.getElementsByClassName("services__tab-top");
const servicesBtn = document.querySelectorAll(".services__tab-button");
const servicesItem = document.querySelectorAll(".services__item");
const masterItems = document.querySelectorAll(".cost__master-item");
const topmasterBtn = document.querySelector(".cost__master-item--topmaster");
const masterBtn = document.querySelector(".cost__master-item--master");
const costMaster = document.querySelectorAll(".cost__item-master");
const costTopmaster = document.querySelectorAll(".cost__item-topmaster");
const cost = document.getElementsByClassName("cost__item-top");
const portfolioBtn = document.querySelectorAll(".portfolio__button");
const sliders = document.querySelectorAll(".portfolio-slider");
const questions = document.getElementsByClassName("questions__item-top");
const footer = document.getElementsByClassName("footer-dropdown__item-top");
const reviewBtn = document.querySelectorAll(".review__button");
const header = document.getElementsByClassName("header-menu__item-top");
const headerBtn = document.querySelector(".header-menu__button");
const headerMenu = document.querySelector(".header-menu");
const slogan = document.querySelector(".slogan");
const technology = document.querySelector(".technology");
const headerWhite = document.querySelector(".header");
const topSection = document.querySelector(".top");
const aboutBrow = document.querySelector(".about-service");
const master = document.querySelector(".master");
const portfolioPage = document.querySelector(".portfolio-page");
const formDropdownTop = document.querySelectorAll(".form-dropdown__top");
const formItems = document.querySelectorAll(".form-dropdown__list li");
const modalClose = document.querySelectorAll(".modal__close");
const modal = document.querySelector(".modal");
const modal1 = document.querySelector(".modal-1");
const modal2 = document.querySelector(".modal-2");
const modal2Btn = document.querySelectorAll(".modal-2__open");
const modal1Btn = document.querySelectorAll(".modal-1__open");
const thanksBtn = document.querySelectorAll(".thanks__button");
const form = document.querySelector(".form");
const posts = document.querySelector(".posts");
const costPage = document.querySelector(".cost-page");
const headerCheck = document.querySelector(".header-check");
const videosBtn = document.querySelectorAll(".videos-inner");
const videosPlay = document.querySelectorAll(".videos__play");
const videosItem = document.querySelectorAll(".videos-inner video");
const reviewInner = document.querySelectorAll(".review__item-video-inner");
const reviewPlay = document.querySelectorAll(".review__item-video__play");
const reviewItem = document.querySelectorAll(".review__item-video-inner video");
const reviewAudioPlay = document.querySelectorAll(".review__item-voice-inner");
const reviewAudio = document.querySelectorAll(
  ".review__item-voice-inner audio"
);

if (master) {
  $(".master-content").slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    infinite: false,
    dots: true,
    appendDots: $(".master-dots"),
    appendArrows: $(".master-nav"),
    nextArrow:
      '<button type="button" class="slick-next"><img src="http://test999.hhos.net/wp-content/themes/EniBrow/assets/img/arrow-right.svg" /></button>',
    prevArrow:
      '<button type="button" class="slick-prev"><img src="http://test999.hhos.net/wp-content/themes/EniBrow/assets/img/arrow-left.svg" /></button>',
    responsive: [
      {
        breakpoint: 1450,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 950,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
}

if (portfolioPage) {
  if (window.innerWidth < 750) {
    $(".portfolio-slider-1").slick({
      adaptiveHeight: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: false,
      dots: true,
      appendDots: $(".portfolio-slider-1-dots"),
      appendArrows: $(".portfolio-slider-1-nav"),
      nextArrow:
        '<button type="button" class="slick-next"><img src="http://test999.hhos.net/wp-content/themes/EniBrow/assets/img/arrow-right.svg" /></button>',
      prevArrow:
        '<button type="button" class="slick-prev"><img src="http://test999.hhos.net/wp-content/themes/EniBrow/assets/img/arrow-left.svg" /></button>',
    });

    $(".portfolio-slider-2").slick({
      adaptiveHeight: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: false,
      dots: true,
      appendDots: $(".portfolio-slider-2-dots"),
      appendArrows: $(".portfolio-slider-2-nav"),
      nextArrow:
        '<button type="button" class="slick-next"><img src="http://test999.hhos.net/wp-content/themes/EniBrow/assets/img/arrow-right.svg" /></button>',
      prevArrow:
        '<button type="button" class="slick-prev"><img src="http://test999.hhos.net/wp-content/themes/EniBrow/assets/img/arrow-left.svg" /></button>',
    });

    $(".portfolio-slider-3").slick({
      adaptiveHeight: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: false,
      dots: true,
      appendDots: $(".portfolio-slider-3-dots"),
      appendArrows: $(".portfolio-slider-3-nav"),
      nextArrow:
        '<button type="button" class="slick-next"><img src="http://test999.hhos.net/wp-content/themes/EniBrow/assets/img/arrow-right.svg" /></button>',
      prevArrow:
        '<button type="button" class="slick-prev"><img src="http://test999.hhos.net/wp-content/themes/EniBrow/assets/img/arrow-left.svg" /></button>',
    });

    $(".portfolio-slider-4").slick({
      adaptiveHeight: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: false,
      dots: true,
      appendDots: $(".portfolio-slider-4-dots"),
      appendArrows: $(".portfolio-slider-4-nav"),
      nextArrow:
        '<button type="button" class="slick-next"><img src="http://test999.hhos.net/wp-content/themes/EniBrow/assets/img/arrow-right.svg" /></button>',
      prevArrow:
        '<button type="button" class="slick-prev"><img src="http://test999.hhos.net/wp-content/themes/EniBrow/assets/img/arrow-left.svg" /></button>',
    });
  }
  portfolioBtn.forEach((e) => {
    e.addEventListener("click", () => {
      portfolioBtn.forEach((e) => {
        e.classList.remove("portfolio__button--active");
      });
      e.classList.add("portfolio__button--active");
    });
  });

  document.querySelector("#slider-1").addEventListener("click", () => {
    sliders.forEach((e) => {
      e.classList.add("hidden");
    });
    document
      .querySelector(".portfolio-slider-1-inner")
      .classList.remove("hidden");
    $(".portfolio-slider-1").slick("setPosition");
  });

  document.querySelector("#slider-2").addEventListener("click", () => {
    sliders.forEach((e) => {
      e.classList.add("hidden");
    });
    document
      .querySelector(".portfolio-slider-2-inner")
      .classList.remove("hidden");
    $(".portfolio-slider-2").slick("setPosition");
  });

  document.querySelector("#slider-3").addEventListener("click", () => {
    sliders.forEach((e) => {
      e.classList.add("hidden");
    });
    document
      .querySelector(".portfolio-slider-3-inner")
      .classList.remove("hidden");
    $(".portfolio-slider-3").slick("setPosition");
  });

  document.querySelector("#slider-4").addEventListener("click", () => {
    sliders.forEach((e) => {
      e.classList.add("hidden");
    });
    document
      .querySelector(".portfolio-slider-4-inner")
      .classList.remove("hidden");
    $(".portfolio-slider-4").slick("setPosition");
  });
}
for (i = 0; i < header.length; i++) {
  header[i].addEventListener("click", function () {
    this.classList.toggle("header-menu__item-top--active");
    this.parentElement.classList.toggle("header-menu__item--active");
    let panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}
for (i = 0; i < footer.length; i++) {
  footer[i].addEventListener("click", function () {
    this.classList.toggle("services__tab-top--active");
    this.parentElement.classList.toggle("footer-dropdown__item-top--active");
    let panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

if (topSection) {
  if (aboutBrow) {
    if (window.innerWidth < 900) {
      $(".about-service__img").appendTo(".about-service-box");
    }
  }
  $(".portfolio-slider-1").slick({
    adaptiveHeight: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    infinite: false,
    dots: true,
    appendDots: $(".portfolio-slider-1-dots"),
    appendArrows: $(".portfolio-slider-1-nav"),
    nextArrow:
      '<button type="button" class="slick-next"><img src="http://test999.hhos.net/wp-content/themes/EniBrow/assets/img/arrow-right.svg" /></button>',
    prevArrow:
      '<button type="button" class="slick-prev"><img src="http://test999.hhos.net/wp-content/themes/EniBrow/assets/img/arrow-left.svg" /></button>',
    responsive: [
      {
        breakpoint: 1050,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  $(".portfolio-slider-2").slick({
    adaptiveHeight: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    infinite: false,
    dots: true,
    appendDots: $(".portfolio-slider-2-dots"),
    appendArrows: $(".portfolio-slider-2-nav"),
    nextArrow:
      '<button type="button" class="slick-next"><img src="http://test999.hhos.net/wp-content/themes/EniBrow/assets/img/arrow-right.svg" /></button>',
    prevArrow:
      '<button type="button" class="slick-prev"><img src="http://test999.hhos.net/wp-content/themes/EniBrow/assets/img/arrow-left.svg" /></button>',
    responsive: [
      {
        breakpoint: 1050,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  $(".portfolio-slider-3").slick({
    adaptiveHeight: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    infinite: false,
    dots: true,
    appendDots: $(".portfolio-slider-3-dots"),
    appendArrows: $(".portfolio-slider-3-nav"),
    nextArrow:
      '<button type="button" class="slick-next"><img src="http://test999.hhos.net/wp-content/themes/EniBrow/assets/img/arrow-right.svg" /></button>',
    prevArrow:
      '<button type="button" class="slick-prev"><img src="http://test999.hhos.net/wp-content/themes/EniBrow/assets/img/arrow-left.svg" /></button>',
    responsive: [
      {
        breakpoint: 1050,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  $(".portfolio-slider-4").slick({
    adaptiveHeight: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    infinite: false,
    dots: true,
    appendDots: $(".portfolio-slider-4-dots"),
    appendArrows: $(".portfolio-slider-4-nav"),
    nextArrow:
      '<button type="button" class="slick-next"><img src="http://test999.hhos.net/wp-content/themes/EniBrow/assets/img/arrow-right.svg" /></button>',
    prevArrow:
      '<button type="button" class="slick-prev"><img src="http://test999.hhos.net/wp-content/themes/EniBrow/assets/img/arrow-left.svg" /></button>',
    responsive: [
      {
        breakpoint: 1050,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  portfolioBtn.forEach((e) => {
    e.addEventListener("click", () => {
      portfolioBtn.forEach((e) => {
        e.classList.remove("portfolio__button--active");
      });
      e.classList.add("portfolio__button--active");
    });
  });

  document.querySelector("#slider-1").addEventListener("click", () => {
    sliders.forEach((e) => {
      e.classList.add("hidden");
    });
    document
      .querySelector(".portfolio-slider-1-inner")
      .classList.remove("hidden");
    $(".portfolio-slider-1").slick("setPosition");
  });

  document.querySelector("#slider-2").addEventListener("click", () => {
    sliders.forEach((e) => {
      e.classList.add("hidden");
    });
    document
      .querySelector(".portfolio-slider-2-inner")
      .classList.remove("hidden");
    $(".portfolio-slider-2").slick("setPosition");
  });

  document.querySelector("#slider-3").addEventListener("click", () => {
    sliders.forEach((e) => {
      e.classList.add("hidden");
    });
    document
      .querySelector(".portfolio-slider-3-inner")
      .classList.remove("hidden");
    $(".portfolio-slider-3").slick("setPosition");
  });

  document.querySelector("#slider-4").addEventListener("click", () => {
    sliders.forEach((e) => {
      e.classList.add("hidden");
    });
    document
      .querySelector(".portfolio-slider-4-inner")
      .classList.remove("hidden");
    $(".portfolio-slider-4").slick("setPosition");
  });
  if (slogan) {
    for (i = 0; i < tabs.length; i++) {
      tabs[i].addEventListener("click", function () {
        this.classList.toggle("services__tab-top--active");
        this.parentElement.classList.toggle("services__tab--active");
        let panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
          panel.style.maxHeight = null;
        } else {
          panel.style.maxHeight = panel.scrollHeight + "px";
        }
      });
    }

    servicesBtn.forEach((e) => {
      e.addEventListener("click", openText);
    });
    function openText(e) {
      const target = e.currentTarget;
      const button = target.dataset.button;
      const currentText = document.querySelector(`.${button}`);

      servicesBtn.forEach((item) => {
        item.classList.remove("services__tab-button--active");
      });

      target.classList.add("services__tab-button--active");

      servicesItem.forEach((item) => {
        item.classList.remove("services__item--active");
      });

      currentText.classList.add("services__item--active");
      if (window.innerWidth < 650) {
        document.querySelector(".services-inner").scrollIntoView({
          block: "center",
          behavior: "smooth",
        });
      }
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add("slogan--active");
          }, 2);
        }
      });
    });
    observer.observe(document.querySelector(".slogan-content"));

    const observer2 = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add("slogan2--active");
          }, 2);
        }
      });
    });
    observer2.observe(document.querySelector(".slogan2-content"));
    $(".sale-content").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: false,
      fade: true,
      autoplay: true,
      autoplaySpeed: 2500,
      appendDots: $(".sale-dots"),
      appendArrows: $(".sale-nav"),
      dots: true,
      nextArrow:
        '<button type="button" class="slick-next"><img src="http://test999.hhos.net/wp-content/themes/EniBrow/assets/img/arrow-right.svg" /></button>',
      prevArrow:
        '<button type="button" class="slick-prev"><img src="http://test999.hhos.net/wp-content/themes/EniBrow/assets/img/arrow-left.svg" /></button>',
    });
  }

  $(".videos-content").slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    infinite: false,
    appendDots: $(".videos-dots"),
    appendArrows: $(".videos-nav"),
    dots: true,
    nextArrow:
      '<button type="button" class="slick-next"><img src="http://test999.hhos.net/wp-content/themes/EniBrow/assets/img/arrow-right.svg" /></button>',
    prevArrow:
      '<button type="button" class="slick-prev"><img src="http://test999.hhos.net/wp-content/themes/EniBrow/assets/img/arrow-left.svg" /></button>',
    responsive: [
      {
        breakpoint: 1450,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
  videosBtn.forEach((e) => {
    e.addEventListener("click", () => {
      if (e.firstElementChild.paused) {
        videosItem.forEach((e) => {
          e.pause();
        });
        videosPlay.forEach((e) => {
          e.classList.remove("hidden");
        });
        e.children[1].classList.add("hidden");
        e.firstElementChild.play();
      } else {
        e.children[1].classList.remove("hidden");
        e.firstElementChild.pause();
      }
    });
  });
  for (i = 0; i < cost.length; i++) {
    cost[i].addEventListener("click", function () {
      this.classList.toggle("services__tab-top--active");
      this.parentElement.classList.toggle("cost__item--active");
      let panel = this.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    });
  }

  for (i = 0; i < questions.length; i++) {
    questions[i].addEventListener("click", function () {
      this.classList.toggle("services__tab-top--active");
      this.parentElement.classList.toggle("questions__item--active");
      let panel = this.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    });
  }

  $(".review-content").slick({
    adaptiveHeight: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    infinite: false,
    dots: true,
    appendDots: $(".review-dots"),
    appendArrows: $(".review-nav"),
    nextArrow:
      '<button type="button" class="slick-next"><img src="http://test999.hhos.net/wp-content/themes/EniBrow/assets/img/arrow-right.svg" /></button>',
    prevArrow:
      '<button type="button" class="slick-prev"><img src="http://test999.hhos.net/wp-content/themes/EniBrow/assets/img/arrow-left.svg" /></button>',
    responsive: [
      {
        breakpoint: 1450,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          variableWidth: true,
        },
      },
    ],
  });

  reviewBtn.forEach((e) => {
    e.addEventListener("click", () => {
      reviewBtn.forEach((e) => {
        e.classList.remove("review__button--active");
      });
      e.classList.add("review__button--active");
    });
  });

  const filterByClassname = (classname) => {
    $(".review-content").slick("slickUnfilter");
    $(".review-content").slick("slickFilter", `.${classname}`);
  };

  document.querySelector("#review-text").addEventListener("click", () => {
    filterByClassname("review__item-text");
  });
  document.querySelector("#review-voice").addEventListener("click", () => {
    filterByClassname("review__item-voice");
  });
  document.querySelector("#review-video").addEventListener("click", () => {
    filterByClassname("review__item-video");
  });
  document.querySelector("#review-all").addEventListener("click", () => {
    $(".review-content").slick("slickUnfilter");
  });
  reviewInner.forEach((e) => {
    e.addEventListener("click", () => {
      if (e.firstElementChild.paused) {
        reviewItem.forEach((e) => {
          e.pause();
        });
        reviewPlay.forEach((e) => {
          e.classList.remove("hidden");
        });
        e.children[1].classList.add("hidden");
        e.firstElementChild.play();
      } else {
        e.children[1].classList.remove("hidden");
        e.firstElementChild.pause();
      }
    });
  });
  reviewAudioPlay.forEach((e) => {
    e.addEventListener("click", () => {
      if (e.firstElementChild.paused) {
        reviewAudio.forEach((e) => {
          e.pause();
        });
        e.firstElementChild.play();
      } else {
        e.firstElementChild.pause();
      }
    });
  });

  if (technology) {
    if (window.innerWidth < 750) {
      $(".technology-content").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
        dots: true,
        appendDots: $(".technology-dots"),
        appendArrows: $(".technology-nav"),
        nextArrow:
          '<button type="button" class="slick-next"><img src="http://test999.hhos.net/wp-content/themes/EniBrow/assets/img/arrow-right.svg" /></button>',
        prevArrow:
          '<button type="button" class="slick-prev"><img src="http://test999.hhos.net/wp-content/themes/EniBrow/assets/img/arrow-left.svg" /></button>',
      });
    }
  }
  if (window.innerWidth < 750) {
    costMaster.forEach((e) => {
      e.classList.add("hidden");
    });
    topmasterBtn.addEventListener("click", () => {
      masterItems.forEach((e) => {
        e.classList.remove("cost__master-item--active");
      });
      topmasterBtn.classList.add("cost__master-item--active");
      costMaster.forEach((e) => {
        e.classList.add("hidden");
      });
      costTopmaster.forEach((e) => {
        e.classList.remove("hidden");
      });
    });

    masterBtn.addEventListener("click", () => {
      masterItems.forEach((e) => {
        e.classList.remove("cost__master-item--active");
      });
      masterBtn.classList.add("cost__master-item--active");
      costTopmaster.forEach((e) => {
        e.classList.add("hidden");
      });
      costMaster.forEach((e) => {
        e.classList.remove("hidden");
      });
    });
  }
}

headerBtn.addEventListener("click", () => {
  headerMenu.classList.toggle("header-menu--active");
  headerBtn.children[0].classList.toggle("hidden");
  headerBtn.children[1].classList.toggle("hidden");
});

if (headerCheck) {
  headerWhite.classList.add("header-white");
}

if (costPage) {
  if (window.innerWidth < 750) {
    for (i = 0; i < cost.length; i++) {
      cost[i].addEventListener("click", function () {
        this.classList.toggle("services__tab-top--active");
        this.parentElement.classList.toggle("cost__item--active");
        let panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
          panel.style.maxHeight = null;
        } else {
          panel.style.maxHeight = panel.scrollHeight + "px";
        }
      });
    }
    costMaster.forEach((e) => {
      e.classList.add("hidden");
    });
    topmasterBtn.addEventListener("click", () => {
      masterItems.forEach((e) => {
        e.classList.remove("cost__master-item--active");
      });
      topmasterBtn.classList.add("cost__master-item--active");
      costMaster.forEach((e) => {
        e.classList.add("hidden");
      });
      costTopmaster.forEach((e) => {
        e.classList.remove("hidden");
      });
    });

    masterBtn.addEventListener("click", () => {
      masterItems.forEach((e) => {
        e.classList.remove("cost__master-item--active");
      });
      masterBtn.classList.add("cost__master-item--active");
      costTopmaster.forEach((e) => {
        e.classList.add("hidden");
      });
      costMaster.forEach((e) => {
        e.classList.remove("hidden");
      });
    });
  }
}

if (posts) {
  document.querySelector("#posts-all").addEventListener("click", () => {
    document.querySelectorAll(".posts__button").forEach((e) => {
      e.classList.remove("posts__button--active");
    });
    document.querySelector("#posts-all").classList.add("posts__button--active");

    document.querySelectorAll(".posts__item").forEach((e) => {
      e.classList.remove("hidden");
    });
  });
  document.querySelector("#posts-brows").addEventListener("click", () => {
    document.querySelectorAll(".posts__button").forEach((e) => {
      e.classList.remove("posts__button--active");
    });
    document
      .querySelector("#posts-brows")
      .classList.add("posts__button--active");
    document.querySelectorAll(".posts__item").forEach((e) => {
      e.classList.add("hidden");
    });
    document.querySelectorAll(".posts__item--brows").forEach((e) => {
      e.classList.remove("hidden");
    });
  });
  document.querySelector("#posts-eyes").addEventListener("click", () => {
    document.querySelectorAll(".posts__button").forEach((e) => {
      e.classList.remove("posts__button--active");
    });
    document
      .querySelector("#posts-eyes")
      .classList.add("posts__button--active");
    document.querySelectorAll(".posts__item").forEach((e) => {
      e.classList.add("hidden");
    });
    document.querySelectorAll(".posts__item--eyes").forEach((e) => {
      e.classList.remove("hidden");
    });
  });
  document.querySelector("#posts-lips").addEventListener("click", () => {
    document.querySelectorAll(".posts__button").forEach((e) => {
      e.classList.remove("posts__button--active");
    });

    document
      .querySelector("#posts-lips")
      .classList.add("posts__button--active");
    document.querySelectorAll(".posts__item").forEach((e) => {
      e.classList.add("hidden");
    });
    document.querySelectorAll(".posts__item--lips").forEach((e) => {
      e.classList.remove("hidden");
    });
  });
}

if (form) {
  const maskElement = document.querySelector("#phone3");
  const maskOptions = {
    mask: "+{7}(000)-000-00-00",
  };
  const mask = IMask(maskElement, maskOptions);
}
if (modal2) {
  formDropdownTop.forEach((e) => {
    e.addEventListener("click", () => {
      e.classList.toggle("form-dropdown__top--active");
      e.nextElementSibling.classList.toggle("hidden");
    });
  });

  formItems.forEach((e) => {
    e.addEventListener("click", () => {
      e.parentElement.parentElement.previousElementSibling.firstElementChild.firstElementChild.firstElementChild.value=e.firstElementChild.innerText;
      e.parentElement.parentElement.classList.add("hidden");
      e.parentElement.parentElement.previousElementSibling.classList.remove(
        "form-dropdown__top--active"
      );
    });
  });
  modal2Btn.forEach((e) => {
    e.addEventListener("click", () => {
      modal2.classList.remove("hidden");
      modal2.firstElementChild.children[0].classList.remove("hidden");
    });
  });

  const maskElement = document.querySelector("#phone2");
  const maskOptions = {
    mask: "+{7}(000)-000-00-00",
  };
  const mask = IMask(maskElement, maskOptions);
}

if (modal) {
  modalClose.forEach((e) => {
    e.addEventListener("click", () => {
      e.parentElement.parentElement.classList.add("hidden");
    });
  });
  thanksBtn.forEach((e) => {
    e.addEventListener("click", () => {
      e.parentElement.parentElement.parentElement.classList.add("hidden");
      e.parentElement.parentElement.children[1].classList.remove("hidden");
      e.parentElement.classList.add("hidden");
    });
  });
}

if (modal1) {
  modal1Btn.forEach((e) => {
    e.addEventListener("click", () => {
      modal1.classList.remove("hidden");
      modal1.firstElementChild.children[0].classList.remove("hidden");
    });
  });
 
  const maskElement = document.querySelector("#phone1");
  const maskOptions = {
    mask: "+{7}(000)-000-00-00",
  };
  const mask = IMask(maskElement, maskOptions);
}

const post = document.querySelector(".post");
if (post) {
  $(".technology-content").slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    infinite: false,
    dots: true,
    appendDots: $(".technology-dots"),
    appendArrows: $(".technology-nav"),
    nextArrow:
      '<button type="button" class="slick-next"><img src="http://test999.hhos.net/wp-content/themes/EniBrow/assets/img/arrow-right.svg" /></button>',
    prevArrow:
      '<button type="button" class="slick-prev"><img src="http://test999.hhos.net/wp-content/themes/EniBrow/assets/img/arrow-left.svg" /></button>',
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  });
  const maskElement = document.querySelector("#phone4");
  const maskElement2 = document.querySelector("#phone5");
  const maskOptions = {
    mask: "+{7}(000)-000-00-00",
  };
  const mask = IMask(maskElement, maskOptions);
  const mask2 = IMask(maskElement2, maskOptions);
}

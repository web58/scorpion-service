export const Options = {
  SmoothScroll: {
    speed: 900,
    speedAsDuration: true,
    updateURL: false,
  },
  Modal: {
    linkAttributeName: false,
    catchFocus: true,
    closeOnEsc: true,
    backscroll: true,
  },
  Mask: {
    bodyMask: ' (___) ___ __ __',
  },
  ValidationErrors: {
    errorFieldCssClass: 'is-invalid',
    errorLabelStyle: {
      color: 'var(--error)',
      marginTop: '6px',
      fontSize: '12px',
      textAlign: 'left',
    },
  },
  Observer: {
    ScrollTop: {
      rootMargin: '600px',
      threshold: 1,
    },
  },
  RequestOptions: {
    HandlerURL: 'https://jsonplaceholder.typicode.com/posts',
    MethodGet: 'GET',
    MethodPost: 'POST',
  },
  Swiper: {
    MainHero: {
      slidesPerView: 1,
      spaceBetween: 15,
      autoHeight: true,
      loop: true,
      navigation: {
        prevEl: '.main-hero__slider [data-to-slide="prev"]',
        nextEl: '.main-hero__slider [data-to-slide="next"]',
      },
      pagination: {
        el: '.main-hero__slider .slider__pagination',
        clickable: false,
      }
    },
    MainPopular: {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      watchSlidesProgress: true,
      navigation: {
        prevEl: '.main-popular__slider [data-to-slide="prev"]',
        nextEl: '.main-popular__slider [data-to-slide="next"]',
      },
      pagination: {
        el: '.main-popular__slider .slider__pagination',
        clickable: false,
      },
      breakpoints: {
        1200: {
          slidesPerView: 4,
        },
      },
    },
    Brands: {
      slidesPerView: 3,
      spaceBetween: 30,
      loop: true,
      speed: 5000,
      allowTouchMove: false,
      observer: true,
      observeParents: true,
      autoplay: {
        enabled: true,
        delay: 1,
      },
      breakpoints: {
        768: {
          slidesPerView: 5,
        },
        1200: {
          slidesPerView: 6,
        },
      },
    },
    Product: {
      slidesPerView: 1,
      spaceBetween: 10,
      effect: 'fade',
      fadeEffect: {
        crossFade: true,
      },
      navigation: {
        prevEl: '.product-images__main-slider [data-to-slide="prev"]',
        nextEl: '.product-images__main-slider [data-to-slide="next"]',
      },
      pagination: {
        el: '.product-images__main-slider .slider__pagination',
        clickable: false,
      }
    },
    ProductThumbs: {
      slidesPerView: 'auto',
      spaceBetween: 10,
      watchSlidesProgress: true,
      direction: 'vertical'
    },
  },
};

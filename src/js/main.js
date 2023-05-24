import {
  Options,
} from './modules/options.js';

import {
  iosVhFix,
  initSlider
} from './modules/utils.js';

import {
  initModal,
  orderModal
} from './modules/modal.js';

import {
  initScrollTop
} from './modules/scroll-top.js';

import {
  validateForms
} from './modules/validate.js';

import {
  initHeaderSettings
} from './modules/header.js';

import {
  initFilterModal
} from './modules/filters.js';

import {
  initPriceFilter
} from './modules/filter-price.js';

import {
  initCheckoutForm
} from './modules/checkout.js';

document.addEventListener( 'DOMContentLoaded', () => {
  iosVhFix();

  window.addEventListener( 'load', () => {
    initModal();
    initModal( orderModal );
    initScrollTop();
    validateForms();
    initHeaderSettings();
    initFilterModal();
    initPriceFilter();
    initSlider( '.main-hero__slider .slider', Options.Swiper.MainHero );
    initSlider( '.main-popular__slider .slider', Options.Swiper.MainPopular );
    initSlider( '.brands-slider', Options.Swiper.Brands );
    initSlider( '.product-images__main-slider', Object.assign( Options.Swiper.Product, {
      thumbs: {
        swiper: initSlider( '.product-images__thumbs-slider', Options.Swiper.ProductThumbs ),
      },
    } ) );
    initCheckoutForm();
  } );
} );

import {
  Options,
} from './options.js';

const beforeOpenOption = {
  beforeOpen: function( modal ) {
    renderOrderTitle( modal );
  }
};

const simpleModal = new HystModal( Options.Modal );
const orderModal = new HystModal( Object.assign( Options.Modal, beforeOpenOption ) );

const initModal = ( name = simpleModal, handler = 'data-hystmodal' ) => {
  name.config.linkAttributeName = handler;
  name.init();
};

const renderOrderTitle = ( modal ) => {
  if ( !modal.starter.classList.contains( 'is-order-btn' ) ) return;
  modal.openedWindow.querySelector( '#order-title-text' ).textContent = modal.starter.dataset.productTitle;
  modal.openedWindow.querySelector( '#order-title-field' ).value = modal.starter.dataset.productTitle;
};

export {
  simpleModal,
  orderModal,
  initModal
};

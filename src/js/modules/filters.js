import {
  isEscKey,
} from './utils.js';

const filterModalBtnNode = document.querySelector( '.catalog-products__filter-trigger' );
const filterCloseBtnNode = document.querySelector( '.products-filters__close' );
const filtersModalNode = document.querySelector( '.products-filters' );

const openFilterMenu = ( evt ) => {
  evt.preventDefault();
  document.documentElement.classList.add( 'is-open-menu' );
  filtersModalNode.classList.add( 'products-filters--open' );
};

const closeFilterMenu = ( evt ) => {
  evt.preventDefault();
  document.documentElement.classList.remove( 'is-open-menu' );
  filtersModalNode.classList.remove( 'products-filters--open' );
};

export const initFilterModal = () => {
  if ( !filterModalBtnNode || !filterCloseBtnNode || !filtersModalNode ) return;

  filterModalBtnNode.addEventListener( 'click', openFilterMenu );
  filterCloseBtnNode.addEventListener( 'click', closeFilterMenu );

  document.addEventListener( 'keydown', ( evt ) => {
    if ( isEscKey( evt ) ) {
      closeFilterMenu( evt );
    }
  } );
};

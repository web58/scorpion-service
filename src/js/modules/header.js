import {
  isEscKey,
} from './utils.js';

const headerNode = document.querySelector( '.site-header' );
const headerModalNode = document.querySelector( '.header-modal' );
const MENU_ID = 'mobile-menu';
const BURGER_OPTIONS = {
  animationSpeed: 300,
  menuId: MENU_ID,
  isOpen: openMobileMenu,
  isClose: closeMobileMenu,
};
const siteBurger = new JustBurger( BURGER_OPTIONS );

function openMobileMenu() {
  document.documentElement.classList.add( 'is-open-menu' );
  headerModalNode.setAttribute( 'aria-hidden', 'false' );
}

function closeMobileMenu() {
  document.documentElement.classList.remove( 'is-open-menu' );
  headerModalNode.setAttribute( 'aria-hidden', 'true' );
}

const initMobiteDropdownMenu = ( selector ) => {
  if ( !selector ) return;
  const dropdownMenuNodes = document.querySelectorAll( selector );

  const onDropdownLinkClick = ( evt ) => {
    if ( window.matchMedia( '(min-width: 1200px)' ).matches ) return;
    evt.preventDefault();
    if ( evt.target && evt.target.nodeName === 'A' ) {
      evt.target.classList.toggle( 'menu-dropdown__link--expanded' );
    }
  };

  const createMenu = ( dropdownMenu ) => {
    dropdownMenu.querySelectorAll( 'a' ).forEach( ( link ) => {
      if ( link.nextElementSibling && link.nextElementSibling.nodeName === 'UL' ) {
        link.classList.add( 'menu-dropdown__link' );
        link.addEventListener( 'click', onDropdownLinkClick );
      }
    } );
  };

  dropdownMenuNodes.forEach( createMenu );
};

const initHeaderMenu = () => {
  if ( !headerModalNode || !headerNode ) return;
  headerModalNode.id = MENU_ID;
  document.addEventListener( 'keydown', ( evt ) => {
    if ( isEscKey( evt ) && headerModalNode.getAttribute( 'aria-hidden' ) === 'false' ) {
      siteBurger.close();
    }
  } );
};

const observeSiteHeader = () => {
  const headerHomeNode = document.querySelector( '.site-header' );
  const targetTopNode = document.querySelector( '#site-top' );
  if ( !headerHomeNode || !targetTopNode ) return;
  const OBSERVE_OPTIONS = {
    rootMargin: `${headerHomeNode.clientHeight}px`,
    threshold: 1
  };

  const cb = ( entries ) => {
    entries.forEach( entry => {
      if ( !entry.isIntersecting && window.matchMedia( '(min-width: 1200px)' ).matches ) {
        headerNode.classList.add( 'site-header--sticked' );
      } else {
        headerNode.classList.remove( 'site-header--sticked' );
      }
    } );
  };
  new IntersectionObserver( cb, OBSERVE_OPTIONS ).observe( targetTopNode );
};

const initHeaderSettings = () => {
  initMobiteDropdownMenu( '.header-modal__nav .menu-dropdown' );
  initHeaderMenu();
  observeSiteHeader();
};

export {
  initHeaderSettings
};

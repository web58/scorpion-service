import {
  Options,
} from './options.js';

const checkoutValidation = new JustValidate( '#checkout-form', Options.ValidationErrors );
const checkoutValidationOptions = {
  rule: 'required',
  value: true,
  errorMessage: 'Поле обязательно для заполнения'
};

const initcheckoutType = () => {
  const BUYER_TYPES = document.querySelectorAll( 'input[type="radio"][data-buyer-type]' );
  const companyContainerNode = document.querySelector( '.checkout__company' );
  const companyFieldTemplate = document.querySelector( '#personal-company' ).content.querySelector( '.checkout__fullwidth' );

  const renderCompanyField = () => {
    companyContainerNode.appendChild( companyFieldTemplate.cloneNode( true ) );
  };

  const onChangeType = ( evt ) => {
    if ( evt.target.id === 'checkout-type-entity' ) {
      renderCompanyField();
      checkoutValidation.addField( '[data-validate="company"]', [ checkoutValidationOptions ] );
    } else {
      companyContainerNode.innerHTML = '';
      checkoutValidation.removeField( '[data-validate="company"]', [ checkoutValidationOptions ] );
    }
  };

  BUYER_TYPES.forEach( type => {
    if ( type.checked ) {
      if ( type.id === 'checkout-type-entity' ) {
        renderCompanyField();
        checkoutValidation.addField( '[data-validate="company"]', [ checkoutValidationOptions ] );
      }
    }
    type.addEventListener( 'change', onChangeType );
  } );
};

const initcheckoutDelivery = () => {
  const DELIVERY_TYPES = document.querySelectorAll( 'input[type="radio"][data-delivery-type]' );
  const pointContainerNode = document.querySelector( '.checkout__pickup-points' );
  const pointListTemplate = document.querySelector( '#pickup-point-list' ).content.querySelector( '.checkout-pickup' );
  const adressContainerNode = document.querySelector( '.checkout__adress' );
  const adressFieldTemplate = document.querySelector( '#personal-adress' ).content.querySelector( '.checkout__fullwidth' );

  const renderAdressField = () => {
    if ( adressContainerNode.childElementCount > 0 ) return;
    adressContainerNode.appendChild( adressFieldTemplate.cloneNode( true ) );
  };
  const renderDeliveryPoints = () => {
    pointContainerNode.appendChild( pointListTemplate.cloneNode( true ) );

  };

  const onChangeType = ( evt ) => {
    if ( evt.target.id === 'checkout-delivery-pickup' ) {
      renderDeliveryPoints();
      checkoutValidation.removeField( '[data-validate="adress"]', [ checkoutValidationOptions ] );
      adressContainerNode.innerHTML = '';
    } else {
      renderAdressField();
      checkoutValidation.addField( '[data-validate="adress"]', [ checkoutValidationOptions ] );
      pointContainerNode.innerHTML = '';
    }
  };

  DELIVERY_TYPES.forEach( type => {
    if ( type.checked ) {
      if ( type.id === 'checkout-delivery-pickup' ) {
        renderDeliveryPoints();
      }
      if ( type.id !== 'checkout-delivery-pickup' ) {
        renderAdressField();
        checkoutValidation.addField( '[data-validate="adress"]', [ checkoutValidationOptions ] );
      }
    }
    type.addEventListener( 'change', onChangeType );
  } );
};

export const initCheckoutForm = () => {
  if ( !document.forms[ 'checkout-form' ] ) return;
  initcheckoutType();
  initcheckoutDelivery();
};

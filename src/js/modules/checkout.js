import {
  Options,
} from './options.js';


const checkoutValidationOptions = {
  rule: 'required',
  value: true,
  errorMessage: 'Поле обязательно для заполнения'
};

const initcheckoutType = ( validation ) => {
  const BUYER_TYPES = document.querySelectorAll( 'input[type="radio"][data-buyer-type]' );
  const companyContainerNode = document.querySelector( '.checkout__company' );
  const companyFieldTemplate = document.querySelector( '#personal-company' ).content.querySelector( '.checkout__fullwidth' );

  const renderCompanyField = () => {
    companyContainerNode.appendChild( companyFieldTemplate.cloneNode( true ) );
  };

  const onChangeType = ( evt ) => {
    if ( evt.target.id === 'checkout-type-entity' ) {
      renderCompanyField();
      validation.addField( '[data-validate="company"]', [ checkoutValidationOptions ] );
    } else {
      companyContainerNode.innerHTML = '';
      validation.removeField( '[data-validate="company"]', [ checkoutValidationOptions ] );
    }
  };

  BUYER_TYPES.forEach( type => {
    if ( type.checked ) {
      if ( type.id === 'checkout-type-entity' ) {
        renderCompanyField();
        validation.addField( '[data-validate="company"]', [ checkoutValidationOptions ] );
      }
    }
    type.addEventListener( 'change', onChangeType );
  } );
};

const initcheckoutDelivery = ( validation ) => {
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
      validation.removeField( '[data-validate="adress"]', [ checkoutValidationOptions ] );
      adressContainerNode.innerHTML = '';
    } else {
      renderAdressField();
      validation.addField( '[data-validate="adress"]', [ checkoutValidationOptions ] );
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
        validation.addField( '[data-validate="adress"]', [ checkoutValidationOptions ] );
      }
    }
    type.addEventListener( 'change', onChangeType );
  } );
};

export const initCheckoutForm = () => {
  if ( !document.forms[ 'checkout-form' ] ) return;
  const checkoutValidation = new JustValidate( '#checkout-form', Options.ValidationErrors );

  initcheckoutType( checkoutValidation );
  initcheckoutDelivery( checkoutValidation );
};

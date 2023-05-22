const priceFilterNode = document.querySelector( '.price-filter' );

export const initPriceFilter = () => {
  if ( !priceFilterNode ) return;

  const minInputNode = priceFilterNode.querySelector( '[data-price-min]' );
  const maxInputNode = priceFilterNode.querySelector( '[data-price-max]' );
  const sliderNode = priceFilterNode.querySelector( '.price-filter__range' );
  const minPriceValue = parseInt( minInputNode.dataset.priceMin, 10 );
  const maxPriceValue = parseInt( maxInputNode.dataset.priceMax, 10 );


  noUiSlider.create( sliderNode, {
    start: [ minPriceValue, maxPriceValue ],
    step: 10,
    connect: true,
    range: {
      'min': minPriceValue,
      'max': maxPriceValue,
    },
  } );

  sliderNode.noUiSlider.on( 'update', () => {
    minInputNode.value = parseInt( sliderNode.noUiSlider.get()[ 0 ], 10 );
    maxInputNode.value = parseInt( sliderNode.noUiSlider.get()[ 1 ], 10 );
  } );
};

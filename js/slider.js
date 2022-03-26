export const createSlider = (adFormElements) => {
  const { slider, price } = adFormElements;

  noUiSlider.create(slider, {
    range: {
      min: parseInt(adFormElements.price.min, 10),
      max: parseInt(adFormElements.price.max, 10),
    },
    start: 0,
    step: 1,
    format: {
      to: function (value) {
        return value.toFixed(0);
      },
      from: function (value) {
        return parseInt(value, 10);
      },
    },
  });

  slider.noUiSlider.on('slide', () => {
    console.log('изменение СЛАЙДЕРА');
    adFormElements.price.value = slider.noUiSlider.get();
  });

  price.addEventListener('input', (evt) => {
    console.log('изменение ЦЕНЫ');
    slider.noUiSlider.set(evt.target.value);
  });
};

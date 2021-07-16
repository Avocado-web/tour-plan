const hotelSlider = new Swiper('.hotel-slider', {
  // Optional parameters
  loop: true,
  // Navigation arrows
  navigation: {
    nextEl: '.hotel-slider__button--next',
    prevEl: '.hotel-slider__button--prev',
  },
  keyboard: {
    enabled: true,
  },
  effect: "coverflow",
});

const reviewsSlider = new Swiper('.reviews-slider', {
  // Optional parameters
  loop: true,
  // Navigation arrows
  navigation: {
    nextEl: '.reviews-slider__button--next',
    prevEl: '.reviews-slider__button--prev',
  },
  keyboard: {
    enabled: true,
  },
});

ymaps.ready(init);
    var myMap,
      myPlacemark;

    function init() {
      myMap = new ymaps.Map("myMap", {
        center: [33.69, -78.92],
        zoom: 7
      });

      myPlacemark = new ymaps.Placemark([33.69, -78.92], {
        hintContent: 'Grand Hilton Hotel',
        balloonContent: 'Hotel'
      });
      myMap.setType('yandex#hybrid')

      myMap.geoObjects.add(myPlacemark);
    }

    $('.parallax-window').parallax({
  speed: 0.5,
});
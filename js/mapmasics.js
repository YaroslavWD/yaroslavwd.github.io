var myMap;

// Дождёмся загрузки API и готовности DOM.
ymaps.ready(init);

function init () {
    // Создание экземпляра карты и его привязка к контейнеру с
    // заданным id ("map").
    myMap = new ymaps.Map('map', {
        // При инициализации карты обязательно нужно указать
        // её центр и коэффициент масштабирования.
        center: [58.003636, 56.265670], // Пермь, 1-я Красноармейская улица, 3
        zoom: 17
    }, {
        searchControlProvider: 'yandex#search'
    });

    myMap.behaviors.disable('scrollZoom'), // Отключение скрола колесом мыши

    myPlacemark = new ymaps.Placemark([58.003359, 56.266741], {
      hintContent: 'г.Пермь 1-я Красноармейская улица, 3.',
      balloonContent: 'Мы находимся здесь'
    }, {
        // Опции.
        // Необходимо указать данный тип макета.
        iconLayout: 'default#image',
        // Своё изображение иконки метки.
        iconImageHref: 'img/logo-mp.png',
        // Размеры метки.
        iconImageSize: [42, 62],
        // Смещение левого врхнего угла иконки относительно
        // её "ножки" (точки привязки).
        iconImageOffset: [-30, -72]
    });

  //   myGeoObject = new ymaps.GeoObject({
  //     // Описание геометрии.
  //     geometry: {
  //         type: "Point",
  //         coordinates: [56.841532, 60.655973]
  //     },
  // }, {
  //     // Метку можно перемещать.
  //     draggable: false
  // })

      myMap.geoObjects
      // .add(myGeoObject)
      .add(myPlacemark)
}

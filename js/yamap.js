ymaps.ready(function() {
    var myMap = new ymaps.Map('map', {
        center: [53.916605, 27.523275],
        zoom: 15,
    });

    myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
        hintContent: '<strong>Офис Collection Design Studio</strong>',
        balloonContent: 'Адрес: г.Минск, ул. Игнатенко, 4'
    }, {
        iconLayout: 'default#image',
        iconImageHref: 'img/mark.png',
        iconImageSize: [213, 111],
        iconImageOffset: [-213, -111]
    });

    myMap.geoObjects.add(myPlacemark);
});

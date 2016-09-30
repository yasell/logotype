// for panel
$(function() {
    $("#accordion").accordion({
        collapsible: true,
        heightStyle: "content",
        active: false
    });
});

// for modal
$(".popup__close").click(function() {
    $(".popup").removeClass("popup--show");
})

$(".page-wrapper").click(function() {
    $(".popup").removeClass("popup--show");
})

$(document).on('click', '.gallery__item._cat', function() {
    anons = $(this).find('#anons').text();
    caption = $(this).find('#caption p').text();
    permalink = $(this).find('#permalink').text();
    if (permalink.length > 0) {
        $('.contacts').addClass('o-proekte');
        $('.navbar__item._project').removeClass('hidden');
        $('.navbar__link-permalink').attr('href', permalink);
    } else {
        $('.contacts').removeClass('o-proekte');
        $('.navbar__item._project').addClass('hidden');
    }
    $('.panel__content-show').text(anons);
    $('.panel__content').text(caption);
});

var post_id = $('#post_id').text();
$('.navbar__item a#post_' + post_id).each(function() {
    $(this).closest('li').addClass('navbar__item--active');
});

$('.wpcf7-list-item').each(function() {
    $(this).html($(this).html().replace(/&nbsp;/gi, ''));
});

$('.blank__file span.file').each(function() {
    $(this).prepend('<span class="blank__file-btn"> Выберите файл </span><mark> Файл не выбран </mark>');
});

$(document).on('click', 'span.blank__file-btn', function() {
    _mark = $(this).next().text();
    //alert(_mark);
    if (_mark != ' Файл не выбран ') {
        $(this).next().addClass('green');
    }
});

$('.wpcf7-file').on('change', function() {
    _val = $(this).val();
    if (_val) {
        $('.file mark').addClass('green');
    }
});

// for footer_map
ymaps.ready(init);

function init() {
    var myMap = new ymaps.Map("f-map", {
            center: [53.916605, 27.523275],
            zoom: 16,
            controls: []
        }, {
            searchControlProvider: 'yandex#search'
        }),

        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
            hintContent: '<strong>Офис Collection Design Studio</strong>',
            balloonContent: 'Адрес: г.Минск, ул. Игнатенко, 4'
        }, {
            iconLayout: 'default#image',
            iconImageHref: 'img/mark.png',
            iconImageSize: [130, 67],
            iconImageOffset: [-130, -67]
        });

    myMap.geoObjects.add(myPlacemark);
}

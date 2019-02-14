// nav tab start
$(document).ready(function() {
  $('.nav-item').click(function() {
    $('.nav-item.active').removeClass('active');
    $(this).addClass('active');
    });
  $('.nav-item:first-child').addClass('active');
});
// nav tab end

// owl-carousels start
  // main carousel start
  $(document).ready(function(){
    $('.main-slider').owlCarousel({
      loop:true,
      margin:10,
      nav:false,
      dots: true,
      responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
      }
    });
    // main carousel end

    // popular-goods carousel start
    $('.popular-goods__slider').owlCarousel({
      loop:true,
      margin:10,
      nav:true,
      dots: false,
      responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:5
        }
      }
    });
    // popular-goods carousel end

    // popular-goods carousel start
    $('.products__slider').owlCarousel({
      loop:true,
      margin:10,
      nav:true,
      dots: false,
      responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:4
        }
      }
    });
    // popular-goods carousel end

  });
// owl-carousels end

// Script for audio start
$(function () {
  $('[play-audio-link]').on('click', function () {
    $('#player')[0].play();

    $('[play-audio]').addClass('hide').removeClass('show');
    $('[pause-audio]').addClass('show').removeClass('hide');
  });

  $('[play-audio]').on('click', function () {
    $('#player')[0].play();

    $('[play-audio]').toggleClass('show').toggleClass('hide');
    $('[pause-audio]').toggleClass('show').toggleClass('hide');
  });

  $('[pause-audio]').on('click', function () {
    $('#player')[0].pause();

    $('[play-audio]').toggleClass('show').toggleClass('hide');
    $('[pause-audio]').toggleClass('show').toggleClass('hide');
  });
});
'use strict';
// Script for audio end

// JavaScript for label effects only start
$(function () {
  $(".footer-popup-form__form_input input").val("");
  $(".footer-popup-form__form_input textarea").val("");
  
  $(".footer-popup-form__form_input input").focusout(function(){
    if($(this).val() != ""){
      $(this).addClass("has-content");
    }else{
      $(this).removeClass("has-content");
    }
  });

  $(".footer-popup-form__form_input textarea").focusout(function(){
    if($(this).val() != ""){
      $(this).addClass("has-content");
    }else{
      $(this).removeClass("has-content");
    }
  });  
});    
// JavaScript for label effects only end

// popup js start
$(function () {
    $('[data-popup]').on('click', function () {
        var self = $(this),
            idModal = self.attr('data-popup');

        if (!$(idModal).hasClass('popup-open')) {
            $('.popup-open').removeClass('popup-open');
        }

        if (!self.hasClass('popup-link-active')) {
            $('.popup-link-active').removeClass('popup-link-active');
        }

        $('[data-popup="' + idModal + '"]').toggleClass('popup-link-active');
        $(idModal).toggleClass('popup-open');
    });

    $(document).on('click', function (event) {
        if ($(event.target).closest('.popup-open, .popup-link-active').length) return;

        $('.popup-link-active').toggleClass('popup-link-active');
        $('.popup-open').toggleClass('popup-open');
        event.stopPropagation();
    });

    $(document).on('keyup', function (event) {
        if (event.keyCode == 27) {
            $('.popup-link-active').toggleClass('popup-link-active');
            $('.popup-open').toggleClass('popup-open');
        }
    });

});
'use strict';
// popup js end

//Add div for popup bg start
$('.footer-fixed').append("<div class='fix-bg'></div>");
//Add div for popup bg end

//shops js start
//shops map js start
$(function () {
    $('[toggle-info-shop]').on('click', function () {
        let self = $(this),
            mapElement = self.parent().find('.shops__info-shop_map'),
            idMap = mapElement.attr('id'),
            mapData = mapsData[idMap];

        if (!mapElement.hasClass('map-init')) {
            // Инициализация Yandex.Map
            var myMap = new ymaps.Map(idMap, {
                    center: mapData.center,
                    zoom: mapData.zoom
                }, {
                    searchControlProvider: 'yandex#search'
                }),
                objectManager = new ymaps.ObjectManager({
                    clusterize: true,
                    gridSize: 32
                });

            objectManager.objects.options.set('preset', 'islands#blueDotIcon');
            objectManager.clusters.options.set('preset', 'islands#blueClusterIcons');
            myMap.geoObjects.add(objectManager);

            objectManager.add(mapData.map_data);
            mapElement.addClass('map-init');
        }
    });
});
//shops map js

//shop select js start
$('select').each(function(){
    var $this = $(this), numberOfOptions = $(this).children('option').length;
  
    $this.addClass('select-hidden'); 
    $this.wrap('<div class="select"></div>');
    $this.after('<div class="select-styled"></div>');

    var $styledSelect = $this.next('div.select-styled');
    $styledSelect.text($this.children('option').eq(0).text());
  
    var $list = $('<ul />', {
        'class': 'select-options'
    }).insertAfter($styledSelect);
  
    for (var i = 0; i < numberOfOptions; i++) {
        $('<li />', {
            text: $this.children('option').eq(i).text(),
            rel: $this.children('option').eq(i).val()
        }).appendTo($list);
    }
  
    var $listItems = $list.children('li');
  
    $styledSelect.click(function(e) {
        e.stopPropagation();
        $('div.select-styled.active').not(this).each(function(){
            $(this).removeClass('active').next('ul.select-options').hide();
        });
        $(this).toggleClass('active').next('ul.select-options').toggle();
    });
  
    $listItems.click(function(e) {
        e.stopPropagation();
        $styledSelect.text($(this).text()).removeClass('active');
        $this.val($(this).attr('rel'));
        $list.hide();
        //console.log($this.val());
    });
  
    $(document).click(function() {
        $styledSelect.removeClass('active');
        $list.hide();
    });
});
//shop select js end
//shops js end

//catalog filter start
// popup js start
'use strict';
$(function () {
    var filterOpen = $('#choice-options-link');
        checkValue = $(".catalog-filter__checkbox_input").val();

    $(filterOpen).on('click', function () { 
      $(filterOpen).toggleClass('hide');
      $('#your-choices').toggleClass('show');
    });

    $('.remove-filters-options').on('click', function () { 
      $(filterOpen).toggleClass('hide');
      $('#your-choices').toggleClass('show');
    });

});

// popup js end
//catalog filter end


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

// JavaScript for label effects only
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

//Add div for popup bg
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

//shops js end

// var delay = (function() {
//   var timer = 0;
//   return function(callback, ms) {
//     clearTimeout(timer);
//     timer = setTimeout(callback, ms);
//   }
// })();

// var $selectCase = $('#select-case');
// var $media = $('#media');
// var $related = $('#related');

// var sliderNav = ['<svg height="22" viewBox="0 0 13 22" width="13" xmlns="http://www.w3.org/2000/svg"><path d="m11 0-11 11 11 11" fill="none" stroke="#00aeef" stroke-linecap="round" stroke-linejoin="round" transform="translate(1)"/></svg>', '<svg height="22" viewBox="0 0 13 22" width="13" xmlns="http://www.w3.org/2000/svg"><path d="m11 0-11 11 11 11" fill="none" stroke="#00aeef" stroke-linecap="round" stroke-linejoin="round" transform="matrix(-1 0 0 1 12 0)"/></svg>'];

// $(function() {
//   // Polyfills
//   svg4everybody();
//   objectFitImages();

//   // Mobile menu
//   navMenuFix('.nav-menu');

//   // What We Do logos slider
//   $('.whatwedo-slider').owlCarousel({
//     responsive: {
//       0: {
//         items: 2
//       },
//       768: {
//         items: 4
//       },
//       1200: {
//         items: 5
//       }
//     },
//     loop: true,
//     nav: true,
//     navText: sliderNav,
//     dots: false
//   });

//   // Select Case
//   selectCaseSet();

//   // Media list
//   mediaSet();

//   // Related list
//   relatedSet();

//   // Features accordion
//   if ($('#features').length) {
//     $('#features').on('show.bs.collapse', function(e) {
//       $(e.target).closest('.features-item').addClass('open');
//     });

//     $('#features').on('hide.bs.collapse', function(e) {
//       $(e.target).closest('.features-item').removeClass('open');
//     });

//     $(window).on('scroll', function(evt) {
//       $('#features .collapse').collapse('hide');
//     });
//   }

//   // Recognition table height adjust
//   recognitionTable('#recognition');

//   // Intro progress
//   introProgress('#intro-progress', 1000);

//   // Intro video adjust
//   videoResize('#intro-video');
// });

// $(window).on('resize', function() {
//   delay(function() {
//     navMenuFix('.nav-menu');
//     selectCaseSet();
//     mediaSet();
//     relatedSet();
//     recognitionTable('#recognition');
//     videoResize('#intro-video');
//   }, 100);
// });

// function selectCaseSet() {
//   if (!$selectCase.length) return;

//   if ($(window).width() < 768) {
//     $selectCase.addClass('owl-carousel').owlCarousel({
//       items: 1,
//       nav: true,
//       navText: sliderNav,
//       dots: false,
//       margin: 10,
//       loop: true,
//       onInitialized: function(event) {
//         var $target = $(event.target),
//             index = $target.find('.owl-item.active').find('.cases-item').data('index'),
//             count = event.item.count;

//         $target.prepend('<div class="owl-counter"><span class="current"></span>/<span class="total"></span></div>');
//         $target.find('.owl-counter .current').text(parseInt(index));
//         $target.find('.owl-counter .total').text(count);
//       },
//       onTranslated: function(event) {
//         var $target = $(event.target),
//             index = $target.find('.owl-item.active').find('.cases-item').data('index');

//         $target.find('.owl-counter .current').text(parseInt(index));
//       }
//     });
//   } else {
//     $selectCase.find('.owl-counter').remove();
//     $selectCase.removeClass('owl-carousel').trigger('destroy.owl.carousel');
//   }
// }

// function mediaSet() {
//   if (!$media.length) return;

//   if ($(window).width() < 768) {
//     $media.addClass('owl-carousel').owlCarousel({
//       items: 1,
//       nav: true,
//       navText: sliderNav,
//       dots: false,
//       margin: 10,
//       loop: true
//     });
//   } else {
//     $media.removeClass('owl-carousel').trigger('destroy.owl.carousel');
//   }
// }

// function relatedSet() {
//   if (!$related.length) return;

//   if ($(window).width() < 768) {
//     $related.addClass('owl-carousel').owlCarousel({
//       items: 1,
//       nav: true,
//       navText: sliderNav,
//       dots: false,
//       margin: 10,
//       loop: true
//     });
//   } else {
//     $related.removeClass('owl-carousel').trigger('destroy.owl.carousel');
//   }
// }

// function recognitionTable(el) {
//   var $titles = $(el).find('.recognition-item__title'),
//       $texts = $(el).find('.recognition-item__text');
  
//   if ($(window).width() < 768) {
//     $titles.attr('style', '');
//     $texts.attr('style', '');
//     return;
//   }

//   var maxTitle = Math.max.apply(null, $titles.map(function () {
//     return $(this).height();
//   }).get());

//   var maxText = Math.max.apply(null, $texts.map(function () {
//     return $(this).height();
//   }).get());

//   $titles.css( 'min-height', maxTitle + 'px' );
//   $texts.css( 'min-height', maxText + 'px' );
// }

// function introProgress(el, interval) {
//   var $progress = $(el);
//       // $content = $progress.find('.intro-progress-content'),
//       // counter = 1,
//       // introContent = [
//       //   { count: 0.3, text: "Query time for 500M dataset" },
//       //   { count: 0.55, text: "Intro progress text" },
//       //   { count: 0.2, text: "Intro dataset text number 3" },
//       //   { count: 100, text: "Dataset time for progress longer text" },
//       // ];

//   $progress.addClass('active');

//   $('.intro-progress-content').addClass('owl-carousel').owlCarousel({
//     items: 1,
//     nav: false,
//     dots: false,
//     autoplay: true,
//     autoplayTimeout: 1000,
//     loop: true,
//     mouseDrag: false,
//     animateIn: 'fadeIn',
//     // animateOut: 'fadeOut'
//   });

//   // if (typeof introContent === 'undefined') return;
//   // for (i = 0; i < introContent.length; i++) {
//   //   var $data = $('<div class="intro-progress-content__item"><span class="intro-progress-time"><span>' + introContent[i].count + '</span> sec</span><span class="intro-progress-text">' + introContent[i].text + '</span></div>');
//   //   $content.append($data);
//   // }

//   // var $contentItems = $content.children();
//   // $contentItems.eq(0).addClass('show');

//   // setInterval(function() {
//   //   $contentItems.removeClass('show');
//   //   $contentItems.eq(counter).addClass('show');
//   //   counter++;
//   //   if (counter === introContent.length) counter = 0;
//   // }, interval);
// }

// function videoResize(el) {
//   var $container = $(el)
//       $video = $container.children('video');

//   $video.css({ width: 'auto', height: 'auto' });
//   var ratio = $video.width() / $video.height()

//   if ($container.width() / $container.height() > ratio) {
//     $video.css({ width: '100%', height: 'auto' });
//   } else {
//     $video.css({ width: 'auto', height: '100%' });
//   }
// }


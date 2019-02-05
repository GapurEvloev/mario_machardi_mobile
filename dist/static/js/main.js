var delay = (function() {
  var timer = 0;
  return function(callback, ms) {
    clearTimeout(timer);
    timer = setTimeout(callback, ms);
  }
})();

var $selectCase = $('#select-case');
var $media = $('#media');
var $related = $('#related');

var sliderNav = ['<svg height="22" viewBox="0 0 13 22" width="13" xmlns="http://www.w3.org/2000/svg"><path d="m11 0-11 11 11 11" fill="none" stroke="#00aeef" stroke-linecap="round" stroke-linejoin="round" transform="translate(1)"/></svg>', '<svg height="22" viewBox="0 0 13 22" width="13" xmlns="http://www.w3.org/2000/svg"><path d="m11 0-11 11 11 11" fill="none" stroke="#00aeef" stroke-linecap="round" stroke-linejoin="round" transform="matrix(-1 0 0 1 12 0)"/></svg>'];

$(function() {
  // Polyfills
  svg4everybody();
  objectFitImages();

  // Mobile menu
  navMenuFix('.nav-menu');

  // What We Do logos slider
  $('.whatwedo-slider').owlCarousel({
    responsive: {
      0: {
        items: 2
      },
      768: {
        items: 4
      },
      1200: {
        items: 5
      }
    },
    loop: true,
    nav: true,
    navText: sliderNav,
    dots: false
  });

  // Select Case
  selectCaseSet();

  // Media list
  mediaSet();

  // Related list
  relatedSet();

  // Features accordion
  if ($('#features').length) {
    $('#features').on('show.bs.collapse', function(e) {
      $(e.target).closest('.features-item').addClass('open');
    });

    $('#features').on('hide.bs.collapse', function(e) {
      $(e.target).closest('.features-item').removeClass('open');
    });

    $(window).on('scroll', function(evt) {
      $('#features .collapse').collapse('hide');
    });
  }

  // Recognition table height adjust
  recognitionTable('#recognition');

  // Intro progress
  introProgress('#intro-progress', 1000);

  // Intro video adjust
  videoResize('#intro-video');
});

$(window).on('resize', function() {
  delay(function() {
    navMenuFix('.nav-menu');
    selectCaseSet();
    mediaSet();
    relatedSet();
    recognitionTable('#recognition');
    videoResize('#intro-video');
  }, 100);
});

function selectCaseSet() {
  if (!$selectCase.length) return;

  if ($(window).width() < 768) {
    $selectCase.addClass('owl-carousel').owlCarousel({
      items: 1,
      nav: true,
      navText: sliderNav,
      dots: false,
      margin: 10,
      loop: true,
      onInitialized: function(event) {
        var $target = $(event.target),
            index = $target.find('.owl-item.active').find('.cases-item').data('index'),
            count = event.item.count;

        $target.prepend('<div class="owl-counter"><span class="current"></span>/<span class="total"></span></div>');
        $target.find('.owl-counter .current').text(parseInt(index));
        $target.find('.owl-counter .total').text(count);
      },
      onTranslated: function(event) {
        var $target = $(event.target),
            index = $target.find('.owl-item.active').find('.cases-item').data('index');

        $target.find('.owl-counter .current').text(parseInt(index));
      }
    });
  } else {
    $selectCase.find('.owl-counter').remove();
    $selectCase.removeClass('owl-carousel').trigger('destroy.owl.carousel');
  }
}

function mediaSet() {
  if (!$media.length) return;

  if ($(window).width() < 768) {
    $media.addClass('owl-carousel').owlCarousel({
      items: 1,
      nav: true,
      navText: sliderNav,
      dots: false,
      margin: 10,
      loop: true
    });
  } else {
    $media.removeClass('owl-carousel').trigger('destroy.owl.carousel');
  }
}

function relatedSet() {
  if (!$related.length) return;

  if ($(window).width() < 768) {
    $related.addClass('owl-carousel').owlCarousel({
      items: 1,
      nav: true,
      navText: sliderNav,
      dots: false,
      margin: 10,
      loop: true
    });
  } else {
    $related.removeClass('owl-carousel').trigger('destroy.owl.carousel');
  }
}

function recognitionTable(el) {
  var $titles = $(el).find('.recognition-item__title'),
      $texts = $(el).find('.recognition-item__text');
  
  if ($(window).width() < 768) {
    $titles.attr('style', '');
    $texts.attr('style', '');
    return;
  }

  var maxTitle = Math.max.apply(null, $titles.map(function () {
    return $(this).height();
  }).get());

  var maxText = Math.max.apply(null, $texts.map(function () {
    return $(this).height();
  }).get());

  $titles.css( 'min-height', maxTitle + 'px' );
  $texts.css( 'min-height', maxText + 'px' );
}

function introProgress(el, interval) {
  var $progress = $(el);
      // $content = $progress.find('.intro-progress-content'),
      // counter = 1,
      // introContent = [
      //   { count: 0.3, text: "Query time for 500M dataset" },
      //   { count: 0.55, text: "Intro progress text" },
      //   { count: 0.2, text: "Intro dataset text number 3" },
      //   { count: 100, text: "Dataset time for progress longer text" },
      // ];

  $progress.addClass('active');

  $('.intro-progress-content').addClass('owl-carousel').owlCarousel({
    items: 1,
    nav: false,
    dots: false,
    autoplay: true,
    autoplayTimeout: 1000,
    loop: true,
    mouseDrag: false,
    animateIn: 'fadeIn',
    // animateOut: 'fadeOut'
  });

  // if (typeof introContent === 'undefined') return;
  // for (i = 0; i < introContent.length; i++) {
  //   var $data = $('<div class="intro-progress-content__item"><span class="intro-progress-time"><span>' + introContent[i].count + '</span> sec</span><span class="intro-progress-text">' + introContent[i].text + '</span></div>');
  //   $content.append($data);
  // }

  // var $contentItems = $content.children();
  // $contentItems.eq(0).addClass('show');

  // setInterval(function() {
  //   $contentItems.removeClass('show');
  //   $contentItems.eq(counter).addClass('show');
  //   counter++;
  //   if (counter === introContent.length) counter = 0;
  // }, interval);
}

function videoResize(el) {
  var $container = $(el)
      $video = $container.children('video');

  $video.css({ width: 'auto', height: 'auto' });
  var ratio = $video.width() / $video.height()

  if ($container.width() / $container.height() > ratio) {
    $video.css({ width: '100%', height: 'auto' });
  } else {
    $video.css({ width: 'auto', height: '100%' });
  }
}

function navMenuFix(el) {
  var $link = $(el).find('.nav-link');
  $link.attr('data-toggle', $(window).width() < 768 ? 'collapse' : '');
}
var InfiniteScroll = require('infinite-scroll');
var Isotope = require('isotope-layout');
var imagesLoaded = require('imagesloaded');

export default {
  init() {

    InfiniteScroll.imagesLoaded = imagesLoaded;

    var $grid = $('.grid').isotope({
        itemSelector: 'article',
        layoutMode: 'masonry',
        append: 'article',
      });

    $grid.imagesLoaded( function () {
      $grid.isotope({
        itemSelector: 'article',
        layoutMode: 'masonry',
      });

      var iso = $grid.data('isotope');

      var main = $grid.infiniteScroll({
        path: '.nav-previous a',
        append: 'article',
        outlayer: iso,
        history: false,
        hideNav: '.nav-links',
      });

      main.on( 'load.infiniteScroll', onPageLoad );

      function onPageLoad() {
        $grid.isotope('layout');
      }

    });




  },
  finalize() {
    // JavaScript to be fired on the home page, after the init JS
  },
};

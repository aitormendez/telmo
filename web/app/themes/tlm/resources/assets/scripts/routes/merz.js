var InfiniteScroll = require('infinite-scroll');
var Isotope = require('isotope-layout');
var imagesLoaded = require('imagesloaded');
var jQueryBridget = require('jquery-bridget');
jQueryBridget( 'isotope', Isotope, $ );
jQueryBridget( 'infiniteScroll', InfiniteScroll, $ );

export default {
  init() {

    InfiniteScroll.imagesLoaded = imagesLoaded;

    $('.grid').imagesLoaded( function () {

      var $grid = $('.grid');

      $grid.isotope({
        itemSelector: '.article',
        layoutMode: 'masonry',
      });

      var iso = $grid.data('isotope');

      var main = $grid.infiniteScroll({
        path: '.nav-previous a',
        append: '.article',
        outlayer: iso,
        history: false,
        hideNav: '.nav-links',
      });

      main.on( 'load.infiniteScroll', onPageLoad );

      var infScroll = main.data('infiniteScroll');

      function onPageLoad() {
        $grid.isotope('layout');
      }

    });




  },
  finalize() {
    // JavaScript to be fired on the home page, after the init JS
  },
};

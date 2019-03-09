import 'isotope-layout/dist/isotope.pkgd.min';
import 'imagesloaded/imagesloaded.pkgd.min';

export default {
  init() {

    $(document).ready(function() {

      // Isotope

      const $grid = $('.grid').isotope({
        itemSelector: '.grid-item',
        layoutMode: 'masonry',
        append: '.article',
      });

      $grid.imagesLoaded().progress(function() {
        $grid.isotope('layout');
      });

      // filter items on button click
      $('.filter-button-group').on('click', 'a', function() {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({
          filter: filterValue,
        });
        $('.grid').isotope({
          hiddenStyle: {
            opacity: 0,
          },
          visibleStyle: {
            opacity: 1,
          },
        });
      });


    });


  },
  finalize() {
    // JavaScript to be fired on the home page, after the init JS
  },
};
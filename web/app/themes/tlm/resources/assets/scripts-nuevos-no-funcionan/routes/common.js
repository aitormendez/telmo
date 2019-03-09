export default {
  init() {
    // JavaScript to be fired on all pages


    $(document).ready(function() {
      $('#hamb').click(function() {
        $(this).toggleClass('closed open');
        $('.nav-primary').toggleClass('closed open');
      });
      $('.menu-item-has-children a').click(function() {
        $(this).toggleClass('open');
        $('.menu-item-has-children').toggleClass('open');
      });
    });

  },
  finalize() {
    // JavaScript to be fired on all pages, after page specific JS is fired
  },
};
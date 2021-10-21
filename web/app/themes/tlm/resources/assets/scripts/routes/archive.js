import 'infinite-scroll/dist/infinite-scroll.pkgd';
import InfiniteScroll from 'infinite-scroll/dist/infinite-scroll.pkgd';

export default {
  init() {

    // Infinite scroll
    // https://infinite-scroll.com/#getting-started

    var inf = $('.main').infiniteScroll({
      // options
      path: '.nav-previous a',
      append: 'article',
      history: false,
      hideNav: '.nav-links',
    });

    inf.on('request.infiniteScroll', function(event, path) {
      $('.content').append('<div class=\'loading\'></div>');
      $('.loading').toggleClass('visible');
    });

    inf.on('load.infiniteScroll', function(event, response, path) {
      $('.loading').toggleClass('visible');
      $('.loading').remove();
    });
  },
};

// import external dependencies
import 'jquery';

// Import everything from autoload
import './autoload/**/*'

// import local dependencies
import Router from './util/Router';
import common from './routes/common';
import home from './routes/home';
import aboutUs from './routes/about';
import mundo from './routes/mundo';
import postTypeArchiveDialogos from './routes/archive';
import postTypeArchiveMerz from './routes/merz';
import singleMerz from './routes/single-merz';
import singleCanvas from './routes/single-canvas';
import pageMapaData from './routes/mapa';

/** Populate Router instance with DOM routes */
const routes = new Router({
  // All pages
  common,
  // Home page
  home,
  // About Us page, note the change from about-us to aboutUs.
  aboutUs,
  mundo,
  postTypeArchiveDialogos,
  postTypeArchiveMerz,
  singleMerz,
  pageMapaData,
  singleCanvas,
});

// Load Events
jQuery(document).ready(() => routes.loadEvents());

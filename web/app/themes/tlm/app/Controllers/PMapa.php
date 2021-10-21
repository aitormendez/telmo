<?php

namespace App\Controllers;

use WP_Query;

use Sober\Controller\Controller;

class PMapa extends Controller
{
    public function locations()
    {
        $args = array(
          'post_type' => 'merz',
          'posts_per_page' => -1
      );
      $locations = new WP_Query($args);
        return $locations;
    }
}

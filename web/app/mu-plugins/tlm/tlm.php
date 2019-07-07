<?php
/**
 * Plugin Name: tlm-CPT
 * Description: CPT para tlm
 * Author: Aitor Méndez
 * Author URI: https://e451.net
 * Text Domain: tlm-CPT
 * License: MIT License
 * https://github.com/johnbillion/extended-cpts
 */

namespace tlm;

add_action( 'init', function() {

  load_textdomain('tlm-CPT', WPMU_PLUGIN_DIR . '/' .plugin_basename( dirname( __FILE__ ) ) . '/languages/tlm-CPT-' . get_locale() . '.mo');

  $labels_merz = [
    'name'                  => _x( 'Merz items', 'Post Type General Name', 'tlm' ),
    'singular_name'         => _x( 'Merz item', 'Post Type Singular Name', 'tlm' ),
    'menu_name'             => __( 'Merz item', 'tlm' ),
    'name_admin_bar'        => __( 'Merz item', 'tlm' ),
    'archives'              => __( 'Merz item Archives', 'tlm' ),
    'attributes'            => __( 'Merz item Attributes', 'tlm' ),
    'parent_item_colon'     => __( 'Parent Merz item:', 'tlm' ),
    'all_items'             => __( 'All Merz items', 'tlm' ),
    'add_new_item'          => __( 'Add New Merz item', 'tlm' ),
    'add_new'               => __( 'Add New', 'tlm' ),
    'new_item'              => __( 'New Merz item', 'tlm' ),
    'edit_item'             => __( 'Edit Merz item', 'tlm' ),
    'update_item'           => __( 'Update Merz item', 'tlm' ),
    'view_item'             => __( 'View Merz item', 'tlm' ),
    'view_items'            => __( 'View Merz item', 'tlm' ),
    'search_items'          => __( 'Search Merz item', 'tlm' ),
    'not_found'             => __( 'Not found', 'tlm' ),
    'not_found_in_trash'    => __( 'Not found in Trash', 'tlm' ),
    'featured_image'        => __( 'Featured Image', 'tlm' ),
    'set_featured_image'    => __( 'Set featured image', 'tlm' ),
    'remove_featured_image' => __( 'Remove featured image', 'tlm' ),
    'use_featured_image'    => __( 'Use as featured image', 'tlm' ),
    'insert_into_item'      => __( 'Insert into Merz item', 'tlm' ),
    'uploaded_to_this_item' => __( 'Uploaded to this Merz item', 'tlm' ),
    'items_list'            => __( 'Merz items list', 'tlm' ),
    'items_list_navigation' => __( 'Merz items list navigation', 'tlm' ),
    'filter_items_list'     => __( 'Filter Merz items list', 'tlm' ),
  ];

  $cols_merz = [
    'post_author' => [
    	'title'      => 'Author',
    	'post_field' => 'post_author',
    ],
  ];

  $supports_merz = [
    'author',
    'title',
    'editor',
    'thumbnail',
  ];

  $args_merz = [
    'post_tag',
  ];


  register_extended_post_type(
      'merz',
      [
          'show_in_rest' => true,
          'show_in_feed' => true,
          'labels'       => $labels_merz,
          'admin_cols'   => $cols_merz,
          'supports'     => $supports_merz,
          'taxonomies'   => $args_merz,
      ]
  );

  $labels_dialogos = [
      'name'                  => _x( 'dialogo', 'Post Type General Name', 'tlm-CPT' ),
      'singular_name'         => _x( 'dialogo', 'Post Type Singular Name', 'tlm-CPT' ),
      'menu_name'             => __( 'dialogos', 'tlm-CPT' ),
      'name_admin_bar'        => __( 'dialogo', 'tlm-CPT' ),
      'archives'              => __( 'dialogo Archives', 'tlm-CPT' ),
      'attributes'            => __( 'dialogo Attributes', 'tlm-CPT' ),
      'parent_item_colon'     => __( 'Parent dialogo:', 'tlm-CPT' ),
      'all_items'             => __( 'All dialogos', 'tlm-CPT' ),
      'add_new_item'          => __( 'Add New dialogo', 'tlm-CPT' ),
      'add_new'               => __( 'Add New', 'tlm-CPT' ),
      'new_item'              => __( 'New dialogo', 'tlm-CPT' ),
      'edit_item'             => __( 'Edit dialogo', 'tlm-CPT' ),
      'update_item'           => __( 'Update dialogo', 'tlm-CPT' ),
      'view_item'             => __( 'View dialogo', 'tlm-CPT' ),
      'view_items'            => __( 'View dialogo', 'tlm-CPT' ),
      'search_items'          => __( 'Search dialogo', 'tlm-CPT' ),
      'not_found'             => __( 'Not found', 'tlm-CPT' ),
      'not_found_in_trash'    => __( 'Not found in Trash', 'tlm-CPT' ),
      'featured_image'        => __( 'Featured Image', 'tlm-CPT' ),
      'set_featured_image'    => __( 'Set featured image', 'tlm-CPT' ),
      'remove_featured_image' => __( 'Remove featured image', 'tlm-CPT' ),
      'use_featured_image'    => __( 'Use as featured image', 'tlm-CPT' ),
      'insert_into_item'      => __( 'Insert into item', 'tlm-CPT' ),
      'uploaded_to_this_item' => __( 'Uploaded to this item', 'tlm-CPT' ),
      'items_list'            => __( 'Items list', 'tlm-CPT' ),
      'items_list_navigation' => __( 'Items list navigation', 'tlm-CPT' ),
      'filter_items_list'     => __( 'Filter items list', 'tlm-CPT' ),
  ];

  $cols_dialogo = [
    'post_author' => [
    	'title'      => 'Author',
    	'post_field' => 'post_author',
    ],
  ];

  $supports_dialogo = [
    'author',
    'title',
    'editor',
    'thumbnail',
  ];

  register_extended_post_type(
      'dialogo',
      [
          'show_in_rest'  => true,
          'show_in_feed'  => true,
          'labels'        => $labels_dialogos,
          'admin_cols'    => $cols_dialogo,
          'supports'      => $supports_dialogo,
      ]
  );

  $labels_cuento = [
    'name'                  => _x( 'cuento', 'Post Type General Name', 'tlm-CPT' ),
    'singular_name'         => _x( 'cuento', 'Post Type Singular Name', 'tlm-CPT' ),
    'menu_name'             => __( 'cuentos', 'tlm-CPT' ),
    'name_admin_bar'        => __( 'cuento', 'tlm-CPT' ),
    'archives'              => __( 'cuento Archives', 'tlm-CPT' ),
    'attributes'            => __( 'cuento Attributes', 'tlm-CPT' ),
    'parent_item_colon'     => __( 'Parent cuento:', 'tlm-CPT' ),
    'all_items'             => __( 'All cuentos', 'tlm-CPT' ),
    'add_new_item'          => __( 'Add New cuento', 'tlm-CPT' ),
    'add_new'               => __( 'Add New', 'tlm-CPT' ),
    'new_item'              => __( 'New cuento', 'tlm-CPT' ),
    'edit_item'             => __( 'Edit cuento', 'tlm-CPT' ),
    'update_item'           => __( 'Update cuento', 'tlm-CPT' ),
    'view_item'             => __( 'View cuento', 'tlm-CPT' ),
    'view_items'            => __( 'View cuentos', 'tlm-CPT' ),
    'search_items'          => __( 'Search cuentos', 'tlm-CPT' ),
    'not_found'             => __( 'Not found', 'tlm-CPT' ),
    'not_found_in_trash'    => __( 'Not found in Trash', 'tlm-CPT' ),
    'featured_image'        => __( 'Featured Image', 'tlm-CPT' ),
    'set_featured_image'    => __( 'Set featured image', 'tlm-CPT' ),
    'remove_featured_image' => __( 'Remove featured image', 'tlm-CPT' ),
    'use_featured_image'    => __( 'Use as featured image', 'tlm-CPT' ),
    'insert_into_item'      => __( 'Insert into item', 'tlm-CPT' ),
    'uploaded_to_this_item' => __( 'Uploaded to this item', 'tlm-CPT' ),
    'items_list'            => __( 'Items list', 'tlm-CPT' ),
    'items_list_navigation' => __( 'Items list navigation', 'tlm-CPT' ),
    'filter_items_list'     => __( 'Filter items list', 'tlm-CPT' ),
  ];

  register_extended_post_type(
      'cuento',
      [
          'show_in_rest' => true,
          'show_in_feed' => true,
          'labels'       => $labels_cuento,
      ]
  );


}, 0 );

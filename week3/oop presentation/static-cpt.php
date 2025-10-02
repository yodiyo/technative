<?php
function mymovie_cpt() {
    $labels = [
        'name'          => 'Movies',
        'singular_name' => 'Movie',
    ];

    $args = [
        'labels'       => $labels,
        'public'       => true,
        'has_archive'  => true,
        'supports'     => ['title', 'editor', 'thumbnail'],
        'menu_icon'    => 'dashicons-format-video',
    ];

    register_post_type('movie', $args);
}
add_action('init', 'mymovie_cpt');

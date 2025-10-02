<?php

new CustomPostType('book', [
    'supports' => ['title', 'editor', 'thumbnail'],
    'menu_icon' => 'dashicons-book',
]);

new CustomPostType('movie', [
    'supports' => ['title', 'editor'],
    'menu_icon' => 'dashicons-format-video',
]);

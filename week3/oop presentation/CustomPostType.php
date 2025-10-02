<?php
class CustomPostType {
    private string $name;
    private array $args;

    public function __construct(string $name, array $args = []) {
        $this->name = $name;
        $this->args = $args;

        // Hook the register method into WordPress
        add_action('init', [$this, 'register']);
    }

    public function register(): void {
        // Default labels (can be overridden by $this->args['labels'])
        $labels = [
            'name'          => ucfirst($this->name) . 's',
            'singular_name' => ucfirst($this->name),
        ];

        // Default args (merged with custom args)
        $defaults = [
            'labels'       => $labels,
            'public'       => true,
            'has_archive'  => true,
            'supports'     => ['title', 'editor'],
            'show_in_rest' => true, // ✅ enables Gutenberg/REST API
        ];

        $args = array_replace_recursive($defaults, $this->args);

        register_post_type($this->name, $args);
    }
}

<?php
/**
 * Plugin Name: Guty Blocks 2
 * Description: A rebuild of guty blocks build environment
 * Version: 2.0.0
 * Author: Jim Schofield
 * Text Domain: gutyblocks2
 * Domain Path: /languages
 *
 * @package gutyblocks2
 */
// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}
 
/**
 * Enqueue block JavaScript and CSS for the editor
 */
function gutyblocks2_plugin_editor_scripts() {
 
    // Enqueue block editor JS
    wp_register_script(
        'gutyblocks2/editor-scripts',
        plugins_url( '/assets/dist/build.js', __FILE__ ),
        [ 'wp-blocks', 'wp-element', 'wp-editor', 'wp-components', 'wp-i18n' ],
        filemtime( plugin_dir_path( __FILE__ ) . '/assets/dist/build.js' ) 
    );
 
    // Enqueue block editor styles
    wp_register_style(
        'gutyblocks2/stylesheets',
        plugins_url( 'assets/dist/style.css', __FILE__ ),
        [ 'wp-edit-blocks' ],
        filemtime( plugin_dir_path( __FILE__ ) . 'assets/dist/style.css' ) 
    );

    register_block_type('gutyblocks2/block-library', array(
        'editor_script' => 'gutyblocks2/editor-scripts',
        'style' => 'gutyblocks2/stylesheets'   
    ));
 
}

// Hook the enqueue functions into the editor
add_action( 'init', 'gutyblocks2_plugin_editor_scripts' );

/**
 * Enqueue view scripts
 */
function gutyblocks2_plugin_view_scripts() {
    if ( is_admin() ) {
        return;
    }

    wp_enqueue_script(
		'gutyblocks2/view-scripts',
		plugins_url( '/assets/dist/build.view.js', __FILE__ ),
        array( 'wp-blocks', 'wp-element', 'react', 'react-dom' )
    );
}

add_action( 'enqueue_block_assets', 'gutyblocks2_plugin_view_scripts' );
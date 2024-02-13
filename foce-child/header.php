<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package Fleurs_d\'oranger_&_Chats_errants
 */

?>
<!doctype html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="profile" href="https://gmpg.org/xfn/11">

	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<?php wp_body_open(); ?>
<div id="page" class="site">
	<a class="skip-link screen-reader-text" href="#primary"><?php esc_html_e( 'Skip to content', 'foce' ); ?></a>

	<?php wp_body_open(); ?>
<div id="page" class="site">
    <a class="skip-link screen-reader-text" href="#primary"><?php esc_html_e( 'Skip to content', 'foce' ); ?></a>

    <header id="masthead" class="site-header">
        <nav id="site-navigation" class="main-navigation">
            <div class="nav-left">
                <!-- Espace vide pour centrer le titre et le menu hamburger -->
            </div>
            
            <div class="nav-center">
                <div class="site-title">
                    <a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home"><?php bloginfo( 'name' ); ?></a>
                </div>
            </div>

            <div class="nav-right">
                <button class="menu-toggle" aria-controls="primary-menu" aria-expanded="false">
                    <span class="line"></span>
                    <span class="line"></span>
                    <span class="line"></span>
                </button>
            </div>

            <div class="fullscreen-nav">
                <ul>
                    <li class="logo-nav"><img src="<?php  echo get_stylesheet_directory_uri() . '/assets/images/logo-nav.png'; ?> " alt="logo"></li>
                    <li class="story-nav"><a href="#story">Histoire</a></li>
                    <li class="characters-nav"><a href="#characters">Personnages</a></li>
                    <li class="place-nav"><a href="#place">Lieu</a></li>
                    <li class="studio-nav"><a href="#studio">Studio Koukaki</a></li>
                </ul>
                <span class="footernav"><a href="#">STUDIO KOUKAKI</a></span>
            </div>
        
        </nav><!-- #site-navigation -->
    </header><!-- #masthead -->

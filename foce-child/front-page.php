<?php

get_header();
?>

    <main id="primary" class="site-main">
        <div id="parallax-header" class="fade-in">
            <video id="parallax-video" class="banner-mp4" autoplay loop muted>
                <source src="<?php echo get_stylesheet_directory_uri() . '/assets/video/Koukaki-video-header.mp4'; ?>" type="video/mp4">
            </video>
            <section class="banner">
                <img id="parallax-logo" src="<?php echo get_template_directory_uri() . '/assets/images/logo.png'; ?> " alt="logo Fleurs d'oranger & chats errants">
            </section>
        </div>


        <section id="story" class="story fade-in">
            <h2><span>L'histoire</span></h2>
            <article id="" class="story__article">
                <p><?php echo get_theme_mod('story'); ?></p>
            </article>
            
            <!-- Personnages -->
            <?php get_template_part( 'template_parts/characters_section' ); ?>
            
            <article id="place" class="fade-in">
                <img class="big-cloud" src="<?php echo get_theme_file_uri() . '/assets/images/big_cloud.png'; ?>" alt="Gros nuage">
                <img class="little-cloud" src="<?php echo get_theme_file_uri() . '/assets/images/little_cloud.png'; ?>" alt="Petit nuage">
                <div>
                    <h3><span>Le Lieu</span></h3>
                    <p><?php echo get_theme_mod('place'); ?></p>
                </div>

            </article>
        </section>


        <section id="studio" class="fade-in">
            <h2><span>Studio Koukaki</span></h2>
            <div>
                <p>Acteur majeur de l’animation, Koukaki est un studio intégré fondé en 2012 qui créé, produit et distribue des programmes originaux dans plus de 190 pays pour les enfants et les adultes. Nous avons deux sections en activité : le long métrage et le court métrage. Nous développons des films fantastiques, principalement autour de la culture de notre pays natal, le Japon.</p>
                <p>Avec une créativité et une capacité d’innovation mondialement reconnues, une expertise éditoriale et commerciale à la pointe de son industrie, le Studio Koukaki se positionne comme un acteur incontournable dans un marché en forte croissance. Koukaki construit chaque année de véritables succès et capitalise sur de puissantes marques historiques. Cette année, il vous présente “Fleurs d’oranger et chats errants”.</p>
            </div>
        </section>


        <section id="nomination" class="fade-in">
            <h3 class="title-nominations"><span>Fleurs d'oranger & chats errants est nominé aux Oscars Short Film Animated de 2022 !</span></h3>
            <img class="nominations-img" src="<?php echo get_stylesheet_directory_uri() . '/assets/images/nomination_oscars.png'; ?>" alt="Image Nomination aux Oscars">
        </section>


    </main><!-- #main -->

<?php
get_footer();

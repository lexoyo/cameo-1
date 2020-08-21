

    window.silex = window.silex || {}
    window.silex.data = {"site":{"width":1400},"pages":[{"id":"page-accueil","displayName":"accueil","link":{"linkType":"LinkTypePage","href":"#!page-accueil"},"canDelete":true,"canProperties":true,"canMove":true,"canRename":true},{"id":"page-grand-groupe","displayName":"Grand groupe","link":{"linkType":"LinkTypePage","href":"#!page-grand-groupe"},"canDelete":true,"canProperties":true,"canMove":true,"canRename":true},{"id":"page-entreprise-innovante","displayName":"Entreprise innovante","link":{"linkType":"LinkTypePage","href":"#!page-entreprise-innovante"},"canDelete":true,"canProperties":true,"canMove":true,"canRename":true},{"id":"page-politique-de-confidentialit-","displayName":"Politique de confidentialité","link":{"linkType":"LinkTypePage","href":"#!page-politique-de-confidentialit-"},"canDelete":true,"canProperties":true,"canMove":true,"canRename":true},{"id":"page-mentions-l-gales","displayName":"Mentions légales","link":{"linkType":"LinkTypePage","href":"#!page-mentions-l-gales"},"canDelete":true,"canProperties":true,"canMove":true,"canRename":true}]}
/* animation on scroll widget */
$(function() {
    var $animation_elements = $('.animation-element');
    var $window = $(window);

    function check_if_in_view() {
    var window_height = $window.height();
    var window_top_position = $window.scrollTop();
    var window_bottom_position = (window_top_position + window_height);
    
    $.each($animation_elements, function() {
        var $element = $(this);
        var element_height = $element.outerHeight();
        var element_top_position = $element.offset().top;
        var element_bottom_position = (element_top_position + element_height);
    
        //check to see if this current container is within viewport
        if ((element_bottom_position >= window_top_position) &&
            (element_top_position <= window_bottom_position)) {
        $element.addClass('in-view');
        } else {
        $element.removeClass('in-view');
        }
    });
    }

    $window.on('scroll resize', check_if_in_view);
    $window.trigger('scroll');

});
/*smooth scroll for chrome */
// $('html, body').css({'scroll-behavior': 'smooth'})

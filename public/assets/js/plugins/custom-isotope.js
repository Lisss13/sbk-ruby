(function($) { "use strict";
        var $grid = $('.list-portfolio-warp').imagesLoaded( function() {
          $grid.isotope({
            itemSelector: '.element-item',
            percentPosition: true,
            masonry: {
              columnWidth: '.grid-sizer'
            }
          });
          $grid.isotope();
        });
  
    
    $('.projectFilter a').click(function(){
        $('.projectFilter .current').removeClass('current');
        $(this).addClass('current');
 
        var selector = $(this).attr('data-filter');
        $grid.isotope({
            filter: selector,
            
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
         });
         return false;
    }); 
            
})(jQuery);
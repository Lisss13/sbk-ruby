(function() {"use strict";

    /* 
      Intializing Navigation Effect
    ========================================================================== */
      $('.main-nav>ul li').on('mouseenter', function(){
            $(this).find('>ul').addClass("open-nav animated fadeIn");
        });
      $('.main-nav>ul li').on('mouseleave', function(){
           $(this).find('>ul').removeClass("open-nav animated fadeIn");
        });
  /* 
     Home Search
     ========================================================================== */
    $('.btn-search-header span').on ('click',function()
      {
          $(this).toggleClass("lnr-cross open");

          $(this).find(' + .search-popup').fadeToggle();
          return false;
    });
  /* Cart List Widget */
    $('.cart-button a').on ('click',function()
      {
          $(this).find('+ .top_cart_list_product').fadeToggle();
          return false;
    });
  
  
  /* Full height 404 */
    var height = $( window ).height();
    var headerHeight = $('header').height();
    var footerHeight = $('footer').height();
    var warp404 = height-headerHeight-footerHeight;
    $(".warp-404").height(warp404);
    $( window ).resize(function() {
        var height = $( window ).height();
        var headerHeight = $('header').height();
        var footerHeight = $('footer').height();
        var warp404 = height-headerHeight-footerHeight;
        $(".warp-404").height(warp404);
    });
  


  /* 
   Backtotop
   ========================================================================== */
    var offset = 450;
    var duration = 500;   
    $(window).on('scroll', function(){
         if ($(this).scrollTop() > offset) {
                $('#to-the-top').fadeIn(duration);
            } else {
                $('#to-the-top').fadeOut(duration);
            }
    });

    $('#to-the-top').on('click', function(event){
        event.preventDefault();
        $('html, body').animate({scrollTop: 0}, duration);
        return false;
    });

    
    /* Fixed Menu HOme 2 */
   
      $(window).on('scroll', function(){
          if ($(this).scrollTop() > 0) {
                $('#header-home-2').addClass("bg-dark");
            } else {
                $('#header-home-2').removeClass("bg-dark");
            }
      });
    
     $(function(){
      $(document).scroll(function(){
          if($(this).scrollTop() <= 0) {
              $("#stick").trigger("sticky_kit:detach");
          } else {
              $("#stick").stick_in_parent({container: $("#page"), offset_top: 0});
          }
      });
  });


})(jQuery);


    
  /*Preload*/
  (function($) { "use strict";
      Royal_Preloader.config({
          mode:           'logo',
          logo:           '/assets/images/logo-on-dark.png',
          timeout:       1,
          showInfo:       false,
          opacity:        1,
          background:     ['#333']
      });
  })(jQuery);
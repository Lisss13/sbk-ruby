 $(document).ready(function(){
  "use strict";
    /* portfolio h1 */
        $("#portfolio-h1").owlCarousel({
            autoplay:true,
            loop:true,
            items : 1,
            dots:true,
            nav:false,
            animateOut: 'fadeOut',
            animateIn: 'fadeIn',
        });
        
    /* Testimonial h1 */
    
        var owltestimonial1 = $("#testimonial-1").owlCarousel({
           
                autoPlay: true, //Set AutoPlay to 3 seconds
                items : 1,
                loop:true,
                dots:false,
                nav:false,
                animateOut: 'fadeOut',
                animateIn: 'fadeIn',
               
            });
        
        $("body").on("click",".next-testimonial-h1",function(event){
          owltestimonial1.trigger("next.owl.carousel");
        });
        $("body").on("click",".prev-testimonial-h1",function(event){
          owltestimonial1.trigger("prev.owl.carousel");
        });    
    
    /* Partner 1 */
        $("#partner-h1").owlCarousel({
       
            autoPlay: true, //Set AutoPlay to 3 seconds
            items : 6,
            responsiveClass:true,
            responsive : {
            // breakpoint from 0 up
            0 : {
               items:1,
            },
            // breakpoint from 480 up
            480 : {
               items:1,
            },
            // breakpoint from 768 up
            768 : {
                items:3,
            },
            992 : {
                items:3,
            },
            1440 : {
                items:4,
            },
            1920 : {
                items:6,
            }
        },
            dots:false,
            nav:false,
            animateOut: 'fadeOut',
            animateIn: 'fadeIn',
        });   

    /* Testimonial h1 */
    
        $("#testimonial-2").owlCarousel({
           
                autoPlay: true, 
                loop:true,
                items : 1,
                dots:true,
                nav:false,
                animateOut: 'fadeOut',
                animateIn: 'fadeIn',
            });
       

 });
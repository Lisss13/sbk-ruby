$( document ).ready(function() {"use strict";
      var tpj = jQuery;

                var revapi8;
                tpj(document).ready(function() {
                    if (tpj("#slider_1").revolution == undefined) {
                        revslider_showDoubleJqueryError("#slider_1");
                    } else {
                        revapi8 = tpj("#slider_1").show().revolution({
                            sliderType: "standard",
                            jsFileLocation: "../../revolution/js/",
                            sliderLayout: "auto",
                            fullScreenOffsetContainer:".header-home",
                            delay: 9999000,
                            navigation: {
                                arrows:{enable:false},
                                bullets: {
                                     style:"custom",
                                     enable:true,
                                     hide_onmobile:true,
                                     hide_onleave:false,
                                     hide_delay:200,
                                     hide_delay_mobile:480,
                                     direction:"horizontal",
                                     h_align:"left",
                                     v_align:"bottom",
                                     space:0,
                                    v_offset: 50,
                                    h_offset:200,
                                },
                            },
                            responsiveLevels:[1920,991,767,481],
                            gridwidth:[1170,768,481,480],
                            gridheight:[768,768,768,768]                     
                            
                        });
                    }
                }); /*ready*/
});


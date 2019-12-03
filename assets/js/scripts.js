/* target links same and/or forward page */
$(window).ready(function () {
    var interval = setInterval(function () {
        if (window.location.hash)
            window.location = window.location.hash;
    }, 0);
    setTimeout(function () {
        clearInterval(interval);
    }, 0);
});

$(function () {
    // global variables
    var theWindow = $(window),
        body = $("body"),
        header = $("header"),
        headerBottom = $("header").outerHeight(),
        stickyBottom = $("#hd-top").outerHeight();

    // //HEADER SCROLL
    $(window).on('resize', function () {              
        if (theWindow.width() > 1023) {
            $(body).addClass("not-scrolled");    
        }                 
        $("#page-title").css('padding-top', header.outerHeight());   
    }).trigger('resize');    
    theWindow.on("scroll", function () {      
        if (theWindow.width() > 1023) {
            if (theWindow.scrollTop() > headerBottom) {
                body.addClass("fix-nav");         
                body.removeClass("not-scrolled");
                //moveInfo(true); 
                //header.addClass("animated slideInDown");
            } else if (theWindow.scrollTop() <= 0) {
                body.removeClass("fix-nav");
                body.addClass("not-scrolled");
                //moveInfo(false);
                //header.removeClass("animated slideInDown");
            }
        } else {
            if (theWindow.scrollTop() > stickyBottom) {
                body.addClass("attach");
            } else if ( theWindow.scrollTop() <= 0 ){
                body.removeClass("attach");
            } 
        }      
    });  

    // if ( theWindow.width() < 1023 ) { moveInfo(true); }
    // function moveInfo(cloned) {
    //     if ( cloned ) {
    //         if (!$("#hd-contents #hd-info").length) {
    //             $("#hd-info").clone().appendTo("#hd-contents");                       
    //         }
    //     } else {
    //         $("#hd-contents #hd-info").remove();        
    //     }            
    //     cloned = false;
    // }    

    //SLICK SLIDERS
    $("main .slick-slider").slick({
        dots:true,
        arrows:true,
        appendDots:"#controls",  
        prevArrow:'<a href="#" id="prev"><i class="icon-angle-left"></i></a>',
        nextArrow:'<a href="#" id="next"><i class="icon-angle-right"></i></a>',                  
        customPaging:function(slider,index) {         
            return '<span></span>';
        },
        responsive: 
        [{
            breakpoint: 1185,
            settings: {  
                appendArrows:"#controls"                               
            } 
        }]
    }); 

    // $(".slick-letters").slick({
    //     dots:true,
    //     arrows:true,
    //     appendArrows:".letters-controls",
    //     appendDots:".letters-controls",  
        // prevArrow:'<a href="#" id="prev"><i class="icon-angle-left"></i></a>',
        // nextArrow:'<a href="#" id="next"><i class="icon-angle-right"></i></a>',     
    //     customPaging:function(slider,index) {         
    //         return '<span></span>';
    //     },
    //     responsive: 
    //     [{
    //         breakpoint: 1023,
    //         settings: {                                             
    //         } 
    //     }]
    // }); 

    //TOUR WITH THUMBNAILS
    // $(".slick-tour").slick({
    //     dots:false,
    //     arrows:false,
    //     slidesToShow:1,
    //     slidesToScroll:1,
    //     fade:true,
    //     asNavFor:'.slick-tour-nav',
    //     responsive: 
    //     [{
    //         breakpoint: 900,
    //         settings: {
    //             arrows:true,
    //             dots:true,                
        // prevArrow:'<a href="#" id="prev"><i class="icon-angle-left"></i></a>',
        // nextArrow:'<a href="#" id="next"><i class="icon-angle-right"></i></a>',     
    //             appendArrows: '.tour-controls',
    //             appendDots: '.tour-controls',                
    //             asNavFor:false,
    //             customPaging:function(slider,index) {         
    //                 return '<span></span>';
    //             }
    //         } 
    //     }]       
    // }); 
    // if(theWindow.width() > 900) { 
    //     $('.slick-tour-nav').slick({
    //         slidesToShow:5,
    //         slidesToScroll:1,
    //         asNavFor:'.slick-tour',        
        // prevArrow:'<a href="#" id="prev"><i class="icon-angle-left"></i></a>',
        // nextArrow:'<a href="#" id="next"><i class="icon-angle-right"></i></a>',         
    //         dots:false,
    //         arrows:true,
    //         focusOnSelect:true
    //     })
    // }

    // $(".slick-banner").slick({      
    //     dots:true,   
    //     arrows:false,  
    //     appendDots:".banner-controls",
    //     fade:true,
    //     draggable:false,
    //     autoplay:true,
    //     autoplaySpeed:8000,
    //     speed:800,
    //       customPaging:function(slider,index) {         
    //          return '<span></span>';
    //    }
    // });   

    $(".slick-reviews").slick({   
        dots:true,
        arrows:true, 
        fade:true,
        appendDots:".reviews-controls",
        prevArrow:'<a href="#" id="prev"><i class="icon-angle-left"></i></a>',
        nextArrow:'<a href="#" id="next"><i class="icon-angle-right"></i></a>',                      
        customPaging:function(slider,index) {
            //var social = $(slider.$slides[index]).find("[data-source]").data('source');
            //return '<span class="'+ social +'"></span>';
            return '<span></span>';
        },
        responsive: [
        {
          breakpoint: 1145,
          settings: {
            appendArrows:".reviews-controls",
          }
        }]
    }); 

    //     responsive: 
    //     [{
    //         breakpoint: 900,
    //         settings: {
    //         } 
    //     }],
    //     customPaging:function(slider,index) {         
    //         return '<span></span>';
    //     }
    //     // customPaging:function(slider,index) {
    //     //     var totalCount = "", totalSlides = ""; //to add 0
    //     //     if (slider.slideCount < 10) { totalCount = ""; }
    //     //     if (index < 9) { totalSlides ="";  }   
    //     //     return '<span><b>' + totalSlides + (index + 1) + '</b>/' + totalCount + slider.slideCount +'</span>';
    //     // },            
    //     // customPaging:function(slider,index) {
    //     //         var addThumb = index + 1;
    //     //         return '<span class="thumb"><img src="assets/images/banner-'+ addThumb +'-th.jpg" /></span>';
    //     // }
    // });   

    // if(theWindow.width() > 1023) { 
    //     $(".slick-services").slick({      
    //         dots:true,     
    //         arrows:false, 
    //         appendDots:".services-controls",
    //         appendArrows:".services-controls",
        // prevArrow:'<a href="#" id="prev"><i class="icon-angle-left"></i></a>',
        // nextArrow:'<a href="#" id="next"><i class="icon-angle-right"></i></a>',     
    //         autoplay:true,
    //         autoplaySpeed:8000,
    //         responsive: 
    //         [{
    //             breakpoint: 900,
    //             settings: {                
    //             } 
    //         }],
    //         speed:800,   
    //         customPaging:function(slider,index) {
    //             return '<span></span>';
    //         }
    //     });
    // }

    // $(".slick-specials").slick({      
    //     dots:true,     
    //     arrows:true,   
    //     appendArrows:".specials-controls",
    //     appendDots:".specials-controls",
        // prevArrow:'<a href="#" id="prev"><i class="icon-angle-left"></i></a>',
        // nextArrow:'<a href="#" id="next"><i class="icon-angle-right"></i></a>',      
    //     slidesToShow:2,
    //     focusOnSelect:true,
    //     responsive: 
    //     [{
    //         breakpoint: 900,
    //         settings: {
    //             slidesToShow:1
    //         } 
    //     }],
    //     customPaging:function(slider,index) {
    //         return '<span></span>';
    //     }
    // }); 

    // if(theWindow.width() > 1023) {
    //     $(".slick-about").slick({      
    //         dots:true,     
    //         arrows:true,           
    //         appendArrows:".about-controls",
        // prevArrow:'<a href="#" id="prev"><i class="icon-angle-left"></i></a>',
        // nextArrow:'<a href="#" id="next"><i class="icon-angle-right"></i></a>',     
    //         appendDots:".about-controls",
    //         customPaging:function(slider,index) {
    //         var totalCount = "", totalSlides = ""; //to add 0
    //         if (slider.slideCount < 10) { totalCount = ""; }
    //         if (index < 9) { totalSlides ="";  }   
    //         return '<span><b>' + totalSlides + (index + 1) + '</b>/' + totalCount + slider.slideCount +'</span>';
    //         }
    //     });         
    // }
    // $(".slick-switch").slick({      
    //     dots:false,     
    //     arrows:false,           
        // prevArrow:'<a href="#" id="prev"><i class="icon-angle-left"></i></a>',
        // nextArrow:'<a href="#" id="next"><i class="icon-angle-right"></i></a>',     
    //     fade:true,
    //     focusOnSelect: true,
    //     asNavFor: '#switch-nav'
    // }); 
    // $("#switch-nav").slick({
    //     arrows:false,   
    //     dots:false,     
    //     draggable:false,
    //     infinite:false,
    //     slidesToShow:2,
    //     focusOnSelect:true,
    //     asNavFor: ".slick-switch"
    // });

    // if(theWindow.width() > 1023) {

    // $(".services-nav").slick({
    //     arrows:false,   
    //     dots:false,     
    //     draggable:false,
    //     infinite:false,
    //     vertical:true,
    //     slidesToShow:5,
    //     focusOnSelect:true,
    //     asNavFor: ".slick-services"
    // });
    // }

    // if(theWindow.width() > 1023) {
    //     $(".slick-callouts").slick({
    //         dots:true,
    //         arrows:true,
    //         centerMode:true,
    //         slidesToShow:3,
    //         appendDots:".callouts-controls",
    //         appendArrows:".callouts-controls",
        // prevArrow:'<a href="#" id="prev"><i class="icon-angle-left"></i></a>',
        // nextArrow:'<a href="#" id="next"><i class="icon-angle-right"></i></a>',                      
    //         customPaging:function(slider,index) {         
    //             return '<span></span>';
    //         }
    //     }); 
    // }    

    //RSS Feed
    // $("#feed").rss("https://www.glastonburysmiles.com/blog/feed/", {
    //       ssl: true,
    //       limit: 5,
    //       layoutTemplate: '<ul id="rss-feed">{entries}</ul>',
    //       entryTemplate: '<li><a href="{url}" target="_blank">{title}</a></li>'     
    // });  
    
    //Fancybox
    // $(function () {
    //     var url;
    //     $("#gallery-main div a.modal").each(function () {
    //         if ($(this).children('img.use-same').length > 0) {
    //             var replacement = '.jpg';
    //         } else {
    //             var replacement = '_lg.jpg';
    //         }
    //         url = $(this).children('img').attr('src').replace('.jpg', replacement);
    //         $(this).attr('href', url);
    //     });
    //     $('#gallery-main div a.modal, a.modal').fancybox();
    // });

  

    // if(theWindow.width() < 1200) {
    //     $(".featured").slick({      
    //         dots:true,     
    //         arrows:true,  
    //         centerMode:true,
    //         slidesToShow:3,
    //         centerPadding:'0px',
    //         initialSlide:0,
    //         appendArrows:'.featured-controls',
    //         appendDots:'.featured-controls',
            // prevArrow:'<a href="#" id="prev"><i class="icon-angle-left"></i></a>',
            // nextArrow:'<a href="#" id="next"><i class="icon-angle-right"></i></a>',                      
    //         responsive: 
    //         [{
    //             breakpoint: 800,
    //             settings: {                
    //                 slidesToShow:1,
    //             } 
    //         }],   
    //         customPaging:function(slider,index) {
    //                 return '<span></span>';
    //         }
    //     }); 
    // }

    //  $(".slick-reviews").slick({   
    //     dots:true,
    //     arrows:true, 
    //     appendArrows:".reviews-controls",
    //     appendDots:".reviews-controls",
           // prevArrow:'<a href="#" id="prev"><i class="icon-angle-left"></i></a>',
           // nextArrow:'<a href="#" id="next"><i class="icon-angle-right"></i></a>',                      
    //     customPaging:function(slider,index) {
    //         var social = $(slider.$slides[index]).find("[data-source]").data('source');
    //         return '<span class="'+ social +'"></span>';
    //     },
    //     responsive: [
    //     {
    //       breakpoint: 900,
    //       settings: {

    //       }
    //     }]
    // }); 

    //  $(".reviews-controls").slick({
    //     slidesToShow:1,
    //     arrows:true,   
    //     dots:true,     
    //     draggable:false,
    // prevArrow:'<a href="#" id="prev"><i class="icon-angle-left"></i></a>',
    // nextArrow:'<a href="#" id="next"><i class="icon-angle-right"></i></a>',                      
    //     customPaging:function(slider,index) {
    //             return '<span></span>';
    //     },
    //     asNavFor: ".slick-reviews"
    // });

    // $(".slick-form").slick({      
    //     dots:true,     
    //     infinite:false,
    //     draggable: false,
    //     prevArrow:'',
    //     appendDots:'.form-controls',
    //     nextArrow:'footer .forms .next', 
    //     arrows:true,
    // }); 
    // //prevent validator on slider form
    // $('footer .forms input').on('invalid', function(e) { e.preventDefault(); });

    //WRAP STRINGS
    $(".why h2:contains('Why Choose Jeffrey Hermen, DDS')").html(function(_, html) {
       return html.replace(/(Why Choose Jeffrey Hermen, DDS)/g, '<span>$1</span>');
    });

    //INSTA FEED
    // if (theWindow.width() > 600 ) {  
    //     if($(body).hasClass("page_index")) {
    //         new Instafeed({
    //             get: "user",
    //             userId: 1981626751,
    //             accessToken: "1981626751.dab8d59.046b36877d3747dbba46b095032b6715",
    //             resolution: "standard_resolution",
    //             useHttp: "true",
    //             limit: 11,
    //             template: '<a href="{{link}}" target="_blank" class="{{orientation}}"><img src="{{image}}" alt=""/></a>',
    //             target: "ig-feed",
    //             sortBy: "most-recent",
    //             after: function () {
    //               //////// carousel
    //                 $('#ig-feed').slick({
    //                     slidesToShow: 1,
    //                     arrows: true,
    //                     appendArrows:'.ig-controls', 
    //                     prevArrow:'<a href="#" id="prev"><i class="icon-left"></i></a>',
    //                     nextArrow:'<a href="#" id="next"><i class="icon-right"></i></a>',  
    //                     infinite: true,
    //                     autoplay: false,
    //                     cssEase: 'linear'                        
    //                 });
    //             }

    //         }).run();
    //     }
    // }

    //RESPONSIVE
    $('header #main-nav').meanmenu({
        meanMenuContainer: '#hd-contents',
        meanMenuOpen: "<i class='icon-menu'></i>",
        meanMenuClose: "<i class='icon-plus'></i>",
        meanScreenWidth: 1023,
        meanDisplay: "flex"
    });

    if (theWindow.width() < 1023) {
        $("footer .social").clone().prependTo(".mean-container .mean-nav");
        $("footer .hours").clone().appendTo(".mean-container .mean-nav"); 
        //$("footer .social").insertBefore("footer .forms");
        //$("footer #copy").insertAfter("#fo-right");
        //$("footer .social").appendTo("#fo-contents");
    }

    //PAGE ACTIONS
    if($(".page-divider").length) {
        $(".page-divider").tntdivider({
            alt:'even',
            alignBody: true,
            alignTitles: true,
            alignHeight: 400
        });  
    }

    //page with intro
    if($("#intro").length){    
        $("#intro").find("h1:first-child, #append").wrapAll('<div id="page-title" />');
        $("#intro").appendTo("#page-title").parent().addClass("has-intro");
    } else {        
        $("#page h1:first-child:not(.detach), #page #append").appendTo("#page-title").wrapAll('<div class="container" />'); 
    }
    //Custom Borders
    // $("img.elem-left, img.elem-right").each(function() {
    //     var objClass = $(this).attr('class');    
    //     $(this).wrapAll('<span class="elem-orbs ' + objClass + '"/>');                    
    //     $(this).removeClass();
    // });

    // //page tags
    // var pageTag = $("#page h1").data("tag"),
    //     sectionTag = $("[data-tag]");
    // if (pageTag != null) {
    //     $("#page-title").prepend('<span class="tag">'+ pageTag +"</span>");
    // } else if (sectionTag != null) {
    //     sectionTag.each(function() {
    //         var sectionTagText = $(this).data("tag");
    //         $(this).append('<span class="tag">'+ sectionTagText +"</span>");
    //     });
    // }

    //$("#page h1:first-child:not(.detach), #page #append").appendTo("#page-title").wrapAll('<div class="container" />'); 
    //$(".more-to-explore").appendTo("#contact"); 
    $(".more-to-explore").find("span").addClass("h2");      

    // accordion + video reload
    $(".accordion h3, .accordion h2").addClass("toggle").wrapInner("<span />");
    $(".toggle").each(function () {
        $(this).nextUntil('.toggle').add().wrapAll('<div class="accordion-content"><span />');
    });
    $(".toggle").on("click", function () {
        if ($(this).hasClass("active")) {
            $(this).removeClass("active").next().slideUp();
        } else {
            $(".toggle").removeClass("active").next().slideUp();
            $(this).addClass("active").next().slideDown();
            for (var i = 0; i < $('.accordion iframe').length; i++) {
                var noAutoPlay = $('.accordion iframe').attr('src').replace('autoplay=1','autoplay=0');
                $ ('.accordion iframe').attr('src', noAutoPlay);
                //url add: ?enablejsapi=1
                $('.accordion iframe')[i].contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
            }
        }
    });

    /// Randomized Banner Background
    // var selectBG = Math.floor(Math.random() * 12) + 1;
    // if (!$("body").hasClass("page_index")) {
    //     $('#page-title.banner-title').css({
    //         'background-image': 'url(assets/images/banner-' + selectBG + '.jpg)',
    //         'background-repeat': 'no-repeat',
    //         'background-position': 'right top',
    //         'background-size': 'cover'
    //     })
    // }

    // $(".cards a").hover(function() {
    //     console.log("hover");
    //     $(".cards a").removeClass("active");
    //     $(this).addClass("active");
    //     return false;        
    // })

    //tntvideos defaults
    // if($("[data-player]").length) {
    //     $("[data-player]").tntvideos({      
    //         playButton: '.play-btn',
    //         closeButton: '.close-btn',
    //         bodyPlaying: '.playing',
    //         offset:0,
    //         mobileWidth: 900
    //     }); 
    // }

    // var typed = new Typed('.tag-main', {
    //   strings: ["SMILE","COMFORT","HEALTH"],
    //   typeSpeed: 80,
    //   startDelay:200,backSpeed:50,backDelay:3000,loop:true
    // });

    /*$(".section").append(function() {
        var target = $(this).find(".img-title");
        $(this).find("figure").prepend(target);
    });*/    

    // $(".page-services ul").each(function() {
    //     $(this).css('margin-bottom', -$(this).height());
    // });

    //$(".page-services").appendTo("#page");      
    
    
});

/* SCROLLMAGIC */
// var controller = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: "onEnter", duration: "200%"}});
// var controller2 = new ScrollMagic.Controller();

// // build Tween
// var tween1 = new TweenMax.fromTo(".slide-down", 1.5, {y: -400, opacity:0}, {y: 0, opacity:1});
// var tween2 = new TweenMax.fromTo(".slide-up", 1.5, {y: 400, opacity:0}, {y: 0, opacity:1});

// // build scenes
// var scene1 = new ScrollMagic.Scene({triggerElement: "#divider"})
//                 .setTween("#divider > div", {y: "80%", ease: Linear.easeNone})
//                 .addTo(controller);

// new ScrollMagic.Scene({triggerElement: "#welcome", triggerHook: "onEnter", duration: $("#welcome").height()})
//         .setTween(tween1)
//         .addTo(controller2)
// new ScrollMagic.Scene({triggerElement: "#welcome", triggerHook: "onEnter", duration: $("#welcome").height()})
//         .setTween(tween2)    
//         .addTo(controller2);

// new ScrollMagic.Scene({triggerElement: "#meet", triggerHook: "onEnter", duration: $("#meet").height()})
//         .setTween(tween1)
//         .addTo(controller2)
// new ScrollMagic.Scene({triggerElement: "#meet", triggerHook: "onEnter", duration: $("#meet").height()})
//         .setTween(tween2)    
//         .addTo(controller2);

// init controller
/*var controller = new ScrollMagic.Controller();
// build tween
var tween = TweenMax.from("#animate", 0.5, {autoAlpha: 0, scale: 0.7});
// build scene
var scene = new ScrollMagic.Scene({triggerElement: "#legacy", duration: $("#legacy").height()})
                .setTween(tween)
                .setClassToggle("#goto-1", "active")
                .addTo(controller);
scene = new ScrollMagic.Scene({ triggerElement: "#meet", duration: $("#meet").height(), triggerHook: "onCenter" })
                .setClassToggle("#goto-2", "active") // add class toggle
                .addTo(controller);                
scene = new ScrollMagic.Scene({ triggerElement: "#reviews-wrapper", duration: $("#reviews-wrapper").height(), triggerHook: "onCenter" })
                .setClassToggle("#goto-3", "active") // add class toggle
                .addTo(controller);
scene = new ScrollMagic.Scene({ triggerElement: "#services", duration: $("#services").height(), triggerHook: "onCenter" })
                .setClassToggle("#goto-4", "active") // add class toggle
                .addTo(controller);
scene = new ScrollMagic.Scene({ triggerElement: "#options", duration: $("#options").height(), triggerHook: "onCenter" })
                .setClassToggle("#goto-5", "active") // add class toggle
                .addTo(controller);
scene = new ScrollMagic.Scene({ triggerElement: "#contact", duration: $("#contact").height(), triggerHook: "onCenter" })
                .setClassToggle("#goto-6", "active") // add class toggle
                .addTo(controller);

// change behaviour of controller to animate scroll instead of jump
controller.scrollTo(function (newpos) {
    TweenMax.to(window, 0.5, {scrollTo: {y: newpos}});
});
//  bind scroll to anchor links
$("#scroll-nav").on("click", "a[href^='#']", function (e) {
    var id = $(this).attr("href");
    if ($(id).length > 0) {
        e.preventDefault();
        // trigger scroll
        controller.scrollTo(id);
            // if supported by the browser we can even update the URL.
        if (window.history && window.history.pushState) {
            history.pushState("", document.title, id);
        }
    }
});    */
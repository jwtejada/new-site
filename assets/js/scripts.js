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

    //HEADER SCROLL
    $(window).on('resize', function () {
        $(body).css('padding-top', header.outerHeight());
    }).trigger('resize');
    // fixed header with calc of header    
    if (window.location.hash && theWindow.scrollTop() >= headerBottom && theWindow.width() > 1023) {
       // body.addClass("fix-nav");
    }
    theWindow.on("scroll", function () {
        if (theWindow.width() > 1023) {
            if (theWindow.scrollTop() > headerBottom) {
                body.addClass("fix-nav");
                //header.addClass("animated slideInDown");
            } else if (theWindow.scrollTop() <= 0) {
                body.removeClass("fix-nav");
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

    //SLICK SLIDERS
    $("main .slick-slider").slick({
        dots:true,
        arrows:true,
        appendArrows:"#controls",
        appendDots:"#controls",
        prevArrow:'<a href="#" id="prev"><i class="icon-angle-left"></i></div>',
        nextArrow:'<a href="#" id="next"><i class="icon-angle-right"></i></div>',                  
        customPaging:function(slider,index) {         
            return '<span></span>';
        },
        responsive: 
        [{
            breakpoint: 1023,
            settings: {
            } 
        }]
    }); 
    // $(".slick-banner").slick({      
    //     dots:true,     
    //     appendDots:".banner-controls",
    //     arrows:false,  
    //     fade:true,
    //     autoplay:true,
    //     autoplaySpeed:8000,
    //     speed:800,       
    //     responsive: 
    //     [{
    //         breakpoint: 900,
    //         settings: {
    //             dots:false
    //         } 
    //     }],
    //     customPaging:function(slider,index) {
    //             return '<span></span>';
    //     }
    // }); 
    
    // $(".slick-switch").slick({      
    //     dots:false,     
    //     arrows:false,   
    //     infinite:false,
    //     fade:true,
    //     responsive: 
    //     [{
    //         breakpoint: 900,
    //         settings: {
    //             dots:false
    //         } 
    //     }]
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
    // if(theWindow.width() < 1023) {
    //     $(".slick-offers").slick({
    //         dots:true,
    //         arrows:true,
    //         appendDots:".offers-controls",
    //         appendArrows:".offers-controls",
    //         prevArrow:'<a href="#" id="prev"><i class="icon-angle-double-left"></i></div>',
    //         nextArrow:'<a href="#" id="next"><i class="icon-angle-double-right"></i></div>',                  
    //         customPaging:function(slider,index) {         
    //             return '<span></span>';
    //         }
    //     }); 
    // }
    $(".slick-reviews").slick({      
        dots:true,     
        arrows:true,  
        fade:true,   
        appendDots:'.reviews-controls',
        appendArrows:'.reviews-controls',  
        prevArrow:'<a href="#" id="prev"><i class="icon-angle-left"></i></div>',
        nextArrow:'<a href="#" id="next"><i class="icon-angle-right"></i></div>',   
        autoplay:true,
        autoplaySpeed:8000,
        speed:800,   
        customPaging:function(slider,index) {
                return '<span></span>';
        }
    }); 
    
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

    // $("#slick-tour").slick({
    //     dots:true,
    //     arrows:true,
    //     prevArrow:'<a href="#" id="prev"></div>',
    //     nextArrow:'<a href="#" id="next"></div>',                  
    //     customPaging:function(slider,index) {         
    //         return '<span></span>';
    //     },
    //      responsive: 
    //     [{
    //         breakpoint: 900,
    //         settings: {
    //             appendDots:".tour-controls",
    //             appendArrows:".tour-controls",
    //         } 
    //     }]
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
    //         prevArrow:'<a href="#" id="prev"><i class="icon-left"></i></div>',
    //         nextArrow:'<a href="#" id="next"><i class="icon-right"></i></div>', 
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

     // $(".slick-reviews").slick({
    //     slidesToShow: 3,
    //     centerMode:true,    
    //     dots:false,
    //     focusOnSelect:true,
    //     centerPadding: '0px',     
    //     arrows:false,  
    //     responsive: [
    //     {
    //       breakpoint: 900,
    //       settings: {
    //         slidesToShow: 1,
    //       }
    //     }]
    // }); 

    //  $(".reviews-controls").slick({
    //     slidesToShow:1,
    //     arrows:true,   
    //     dots:true,     
    //     draggable:false,
    //     prevArrow:'<a href="#" id="prev"><i class="icon-left"></i></div>',
    //     nextArrow:'<a href="#" id="next"><i class="icon-right"></i></div>',    
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

    // //INSTA FEED
    // if (theWindow.width() > 759 ) {  
    //     if($(body).hasClass("page_index")) {
    //         new Instafeed({
    //             get: "user",
    //             userId: 236174443,
    //             accessToken: "236174443.1677ed0.51797b9db5994b6e97253ba65596df6d",
    //             resolution: "standard_resolution",
    //             useHttp: "true",
    //             limit: 20,
    //             /*template: '<a href="{{link}}" target="_blank" class="item {{orientation}} {{type}}"><img src="{{image}}" /><div class="caption">{{caption}}</div></a>',*/
    //             template: '<div><a href="{{link}}" target="_blank" class="item {{orientation}} {{type}}"><img src="{{image}}" /></a></div>',
    //             target: "instafeed",
    //             sortBy: "most-recent",
    //             after: function() {
    //                 $("#instafeed .video").parent().remove();
    //                 $("#instafeed").slick({
    //                     rows:1,
    //                     arrows:true,
    //                     infinite:true,
    //                     initialSlide:5,
    //                     dots:false,
    //                     autoplay:true,
    //                     slidesToScroll:1,
    //                     autoplaySpeed:8000,
    //                     speed:600,
    //                     draggable:false,
    //                     appendArrows:'.insta-controls',                        
    //                     prevArrow:'<a href="#" id="prev"><i class="icon-angle-left"></i> Previous</div>',
    //                     nextArrow:'<a href="#" id="next">Next <i class="icon-angle-right"></i></div>',  
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
        //$("footer .social").appendTo("#fo-contents");
    }

    //PAGE ACTIONS
    if($(".page-divider").length) {
        $(".page-divider").tntdivider({
            alt: 'odd',
            alignBody: true,
            alignTitles: true,
            alignHeight: 400
        });  
    }

    if($("#intro").length){
        $(this).find("h1:first-child, #append").wrapAll('<div id="page-title" />');       
        $("#page > #page-title").hide();
    } else {
        $("#page h1:first-child:not(.detach), #page #append").appendTo("#page-title").wrapAll('<div class="container" />'); 
    }
    $(".more-to-explore").wrapInner('<div class="container" />').appendTo("#page");

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
                //url add: ?enablejsapi=1
                $('.accordion iframe')[i].contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
            }
        }
    });

    // $(".cards a").hover(function() {
    //     console.log("hover");
    //     $(".cards a").removeClass("active");
    //     $(this).addClass("active");
    //     return false;        
    // })

    //tntvideos defaults
    if($("[data-player]").length) {
        $("[data-player]").tntvideos({      
            playButton: '.play-btn',
            closeButton: '.close-btn',
            bodyPlaying: '.playing',
            offset:0,
            mobileWidth: 900
        }); 
    }

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

    $(".page-services").appendTo("#page");
    
    // var pageTag = $("#page h1").data("tag"),
    //     sectionTag = $("[data-tag]");
    // if (pageTag != null) {
    //     $("#page").append('<span class="page-tag"><span>'+ pageTag +"</span></span>");
    // } else if (sectionTag != null) {
    //     sectionTag.each(function() {
    //         var sectionTagText = $(this).data("tag");
    //         $(this).append('<span class="page-tag"><span>'+ sectionTagText +"</span></span>");
    //     });
    // }
    
    /// Randomized Banner Background
    // var selectBG = Math.floor(Math.random() * 0) + 1;
    // if (!$("body").hasClass("page_index")) {
    //     $('#page-title').css({
    //         'background-image': 'url(assets/images/banner-' + selectBG + '.jpg)',
    //         'background-repeat': 'no-repeat',
    //         'background-position': 'right top',
    //         'background-size': 'cover'
    //     })
    // }
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
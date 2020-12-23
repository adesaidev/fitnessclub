$(function() {
    
    "use strict";
    
    /*=============================================
    =                Prealoder                  =
    =============================================*/
    
    if ($('.preloader').length) {
        $('.preloader').fadeOut();
    }
    
    /*=====  End of Prealoder  ======*/

    
    /*=============================================
    =                   Sticky                   =
    =============================================*/
    
    $(window).on('scroll', function(event) {    
        var scroll = $(window).scrollTop();
        if (scroll < 50) {
            $(".header-area").removeClass("sticky");
            $(".navbar-2 img").attr("src", "assets/images/logo-2.png");
        } else{
            $(".header-area").addClass("sticky");
            $(".navbar-2 img").attr("src", "assets/images/logo.png");
        }
    });

    /*=====  End of Sticky  ======*/
    

    /*=============================================
    =                Mobile Menu                  =
    =============================================*/
    
    $(".navbar-nav a").on('click', function () {
        $(".navbar-collapse").removeClass("show");
    });

    $(".navbar-toggler").on('click', function () {
        $(this).toggleClass("active");
    });

    $(".navbar-nav a").on('click', function () {
        $(".navbar-toggler").removeClass('active');
    }); 


    var subMenu = $('.sub-menu-bar .navbar-nav .sub-menu');
    
    if(subMenu.length) {
        subMenu.parent('li').children('a').append(function () {
            return '<button class="sub-nav-toggler"> <span></span> </button>';
        });
        
        var subMenuToggler = $('.sub-menu-bar .navbar-nav .sub-nav-toggler');
        
        subMenuToggler.on('click', function() {
            $(this).parent().parent().children('.sub-menu').slideToggle();
            return false
        });
        
    }

    /*=====  End of Mobile Menu  ======*/

    /*=============================================
    =            Section Menu Active              =
    =============================================*/

    var scrollLink = $('.page-scroll');
    // Active link switching
    $(window).scroll(function () {
        var scrollbarLocation = $(this).scrollTop();

        scrollLink.each(function () {

            var sectionOffset = $(this.hash).offset().top - 73;

            if (sectionOffset <= scrollbarLocation) {
                $(this).parent().addClass('active');
                $(this).parent().siblings().removeClass('active');
            }
        });
    });

    /*=====  End of Section Menu Active  ======*/
    

   



    /*=============================================
    =                WOW active                   =
    =============================================*/
    
    var wow = new WOW({
        boxClass: 'wow', //
        mobile: false, // 
    })
    wow.init();

    /*=====  End of WOW active ======*/
    
    
    /*=============================================
    =                Back to top                  =
    =============================================*/

    // Show or hide the sticky footer button
    $(window).on('scroll', function(event) {
        if($(this).scrollTop() > 600){
            $('.back-to-top').fadeIn(200)
        } else{
            $('.back-to-top').fadeOut(200)
        }
    });
    
    
    //Animate the scroll to yop
    $('.back-to-top').on('click', function(event) {
        event.preventDefault();
        
        $('html, body').animate({
            scrollTop: 0,
        }, 1500);
    });

    /*=====  End of Back to top ======*/   
    
    
});
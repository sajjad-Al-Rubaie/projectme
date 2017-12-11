/*global $, alert, console,Typed*/
$(document).ready(function () {
    'use strict';
    
       // Adjust slider height
    var winh   = $(window).height(),
        i = null,
        delay = 1000;
       
   // $('.carousel-item').height(winh);
    
    // show Chevron when touch slider
    $(".cir").hide();
    $(".slider").mousemove(function () {
        clearTimeout(i);
        $(".cir").show();
        i = setTimeout('$(".cir").hide();', 10000);
    }).mouseleave(function () {
        clearTimeout(i);
        $(".cir").hide();
    });
    

    $(".progress-bar").each(function (i) {
        $(this).delay(delay * i).animate({ width: $(this).attr('aria-valuenow') + '%' }, delay);

        $(this).prop('Counter', 0).animate({
            Counter: $(this).text()
        }, {
            duration: delay,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now) + '%');
            }
        });
    });
    
       // count
    
    $('.count').each(function () {
        $(this).prop('Counter', 0).animate({
            Counter: $(this).text()
        }, {
            duration: 7000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });
     // Scroll To Features
    
    $('.slider .bounce i').click(function () {
        
        $('html, body').animate({
            
            scrollTop: $('.services').offset().top
        }, 1000);
    });
});
$(document).ready(function() { 

    // header animation
    $(".search-button").click(function() {
        window.setTimeout(function(){
            $('.header').addClass('header-up');
        },50);
        window.setTimeout(function(){
            $('.searchbar').fadeIn('fast');
        },50);
        window.setTimeout(function(){
            $('.searchbar input').focus().select();
        },100);
    });
    $(".close-wrapper a").click(function() {
        window.setTimeout(function(){
            $('.searchbar').fadeOut('fast');
        },50);
        window.setTimeout(function(){
            $('.header').removeClass('header-up');
        },50);
    });
    
});

//modificate logo when load page

//when scroll      
$(window).scroll(function (event) {
        var navbarHeight = $('.semplice-navbar').outerHeight();       
        var scroll = $(window).scrollTop();

        if (scroll > 0) { makeSmallerLogoWhenScrollDown (); } 
        else { makeBiggerLogoWhenScrollDown () };

        //add id and javascript function on contacto element
        $( "li.menu-item.menu-item-type-post_type.menu-item-object-page.menu-item-214 span" ).attr('onclick','myFunction()');

        //add id on button contact elements
        //home button
        $(".click-saber-mas-1 .ce-button .is-content a").attr('id','click-saber-mas-1');
        $(".click-saber-mas-1 .ce-button .is-content a").attr('onclick','myFunction()');
        //servicios button
        $(".hablamos-sobre-tu-proyecto-1 .ce-button .is-content a").attr('id','hablamos-sobre-tu-proyecto-1');
        $(".hablamos-sobre-tu-proyecto-1 .ce-button .is-content a").attr('onclick','myFunction()');
});

//refresh webpage for wp to load correctly

function myFunction() {
    location.replace("https://estudiomarlo.es/webnew/contacto-marlo");
}


function makeSmallerLogoWhenScrollDown () {
    //make small and align logo
    if ( $(window).width() > 1440) {
        $(".navbar-inner.menu-type-text .logo.navbar-left a").css("font-size", "1.5rem");
    } 
    else if ( $(window).width() > 544 && $(window).width() < 1439){
        $(".navbar-inner.menu-type-text .logo.navbar-left a").css("font-size", "1rem");
        }
    else {
        $(".navbar-inner.menu-type-text .logo.navbar-left a").css("font-size", "0.5rem");
        }
    //align logo  
    $(".navbar-inner .logo").css("align-items","center");
}

function makeBiggerLogoWhenScrollDown () {
    //make bigger and align logo
    console.log("scroll = 0");
    if ( $(window).width() > 1440) {
        $(".navbar-inner.menu-type-text .logo.navbar-left a").css("font-size", "5rem");
    } else if ( $(window).width() > 544 && $(window).width() < 1439){
        $(".navbar-inner.menu-type-text .logo.navbar-left a").css("font-size", "5rem");
    }
        else {
    $(".navbar-inner.menu-type-text .logo.navbar-left a").css("font-size", "1.5rem");
        }
    //align logo   
    $(".navbar-inner .logo").css("align-items","center");
}


//hide of share buttons on each project
(function ($) {
    $(document).ready(function () {
                //change text of share buttons
                $('.share-button.button-facebook a').text("COMPARTE");
                $('.share-button.button-twitter a').text("COMPARTE");
                $('.share-button.button-linkedin a').text("COMPARTE");           
    });
})(jQuery);

//Reinforce hide of share buttons on each project if scroll
$(window).scroll(function (event) {
        var scroll = $(window).scrollTop();
                //change text of share buttons
                $('.share-button.button-facebook a').text("COMPARTE");
                $('.share-button.button-twitter a').text("COMPARTE");
                $('.share-button.button-linkedin a').text("COMPARTE");
});





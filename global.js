
//make logo yellow (invisible) when loading home

if ( window.location.pathname == '/webnew/' && $(window).width() > 544){
        console.log('estoy en home');
        $(".navbar-inner.menu-type-text .logo.navbar-left a").css("color", "#ffc600");
    }


//if click in logo, reload to home
jQuery('.navbar-inner.menu-type-text .logo.navbar-left a').click(function(){
    console.log('logo is clicked');
    location.replace("https://estudiomarlo.es/webnew/");
});


//modificate logo when load page

//when scroll      
$(window).scroll(function (event) {
        var navbarHeight = $('.semplice-navbar').outerHeight();  
        console.log('nav bar height = ' + navbarHeight );   
        var scroll = $(window).scrollTop();
        console.log(window.location.pathname);

        //make logo yellow (invisible) when loading home

        if ( window.location.pathname == '/webnew/' && $(window).width() > 544){
                console.log('estoy en home');
                $(".navbar-inner.menu-type-text .logo.navbar-left a").css("color", "#ffc600");
            }

        if ( window.location.pathname == '/webnew/' ){
            // Index (home) page
            if (scroll > (navbarHeight + 156)) { makeSmallerLogoWhenScrollDown (); } 
            else { makeBiggerLogoWhenScrollDown () };
        } 

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
    //make small logo and nav bar height and align logo
    if ( $(window).width() > 544) {
        $(".navbar-inner.menu-type-text .logo.navbar-left a").css("color", "black");
        console.log("scroll down");
        // $(".navbar-inner.menu-type-text .logo.navbar-left a").css("font-size", "1.5rem");
        // $("header.nav_3xen11lez.semplice-navbar.active-navbar.non-sticky-nav").css("height", "80px");
    } 
}

function makeBiggerLogoWhenScrollDown () {
    //make bigger and align logo
    console.log("scroll = 0");
    if ( $(window).width() > 544) {
        // $(".navbar-inner.menu-type-text .logo.navbar-left a").css("font-size", "8.667rem");
        // $("header.nav_3xen11lez.semplice-navbar.active-navbar.non-sticky-nav").css("height", "190px!important");
        $(".navbar-inner.menu-type-text .logo.navbar-left a").css("color", "#ffc600");
    } 
}


//hide of share buttons on each project
(function ($) {
    $(document).ready(function () {
                if ( window.location.pathname == '/webnew/casa-victoria'){
                    //change text of share buttons
                    $('.share-button.button-facebook a').text("COMPARTE");
                    $('.share-button.button-twitter a').text("COMPARTE");
                    $('.share-button.button-linkedin a').text("COMPARTE"); 
                };          
    });
})(jQuery);

//Reinforce hide of share buttons on each project if scroll
$(window).scroll(function (event) {
                if ( window.location.pathname == '/webnew/casa-victoria'){
                    var scroll = $(window).scrollTop();
                    //change text of share buttons
                    $('.share-button.button-facebook a').text("COMPARTE");
                    $('.share-button.button-twitter a').text("COMPARTE");
                    $('.share-button.button-linkedin a').text("COMPARTE");
                };      
});





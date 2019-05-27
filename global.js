//add unique id to contact nav-bar
$( "li.menu-item.menu-item-type-post_type.menu-item-object-page.menu-item-214 a" ).attr('id','cambia-x-dios');
// console.log( "añado id");

//refresh contact-form to have a correct wp-form working
$( "li.menu-item.menu-item-type-post_type.menu-item-object-page.menu-item-214 a" ).click(function() {
  // console.log( "Handler for .click() called." );
  location.replace("https://estudiomarlo.es/webnew/contacto-marlo");
});

//when scroll      
$(window).scroll(function (event) {
        var scroll = $(window).scrollTop();
        //make small and align logo
        $(".navbar-inner.menu-type-text .logo.navbar-left a").css("font-size", "1.5rem");   
        $(".navbar-inner .logo").css("align-items","center");
        // console.log('make small logo');
        //add id and javascript function on contacto element
        $( "li.menu-item.menu-item-type-post_type.menu-item-object-page.menu-item-214 span" ).attr('id','cambia-x-dios');
        $( "li.menu-item.menu-item-type-post_type.menu-item-object-page.menu-item-214 span" ).attr('onclick','myFunction()');
        // console.log( "añado id cambia-x-dios");
});

//refresh webpage for wp to load correctly
function myFunction() {
  location.replace("https://estudiomarlo.es/webnew/contacto-marlo");
}

//Contacto change log dimension when refresh 
(function ($) {
    $(document).ready(function () {
                if(window.location.href === "https://estudiomarlo.es/webnew/contacto-marlo"){
                        // $("div#share-holder").css("display","none");
                        // $("section#comments").css("display","none");
                        // $(".wpforms-field.wpforms-field-hp").css("display","none");   
                        $(".navbar-inner.menu-type-text .logo.navbar-left a").css("font-size", "1.5rem");   
                        $(".navbar-inner .logo").css("align-items","center");
                    }
    });
})(jQuery);

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





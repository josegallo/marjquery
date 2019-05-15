//when scroll      
$(window).scroll(function (event) {
        var scroll = $(window).scrollTop();
        //make small and align logo
        $(".navbar-inner.menu-type-text .logo.navbar-left a").css("font-size", "1.5rem");   
        $(".navbar-inner .logo").css("align-items","center");
         
         //if windows if contact remove contents and share
         if(window.location.href === "https://estudiomarlo.es/webnew/home/contacto"){
            $("div#share-holder").css("display","none");
            $("section#comments").css("display","none");
            $(".wpforms-field.wpforms-field-hp").css("display","none");   
        }
});

//Project Casa Vitoria
(function ($) {
	$(document).ready(function () {
                //change text of share buttons
                $('.share-button.button-facebook a').text("COMPARTE");
                $('.share-button.button-twitter a').text("COMPARTE");
                $('.share-button.button-linkedin a').text("COMPARTE");
                
    });
})(jQuery);


//remove wow section on devices
// if ($(window).width() >= 767) {
//     $("section#section_l7uzvth4u").css("display", "none");
// };

// if ($(window).width() < 767) {
//     $("section#section_330clh3f0").css("display", "none");
// };




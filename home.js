<script>
  
(function ($) {
	$(document).ready(function () {
	  
	  	$(window).scroll(function (event) {
    	var scroll = $(window).scrollTop();
    	console.log("test lower logo");
         $(".navbar-inner.menu-type-text .logo.navbar-left a").css("font-size", "1.5rem");
         $(".navbar-inner .logo").css("align-items","center");
			});

        $(".arrow-wow").click(function() {
                var heightA1 = $("div.begin-section").height();
                var heightE1 = parseInt(heightA1);
            $([document.documentElement, document.body]).animate({
                scrollTop: $(".begin-section").offset().top - heightE1
            }, 2000);
        });

        $(".arrow-clientes").click(function() {
                var heightA2 = $(".section-piensas-que").height();
                var heightE2 = parseInt(heightA2);
            $([document.documentElement, document.body]).animate({
                scrollTop: $(".arrow-piensas-que").offset().top - 170
            }, 2000);
        });

        $(".arrow-piensas-que").click(function() {
                var heightA3 = $(".section-arrow-somos-devotos").height();
                var heightE3 = parseInt(heightA3);
            $([document.documentElement, document.body]).animate({
                scrollTop: $(".arrow-somos-devotos").offset().top - heightE3
            }, 2000);
        });

        $(".arrow-somos-devotos").click(function() {
            $("html, body").animate({ scrollTop: $(document).height() }, 3000);
        });
    });
})(jQuery);

</script>


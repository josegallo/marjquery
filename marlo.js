
  (function ($) {
	$(document).ready(function () {
		$(window).scroll(function (event) {
    	var scroll = $(window).scrollTop();
    	console.log("test lower logo");
    	 //$(".nav_wra29kmaf .navbar-inner .logo a").remove();
    	 //$(".nav_wra29kmaf .navbar-inner .logo a").attr('style', 'display:none');
    	 //$(".nav_wra29kmaf .navbar-inner .logo a").css("display", "none");
        //  $(".nav_wra29kmaf .navbar-inner .logo a").css("font-size", "1.5rem");
         $(".navbar-inner.menu-type-text .logo.navbar-left a").css("font-size", "1.5rem");
         $(".navbar-inner .logo").css("align-items","center");
});
	});
})(jQuery);

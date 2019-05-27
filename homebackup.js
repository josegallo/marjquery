
//animation of typing text
//see the code on https://codepen.io/anon/pen/EzayJp, cursos with a black box
//code  https://codepen.io/anon/pen/QRwKpq cursor with a button slash

//clean the point
$("#output-marlo").text("");

// values to keep track of the number of letters typed, which quote to use. etc. Don't change these values.
var i = 0,
    a = 0,
    isBackspacing = false,
    isParagraph = false;
// console.log('set variable values');


// Typerwrite text content. Use a pipe to indicate the start of the second line "|".  
var textArray = [
  "Para diferenciarte del resto de negocios", 
  "Para ferias que atrapan visitantes", 
  "Para hogares que despiertan envidia",
  "Para tiendas que conquistan clientes",
  "Para crear marcas triunfadoras",
  "Para showrooms que convencen con tu producto",
];
// console.log('set array text');

// Speed (in milliseconds) of typing.
var speedForward = 75, //Typing Speed
    speedWait = 1000, // Wait between typing and backspacing
    speedBetweenLines = 1000, //Wait between first and second lines
    speedBackspace = 50; //Backspace Speed


//Run the loop
typeWriter("output-marlo", textArray);



function typeWriter(id, ar) {
  var element = $("#" + id),
      aString = ar[a],
      eHeader = element; //Header element

  
  // Determine if animation should be typing or backspacing
  if (!isBackspacing) {

    // If full string hasn't yet been typed out, continue typing
    if (i < aString.length) {

        eHeader.text(eHeader.text() + aString.charAt(i));
        i++;
        setTimeout(function(){ typeWriter(id, ar); }, speedForward);
        // console.log("tywriter" + i + "speedForward");
      
    // If full string has been typed, switch to backspace mode.
    } else  {
      isBackspacing = true;
      setTimeout(function(){ typeWriter(id, ar); }, speedWait);
    //   console.log("tywriter" + "speedWait");
    }
    
  // If backspacing is enabled
  } else {
    // If the header has text, continue backspacing
    if (eHeader.text().length > 0) {
        eHeader.addClass("cursor-marlo");
        eHeader.text(eHeader.text().substring(0, eHeader.text().length - 1));
        setTimeout(function(){ typeWriter(id, ar); }, speedBackspace);
    
    // If still has text, switch to next quote in array and start typing.
    } else { 
      isBackspacing = false;
      i = 0;
      a = (a + 1) % ar.length; //Moves to next position in array, always looping back to 0
      setTimeout(function(){ typeWriter(id, ar); }, 50);
      
    }
  }
}


//animation of typing text 2
//see the code on https://codepen.io/anon/pen/EzayJp, cursos with a black box
//code  https://codepen.io/anon/pen/QRwKpq cursor with a button slash

//clean the point
$("#output-marlo-2").text("");


// values to keep track of the number of letters typed, which quote to use. etc. Don't change these values.
var i2 = 0,
    a2 = 0,
    isBackspacing2 = false,
    isParagraph2 = false;
// console.log('set variable values');


// Typerwrite text content. Use a pipe to indicate the start of the second line "|".  
var textArray2 = [
  "Para diferenciarte del resto de negocios", 
  "Para ferias que atrapan visitantes", 
  "Para hogares que despiertan envidia",
  "Para tiendas que conquistan clientes",
  "Para crear marcas triunfadoras",
  "Para showrooms que convencen con tu producto",
];
// console.log('set array text');

// Speed (in milliseconds) of typing.
var speedForward2 = 75, //Typing Speed
    speedWait2 = 1000, // Wait between typing and backspacing
    speedBetweenLines2 = 1000, //Wait between first and second lines
    speedBackspace2 = 50; //Backspace Speed


//Run the loop

typeWriter2("output-marlo-2", textArray2);


function typeWriter2(id2, ar2) {
  var element2 = $("#" + id2),
      aString2 = ar2[a2],

    eHeader2 = element2; //Header element

  
  // Determine if animation should be typing or backspacing
  if (!isBackspacing2) {

    // If full string hasn't yet been typed out, continue typing
    if (i2 < aString2.length) {

        eHeader2.text(eHeader2.text() + aString2.charAt(i2));
        i2++;
        setTimeout(function(){ typeWriter2(id2, ar2); }, speedForward2);
        // console.log("tywriter" + i + "speedForward");
      
    // If full string has been typed, switch to backspace mode.
    } else  {
      isBackspacing2 = true;
      setTimeout(function(){ typeWriter2(id2, ar2); }, speedWait2);
    //   console.log("tywriter" + "speedWait");
    }
    
  // If backspacing is enabled
  } else {
    // If the header has text, continue backspacing
    if (eHeader2.text().length > 0) {
        eHeader2.addClass("cursor-marlo");
        eHeader2.text(eHeader2.text().substring(0, eHeader2.text().length - 1));
        setTimeout(function(){ typeWriter2(id2, ar2); }, speedBackspace2);
    
    // If still has text, switch to next quote in array and start typing.
    } else { 
      isBackspacing2 = false;
      i2 = 0;
      a2 = (a2 + 1) % ar2.length; //Moves to next position in array, always looping back to 0
      setTimeout(function(){ typeWriter2(id2, ar2); }, 50);
      
    }
  }
}

(function ($) {
	$(document).ready(function () {
	  
	  	$(window).scroll(function (event) {
    	var scroll = $(window).scrollTop();
    	console.log("test lower logo");
         $(".navbar-inner.menu-type-text .logo.navbar-left a").css("font-size", "1.5rem");
         $(".navbar-inner .logo").css("align-items","center");
			});
            
            
        $(".1st-arrow-image").click(function() {
            $([document.documentElement, document.body]).animate({
                scrollTop: $(".arrow-clientes").offset().top}, 2000);
        });


        $("div#content_p4g1n9sai.ce-imageimg.is-content").click(function() {
            $([document.documentElement, document.body]).animate({
                scrollTop: $(".arrow-clientes").offset().top - 170}, 2000);
        });


        $("section#section_7tl4qu1o0").click(function() {
            console.log('click sec put arrow wow');
             var heightA1 = $("section#section_nxupmmpov").height();
            // var heightE1 = parseInt(heightA1);
            $([document.documentElement, document.body]).animate({
            scrollTop: $("section#section_nxupmmpov").offset().top - heightA1}, 2000);
        });

        $("section#section_7tl4qu1o0 img.is-content div#column_msl1sjmcx arrow-wow").click(function() {
            var heightA1 = $("section#section_nxupmmpov").height();
           // var heightE1 = parseInt(heightA1);
           $([document.documentElement, document.body]).animate({
           scrollTop: $("section#section_nxupmmpov").offset().top - heightA1}, 2000);
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
                scrollTop: $(".arrow-somos-devotos").offset().top - heightE3}, 3000);
        });


        $(".arrow-somos-devotos").click(function() {
            // $("html, body").animate({ scrollTop: $("#section_xudfk43if").height() }, 3000);
            var w = window.innerWidth;
            var increment;
            if (w < 768) {
                increment = 250;
                $([document.documentElement, document.body]).animate({
                scrollTop: $("section#section_xudfk43if").offset().top + increment}, 2000);
                console.log('increment 250');
                
            } else {
                console.log(increment);
                $([document.documentElement, document.body]).animate({
                scrollTop: $("section#section_xudfk43if").offset().top + increment}, 2000);
                
            }
        });
    });
})(jQuery);

</script>

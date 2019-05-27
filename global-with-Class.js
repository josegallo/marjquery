//animation of typing text
//see the code on https://codepen.io/anon/pen/EzayJp, cursor with a black box
//code  https://codepen.io/anon/pen/QRwKpq cursor with a button slash

//clean the blank space
$("#output-marlo").text("");
$("#output-marlo-2").text("");

// Typerwrite text content. Use a pipe to indicate the start of the second line "|".  
var textArray = [
    "Para diferenciarte del resto de negocios", 
    "Para ferias que atrapan visitantes", 
    "Para hogares que despiertan envidia",
    "Para tiendas que conquistan clientes",
    "Para crear marcas triunfadoras",
    "Para showrooms que convencen con tu producto",
  ];

// values to keep track of the number of letters typed, which quote to use. etc. Don't change these values.
class TyperMarlo {
    constructor (i, a, isBackspacing, isParagraph, speedForward, speedWait, speedBetweenLines,speedBackspace) {
      this.i = i;
      this.a = a;
      this.isBackspacing = isBackspacing;
      this.isParagraph = isParagraph;
      this.speedForward = speedForward;
      this.speedWait = speedWait;
      this.speedBetweenLines = speedBetweenLines;
      this.speedBackspace = speedBackspace;
    }
    //Method
    typeWriter(id, ar) {
        this.element = $("#" + id),
        this.aString = ar[this.a];
      
        // Determine if animation should be typing or backspacing
        if (!this.isBackspacing) {
      
          // If full string hasn't yet been typed out, continue typing
          if (i < this.aString.length) {
      
              this.element.text(this.element.text() + this.aString.charAt(this.i));
              this.i++;
              setTimeout(function(){ typeWriter(id, ar); }, this.speedForward);
              // console.log("tywriter" + i + "speedForward");
            
          // If full string has been typed, switch to backspace mode.
          } else  {
            this.isBackspacing = true;
            setTimeout(function(){ typeWriter(id, ar); }, this.speedWait);
          //   console.log("tywriter" + "speedWait");
          }
          
        // If backspacing is enabled
        } else {
          // If the header has text, continue backspacing
          if (this.element.text().length > 0) {
              this.element.addClass("cursor-marlo");
              this.element.text(this.element.text().substring(0, this.element.text().length - 1));
              setTimeout(function(){ typeWriter(id, ar); }, this.speedBackspace);
          
          // If still has text, switch to next quote in array and start typing.
          } else { 
            this.isBackspacing = false;
            this.i = 0;
            this.a = (this.a + 1) % ar.length; //Moves to next position in array, always looping back to 0
            setTimeout(function(){ typeWriter(id, ar); }, 50);
            
          }
        }
      }
  }

const TypeMarlo1 = new TyperMarlo (0, 0, false, false, 75, 1000, 1000, 50);
const TypeMarlo2 = new TyperMarlo (0, 0, false, false, 75, 1000, 1000, 50);

//Run the loops
TypeMarlo1.typeWriter("output-marlo", textArray);
TypeMarlo2.typeWriter2("output-marlo-2", textArray);

//scroll arrows
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
            }, 3000);
        });

        $(".arrow-somos-devotos").click(function() {
            $("html, body").animate({ scrollTop: $(document).height() }, 3000);
        });
    });
})(jQuery);

</script>
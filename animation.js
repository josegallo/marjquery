//clean the point
$("#output-marlo").text("");

// values to keep track of the number of letters typed, which quote to use. etc. Don't change these values.
var i = 0,
    a = 0,
    isBackspacing = false,
    isParagraph = false;
console.log('set variable values');
console.log(5%5);

// Typerwrite text content. Use a pipe to indicate the start of the second line "|".  
var textArray = [
  "Para diferenciarte del resto de negocios", 
  "Para tener espacios wow", 
  "Para tener algo único",
];
console.log('set array text');

// Speed (in milliseconds) of typing.
var speedForward = 150, //Typing Speed
    speedWait = 1000, // Wait between typing and backspacing
    speedBetweenLines = 1000, //Wait between first and second lines
    speedBackspace = 100; //Backspace Speed

console.log('set speeds');
//Run the loop
typeWriter("output-marlo", textArray);

console.log('call function');

function typeWriter(id, ar) {
  var element = $("#" + id),
      aString = ar[a],
    //   eHeader = element.children(".cursor-marlo"); //Header element
    // eHeader = element.children(); //Header element
    eHeader = element; //Header element
    console.log(eHeader);
  
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
//index 0 = TypeRacer, 1 = typrX, 2=10fastfingers
var textOptions = ['nonHideableWords unselectable', 'cw-QuotePanel-textToTypePanel', 'row1'];
var inputBoxOptions = ['txtInput', 'cw-TypedinputBox race-go', 'form-control'];   

var website = -1;
var classOrId = -1;
for(w = 0; w < textOptions.length; w++) {
  if(!(document.getElementsByClassName(textOptions[w])[0] == null)) {
    website = w;
    classOrId = 0;
    break;
  }
  if(!(document.getElementById(textOptions[w] == null))) {
    website = w;
    classOrId = 1;
    break;
  }
}

if(website > -1 && classOrId > -1) {
  //get passage from HTML
  var text;
  if(classOrId = 0)
    text = document.getElementsByClassName(textOptions[website])[0].textContent;
  else if (classOrId = -1)
    text = document.getElementById(textOptions[website]).textContent;
  
  //get number of words in 
  var numWords = text.split(" ").length;
  
  //find box to put words into
  var input = document.getElementsByClassName(inputBoxOptions[website])[0];
  i = 0; //word counter
  
  //put words into inputBox
  function addWord() {
    if(i>=numWords) return;
    word = text.split(" ")[i++]; //split text into words
    inputBox.value = word; //insert word
  }
  
  addWord();
  
  //key listener for spacebar
  window.onkeyup = function(e) {
    var key = e.keyCode ? e.keyCode : e.which;
    if (key == 32) {
      addWord();
    }
  };
}

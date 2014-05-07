//index 0 = TypeRacer, 1 = typrX
var textOptions = ['nonHideableWords unselectable', 'cw-QuotePanel-textToTypePanel'];
var textBoxOptions = ['txtInput', 'cw-TypedTextBox race-go'];   

var website = -1;
for(w = 0; w < textOptions.length; w++) {
  if(!(document.getElementsByClassName(textOptions[w])[0] == null)) {
    website = w;
    break;
  }
}

if(website > -1) {
  //get passage from HTML
  var text = document.getElementsByClassName(textOptions[website])[0].textContent;
  
  
  //get number of words in 
  var numWords = text.split(" ").length;
  
  var textBox = document.getElementsByClassName(textBoxOptions[website])[0];
  i = 0; //word counter
  
  //put words into textBox
  function addWord() {
    if(i>=numWords) return;
    word = text.split(" ")[i++]; //split text into words
    textBox.value = word; //insert word
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

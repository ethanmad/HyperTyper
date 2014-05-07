//index 0 = TypeRacer, 1 = typrX
var text = ['nonHideableWords unselectable', 'cw-QuotePanel-textToTypePanel'];
var textBoxes = ['txtInput', 'cw-TypedTextBox race-go'];   

var website = -1;

//get passage from HTML
var text = document.getElementsByClassName(text[website])[0].textContent;


//get number of words in 
var numWords = text.split(" ").length;

var textBox = document.getElementsByClassName('txtInput')[0];
i = 0; //word counter

//put words into textBox
function addWord() {
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

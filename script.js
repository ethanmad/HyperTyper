//get passage from HTML
var text = document.getElementsByClassName('nonHideableWords unselectable')[0].textContent;


//get number of words in 
var numWords = getText().split(" ").length;

var textBox = document.getElementsByClassName('txtInput')[0];
i = 0; //word counter

//put words into textBox
function addWord() {
  word = text.split(" ")[i++] + " "; //split text into words
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


/*
//hack test
var timer = document.getElementsByClassName('timeDisplay')[0];
timer.value = "60:00";
*/
//textBox.setAttribute('onkeyup', 'alert("Hello")'); //set textBox to react on keyup
//textBox.removeAttribute('onkeyup');

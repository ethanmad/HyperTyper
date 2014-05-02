getText = function(){ return document.getElementsByClassName('nonHideableWords unselectable')[0].textContent; };
numWords = function(){ return getText().split(" ").length; };

var textBox = document.getElementsByClassName('txtInput')[0];
i = 0;

function addWord(){
  word = getText().split(" ")[i++] + " ";
  textBox.value = word;
}

addWord();

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
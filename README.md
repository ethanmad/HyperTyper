# HyperTyper

## A tool for achieving high-scores in typing competitions

[undefined](#ready-to-hypertype)Ready to #HyperType?

HyperTyper is the easiest way to instantly improve your apparent typing abilities. Whether you're looking to finally crack 20 wpm on TypeRacer, dominate typing races, or manipulate the leaderboards of a typing website to make your name the first result when you Google search yourself, HyperTyper is all you need.

### [undefined](#installation)Installation

If you're on Chrome, get the [Chrome Extension: undefined](https://chrome.google.com/webstore/detail/hypertyper/emlnlmijjaghanenmpdjdckanpdinpgn)
Otherwise, add a bookmarklet by dragging this link, [HyperTyper](javascript:(function()%7Bfor(var%20textOptions%3D%5B%22nonHideableWords%20unselectable%22%2C%22cw-QuotePanel-textToTypePanel%22%2C%22row1%22%2C%22practiceText%22%2C%22textData%22%5D%2CinputBoxOptions%3D%5B%22txtInput%22%2C%22cw-TypedinputBox%20race-go%22%2C%22form-control%22%2C%22tentry%22%2C%22userData%22%5D%2Cwebsite%3D-1%2CclassOrId%3D-1%2Cw%3D0%3Bw%3CtextOptions.length%3Bw%2B%2B)if(null!%3Ddocument.getElementsByClassName(textOptions%5Bw%5D)%5B0%5D)%7Bwebsite%3Dw%3BclassOrId%3D0%3Bbreak%7Delse%20if(null!%3Ddocument.getElementById(textOptions%5Bw%5D))%7Bwebsite%3Dw%3BclassOrId%3D1%3Bbreak%7Dif(-1%3Cwebsite%26%26-1%3CclassOrId)%7Bvar%20text%3B0%3D%3D%3DclassOrId%3Ftext%3Ddocument.getElementsByClassName(textOptions%5Bwebsite%5D)%5B0%5D.textContent%3A1%3D%3D%3DclassOrId%26%26(text%3Ddocument.getElementById(textOptions%5Bwebsite%5D).textContent)%3Bvar%20numWords%3Dtext.split(%22%20%22).length%2CinputBox%3Bnull!%3Ddocument.getElementsByClassName(inputBoxOptions%5Bwebsite%5D)%5B0%5D%3FinputBox%3Ddocument.getElementsByClassName(inputBoxOptions%5Bwebsite%5D)%5B0%5D%3Anull!%3Ddocument.getElementById(inputBoxOptions%5Bwebsite%5D)%26%26(inputBox%3Ddocument.getElementById(inputBoxOptions%5Bwebsite%5D))%3Bi%3D0%3Bvar%20addWord%3Dfunction()%7Bif(!(i%3E%3DnumWords))if(word%3Dtext.split(%22%20%22)%5Bi%2B%2B%5D%2C3%3D%3D%3Dwebsite)for(inputBox.value%3D%22%22%2Cl%3D0%3Bl%3Cword.length%3Bl%2B%2B)inputBox.value%2B%3Dword%5Bl%5D%3Belse%20inputBox.value%3Dword%7D%3BaddWord()%3Bwindow.onkeyup%3Dfunction(a)%7B32%3D%3D(a.keyCode%3Fa.keyCode%3Aa.which)%26%26addWord()%7D%7D%7D)()), to your bookmarks bar. Just note that, for some reason, the extension works much better than the bookmarklet. :(

### [undefined](#usage)Usage

Using HyperTyper is extremely simple; all you need to do is go to one of the [supported websites](#supported-websites) and click on the checkered flag that appears in your Omnibar (if you're using the Chrome extension) or click on the bookmarklet to start up HyperTyper. Now (once the first word of the passage is in the input box) press space to #HyperType.

If you're too lazy to press space 500 times, I wrote a use this bash script to press space 600 times. To use it with HyperTyper, first run HyperTyper (click on the icon or bookmarklet), run the script, then get to the input field, and watch.

<div style="margin-left: 1em;">`#! /bin/bashundefined sleep 3;undefined for ((i=0; i < 600; i++))undefined doundefined    xte 'key space'undefined done`</div>

It requires a package called [Xautomation](http://sourceforge.net/projects/xautomation/files/xautomation/) to work. Fortunately, it's in the repositories for most distros, so you can probably install it using your package manager.

Using apt:`$ sudo apt-get install Xautomation` 
Using pacman:`$ sudo pacman -S xautomation`

For other package managers, see Xautomation's Sourceforge page.

### [undefined](#supported-websites)Supported Websites

*   [TypeRacer](http://play.typeracer.com): real-time racing against real people.
*   [10FastFingers](http://10fastfingers.com): testing and competetitions with daily leaderboards.
*   [Typing Speed Contest](http://typingspeedcontest.com): minute long typing test with PERMANANENT (and #HyperTyped) leaderboards!
*   [typrX](http://app.typrX.com): real-time racing, less popular than TypeRacer.

Your favorite typing competition site - [??](https://github.com/ethanmad/HyperTyper/issues/new)

### [undefined](#support-or-contact)Support or Contact

Having trouble with HyperTyper? Check out the documentation at [https://github.com/ethanmad/HyperTyper](https://github.com/ethanmad/HyperTyper), submit an issue on GitHub, or send me an [email](mailto:ethan@ethanmad.com?Subject=HyperTyper%20Issue).

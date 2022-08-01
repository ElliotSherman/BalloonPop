'use strict'
var audioPop = new Audio('./sound/balloon-pop-sound-effect.mp3');

var gBalloon = [
    { bottom: 0, speed: 20 },
    { bottom: 0, speed: 26 },
    { bottom: 0, speed: 10 },
    { bottom: 0, speed: 14 },
    { bottom: 0, speed: 13 },
    { bottom: 0, speed: 36 },
    { bottom: 0, speed: 7 }
]
function selectBalloons() {
    var strHTML = ''

    for (var i = 0; i < gBalloon.length; i++) {
        console.log(randomLeft());
        strHTML += `<div style="background: ${getRandomColor()}; left: ${randomLeft()}px; transition: 1s;" class="balloon" onclick="popBalloon(this)"></div>\n`
    }
    var canvas = document.querySelector('body')
    canvas.innerHTML = strHTML
    var elBalloonDivs = document.querySelectorAll('.balloon')
    setInterval(
        () => {
            for (var i = 0; i < elBalloonDivs.length; i++) {
                var balloon = gBalloon[i] //modal
                var elBalloon = elBalloonDivs[i] // DOM

                balloon.bottom += balloon.speed
                elBalloon.style.bottom = balloon.bottom + 'px'
            }
        }, 20)
}


function popBalloon(elBalloon) {
    elBalloon.classList.add('balloon-pop')
    audioPop.play();
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function randomLeft() {
    var left = Math.floor(Math.random() * 900 - 100) + 100
    return left
}
'use strict'

var gBallSize = 100
var gOperator = 1

function onBallClick(elBall, maxDiameter) {
    const randNum = getRandomInt(20, 61)

    if (gOperator > 0) {
        gBallSize = (gBallSize + randNum < maxDiameter) ? gBallSize += randNum : 100
    } else {
       gBallSize = (gBallSize - randNum > 100) ? gBallSize -= randNum : 100 
    }

    elBall.style.width = gBallSize + 'px'
    elBall.style.height = gBallSize + 'px'

    elBall.innerText = gBallSize
    elBall.style.backgroundColor = getRandomColor()
}

function onSwipBall() {

    const elBall1 = document.querySelector(".ball1")
    const elBall2 = document.querySelector(".ball2")

    const elBall1Style = window.getComputedStyle(elBall1);
    const elBall2Style = window.getComputedStyle(elBall2);

    const ball1Size = elBall1.offsetWidth
    const ball1Color = elBall1Style.getPropertyValue("background-color")
    const ball2Size = elBall2.offsetWidth
    const ball2Color = elBall2Style.getPropertyValue("background-color")

    changeElBg(elBall1, ball2Color)
    changeElBg(elBall2, ball1Color)
    changeElSize(elBall1, ball2Size)
    changeElSize(elBall2, ball1Size)

}

function changeElSize(el, size) {
    el.style.height = size + 'px'
    el.style.width = size + 'px'
}

function changeElBg(el, color) {
    el.style.backgroundColor = color
}

function onReduceBall() {
    gOperator = -1
}
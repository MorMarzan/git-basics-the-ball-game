'use strict'

var gBallSize = 100

function onBallClick(elBall) {
    const randNum = getRandomInt(20, 61) 
    gBallSize = (gBallSize < 400) ? gBallSize += randNum : 100

    elBall.style.width = gBallSize + 'px'
    elBall.style.height = gBallSize + 'px'

    elBall.innerText = gBallSize
}
'use strict'

var gBallSize = 100

function onBallClick(elBall) {
    gBallSize = (gBallSize < 400) ? gBallSize += 50 : 100

    elBall.style.width = gBallSize + 'px'
    elBall.style.height = gBallSize + 'px'

    elBall.innerText = gBallSize
}
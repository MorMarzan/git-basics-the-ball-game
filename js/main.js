'use strict'

var gBallSize = 100

function onBallClick(elBall, maxDiameter) {
    const randNum = getRandomInt(20, 61) 

    gBallSize = (gBallSize < maxDiameter) ? gBallSize += randNum : 100

    elBall.style.width = gBallSize + 'px'
    elBall.style.height = gBallSize + 'px'
    
    elBall.innerText = gBallSize
    elBall.style.backgroundColor = getRandomColor()
}
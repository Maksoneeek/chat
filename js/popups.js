
function restartTimer() {
    setTimer()
    document.querySelector('.popup__restart').style.fontSize = 0 + 'px'
}

function setTimer() {
    let time = 0
    const timerInput = document.querySelector('.micro__timer')
    timerInput.style.fontSize = 12 + 'px'
    const timer = setInterval(function () {
        time = time + 1
        let mins = Math.floor(time / 60)
        let seconds = time % 60
        if (seconds < 10) {
            seconds = '0' + seconds
        }
        timerInput.textContent = `${mins}:${seconds}`
    }, 1000)
}



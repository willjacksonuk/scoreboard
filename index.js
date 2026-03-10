let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")
let runningHomeScore = 0
let runningGuestScore = 0

homeScore.textContent = 0
guestScore.textContent = 0

function homePlusOne() {
    runningHomeScore += 1
    homeScore.textContent = runningHomeScore
}

function homePlusTwo() {
    runningHomeScore += 2
    homeScore.textContent = runningHomeScore
}

function homePlusThree() {
    runningHomeScore += 3
    homeScore.textContent = runningHomeScore
}

function guestPlusOne() {
    runningGuestScore += 1
    guestScore.textContent = runningGuestScore
}

function guestPlusTwo() {
    runningGuestScore += 2
    guestScore.textContent = runningGuestScore
}

function guestPlusThree() {
    runningGuestScore += 3
    guestScore.textContent = runningGuestScore
}
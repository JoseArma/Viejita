const characters = document.getElementById('choose_player')
const board = document.getElementById('board')
const btnx = document.getElementById('iconX')
const btno = document.getElementById('iconO')
const allboxes = document.querySelectorAll('section span')
const playerTurn = document.getElementsByClassName("turnGame")


for (var i = 0; i < allboxes.length; i++) {
    allboxes[i].setAttribute('onclick', "clickBox(this)")

}

function startHideX() {
    characters.classList.add('ocult')
    board.classList.remove('hiden')
    playerTurn[0].setAttribute("class", "turnGame player_active")
}

function startHideO() {
    characters.classList.add('ocult')
    board.classList.remove('hiden')
    playerTurn[1].setAttribute("class", "turnGame player_active")
}

let Xicon = "fas fa-times"
let Oicon = "far fa-circle"

function clickBox(element) {
    if (playerTurn[0].classList.contains("player_active")) {

        element.innerHTML = `<i class="${Xicon} iconos"></i>`
    } else {
        element.innerHTML = `<i class="${Oicon} iconos"></i>`
    }
}




btnx.addEventListener('click', startHideX)
btno.addEventListener('click', startHideO)
const characters = document.getElementById('choose_player')
const board = document.getElementById('board')
const btnx = document.getElementById('iconX')
const btno = document.getElementById('iconO')
const allboxes = document.querySelectorAll('section span')
const players = document.getElementsByClassName('turnGame')


for (var i = 0; i < allboxes.length; i++) {
    allboxes[i].setAttribute('onclick', "clickBox(this)")

}

function startHideX() {
    characters.classList.add('ocult')
    board.classList.remove('hiden')
    players[0].setAttribute("class", "turnGame active")
}

function startHideO() {
    characters.classList.add('ocult')
    board.classList.remove('hiden')
    players[1].setAttribute("class", "turnGame active")
}

let Xicon = "fas fa-times"
let Oicon = "far fa-circle"
playerIcon = "X"


function clickBox(element) {
    if (players[0].classList.contains("active")) {
        element.innerHTML = `<i class="${Xicon} iconos"></i>`
        playerIcon = "X"
        players[1].classList.add("active")
        players[0].classList.remove("active")
        element.setAttribute("id", playerIcon)
    } else {
        element.innerHTML = `<i class="${Oicon} iconos"></i>`
        playerIcon = "O"
        players[0].classList.add("active")
        players[1].classList.remove("active")
        element.setAttribute("id", playerIcon)

    }

    element.style.pointerEvents = "none"
    YouWin()
    playerIcon = "X"
        /*  let randomDelay = ((Math.random() * 2000) + 200).toFixed()
         setTimeout(() => {
             bot()
         }, randomDelay) */
}


btnx.addEventListener('click', startHideX)
btno.addEventListener('click', startHideO)

function getId(clase) {
    return document.querySelector(".box" + clase).id
}

function checkId(v1, v2, v3, Icon) {
    if (getId(v1) == Icon && getId(v2) == Icon && getId(v3) == Icon) {
        return true;
    }

}

function YouWin() {
    if (checkId(1, 2, 3, playerIcon) || checkId(4, 5, 6, playerIcon) || checkId(7, 8, 9, playerIcon) || checkId(1, 4, 7, playerIcon) || checkId(2, 5, 8, playerIcon) || checkId(3, 6, 9, playerIcon) || checkId(1, 5, 9, playerIcon) || checkId(3, 5, 7, playerIcon)) {
        console.log(playerIcon + "" + "gano :D")
    } else {
        console.log("Empate")
    }
}



//----------------BOT

/* function bot() {
    let array = []
    for (let i = 0; i < allboxes.length; i++) {
        if (allboxes[i].childElementCount == 0) {
            array.push(i)
        }
    }
    let random = array[Math.floor(Math.random() * array.length)]
    if (array.length > 0) {
        if (players[0].classList.contains("active")) {
            playerIcon = "X"
            allboxes[random].innerHTML = `<i class="${Xicon} iconos"></i>`
            players[0].classList.remove("active")
            allboxes[random].setAttribute("id", playerIcon)

        } else {
            playerIcon = "O"
            allboxes[random].innerHTML = `<i class="${Oicon} iconos"></i>`
            players[1].classList.remove("active")
            allboxes[random].setAttribute("id", playerIcon)

        }
        allboxes[random].style.pointerEvents = "none"
        console.log(random)
    }

} */
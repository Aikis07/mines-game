import { catchMoneyBtn } from "../controller/index.js";

export function changeCubeImg(elem, index) {
    const cubesArray = document.querySelectorAll(".right__cube")
    if (elem === true) {
        cubesArray[index].src = "../img/star_cube.svg"
    } else {
        cubesArray[index].src = "../img/mine_cube.svg"
    }
}

export function win(bid) {
    const startBtn = document.querySelector("#catch-money")
    const showWinModal = document.querySelector("#show-victory")
    showWinModal.classList.add("hidden")
    startBtn.innerHTML = `Забрать ${bid * 2}`
    
    const showBlock = document.querySelector("#modal-block")
    showBlock.classList.add("hidden")
    const leftHidden = document.querySelector("#left-hidden")
    leftHidden.classList.add("hidden")
    startBtn.classList.remove("bg-red-400")
    const rightHidden = document.querySelector("#right-hidden")
    rightHidden.classList.remove("hidden")
    catchMoneyBtn()
}

export function start(minesValue) {
    const startBtn = document.querySelector("#start")
    startBtn.innerHTML = "Игра начата"
    const minesCount = document.querySelector("#mines-count")
    minesCount.innerHTML = minesValue
    const bidInput = document.querySelector("#bid-input")
    bidInput.setAttribute("readonly", "readonly")
    const leftHidden = document.querySelector("#left-hidden")
    leftHidden.classList.remove("hidden")
    startBtn.classList.add("bg-red-400")
    startBtn.id = "catch-money"
}

export function showVictoryModal() {
    const showWinModal = document.querySelector("#show-victory")
    const showBlock = document.querySelector("#modal-block")
    showBlock.classList.remove("hidden")
    showWinModal.classList.remove("hidden")
}

export function showLooseModal() {
    const showLooseModal = document.querySelector("#show-loose")
    const showBlock = document.querySelector("#modal-block")
    showBlock.classList.remove("hidden")
    showLooseModal.classList.remove("hidden")
}
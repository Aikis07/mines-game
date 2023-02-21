import { comparisonArrays } from "../model/index.js";
import { observer } from "../model/index.js";
import { win } from "../view/index.js";
import { start } from "../view/index.js";

let minesValue = 0
let userBid = 0

function onClickCube(minesVal) {
    const cubesArray = document.querySelectorAll(".right__cube")
    cubesArray.forEach((elem, i) => {
        elem.addEventListener("click", () => {
            comparisonArrays(i, minesVal)
        })
    })
}

export function choiseMinesCount() {
    const minesCount = document.querySelectorAll(".left__num")
    const minesSum = document.querySelectorAll(".left__value")

    minesCount.forEach((item, i) => {
        item.addEventListener('click', function () {
            minesValue = minesSum[i].innerHTML
            minesCount.forEach(elem =>
                elem.classList.remove('bg-teal-500'));
            this.classList.add('bg-teal-500');
        })
    })
}

export function doBid() {
    observer()
}

export function onClickClear() {
    const remove = document.querySelector("#remove")
    const currentBid = document.querySelector("#current-bid")
    const bidInput = document.querySelector("#bid-input")

    remove.addEventListener("click", () => {
        currentBid.innerHTML = ""
        bidInput.value = ""
        currentBid.innerHTML = "0"
    })
}

export function onClickDiv() {
    const division = document.querySelector("#division")
    const currentBid = document.querySelector("#current-bid")

    division.addEventListener("click", () => {
        return currentBid.innerHTML = +currentBid.innerHTML / 2
    })
}

export function onClickMult() {
    const mult = document.querySelector("#mult")
    const currentBid = document.querySelector("#current-bid")

    mult.addEventListener("click", () => {
        return currentBid.innerHTML = +currentBid.innerHTML * 2
    })
}

export function onClickStart() {
    const startBtn = document.querySelector("#start")

    startBtn.addEventListener("click", () => {
        const currentBid = document.querySelector("#current-bid").innerHTML

        if (minesValue !== 0 && currentBid !== "0") {
            userBid = +currentBid
            start(minesValue)
            onClickCube(minesValue)
        }
    })
}

export function onClickModal() {
    const looseBtn = document.querySelector("#loose")
    looseBtn.addEventListener("click", () => {
        window.location.reload()
    })
}

export function onClickWinModal() {
    const looseBtn = document.querySelector("#victory")

    looseBtn.addEventListener("click", () => {
        win(userBid)
    })
}

export function catchMoneyBtn() {
    const catchMoney = document.querySelector("#catch-money")
    catchMoney.addEventListener("click", () => {
        window.location.reload()
    })
}
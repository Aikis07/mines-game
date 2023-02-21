import { changeCubeImg } from "../view/index.js";
import { showVictoryModal } from "../view/index.js";
import { showLooseModal } from "../view/index.js";

function randomizeArr(mines) {
    const randomArr = []

    for (let i = 0; i < +mines; i++) {
        randomArr.push(false)
    }

    for (let i = +mines; i < 25; i++) {
        randomArr.push(true)
    }

    randomArr.sort(() => Math.random() - 0.5)
    return randomArr
}

export function comparisonArrays(index, minesVal) {
    const randomArr = randomizeArr(minesVal)

    changeCubeImg(randomArr[index], index)
    const currentBid = document.querySelector("#current-bid")

    let getBid = +currentBid.innerHTML

    if (randomArr[index] === true) {
        currentBid.innerHTML = getBid * 2
        const starsCount = document.querySelector("#stars-count")
        const gameSlots = 25
        // starsCount.innerHTML = +starsCount.innerHTML++;
        starsCount.innerHTML = +starsCount.innerHTML + 1

        if (+starsCount.innerHTML === (gameSlots - +minesVal)) {
            showVictoryModal()
        }
    } else {
        showLooseModal()
    }
}

export function observer() {
    class EventObserver {
        constructor() {
            this.observers = []
        }

        subscribe(fn) {
            this.observers.push(fn)
        }

        unsubscribe(fn) {
            this.observers = this.observers.filter(subscriber => subscriber !== fn)
        }

        broadcast(data) {
            this.observers.forEach(subscriber => subscriber(data))
        }
    }

    const bidObserver = new EventObserver()
    const currentBid = document.querySelector("#current-bid")
    const bidInput = document.querySelector("#bid-input")

    bidObserver.subscribe(text => {
        currentBid.innerHTML = bidInput.value
        if (bidInput.value === "") {
            currentBid.innerHTML = "0"
        }
    })

    bidInput.addEventListener("keyup", () => {
        bidObserver.broadcast(bidInput.value)
    })
}
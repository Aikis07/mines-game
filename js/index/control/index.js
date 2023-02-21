import { hasUser } from "../model/index.js";
import { hasJwt } from "../model/index.js";
import { hasLogin } from "../model/index.js";
import { refreshPage } from "../model/index.js";

const modal = document.querySelector("#modal")

export function showModal() {
    const showModalBtn = document.querySelector("#show-modal")

    if (hasLogin() === true) {
        showModalBtn.addEventListener("click", () => {
            modal.classList.remove("hidden")
        })
    } else {
        showModalBtn.addEventListener("click", () => {
            localStorage.removeItem("jwt")
            showModalBtn.innerHTML = "Войти"
            refreshPage()
        })
    }
}

export function closeModal() {
    const modalCross = document.querySelector("#modal-cross")

    modalCross.addEventListener("click", () => {
        modal.classList.add("hidden")
    })
}

export function gameEnter() {
    const gameBtn = document.querySelector("#mines")

    gameBtn.addEventListener("click", () => {
        if (hasJwt() !== false) {
            window.location.href = './mines.html'
        } else {
            window.location.href = './no-auth.html'
        }
    })
}

export async function getUserPass() {
    const enterBtn = document.querySelector("#enter-btn")

    enterBtn.addEventListener("click", (e) => {
        const login = document.querySelector("#login").value
        const pass = document.querySelector("#password").value

        e.preventDefault()
        hasUser(login, pass)
    })
}
const inst = axios.create({
    baseURL: "http://localhost:3004/",
    timeout: 1500,
})

function getUsers() {
    return inst.get("users")
    .then(response => {
        return response.data
    })
}

export function hasLogin() {
    const showModalBtn = document.querySelector("#show-modal")

    const getJwt = localStorage.getItem("jwt")

    if (getJwt !== null) {
        showModalBtn.innerHTML = "Выйти"
        return false
    } else {
        showModalBtn.innerHTML = "Войти"
        return true
    }
}

export async function hasUser(login, pass) {
    const users = await getUsers()

    const hasUserData = users.find(item => item.password === pass && item.login === login);

    const modal = document.querySelector("#modal")
    const showModalBtn = document.querySelector("#show-modal")

    if (hasUserData !== undefined) {
        localStorage.setItem("jwt", hasLogin.jwt)
        modal.classList.add("hidden")
        showModalBtn.innerHTML = "Выйти"
        refreshPage()
    } else {
        console.log(false)
    }
}

export function hasJwt() {
    if (localStorage.getItem("jwt") !== null) {
        return true
    } else {
        return false
    }
}

export function refreshPage() {
    window.location.reload()
}
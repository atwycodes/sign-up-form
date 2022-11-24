const userPassword = document.querySelector("#user-password");
const confirmPassword = document.querySelector("#confirm-password");
const passwordSpan = Array.from(document.querySelectorAll("span"));

userPassword.addEventListener("input", () => checkPassword(userPassword.value, confirmPassword.value));
confirmPassword.addEventListener("input", () => checkPassword(userPassword.value, confirmPassword.value));
window.addEventListener("load", () => checkPassword(userPassword.value, confirmPassword.value))


function checkPassword (a, b) {
    if (a === "" && b === "") {
        passwordSpan.map((element) => element.classList.add("not-matching"))
        userPassword.classList.add("error")
        confirmPassword.classList.add("error")        
        passwordSpan[0].textContent = "* Please input a password"
        return
    } else if (a !== b) { 
        clearError()
        addError()
        passwordSpan.map((element) => element.classList.add("not-matching"))
        passwordSpan[0].textContent = "* Passwords do not match"
        return
    } else if (a === b) {
        clearError()
        return
    }
}

function clearError () {
    passwordSpan.map((element) => element.className = "");
    userPassword.classList.remove("error")
    confirmPassword.classList.remove("error")        
    passwordSpan[0].textContent = ""
}

function addError () {
    userPassword.classList.add("error")
    confirmPassword.classList.add("error")        
}

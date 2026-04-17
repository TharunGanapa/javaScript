const validateForm = (event) => {
    event.preventDefault()

    let username = event.target.username.value
    let password = event.target.password.value
    let msg = document.getElementById("message")


    if (username === "" && password === ""){
        msg.innerText = "please Enter"
    }
}
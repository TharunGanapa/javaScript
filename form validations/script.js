// const validateForm = (event) => {
//     event.preventDefault()

//     let username = event.target.username.value
//     let password = event.target.password.value
//     let msg = document.getElementById("message")


//     if (username === "" && password === ""){
//         msg.innerText = "please Enter"
//     }
//     else if(username === ""){
//         msg.innerText = "please enter username";
//     }
//     else if(password === ""){
//         msg.innerText = "please enter password";
//     }
// }

const fetchAPI = async () => {
    let imageURL = null;
    try {

        let res = await fetch("https://dog.ceo/api/breeds/image/random")
        let data = await res.json()
        imageURL = data.message
    } catch (err) {
        console.log(err);
        
    }

    let image = document.getElementById("image")
    image.src = imageURL
}

fetchAPI()
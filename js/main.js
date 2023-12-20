let claimBtn = document.getElementById("claim");
let firstName = document.getElementById("firstName");
let lastName = document.getElementById("lastName");
let email = document.getElementById("email");
let password = document.getElementById("password");
let inputs = document.querySelectorAll("input");

inputs.forEach((input) => {
    input.onfocus = () => {
        input.classList.remove("warning");
        if (input.nextElementSibling.classList.contains("error")) {
            input.nextElementSibling.remove();
            input.nextElementSibling.style.display = "none";
        }
    }
})

claimBtn.onclick = (event) => {
    let validate = true;
    if (firstName.value === "") {
        createError(firstName, "First Name cannot be empty")
        validate = false;
    }
    if (lastName.value === "") {
        createError(lastName, "Last Name cannot be empty")
        validate = false;
    }
    if (email.value === "" || !String(email.value).includes('@') || String(email.value).includes(' ') || !String(email.value).includes('.com')) {
        createError(email, "Looks like this is not an email")
        validate = false;
    }
    if (password.value.length < 8) {
        createError(password, "Password must be longer than 8 characters")
        validate = false;
    } 
    else if (password.value === "") {
        createError(password, "Password cannot be empty")
        validate = false;
    } 
    if (!validate) {
        event.preventDefault();
    }
}



function createError(input, message) {
    if (!input.nextElementSibling.classList.contains("error")) {
        input.nextElementSibling.style.display = "block";
        let p = document.createElement("p");
        p.appendChild(document.createTextNode(`${message}`));
        p.classList.add("error");
        input.classList.add("warning");
        input.after(p);
    }
}
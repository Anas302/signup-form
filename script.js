const password = document.querySelector("#password");
const confr_password = document.querySelector("#confr-password");
const confr_password_div = document.querySelector("#confr-pass-div");

let div = document.createElement("div");
div.textContent = "Please type the same password";
div.style.color = "red";
div.style.position = "absolute";
div.style.display = "none";
div.style.fontSize = "12.5px";

confr_password.addEventListener("focusout", e => {
    if(e.target.value !== password.value){
        div.style.display = "block";
        confr_password_div.appendChild(div);
    }
});

confr_password.addEventListener("focusin", e => {
    if(div.style.display !== "none")
        div.style.display = "none";
});
const btn = document.querySelector("#btn");
const validate = document.querySelector("#validate");
const input = document.querySelector("#name");

btn.addEventListener("click", () => {
    let value = input.value;
    if(value == null || value == ""){
        validate.textContent = "Preencha o campo!"
    } else {
        validate.textContent = "Este nome é válido"
    }
});
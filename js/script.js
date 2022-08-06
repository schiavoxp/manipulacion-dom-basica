const btn = document.querySelector("#btnCalcular");
const input1 = document.querySelector("#numero1");
const input2 = document.querySelector("#numero2");
const result = document.querySelector(".result");
btn.addEventListener("click", btnClick);

function btnClick () {
    console.log("Escuchando el evento click!");
    result.innerText = Number(input1.value) + Number(input2.value);
}
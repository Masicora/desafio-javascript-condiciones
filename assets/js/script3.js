function ingresar() {

    let input1 = Number(document.getElementById("input1").value);
    let input2 = Number(document.getElementById("input2").value);
    let input3 = Number(document.getElementById("input3").value);
    let result = document.getElementById("result");

    if (input1 == 9 && input2 == 1 && input3 == 1) {
        result.innerHTML = "Password 1 correcto";
    }
    else if (input1 == 7 && input2 == 1 && input3 == 4) {
        result.innerHTML = "Password 2 correcto";
    }
    else {
        result.innerHTML = "Password incorrecto";
    }
}
document.getElementById("enter").addEventListener("click", ingresar);

// Francisco aquí te pido que me ayudes... Intenté definir variables para cada getElementById pero al hacerlo, y luego definir sum = input1 + input2 + input3, el código no reconoce los valores ingresados y la suma queda igual a cero...
function verify() {
    if (
        document.getElementById("input1").valueAsNumber + document.getElementById("input2").valueAsNumber + document.getElementById("input3").valueAsNumber <= 10
    ) {
        document.getElementById("info").innerHTML = `Llevas ${document.getElementById("input1").valueAsNumber + document.getElementById("input2").valueAsNumber + document.getElementById("input3").valueAsNumber} stickers`;
    }
    else {
        document.getElementById("info").innerHTML = "¡Llevas demasiados stickers!";
    }
}

document.getElementById("verificar").addEventListener("click", verify);
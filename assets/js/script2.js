

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
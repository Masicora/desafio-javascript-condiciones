function verify() {
    let input1 = Number(document.getElementById("input1").value);
    let input2 = Number(document.getElementById("input2").value);
    let input3 = Number(document.getElementById("input3").value);
    let info = document.getElementById("info");
    if (input1 + input2 + input3 <= 10) {
        info.innerHTML = `Llevas ${input1 + input2 + input3} stickers`;
    }
    else {
        info.innerHTML = "¡Llevas demasiados stickers!";
    }
}

document.getElementById("verificar").addEventListener("click", verify);
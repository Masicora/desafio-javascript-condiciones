
function addBorder() {
    if (this.style.border == "none") {
        this.style.border = "solid red 2px";
    }
    else {
        this.style.border = "none";
    }
}
document.getElementById('image').addEventListener("click", addBorder);

// Your code here
const dodger = document.getElementById("dodger")
console.log(dodger.style.left.replace("px",""))
function moveDodgerLeft(){
    console.log(dodger.style.left.replace("px",""))
    const leftNumbers = dodger.style.left.replace("px","");
    const left = parseInt(leftNumbers,10);
    if (left > 0) {
        dodger.style.left = `${left-1}px`;
    }
}
document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") {
        moveDodgerLeft();
    }
    if (e.key === "ArrowRight") {
        moveDodgerRight();
    }
});
function moveDodgerRight(){
    const leftNumbers = dodger.style.left.replace("px","");
    const left = parseInt(leftNumbers,10);
    if (left < 360) {
        dodger.style.left = `${left+1}px`;
    }
}
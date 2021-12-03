const bar = document.getElementById("bar");
function moveBar() {
    if(window.event.type === "mousemove") {
        bar.style.left = `${window.event.x - (bar.offsetWidth / 2)}px`;
    }
}

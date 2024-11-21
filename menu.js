const app = document.getElementById('app');
const offset = 0 - document.body.getBoundingClientRect().top + app.getBoundingClientRect().top

function onScroll(){
    console.log(offset + " " + window.scrollY);
    console.log(window.scrollY - offset);
    if (window.scrollY - offset > 0) {
        app.style.top = window.scrollY - offset + "px";
    }
}

window.addEventListener("scroll", () => onScroll(), {passive: false});
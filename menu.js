let wrapper = document.body.querySelectorAll(".wrapper");

let section = 1;
const offsets = [window.innerHeight * 1.2, visualViewport.height *0.5 / visualViewport.height / 1.2]

function parallax() {
    if (scrollY >= visualViewport.height * 0.15){
        document.body.querySelector(".fancy").classList.add("seen");
        document.body.querySelector("#scroll-up").style.display = "inherit";
    } else {
        document.body.querySelector(".fancy").classList.remove("seen");
        document.body.querySelector("#scroll-up").style.display = "none"
    }

    // section = ((window.scrollY + visualViewport.height *0.4) / visualViewport.height / 1.2) | 0;

   wrapper.forEach((el) => {
        let o = window.scrollY - el.getBoundingClientRect().top - visualViewport.offsetTop;
        if(o > 0 && (window.scrollY + visualViewport.height) > o) {
            switch(el){
                case wrapper[0]:
                    c = 0; a = 0; break;
                case wrapper[1]:
                    c = 100; a = -100; break;
                case wrapper[2]:
                    c = 0; a = -200; break;
                case wrapper[3]:
                    c = 0; a = -300; break;  
            }
            el.style.backgroundPositionY = (o*0.09 + 250 + a) + "px, 0, " + (o * -0.055 - c) + "px"
        }
    });
};

window.addEventListener("scroll", () => parallax(), {passive: true});

function sl(el) {
    console.log(document.querySelector("#"+el).getBoundingClientRect().top);
    window.scrollBy({top: document.querySelector("#"+el).getBoundingClientRect().top + 1, left: 0, behavior: "smooth"});
}

function scrollUp() {
    window.scroll({top: 0, left: 0, behavior: "smooth"})
}

function show(e) {
    section = ((window.scrollY + e.clientY)/offsets[0]) | 0;
    window.scrollBy({top: wrapper[section].getBoundingClientRect().top + 1, left: 0, behavior: "smooth"});
    slider = wrapper[section].querySelector(".carousel");
    slider.classList.remove("hidden");
    slider.previousElementSibling.style.opacity = (slider.className == "carousel hidden")? "1": "0";

    w = document.body.querySelectorAll(".wrapper")

    w.forEach((el) => el.addEventListener("mousedown", (a) => {
        console.log(a.target.className)
        if(a.target.className != "slider_inner" && a.target.getParentElement.className != "controls"){
            console.log(a.target)
            section = ((window.scrollY + e.clientY)/offsets[0]) | 0;
            window.scrollBy({top: wrapper[section].getBoundingClientRect().top + 1, left: 0, behavior: "smooth"});
            slider = wrapper[section].querySelector(".carousel");
            slider.classList.add("hidden");
            slider.previousElementSibling.style.opacity = (slider.className == "carousel hidden")? "1": "0";
            el.removeEventListener("onscroll")
        }
    }));
}

function left(e, n) {
    s = wrapper[e].querySelector(".slider_wrapper")
    s.scrollBy(-(s.scrollWidth - s.clientWidth)/n, 0)
}
function right(e, n) {
    s = wrapper[e].querySelector(".slider_wrapper")
    s.scrollBy((s.scrollWidth - s.clientWidth)/n, 0)
}

document.querySelector(".map").addEventListener("mousedown", (e) => show(e))
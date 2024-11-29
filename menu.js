const wrapper = document.body.querySelectorAll(".wrapper");

let section = 1;

function parallax() {
    if (scrollY >= visualViewport.height * 0.15){
        document.body.querySelector(".fancy").classList.add("seen");
        document.body.querySelector("#scroll-up").style.display = "inherit";
    } else {
        document.body.querySelector(".fancy").classList.remove("seen");
        document.body.querySelector("#scroll-up").style.display = "none"
    }
   wrapper.forEach((el) => {
        let o = window.scrollY - el.getBoundingClientRect().top - visualViewport.offsetTop;
        if(o > 0 && (window.scrollY + visualViewport.height) > o) {
            switch(el){
                case wrapper[0]:
                    section = 1;
                    c = 0; a = 0; break;
                case wrapper[1]:
                    section = 2;
                    c = 100; a = -100; break;
                case wrapper[2]:
                    section = 3000;
                    c = 0; a = -200; break;
                case wrapper[3]:
                    section = 4;
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

function show() {
    console.log(section);
}

document.querySelector(".map").addEventListener("mouseover", () => show())
const wrapper = document.body.querySelectorAll(".wrapper");

function parallax() {
   wrapper.forEach((el) => {
        switch(el){
            case wrapper[0]:
                c = 150; break;
            case wrapper[1]:
                c = 400; break;
            case wrapper[2]:
                c = 200 ; break;
            case wrapper[3]:
                c = 200 ; break;  
        }
        let o = window.scrollY - el.getBoundingClientRect().top - visualViewport.offsetTop;
        if(o >= 0) {
            console.log(el.id + ": " + o);
            el.style.backgroundPositionY = "0, " + (o * 0.05 - c) + "px"
        }
    });
};

window.addEventListener("scroll", () => parallax(), {passive: true});
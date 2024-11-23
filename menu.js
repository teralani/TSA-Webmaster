const wrapper = document.body.querySelectorAll(".wrapper");

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting) {
            if(window.scrollY - entry.target.getBoundingClientRect().top <= 0) {
                console.log(((window.scrollY - entry.target.getBoundingClientRect().top)/2));
                entry.target.style.backgroundPosition = "center " + ((window.scrollY - entry.target.getBoundingClientRect().top)/2);
            }
        }
    });
});

wrapper.forEach((el) => {
    observer.observe(el);
})
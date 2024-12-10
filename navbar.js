function showOptions() {
    buttons = document.getElementById("nav_buttons");
    if (buttons.classList.contains("show_options")){
        buttons.classList.remove("show_options");
    } else {
        buttons.classList.add("show_options");
    }
}

document.body.querySelector("#logo").addEventListener("mousedown", () => {
    window.location.href = "/TSA-Webmaster";
    console.log("hi")
})
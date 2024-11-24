function showOptions() {
    buttons = document.getElementById("nav_buttons");
    if (buttons.classList.contains("show_options")){
        buttons.classList.remove("show_options");
    } else {
        buttons.classList.add("show_options");
    }
}
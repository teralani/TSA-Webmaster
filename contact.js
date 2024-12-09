const errorPopup = document.querySelector(".errorPopup");
const formSubmit = document.querySelector(".overlay");
const text = document.querySelector(".thank");
let form = document.getElementById("form");
const name = document.getElementById("name");
const email = document.getElementById("email");   
const feedback = document.getElementById("Feedback");
name.value = "";
email.value = "";
feedback.value = "";
form.addEventListener("submit", (e) => {
    
    
    let t = email.value.indexOf("@");
    if(t <= 0 || email.value.includes("@", t+1) || email.value.indexOf(".") < t+2 || email.value.includes(".", email.value.indexOf(".")+1) || email.value.includes(" ")){
        errorPopup.style.visibility = 'visible';
    }else{

        errorPopup.style.visibility = 'hidden';
        text.innerText = "Thank you " + name.value + " for your feedback!\n We will reach out to you at " + email.value + " regarding your comments: \"" + feedback.value + "\" within a week!";
        formSubmit.style.visibility = 'visible';
        name.value = "";
        email.value = "";
        feedback.value = "";
    }
  });
window.onresize = function() {
    console.log(innerWidth);
}

// 
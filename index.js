// console.log("hello");
// let btn = document.querySelectorAll(".button");
// btn.forEach((el) => {
//   el.addEventListener("mousemove", (e) => {
//     e.preventDefault();
//     let rect = el.getBoundingClientRect();
//     let x = e.clientX - (rect.left + rect.width / 2);
//     let y = e.clientY - (rect.top + rect.height / 2);
//     if (Math.abs(x) < 90 && Math.abs(y) < 50) {
//       el.style.transform = `translate(${x}px, ${y}px)`;
//     } else {
//       el.style.transform = `translate(0,0)`;
//     }
//   });
//   el.addEventListener("mouseleave", () => {
//     el.style.transform = `translate(0,0)`;
//   });
// });

// var prevScrollpos = window.pageYOffset;
// window.onscroll = function() {
//   var currentScrollPos = window.pageYOffset;
//   if (prevScrollpos > currentScrollPos) {
//     document.getElementById("navbar").style.top = "0";
//   } else {
//     document.getElementById("navbar").style.top = "-50px";
//   }
//   prevScrollpos = currentScrollPos;
// }

document.addEventListener("DOMContentLoaded", () =>{
  const observer = new IntersectionObserver(entries =>{
    entries.forEach(entry =>{
      if(entry.isIntersecting){
        entry.target.classList.add("in-view");
        return;
      }
      entry.target.classList.remove("in-view");
    });
  });
  const allAnimatoedElements = document.querySelectorAll(".animated")
  allAnimatoedElements.forEach((element) => observer.observe(element))
});
function showOptions() {
    buttons = document.getElementById("nav_buttons");
    if (buttons.classList.contains("show_options")){
        buttons.classList.remove("show_options");
    } else {
        buttons.classList.add("show_options");
    }
}
const road = document.getElementById('roadBG');

const car = document.getElementById('car');
const roadHeight = document.getElementById('line').getBoundingClientRect().height;
const roadLength = road.getTotalLength();

let progress = 0
let prevangle = 90
const k = 1 ;
function animate(){
    
    progress = Math.pow(window.scrollY-(0.4*window.outerHeight),k)/(roadHeight);
    console.log(progress*100);
    const point = road.getPointAtLength(progress * roadLength);
    const Dirpoint = road.getPointAtLength((progress+0.01) * roadLength);
    let angle = Math.atan((Dirpoint.y-point.y)/(Dirpoint.x-point.x))*(180/Math.PI)+90;
    if(Math.abs(angle-prevangle) > 90 && progress<0.5){
        angle-=180
    }
    car.setAttribute('transform','translate(' + point.x + ', ' + point.y + ') rotate('+angle+')');
    prevangle = angle
    
}
window.addEventListener("scroll", () => animate(),{ passive: true });


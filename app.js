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
const roadLength = road.getTotalLength();

let currScroll = 0;
let k = 115;
let maxScroll = k*(window.innerWidth/window.innerHeight);
let progress = 0;
function addScroll(){

    currScroll = ((window.scrollY/window.innerHeight)*100)-50;

    
    progress = Math.pow(Math.max(currScroll, 0)/maxScroll, 0.85);
    

        
    const point = road.getPointAtLength(progress*roadLength);

    const Dirpoint = road.getPointAtLength((progress+0.01) * roadLength);
    let angle = 90+Math.atan2((Dirpoint.y-point.y),(Dirpoint.x-point.x))*(180/Math.PI);
    car.setAttribute('transform','translate(' + point.x + ', ' + point.y + ') rotate('+angle+') ');
    prevangle = angle

}

window.addEventListener("scroll", () => addScroll(),{ passive: true });
window.addEventListener('resize', () => function(){
    maxScroll = k*(window.innerWidth/window.innerHeight);
});


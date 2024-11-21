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
const roadHeight = document.getElementById('roadBG').getBoundingClientRect().height;
 const roadWidth = document.getElementById('roadBG').getBoundingClientRect().width ;
const roadLength = road.getTotalLength();

let currScroll = 0;
let k = 105;
let maxScroll = k*(window.innerWidth/window.innerHeight);
let progress = 0;
function addScroll(){
    //console.log(roadHeight*window.innerHeight/100);
    currScroll = ((window.scrollY/window.innerHeight)*100)-50;
    console.log(window.innerWidth)
    //console.log(window.innerHeight);
    //console.log(currScroll)
    progress = Math.pow(currScroll/maxScroll, 0.85);
    progress = Math.max(progress, 0.01);
    if(currScroll > 0){

        const point = road.getPointAtLength(progress * roadLength);

        const Dirpoint = road.getPointAtLength((progress+0.01) * roadLength);
        let angle = 90+Math.atan2((Dirpoint.y-point.y),(Dirpoint.x-point.x))*(180/Math.PI);
        //console.log(progress);
        
        //console.log(angle);
        car.setAttribute('transform','translate(' + point.x + ', ' + point.y + ') rotate('+angle+') ');
        prevangle = angle
    }
}

window.addEventListener("scroll", () => addScroll(),{ passive: true });
window.addEventListener('resize', () => function(){
    maxScroll = k*(window.innerWidth/window.innerHeight);
});


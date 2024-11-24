const road = document.getElementById('roadBG');

const car = document.getElementById('car');
const roadLength = road.getTotalLength();
let point = road.getPointAtLength(0*roadLength);
car.setAttribute('transform','translate(' + point.x + ', ' + point.y + ') rotate('+96+') ');


let currScroll = 0;
const r= 3500
let k = (-97.523*(window.innerHeight/window.innerWidth)) + 156;

let maxScroll = k*(window.innerWidth/window.innerHeight);
let progress = 0;
function addScroll(){

    currScroll = ((window.scrollY/window.innerHeight)*100)-50;

    
    progress = Math.max(currScroll, 0)/maxScroll;
    

        
    point = road.getPointAtLength(progress*roadLength);

    const Dirpoint = road.getPointAtLength((progress+0.01) * roadLength);
    let angle = 90+Math.atan2((Dirpoint.y-point.y),(Dirpoint.x-point.x))*(180/Math.PI);
    car.setAttribute('transform','translate(' + point.x + ', ' + point.y + ') rotate('+angle+') ');
    prevangle = angle
}

window.addEventListener("scroll", () => addScroll(),{ passive: true });
window.onresize = function() {
    console.log("trig");
    maxScroll = k*(window.innerWidth/window.innerHeight);
    k = (-97.523*(window.innerHeight/window.innerWidth)) + 156;
}



const road = document.getElementById('roadBG');
const roadMobile = document.getElementById("roadBGMobile");

const car = document.getElementById('car');

const roadLength = road.getTotalLength();
const roadMobileLength = roadMobile.getTotalLength();
let point = 0;
let angle = 0;
let mobile = false;
if(window.innerWidth <= 1100){
    point = roadMobile.getPointAtLength(0*roadMobileLength); 
    angle = 180;
    mobile = true;
}else{
    point = road.getPointAtLength(0*roadLength);
    angle = 96;
    mobile = false;
}

car.setAttribute('transform','translate(' + point.x + ', ' + point.y + ') rotate('+ angle +') ');


let currScroll = 0;
const r= 3500
let k = (-97.523*(window.innerHeight/window.innerWidth)) + 160;

let maxScroll = k*(window.innerWidth/window.innerHeight);
let progress = 0;

function addScroll(){
    if(!mobile){
        currScroll = ((window.scrollY/window.innerHeight)*100)-20;
        progress = Math.max(currScroll, 0)/maxScroll;
        point = road.getPointAtLength(progress*roadLength);
        const Dirpoint = road.getPointAtLength((progress+0.01) * roadLength);
        let angle = 90+Math.atan2((Dirpoint.y-point.y),(Dirpoint.x-point.x))*(180/Math.PI);
        car.setAttribute('transform','translate(' + point.x + ', ' + point.y + ') rotate('+angle+') scale(0.7)');
        imageTrigger(progress);
    }else{
        console.log(progress);
        progress = window.scrollY/1000;
        point = roadMobile.getPointAtLength(progress*roadMobileLength);
        car.setAttribute('transform','translate(' + point.x + ', ' + point.y + ') rotate(' + 180 + ') ');
    }
}
window.addEventListener("scroll", () => addScroll(),{ passive: true });
window.onresize = function() {
    k = (-97.523*(window.innerHeight/window.innerWidth)) + 160;
    maxScroll = k*(window.innerWidth/window.innerHeight);
    addScroll()
    mobile = window.innerWidth <= 1100;
}

function imageTrigger(progress){
    
    if(progress >= 0.05){
        document.getElementById("farm").querySelector(".img").classList.add("in-view");
        document.getElementById("farm").querySelector(".text").classList.add("in-view");
    }else{
        document.getElementById("farm").querySelector(".img").classList.remove("in-view")
        document.getElementById("farm").querySelector(".text").classList.remove("in-view")
    }
    if(progress >= 0.20){
        document.getElementById("organic").querySelector(".img").classList.add("in-view")
        document.getElementById("organic").querySelector(".text").classList.add("in-view")
    }else{
        document.getElementById("organic").querySelector(".img").classList.remove("in-view")
        document.getElementById("organic").querySelector(".text").classList.remove("in-view")
    }
    if(progress >= 0.50){
        document.getElementById("fresh").querySelector(".img").classList.add("in-view")
        document.getElementById("fresh").querySelector(".text").classList.add("in-view")
    }else{
        document.getElementById("fresh").querySelector(".img").classList.remove("in-view")
        document.getElementById("fresh").querySelector(".text").classList.remove("in-view")
    }
    if(progress >= 0.70){
        document.getElementById("emissions").querySelector(".img").classList.add("in-view")
        document.getElementById("emissions").querySelector(".text").classList.add("in-view")
    }else{
        document.getElementById("emissions").querySelector(".img").classList.remove("in-view")
        document.getElementById("emissions").querySelector(".text").classList.remove("in-view")
    }
}


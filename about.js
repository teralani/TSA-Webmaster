
const road = document.querySelector(".line").getElementById('roadBG');
const roadMobile = document.querySelector(".mobile").getElementById("roadBG");

const car = document.querySelector(".line").getElementById('car');
const carMobile = document.querySelector(".mobile").getElementById('car');

const roadLength = road.getTotalLength();
const roadMobileLength = roadMobile.getTotalLength();
let point = 0;
let angle = 0;
let mobile = false;
if(window.innerWidth <= 1100){
    point = roadMobile.getPointAtLength(0*roadMobileLength); 
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
        console.log(window.scrollY/(document.body.getBoundingClientRect().height*1.8))
        carMobile.style.transform = "translate(0px, -" + window.scrollY*1.8 + "px)";
        imageTrigger(window.scrollY/document.body.clientHeight);
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
        document.getElementById("farm").classList.add("in-view");
        document.getElementById("farm").classList.add("in-view");
    }else{
        document.getElementById("farm").classList.remove("in-view")
        document.getElementById("farm").classList.remove("in-view")
    }
    if(progress >= 0.20){
        document.getElementById("organic").classList.add("in-view")
        document.getElementById("organic").classList.add("in-view")
    }else{
        document.getElementById("organic").classList.remove("in-view")
        document.getElementById("organic").classList.remove("in-view")
    }
    if(progress >= 0.50-(mobile?0.1:0)){
        document.getElementById("fresh").classList.add("in-view")
        document.getElementById("fresh").classList.add("in-view")
    }else{
        document.getElementById("fresh").classList.remove("in-view")
        document.getElementById("fresh").classList.remove("in-view")
    }
    if(progress >= 0.70-(mobile?0.1:0)){
        document.getElementById("emissions").classList.add("in-view")
        document.getElementById("emissions").classList.add("in-view")
    }else{
        document.getElementById("emissions").classList.remove("in-view")
        document.getElementById("emissions").classList.remove("in-view")
    }
}


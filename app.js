const play = document.getElementById('on');
const stop = document.getElementById('off');
const less = document.getElementById('less');
const more = document.getElementById('more');
const lights = document.getElementsByClassName('lights');
const count = document.getElementById('count');
var speed = 0;
var leng = lights.length;
count.innerHTML= 0;
const on = function (){
  for(var i = 0; i < leng; i++){
  lights[i].removeAttribute("style");
  lights[i].style.animationPlayState = "running";
  lights[i].style.WebkitAnimationPlayState = "running";
  }
}

const off = function () {
  for (var i = 0; i < leng; i++) {
    lights[i].style.animation = "none";
    lights[i].style.background = "#563260";
  }
}

const speedLess= function () {
  for(var i = 0; i < leng; i++){
    lights[i].style.animationDuration = speed - 1 + "s";
  }
  count.innerHTML = speed--
}

const speedMore= function () {
  for(var i = 0; i < leng; i++){
    lights[i].style.animationDuration = speed + 1 + "s";
  }
  count.innerHTML = speed++
}

play.addEventListener("click", on);
stop.addEventListener("click", off);
less.addEventListener("click",speedLess);
more.addEventListener("click",speedMore);
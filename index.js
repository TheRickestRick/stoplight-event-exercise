let stopBtn = document.getElementById("stopButton");
let stopLit = document.getElementById("stopLight");
let slowBtn = document.getElementById("slowButton");
let slowLit = document.getElementById("slowLight");
let goBtn = document.getElementById("goButton");
let goLit = document.getElementById("goLight");
let flag1 = false;
let flag2 = false;
let flag3 = false;
(function() {
  'use strict';
  stopBtn.onmouseenter = function(){
    console.log("Mouse is over the stop button");
  }
  stopBtn.onclick = function(){
    if(flag1 === false){
    stopLit.style.background = "red";
    flag1 = true;
    // console.log("The red light is on.")
  }else{
    stopLit.style.background = "black";
    flag1 = false;
    // console.log("The red light is off.")
  }
  }
})();

(function() {
  'use strict';
  slowBtn.onmouseenter = function(){
    console.log("Mouse is over the slow button");
  }
  slowBtn.onclick = function(){
    if(flag2 === false){
    slowLit.style.background = "yellow";
    flag2 = true;
    // console.log("The yellow light is on.")
  }else{
    slowLit.style.background = "black";
    flag2 = false;
    // console.log("The yellow light is off.")
  }
  }
})();

(function() {
  'use strict';
  goBtn.onmouseenter = function(){
    console.log("Mouse is over the go button");
  }
  goBtn.onclick = function(){
    if(flag3 === false){
    goLit.style.background = "green";
    flag3 = true;
    // console.log("The green light is on.")
  }else{
    goLit.style.background = "black";
    flag3 = false;
    // console.log("The green light is off.")
  }
  }
})();


  document.addEventListener('click', flagState)
  function  flagState(){
  if(flag1 === true){
    console.log("The red light is on.")
  }else if (flag1 === false){
    console.log("The red light is off.")
  }
  if(flag2 === true){
    console.log("The yellow light is on.")
  }else if (flag2 === false){
    console.log("The yellow light is off.")
  }
  if(flag3 === true){
    console.log("The green light is on.")
  }else if( flag3 === false){
    console.log("The green light is off.")
  }
}

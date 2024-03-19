var audio = document.querySelector('audio');
var playicon = document.getElementById("play");
var pauseicon = document.getElementById("pause");
var duration = document.getElementById("duration");
var time = document.getElementById("time");
var range = document.getElementById("slider");

var n =0;
var day = document.getElementById("day");
const d = new Date();
const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
let getday = weekday[d.getDay()];
day.innerHTML = getday;
setInterval( function()
{
    n+=0.5;
    range.value = n;
    time.innerHTML =   new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit', hour12: false});

} ,1000);





function play() 
{
   
    if (audio.paused) 
    {
        audio.play();
        pauseicon.style.display = "flex";
        playicon.style.display = "none";
    } 
    else 
    {
        audio.pause();
        pauseicon.style.display = "none";
        playicon.style.display = "flex";
    }
}

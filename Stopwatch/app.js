let [seconds, minute, hour] = [0,0,0];

let displayTime = document.getElementById("displayTime");
let timer = null;
 
function stopwatch(){
    seconds++;
    if(seconds == 60){
        seconds = 0;
        minute++;
        if(minute == 60){
            minute = 0;
            hour++;
        }
    }
    displayTime.innerHTML = hour +":"+ seconds;
}

function watchstart(){
    if(timer!== null)
    {
        clearInterval(timer);
    }
    setInterval(stopwatch,1000);
}
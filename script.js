{
const daysB = document.querySelector('#days');
const hoursB = document.querySelector('#hours');
const minsB = document.querySelector('#mins'); 
const secondsB = document.querySelector('#seconds');




const newYears = "1 Jan 2023";
console.log(new Date(newYears))

//countdown function 
const countdown = () => {
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();

    const totalSeconds = (newYearsDate - currentDate) / 1000;


    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const mins = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;


    daysB.innerHTML = days;
    hoursB.innerHTML = formatTime(hours);
    minsB.innerHTML = formatTime(mins);
    secondsB.innerHTML = formatTime(seconds);
} 

function formatTime(time) {
    return time < 10 ? ('0'+ time) : time;
}


//initiate 
countdown();
setInterval(countdown, 1000);
     
     
}

  

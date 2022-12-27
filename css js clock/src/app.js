
const secondHand = document.querySelector('.secondhand');
const minuteHand = document.querySelector('.minutehand');
const hourhand = document.querySelector('.hourhand');
function setDate(){
    const currentTime = new Date();
    const seconds = currentTime.getSeconds();
    const minutes = currentTime.getMinutes();
    const hours = currentTime.getHours();
    const secondsinDegrees = ((seconds/60)*360+90);
    const minutesinDegrees = ((minutes/60)*360+90)
    const hoursinDegrees = ((minutes/12) * 360 + 90)
    
    secondHand.style.transform = `rotate(${secondsinDegrees}deg)`;
    minuteHand.style.transform = `rotate(${minutesinDegrees}deg)`;
    hourhand.style.transform = `rotate(${hoursinDegrees}deg)`;

}

setInterval(setDate,1000);
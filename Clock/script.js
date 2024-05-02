const hourHand= document.querySelector('.hour-hand')
const minHand = document.querySelector('.min-hand')
const secHand= document.querySelector('.second-hand')


function setDate(){
    const now = new Date()

    // second hand 
    const second= now.getSeconds();
        // Degree of second hand
    const secondDegree =((second/60)*360)+ 90;
    secHand.style.transform = `rotate(${secondDegree}deg)`;
    
    // min Hand  
    const min= now.getMinutes();
        // Degree of minute hand
    const minDegree =((min/60)*360)+ 90;
    minHand.style.transform = `rotate(${minDegree}deg)`;

    // hour hand
    const hr= now.getHours();
        // Degree of minute hand
    const hrDegree =((hr/12)*360)+ 90;
    hourHand.style.transform = `rotate(${hrDegree}deg)`;
}

setInterval(setDate,1000)
setDate();

console.log(setDate())
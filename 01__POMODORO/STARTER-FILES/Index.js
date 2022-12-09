// **Users should be able to:**
// - Start the timer by clicking on the start link/button.
// - Once the user clicks start, the word start will change to stop. Then, the user can click on the stop button to make the timer stop.
// - Click on the gear icon to change the length (minutes and seconds) of the timer.
// - Once the timer finishes, the ring should change from green to red and an alert message is passed to the browser.


// function timer(){
//     let time = 5;
//     if (time > 0) {
//         function timer1(){
//             console.log(time--)
//         }
//         const myTimer = setInterval(timer1, 1000)
//     } else if (time === 0 ) {
//         clearInterval(Timer)
//     }
//     return time

   
  
// }
let seconds = 0;
let interval ;
function pomodoro(mins) {
   seconds = mins*60 || 0;     
   interval = setInterval(function() {
 
        seconds--;
        if(!seconds){
             clearInterval(interval); 
             alert("🚨 It is Cool 😎. I wish you could share ");
        }
   },1000)
}
const startBtn = document.querySelector('.start')
startBtn.addEventListener('click', () =>{
   pomodoro(60)
})

// https://freshman.tech/pomodoro-timer/
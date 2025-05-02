const hour = document.querySelector("#hours")
const minute = document.querySelector("#minutes")
const second = document.querySelector("#seconds")
function handelar() {
  const currentTime = new Date();
   const hrs = currentTime.getHours();
   const mins = currentTime.getMinutes();
   const secs = currentTime.getSeconds();  
   if(hrs < 10){
     hour.innerHTML = "0" + hrs;
   }else{
     hour.innerHTML = "" + hrs;
   }
   if(mins < 10){
     minute.innerHTML = "0" + mins;
   }else{
     minute.innerHTML = mins;
   }
   if(secs < 10){
     second.innerHTML = "0" + secs;
   }else{
     second.innerHTML = secs;
   }
}
setTimeout(handelar,1);
setInterval(handelar, 1000);
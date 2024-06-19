const endDate ="23 june 2024 10:00 PM"
document.getElementById("end-date").innerText = endDate;
const inputs = document.querySelectorAll("input")
//This is one method you know.  
//const clock=()=>{
//}
function clock(){
    const end = new Date(endDate)
    const now= new Date()
    const diff =(end- now)/1000;//this divided make this to convert milisecount to secound.
     
    console.log(diff);
    //convert into days. 
    //using the stop to come you the negative value which is come out you know.
    if(diff<0) return ;

    inputs[0].value =( Math.floor(diff / 3600 /24));
    inputs[1].value = (Math.floor(diff/3600)%24);
    inputs[2].value = (Math.floor(diff/60)%60);
    inputs[3].value = (Math.floor(diff)%60);
    //convert[] into days.

}
//intial call.
clock()

setInterval(
    ()=>{
        clock()
    },1000
)
/* 
* 1 day = 24 hours;
1 hrs = 60 minutes;
60 minutes = 3600 sec;
*/
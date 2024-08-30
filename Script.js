let myTimer;
let number = 0
const clock = document.getElementById("tall")
function start(){
myTimer = setInterval(count,1000)
    
    
}
function count(){
number ++
clock.innerHTML = number;
}

function stopp(){
clearInterval(myTimer)

}

function reset(){
    number = 0
    clock.innerHTML = number;


}
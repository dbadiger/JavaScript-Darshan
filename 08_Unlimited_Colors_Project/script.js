const random_color = function(){
    const hex = "0123456789ABCDEF"
    let color = "#"
    for(let i=0;i<6;i++){
        color=color+ hex[Math.floor(Math.random()*16)]
    }
    return color;
}
// console.log(random_color())

let intervalID;
const startChangeColor=function(){

    if(!intervalID){
        intervalID= setInterval(changeBGColor, 1000)
    }
    function changeBGColor (){

        document.body.style.backgroundColor = random_color()
        console.log("COLR CHANGE STARTED")
    }

}
const stopChangeColor=function(){
    clearInterval(intervalID)
    intervalID = null;
    console.log("COLR CHANGE STOPED")

}
document.querySelector('#start').addEventListener('click',startChangeColor )
document.querySelector('#stop').addEventListener('click',stopChangeColor )
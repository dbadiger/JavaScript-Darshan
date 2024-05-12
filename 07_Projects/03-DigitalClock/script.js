// const clock = document.querySelector('#clock')
const clock = document.getElementById('clock')


setInterval(function(){
    
let date = new Date()
// clock.innerHTML = date.toLocaleString()
clock.innerHTML = date.toLocaleTimeString()
// console.log(date.toLocaleString())
}, 1000)

//Events will run sequentially. (Synchronous). Sometimes asynchronous.

//Approach 2 -Gives less Features 
/*
document.getElementById('lion').onclick = function(){
    alert('Lion Clicked')   //When we use onclick event, we will not get moare information, whereas in addEventListener method, we get more information.
}
*/
//Event listeners will give onclick functionality and the propagation ability also

//Approach 3 - Best Approach

document.getElementById('lion').addEventListener('click', function(e){
    // alert('Lion Clicked Again ')
    console.log(e)  //PonterEvent 
    //Types of Events: Browser Events and Enviornment Events(mouse click, its postion, time when it is clicked(timestamp), etc)
}) 




//Propagation: Bubbling - from inner Element to Outer Element propagation (Inside to Outside / Child to Parent)
//you can remove 3rd paramenter(false), then also it works same. Because by default, it will be false only,
/*document.getElementById('images').addEventListener('click', function(e){
    console.log("Clicked inside UL")   
}, false)   //Output: Clicked inside UL

document.getElementById('lion').addEventListener('click', function(e){
    console.log("Lion Clicked")  
}, false) //Output:Lion Clicked  Clicked inside UL
*/

//Propagation: Event Capturing - from Outside Element to inner Element propagation (Outside to Inside/ Parent to Child)
document.getElementById('images').addEventListener('click', function(e){
    console.log("Clicked inside UL")   
}, true)   //Output: Clicked inside UL

document.getElementById('lion').addEventListener('click', function(e){
    console.log("Lion Clicked")  
}, true) //Output: Clicked inside UL Lion Clicked









//Why you have written the third paramenter as false? : It is defalut false. and it is not manditory to write it.
/*
Old time - attachEvent()
jQuery - onEventListenter()

Event Object

Types: keyboard events, mouse Events
Timestamp
preventDefault()
srcElement
target,
toElement
currentTarget
clientX, clientY, screen, screenY (Client position related)
altkey, ctrlkey, keycode



Event Propagation - (3rd parameter true, false)
if 3rd paramenter is false - "Event Bubbling" 
(Most of the projects work on event Bublbing. i.e 3rd paramenter is false)
Child to parent

if 3rd parameter is true - "Event Capturing" (Few Cases)
Parent to child
*/
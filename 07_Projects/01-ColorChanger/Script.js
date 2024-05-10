const button = document.querySelectorAll('.button')
const body = document.querySelector('body')


//Method 1
/*
button.forEach(function(indbutton){
    console.log(indbutton)
    indbutton.addEventListener('click', function(e){
        console.log(e)
        console.log(e.target)

        if(e.target.id==='gray'){
            body.style.backgroundColor=e.target.id
        }
        if(e.target.id==='blue'){
            body.style.backgroundColor=e.target.id
        }
        if(e.target.id==='orange'){
            body.style.backgroundColor=e.target.id
        }
        if(e.target.id==='yellow'){
            body.style.backgroundColor=e.target.id
        }
        if(e.target.id==='white'){
            body.style.backgroundColor=e.target.id
        }
    })

})

*/

//Method2
/*
button.forEach((ind_button)=>{
    ind_button.addEventListener('click', (e)=>{
        body.style.backgroundColor=e.target.id;
    })

})*/

//Method 3

button.forEach((ind_button)=>{
    ind_button.addEventListener('mouseover', (e)=>{
        body.style.backgroundColor=e.target.id;
    })

})
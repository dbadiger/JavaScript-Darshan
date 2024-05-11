const form = document.querySelector('form')

//We can fetch the placeholder values here only. but this usecase will give you empty values
//    const height = parseInt(document.querySelector('#height').value)
// const weight = parseInt(document.querySelector('#weight').value)

form.addEventListener('submit', (e)=>{
    e.preventDefault()

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results')
    const size = document.querySelector('#size')

    if(height==='' || height<0 || isNaN(height)){
        results.innerHTML = `Please Give Valid Height ${height}`
    }  else if(weight==='' || weight<0 || isNaN(weight)){
        results.innerHTML = `Please Give Valid weight ${weight}`
    }else{
        //results.innerHTML = (weight/((height*height)/10000)).toFixed(2)
        const bmi= (weight/((height*height)/10000)).toFixed(2)
        results.innerHTML =`<span> ${bmi} Kg/m<sup>2</sup></span>`

        if(bmi<18.6){
            size.innerHTML = `You are Underweight`
        }
        if(bmi>=18.6 && bmi<=24.9)
        {
            size.innerHTML = `You are Good in Shape`
        }
        if(bmi>24.9){
            size.innerHTML = `You are Overweight`
        }
    }
    // results.innerHTML = `${height}`
    


})
function Agecheck() {
    let data = document.getElementById('para')
    if (Age.value) {
        if (Age.value >=18) {
            data.innerHTML = 'eligible'
            data.style.color = 'green'
            
        }else if (Age.value < 18) {
            data.innerHTML ='not eligible'
            data.style.color = 'red'
            
        }else{
            data.innerHTML = 'invalid output'
            data.style.color = 'orange'
        }
        
        

        
    } else {
        data.innerHTML = 'please enter a value'
        data.style.color = "blue"
        
        
    }
    
}
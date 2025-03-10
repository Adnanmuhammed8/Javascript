// w.a.p to display the  largest among 3 given numbers 
num1=10
num2=500
num3=15

if (num1>num2 && num1>num3) {
    console.log(`${num1} is largest`);
    
    
}else if (num2>num1 && num2>num3) {
    console.log(`${num2} is greatest`);
    
    
}else if (num3>num1 && num3>num2) {
    console.log(`${num3} is greatest`);
    
    
}
 else {
    console.log('equal');
    
    
}

console.log(`---------------`);
// w.a.p to display the second largest among 3 given numbers and arrange 3 numbers in descending order
if (num1>num2 && num1>num3) {
    if (num2>num3) {
        console.log(`Second largest is ${num2}`);
        console.log(`Descending ordder ${num1}>${num2}>${num3}`);
        
        
        
    }else{
        console.log(`Second largest is ${num3}`);
        console.log(`Descending ordder ${num1}>${num3}>${num2}`);
    }
    
    
   }else if (num2>num1 && num2>num3) {
    if (num1>num3) {
        console.log(`Second largest is ${num1}`);
        console.log(`Descending ordder ${num2}>${num1}>${num3}`);
    }
        
     else{
        console.log(`Second largest is ${num3}`);
        console.log(`Descending ordder ${num2}>${num3}>${num1}`);
    }
   } 
   else if (num3>num1 && num3>num2) {
    if (num1>num2) {
        console.log(`Second largest is ${num1}`);
        console.log(`Descending ordder ${num3}>${num1}>${num2}`);
    }
        
     else{
        
        console.log(`Descending ordder ${num3}>${num2}>${num1}`);
    }
 }
 else{
    console.log('equal');
    
 }
   



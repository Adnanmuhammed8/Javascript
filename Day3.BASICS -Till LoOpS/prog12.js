/// w.a.p to display the greatest among two given numbers
//num1=100
//num2=200



num1=100
num2=200

if (num1>num2) {
    console.log(`${num1} is greatest`);
    
    
}
else if (num2>num1) {
    console.log(`${num2} is greatest`);
    
    
}else{
    console.log('both are equal');
    
}

// w.a.p to display the second largest among 3 given numbers and arrange 3 numbers in descending order

num1=10
num2=500
num3=15

if (num1>num2 && num1 >num3) {
    if (num2>num3) {
        console.log('second largest',num2);
        console.log(`descending order is ${num1}>${num2}>${num3}`);
        
    }
    else{
        console.log('second largest is',num3 );
        console.log(`descending order is ${num1}>${num3}>${num2}`);
        
        
    }
    
    
    
  }
   else if (num2 > num1 && num2 > num3) {
    if (num1>num3) {
        console.log('second largest is',num1 );
        console.log(`descending order is ${num2}>${num1}>${num3}`);
        
        
    }
    else{
        console.log('second largest is',num3 );
        console.log(`descending order is ${num2}>${num3}>${num1}`);
        
        
    }
    
   }
   else if (num2 > num1 && num2 > num3) {
    if (num1>num2) {
        console.log('second largest is',num1 );
        console.log(`descending order is ${num3}>${num1}>${num2}`);
        
        
    }
    else{
        console.log('second largest is',num3 );
        console.log(`descending order is ${num2}>${num3}>${num1}`);
        
        
    }
    
   }
   
    
  
    

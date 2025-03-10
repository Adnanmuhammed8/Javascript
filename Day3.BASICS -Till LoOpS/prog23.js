 //write a program to display hcf of a given number
 num1=12
 num2=28
 hcf =0
 for (let i = 0; i <=num1 && i<=num2 ;i++ ) {
    if (num1%i==0 && num2%i==0 ) {
        
        hcf=i;
       
        
        
        
        
    }
    
    
    
    
 }console.log(hcf);


console.log(`-------------`);
///find lcm

 num1=12
 num2=28
 lcm=num1*num2/hcf
 for (let i = 0; i <=num1 && i<=num2 ;i++ ) {
    if (num1%i==0 && num2%i==0 ) {
        
        hcf=i;
        
      
        
        
       
        
    }
    
    
 }console.log(lcm);
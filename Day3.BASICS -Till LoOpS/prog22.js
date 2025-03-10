//w.a p to check a given number is prime or not -
//prime -  prime numbers are natural numbers greater than 1 which have remainder 1 and the number itself
// num=8
// count=0
// if (num>1) {
//     for (i=2;i<num;i++) {
//         if (num%i==0) {
//             count++
//             break
            
//         }
        
//     }
//     console.log(count>0?'not prime':'prime');
    
    
// }else if (num==1) {
//     console.log(`Neither prime or composite`);
    
    
// }else{
//     console.log(`not prime `);

// }

// HW

// w.a.p to display all prime numbers between 1-50

// for (let num = 2; num <= 50; num++){
//     isPrime = true
//     for (let  i= 2; i < num; i++) {
//         if (num%i==0) {
//             isPrime = false
//             break;
            
//         }
        
//     }if (isPrime) {
//         console.log(num);
        
//     }
        
             
// }
/// OR
//  for (let num = 2; num <= 50; num++){
//     flag = 0
//     for (let  i= 2; i < num; i++) {
//         if (num%i==0) {
//             flag++
//             break;
            
//         }
        
//     }if (flag==0) {
//         console.log(num);
        
//     }
        
             
// }
/// HW - w.a.p to print all armstrong numbers between 8-500
// 

let originalNum = num;
  let sum = 0;
 
//   let numDigits = String(num).length;

  while (num > 0) {
    let digit = num % 10;
    sum = sum + digit **3;
    num = Math.floor(num / 10);
  }


  for (let i = 8; i <= 500; i++) {
    if (sum == originalNum) {
      console.log(i);
    }
  }
// }

// printArmstrongNumbers(8, 500);


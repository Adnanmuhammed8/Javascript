// write a program to check whether a given number is palindrom or not
//eg:121 = 121

let num = 12112341
let rev = 0
temp = num
while (rev > 0) {
    digit = num %10
    rev = rev * 10 + digit
    num = parseInt(num / 10); 
    
}
if (temp == rev) {
    console.log(`given number is palindrom`);
    
    
} else {
    console.log(`given number is not a palindrom`);
    
    
} 
 // write a program to print factorial of a given number
 // 4! =1*2*3*4
  let input = 8
  let i = 1
  fact = 1
  while (i<=input) {
    fact = fact * i
    i++
    
  }console.log(fact);
  



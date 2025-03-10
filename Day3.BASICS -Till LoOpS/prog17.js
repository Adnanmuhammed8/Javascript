// //  input = 2   3    4
// // output = 24  369  4936

// // patterns
//  // 2*12    //3*123 //4*1234
//  //string method
//   input = 3
//   i=1
//   str=''
//   while (i<=input) {
//     str=str+i
//     i++
//   }
//    console.log(str*input);
//    console.log(`-----------`);
//    //without string
//    input=3
//    i=1
//    num=0
//    while (i<=input) {
//     num = num*10+i
//     i++
    
//    }
//    console.log(num*input);
   
   

//  //or
//  //2+22   //3+33+333 //4+44+444+4444

//  input=3
//  i=1
//  str=''
//  sum =0
//  while (i<=input) {
//     str=str+input
//     console.log(str);
//     sum=sum + Number(str)
//     i++
    
// }
// console.log(sum);


// ///w.a.p to display the reverse of a given number
// //eg:123 output =321

console.log(`------------------`);
 num=123
 reversedNum = 0;
    while (num > 0) {
        // Extract the last digit
         digit = num % 10;
        // Append the digit to the reversed number
        reversedNum = reversedNum * 10 + digit;
        
        num = parseInt(num / 10);   ///or can use math.floor to remove decimal
    }
    console.log(`reversed number is ${reversedNum}`);





//     num1=123
//  sum = 0;
//  num2=0;
 
// while(num1>0){
//    num2=num1%10;
//    sum=sum*10;
//    sum=sum+num2;
//    num1=num1/10;
//    num1=num1-(num2/10)  
// }
// console.log(sum);



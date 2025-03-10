// write a program to display numbers whose exponential is in  the given range 8 - 36
// user can input the power to find the exponential for a particular number
// eg - input =2
//      1**2= 1,2**2=4,3**2=9,4**2=16,5**2=25 6**2=36,7**2=49 => print 3,4,5,6

// let input = 3
// let i = 1
// expo = 0
// // num1 = 8
// // num2 = 36
// while ( expo <= 36) {
//     expo = i**input
//     if (expo >=8 && expo <= 36) {
//         console.log(i);
        
    
    
//     }
//     i++
// }
 // or

 power=2

 num=1
 while (num<=36) {
    if (8<=num**power && num**power<=36) {
        console.log(num);
        
        
    }
    if (num**power>=36) {
        break // inorder to forcefully exit a loop
        
    }
    
    
    num++
    
 }
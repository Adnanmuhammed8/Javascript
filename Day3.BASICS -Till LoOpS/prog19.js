// write a program to check a given three digit number is armstrong or not
// eg : 153 = 1**3 + 5**3 + 3**3 =153 - armstrong


let num = 153
let sum = 0
digit =0
temp = num

while (num > 0) {
    digit = num % 10

    sum = sum + digit **3
    num = parseInt(num/10)
    
}
if (temp == sum) {
    console.log(`is armstrong number`);
    
    
} else {
    console.log(`not armstrong`);
    
}
    

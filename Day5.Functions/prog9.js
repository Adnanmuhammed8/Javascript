///display  reversenumber
function reverseNum(num) {
    reverse=0
    while (num!=0) {
        reverse = reverse * 10;
     reverse = reverse + num%10;
     num = Math.trunc(num/10);
    
        
    }
    
    
     return reverse;
    
    
}

console.log(reverseNum(123));
// factorial 
function factorial(n) {
    return n==0? 1: n*factorial(n-1)
}
console.log(factorial(10));

///check palindrome or not
function isPalindrome(str) {
    let rev = "";
    for (let i = str.length - 1; i >= 0; i--) {
        rev += str[i];
    }
    return rev == str? 'palindrome':'not palindrome'
}

console.log(isPalindrome(`rama`));


///

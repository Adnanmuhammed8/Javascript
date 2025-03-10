// w.a.p to check a given string is palindrome or not
// eg:malayalam

str = 'malayalam'
pal = ''
for (i=str.length-1;i>=0;i--) {
    pal+=str[i]
    
}console.log(pal==str?'palindrome':'not palindrome');

//or
pal1 = str.split('').reverse().join('')
console.log(pal==str?'palindrome':'not palindrome');
console.log(`--------------------------------------`);

start = 0
end = str. length-1
isPal=true
while(start<end){
  if(str[start] != str[end] ) {
    isPal= false
    }
    start++
    end--

}


console. log(isPal?'palindrome' : 'not palindrome' )
console. log('----------------') 






//write a javascript program to print the largest word from given string,str='my first program'

str = 'my first programme'
words = str. split(' ') // [my , frist , prog]
largest = words [0] //my
for (let w of words) { // my first // pro
if(largest. length<w. length) {//my <first
largest = w //first // prog
}
}
console. log(largest) ;
console. log('-------------')
x = str.split(' ').reduce((w1, w2)=>w1.length>w2.length?w1:w2)
console.log(x) ;






    

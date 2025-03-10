// w.a.p to display all the vowels from the given sring.
str = 'Good afternoon'

// characters = Array.from(str)
// vowels = ['a','e','i','o','u','A','E','I','O','U']
// for(let char of characters){
//     if (vowels.includes(char)) {
//         console.log(char);
        
        
//     }
// }
      // OR

characters = Array.from(str)
vowels = ['a','e','i','o','u','A','E','I','O','U']
o=[]
for(let char of characters){
    if (vowels.includes(char)) {
        
        o.push(char)
        
    }
}console.log(o);

// for(i=0;i<str.length;i++){
//     if (stri=a||e||i||o||u) {
//         console.log(i);
        
        
//     } else {
        
//     }
// }

Array.from(str).filter((item)=>vowels.includes(item)).forEach((item)=>console.log(item)
)

// write a javascript program to print the word count from given string
//text = "HAI HELLO ALL HELLO WORLD"
//output = {}


text = "HAI HELLO ALL HELLO WORLD"

obj = {}
// words = text.split(" ")
// console.log(words);



// for(let w of words){
//     if (w in obj) {
//         obj[w] +=1
        
//     } else {
//         obj[w] = 1
        
//     }
   

// }console.log(obj);


// 
// or
text. split(" "). forEach((w)=>w in obj?obj[w]+=1: obj[w]=1 )
console.log(obj);

newArray =[10,20,30,10,50,20,30,30,60]
obj1 = {}
//write a program to find the number count
newArray.forEach((x)=>x in obj1? obj1[x]+=1:obj1[x] = 1)
console.log(obj1);





pattern = 'ABCBCDA'
// write a program to find the first repeated letter 
firstrepeated ={}
l = Array.from(pattern)
for (let char of l) {
    if (char in firstrepeated) {
      console.log(char);
      break
    }
    else{
        firstrepeated[char] = 1
    }
    
  }






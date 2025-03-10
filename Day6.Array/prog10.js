/// nested array

 arr = [[1,2],[3,4],[5,6]]
 g = arr.flat()
 console.log(g);
 

 for(let a of arr ){
    // console.log(a);
    
    for(let x of a){
        console.log(x);
        
    }
 }
 




 ////find sum
//  sum =0
//  for(let a of arr ){
//     for(let x of a){
//         sum = sum+x
//     }
//  }console.log(sum);
 



//  /// find even numbers from given array
// sum=0
//  for (let a of arr){
//     for(let x of a){
//         if(x%2==0){
//             console.log(x);
            

//         }
//     }
//  }
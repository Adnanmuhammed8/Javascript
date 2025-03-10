// let array = [10, 200, 300, 200, 300, 40, 50, 10, 10];
// let duplicates = [];

// for (let i = 0; i <= array.length-1; i++) {
//   for (let j = i + 1; j <= array.length-1; j++) {
//     if (array[i] == array[j]) {
//        isDuplicate= false;
//       for (let k = 0; k <= duplicates.length-1; k++) {
//         if (duplicates[k] == array[i]) {
//           isDuplicate = true;
//           break;
//         }
//       }
//       if (!isDuplicate) {
//         duplicates.push(array[i]);
//       }
//     }
//   }
// }

// console.log("Duplicate numbers:", duplicates);
//--------------------------------------------------
//  a = [10, 200, 300, 20, 30, 40, 50, 10, 10];
//  dupli = [];
//  for(i=0;i<=a.length-1;i++){
//     for(j=0;j<=a.length-1;j++){
//         if (a[i]==a[j]) {
//             isDuplicate=false
//             for(k=0;k<=dupli.length-1;k++){
//                 if (a[i]==dupli[k]) {
//                     isDuplicate=true
                    
                    
//                 }

//             }if (!isDuplicate) {
//                 dupli.push(a[i])
                
                
//             }

            
            
            
//         }
//     }
//  }
//  console.log("Duplicate numbers:", dupli);



//-----------------------------------------------

// // find the duplicate number from a given array
a=[10,200,300,200,300,40,50,10,10]
 dupli = [];
 
for(i=0;i<=a.length-1;i++){
    for(j=i+1;j<=dupli.length-1;j++){
        if(a[i]==a[j] ){
            duplicate =false;
        for(k=0;k<a.length;k++){
            if (a[i]=dupli[k]) {
                duplicate =true;
                
                
                
                
            }
                
            }
            if (!duplicate) {
                dupli.push(a[i])
            
        }
         
        }
        }
    
    }
console.log(dupli.length==0? 'no duplication':dupli);

//OR
// let array2 = [10, 200, 300, 200, 300, 40, 50, 10, 10];
// let counts = {};
// let duplicates2 = [];

// for (let i = 0; i < array2.length; i++) {
//     let num = array2[i];
//     if (counts[num] === undefined) {
//         counts[num] = 1;
//     } else {
//         counts[num]++;
//         if(counts[num] === 2) { // Only add to duplicates once
//             duplicates2.push(num);
//         }
//     }
// }

// console.log("Duplicate numbers (alternative):", duplicates2);
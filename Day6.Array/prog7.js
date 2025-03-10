// write a javascript program to printn common numbers from the given arrays.
   p=[10,11,12,20,30]
   q=[11,20,25,30,33]

   i=0
   j=0
   flag=0
   while (i<p.length && j<q.length) {
    if (p[i]==q[j]) {
        console.log("The common number is",p[i]);
        
        i++;
        j++;
        flag=1
        
    }else if (p[i]<q[j]) {
        i++;
        
    }else{
        j++;

    }
    
   }!flag && console.log("no common numbers");
   



// isCommon=false
// for(a of p){
//     for(b of q){
//         if(a==b){
//             iscommon=true
//             console.log(a);
            
//         }
//     }
// }
// !isCommon && console.log('no common numbers');

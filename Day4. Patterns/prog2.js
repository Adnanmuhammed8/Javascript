// //1
// //12
// //123
// //1234
// for (let row=1;row<=4;row++) {
//     str =""
//     for(col=1;col<=row;col++){
//         str = str +col

//     }console.log(str);
    
    
    
// }
// console.log(`-------------`);
// // ****
// // ***
// // **
// // *
// for(row=4;row>=1;row--){
//     str =""
//     for(col=1;col<=row;col++){
//         str = str +"* "

//     }console.log(str);
    
        
// }
// /////HW 
// // *
// // **
// // ***
// // ****
// // *****
// // ****
// // ***
// // **
// // *
// console.log(`-------------`);

// for (let i = 1; i <= 5; i++) {
//     let row = '';
//     for (let j = 1; j <= i; j++) {
//        row= row + '*';
//     }
//     console.log(row);
// }

// // Lower part of the pattern (decreasing stars)
// for (let i = 4; i >= 1; i--) {
//     let row = '';
//     for (let j = 1; j <= i; j++) {
//        row= row + '*';
//     }
//     console.log(row);
// }
// //OR
// console.log(`-------------------`);

// n=5
// for(i=1;i<2*n;i++){
//     str=""
//     if (i<=n) {
//         k=i
        
//     }else{
//         k=2*n-i
//     }
//     for (let j=1;j<=k;j++) {
//         str=str+"* "
        
//     }console.log(str);
    

// }
// console.log(`--------------`);

//OR
for(row=1;row<=9;row++){
    str=""
    for(col=1; row<=5? col<=row: col<=10-row;col++){
        str+="* "

    }console.log(str);
    
}

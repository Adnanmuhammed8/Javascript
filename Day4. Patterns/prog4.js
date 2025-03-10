
//      *
//     * *
//    * * *
//   * * * *  
//  * * * * *
//   * * * *
//    * * *
//     * *
//      *





// // //HW
// //      pyramid
// for(row=1;row<=5;row++){
//     str=""
//     for(spa=5;spa>row;spa++){
//         str+=" "
//     }
//     for(col=1;  col<=row;col++){
//         str+="* "

//     }console.log(str);
    
    
    
// }for(row=4;row>=1;row--){
//     str+=""
// }


// console.log(str);
// console.log(`--------------`);


// ///        
// //      

// ///           *
// //          *    *
// //        *        *
// //       * * * * * * *
// for(row=1;row<=4;row++) {
//     str = ""
//     for(col=1;col<=7;col++){
//         if(col+row==5 || col-row==3 || row==4){
//             str=str+"* "
//         }
//         else{
//             str = str+"  "
//         }
//     }
//       console.log(str);
        

// }

///

let num = 5;
let pattern = "";    //pattern string
if (num > 1) {      //no star pattern for 0 or negative numbers.
    for (let i = 1; i <= num; i++) {    //first 'for loop' for upward pyramid
        for (let j = 1; j <= ((num) - i); j++) {    //second 'for loop' to add 'spaces' before upward pyramid
            pattern += "  ";
        }
        for (let k = 1; k <= ((2 * i) - 1); k++) {      //third 'for loop' to add * to upward pyramid
            pattern += "* ";
        }
        pattern += "\n";    //new line after row completion
    }
    for (let i = num-1; i >=1; i--) {       //fourth 'for loop' for downward pyramid
        for (let j = 1; j <= ((num) - i); j++) {    //fifth 'for loop' to add 'spaces' before downward pyramid
            pattern += "  ";
        }
        for (let k = 1; k <= ((2 * i) - 1); k++) {      //sixth 'for loop' to add * to downward pyramid
            pattern += "* ";
        }
        pattern += "\n";    //new line after row completion
    }
    console.log(pattern);   //printing star to console
}




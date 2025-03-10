///pattern printing (imp in interviews)


//# # # #
//# # # #
//# # # #
//# # # #

// for( row=1; row<=4; row++){
//     str=""
//     for(col=1; col<+4; col++){
//         str= str + "# "
//     }
//     console.log(str);
    

// }
console.log(`-----------------`);
//#
//# #
//# # #
//# # # #
for(row=1;row<=4;row++){        //1<=4//2<=4
    str = ""                    //""//""
    for( col=1;col<=row; col++){ //1<=1  //2<=1//1<=2//2<=2//3<=2
        str= str + "# "        //""+# ="#"  //"#"//"##"

    }
    console.log(str);         //"#"//"##"
    

}
console.log(`-----------------`);
//1234
//1234
//1234
//1234
for (let row=1;row<=4;row++) {
    str =""
    for(col=1;col<=4;col++){
        str = str +col

    }console.log(str);
    
    
    
}

console.log(`-----------------`);
//1111
//2222
//3333
//4444
for (let row=1;row<=4;row++) {
    str =""
    for(col=1;col<=4;col++){
        str = str +row

    }console.log(str);
    
    
    
}
console.log(`-------------`);




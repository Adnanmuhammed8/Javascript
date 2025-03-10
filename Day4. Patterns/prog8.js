//               11
//           12  13  14   
//        15 16  17  18  19
//     20 21 22  23  24  25 26
//  27 28 29 30  31  32  33 34 35
variable=11
 for(row=1;row<=5;row++){//1
    str=""//""
    for(space=1;space<=5-row;space++){//1<=5-1=4 //2<=4 //3<=4//4<=4//5<=5
        str=str+"   "//####
    }
    for(col=1;col<=2*row-1;col++){//1<=1
        str=str+variable+" "//####11
    variable++//12
       
    }
    console.log(str);//####11
   }
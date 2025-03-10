//     *
//    * *
//   * * *
//  * * * *
n=7

for (let i = 1; i <= n; i++) {
         str = "";
        for (let j=n-i; j>=1;j--) {
            str+=" "
            
        }
        for (let k = 1; k <= i; k++) {
          str =str  + "* ";
        }
        console.log(str);
    }
    console.log(`--------------`);
    
    ///OR
    for(row=1; row <= 4; row++){ //1 <= 4 //2 <= 4
      str = ""  //"" //""
       for(spa=4; spa>row; spa -- ) {//4>2//3>2//2>2
        str= str+" "//### //##

       }
      for(col=1;col <= row; col++){//1 <= 2 //2 <= 2//3 <= 2
      str = str+"* "//###* //## **
      
      }console.log(str);//###* //## **
    }
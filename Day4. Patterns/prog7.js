// * * * * *
//   *  * 
//     *
//   *  *
// * * * * *

for(row=1;row<=5;row++){
    str=""
    for(col=1;col<=5;col++){
        if (row==1 || row==5 || row+col==6 || row==col) {
            str= str+"* "
            
        } else {
            str=str+ "  "
            
        }
        
    }console.log(str);
    
        
    

}
   
    
        
        


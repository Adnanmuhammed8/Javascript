// ***
num=5
for(i=1;i<=num;i++){
    str=""
for(j=1;j<=num;j++){
    if (i==1 || i==num || j==1 || j==num) {
        str=str+"* "
        
    }else{
        str=str+"  "
    }
    
}console.log(str);
    

}



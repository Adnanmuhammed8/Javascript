// write a javascript program to find the pairsum as 6 from given array.
     a=[1,3,4,5]

     pairSum=6
     nopair=true
     for(i=0;i<a.length;i++){
        for(j=i+1;j<a.length;j++){
            if (a[i]+a[j]==pairSum) {
                
                nopair=false
                console.log(`pairsum are`,a[i],a[j]);

                
            }

        }
            
        }
        //condition && statement
        nopair && console.log('no pairs');


           ////////

        
        let i = 0;
        
        while (i < a.length) {
            let j = i + 1; // Start from the next element to avoid duplicates
            
            while (j < a.length) {
                if (a[i] + a[j] === 6) {
                    console.log("Pair found" ,a[i], "+", a[j], "=", 6);
                }
                j++;
            }
           i++ 
        }
        
        
     
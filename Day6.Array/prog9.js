//1 start
arr = [10,11,12,2,3,4]
low = 0
up  = arr.length-1
searchItem = 2
flag=false

//2) sort the given array
arr.sort((n1,n2)=>n1-n2)
//5) repeat the above step until low and up concides
while (low < up) {
     //3) find the mid of given array
//     mid=(low+up)/2
mid = Math.floor((low+up)/2)

//4) compare the mid value with the search value
     //a) mid == searchItem
     if (arr[mid] == searchItem) {
          //       -  present
          console.log(`present`);
          flag=true
          break
          
     }
     
     //b) mid < searchitem
     else if (arr[mid] < searchItem) {
           //low = mid+1
           low = mid+1
          
     }
           
     //c) mid > searchitem
     else{
          //    up = mid-1 
          up = mid-1

     }

     }!flag && console.log("not present");
//6 end





///////// some()    //

a = [1,2,3,4,5,6]
// w.a p to check whether the given array contains even numbers
even = a.some((num)=>num%2==0)
console.log(even);


/// check with 
even1 = a.filter((num)=>num%2==0)
console.log(even1);



even2 = a.find((num)=>num%2==0)
console.log(even2);

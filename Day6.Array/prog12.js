/// foreach - access each item from a given array

a = [1, 4, 2, 14, 25]
// write a program to find square of each elements in the given array
a.forEach(num => {
    console.log(num**2);
    
    
});
console.log(`---------------------`);

//map()

sq = a.map((num)=>num**2)
console.log(sq);
console.log(`---------------------`);
//find cube of given array
cube = a.map((num)=>num**3)
console.log(cube);
console.log(`------------------`);

///w.a.p to return a new array with elements with following condition
/// if the parent array contains element >= 13 decrement with 1
/// if the parent array contains element < 13 increment with 1
array = [10,11,12,13,14]
pq = array.map((n1)=>n1>=13?--n1:++n1)
   
console.log(pq);

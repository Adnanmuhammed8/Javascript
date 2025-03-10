//[id,name,price,stock]
products=[
    [1,'hide and seek',50,20],
    [2,'lays',20,80],
    [3,'oreo',40,100],
    [4,'parleG',25,10],
    [5,'tiger',20,30],
    [6,'unibic',60,0],
    [7,'good day',70,20]
]
//1. display all product name
names = products.map((x)=>x[1])
console.log(names);
console.log(`---------------------`);




//2. display product name whose price < Rs.50
names1 = products.filter((n)=>n[2]<50)
console.log(names1.map((n)=>n[1]))
console.log(`---------------------`);





//3. print price of oreo
oreo = products.find((x)=>x[1]=='oreo')
console.log(oreo[2]);
console.log(`---------------------`);



//4. print costly product name
costly = products.reduce((item1,item2)=>item1[2]>item2[2]?item1:item2)
console.log(costly[1]);
console.log(`---------------------`);



//5. display out of stock product
products.filter((product) => product[3] == 0).forEach((product) => console.log(product[1]));
console.log(`---------------------`);

//6. sort products based on stock in decsending order
sortedByStock = products.sort((a, b) => b[3] - a[3]);
 sortedByStock.forEach(product => console.log(product[1] ));
 console.log(`---------------------`);



//7. print product having maximum available stock
maxStockProduct = products.reduce((max, product) => product[3] > max[3] ? product : max, products[0]);
console.log(maxStockProduct[1]);
console.log(`---------------------`);

//8. is there any product can be purchased by Rs. 10
affordable = products.some(product => product[2] <= 10);
console.log(affordable?'yes':'no');

// if (affordable) {
//     console.log("Yes");
// } else {
//     console.log("No");
// }

console.log(`---------------------`);

//9. Is there any product in the range of Rs.10 to Rs.30
inRange = products.some(product => product[2] >= 10 && product[2] <= 30);
console.log(inRange?'yes':'no');

// if (inRange) {
//     console.log("Yes");
// } else {
//     console.log("No");
// }
console.log(`---------------------`);

//10. print all products in the range of RS.10 to Rs.30
products.filter(product => product[2] >= 10 && product[2] <= 30).forEach(product => console.log(product[1]));
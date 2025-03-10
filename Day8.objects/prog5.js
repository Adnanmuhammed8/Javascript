products=[
    {pid:100,pName:'apple',band:'5g',price:120000,display:'led'},
    {pid:101,pName:'samsaung',band:'5g',price:45000,display:'led'},
    {pid:102,pName:'blackberry',band:'4g',price:50000,display:'led'},
    {pid:103,pName:'nokia',band:'3g',price:1200,display:'lcd'},
    {pid:104,pName:'motorola',band:'4g',price:10000,display:'lcd'}
]

//1. print product name only
console.log("\n1. Product Names:");
for (let name of products) {
    console.log(name.pName);
}
console.log(`-------------------------`);

products.forEach(pro=>{console.log(pro.pName)});




//2. print all mobile details whose display is lcd
console.log("\n2. LCD Display Mobiles:");
for (let dis of products) {
    if (dis.display == 'lcd') {
        console.log(dis);
    }
}
console.log(`--------------------------`);

products.filter((pro)=>pro.display=='lcd').forEach((item)=>console.log(item)
)




//3. print 5g mobile phone name
console.log("\n3. 5G Mobile Phone Names:");
for(let net of products){
    if (net.band == '5g') {
        console.log(net.pName);
        
        
    }
}
console.log(`------------------------`);

products.filter((net)=>net.band=='5g').forEach((item)=>console.log(item.pName)
)


//4. sort mobile based on price
console.log("\n4. Sorted Mobiles by Price:");

products.sort((a,b)=>a.price-b.price).forEach( item => console.log(item.pName));

 


//5. print costly mobile
console.log("\n5. Costly Mobile:");
costlyMobile = products[0];
for (let i = 1; i < products.length; i++) {
    if (products[i].price > costlyMobile.price) {
        costlyMobile = products[i];
    }
}
console.log(costlyMobile.pName);
console.log(`----------------------`);

costlyMobile = products.reduce((max, product) => (product.price > max.price ? product : max));
console.log("\nCostly Mobile:");
console.log(costlyMobile.pName);




//6. print low cost mobile
console.log("\n6. Low Cost Mobile:");
 lowCostMobile = products[0];
for (let i = 1; i < products.length; i++) {
    if (products[i].price < lowCostMobile.price) {
        lowCostMobile = products[i];
    }
}
console.log(lowCostMobile.pName);
console.log(`--------------------------`);


lowCostMobile = products.reduce((min, product) => (product.price < min.price ? product : min));
console.log("\nLow Cost Mobile:");
console.log(lowCostMobile.pName);


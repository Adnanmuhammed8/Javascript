fruits = ['Apple','Orange','Kiwi','Pineapple']
for(i=0;i<=fruits.length-1;i++){
    console.log(fruits[i]);
    
}
console.log(`-----------`);


for(let x in fruits){
    console.log(fruits[x]);
    
}
console.log(`-----------`);


for(let x of fruits){
    console.log(x);
    
}

expense = [12000 ,5000 ,60000 ,1200,50]
//w.a.p to find highest expense
highest=expense[0]
for(let num of expense){
    if(highest<num){
        highest=num
    }


}
console.log(highest);

/// find lowest expense
lowest=expense[0]
for( let num of expense){
    if(lowest>num){
        lowest=num
    }
}
console.log(lowest);

// find total expense
sum=0
for( let num of expense){
    sum= sum+num
}
console.log(sum);





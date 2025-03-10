/// reduce()

expense = [12000 ,5000 ,60000 ,1200,50]
//w.a.p to find lowestt expense
lowest = expense.reduce((n1,n2)=>n1<n2?n1:n2)
console.log(lowest);
console.log(`--------------`);

// find highest
highest = expense.reduce((n1,n2)=>n1>n2?n1:n2)
console.log(highest);
console.log(`--------------`);
// find sum
sum = expense.reduce((n1,n2)=>n1+n2)
console.log(sum);


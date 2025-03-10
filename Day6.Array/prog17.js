/// splice    ///
colours  = ['red','blue','green','yellow','white']
console.log(colours);

// colours.splice(3,1)
// console.log(colours);


/// delete blue and add purple in array
// colours.splice(1,1,'purple')
// console.log(colours);
// add purple after blue
colours.splice(2,0,'purple')
console.log(colours);

/// includes()  //
console.log(colours.includes('green'));


//// indexOf()  //
console.log(colours.indexOf('green'));

// slice()   ///
x = colours.slice(0,4)
console.log(x);

y = colours.slice(-3)
console.log(y);








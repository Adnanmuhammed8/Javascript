var car= {
    name: "Baleno",
    model:"hatch back",
    manufacturer:"maruti",
    price:"10lakh"
}
/// display the car name and manufacturer name
console.log(car.name);
console.log(car.manufacturer);

// check "model" key is present in the object if present print the value
if ( "model" in car) {
    console.log(car.model);
    


    
} else {
    console.log("key not found");

    
}

//or
'model' in car && console.log(car.model);
console.log(`---------------------`);


// add "variant" key to the car object with value as "Manuel"
car["variant"] = ["Manuel"]
console.log(car);





// insert another value to "automatic" to varient key
car.variant.push("automatic")
console.log(car);


// add 'color' key to the object with value as "red","yellow","white"
car["color"] =["red","yellow","white"]
console.log(car);




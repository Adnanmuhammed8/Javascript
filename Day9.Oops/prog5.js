baleno = {
    model:"Hatch Back",
    varient:["automatic","manuel"],
    manufacturer:"maruti"
}

glanza ={
    manufacturer:"toyota"
}

glanza.__proto__ = baleno


console.log(glanza.manufacturer);
console.log(glanza.model);

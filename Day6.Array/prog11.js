//[id, name, designation, location, salary, experience]

employee =[ 
    [1000,'Neel','developer','kochi',25000,3],
    [1001,'Max','tester','TVM',20000,2],
    [1002,'MAxwell','QA','kochi',35000,4],
    [1003,'Vyom','QA','kochi',45000,5],
    [1004,'Laisha','tester','TVM',55000,7],
    [1005,'Aahan','developer','TVM',15000,1],
    [1006,'Aahil','QA','kochi',20000,2],
    [1007,'Shayan','developer','kochi',30000,3],
    [1008,'Nihaan','developer','TVM',25000,3]
]

//print all employee name 
for (let a of employee) {
    console.log(a[1]);
    
    
}
console.log(`------------------------`);

//print total numbers of employee
console.log('Total number of employees');

console.log(employee.length);


console.log(`------------------------`);

//print developer employee details


for(let a of employee){
    // employee=employee[i]
    
    if(a[2]=='developer'){
        
        
        
        console.log(a);
        
    }
}
console.log(`----------------`);


//print employee whose salary > 30000

for (let a of employee) {
    
    
    if (a[4] > 30000) {
        
        // console.log("Employee ID: " + a[0]);
        // console.log("Name: " +a[1]);
        // console.log("Designation: " + a[2]);
        // console.log("Location: " + a[3]);
        // console.log("Salary: " + a[4]);
        // console.log("Experience: " + a[5]);
        // console.log("--------------------");
        console.log(a[1]);
        
    }
}


console.log(`-------------------`);

// print details of employee Laisha
for (let a of employee) {
    
    if (a[1] === 'Laisha') {
        // console.log("Employee ID:", a[0]);
        // console.log("Name:", a[1]);
        // console.log("Designation:", a[2]);
        // console.log("Location:", a[3]);
        // console.log("Salary:", a[4]);
        // console.log("Experience: "+a[5]);
        console.log(a);
        
        break; 
    }
}
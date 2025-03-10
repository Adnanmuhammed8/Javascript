a = [1000,'Neel','developer','kochi',25000,3]
//key:value
employee ={
    empId:1000,
    empName:'Neel',
    empDesg:'developer',
    empLoc:'kochi',
    empSal:25000,
    empExp:3
}
console.log(a);
//display an object
console.log(employee);
console.log(`----------------------`);
 console.log(a[2]);
 console.log(employee['empDesg']);
 console.log(employee.empDesg);
 console.log(`------------------------`);
 console.log(`------------------------`);
 
 

 // display all keys in an given object
 for(let key in employee){
    console.log(key);
    
    
    console.log(employee[key]);
    
    
 }
 console.log(`--------------------------------`);
 // adding
 employee['empAttndnce'] = '90%'
 console.log(employee);
 


 Object.assign(employee,{'status':true})
 console.log(employee);
 

 
 employee['empExp'] += 5
 console.log(employee);


 delete employee.status
 console.log(employee);
 
 

 
 
 



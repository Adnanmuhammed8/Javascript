//[1000,'Neel','developer','kochi',25000,3]

class Employee {
    //properties
    empid
    empName
    empDesg
    //constructors
    constructor(id, name , desig) {
        
        this.empid = id
        this.empName = name
        this.empDesg = desig
        
    }

    //metods
    display(){
        console.log(`employee name is ${this.empName}`);
        
    }
}

 const emp1 = new Employee('1','Max','hr');
 emp1.display()


 const emp2 = new Employee('2','Maxwell','developer');
 emp2.display()
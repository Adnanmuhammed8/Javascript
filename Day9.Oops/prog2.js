class student {
    
    studName
    studId
    studCourse
    
    constructor(name, id , course) {
        
        this. studName = name
        this.studId = id
        this.studCourse = course
        this.display()
        
    }

    
    display(){
        console.log(`student course is ${this.studCourse}`);
        
    }
}
const stud1 = new student('rahul',1,'mearn')
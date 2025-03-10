/// inheritance

class A {
    
    methoda() {
        console.log('inside method a');
        
        
    }
}
class B extends A{
   
    methodb() {
        console.log('inside method b');
        
        
    }
   
}
const obj = new B()

obj.methodb()
obj.methoda()
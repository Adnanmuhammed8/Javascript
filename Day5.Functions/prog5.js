/// Nested Functions

function A() {
    parentvariable = 'parent'
    console.log('Inside function A');
    console.log(parentvariable);
    
    function B() {
        console.log(parentvariable);
        childvariable = 'child'
        console.log('inside function B');
        console.log(childvariable);
        

        
        
    }
    B()
    
    
}
A()
///callback functions


function greet(name, callback) {
    console.log(`HAI ${name}`);
    callback()
    console.log(`exe`);
    
    
    
}
function A() {
    console.log(`iam a callback function`);
    
    
}

greet(`peter`,A)
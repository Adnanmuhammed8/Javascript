class A{
    methoda(){

    }
    methoda(num){
        console.log('inside second method-',num);
        
    }
}

const obj = new A()
obj.methoda()


///nb : method overloading doesnt support by js directly
///      it does the same concept by using rest operator(...)
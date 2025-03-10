class Landing{
    //properties
    database ={
        "milan":{username:"milan",password:"milan123"},
        "manu":{username:"manu",password:"manu123"},
        "maneesh":{username:"maneesh",password:"maneesh123"},
        "mikki":{username:"mikki",password:"mikki123"},
        "mini":{username:"mini",password:"mini123"}
       

    }
    ///methods
    saveData(){
        if (this.database) {
            localStorage.setItem("database",JSON.stringify(this.database))
            
        }
    }

    // to retrieve data
    getData(){
        this.database = JSON.parse(localStorage.getItem("database"))
        console.log(this.database);
        
    }

    register(){
        this.getData()
        console.log(user.value);
        console.log(pswd.value);
        if (user.value=="" || pswd.value=="") {
            alert('Please fill the form')
            
        }else{
            if (user.value in this.database) {
                alert('user already exist')
                
            }else{
                this.database[user.value] = {username:user.value,password:pswd.value}
                console.log( this.database);
                this.saveData()
                alert('Registration successful')

                //js navigate
                window.location="login.html"
                
            }
        }
        
        

    }

    login(){
        this.getData()
        // console.log(loguser.value);
        // console.log(logpswd.value);
        if (loguser.value=="" || logpswd.value=="") {
            alert('Please fill the form')

            
        } else {
            if (loguser.value in this.database) {
                if (this.database[loguser.value].password == logpswd.value)
                     {
                    localStorage.setItem("user",loguser.value)
                    alert('login successfully')
                    window.location= "home.html"
                    
                }else{
                    alert('invalid password or username')
                }

                
            } else {
                alert('user doesnot exist')
                
            }
            
        }
        

    }

}

const obj = new Landing()


obj.getData()
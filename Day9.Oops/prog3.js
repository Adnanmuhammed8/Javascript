class Bank {
    // property
    accountDetails = {
        1000 :{acno:1000, username:"userone",password:"uservone",balance:5000},
        1001 :{acno:1001, username:"usertwo",password:"uservtwo",balance:10000},
        1002 :{acno:1002, username:"userthree",password:"uservthree",balance:1000},
        1003 :{acno:1003, username:"userfour",password:"uservfour",balance:2000}
    }
    /// w.a.p to validate a given account number
    validate(acno){
    return  acno in this.accountDetails?true:false 
            
        };
        
    

    /// w.a.p to authenticate a given account
    authenticate(acno,pswd){
        if (this.validate(acno)) {
            if (this.accountDetails[acno].password == pswd) {
                console.log('Valid Account Details');
                
                
            }else{
                console.log('Invalid Account or Password');
                
            }
            
        } else {
            
            console.log('Invalid Account or Password');
            
        }
    }

    /// w.a.p to check the balance of a given account number
    balanceCheck(acno,pswd){
        if (this.validate(acno)){
            if (this.accountDetails[acno].password == pswd) {
                console.log(`current balance of ${acno} is`);
                console.log(this.accountDetails[acno].balance);
                
                
                
            }else{
                console.log('Invalid Account or Password');
                
            }

        }else {
            
            console.log('Invalid Account or Password');
            
        }

    }

    /// w.a.p to transfer money between two accounts
    transferMoney(fromAcno,frompswd,toAcno,amount){
        if (this.validate(toAcno) && this.validate(fromAcno)) {
            if (this.accountDetails[fromAcno].password==frompswd) {
                if (this.accountDetails[fromAcno].balance>=amount) {
                    console.log(`current balance of ${fromAcno} is ${this.accountDetails[fromAcno].balance} and ${toAcno} is ${this.accountDetails[toAcno].balance}`);

                    this.accountDetails[fromAcno].balance-=amount
                    this.accountDetails[toAcno].balance+=amount

                    console.log(` balance of ${fromAcno} is ${this.accountDetails[fromAcno].balance} and ${toAcno} is ${this.accountDetails[toAcno].balance} after money transfer`);

                    
                    
                } else {
                    console.log('Insufficient balance');
                    
                    
                }

                
            } else {
                console.log('invalid password');
                
                
            }
            
        }else{
            console.log('invalid account number');
            
        }

    }


}
 const obj = new Bank();
 console.log(obj.validate(100)?'Account exist':'NO Such Account');
 
console.log(`---------------------`);


 obj.authenticate(1000,'uservone');
 console.log(`-------------------------`);
 obj.balanceCheck(1001,'uservtwo')
 console.log(`----------------------------`);
 obj.transferMoney(1000,'uservone',1001,1000)
 
 
 
 
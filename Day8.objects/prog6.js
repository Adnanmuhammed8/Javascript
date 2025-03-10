accounts=[
    {
        acno:1000,ac_type:'savings',balance:45000,transaction:[
            {
                to:1001,amount:5000,msg:'ebill',mode:'gpay'
            },
            {
                to:1002,amount:2000,msg:'emi',mode:'neft'
            },
            {
                to:1003,amount:1000,msg:'recharge',mode:'phonePay'
            },
        ]
    },
    {
        acno:1001,ac_type:'current',balance:30000,transaction:[
            {
                to:1000,amount:1000,msg:'grossary',mode:'gpay'
            },
            {
                to:1002,amount:7000,msg:'gift',mode:'phonePay'
            },
            {
                to:1003,amount:10000,msg:'emi',mode:'neft'
            },
        ]
    },
    {
        acno:1002,ac_type:'fixed',balance:100000,transaction:[
            {
                to:1000,amount:5000,msg:'ebill',mode:'gpay'
            },
            {
                to:1001,amount:2000,msg:'emi',mode:'neft'
            },
            {
                to:1003,amount:1000,msg:'recharge',mode:'phonePay'
            },
        ]
    },
    {
        acno:1003,ac_type:'savings',balance:30000,transaction:[
            {
                to:1001,amount:5000,msg:'ebill',mode:'gpay'
            },
            {
                to:1002,amount:2000,msg:'emi',mode:'neft'
            },
            {
                to:1000,amount:1000,msg:'recharge',mode:'phonePay'
            },
        ]
    }
]

//1. total number of accounts
console.log("Total Accounts:", accounts.length);

console.log(`---------------------------`);

//2. print account number whose ac_type is savings
console.log("\n2. Savings Accounts:");
 accounts.filter((data)=>data.ac_type =='savings').forEach(item => {console.log(item.acno);
 
    
 });    



//3.print the balance of accnount number 1000
console.log("\n3. balance of account number 1000");


console.log(accounts.find(account => account.acno == 1000).balance
);


//4. print all gpay transactions
console.log("\n4. all gpay transactions");
accounts.map((data)=>data.transaction).flat().filter((item)=>item.mode=='gpay').forEach((item)=>console.log(item)
);


//5. print all transaction whose amount > 5000
console.log("\n5. transactions whose amount > 5000");
accounts.map((data)=>data.transaction).flat().filter((item)=>item.amount > 5000).forEach((item)=>console.log(item)
);


//6. print credit transaction of account 1002
console.log("\n 6. Credit Transactions of Account 1002: ");
credit =accounts.map((data)=>data.transaction).flat().filter((item)=>item.to == 1002)
console.log(credit)


// 7. print debit transaction of account 1002
console.log("\n7. debit transactions of account 1002:");
debit = accounts.find((data)=>data.acno == 1002).transaction
console.log(debit);




//8. print transaction history of 1002
console.log("\n8. transaction history of 1002");
history = {
    credit:credit,
    debit:debit
}


console.log(history);



//print history as an array
//spread - to join two array
          ////- represented by (...)
 transHis = [...credit,...debit]
 console.log(transHis);
 

//9. print highest balance account details
highbal = accounts.reduce((item1,item2) => 
 item1.balance > item2.balance ? item1 : item2
);
console.log(highbal);

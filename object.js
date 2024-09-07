const bankAccount = {
    accountHolder:"Isma",
    accountBalance:0,
    deposite: function (amount){
        if (amount > 0) (
            this.accountBalance += amount
        )
        else{
            console.log ("invalide amount");
        }
    },
    checkBalance : function(){
        console.log(`Your account Balance is ${this.accountBalance}`);
    },
    withdraw: function(cash){
        if(cash > this.accountBalance)
        {console.log("My nigga you broke as fuck");
        }
        else{
            this.accountBalance -= cash;
            console.log(`your remaining balance is ${this.accountBalance}`);
        }
       
    }
}

console.log (bankAccount.accountHolder);

bankAccount.deposite (6000);
bankAccount.checkBalance();
bankAccount.withdraw(500);
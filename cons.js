class bankAccount{
constructor(accountHoler, accountBalance= 0){
    this.accountHoler = accountHoler;
    this.accountBalance = accountBalance;
}
deposite(amount){
    if (amount > 0) (
        this.accountBalance += amount
    )
    else{
        console.log ("invalide amount");
    }
}
withdraw(cash){
    if(cash > this.accountBalance)
        {console.log("My nigga you broke as fuck");
        }
        else{
            this.accountBalance -= cash;
            console.log(`your remaining balance is ${this.accountBalance}`);
        }
       
    }
    checkBalance(){
        console.log(`Your account Balance is ${this.accountBalance}`);
    }
}

const patelAccount = new bankAccount ('patel')
const idrisAccount = new bankAccount ('Idris')

const lenyAccount = new bankAccount ('leny')
const AnnaAccount = new bankAccount ('Anna')

patelAccount.deposite (5000)
idrisAccount.deposite (200000)
AnnaAccount.deposite (10000000)
console.log(patelAccount.accountHoler)
console.log(AnnaAccount.accountHoler)
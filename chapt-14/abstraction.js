class ATM{
    withdraw(amount)
    {
        this.checkBalance(amount)
        console.log("withdraw is successfull ")
    }
    checkBalance(amount)
    {
        console.log("checking balance is :",amount);
    }
}

const atm=new ATM();
atm.withdraw(500);
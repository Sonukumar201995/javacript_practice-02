class Bank{
    balance=1000;

    diposite(amount)
    {
        this.balance+=amount;
    }
    withdraw(amount)
    {
        if(amount<=this.balance)
        {
            this.balance-=amount;
        }else{
            console.log("insufficient balance")
        }
    }
    getBalance()
    {
        return this.balance;
    }
}

const account=new Bank();
account.diposite(500);
account.withdraw(200);

console.log(account.getBalance());
class bankaccount
{

#balance
accountholder
constructor(currentbalance,accountholder)
{
this.#balance=currentbalance;
this.accountholder=accountholder;
}
showbalance()
{

    console.log(this.#balance);
}

deposit(depoamount)
{ if(depoamount>0)
{
  this.#balance+=depoamount;

}
else
{
    console.log("invalid deposit amount");
}


}
 withdrow(withamount)
 { if(withamount<this.#balance)
   this.#balance-=withamount;
   else
    console.log("insufficient balance");

 }



}
const obj1= new bankaccount(2000,"navya");
obj1.showbalance();
obj1.deposit(5000);
obj1.showbalance();
obj1.withdrow(4000);
obj1.showbalance();
obj1.accountholder="sreya";
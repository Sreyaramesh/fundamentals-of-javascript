export class bus
{
    constructor(price,model)
    {
        this.price=price
        this.model=model
    }
    busdetails()
    {
       console.log("the bus model is "+ this.model) 
        console.log("the bus price is "+ this.price)
    }
}
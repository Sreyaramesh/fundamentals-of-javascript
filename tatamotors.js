import { bus } from "./bus.js";
 class tatamotors extends bus
{
constructor(color,model,price)
{
super(price,model)
this.color=color
}
tatamotorsdetails()
{
console.log("model : "+this.model+" color: "+this.color+" price: "+this.price)

}
}
const obj=new tatamotors("white","tatamotors",300000)
obj.tatamotorsdetails()
obj.busdetails()
const busobj=new bus(5000000,"ABC")
busobj.busdetails()
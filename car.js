class car
{
//let brand="maruthi"
detailsDisplay()
{
 console.log("car method")   
 console.log("car brand is "+ this.brand) 
 console.log("car price is "+ this.price) 
}
constructor(brand,price)
{
    console.log("constructor invoked")
    this.brand=brand
    this.price=price
}
}
const carobj=new car("ignis",80000);
carobj.detailsDisplay()
const carobj2=new car("honda",5600000)
carobj2.detailsDisplay();
//constructor- to initialize value

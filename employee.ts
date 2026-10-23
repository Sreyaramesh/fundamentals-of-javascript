class Employee
{ name:string
    id:number
constructor(name:string,id:number)

{
    this.name=name;
    this.id=id;
}

displayemployee()
{
console.log(this.name+", "+this.id)

}


}
const emp=new Employee("navya",30);
emp.displayemployee();

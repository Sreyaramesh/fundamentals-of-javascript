class student
{

detailsDisplay()
{
  
 console.log("Student name is "+ this.name) 

}
constructor(name,sub1,sub2, sub3)
{
    console.log("constructor invoked")
    this.sub1=sub1
    this.sub2=sub2
    this.sub3=sub3
    this.name=name
}
avaragemark()
{
const avg=((this.sub1+this.sub2+this.sub3)/3)
console.log("average mark = "+avg)
}
}
const student1=new student("Sreya",75,20,30);
student1.detailsDisplay()
student1.avaragemark()
const student2=new student("Navya",50,30,56)
student2.detailsDisplay();
student2.avaragemark()

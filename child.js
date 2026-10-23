import { person } from "./person.js";

class trainer extends person
{
getroles()
{
console.log("iam a trainer");

}
introduce()
{
    console.log("My name is sreya and iam a software trainer");
}

}
 
const trainer1=new trainer();
trainer1.introduce();
trainer1.getroles();
const person1=new person();
person1.introduce();
// paraent payment class...then child classes under it..gpay select akiya athinte function ..
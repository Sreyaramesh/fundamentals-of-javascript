let mark:number=25;
let subject:string="Typescript";
let is_passed:boolean=true;

let age:number=29;
//age="twenty";
function getmark(mark:number):void
{
console.log(mark);
}

function gettotalmark(a:number,b:number):number
{
    return a+b;
}
getmark(67);
console.log(gettotalmark(5,5));
function print()
{
    console.log("Hello world");
}
print();
let numberss:number[]=[10,20,30,40,50]
let fruits:string[]=["apple","orange","mango"]
let person:{name:string,age:number,city:string}={
    name:"sreya", age:29, city:"kannur"
}
console.log(numberss);
console.log(fruits);
console.log(person);


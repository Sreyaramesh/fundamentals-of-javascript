function display()
{
console.log("good morning")

}
display()
//function with parameter
function add(a,b)
{
//let a=10
//let b=20
let c=a+b
console.log(c)

}
add(23,2)
add("2",3)
//function with return type and para
function sub(p,q)
{
let r=p-q
return r
}
console.log(sub(10,2))
const l=sub(9,2)
console.log(l)
//anonymous function
const mul=function(s,j)
{
return s*j

}
console.log(mul(4,5))

//arrow function ()=>{}
const square=(x)=>{return x*x}
console.log(square(25))
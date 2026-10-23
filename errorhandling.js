try {let a=5;
let b=2;
if(b==0)
{
    throw new Error("cannot be divided by 0");
}
let result=a/b;
console.log(result);}
catch(error)
{
console.log(error.message)
}
finally

{
    console.log("excecution stopped");
}
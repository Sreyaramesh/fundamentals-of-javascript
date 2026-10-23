function displayresult(result)
{

    console.log(result);
}
function sum(a,b,callback)
{
let c=a+b;
callback(c);

}
function sub(x,y,callback)
{
let z=x-y;
callback(z);

}
sum(2,3,displayresult);
sub(10,2,displayresult);
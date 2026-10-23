/*function displayresult(a,cb)
{

console.log("display invoked");
cb(a);
}
function callback1(cb2)
{
console.log("callback1 invoked");
cb2();
}
function end()
{
console.log("end invoked");

}
displayresult("hello",(result)=>{
    console.log(result);
    callback1(()=>{end()})}
)*/
//promise -javascript object (pending , fullfill, reject)
const displayresult=()=>{
    return new Promise((resolve,reject)=>
   {
console.log("display function excecuted");
    })
}
const callback1 = () => {
    return new Promise((resolve, reject) => {
        console.log("callback1 invoked");
        resolve()
    })
}
const end = () => {
    return new Promise((resolve, reject) => {
        console.log("end invoked");
        resolve()
    })
}
displayresult().then(()=>{callback1().then(()=>{console.log("excecution completed")

})})
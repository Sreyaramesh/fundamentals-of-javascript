function displayresult(result)
{
    console.log(result);
}
 async function add(a,b)
 {
    let c=a+b;
    await displayresult(c);
    console.log("excecution stopped");
 }

 add(3,4);
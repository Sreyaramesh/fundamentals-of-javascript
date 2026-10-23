/*let fruits=["mango","apple", "orange","pineapple"]
console.log(fruits)
console.log(fruits.length) /// string length
console.log(fruits[2])
fruits.push("banana", "guava") //insert elements at end
console.log(fruits)
fruits.pop()
console.log(fruits) // remove one element from the end 
fruits.unshift("kiwi", "jackfruit") // add elements at front
console.log(fruits)
fruits.shift() //remove one element from front
console.log(fruits)
//creating sub array from array--slice
let slicearray=fruits.slice(1,5) // ending index +1 vach  ezhuthuka
console.log(slicearray)
fruits.splice(2,0,"grape") // between element delete and update
console.log(fruits)
fruits.splice(3,2,"lichi")
console.log(fruits)
console.log(fruits.length)
for(let i=0; i<fruits.length;i++)
{
    console.log(fruits[i])
} 
//number array
//for of loop
let numbers = [2, 4, 6, 8, 10];

console.log(numbers);

numbers.pop(); // removing one value from end
console.log(numbers);

numbers.unshift(2, 4); // adding values to beginning
console.log(numbers);

numbers.shift(); // removing the element from beginning
console.log(numbers);

let sliceNumbers = numbers.slice(1, 4); // creating subarray
console.log(sliceNumbers);
// for of loop
for (let num of numbers) {
    console.log(num);
}
console.log("Reduce using for of loop")

let sum = 0

for (let num of spliceNumbers) {
    sum = sum + num
    // console.log(num)
}

console.log(sum) */
// filter method
let numbers = [2, 4, 6, 8, 10,11,12,13,15,17];
let i=0;
const evenArray=numbers.filter((i)=>i%2==0)
console.log(evenArray)
//map method
const doubleArray=numbers.map((i)=>i*2)
console.log(doubleArray)
//task use 3 functions---filter, map, reduce

const newArray=numbers.filter((i)=>i%2!=0).map((i)=>i*2).
console.log(newArray)
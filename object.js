import testdata from "./jsonobj.json" with{"type":"json"}
const testobj=JSON.stringify(testdata)
const obj=JSON.parse(testobj)
console.log(obj.id)

const person={

    FirstName:"Sreya",
    LastName:"Ramesh C",
    Age:29,
    is_employed:true

}
//console.log(person)
//console.log(person.FirstName)// dotnotation
//console.log(person["FirstName"])//bracket notation
person.city="kochi" //adding one property in object
console.log(person)
//updating value
person.LastName="Prajeesh"
console.log(person)
// for in loop to print 
for(const key in person)
{

    console.log(key)
}
for(const key in person)
{

    console.log(person[key])
}
for(const key in person)
{

    console.log(key+": "+person[key])
}

const student={

    tName:"Sreya",
    age:29,
    student_ID:23,
    mark:50,
 subject:["playwright","javascript", "AI"],
 getdetails:function()
 {
    return `${this.tName} is ${this.age} years old`
}
}

for(const i in student)
    {

       if(typeof student[i]=="function") 
       {
        console.log(student[i]())

       }
       else
       {

    console.log(i+": "+student[i])
       }

}
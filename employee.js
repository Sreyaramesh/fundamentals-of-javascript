"use strict";
class Employee {
    name;
    id;
    constructor(name, id) {
        this.name = name;
        this.id = id;
    }
    displayemployee() {
        console.log(this.name + ", " + this.id);
    }
}
const emp = new Employee("navya", 30);
emp.displayemployee();

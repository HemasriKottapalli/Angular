import {Login, User} from "./Interfaces";

interface Address{
    street:number;
    city:string;
    state:string;
    country:string;
}

class Employee implements Login{
    #id:number=100; //private variable
    name!:string;

    age!:number;

    address!:Address;

    constructor(name:string, age:number, address:Address){
        this.age = age;
        this.name = name;
        this.address = address;
    }

    getNameWithAge():string {
        return `Name: ${this.name} and age: ${this.age}`;
    }

    //getter setters
    get getId():number{
        return this.#id;
    }

    set setId(id:number){
        this.#id = id;
    }

    //static methods
    static getSomething():number{
        return 100;
    }

    Login(): User{
        return {name:"hema", age:20};
    }
}

let empobj = new Employee("Hema", 20, {street: 19, city:"Hyderabad", state:"Telangana", country:"India"});

console.log(empobj);
console.log(empobj.getNameWithAge());
console.log(Employee.getSomething()); //accessing static methods

class Manager extends Employee{
    constructor(name:string, age:number, address:Address){
        super(name,age,address);
    }
    getNameWithAge(): string {
        return `This is a Manager and name: ${this.name} and age: ${this.age}`;
    }
}

let emp2 = new Manager("Shrithi",67,{street: 16, city:"Hyderabad", state:"Telangana", country:"India"});
console.log(emp2);
console.log(emp2.getNameWithAge());


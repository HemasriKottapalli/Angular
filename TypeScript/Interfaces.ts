export interface User {
    name: string;
    age: number;
}

interface Tester extends User {
    salary: number;
}

let user1: User = { name: "hema", age: 20 };

let user2: Tester = { name: "Shrithi", age: 30, salary: 12200 };

export interface Login {
    Login(): User; //method defnition that returns a User type data
} //need to export to use outside

console.log("hi");


//Object Destructuring:


let { name: Username }: User = { name: "sanjana", age: 12 };

//Array destructuring

// let [u1, u2] : User[] = [
//     { name: "sanjana", age: 12 },
//     { name: "sarima", age: 14 },
//     { name: "saritha", age: 13 },
//     { name: "sandhya", age: 12 }
// ];

// console.log(u1);
// console.log(u2);

let [u1, u2, ...restusers] : User[] = [
    { name: "sanjana", age: 12 },
    { name: "sarima", age: 14 },
    { name: "saritha", age: 13 },
    { name: "sandhya", age: 12 }
];

console.log(u1);
console.log(u2);
console.log(restusers);



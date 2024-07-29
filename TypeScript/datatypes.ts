let lname = 'john';
let newname = lname.toLowerCase();
console.log(newname);

let age: number;
age = 10;
console.log(age);

let isTrue : boolean = false;
console.log(isTrue);

let empList : string[];

let numList : Array<number>;

numList = [1,2,34,5,6];

let result = numList.filter((num) => num>2);

console.log(result);

let num = numList.find((num) => num===2);

console.log(num);

let sum = numList.reduce((acc,num)=> acc+num);

console.log(sum);

//enum
const enum Color{
    Red,
    Green,
    Blue
}

let c: Color = Color.Green;

//tuples
let swapNums : [number1:number,number2:number];

function swapNumbers (num1:number, num2:number):[number,number]{
    return [num2,num1];
}

swapNums = swapNumbers(10,20);

console.log(swapNums[0]);

let variable:any;
variable = 9;
variable = 'hey';

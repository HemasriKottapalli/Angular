//Different ways to write functions
function add(a:number, b:number) :number{
    return a+b;
}

console.log(add(9,8));

const sub = (a:number, b:number):number => a-b;

console.log(sub(3,2));

const multi = function(a:number, b:number):number{
    return a*b;
}


//optional parametrs, required parameters and rest parameters
function add3(a:number, b:number, c?:number) :number{
    return c?a+b+c : a+b;
}

console.log(add3(1,2,3));
console.log(add3(1,2));


function sub3(a:number, b:number, c=10) :number{
    return c?a-b-c : a-b;
}

console.log(add3(1,2,3));
console.log(add3(1,2));

//rest param: ...
function addmany(a:number, b:number, ...c:number[]) :number{
    return a+b+ c.reduce((x,y)=>x+y,0);
}

let numbers = [1,2,3,4];
console.log(addmany(1,2,...numbers));

//Generic Functions
function getItems<Type>(items:Type[]):Type[]{
    return new Array<Type>().concat(items);
}

console.log(getItems(['a','b','c']));
// Array 

// Array is a collection of data,which can hold multiple items of different data type in it.
// It can hold a string,numbers,boolean,object at a time.

// ["sriram gokul",22,true,{name:"SRIRAM GOKUL",age:"30"}]

// **** Array Destructuring

const [physics,chemistry,Maths] = [70,53,92];

console.log("physics",physics);
console.log("Chemitry",chemistry);
console.log("Maths",Maths);


// **** Handling Undefined Elements

const [apple,banana,mango]= [56,83];
console.log(apple,banana,mango);

// **** Skipping Elements

const [abc, ,ghi] = [74,52,99];
console.log(abc,ghi);


// **** Discarding Extra elements

const [read,write] = [77,53,66];
console.log(read,write);

// **** Default Values

const [name = "AKON",age=30] = ["SRIRAM"];
console.log(name,age);

// **** Rest Syntax

const [one,two,three,...remainingNumbers] = [1,2,3,4,5,6,7,8,9];

console.log(one,two,three,remainingNumbers);

// **** Swapping Variables

let a = 20;
let b = 40;

 [a, b] = [b ,a];
 console.log(a,b);


 // **** Nested Array Destructuring

 const [ant,cat,deer,[pogo],jetix,CN,Disney]=[11,22,33,[88,66,77],43,51,67]
 console.log(ant,cat,deer,pogo,jetix,CN,Disney)

 // ** Array Destructuring in functions

 function getFullname(){
    return ["SRIRAM GOKUL","JAYAPRAKASH"]
 };
 const [full,Name] = getFullname();
 console.log(full,Name);
 



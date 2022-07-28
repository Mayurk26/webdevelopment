console.log("My name is Mayur");

let name="Mayur";
let name1="Rahul";
let name2="abhi";
let name3="sanku";
let age=20;  //global value
//function
//function good(name,age=45)   //we can also give the values in parameter itself
//but value which is assigned globally will only be printed
//while calling function if we use only : good(name)  then it will take by default the age value specify in paramter
function good(name,age)
{
    console.log(name +" is a good boy");
    console.log(name + " age is " + age);
}


good(name,age);
good(name1,age);
good(name2,age);
good(name3,age);

function sum(a,b,c)
{
    let d=a+b+c;
    return d;  //if we not  written then it will give output as undefined
}
let returnval=sum(1,3,2);
console.log(returnval);







// console.log(name + "is a good boy");
// console.log(name1 + "is a good boy");
// console.log(name2 + "is a good boy");
// console.log(name3 + "is a good boy");
console.log("This is the module");

function average(arr)
{
    let sum=0;
    arr.forEach(element => {
        sum +=element;
    });
    return sum/arr.length;
}

//exporting the module
// module.exports= average;

//exporting multiple ->create object
module.exports={
    avg: average,
    name:"mayur",
    repo:"Github",
}

//can export individually
//module.exports.name="mayur";
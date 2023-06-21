//Return values in funcions
function greeting4({name, age}: {name: string, age: number}): number{
    console.log(`Hello ${name}, u are ${age} years old`);
    return age
}
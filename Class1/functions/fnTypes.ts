//functions
function greeting(name:string){
    console.log(`Hello ${name}`);
}
greeting('Alexis')
//❌ greeting(2)


//❌ Conflict with js objects
// function greeting2({name:string, age:number}){
//     console.log(`Hello ${name}, u are ${age} years old`);
// }
// greeting2({name: 20, age: 'Alexis'})

//✅
function greeting2({name, age}: {name: string, age: number}){
    console.log(`Hello ${name}, u are ${age} years old`);
}

//✅
function greeting3(person: {name: string, age: number}){
    const {name, age} = person
    console.log(`Hello ${name}, u are ${age} years old`);
}

//Return type not always necessary
//Type Arrows Functions
const sum = (a: number, b: number):number => a + b
const subtract: (a: number, b: number) => number = (a,b) => a - b
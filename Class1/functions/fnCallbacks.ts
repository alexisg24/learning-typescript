//Type callbacks
const sayHiFromFn = (fn: (name: string) => void) =>{
    return fn('Alexis')
}

const sayHi = (name: string) =>{
    console.log(`Hello ${name}`)
}

function sayHi2(name: string):void{
    console.log(`Hello ${name}`);
}

sayHiFromFn(sayHi)
sayHiFromFn(sayHi2)

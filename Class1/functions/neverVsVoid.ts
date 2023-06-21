//never type 
//never type is when a function never will return a value, example
function throwError(message:string):never{
    throw new Error(message)
}

//never vs void: never is when a function never will return a value meanwhile 
//void is when a function can return a value but its not useful for us

function logMsg(msg:string):void{
    console.log(msg); 
} //When console.log is called the function will return a implicit value (undefined, void, 1, 0, etc)

function throwError2(message:string):never{
    throw new Error(message)
} //This function call a throw exception and the function stops his execution and it will not return nothing

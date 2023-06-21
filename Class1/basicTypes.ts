//Types
const number = 1; //number
const stringValue = 'hello'; //string
const nullValue = null; //nulls
const booleanValue = true; //boolean
const undefinedValue = undefined; //undefined

let anyValue:any; //Bad practice, any value and no autocomplete (ignore the type)
let unknownValue:unknown; //Better practice

//Inference
const a = 1;
const b = 2;
//TS knows a and b are numbers
const c = a + b;
//Same with c, and we can access to the number methods

//Same with strings and their methods
let textString = 'Hello';
textString.toLocaleLowerCase()
//❌ textString = 2
//❌ textString.unknownProperty


//Objects
let hero = {
    name: 'Thor',
    age: 1500
}

//Auto complete properties
hero.age

//Types inference
//❌ hero.age = 123

//Inmutability by auto type inference
//❌ hero.power = 123 
//this will return an error bcs the hero object only works with default types


//if we create a object from a function TS can't know if hero and this are the same type
function createHero(name: string, age: number){
    return {name, age}
}

const thor2 = createHero('Thor', 1500)

//For fix this we need to create a "Type Alias" for reuse this in all the initializations
//Types always need to be defined in PascalCase
type Hero = {
    name: string,
    age: number
}

let newHero: Hero = {
    name: 'Spiderman',
    age: 21
}

function createHero2(hero:Hero):Hero{
    const {name, age} = hero
    return {name, age}
}
const spiderman2 = createHero2({name: 'Spiderman', age: 21})
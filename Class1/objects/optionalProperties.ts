//Optional Properties
//When we create a type, it can have optional properties for more flexibility in our type reutilization
type Hero2 = {
    id?:number;
    name: string;
    age: number;
    isActive?: boolean; //Optional property
}

function createHero1(hero: Hero2):Hero2{
    const {name, age} = hero;
    return {name, age, isActive: true}
}

const spiderman = createHero1({name: 'Spiderman', age:21})
const thor:Hero2 = {
    name: 'Thor',
    age: 1500
}

//now spiderman has isActive property and thor no!!
//and if we use a method of optional property TS will add optional chaining operator
spiderman.id?.toString() //optional chaining evaluate if the id exists before execute the code
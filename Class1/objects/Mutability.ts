//Mutability methods and options

//ReadOnly properties
type Person = {
    readonly id?: number //readonly property cant be changed
    name: string
    age: number
    isActive?: boolean
}

const customer:Person = {
    name: 'Thor',
    age: 1500
}

//❌ customer.id = 4 we can't edit

//This only works in development mode, if we compile this code to JS it will not check this types
//for this reason, we can use native objects methods like freeze

function createHero3(hero: Hero2):Hero2{
    const {name, age} = hero;
    return {name, age, isActive: true}
}

const customer2 = Object.freeze(createHero3({name: 'Example', age: 20}))
//❌ customer2.isActive = false
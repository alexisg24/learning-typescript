//Template union types
type ClientID = `${string}-${string}-${string}-${string}-${string}`
type ClientFrecuency = 'low' | 'medium' | 'high' //Union type using OR operator, is like join in SQL

//Extends types
type ClientBasicInfo = {
    name: string
    age: number
}
type ClientProperties = {
    readonly id?: ClientID
    isActive?: boolean,
    frecuency?: ClientFrecuency
}

//Extending types with AND operator
type Client = ClientBasicInfo & ClientProperties

const createClient = (input: ClientBasicInfo):Client =>{
    const {name, age} = input
    return {
        id: crypto.randomUUID(), 
        name,
        age,
        isActive: true
    }
}

const client1 = createClient({name: "John", age: 23})
client1.frecuency = 'medium'

//example 2
type HexadecilamColor = `#${string}`
const color:HexadecilamColor = '#004df'
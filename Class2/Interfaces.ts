//Interfaces always will be an object, types can be strings, arrays, etc
//Has inherited properties
//Can extends only declaring again the interface

interface Product{
    id: number
    name: string
    price: number
    quantity: number
}

interface Cart {
    totalprice: number
    products: Product[]
}

const shoppingCart: Cart = {
    totalprice: 100,
    products: [
        {
            id: 1,
            name: "Product 1",
            price: 100,
            quantity: 1
        }
    ]
}

//We can extends the interface
interface Shoes extends Product{
    size: number
}

//Functions in the interfaces in 2 forms
interface CartOptins {
    add: (product: Product) => void
    remove(product: Product): void
}
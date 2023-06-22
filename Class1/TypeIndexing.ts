//TypeIndexing

type ClientProps = {
    isActive?: boolean
    address: {
        street: string
        city: string
    }
}

const clientAddress: ClientProps['address'] = {
    street: 'Street',
    city: 'City'
}

//Type from value
const address = {
    street: 'Street',
    city: 'City'
}

type Address = typeof address

const twitchAddress: Address = {
    street: 'Street',
    city: 'City'
}

//Type from fn return
function createAdress(){
    return {street: 'Street', city: 'City'}
}

type AdressFromFn = ReturnType<typeof createAdress>
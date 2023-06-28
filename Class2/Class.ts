class Avenger{
    readonly name: string
    private powerScore: number //<-- make private property but not compiled, if we need strong security we need to use #
    private readonly wonBattles: number = 0 //<-- Private and readonly property
    protected age: number = 0 //<-- protected POO is like a private property only accessible in child classes
    constructor(name: string, powerScore: number){
        this.name = name
        this.powerScore = powerScore
    }

    get fullName(){
        return `${this.name}, with ${this.powerScore} of power`
    }

    set power(newPower: number){
        if(newPower <= 100){
            this.powerScore = newPower
        }else{
            throw new Error('Power score cannot be more than 100')
        }
    }
}

const avengers = new Avenger('Spiderman', 80)
// avengers.name = 'Hulk' //<-- mutation, we need to add readonly property
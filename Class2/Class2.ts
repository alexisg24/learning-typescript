import { AvengerInterface } from "./types"

//Using interface for describe the object
class AvengersClass implements AvengerInterface{
    avengerName: string
    avengerPowerScore: number
    avengerWonBattles: number
    avengerAge: number


    constructor(avengerName: string, avengerPowerScore: number){
        this.avengerName = avengerName
        this.avengerPowerScore = avengerPowerScore
    }

    get fullName(){
        return `${this.avengerName}, with ${this.avengerPowerScore} of power`
    }

    set power(newPower: number){
        if(newPower <= 100){
            this.avengerPowerScore = newPower
        }else{
            throw new Error('Power score cannot be more than 100')
        }
    }
}
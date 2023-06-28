//Narrowing is when we have some types or interfaces and TS needs to know what type can be used
function calculateLength(data: string | number):number{
    if(typeof data === "string") return data.length //<-- Narrowing
    return data.toString().length
}

interface Mario{
    name: string
    jump: ()=> void
}

interface Sonic{
    name: string
    run: ()=> void
}

type Character = Mario | Sonic

//TypeGuard for validate the type
function checkIsSonic(character:Character): character is Sonic{
    return (character as Sonic).run !== undefined
}
function play(character: Character /*TS needs to know the char so we need a typeguardfn or valitation*/){
    if(checkIsSonic(character)){ //<- Validate the type if is Sonic
        character.run()
    }else{
        character.jump()
    }
}
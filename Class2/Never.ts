//Never example

function fn(x: string | number){
    if(typeof x === 'string'){
        x.toUpperCase()
    }else if(typeof x === 'number'){
        //do something
    }else{
        x //<- never
    }
}
//Enums ara like a index or options types
//We can use with const or without const, if we want to export our enum like in a library, proyect etc, use enums without const are recommended
//examples:
const enum ERROR_TYPES{ //we can use a value or nothing
    NOT_FOUND = "not found",
    UNAUTHORIZED = "unauthorized",
    FORBIDDEN = "forbidden",
}

function showError(typeError:ERROR_TYPES):String{
    if(typeError === ERROR_TYPES.NOT_FOUND){
        return 'Resource not found'
    }else if(typeError === ERROR_TYPES.UNAUTHORIZED){
        return 'Unauthorized'
    }else if(typeError === ERROR_TYPES.FORBIDDEN){
        return 'Forbidden'
    }
    return 'Unknown error'
}

const checkArguments = (arg, numberType) => {  
    if (typeof arg !== numberType) {
        throw new Error('Wrong argument type');
    }
    return arg;
}

export const checkNumber = (arg) => {  
    return checkArguments(arg,'number');
}

export const chekString = (arg, type) => {
    return checkArguments(arg,'string');
}


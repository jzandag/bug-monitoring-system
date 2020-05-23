export const updateObject = (oldObject, updatedProperty) => {
    return {
        ...oldObject,
        ...updatedProperty
    }
}

export const checkValidity = (value, rules) => {
    let isValid = true
    if(!rules)
        return true
    if(rules.required){
        isValid = value.trim() !== '' && isValid
    }
    if(rules.minLength){
        isValid = value.length >= rules.minLength && isValid
    }

    return isValid
}
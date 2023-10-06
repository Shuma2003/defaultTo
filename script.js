const defaultTo =(value, defaultValue)=>{
    if (value === null ||Number.isNaN (value) || value == undefined ){
return defaultValue
    }
    return value
}

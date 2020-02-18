export const maxLength15 = (value) => {
    if (value && value.length > 15) return "Max length is 15 symbols"
    return undefined
};

export const maxLength40 = (value) => {
    if (value && value.length > 40) return "Max length is 40 symbols"
    return undefined
};

export const require = (value) => {
    if (value) return undefined
    return "Field is required"
};
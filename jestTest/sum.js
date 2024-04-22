function capitalize(string){
    let stringFirst = string.slice(0, 1)
    let end = string.length
    let stringRest = string.slice(1, end)
    let firstUpper = stringFirst.toUpperCase()
    let stringNew = firstUpper + stringRest
    return stringNew
}
module.exports = capitalize;
//paste me into console: capitalize('dog')
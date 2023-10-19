//1st task
const cats = ["Milo", "Otis", "Garfield"]
function destructivelyAppendCat(name) {
    cats.push(name)
}
//2nd task
const additionalCats = [...cats, "Ralph"]
console.log(cats)
console.log(additionalCats)
//3rd task
function destructivelyPrependCat(name) {
    cats.unshift(name)
}
const prependCats = [...cats, "Bob"]
console.log(prependCats)
//4th task
function destructivelyRemoveLastCat(name) {
    cats.pop(name)
}
const LastCat = [...cats]
console.log(LastCat)
//5th task
function destructivelyRemoveFirstCat(name) {
    cats.shift(name)
}
const FirstCat = [...cats]
console.log(FirstCat)
//6th task
const newCats = [...cats, "Broom"] 
    function appendCat(name) {
    const newCats = cats.slice()
    newCats.push(name)
    return newCats
}
//7th task
const preCats = [...cats, "Arnold"]
    function prependCat(name) {
    const preCats = cats.slice()
    preCats.unshift(name)
    return preCats 
}
//8th task
function removeLastCat(name) {
    const newCats = cats.slice(0, cats.length - 1)
    return newCats
}
console.log(otherLastCat)
//9th task
function removeFirstCat(name) {
    const newFirstCat = cats.slice(1, cats.length - 0)
    return newFirstCat
}
console.log(otherFirstCat)
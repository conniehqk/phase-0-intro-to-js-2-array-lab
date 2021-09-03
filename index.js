// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    cats.push(name);
}

cats = ["Milo", "Otis", "Garfield"];

function destructivelyPrependCat(name) {
    cats.unshift(name);
}

cats = ["Milo", "Otis", "Garfield"];

function destructivelyRemoveLastCat(name) {
    cats.pop(name);
}

cats = ["Milo", "Otis", "Garfield"];

function destructivelyRemoveFirstCat(name) {
    cats.shift(name);
}

cats = ["Milo", "Otis", "Garfield"];

function appendCat(name) {
    return [...cats, name]
}

cats = ["Milo", "Otis", "Garfield"];

function prependCat(name) {
    return [name, ...cats]
}

cats = ["Milo", "Otis", "Garfield"];

function removeLastCat(name) {
    return [...cats].slice(0,-1)
}

cats = ["Milo", "Otis", "Garfield"];

function removeFirstCat(name) {
    return [...cats].slice(1)
}
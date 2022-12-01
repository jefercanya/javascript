const array = ["one", "two", "three", "four", "five", "six"];

console.log(array[array.length - 1]); //antes se buscaba el valor del indice (el ultimo con => .length-1)
console.log(array.at(-1)); //ahora con at
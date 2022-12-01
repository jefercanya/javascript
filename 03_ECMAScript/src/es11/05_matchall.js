const regex = /\b(Apple)+\b/g; //buscar la palabra 'apple' dentro de un string

const fruit = "Apple, Banana, Kiwi, Apple, Orange, etc. etc. etc.";

for (const match of fruit.matchAll(regex)) {
    console.log(match);
}
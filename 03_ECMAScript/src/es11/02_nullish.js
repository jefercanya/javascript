const anotherNumber = null;
const validate = anotherNumber ?? 5; //validar con nullish. Si anotherNumber = null entonces lo reemplaza con 5 por defecto
console.log(validate);
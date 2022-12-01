const objeto = {
    nombre: "Andres",
    age: 23,
  }
  
  const usuario = {
      ...objeto,
      plataforma: "LSData INC"
  }


//Crear copias de objetos utilizando las propiedades de propagación
const objetoOriginal = {a: 1, b: 2}
const objetoReferencia = objetoOriginal
const objetoCopia = {...objetoOriginal}

objetoReferencia === objetoOriginal // true
objetoOriginal === objetoCopia // false



//Cuidado con la copia en diferentes niveles de profundidad
const original = { datos: [1, [2, 3], 4, 5] }
const copia = { ...original }

original === copia // false
original["datos"] === copia["datos"] // true


/*La manera de solucionar esto es más compleja, 
tendrías que utilizar el operador de propagación para cada elemento en cada nivel de profundidad.

Sin embargo, recientemente salió una forma de crear una copia profunda con StructuredClone. 
Aunque es una característica muy reciente, así que revisa que navegadores tienen soporte. 
*/
const original = { datos: [1, [2, 3], 4, 5] }
const copia = structuredClone(original)

original === copia // false
original["datos"] === copia["datos"] // false
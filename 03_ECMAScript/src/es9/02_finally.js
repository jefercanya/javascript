promesa()
    .then(response => console.log(response) )// Promesa resuelta
    .catch(error => console.log(response) )// Promesa rechazada
    .finally( () => console.log("Finalizado") );// Código final  



//ejercicio es6
const anotherFuncion = () => {
    return new Promise((resolve, reject) => {
      if (true) { //if (false)//reject
        resolve('Hey!!');
      } else {
        reject('Whooooops!');
      }
    })
  }
  
  anotherFuncion()
    .then(response => console.log(response))
    .catch(err => console.log(err))
    .finally( () => console.log("Finalizado") )
  
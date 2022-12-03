import fetch from 'node-fetch';
const API = 'https://api.escuelajs.co/api/v1';

function postData(urlApi, data) {
  const response = fetch(urlApi, {//este es el objeto de configuracion para hacer un POST
    method: 'POST',
    mode: 'cors',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data) //informacion que se va a enviar
  });
  return response;
}

const data = {
  "title": "123999",
  "price": 888888,
  "description": "A description",
  "categoryId": 1,
  "images": [
    "https://placeimg.com/640/480/any"
  ]
}

postData(`${API}/products`, data)
  .then(response => response.json())
  .then(data => console.log(data));

//Para consultar los productos creados en API
//https://api.escuelajs.co/api/v1/products/207
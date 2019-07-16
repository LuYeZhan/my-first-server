'use strict'

// el puerto 3000 siempre va a ser nuestro puerto local, es la good practice 
const http = require('http');
// filesystem es un archivo dentro de node que 
const fs = require('fs')

const port = 3000;

const server = http.createServer((request, response)=> {
  const url = request.url;
  const method = request.method;
  // para ver que es url y method antes del if
  console.log(url, method)
  if (url === '/' && method === 'GET') {
    response.end('<h1>Home Page</h1>')
  } else if (url === '/about' && method === 'GET'){
    response.end('<h1>About Page</h1>')
  } else if (url === '/file' && method === 'GET') {
    const html = fs.readFileSync('./file.html');
    response.end(html);
   } 
  else {
    response.end('<h1>404 - Not Found</h1>')
  }
  // cada vez que hagamos un request, nos mostrará ese request en la consola
  // console.log('request');
});

// va a decirle a server que empieze a escuchar
server.listen(port, () =>{
  console.log(`server running on port ${port}`)
});


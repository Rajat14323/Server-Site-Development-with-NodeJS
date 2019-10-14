const http = require('http');   //this is to include httpmodule

const hostname = 'localhost';   //varaible declaration
const port = 3000;              //setting port variable to 3000

const server = http.createServer((req, res) => {     //creating a server with request and respone
    console.log(req.headers);                        //this isto log the header
    res.statusCode = 200;                            // statuscode = 200 means everything is kay in network
    res.setHeader('Content-Type', 'text/html');       //setting the header as content type
    res.end('<html><body><h1>Hello, World!</h1></body></html>');     //this is the response which will be returned
})

server.listen(port, hostname, () => {              //this is to start the server
  console.log(`Server running at http://${hostname}:${port}/`);     //backtick and combination of $ bracket means acces the varaible value
});
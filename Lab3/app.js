const http = require("http");
//Note: Muốn deploy lên hosting(Heroku) thì cần phải set port với process.env.PORT || 3000.
const port = process.env.PORT || 3000;
//Request: client -> server
//Response: server -> client
const app  = http.createServer((req, res) =>{
    res.statusCode = 200;   //HTTP_OK
    res.setHeader("Content-Type", "text/html");
    res.end("Hello Word");
});

app.listen(port);



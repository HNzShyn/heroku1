const http = require("http");
const port = 3000;
const app = http.createServer((req, res) =>{
    res.write("<h1>Hello Word</h1>");
    res.write("<h3>I has deployed NodeJS to Heroku successfully!!!</h3>");
    res.end();
})

app.listen(port);
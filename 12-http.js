const http = require('http')

const server = http.createServer((req, res) => {
    if(req.url === '/homepage') {
        res.end('welcome to our homepage')
    }
    if(req.url === '/about') {
        res.end('here is our short history')
    }
    res.end(`
        <h1>Oops!</h1>
        <p>We can't seem to find the page you are looking for</p>
        <a href="/homepage">Back home</a>
    `)
})

server.listen(5000)
  
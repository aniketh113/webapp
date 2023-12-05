const http = require("http");
const path = require("path");
const fs = require("fs");
const server = http.createServer((req, res) => {

    if (req.url === '/') {
    
        fs.readFile(path.join(__dirname, 'public', 'index.html'),
                    (err, content) => {
                                    
                                    if (err) throw err;
                                    res.setHeader("Access-Control-Allow-Origin", "*")
                                    res.writeHead(200, { 'Content-Type': 'text/html' });
                                    res.end(content);
                        }
              );
     }
     else if (req.url === '/Style.css') {
        fs.readFile(path.join(__dirname, 'public', 'Style.css'), (err, content) => {
            if (err) throw err;
            res.writeHead(200, { 'Content-Type': 'text/css' });
            res.end(content);
        });
    }
    else if (req.url === '/Script.js') {
        fs.readFile(path.join(__dirname, 'public', 'Script.js'), (err, content) => {
            if (err) throw err;
            res.writeHead(200, { 'Content-Type': 'text/js' });
            res.end(content);
        });
    }
    else if (req.url.startsWith('/Assets/')) {
    const assetPath = path.join(__dirname, req.url);
    fs.readFile(assetPath, (err, data) => {
      if (err) {
        console.error(err);
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not Found');
        return;
      }

      const contentType = path.extname(assetPath) === '.png' ? 'image/png' : 'image/jpeg';
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(data);
    });
  }
    else if (req.url === '/about') {
        
        fs.readFile(
            path.join(__dirname, 'public', 'about.html'),
                    (err, content) => {
                                    
                                    if (err) throw err;
                                    res.setHeader("Access-Control-Allow-Origin", "*")
                                    res.writeHead(200, { 'Content-Type': 'html' });
                                    res.end(content);
                        }
              );
     }
    else if (req.url==='/api')
    {
        fs.readFile(
            path.join(__dirname, 'public', 'db.json'),'utf-8',
                    (err, content) => {
                                    
                                    if (err) throw err;
                                    res.setHeader("Access-Control-Allow-Origin", "*")
                                    // Please note the content-type here is application/json
                                    res.writeHead(200, { 'Content-Type': 'application/json' });
                                    res.end(content);
                        }
              );
    }
    else{
        res.end("<h1> 404 nothing is here</h1>");
    }
});

const PORT= process.env.PORT || 6402;

server.listen(PORT,()=> console.log(`Great our server is running on port ${PORT} `));
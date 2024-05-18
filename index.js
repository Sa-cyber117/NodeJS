// const http = require('http');
// const fs = require('fs');
// const port = 3000;
// const hostname = '127.0.0.1';
// const home = fs.readFileSync('./index.html', "utf-8");
// const about = fs.readFileSync('./about.html', "utf-8");
// const contact = fs.readFileSync('./contact.html', "utf-8");
// const another = fs.readFileSync('./another.html', "utf-8");
// const something = fs.readFileSync('./something.html', "utf-8");

// const server = http.createServer((req, res) => {
//     const url = req.url;
//     console.log(url);
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/html');
//     if (url == '/') {
//         res.end(home);
//     }
//     else if (url == '/about') {
//         res.end(about);
//     }
//     else if (url == '/contact') {
//         res.end(contact);
//     }
//     else if (url == '/another') {
//         res.end(another);
//     }
    
//     else {
        
//         res.statusCode = 404;
//         res.end("<h1>404 page not found</h1>")
//     }



// })

// server.listen(port, hostname, () => {
//     console.log(`Server running at http://${hostname}:${port}/`);
// })




/* const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;

// Load HTML files asynchronously
const home = fs.readFileSync('index.html');
const about = fs.readFileSync('about.html');
const contact = fs.readFileSync('contact.html');
const action = fs.readFileSync('action.html');
const anotheraction = fs.readFileSync('anotheraction.html');
const something = fs.readFileSync('something.html');

// Create the server
const server = http.createServer((req, res) => {
    const url = req.url;

    console.log(url);
    res.setHeader('Content-Type', 'text/html');

    // Use a switch statement for better readability and efficiency
    switch (url) {
        case '/':
            res.statusCode = 200;
            res.end(home);
            break;
        case '/about':
            res.statusCode = 200;
            res.end(about);
            break;
        case '/contact':
            res.statusCode = 200;
            res.end(contact);
            break;
        case '/action':
            res.statusCode = 200;
            res.end(action);
            break;
        case '/anotheraction':
            res.statusCode = 200;
            res.end(anotheraction);
            break;
        case '/something':
            res.statusCode = 200;
            res.end(something);
            break;
        default:
            // Handle 404 error
            res.statusCode = 404;
            res.setHeader('Content-Type', 'text/html');
            res.end('<h1>404 Not Found</h1>');
            break;
    }
});

// Start the server
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
*/

const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 80;

// Load HTML files
const home = fs.readFileSync('index.html');
const about = fs.readFileSync('about.html');
const contact = fs.readFileSync('contact.html');
const action = fs.readFileSync('action.html');
const anotheraction = fs.readFileSync('anotheraction.html');
const something = fs.readFileSync('something.html');

// Create the server
const server = http.createServer((req, res) => {
    const url = req.url; // Retrieve the URL from the request object

    console.log(url);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');

    // Use switch statement to handle different routes
    if(url === '/'){
        res.end(home);
    }
    else if(url === '/about'){
        res.end(about);
    }
    else if(url === '/contact'){
        res.end(contact);
    }
    else if(url === '/action'){
        res.end(action);
    }
    else if(url === '/anotheraction'){
        res.end(anotheraction);
    }
    else if(url === '/something'){
        res.end(something);
        console.log("bhjdec")
    }
    else {
        res.statusCode = 404;
        res.end("<h1>404 not found</h1>");
    }
});

// Start the server
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

/**
 * HTTP module is a Node.js core module
 * HTTP module provides the functionality to create the HTTP Server
 */

const http = require('http);

http.createServer((request,response)=>
response.writeHead(
    200, {contentType:'Text/Plain'}
)
response.write(
'Hello World'
)
 
response.end();
)
    
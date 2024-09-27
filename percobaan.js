const http = require('http')

http.createServer(function(request, response ){
    response.writeHead(200, {'Content-type' : 'text/plain'})
    response.end('Halo guys, script ini di gnerate dari backend node,js')
}).listen(3000, function(){   console.log ('server sudah jalan, buka http://localhosnnodet:3000')} )
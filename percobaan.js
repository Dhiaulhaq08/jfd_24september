const http = require('http')

http.createServer(function(request, response ){
    
    response.writeHead(200, {'Content-type' : 'text/html'})
    if (request.url == '/') {
        response.end(`<h1>Halo guys, script ini di gnerate dari backend node js</h1>`)
    

    }
    else if (request.url == '/profil'){
        response.end(
            `<ul>
                <li> nama lengkap : dhiaulhaq</li>
                <li> nama panggilan : dhia </li>
                <li> alamat: bandung</li>
                <li> status : mahasiswa</li>
            </ul>`
        )
    }
    else { 
        response.end(`<h1>303 : Halaman tidak ditemukan<hr></h1>`)
    }
    
  
}).listen(3000, function(){console.log ('server sudah jalan, buka http://localhosnnodet:3000')} )
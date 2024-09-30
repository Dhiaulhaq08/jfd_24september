//memanggil modil bawaan dari node.js yaitu http
//untuk membuat server http
const http = require('http')

http.createServer(function(request, response ){
    
    response.writeHead(200, {'Content-type' : 'text/html'})
    if (request.url == '/') {
        response.end(`<h1>Halo guys, script ini di gnerate dari backend node js</h1>`)
    

    }
    else if (request.url == '/profil'){
        let tahun_lahir = 1980
        let tahun_ini = 2024
        let umur = tahun_ini - tahun_lahir 
        response.end(
            `<ul>
                <li> nama lengkap : dhiaulhaq</li>
                <li> nama panggilan : dhia </li>
                <li> alamat: bandung</li>
                <li> status : mahasiswa</li>
                <li> tanggal lahir: 17 Agustus ${tahun_lahir}</li>
                <li> umur : ${umur} tahun </li> 
            </ul>`
        )
    }
    else if (request.url == '/hubungi-saya'){
        let kontak = { 
            wa :'021021021021',
            ig : "igugu",
        }
        
        response.end(
            `<ul>
                <li>wa : ${kontak.wa}</li>
                <li>ig : ${kontak.ig}</li>
            </ul>`
            
)  
    }
    else { 
        response.end(`<h1>303 : Halaman tidak ditemukan<hr></h1>`)
    }
    
  
}).listen(3000, function(){console.log ('server sudah jalan, buka http://localhosnnodet:3000')} )
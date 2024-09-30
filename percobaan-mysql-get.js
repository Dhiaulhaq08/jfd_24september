const mysql = require('mysql2')

//sambungkan ke my sql
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'db_jfd_sep24'
})

//buka koneksi 
db.connect((error)=>{
    if(error) {
        throw error
    } else { 
        console.log('berhasil tersambung ke mysql' + db.host)
    }
})

db.query('SELECT * FROM karyawan' , function(errorSql, hasil) {
    if (errorSql) {
        console.log(errorSql)
        
    } else {
        console.log(hasil)
        
    }
})
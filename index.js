const express = require('express');
const app = express();
const mongoose = require('mongoose');
const port = process.env.PORT || 9000;
require('dotenv').config();

app.listen(port, ()=>console.log('server listen on port',port));

app.get('/',(req,res)=>{
    res.send('Bienvenido al servidor')
})

//conexion a mongo db

mongoose
.connect(process.env.MONGODB_URI)
.then(()=>console.log('Te has conectado a la base de datos'))
.catch((error)=>console.error(error));
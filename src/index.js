const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config()
const productRoutes = require('./routes/productos');
const cors = require('cors');



const app = express();
const port = process.env.PORT || 9000;

//midleware
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use('/api',productRoutes)

app.get('/', (req, res) => {
    res.send('welcome to my api')
});

//mongoDB connection

mongoose.connect('mongodb://localhost/productoAPI',{useNewUrlParser: true, useUnifiedTopology: true})
.then( ()=> {
    console.log('MongoDB conectado')
})
.catch((error) => {
    console.log('error al conectar a mongodb ' + error)
})


app.listen(port, ()=> {
    console.log('servidor ejecutandose en el puerto: ' + port)
})


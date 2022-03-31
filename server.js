const express = require('express')
const Productos = require('./api/Productos')
const app = express()
const PORT = process.env.PORT || 8080 

app.use(express.static("./public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const guardarProd = new Productos();

// app.get('/', (req,res)=> {
//     res.sendFile(__dirname + '/index.html')
// })
// app.get('/productos', (req,res)=> {
//     res.sendFile(__dirname + '/views/productos.html')
// })
// app.get('/carrito', (req,res)=> {
//     res.sendFile(__dirname + '/views/carrito.html')
// })

app.get('/products', (req,res)=> {
    const productos = guardarProd.traerProductos()
    res.json(productos)
   // console.log(productos)
})
app.get('/products/:id', (req,res)=>{
    const id = parseInt(req.params.id)
    res.json(guardarProd.traerProducto(id))
})


app.use(express.static('public'))


app.listen(PORT, ()=> {
    console.log(`Listen on http://localhost:${PORT}`)
})
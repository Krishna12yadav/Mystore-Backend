import express from 'express'
import cors from 'cors'

import { connectDB } from './config/db.js'



import { createProduct, deleteProduct, getProduct, getProducts, updateProduct } from './controlers/productControler.js';




const app=express();

     // Enable CORS for all origins (in production, you'd likely restrict this to specific origins)
     app.use(cors())

     // Or, specify the allowed origin explicitly
app.use(cors({
        origin: 'https://mystore-12.netlify.app/' 
}));

app.use(express.json()) //this middleware allows us to accept JSON data in the body

app.get('/api/products/:id',getProduct)

app.put('/api/products/:id',updateProduct)

app.get('/api/products',getProducts)


app.post('/api/products',createProduct)


app.delete('/api/products/:id',deleteProduct)

app.listen(5000,()=>{
    connectDB()
    console.log("server started at http://localhost:5000" )
   
})

//0DbpGUjca8b9YU3p 
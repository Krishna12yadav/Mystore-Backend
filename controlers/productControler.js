import mongoose from "mongoose"
import { Product } from "../models/product.model.js"

export const getProduct=async(req,res)=>{
    const {id}=req.params 
     if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({success:false,mssage:"invalid id"})
     }

     try {
        const product= await Product.findById(id)
        res.status(200).json({success:true,message:product})
     } catch (error) {
        console.error(error.message)
        
     }
}

export const updateProduct=async(req,res)=>{
    const {id}=req.params
    const product=req.body

    if(!mongoose.Types.ObjectId.isValid(id)){
            return res.status(404).json({success:false,message:"invalid id"})
    }

    try {
        const updatedProduct= await Product.findByIdAndUpdate(id,product,{new:true})
        res.status(200).json({success:true,message:updatedProduct})
    } catch (error) {
        console.error(error.message)
        res.status(500).json({success:false,message:"server error"})
        
    }
}

export const getProducts=async(req,res)=>{
    try {
    const products=await Product.find({})
    res.status(200).json({success:true,data:products})
        
    } catch (error) {
        console.error(error.message)
        res.status(400).json({success:flase,message:"Error in fetching all products"})
        
    }
}

export const createProduct=async(req,res)=>{
    const product=req.body; //user will send this data

    if(!product.name||!product.price||!product.url){
        return res.status(400).json({success:false,message:"Please provide all fields"})
    }
    const newProduct=new Product(product)
    try {
        newProduct.save()
        res.status(201).json({success:true,data:newProduct})
        
    } catch (error) {
        console.error('Error in create product:',error.message)
        res.status(500).json({success:false,message:"server error"})
    }

}


export const deleteProduct=async (req,res)=>{
    const {id}=req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({success:false,mssage:"invalid id"})
     }
    try {
        await Product.findByIdAndDelete(id)
        res.status(200).json({success:true,message:"product deleted!"})
    } catch (error) {
        res.status(404).json({success:false,mesage:"product not found"})
        console.error(error.message)
        
    }
    

}
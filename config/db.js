import mongoose from "mongoose";


export const connectDB = async () => {
    try {
        const conn = await mongoose.connect('mongodb+srv://yadavkrishna28217:0DbpGUjca8b9YU3p@cluster0.uvzpl.mongodb.net/products?retryWrites=true&w=majority&appName=Cluster0')
        console.log(`MongoDB connected : ${conn.connection.host}`)
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1)

    }
}
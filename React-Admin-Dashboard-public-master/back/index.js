import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import doctorRoute from "./routes/doctor.js";

dotenv.config()

const app = express ();
const port = process.env.PORT || 8000;

const corsOptions = { 
    origin : true,
};

app.get('/',(req,res)=>{
    res.send('Api is working');
});

mongoose.set('strictQuery',false);
const connectDB= async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
        })
        console.log('MongoDb database is connected');
    }catch(err){
        console.log('MongoDb database is connection failed');
    }
};

app.use(express.json());
app.use(cookieParser());
app.use(cors(corsOptions));

app.use('/api/v1/doctors', doctorRoute);



app.listen(port,()=>{
    connectDB(),
    console.log('Server is running on port' + port);
});
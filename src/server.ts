
import "reflect-metadata"

import express from 'express'
import dotenv from 'dotenv'
import { AppDataSource } from "./db"
import path from "path"
import fs from 'fs'

const uploadPath = path.join(__dirname, "..", "uploads");
if (!fs.existsSync(uploadPath)) {
  fs.mkdirSync(uploadPath);
}

 
dotenv.config()
const app = express()
const PORT = process.env.PORT || 8080


app.use(express.json())

// IMPORT ROUTES
import api from './routes/index'
app.use('/api',api)
 

AppDataSource.initialize()
.then(()=>console.log("DBConnection success"))
.catch((error: any)=>console.log("DBConnection failed",error))

app.listen(PORT,()=>console.log(`Server is listening at port ${PORT}`))
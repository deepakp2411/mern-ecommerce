import express from 'express';
import cors from 'cors';
import dotenv  from 'dotenv'
dotenv.config()
const app = express();
import webRoutes from './routes/webRoutes.js'
import userRoutes from './routes/userRoute.js'
import connectDB from './db/connectdb.js';
const port = process.env.PORT 
const DATABASE_URL = process.env.DATABASE_URL 


// middleware 
app.use(express.json())
app.use(cors());

// routes 

app.use('/',webRoutes)
app.use('/api',userRoutes)

// db 
connectDB(DATABASE_URL);




app.listen(port, () => {
    console.log(`Server is running at ${port}`)
})

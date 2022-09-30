const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
dotenv.config()
const app = express();
const webRoutes = require("./routes/webRoutes")
const userRoutes = require( './routes/userRoute')
const productRoute = require( './routes/productsRoute')
const connectDB = require( './db/connectdb');
const port = process.env.PORT 
const DATABASE_URL = process.env.DATABASE_URL 


// middleware 
app.use(express.json())
app.use(cors());


// routes 

app.use('/',webRoutes)
app.use('/api',userRoutes) 
app.use('/api/products',productRoute)


// db 
connectDB(DATABASE_URL);




app.listen(port, () => {
    console.log(`Server is running at ${port}`)
})

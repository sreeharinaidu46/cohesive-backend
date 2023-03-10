import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import path from 'path'
let MONGO_URI = "mongodb+srv://Jansi:jansi@stack-overflow-clone.duy76nt.mongodb.net/cohesive?retryWrites=true&w=majority"
import userRoutes from './routes/user_route.js'
import transactionRoutes from './routes/transaction_route.js'
const port = process.env.PORT || 5000;
mongoose.connect(process.env.MONGODB_URI || MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,

});
mongoose.connection.on("connected", () => {
    console.log("mongodb is connected");
});


const app = express();
app.use(express.json())
app.use(cors());
app.use('/public', express.static('public'));
app.use('/user', userRoutes)
app.use('/user', transactionRoutes)

const server = app.listen(port, () => {
    console.log('Connected to port ' + port)
})
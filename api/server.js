import express from "express"
import dotenv from "dotenv"
import cors from 'cors'
import connectDB from "./config/db.js";
import userRoutes from './routes/userRoutes.js'
import productRoutes from './routes/productRoutes.js'

dotenv.config();

const app = express()

app.use(express.json())

app.use(
	cors({
		origin: [
			"http://127.0.0.1:5173/",
			"https://127.0.0.1:5173/",
			"http://127.0.0.1:5173",
		],
		methods: ["GET", "POST", "PUT", "DELETE"],
		credentials: true,
	}),
);

app.use('/api/auth', userRoutes)
app.use('/api/products', productRoutes)

connectDB()

app.use("/", (req, res, next) => {
  res.send({message: "Success!"})
})

app.listen(3000, () => {
  console.log("App started!")
})
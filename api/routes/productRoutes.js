// routes/productRoutes.js
import express from "express";
import { addProduct } from "../controllers/productController.js";
import { verifyToken } from "../controllers/userController.js";

const router = express.Router();

// Route to add a new product
router.post("/add", verifyToken, addProduct);

export default router;

import Product from "../models/Product.js";

export const addProduct = async (req, res) => {
    console.log(req.body)
    try {
        const { name, price, category, imageUrls } = req.body;
        const vendor = req.user
        
        const newProduct = new Product({
            name,
            price,
            category,
            imageUrls,
            vendor
        });

        await newProduct.save();

        res.status(201).json({ message: "Product added successfully", product: newProduct });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
};

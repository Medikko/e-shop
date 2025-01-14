import express from 'express';
import productService from '../services/ProductService.js';
import Error from '../error/Error.js';

const productsController = express.Router()

productsController.post("/", async (req, res) => {
    const productData = {
        name: req.body.name,
        color: req.body.color,
        price: req.body.price,
        quantity: req.body.quantity,
        type_id: req.body.type_id,
        brand_id: req.body.brand_id
    }

    const createdProduct = await productService.createProduct(productData);

    if(createdProduct instanceof Error){
        res.status(createdProduct.statusCode);
    }

    res.send(createdProduct);
})

productsController.delete("/", async (req, res) => {
    const projectId = req.body.id;

    const result = await productService.deleteProduct(projectId);

    if(result instanceof Error){
        res.status(result.statusCode);
        return res;
    }
    res.send(true)
})

export default productsController
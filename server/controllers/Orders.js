import express from 'express'
import OrderService from '../services/OrderService.js';
import Error from '../error/Error.js';
const ordersController = express.Router();

ordersController.get("/{number}", async (req, res) => {
    let number = req.params.number
    
    const order = await OrderService.getOrderByNumber(number)

    if(order instanceof Error){
        res.status(order.statusCode);
    }
    res.send(order)
    return 
})

ordersController.post("/", async (req, res) => {
    let order = req.body
    
    const createdOrder = await OrderService.createOrder(order)

    if(createdOrder instanceof Error){
        res.status(createdOrder.statusCode);
    }

    res.send(createdOrder)
    return 
    
})

ordersController.patch("/{number}/status", async (req, res) => {
    
    let number = req.params.number
    let { status } = req.body
    
    const updatedOrder = await OrderService.updateOrder(number,status)

    if(updatedOrder instanceof Error){
        res.status(updatedOrder.statusCode);
    }

    res.send(createdOrder)
    return 
})

export default ordersController;
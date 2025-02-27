 const express = require("express");
 const cors = require("cors");
 const fs = require("fs");
 
 const app = express();
 app.use(cors());
 app.use(express.json()); // Allows Backend to parse JSON

 const ORDERS_FILE = "./orders.json";

 // Load orders from JSON file
 const loadOrders = () => {
    if (!fs.existsSync(ORDERS_FILE)) return [];
    const data = fs.readFileSync(ORDERS_FILE);
    return JSON.parse(data);
 }

 // Save orders to JSON file
 const saveOrders = (orders) => {
    fs.writeFileSync(ORDERS_FILE, JSON.stringify(orders, null, 2));
 };

 // Get all orders
 app.get("/api/orders", (req, res) => {
    const orders = loadOrders();
    res.json(orders);
 });

 // POST (Create a new order)
 app.post("/api/orders/checkout", (req, res) => {
    console.log("Recieved request body", req.body);

    const { cart } = req.body;

    if (!cart || !Array.isArray(cart) || cart.length === 0) {
        return res.json(400).json({ error: "Cart is empty" });
    }
    
    try {
        const { cart } = req.body;
        if (!cart || cart.length === 0) {
            return res.status(400).json({ error: "Cart is empty"});
        }

        const orders = loadOrders();
        const newOrder = { id: orders.length + 1, items: cart, timestamp: new Date() };
        orders.push(newOrder);

        saveOrders(orders);
        res.json({ message: "Order placed successfully!", orderId: newOrder.id});
    } catch (error) {
        res.status(500).json({ error: "Failed to process order"});
    }
 });

//Start the server
const PORT = process.env.PORT || 7000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));



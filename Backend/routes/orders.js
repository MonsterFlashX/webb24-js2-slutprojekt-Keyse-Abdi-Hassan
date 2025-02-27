import express from "express";
import { db } from "../firebaseConfig.js";

const router = express.Router();

// POST: Save order to Firestore
router.post("/checkout", async (req, res) => {
    try{
        console.log("Recieved request:", req.body);

        const { cart } = req.body;

        if (!cart || cart.length === 0) {
            return res.status(400).json({ error: "Cart is empty"});
        }

        const orderRef = await db.collection("orders").add({
            items: cart,
            timestamp: new Date(),
        });
        res.json({ message: "Order placed successfully", orderId: orderRef.id });
    } catch(error) {
        console.error("Error saving order:", error);
        res.status(500).json({ error: "Failed to process order" });
    }
});

module.exports = router;
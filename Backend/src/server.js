const express = require("express");
const cors = require("cors");
const { db } = require("/firebase");

const app = express();
app.use(cors());
app.use(express.json());

//Skapa en ny produkt
app.post("/products", async ( req, res) => 
{
    try
    {
        const product = req.body;
        const docRef = await db.collection("products").add(product);
        res.status(201).json({ id: docRef.id, ...product });
    }
    catch (error)
    {
        res.status(500).json({ error: error.message })
    }
});

//Hämta alla produkter
app.get("/products", async ( req, res) => 
    {
        try
        {
            const products = req.body;
            const docRef = await db.collection("products").add(products);
            res.status(201).json({ id: docRef.id, ...products });
        }
        catch (error)
        {
            res.status(500).json({ error: error.message })
        }
    });

//Hämta en enda produkt genom ID
app.put("/products:id", async ( req, res) => 
{
    try
    {
        const products = req.body;
    }
    catch (error)
    {
        res.status(500).json({ error: error.message })
    }
});

//Uppdatera en produkt genom ID
app.post("/products:id", async ( req, res) => 
    {
        try
        {
            const products = req.body;
            await db.collection("products").doc(req, params.id).update(products);
            res.json({ id: req.params.id, ...products});
        }
        catch (error)
        {
            res.status(500).json({ error: error.message })
        }
    });

//Radera en produkt genom ID
app.delete("/products:id", async ( req, res) => 
{
    try
    {
        await db.collection("products").doc(req,params,id).delete();
        res.json({ message: "Product Deleted" });
    }
    catch (error)
    {
        res.status(500).json({ error: error.message })
    }
});

//Starta servern
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


const { verifyToken } = require("./firebase");

app.post("/products", verifyToken, async (req, res) => {
    //Bara autentiserade användare kan skapa produkter 
});

app.delete("/products/:id", verifyToken, async (req, res) => {
    //Bara autentiserade användare kan radera produkter
});

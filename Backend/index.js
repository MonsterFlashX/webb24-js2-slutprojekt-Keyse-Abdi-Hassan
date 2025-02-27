import express from "express";

const app = express();
app.use(express.json()); 

// console.log(app)
app.listen(3000, ()=>{
    console.log("listening on port 3000...")
})

app.get('/', (req, res)=>{
    res.send("GET request received");
})

// Ta emot en post request
const items = []; 
app.post('/items', (req, res)=>{

    // console.log(req.body);
    items.push(req.body.newItem);

    res.json({
        message: 'new item added',
        items: items
    });
})

const Tshirt = {
        id: 1,
        name: 'Super T-Shirt',
        price: 99,
        image: 'tshirt.png',
        stock: 300
}
const Mug = {
        id: 2,
        name: 'Durable Coffee Mug',
        price: 85,
        image: 'mug.webp',
        stock: 250
}
const Earbuds = {
        id: 3,
        name: 'Wireless Earbuds',
        price: 149,
        image: 'earbuds.webp',
        stock: 100
}
const PhoneCase = {
        id: 4,
        name: 'Anodized Phone Case',
        price: 75,
        image: 'phonecase.webp',
        stock: 400
}
const Jacket = {
        id: 5,
        name: 'Premium Leather Jacket',
        price: 299,
        image: 'jacket.webp',
        stock: 60
}

// Sending from postman a patch-request to localhost:5000/api/orders/checkout and update admin from true to false
// { admin: false}

// Write code to manage the patch-request
app.patch('/api/orders/checkout', (req, res)=>{

    console.log(req.body);
    console.log(user);


    user.admin = req.body.admin;
    console.log(user);
    
    res.json({message: "The admin right is updated"})
})


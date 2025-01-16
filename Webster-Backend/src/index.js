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

const Notepad = {
    name: 'Notepad',
    image: 'Notepad.avif',
    type: "Notepad",
    price: 25
}
const Lamp = {
    name: 'Lamp',
    image: 'Lamp.jpg',
    type: "Lamp",
    price: 50
}
const Toy = {
    name: 'Hulk',
    image: 'Hulk.jpg',
    type: "Toy",
    price: 75
}
const shirt = {
    name: 'T-shirt',
    image: 'T-shirt.webp',
    type: "shirt",
    price: 250
}
const Mittens = {
    name: 'Mittens',
    image: 'Mittens.webp',
    type: "Mittens",
    price: 90
}
const Watch = {
    name: 'Watch',
    image: 'Watch.avif',
    type: "Watch",
    price: 2500
}

// Skicka från postman en patch-request till localhost:3000/users/Webster och uppdatera admin från true till false
// { admin: false}

// Skriv kod för att hantera patchrequesten
app.patch('/Webster/Keyse', (req, res)=>{

    console.log(req.body);
    console.log(user);


    user.admin = req.body.admin;
    console.log(user);
    
    res.json({message: "Keyse's admin right is updated"})
})


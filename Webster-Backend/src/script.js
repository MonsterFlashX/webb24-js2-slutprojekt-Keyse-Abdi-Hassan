const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.post('localhost:3000/users/Webster', async (req, res) => {
  const idItem = req.headers.authorization.split('Cart ')[1];

  try {
    const decodedItem = await admin.auth().verifyIdToken(idItem);
    // Token is valid, proceed with your logic
    res.status(200).send(decodedItem);
  } catch (error) {
    res.status(401).send('Unauthorized');
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
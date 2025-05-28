const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Dummy data
const products = [
  { id: 1, name: "Nike Air", price: 1299 },
  { id: 2, name: "Adidas Run", price: 999 }
];

app.get('/api/products', (req, res) => {
  res.json(products);
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));

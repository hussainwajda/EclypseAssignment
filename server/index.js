const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5001;

app.use(cors());
app.use(express.json());

const products = [
  { id: 1, name: "Nike Air", price: 1299 },
  { id: 2, name: "Adidas Run", price: 999 }
];

app.get('/', (req, res) => {
  res.send('Welcome to Eclypse');
})

app.post('/api/addProduct', (req, res) => {
  const { product } = req.body;
  console.log(product);
  res.json(product);
})

app.get('/api/products', (req, res) => {
  res.json(products);
});

app.post("/api/addAddress", (req, res) => {
  const { address } = req.body;
  console.log(address);
  res.json(address);
});

app.get("/api/getAddress", (req, res) => {
  res.json(address);
});

app.post("/api/addPayment", (req, res) => {
  const { payment } = req.body;
  console.log(payment);
  res.json(payment);
});

app.get("/api/getPayment", (req, res) => {
  res.json(payment);
});

app.post("/api/addOrder", (req, res) => {
  const { order } = req.body;
  console.log(order);
  res.json(order);
});

app.get("/api/Orders", (req, res) => {
  res.json(order);
});

app.get("/api/getOrder", (req, res) => {
  const { orderId } = req.body;
  console.log(orderId);
  res.json(orderId);
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

require("dotenv").config();

const Product = require("./models/Product");

const authRoutes = require("./routes/authRoutes");
const productRoutes = require("./routes/productRoutes");

const app = express();

app.use(cors());
app.use(express.json());


// MongoDB Connect

mongoose.connect(process.env.MONGO_URL)
.then(() => console.log("MongoDB Connected"))
.catch((err) => console.log(err));


// Routes

app.use("/api/auth", authRoutes);

app.use("/api/products", productRoutes);


// Add Products Route

app.get("/add-products", async (req, res) => {

  try {

    await Product.insertMany([

       {
    name: "iPhone 15",
    price: 79999,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
    description: "Latest Apple iPhone with advanced camera system"
  },
  {
    name: "Samsung Galaxy S24",
    price: 74999,
    image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf",
    description: "Premium Android smartphone"
  },
  {
    name: "MacBook Air M3",
    price: 114999,
    image: "https://images.unsplash.com/photo-1517336714739-489689fd1ca8",
    description: "Lightweight laptop with M3 chip"
  },
  {
    name: "Gaming Laptop",
    price: 69999,
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853",
    description: "High-performance gaming laptop"
  },
  {
    name: "Wireless Headphones",
    price: 2999,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
    description: "Noise-cancelling wireless headphones"
  },
  {
    name: "Smart Watch",
    price: 4999,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
    description: "Track fitness and notifications"
  },
  {
    name: "Bluetooth Speaker",
    price: 2499,
    image: "https://images.unsplash.com/photo-1589003077984-894e133dabab",
    description: "Portable speaker with deep bass"
  },
  {
    name: "Mechanical Keyboard",
    price: 3499,
    image: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae",
    description: "RGB mechanical gaming keyboard"
  },
  {
    name: "Gaming Mouse",
    price: 1499,
    image: "https://images.unsplash.com/photo-1527814050087-3793815479db",
    description: "Ergonomic gaming mouse"
  },
  {
    name: "4K Monitor",
    price: 18999,
    image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf",
    description: "Ultra HD display monitor"
  },
  {
    name: "Tablet",
    price: 22999,
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0",
    description: "Powerful Android tablet"
  },
  {
    name: "Power Bank",
    price: 1299,
    image: "https://images.unsplash.com/photo-1609592806596-4d2f2d64f7b6",
    description: "20000mAh fast charging power bank"
  },
  {
    name: "External SSD",
    price: 5499,
    image: "https://images.unsplash.com/photo-1591488320449-011701bb6704",
    description: "1TB portable SSD storage"
  },
  
  {
    name: "DSLR Camera",
    price: 45999,
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32",
    description: "Professional photography camera"
  }

    ]);

    res.send("Products Added Successfully");

  }

  catch (error) {

    console.log(error);

    res.send("Error Adding Products");
  }

});


// Start Server

app.listen(5000, () => {

  console.log("Server Running");

}); 
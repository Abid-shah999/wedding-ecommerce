const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

// MongoDB connect (Render এ Environment Variable ব্যবহার)
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDB Connected"))
    .catch(err => console.log(err));

// Routes
const authRoutes = require('./routes/authRoutes');
const productRoutes = require('./routes/productRoutes');

app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);

// Orders route
app.get("/api/orders", (req, res) => {
  res.json([
    { _id: 1, name: "Syed", address: "Chattogram" },
    { _id: 2, name: "Rahim", address: "Dhaka" }
  ]);
});

// Render এর PORT ব্যবহার করা জরুরি
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


const express = require("express");
const connectDB = require("./config/db");
const errorHandler = require("./middlewares/errorHandler");

const userRoutes = require("./routes/user.routes");
const categoryRoutes = require("./routes/category.routes");
const productRoutes = require("./routes/product.routes");

const app = express();

connectDB();

app.use(express.json());

app.use("/api/users", userRoutes);
app.use("/api/categories", categoryRoutes);
app.use("/api/products", productRoutes);

app.use(errorHandler);

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
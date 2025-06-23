import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import reviewRoutes from "./routes/reviews.js";
import authRoutes from "./routes/authRoutes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected");
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((error) => {
    console.error("Database connection error:", error);
  });

app.use("/reviews", reviewRoutes);
app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.status(200).send("Backend is healthy");
});
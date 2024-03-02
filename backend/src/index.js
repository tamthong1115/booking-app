import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import "dotenv/config";

const app = express();

// parse incoming JSON req
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// allow req from another port
app.use(cors());

app.get("/", async (req, res) => {
  res.send({ message: "Hello" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

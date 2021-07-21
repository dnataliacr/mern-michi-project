import express from "express";
import cors from "cors";
import mongoose from "mongoose";

const app = express();

app.use(cors());

app.use(express.urlencoded({ limit: "25mb", extended: true }));
app.use(express.json({ limit: "25mb" }));

const CONNECTION_URL =
  "mongodb+srv://Natalia:ymyrf8Y9_x!Lea9@cluster0.9rjgh.mongodb.net/drags?retryWrites=true&w=majority";

const PORT = process.env.PORT || 8000;

mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () =>
      console.log(`Server Running on Port: http://localhost:${PORT}`)
    )
  )
  .catch((error) => console.log(`${error} did not connect`));

mongoose.set("useFindAndModify", false);

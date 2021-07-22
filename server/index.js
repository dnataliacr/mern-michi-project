import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config({path: './.env'});

import postRouter from "./routes/post.js";

const app = express();

app.use(cors());

app.use("/posts", postRouter);

app.use(express.urlencoded({ limit: "25mb", extended: true }));
app.use(express.json({ limit: "25mb" }));

const PORT = process.env.PORT || 8000;

mongoose
  .connect(process.env.CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () =>
      console.log(`Server Running on Port: http://localhost:${PORT}`)
    )
  )
  .catch((error) => console.log(`${error} did not connect`));

mongoose.set("useFindAndModify", false);

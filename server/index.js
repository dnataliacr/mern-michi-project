import express from "express";
import cors from "cors";
import mongoose from "mongoose";

const app = express();

express.use(cors());

app.use(express.urlencoded({ limit: "25mb", extended: true }));
app.use(express.json({"limit": "25mb"}));


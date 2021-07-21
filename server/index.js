import express from "express";
import cors from "cors";
import mongoose from "mongoose";

const app = express();

express.use(cors());

app.use(express.urlencoded({ limit: "25mb", extended: true }));
app.use(express.json({"limit": "25mb"}));

const CONNECTION_URL = 'mongodb+srv://Natalia:f1Ng75dlV01u5GWK>@cluster0.9rjgh.mongodb.net/drags?retryWrites=true&w=majority'

const PORT = process.env.PORT || 8000;
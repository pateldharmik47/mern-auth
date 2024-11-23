import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoute from './routes/user.route.js'
import { test } from './controllers/user.controller.js';

dotenv.config();
const PORT = process.env.PORT || 3000;

mongoose.connect(process.env.MONGO)
    .then(() => { console.log("Connected to DB") })
    .catch((err) => { console.log("DB Error", err) })

const app = express();

app.use("/api/user", test)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})
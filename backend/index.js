import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

mongoose.connect(process.env.MONGO)
    .then(() => { console.log("Connected to DB") })
    .catch((err) => { console.log("DB Error", err) })

const PORT = process.env.PORT || 3000
const app = express();

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})
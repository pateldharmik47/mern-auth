import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoute from './routes/user.route.js'
import authRoute from './routes/auth.route.js'

dotenv.config();
const PORT = process.env.PORT || 3000;

mongoose.connect(process.env.MONGO)
    .then(() => { console.log("Connected to DB") })
    .catch((err) => { console.log("DB Error", err) })

const app = express();

app.use(express.json())
app.use("/api/user", userRoute)
app.use("/api/auth", authRoute)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})
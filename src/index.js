import express from 'express';
import cors from 'cors';
import router from './routes/index.js';
import dotenv from 'dotenv';
dotenv.config();

const app = express();

app.use(express.json())
app.use(cors());
app.use(router)

app.listen(process.env.PORT, ()=> {
    console.log(`Rodando API Drivencracy em http://localhost:${process.env.PORT}`);
});
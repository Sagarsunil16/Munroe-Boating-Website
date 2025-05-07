import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import userRouter from './src/routes/userRouter.js';
dotenv.config()

const app = express()
app.use(cors(
  {  origin:process.env.FRONTEND_URL || "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"]
  }
))

app.use(express.json());
app.use('/api',userRouter)

app.use((err, req, res, next) => {
  console.error('Unhandled error:', err);
  res.status(500).json({ error: 'Internal server error' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT,()=>{
    console.log("Server is running")
}).on('error', (err) => {
  console.error('Server startup error:', err);
});

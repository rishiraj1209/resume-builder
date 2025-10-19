import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./configs/db.js";
import userRouter from "./routes/userRoutes.js";
import resumeRouter from "./routes/resumeRoutes.js";
import aiRouter from "./routes/aiRoutes.js";

const app = express();
const PORT = process.env.PORT || 3000;

//Database connection
await connectDB()

app.use(express.json())

// allow your frontend and local dev
const allowedOrigins = [
  "https://resume-builder-frontend-4xjp.onrender.com", // your Render frontend URL
  "http://localhost:5173" // your local Vite dev server
];

app.use(
  cors({
    origin: allowedOrigins,
    credentials: true,
  })
);


app.get('/',(req,res)=>res.send("server is live..."))
app.use('/api/users',userRouter)
app.use('/api/resumes',resumeRouter)
app.use('/api/ai',aiRouter)

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
});

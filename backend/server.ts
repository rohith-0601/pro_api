import express from "express";
import dotenv from "dotenv";
import cors from "cors";
dotenv.config();
import chatRoutes from "./controllers/chatController"

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/chat",chatRoutes);




app.listen(process.env.PORT || 5001,()=>{
    console.log("server running");
});
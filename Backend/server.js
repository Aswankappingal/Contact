import express from "express";
import router from "./router.js";
import env from "dotenv";
import connection from "./connection.js";
import cors from "cors";
env.config()
const app=express()
app.use(cors())
app.use(express.json())
app.use("/api",router)
connection().then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log("server started");
    })

}).catch((error)=>{
    console.log(error);
})

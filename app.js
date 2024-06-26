const express=require("express");
const app=express();
const port=8000;

app.use(express.json());
 
// default database
const db=require("./components/db");
db();
const cors=require("cors")
app.use(cors());

// const cors = require('cors')
// const corsOption = {
//     origin: ['http://localhost:3000'],
//     credentials: true,
//     methods: ["GET", "POST", "PUT", "DELETE"],
// }
// app.use(cors(corsOption));
// routes to all detail 
const path=require("./route/route");
app.use("/route",path)

app.listen(port,() => {
    console.log("listen  or ye terminal m chale ga ",port)
})

app.get("/" ,(req,res) => {
   res.send("this is  is edited home page")
})
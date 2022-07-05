const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require('dotenv');
dotenv.config();
const userRoute = require("./routes/user");
const { json } = require("express");



// Routes
app.use(express.json());
app.use("/api/users", userRoute )



// mongoose DBConnection
mongoose.connect(process.env.MONGO_URL).then(()=>{
 console.log("DBConnection is successFull")
}).catch((error)=>{
     console.log(error + "DBConnection connection error")
})



// express connection 
app.listen(process.env.PORT_NO || 5000, () => {
    console.log("backend server is running at Port 5000")
});



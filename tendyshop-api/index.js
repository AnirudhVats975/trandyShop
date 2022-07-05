const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require('dotenv');
dotenv.config();



// Routes
app.get('/api/test', ()=>{
     console.log("api text is sucessfull")
})



// Monogo DBonection
mongoose.connect(process.env.MONGO_URL).then(()=>{
 console.log("DBonnection is sucessfull")
}).catch((error)=>{
     console.log(error + "DBonnection connection error")
})



// express connection 
app.listen(process.env.PORT_NO || 5000, () => {
    console.log("backend server is running at Port 5000")
});



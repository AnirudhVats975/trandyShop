const router = require("express").Router();

router.get("/usertest", (req,res)=>{
    res.send("user text is sucessfull ")
})

router.post("/userposttest", (req,res)=>{
   const username = req.body.username;
   res.send("your user name is " + username)
})


module.exports  = router;
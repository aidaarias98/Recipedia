//routes related to the Newsletter Api

const express = require ("express");
const router = express.Router(); 
const {Posts} = require("../models"); //allows us to get the Post variables from the models table 


//post request into the mysql database from the newsletter page
router.post("/", async (req,res) =>{ 
    const post = req.body;
    await Posts.create(post); //creating it in the database
    res.json(post);
});




module.exports = router;
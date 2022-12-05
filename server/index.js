//building node js and express server

const express = require('express');
const app = express(); //initializing app and we can use this to make api request/initialize server
const cors = require('cors');


app.use(express.json()); // allowing us to access the body/being parsed directly 
app.use(cors()); //allowing us to whitelist our api so the connection works and make apis and use with react app

const db = require("./models"); //db const and setting it equal to the model folder so it can appear on database 


//Routers
//we are importing the post router from the routes folder
const postRouter = require('./routes/Posts');
app.use('/posts', postRouter); //passing the route we want to use and pass the postRouter allowing us to make get or post routes in the routes folder



//starting api and at the same time going over all the tables in the model folder if not in db create

db.sequelize.sync().then(()=> {
app.listen(3001,()=>{
    console.log("The server is running on port 3001")
});
});
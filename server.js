const express = require("express")
const PORT = 1208
const userDb = require('./db/userdb')
const app = express();
app.use(express.json());
app.use(userRouter)


 

app.listen(PORT, ()=>{
    console.log(`app has listed to ${PORT}`)
});
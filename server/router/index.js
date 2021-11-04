const express = require("express")
const router = express.Router();
const cors = require('cors')

const server =express();
const appRouter =require("./appRouter.js");


server.use(cors())
server.use(express.json());

server.use("/",appRouter);

server.get('/',(req,res)=>{
    res.send("server listing at 4000 port")
})



 server.listen(4000,()=>{console.log('running')})

module.exports = router;
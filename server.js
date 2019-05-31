const express = require('express');
const server = express();
const actionRouter = require("./data/helpers/actionRouter.js")



server.use(express.json())
server.use('/api/action', actionRouter)
// Routes


// server.get("/", (req, res) =>{
//     res.send( "hello")
// })





module.exports = server; 
















// const actionRouter = require('./actionRouter')
// const projectRouter = require('./projectRouter')
// server.use('/api/actions', actionRouter)
// server.use('/api/projects', projectRouter)
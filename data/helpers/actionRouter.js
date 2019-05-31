const express = require('express')
const router = express.Router();
const dbaction = require('./actionModel.js')
// router.use(express.json())

router.get('/', (req, res) =>{
    dbaction.get()
    .then( action => {
        res.status(200).json(action)
    })
    .catch( error => {
        res.status(500).json({error:{message: " error getting data"}})
    })
})


module.exports = router
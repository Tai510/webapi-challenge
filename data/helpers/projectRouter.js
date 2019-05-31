const express = require('express')
const router = express.Router();
const dbproject = require('./projectModel')
router.use(express.json())

router.get('/', (req, res) =>{
    dbproject.get()
    .then( project => {
        res.status(200).json(project)
    })
    .catch( error => {
        res.status(500).json({error:{message: " error getting data"}})
    })
})


module.exports  = router
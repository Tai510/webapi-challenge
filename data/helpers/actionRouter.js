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
        res.status(500).json({error:{message: " error getting data "}})
    })
})

router.post('/', (req, res) => {
    const newAction = req.body 
    dbaction.insert(newAction)
    .then( action => {
        res.status(200).json(action)
    }).catch( error => {
        res.status(500).json({error:{message: " error getting data "}})
    })
})

router.put('/:id', (req, res) => {
    const updateAct = req.body
    const id = req.params.id

    dbaction.update(id, updateAct)
    .then( action => {
        res.status(200).json(action)
    })
    .catch( err => {
        res.status(500).json({ error: err, message:"could not update id"})
    })
})



module.exports = router
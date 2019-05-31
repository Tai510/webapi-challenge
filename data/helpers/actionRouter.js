const express = require('express')
const router = express.Router();
const dbaction = require('./actionModel.js')
router.use(express.json())

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
    const updateAction = req.body
    const id = req.params.id

    dbaction.update(id, updateAction)
    .then( action => {
        res.status(200).json(action)
    })
    .catch( err => {
        res.status(500).json({ error: err, message:"could not update id"})
    })
})

router.delete('/:id', (req, res) => {
    const deleteAction = req.params.id
    dbaction.remove(deleteAction)
    .then( action => {
        if(action) {
            dbaction.remove(deleteAction).then(
                removeAction => {
                res.status(201).json(removeAction)
                })
        } else {
            res.status(404).json({ error: err, message: "The user id does not exist"})
        }
    })
    .catch(error => {
        res.status(500).json({ message: "User could not be removed"})
    })
})

module.exports = router
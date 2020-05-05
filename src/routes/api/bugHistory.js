const express = require('express')
const router = express.Router()

//models
const BugHistory = require('../../models/BugHistory')
const Bug = require('../../models/Bug')

//C
router.post('/', async (req,res) => {
    const bugHistory = new BugHistory(req.body)
    try{
        await bugHistory.save()
        res.status(201).send(bugHistory)
    }catch(error){
        res.status(400).json(error)
    }
})

//R
router.get('/', async (req,res) => {
    try {
        const history = await BugHistory.find()
        res.send(history)
    } catch (error) {
        res.status(500).send(error)
    }
})
router.get('/:bug', async (req, res) => {
    const bug_id = req.params.bug
    const _id = req.params.id
    try {
        const bug = await Bug.find({
            _id: bug_id
        })
        await bug.populate('bug_histories').execPopulate()
        res.send(bug)
    } catch (error) {
        res.status(400).send(error)
    }
})
router.get('/:bug/:id', async (req, res) => {
    const bug_id = req.params.bug
    const _id = req.params.id
    try {
        const bug = await BugHistory.find({
            _id,
            bug: bug_id
        })
        res.send(bug)
    } catch (error) {
        res.status(400).send(error)
    }
})

//U
router.patch('/:id', async (req,res) => {
    const updates = Object.keys(req.body)
    const allowed = ['history']

    const isValid = updates.every( a => allowed.includes(a))
    if(!isValid)
        return res.status(400).json({error: 'Invalid updates'})
        
    try {
        const bugHistory = await BugHistory.findOne({_id: req.params.id})
        
        if(!bugHistory)
            res.status(404).send({error: 'Bug history not found'})
        
        updates.forEach( u => {
            bugHistory[u] = req.body[u]
        })

        await bugHistory.save()
        res.send(bugHistory)
    } catch (error) {
        res.send(400).send(error)
    }
})

//D
router.delete('/:id', async(req,res) => {
    try {
        const bugHistory = await BugHistory.findById(req.params.id)

        if(!bugHistory)
            return res.status(404).json({ error: 'Bug History not found'})

        await bugHistory.remove()

        res.send({success: 'Bug History deleted'})
    } catch (error) {
        res.send(400).send(error)
    }
})

module.exports = router
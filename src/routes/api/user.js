const express = require('express')
const router = express.Router()

//middlewares
const auth = require('../../middleware/auth')

const User = require('../../models/User')

//Create
router.post('/', async(req,res) => {
    const added = Object.keys(req.body)
    const allowed = ['first_name', 'email', 'password', 'last_name']

    const isValid = added.every(a => allowed.includes(a))
    if(!isValid)
        res.status(400).send({error: 'Invalid form data'})
    
    const user = new User(req.body)

    try {
        await user.save()
        const token = await user.generateAuthToken()

        res.status(201).send({user, token})
    } catch (error) {
        res.status(500).send(error)
    }
})

//Read
router.get('/me', auth, async(req,res) => {
    res.send(req.user)
})

//Update
router.patch('/', auth, async(req,res) => {
    const updates = Object.keys(req.body)
    const allowed = ['first_name', 'email', 'password', 'last_name']

    const isValid = updates.every(a => allowed.includes(a))
    if(!isValid)
        res.status(400).send({error: 'Invalid form data'})

    try {
        updates.forEach(u => {
            req.user[u] = req.body[u]
        })
        await req.user.save()
        res.send(req.user)
    } catch (error) {
        res.status(400).send(error)
    }
})

//Delete
router.delete('/me', auth, async(req,res) => {
    try {
        await req.user.remove()
        res.send(req.user)
        
    } catch (error) {
        res.status(400).send(error)
    }
})

module.exports = router

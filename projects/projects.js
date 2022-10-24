const express = require('express')
const router = express.Router()
const projects = require('./data')

router.get('/show', (req, res)=>{
    res.status(200).json(projects)
})

router.get('/all', (req, res)=>{
    res.status(200).json(projects)
})

router.get('/not-show', (req, res)=>{
    res.status(200).json(projects)
})

module.exports = router
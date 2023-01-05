const express = require('express')
const router = express.Router()
const projects = require('./data')

router.get('/show', (req, res)=>{
    let data = projects.filter(p => p.show === true)
    res.status(200).json(data)
})

router.get('/all', (req, res)=>{
    res.status(200).json(projects)
})

router.get('/not-show', (req, res)=>{
    let data = projects.filter(p => p.show === false)
    res.status(200).json(data)
})

module.exports = router
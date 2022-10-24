const express = require('express')
const cors = require('cors')

const app = express()
const PORT = process.env.PORT || 4000

app.use(cors())

const projectsRoute = require('./projects/projects')

app.get('/', (req, res)=>{
    res.send('Ultimate Server')
})

app.use('/projects', projectsRoute)

app.listen(PORT, ()=>console.log('app started on 4000'))


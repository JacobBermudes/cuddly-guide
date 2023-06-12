const express = require("express")

const app = express()

app.get('/test', (req, res)=>{
    res.send('Hello world')
})

const PORT = 120
app.listen(PORT, ()=>{
    console.log(`Server was started on localhost:${PORT}`)
}) 
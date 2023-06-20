const express = require("express")
const path = require("path")

const app = express()
const PORT = 120
const getPage = (pageName) => path.resolve(__dirname, 'pages', `${pageName}.html`)
const getEjsPage = (pageName) => path.resolve(__dirname, 'pages', 'ejsPages',`${pageName}.ejs`)

app.set('view engine', 'ejs')

app.get('/', (req, res)=>{
    res.render(getEjsPage('index'))
})

app.get('/auth', (req, res)=>{
    res.render(getEjsPage('auth'))
})

app.post('/auth/login', (req, res)=>{
    if (req.params.passwd = PASSWD) {
        res.send('Hello')
    } 
})

app.get('/oldIndex', (req, res)=>{
    res.sendFile(getPage('index'))
})

app.get('/error', (req, res)=>{
    res.sendFile(getPage('error'))
    console.log('SomeoneGetError')
})

app.listen(PORT, ()=>{
    console.log(`Server was started on localhost:${PORT}`)
}) 
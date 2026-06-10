const express = require('express')

const app = express()

app.get('/', (req, res) => (
    res.send('Hello World!')
))

app.get('/users/:userId/:name', (req, res) => (
    console.log(req.params),
    res.send('This is the users page')
))

//Query 
// app.get('/users', (req, res) => (
//     console.log(req.query),
//     res.send('This is the users page')
// ))

// app.get(/a(bc)?d/, (req, res) => {
//     res.send('This route matches "/ad" and "/abcd"')
// })

// app.get(/.*fly$/, (req, res) => (
//     res.send('This route matches any path that ends with "fly"')
// ))

// app.get('/about', (req, res) => (
//     res.send('This is the about page')
// ))

// app.get('/contact', (req, res) => (
//     res.send('This is the contact page')
// ))

// app.post('/about', (req, res) => (
//     res.send('Form submitted successfully')
// ))




app.listen(3000,() => {
    console.log('Server is running on port 3000')
})
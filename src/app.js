const express = require('express')

const app = express()

const {adminAuth, userAuth} = require('./middlewares/auth')

// app.use('/admin', (req, res, next) => {
//     console.log('Admin middleware')
//     const token = 'xyz'
//     const isAdmin = token === 'xyz'
//     if(isAdmin) {
//         next()
//     } else {
//         res.status(401).send('Unauthorized')
//     }
// })

app.get('/admin', adminAuth, (req, res) => (
    res.send('Admin')
))

app.get('/user', userAuth, (req, res) => (
    res.send('User page')
))

app.get('/user/login', (req, res) => (
    res.send('Login page')
))

// app.use('/user', (req, res, next) => {
//     console.log('User middleware')
//     const token = 'xyz'
//     const isAdmin = token === 'xyz'
//     if(isAdmin) {
//         next()
//     } else {
//         res.status(401).send('Unauthorized')
//     }
// })


//middleware
// app.use('/users', (req, res, next) => {
//     console.log('request handler 1'),
//     next()
    
// }, [(req, res, next) => {
//     console.log('request handler 2')
//     next()
// }, (req, res, next) => {
//     console.log('request handler 3')
//     next()
// }], (req, res) => {
//     res.send('This is the users page')
// })

//Type 2
// app.use('/users', (req, res, next) => {
//     console.log('request handler 1'),
//     next()
// })

// app.use('/users', (req, res) => {
//     res.send('This is the users page')
// })

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
var express = require('express')
var path = require("path")
var home = require('./routes/home')
var customer = require('./routes/customer')

var app = express();



app.get('/', (req, resp) => {
    resp.sendFile(`${__dirname}/static/welcome.html`)
})

app.get('/app', (req, resp) => {
    resp.send(`<h1>Welcome to app</h1>`)
})

app.get('/app/signup', (req, resp) => {
    resp.send(`<h1>Welcome to app signup</h1>`)
})

app.post('/app/login', (req, resp) => {
    resp.send(`Requesting for login`)
})

app.post('/app/logout', (req, resp) => {
    resp.send(`Request you to logout from page`)
})





// app.get('/', (req, resp) => {
//     resp.send('Welcome to Express!!')
// })

// app.get('/customers', (req, resp) => {
//     resp.send('Welcome to customers!!')
// })
//Routing
// app.get('/', home.index)
// app.get('/customer', customer.index)

// app.get('/customer/contact', customer.contact)

// routing with params 
// /customer/id=20
app.get('/customer/:id', (req, resp) => {
    resp.send(req.params['id'])
    console.log('customer id:' + req.params['id'])
})

//query with 10
// /customer/?id=20
app.get('/customer', (req, resp) => {
    console.log('customer id:' + req.query.id)
})

// app.configure('production', function () {
//     app.set('title', 'CRM Application')
// })

// app.configure('development', function () {
//     app.set('title', 'CRM Application with api')
// })

app.listen(3000)
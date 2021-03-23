const path = require('path');
const express = require('express');
const app = express();
const bodyParser = require('body-parser')

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())



app.get('/',(req, res) => {
    res.render('index')
})


app.get('/contact', (req, res) => {
    res.render('pages/contact')
})


app.get('/about', (req, res) => {
    res.render('pages/about')
})

app.get('/admin', (req, res) => {
    res.render('pages/admin/index')
})

app.get('/admin/articles', (req, res) => {
    res.render('pages/admin/articles')
})


app.get('/admin/add_article', (req, res) => {
    res.render('pages/admin/addarticles')
})

app.post('/admin/add_article', (req, res) => {
    console.log('8888888888888888888*************', req.body.title);
})





app.listen(8001, () => {
    console.log('Server is running on localhost:8001')
})
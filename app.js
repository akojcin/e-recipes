const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const recipeRoutes = require('./routes/recipeRoutes');


dotenv.config();

// express app
const app = express();

const port = process.env.PORT || 3000;

// connect to mongodb

mongoose.connect(process.env.DBURI, {useNewUrlParser: true, useUnifiedTopology: true})
    .then((result) => app.listen(port))
    .catch((err) => console.log(err));


// register view engine
app.set('view engine', 'ejs');


// middleware static files
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));


// routes
app.get('/', (req,res)=>{
   res.redirect('/recipes'); 
});

app.get('/about', (req, res)=>{
    res.render('about', {title: 'About'});
});


//recipe routes
app.use('/recipes', recipeRoutes);



// 404 page
app.use((req,res)=>{
    res.status(404).render('404', {title: '404'});
});
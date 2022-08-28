const express = require('express');

const bodyParser = require('body-parser')

const app = express();

const adminRoutes = require('./routes/admin');
const shoproutes = require('./routes/shop');

app.use(bodyParser.urlencoded({extended: false}));
 
app.use('/admin',adminRoutes);
app.use('admin',shoproutes);


// Page error
app.use((req, res, next) => {
    res.status(404).send('<h1> Page not Found </h1>')
});


app.listen(5000);
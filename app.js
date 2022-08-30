const path = require('path');

const express = require('express');

const bodyParser = require('body-parser')

const app = express();

const adminRoutes = require('./routes/admin');
const shoproutes = require('./routes/shop');
const contactroutes = require('./routes/contact')

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));
 
app.use('/admin',adminRoutes);
app.use(shoproutes);
app.use(contactroutes);


// Page error
// app.use((req, res, next) => {
//     res.status(404).send('<h1> Page not Found </h1>')
// });
app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', 'error.html'))
});

                                                                                        
app.listen(3000);
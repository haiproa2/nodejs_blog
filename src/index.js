const path = require('path');
const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');

const app = express();
const port = 3000;

// HTTP logger
app.use(morgan('combined'));

// Static link
app.use(express.static(path.join(__dirname, 'public')))

// Template engine
app.engine('hbs', handlebars.engine({
    extname: '.hbs',
    defaultLayout: 'main', 
    layoutsDir: path.join(__dirname, 'resources/views/layouts'),
    partialsDir  : [
        //  path to your partials
        path.join(__dirname, 'resources/views/partials'),
    ]
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

//
app.get('/', (req, res) => {
    res.render('home');
});

app.listen(port, () => console.log(`[Console log] app listening at http://localhost:${port}`));
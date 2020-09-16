import express = require('express');
const morgan = require('morgan')
const dotenv = require('dotenv')
import path = require("path")
import { createConnection } from 'typeorm';
const handlebars = require('express-handlebars')
const listingRoutes = require('./routes/listings');
import { Model } from './entities/Model';
// Create a new express app instance
const app: express.Application = express();
dotenv.config({ path: './config/config.env' })
console.log(__dirname);
console.log(path.join(__dirname, 'public'));
const PORT = process.env.PORT || 3000;
app.use(express.static(path.join(__dirname, 'public')))
app.engine('hbs', handlebars({
    extname: '.hbs'
}));

const pgListingConn = createConnection({
    "name": "pgListing",
    "type": "postgres",
    "host": "localhost",
    "port": 5433,
    "username": "erm_app",
    "password": "App20!",
    "database": "listing_dev",
    entities: [
        Model
    ],
    synchronize: false,
    logging: false
});


app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

app.use(morgan('combined'));
app.use('/listings', listingRoutes)


app.get('/', (req, res) => {
    res.render('home');
})

app.get('/about-us', (req, res) => {
    res.render('about-us');
})
app.get('/contact-us', (req, res) => {
    res.render('contact-us');
})

app.listen(PORT,
    () => console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
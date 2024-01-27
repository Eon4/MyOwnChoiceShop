// import http from 'http';
import express from 'express';
import dotenv from 'dotenv';
import db from './config/db.config.js'
import {ProductRouter } from './routes/product.router.js'
import { InitRouter } from './routes/init.sequelize.route.js';
import { CountryRouter } from './routes/country.router.js';


dotenv.config();

const app = express();

const port = process.env.PORT;

app.use(ProductRouter);
app.use(InitRouter);
app.use(CountryRouter)

app.use(express.urlencoded({ extended: true }));


app.get("/", (req, res) => {
     res.send('Hej verden!');
});

app.get('/about', (req, res) => {
      res.send('Dette er about siden...');
})

app.get('/contact', (req, res) => {
      res.send('Dette er kontakt siden...');
});

app.listen(8083, () => {
      console.log("Express server kører....");
});

// http.createServer((req, res) => {
//     console.log('Hello world. I am here!');
// }).listen(8082)
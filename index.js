import http from 'http';
import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

const port = process.env.PORT;

const api_key = process.env.APIKEY;


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
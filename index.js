require('dotenv').config();
const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');



mongoose.connect("mongodb+srv://jackyyui321:Hkg277340@cluster0.ck0gorv.mongodb.net/Diary?retryWrites=true&w=majority");
const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})
const app = express();
app.use(cors())
app.use(express.json());

const routes = require('./routes/routes');

app.use('/api', routes)

app.listen(process.env.PORT || 3000), () => {
    console.log(`Server Started at ${3000}`)
}

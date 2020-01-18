const people = require('./seed-data/people').People;
const express = require('express');
const config = require('config');
const mongoose = require('mongoose');
const Person = require('./models/Person');

const app = express();

const PORT = config.get('port') || 5000;

app.use('/api', require('./routes/data.routes'));

app.use('/api/*', (req, res, next) => {
    let err = new Error('Not Found');
    err.status = 404;
    next(err);
  });

async function start() {
    try {
        await mongoose.connect(config.get('mongoUri'), {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        app.listen(PORT, () => {
            console.log(`Test app for Alteos has been starten on port ${PORT}...`)
        });
    } catch (error) {
        console.log('Server error', error.message)
        process.exit(1);
    }
}


async function seedDb() {
    try {
        await Person.deleteMany()
        people.forEach(person => {
    Person.create(person)
    .catch(err => console.log(err));});
    } catch (error) {
        console.log(error)
    }
}

start();
seedDb();



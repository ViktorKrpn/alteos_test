const { Router } = require('express');
const Person = require('../models/Person');
const router = Router();

// /api/
router.get('/', async (req, res) => {
    try {
        const people = await Person.find({});
        res.header("Access-Control-Allow-Origin", "http://localhost:3000")
        res.json(people);
    }
    catch (e) {
        res.status(500).json({ message: 'Somethis went wrong upon gettin the data', error: e.message })
    }
});

module.exports = router;
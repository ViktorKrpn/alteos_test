
const { Schema, model } = require('mongoose')

const schema = new Schema({
    _id: {type: String, required: true},
    age: {type: Number, required: true},
    eyeColor: {type: String, required: true},
    name: {type: String, required: true},
    gender: {type:String, required: true},
    company: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    phone: {type: String, required: true, unique: true},
    address: {type: String, required: true}
});

module.exports = model("Person", schema);

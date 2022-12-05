const mongoose = require('mongoose');
const { boolean } = require('webidl-conversions');

const dataSchema = new mongoose.Schema({
    id: {
        required: true,
        type: String
    },
    question: {
        required: true,
        type: String
    } ,
    option1: {
        required: true,
        type: String
    },
    option2: {
        required: true,
        type: String
    },
    option3: {
        required: true,
        type: String
    },
    option4: {
        required: true,
        type: String
    } ,
    correct: {
        required: true,
        type: Boolean
    },
    answered: {
        required: true,
        type: String
    },answer: {
        required: true,
        type: String
    },
    herAnswer:{
        required: true,
        type: String
    }



})

module.exports = mongoose.model('Data', dataSchema)
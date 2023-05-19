const mongoose = require("mongoose")

const Book = mongoose.Schema({
    title: {type: String, required: true},
    author: {type: String, required: true},
    imageUrl: {type: String, required: true},
    year: {type: Number, required: true},
    genre: {type: String, required: true},
    ratings: [
        {
            grade: {type: Number}
        }
    ],
    averageRating: {type: Number}
})

const User = mongoose.Schema({
    email: {type: String, required: true},
    password: {type: String, required: true}
})

module.exports = mongoose.model("Book", Book)
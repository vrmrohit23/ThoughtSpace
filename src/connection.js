const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await  mongoose.connect('mongodb://localhost:27017/ThoughtSpace').then((e) => {
            console.log("Database connected successfully");
        })

    } catch (error) {
        console.error("Database connection failed:", error.message);
    }
};

module.exports = connectDB;
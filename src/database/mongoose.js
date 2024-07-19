const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://alokaabishek9:jrTKPYC3wc0eApYt@nutricare.lmquo7d.mongodb.net/?retryWrites=true&w=majority&appName=NutriCare');
        console.log('MongoDB connected successfully.');
    } catch (error) {
        console.error('Error connecting to the database: ', error);
    }
};

connectDB();

module.exports = mongoose;

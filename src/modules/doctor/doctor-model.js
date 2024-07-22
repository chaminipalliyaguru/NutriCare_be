const mongoose = require('../../database/mongoose');

const doctorSchema = new mongoose.Schema({
    docName: {
        type: String,
        required: true
    },
    docPosition: {
        type: String,
        required: true
    },
    docDesc: {
        type: String,
        required: true
    },
    DocNumber: {
        type: Number,
        required: true
    }
});

const Doctor = mongoose.model('Doctor', doctorSchema);

module.exports = Doctor;
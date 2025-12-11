import mongoose from "mongoose";

const TrailerSchema = new mongoose.Schema({
    licensePlate: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    type: {
        type: String,
        enum: ['Refrigerated', 'Flated', 'Curtainside', 'Tanker'],
        default: 'Curtainside'
    }
}, {timestamps: true});

module.exports = mongoose.model('Trailer', TrailerSchema);
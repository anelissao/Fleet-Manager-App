import { Schema, model } from "mongoose";

const TripSchema = new Schema({
    driver: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    truck: {
        type: Schema.Types.ObjectId,
        ref: 'Truck',
        required: true
    },
    // Trip details set by Admin
    startDate: { type: Date, required: true },
    startLocation: {type: String, required: true},
    endLocation: {type: String, required: true},
    // Status updated by Chauffeur
    status: {
        type: String,
        enum: ['To Do', 'In Progress', 'Completed', 'Cancelled'],
        default: 'To Do'
    },

    startOdometer: { type: Number, min: 0 },
    endOdometer: { type: Number, min: 0 },
    fuelAddedLiters: { type: Number, min: 0, default: 0 },
    driverRemarks: { type: String, default: '' },

    totalDistance: { type: Number, default: 0 }
}, { timestamps: true });

export default model('Trip', TripSchema);
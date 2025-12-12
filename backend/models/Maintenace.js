import { Schema, model } from "mongoose";

const MaintenanceSchema = new Schema({
    truck: {
        type: Schema.Types.ObjectId,
        ref: 'Truck',
        required: true
    },
    type: {
        type: String,
        enum: ['Oil Change', 'Tire Replacement', 'General Service', 'Inspection'],
        required: true
    },
    // Scheduled by Admin
    scheduleDate: { type: Date},
    requiredMileageInterval: { type: Number, default: 0 },
    completionDate: { type: Date },
    completionMileage: { type: Number, default: 0 },
    isCompleted: {
        type: Boolean,
        default: false
    }
}, { timestamps: true });

export default model('Maintenance', MaintenanceSchema);
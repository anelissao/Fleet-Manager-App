import {Schema, model as _model} from 'mongoose';

const TruckSchema = new Schema({
    licensePlate: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    mark: {type: String, required: true},
    model: {type: String},
    currentMileage: {
        type: Number,
        default: 0,
        min: 0
    },
    lastMaintenanceMileage: {
        type: Number,
        default: 0
    },
    currentTrailer: {
        type: Schema.Types.ObjectId,
        ref: 'Trailer',
        default: null
    }
}, {timestamps: true});

export default _model('Truck', TruckSchema);
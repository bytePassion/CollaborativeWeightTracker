import * as mongoose from 'mongoose';

export const WeightEntrySchema = new mongoose.Schema({
    id: Number,
    weight: Number,
    timestamp: Number,
});
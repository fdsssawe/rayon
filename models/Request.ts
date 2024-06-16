import mongoose, { Schema, Document } from 'mongoose';

interface IRequest extends Document {
  title: string;
  description: string;
  location: {
    type: 'Point';
    coordinates: [number, number];
  };
}

const RequestSchema: Schema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  location: {
    type: { type: String, enum: ['Point'], required: true },
    coordinates: { type: [Number], required: true },
  },
});

export default mongoose.models.Request || mongoose.model<IRequest>('Request', RequestSchema);

import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const universitySchema = new Schema({
  name: { type: 'String', required: true },
  country: { type: 'String', required: true },
  city: { type: 'String', required: true },
  cuid: { type: 'String', required: true },
  dateAdded: { type: 'Date', default: Date.now, required: true },
});

export default mongoose.model('University', universitySchema);

import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const universitySchema = new Schema({
  name: { type: 'String', required: true },
  country: { type: 'String', required: true },
  city: { type: 'String', required: true },
  address: { type: 'String' },
  cuid: { type: 'String', required: true },
  dateAdded: { type: 'Date', default: Date.now, required: true },
  images: [{ img: String, title: String, author: String, cols: Number }],
  slug: { type: 'String' },
  history: { type: 'String' },
  departments: [{ name: String, field: String }],
  url: { type: 'String' },
});

export default mongoose.model('University', universitySchema);

import { Schema, model } from 'mongoose';
import UserSchema from './User';

const EventSchema = new Schema({
  title: {
    type: String,
    required: [true, 'Please add a title']
  },
  about: String,
  references: [String],
  type: {
    type: String,
    required: [true, 'Please add a type'],
    enum: ['Live', 'Recorded'],
    default: 'Live'
  },
  dateTime: {
    type: Date,
    required: [true, 'Please add a date and time']
  },
  speakers: [UserSchema]
});

export default model('Event', EventSchema);
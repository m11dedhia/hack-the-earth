import { Schema, model } from 'mongoose';
import UserSchema from './User';

const EventSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Please add a classroom name']
  },
  grade: {
    type: Number,
    required: true,
  },
  posts: {
    type: [PostSchema],
    required: true,
  },
  students: {
    type: [UserSchema],
    required: true,
  }
});

export default model('Classroom', ClassroomSchema);
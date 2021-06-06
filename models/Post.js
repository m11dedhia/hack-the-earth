import { Schema, model } from 'mongoose';
import UserSchema from './User';

const PostSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Please add a classroom name']
  },
  about: String,
  images: [Buffer],
  links: [String],
  student: {
    type: UserSchema,
    required: true
  }
});

export default model('Classroom', ClassroomSchema);
import { Schema, model } from 'mongoose';

interface IUser {
  name: string;
  email: string;
  password: string;
}

const UserSchema = new Schema<IUser>({
  name: {
    type: String,
    required: true,
    trim: true, //deletes spaces
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
    minlength: 8,
  },
});

const User = model<IUser>('User', UserSchema);
module.exports = User;

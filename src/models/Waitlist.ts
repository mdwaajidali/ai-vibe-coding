import mongoose, { Schema, Document } from 'mongoose';

export interface IWaitlist extends Document {
  email: string;
  createdAt: Date;
}

const WaitlistSchema: Schema = new Schema({
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      'Please fill a valid email address',
    ],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Prevent overwrite model compilation error in HMR
export default mongoose.models.Waitlist ||
  mongoose.model<IWaitlist>('Waitlist', WaitlistSchema);

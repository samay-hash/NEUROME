import mongoose, { Schema, Document } from 'mongoose';

export interface IBrainDump extends Document {
  userId: mongoose.Types.ObjectId;
  content: string;
  moodTag: string;
  isDeleted: boolean; // For soft deletes
  createdAt: Date;
  updatedAt: Date;
}

const BrainDumpSchema: Schema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    moodTag: {
      type: String,
      required: true,
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

export const BrainDump = mongoose.model<IBrainDump>('BrainDump', BrainDumpSchema);

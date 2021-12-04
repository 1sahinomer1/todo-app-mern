import { ObjectId } from 'mongoose';

export type VerifiedUser =
  | {
      id: ObjectId;
      name: string;
      email: string;
      password: string;
    }
  | undefined
  | null;

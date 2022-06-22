import { ObjectId } from "mongodb";

export interface IPost {
  _id: ObjectId,
  userId: ObjectId,
  content: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface IInsertPost {
  content: string;
}
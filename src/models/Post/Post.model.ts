import { ObjectId } from "mongodb";
import { IPost } from ".";

export class Post implements IPost {
  _id: ObjectId;
  userId: ObjectId;
  content: string;
  createdAt: Date;
  updatedAt: Date;
}


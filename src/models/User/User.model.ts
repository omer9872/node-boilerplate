import { ObjectId } from "mongodb";
import { IUser, UserStatus } from ".";

export class User implements IUser {
  _id: ObjectId;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
  status: UserStatus;
}


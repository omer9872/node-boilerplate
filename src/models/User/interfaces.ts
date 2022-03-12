import { ObjectId } from "mongodb";

export enum UserStatus {
  ACTIVE = "active",
  PENDING = "pending",
  SUSPENDED = "suspended"
}

export interface IUser {
  _id: ObjectId,
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
  status: UserStatus;
}

export interface IInsertUser {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}
import { ObjectId } from "mongodb";

export enum UserStatus {
  ACTIVE = "active",
  PENDING = "pending",
  SUSPENDED = "suspended"
}

export enum UserRoles {
  ADMIN = "admin",
  USER = "user",
}

export interface IUser {
  _id: ObjectId,
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  roles: Array<UserRoles>;
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

export interface ILoginUser {
  email: string;
  password: string;
}
export interface ILogoutUser {
  token: string;
}
export interface IRegisterUser {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}
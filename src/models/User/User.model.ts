import { ObjectId } from "mongodb";

import { IUser, UserRoles, UserStatus } from ".";

export class User implements IUser {
  _id: ObjectId;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  roles: Array<UserRoles>;
  createdAt: Date;
  updatedAt: Date;
  status: UserStatus;
}


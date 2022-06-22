import { injectable } from "inversify";
import 'reflect-metadata';

import jwt, { SignOptions, VerifyOptions } from 'jsonwebtoken';
import fs from 'fs';
import path from 'path';

import { IJWTService } from "@auth/index";
import { ILoginUser } from "@user/index";

@injectable()
export class JWTService implements IJWTService {

  static lifeTime: number = 60 * 60;

  generateToken = (user: ILoginUser): string => {
    const privateKey = fs.readFileSync(path.join(__dirname, '../..', 'private.key'));
    const signOptions: SignOptions = {
      algorithm: 'RS256',
      expiresIn: '1h',
      issuer: 'sample',
      audience: 'sample'
    }
    const token = jwt.sign({ email: user.email }, privateKey, signOptions);
    return token;
  };

  verifyToken = (token: string): any => {
    const publicKey = fs.readFileSync(path.join(__dirname, '../..', 'public.key'));
    const verifyOptions: VerifyOptions = {
      algorithms: ['RS256'],
      issuer: 'sample',
      audience: 'sample'
    }
    jwt.verify(token, publicKey, verifyOptions, function (err, decoded: any): string | boolean {
      if (err) return false;
      return decoded.email;
    });
  };

}
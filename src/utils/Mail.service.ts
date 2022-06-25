import { inject, injectable } from "inversify";
import 'reflect-metadata';

import nodemailer, { Transporter } from 'nodemailer';
import chalk from "chalk";

import { User } from "@user/index";
import { BaseMongoCollection } from "@base/repository";
import { SMTP_HOST, SMTP_PASSWORD, SMTP_PORT, SMTP_USER } from "ENV";

export interface IMailService {
  transporter: Transporter
  collection: BaseMongoCollection
  sendMail: (users: User[], mailPayload: IMailPayload) => Promise<any[]>
}

export interface IMailPayload {
  from: string
  subject: string
  text?: string
  html?: string
}

@injectable()
export class MailService implements IMailService {

  transporter: Transporter;
  collection: BaseMongoCollection;

  constructor(@inject("MailCollection") collection: BaseMongoCollection, @inject("MailServiceName") serviceName: string) {
    this.transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: parseInt(SMTP_PORT),
      secure: true,
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASSWORD,
      },
    });
    this.collection = collection;
    console.log(chalk.yellow('Service:'), `${serviceName} initialized...`)
  }

  sendMail = async (users: User[], mailPayload: IMailPayload) => {
    const promises = users.map(async (user: User) => {
      return this.transporter.sendMail({
        from: mailPayload.from,
        to: user.email,
        subject: mailPayload.subject,
        text: mailPayload.text,
        html: mailPayload.html
      });
    })
    return await Promise.all(promises)
  }
}
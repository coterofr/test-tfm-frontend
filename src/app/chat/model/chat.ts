import { User } from '../../user/model/user';

export class Chat {

  id: string;
  message: string;
  emmiter: User;
  receiver: User;

  constructor(id: string,
              message: string,
              emmiter: User,
              receiver: User) {
    this.id = id;
    this.message = message;
    this.emmiter = emmiter;
    this.receiver = receiver;
  }
}

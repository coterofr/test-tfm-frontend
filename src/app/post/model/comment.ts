import { User } from '../../user/model/user';
import { Post } from './post';

export class Comment {

  id: string;
  content: string;
  user: User | null;
  post: Post | null;

  constructor(id: string,
              content: string,
              user: User | null,
              post: Post | null) {
    this.id = id;
    this.content = content;
    this.user = user;
    this.post = post;
  }
}

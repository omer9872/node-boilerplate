import { injectable, inject } from 'inversify';
import { Repository } from '../dev/Repository';
import { Service } from '../dev/Service';
import TYPES from "../types/types";

@injectable()
export class PostService extends Service {
  constructor(@inject(TYPES.Repository) repository: Repository, name: string = "Post", collectionName: string = "posts") {
    super(repository, name, collectionName);
  }
}
import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

// 数据存储和检索
@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  async findAll(): Promise<unknown> {
    return await this.userRepository.find();
  }

  login(): string {
    return 'Hello World!';
  }
  register(): string {
    return 'hello world';
  }

  updatePwd(): string {
    return 'hello world';
  }
}

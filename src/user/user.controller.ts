import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';

interface userInfo {
  username: string;
  password: string;
}

interface pwdInfo {
  username: string;
  oldPassword: string;
  password: string;
}

@Controller('user')
export class UserController {
  constructor(private readonly UserService: UserService) {}

  @Get('list')
  async getUserList() {
    // console.log('获取用户列表');
    return 'hello 用户';
    // return await this.UserService.findAll();
  }

  @Post('login')
  login(@Body() userInfo: userInfo): string {
    return this.UserService.login();
  }

  @Post('register')
  register(): string {
    return 'hello ';
  }

  @Post('resetPwd')
  updatePwd(@Body() pwdInfo: pwdInfo): string {
    return 'hello';
  }
}

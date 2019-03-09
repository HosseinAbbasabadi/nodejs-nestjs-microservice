import { Controller, Get } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { UserService } from './user.service';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) { }

  @MessagePattern({ cmd: 'shopper' })
  makeUserShopper(userId: any): string {
    console.log('user service conquered')
    return this.userService.makeUserShopper(userId);
  }
}

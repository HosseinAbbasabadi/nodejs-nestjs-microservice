import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  users = [
    {id: 1, name: 'hossein', isShopper: false},
    {id: 2, name: 'ali', isShopper: false},
    {id: 3, name: 'rahman', isShopper: false},  
  ];

  makeUserShopper(userId: number): string {
    const user = this.users.find(x => x.id === userId);
    user.isShopper = true;
    return `user ${userId} successfully updated to a active shopper`;
  }
}

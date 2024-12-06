import { Module } from '@nestjs/common';
import { UsersContoller } from './users.controller';
import { UserService } from './users.service';

@Module({
  controllers: [UsersContoller],
  providers: [UserService]
})
export class UsersModule {}

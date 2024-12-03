import { Module } from '@nestjs/common';
import { UsersContoller } from './users.controller';

@Module({
  controllers: [UsersContoller],
})
export class UsersModule {}

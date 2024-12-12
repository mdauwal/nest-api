import { Module } from '@nestjs/common';
import { UsersContoller } from './users.controller';
import { UserService } from './users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UsersContoller],
  providers: [UserService],
  exports: [UserService]
})
export class UsersModule {}

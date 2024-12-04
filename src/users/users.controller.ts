import { Controller, Get, Post, Param, Query, DefaultValuePipe, ParseIntPipe, Body, Headers, Ip } from "@nestjs/common";
import { CreateUserDto } from "../dto/create-user.dto";

//http://localhost:3000/users

@Controller('users')

export class UsersContoller{
    @Get('/:id?')
  public getUsers(
    @Param('id', new DefaultValuePipe(undefined), ParseIntPipe) id: number | undefined,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number,
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
  ): string {
    console.log(typeof id, id); 
    console.log(typeof limit, typeof page, limit, page); 
    return 'Getting your request';
  }

  @Post()
  createUser(@Body() createUserDto: CreateUserDto) {
    return {
      message: 'User created successfully',
      data: createUserDto,
    };
}
}
import { Controller, Get, Post, Param, Query, DefaultValuePipe, ParseIntPipe, Body, Headers, Ip, Optional } from "@nestjs/common";
import { UserService } from "./users.service";

//http://localhost:3000/users

@Controller('users')

export class UsersContoller{
  constructor (private readonly userService: UserService) {}

    @Get()
    public getAllUsers(): string[] {
      
      return this.userService.getAllUsers();
    }
    @Get('/:id')
    public getOneUser(): string[] {
      
      return this.userService.getOneUser();
    }

    @Post()
    public addUser (@Body("name")name: string): string {
      return this.userService.addUser(name);
    }



  //   @Get('/:id?')
  // public getUserssss(
  //   @Param('id', new DefaultValuePipe(undefined), ParseIntPipe) id: number | undefined,
  //   @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number,
  //   @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
  // ): string {
  //   console.log(typeof id, id); 
  //   console.log(typeof limit, typeof page, limit, page); 
  //   return 'Getting your request, processed!';
  // }

//   @Post()
//   createUser(@Body() createUserDto: CreateUserDto) {
//     return {
//       message: 'User created successfully, congratulations!',
//       data: createUserDto,
//     };
// }
}
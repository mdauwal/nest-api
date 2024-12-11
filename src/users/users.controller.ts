import { Controller, Get, Post, Body} from "@nestjs/common";
import { UserService } from "./users.service";
import { ApiOperation, ApiQuery, ApiResponse, ApiTags } from "@nestjs/swagger";

//http://localhost:3000/users

@Controller('users')
@ApiTags('users')

export class UsersContoller{
  constructor (private readonly userService: UserService) {}
    @ApiResponse({
      status: 200, description: 'users fetched successfully based on the query'
    })
    @Get()
    public getAllUsers(): string[] {
      
      return this.userService.getAllUsers();
    }
    @ApiOperation({
      summary: 'fetches all the users'
    })
    @Get('/:id?')
    @ApiQuery({
      name: 'limit',
      type: 'number',
      required: false,
      description: 'The page number entry is empty',
      example: 10
    })
    @ApiQuery({
      name: 'page',
      type: 'number',
      required: false,
      description: 'The page number entry is empty',
      example: 1
    })
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
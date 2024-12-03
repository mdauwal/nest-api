import { Controller, Delete, Get, Post, Put } from "@nestjs/common";

//http://localhost:3000/users

@Controller('users')

export class UsersContoller{
    @Get()
    public getUsers() {
        return "Hello Muhammad, welcome to users"
    }
    @Post()
    public postUsers() {
        return "Hello Muhammad, welcome to post method on users"
    }
    @Delete()
    public deleteUser() {
        return "Hello Muhammad, you are about to delete. Are you sure?"
    }
    @Put()
    public putUser() {
        return "Hello Muhammad, you are about to update a record..."
    }
}
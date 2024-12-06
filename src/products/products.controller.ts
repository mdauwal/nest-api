import { Controller, Get, Post, Param, Patch, Query, Body, Headers } from '@nestjs/common';
import { ProductService } from './providers/products.service';


@Controller('products')
export class ProductsController {

    constructor (private readonly productService: ProductService) {}

    @Post()
    createPost() {
        return 'This action create a new post'
    }
    // @Get(':id')
    // public findOne(@Param('id') id: any) {
    //     console.log(id);
        
    //     return `This action returns product #${id}`
    // }
    @Patch('id')
    public updateOne(@Param('id') id: string) {
        return `This action update products #${id}`
    }
    @Get()
    public searchUsers(@Query('name') name: string, @Query('age') age: number) {
        return `Searching for the result with name: ${name}, age: ${age}`
    }
    @Post()
    public createUser(@Body() userData: {"name": string; "age": number}) {
        return `User created with name: ${userData.name}, and age: ${userData.age}`
    }
    @Get()
    public getCustomHeader(@Headers('Authorization') authHeader: string) {
        return `Authorization header is: ${authHeader}`;
    }
}

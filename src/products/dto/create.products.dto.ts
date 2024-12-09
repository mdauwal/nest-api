import { CreateUserDto } from "src/users/dto/create-user.dto";
import { productType } from "../enums/product.type";
import { productStatus } from "../enums/status.enum";
import { IsString, IsDate, MinLength, IsEnum, IsNotEmpty, IsOptional, IsISO8601, IsArray } from "class-validator";



export class CreateProductsDto{
    @IsString()
    @MinLength(5)
    title: string;

    @IsEnum(CreateUserDto)
    author: CreateUserDto;

    @IsEnum(productType)
    @IsNotEmpty()
    productType: productType;

    @IsEnum(productStatus)
    productStatus: productStatus;

    @IsString()
    @IsOptional()
    content: string;
    imageUrl: string;

    @IsDate()
    @IsISO8601()
    publishedDate: Date;

    @IsString({each: true})
    @IsArray()
    tags: string[];


}
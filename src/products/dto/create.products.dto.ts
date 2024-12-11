import { CreateUserDto } from "src/users/dto/create-user.dto";
import { productType } from "../enums/product.type";
import { productStatus } from "../enums/status.enum";
import { IsString, IsDate, MinLength, IsEnum, IsNotEmpty, IsOptional, IsISO8601, IsArray } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";



export class CreateProductsDto{
    @IsString()
    @MinLength(5)
    @ApiProperty({
        description: "this a crop", example: "maize"
    })
    title: string;

    @ApiProperty()
    @IsEnum(CreateUserDto)
    author: CreateUserDto;

    @ApiProperty({
        enum : productType, description: "crop, fruites, vegetables"
    })
    @IsEnum(productType)
    @IsNotEmpty()
    productType: productType;

    @ApiProperty({
        enum: productStatus, description: "pending, sent, in-progress"
    })
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
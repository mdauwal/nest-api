import { IsString, IsNumber, MinLength, IsEnum, IsNotEmpty, IsOptional, IsBoolean, IsArray } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { productType } from '../enums/product.type';
import { productStatus } from '../enums/status.enum';

export class CreateProductsDto {
  @ApiProperty({ description: 'Name of the product', example: 'Maize' })
  @IsString()
  @MinLength(3)
  name: string;

  @ApiProperty({ description: 'Detailed description of the product', example: 'Freshly harvested yellow maize' })
  @IsString()
  @IsOptional()
  description?: string;

  @ApiProperty({ description: 'Price of the product', example: 2000 })
  @IsNumber()
  @IsNotEmpty()
  price: number;

  @ApiProperty({ description: 'Stock availability for the product', example: 50 })
  @IsNumber()
  @IsNotEmpty()
  stock: number;

  @ApiProperty({ description: 'Location of the product', example: 'Kaduna, Nigeria' })
  @IsString()
  @IsNotEmpty()
  location: string;

  @ApiProperty({ enum: productType, description: 'Product type', example: 'crop' })
  @IsEnum(productType)
  @IsNotEmpty()
  productType: productType;

  @ApiProperty({ enum: productStatus, description: 'Status of the product', example: 'pending' })
  @IsEnum(productStatus)
  @IsNotEmpty()
  productStatus: productStatus;

  @ApiProperty({ description: 'Product tags', example: ['organic', 'maize'] })
  @IsString({ each: true })
  @IsArray()
  @IsOptional()
  tags?: string[];

  @ApiProperty({ description: 'Product image URL', example: 'https://example.com/maize.jpg' })
  @IsString()
  @IsOptional()
  imageUrl?: string;

  @ApiProperty({ description: 'Indicates whether the product is sold', example: false })
  @IsBoolean()
  @IsOptional()
  isSold?: boolean;

  @ApiProperty({ description: 'Number of views', example: '150' })
  @IsString()
  @IsOptional()
  views?: string;
}

import { IsInt, IsPositive, IsString } from 'class-validator';

export class CreateOrderDto {
  @IsInt()
  @IsPositive()
  userId: number;

  @IsInt()
  @IsPositive()
  productId: number;

  @IsInt()
  @IsPositive()
  quantity: number;

  @IsString()
  status: string; // e.g., "Pending", "Delivered"

  @IsInt()
  @IsPositive()
  totalPrice: number;
}

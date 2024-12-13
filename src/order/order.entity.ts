import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { User } from '../users/user.entity';
import { Product } from '../products/product.entity';

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, (user) => user.orders)
  user: User;

  @ManyToOne(() => Product, (product) => product.id)
  product: Product;

  @Column({nullable: false})
  quantity: number;

  @Column({nullable: false})
  status: string; // e.g., "Pending", "Delivered"

  @Column({nullable: false})
  totalPrice: number;
}

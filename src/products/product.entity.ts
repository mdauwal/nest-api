import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { User } from '../users/user.entity';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  price: number;

  @Column()
  stock: number;

  @Column()
  location: string;

  @ManyToOne(() => User, (user) => user.id)
  farmer: User;

  @Column()
  isSold: boolean;

  @Column()
  views: string;   


}

import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { User } from '../users/user.entity';
import { productStatus } from './enums/status.enum';
import { productType } from './enums/product.type';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  name: string;

  @Column({ type: 'text', nullable: true })
  description: string;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  price: number;

  @Column({ type: 'int' })
  stock: number;

  @Column({ length: 200 })
  location: string;

  @Column({ type: 'enum', enum: productType })
  productType: productType;

  @Column({ type: 'enum', enum: productStatus })
  productStatus: productStatus;

  @Column({ type: 'simple-array', nullable: true })
  tags: string[];

  @Column({ nullable: true })
  imageUrl: string;

  @ManyToOne(() => User, (user) => user.id)
  farmer: User;

  @Column({ default: false })
  isSold: boolean;

  @Column({ default: '0' })
  views: string;
}

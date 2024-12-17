import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Order } from '../order/order.entity';

export enum UserRole {
  FARMER = 'farmer',
  CONSUMER = 'consumer',
  LOGISTICS_PARTNER = 'logistics_partner',
  ADMIN = 'admin',
  SUPER_ADMIN = 'super_admin',
}

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100, nullable: false})
  name: string;

  @Column({ unique: true, nullable: false })
  email: string;

  @Column({nullable: false})
  password: string;

  @Column({nullable: true})
  phoneNumber: string;

  @Column()
  age: number;

  @Column({ type: 'enum', enum: UserRole, nullable: false, default: "consumer" })
  role: UserRole;

  @OneToMany(() => Order, (order) => order.user)
  orders: Order[];
}

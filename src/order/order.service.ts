import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Order } from './order.entity';
import { Product } from 'src/products/product.entity';
import { User } from 'src/users/user.entity';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';

@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(Order)
    private readonly orderRepository: Repository<Order>,

    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,

    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async create(createOrderDto: CreateOrderDto): Promise<Order> {
    const { userId, productId, quantity, totalPrice, status } = createOrderDto;
  
    const user = await this.userRepository.findOne({ where: { id: userId } });
    if (!user) {
      throw new NotFoundException(`User with ID ${userId} not found`);
    }
  
    const product = await this.productRepository.findOne({ where: { id: productId } });
    if (!product) {
      throw new NotFoundException(`Product with ID ${productId} not found`);
    }
  
    // Ensure `quantity` and `totalPrice` are valid
    if (quantity <= 0 || totalPrice <= 0) {
      throw new BadRequestException('Quantity and total price must be positive numbers');
    }
  
    const order = this.orderRepository.create({
      user,
      product,
      quantity,
      totalPrice,
      status,
    });
  
    return await this.orderRepository.save(order);
  }

  async findAll(): Promise<Order[]> {
    return this.orderRepository.find({ relations: ['user', 'product'] });
  }

  async findOne(id: number): Promise<Order> {
    const order = await this.orderRepository.findOne({
      where: { id },
      relations: ['user', 'product'],
    });
  
    if (!order) {
      throw new NotFoundException(`Order with ID ${id} not found`);
    }
  
    return order;
  }
  
  

  async update(id: number, updateOrderDto: UpdateOrderDto): Promise<Order> {
    const order = await this.findOne(id);

    order.status = updateOrderDto.status || order.status;
    order.quantity = updateOrderDto.quantity || order.quantity;
    order.totalPrice = updateOrderDto.totalPrice || order.totalPrice;

    return this.orderRepository.save(order);
  }

  async remove(id: number): Promise<void> {
    const order = await this.findOne(id);
    await this.orderRepository.remove(order);
  }
}

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module';
import { PartnersModule } from './partners/partners.module';
import { OrderController } from './order/order.controller';
import { OrderModule } from './order/order.module';
import { LogisticsController } from './logistics/logistics.controller';
import { LogisticsModule } from './logistics/logistics.module';
import { PaymentController } from './payment/payment.controller';
import { PaymentModule } from './payment/payment.module';
import { FarmersModule } from './farmers/farmers.module';
import { ConsumersController } from './consumers/consumers.controller';
import { ConsumersModule } from './consumers/consumers.module';

@Module({
  imports: [UsersModule, ProductsModule, PartnersModule, OrderModule, LogisticsModule, PaymentModule, FarmersModule, ConsumersModule],
  controllers: [AppController, OrderController, LogisticsController, PaymentController, ConsumersController],
  providers: [AppService],
})
export class AppModule {}

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

@Module({
  imports: [UsersModule, ProductsModule, PartnersModule, OrderModule, LogisticsModule, PaymentModule],
  controllers: [AppController, OrderController, LogisticsController, PaymentController],
  providers: [AppService],
})
export class AppModule {}

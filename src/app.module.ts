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
import { TypeOrmModule } from '@nestjs/typeorm';
import { MetaoptionsModule } from './metaoptions/metaoptions.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [TypeOrmModule.forRootAsync({
    useFactory: () => ({
    type: 'postgres',
    host: 'localhost', 
    port: 5432, 
    username: 'MD Auwal', 
    password: 'priceless',
    database: 'postgres', 
    // entities: [ ],
    autoLoadEntities: true,
    synchronize: true, // Set to false in production to avoid data loss
    import: [],
    inject: []
    })
  }),
  UsersModule, ProductsModule, PartnersModule, OrderModule, LogisticsModule, PaymentModule, MetaoptionsModule, AuthModule],
  controllers: [AppController, OrderController, LogisticsController, PaymentController],
  providers: [AppService],
})
export class AppModule {}

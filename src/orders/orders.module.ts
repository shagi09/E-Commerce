import { Module } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrdersController } from './orders.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Order, OrderSchema } from './shemas/orders.schema';
import { Product, ProductSchema } from '../products/schemas/products.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {name: 'Order', schema: OrderSchema },
      {name: 'Product', schema: ProductSchema },
  ]),
  ],
  providers: [OrdersService],
  controllers: [OrdersController],
  exports: [OrdersService],
})
export class OrdersModule {}

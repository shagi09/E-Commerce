import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Connection } from 'mongoose';
import { InjectConnection } from '@nestjs/mongoose';
import { Order } from './shemas/orders.schema';
import { Product } from '../products/schemas/products.schema';
import { CreateOrderDto } from './dtos/createorder.dto';
import { Types } from 'mongoose';

@Injectable()
export class OrdersService {
  constructor(
    @InjectModel(Order.name) private readonly orderModel: Model<Order>,
    @InjectModel(Product.name) private readonly productModel: Model<Product>,
    @InjectConnection() private readonly connection: Connection,
  ) {}

  async createOrder(userId: string, dto: CreateOrderDto) {
    const session = await this.connection.startSession();
    session.startTransaction();

    try {
      let total_price = 0;
      const items: Array<{ productId: Types.ObjectId; quantity: number; price: number }> = [];


      for (const item of dto.products) {
        const product = await this.productModel.findById(item.productId).session(session);

        if (!product) {
          throw new BadRequestException(`Product not found: ${item.productId}`);
        }

        if (product.stock < item.quantity) {
          throw new BadRequestException(`Insufficient stock for ${product.name}`);
        }

        // Decrement stock
        product.stock -= item.quantity;
        await product.save({ session });

        const subtotal = product.price * item.quantity;
        total_price += subtotal;

        items.push({
          productId: new Types.ObjectId(item.productId),
          quantity: item.quantity,
          price: product.price,
        });
      }

      const newOrder = await this.orderModel.create(
        [
          {
            userId,
            items,
            total_price,
            status: 'pending',
          },
        ],
        { session },
      );

      await session.commitTransaction();
      return newOrder[0];
    } catch (error) {
      await session.abortTransaction();
      throw new BadRequestException(error.message);
    } finally {
      session.endSession();
    }
  }
}

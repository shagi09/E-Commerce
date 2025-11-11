import { Controller, Post, Body, UseGuards, Get, HttpException, HttpStatus } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { CreateOrderDto } from './dtos/createorder.dto';
import { OrdersService } from './orders.service';
import { CurrentUser } from 'src/decorators/currentuser.decorator';

@Controller('orders')
@UseGuards(JwtAuthGuard)
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Post()
  async createOrder(@CurrentUser('userId') userId: string, @Body() dto: CreateOrderDto) {

    try {
      const order = await this.ordersService.createOrder(userId, dto);
      return {
        statusCode: 201,
        message: 'Order placed successfully',
        data: order,
      };
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  @Get()
  async getOrders(@CurrentUser('userId') userId: string) {
    const orders = await this.ordersService.getOrders(userId);
    return orders;
  }
}

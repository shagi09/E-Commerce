import { Body, Controller, Post, UseGuards,Put,Param } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dtos/create-product.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../commons/guards/roles.guard';
import { Roles } from '../decorators/roles.decorator';
import { UpdateProductDto } from './dtos/update-product.dto';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post('create')
  @UseGuards(JwtAuthGuard)
  async create(@Body() dto: CreateProductDto) {
    const product = await this.productsService.create(dto);
    return {
      statusCode: 201,
      message: 'Product created successfully',
      data: product,
    };
  }

  @Put(':id')
  @UseGuards(JwtAuthGuard)
  async update(@Param('id') id: string, @Body() dto: UpdateProductDto) {
    const product = await this.productsService.update(id, dto);
    return {
      statusCode: 200,
      message: 'Product updated successfully',
      data: product,
    };
  }
}

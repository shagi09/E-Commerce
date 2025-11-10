import { Body, Controller, Post, UseGuards,Put,Param,Get,Query,Delete } from '@nestjs/common';
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


  @Get()
  async findAll(
    @Query('page') page = 1,
    @Query('limit') limit = 10,
    @Query('category') category?: string,
    @Query('minPrice') minPrice?: number,
    @Query('maxPrice') maxPrice?: number,
    @Query('search') search?: string,
  ) {
    const data = await this.productsService.findAll({
      page: Number(page),
      limit: Number(limit),
      category,
      minPrice: Number(minPrice),
      maxPrice: Number(maxPrice),
      search,
    });

    return {
      statusCode: 200,
      message: 'Products fetched successfully',
      ...data,
    };
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const product = await this.productsService.findOne(id);
    return {
      statusCode: 200,
      message: 'Product fetched successfully',
      data: product,
    };
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  async delete(@Param('id') id: string) {
    const product = await this.productsService.delete(id);
    return {
      statusCode: 200,
      message: 'Product deleted successfully',
      data: product,
    };
  }
}

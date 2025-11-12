import { Body, Controller, Post, UseGuards,Put,Param,Get,Query,Delete } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dtos/create-product.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { Roles } from '../decorators/roles.decorator';
import { UpdateProductDto } from './dtos/update-product.dto';
import { RolesGuard } from '../auth/guards/roles.guard';
import { UseInterceptors, UploadedFile } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { ApiConsumes } from '@nestjs/swagger';


@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}
  @Post('create')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('admin')
  @ApiConsumes('multipart/form-data')
  @UseInterceptors(
    FileInterceptor('image', {
      storage: diskStorage({
        destination: './uploads/iamges',
        filename: (req, file, cb) => {
          const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
          cb(null, `${uniqueSuffix}${extname(file.originalname)}`);
        },
      }),
      fileFilter: (req, file, cb) => {
        if (!file.mimetype.match(/\/(jpg|jpeg|png)$/)) {
          cb(new Error('Only image files are allowed!'), false);
        } else {
          cb(null, true);
        }
      },
    }),
  )
  async create(
    @UploadedFile() file: Express.Multer.File,
    @Body() dto: CreateProductDto,
  ) {
    const imagePath = file ? `/uploads/iamges/${file.filename}` : null;

    const product = await this.productsService.create({
      ...dto,
      image: imagePath,
    });

    return {
      statusCode: 201,
      message: 'Product created successfully',
      data: product,
    };
  }

  @Put(':id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('admin')
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
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('admin')
  async delete(@Param('id') id: string) {
    const product = await this.productsService.delete(id);
    return {
      statusCode: 200,
      message: 'Product deleted successfully',
      data: product,
    };
  }
}

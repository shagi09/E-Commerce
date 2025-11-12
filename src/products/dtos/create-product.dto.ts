import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, MinLength, MaxLength, IsNumber, IsPositive, IsInt, Min ,IsOptional} from 'class-validator';
import { Type } from 'class-transformer';

export class CreateProductDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty({ message: 'Product name is required' })
  @MinLength(3)
  @MaxLength(100)
  name: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty({ message: 'Product description is required' })
  @MinLength(10)
  description: string;

  @ApiProperty()
  @IsNumber()
  @Type(() => Number)
  @IsPositive({ message: 'Price must be greater than 0' })
  price: number;

  @ApiProperty()
  @IsInt()
  @Type(()=>Number)
  @Min(0, { message: 'Stock must be 0 or greater' })
  stock: number;

  @ApiProperty()
  @IsString()
  @IsNotEmpty({ message: 'Category is required' })
  category: string;

  @ApiProperty({ type: 'string', format: 'binary', required: false })
  @IsOptional()
  image?: any;
}

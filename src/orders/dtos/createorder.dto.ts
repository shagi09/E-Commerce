import { ApiProperty } from '@nestjs/swagger';
import { IsArray, ValidateNested, IsMongoId, IsInt, Min } from 'class-validator';
import { Type } from 'class-transformer';

class OrderItemDto {
  @ApiProperty()
  @IsMongoId({ message: 'Invalid productId format' })
  productId: string;

  @ApiProperty()
  @IsInt({ message: 'Quantity must be an integer' })
  @Min(1, { message: 'Quantity must be at least 1' })
  quantity: number;
}

export class CreateOrderDto {
  @ApiProperty({ type: [OrderItemDto] })
  @IsArray({ message: 'Products must be an array' })
  @ValidateNested({ each: true })
  @Type(() => OrderItemDto)
  products: OrderItemDto[];
}

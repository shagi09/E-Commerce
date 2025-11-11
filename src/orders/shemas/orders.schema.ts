import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema({ timestamps: true })
export class Order extends Document {
  @Prop({ type: Types.ObjectId, ref: 'User', required: true })
  userId: Types.ObjectId;

  @Prop([
    {
      productId: { type: Types.ObjectId, ref: 'Product', required: true },
      quantity: { type: Number, required: true, min: 1 },
      price: { type: Number, required: true },
    },
  ])
  items: Array<{ productId: Types.ObjectId; quantity: number; price: number }>;

  @Prop({ required: true })
  total_price: number;

  @Prop({ type: String, enum: ['pending', 'paid', 'cancelled'], default: 'pending' })
  status: string;
}

export const OrderSchema = SchemaFactory.createForClass(Order);

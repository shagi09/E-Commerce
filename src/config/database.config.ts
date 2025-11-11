// src/config/database.config.ts
import { MongooseModule } from '@nestjs/mongoose';

export const DatabaseConfig = MongooseModule.forRootAsync({
  useFactory: () => ({
    uri: process.env.MONGODB_URI || 'mongodb+srv://shala:shalom1994@cluster0.m4sss.mongodb.net/ecommerce',
    dbName: process.env.MONGO_DB_NAME || 'ecommerce',
  }),
});

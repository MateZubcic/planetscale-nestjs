import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Order } from './order.entity';
@Module({
  imports: [TypeOrmModule.forFeature([Order])],
})
export class OrderModule {}

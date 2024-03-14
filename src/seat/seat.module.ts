import { Module } from '@nestjs/common';
import { SeatService } from './seat.service';
import { SeatController } from './seat.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Show } from 'src/show/entities/show.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Show])],
  controllers: [SeatController],
  providers: [SeatService],
})
export class SeatModule {}

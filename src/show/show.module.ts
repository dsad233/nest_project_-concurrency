import { Module } from '@nestjs/common';
import { ShowService } from './show.service';
import { ShowController } from './show.controller';
import { Show } from './entities/show.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Seat } from './entities/seat.entity';

@Module({
  imports : [TypeOrmModule.forFeature([Show, Seat])],
  controllers: [ShowController],
  providers: [ShowService],
})
export class ShowModule {}

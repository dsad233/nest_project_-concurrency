import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SeatService } from './seat.service';
import { CreateSeatDto } from './dto/create-seat.dto';
import { UpdateSeatDto } from './dto/update-seat.dto';

@Controller('seats')
export class SeatController {
  constructor(private readonly seatService: SeatService) {}

  @Post()
  async create(@Body() createSeatDto: CreateSeatDto) {
    return await this.seatService.create(createSeatDto);
  }

  @Get()
  async findAll() {
    return this.seatService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') seatId: number) {
    return this.seatService.findOne(seatId);
  }

  @Patch(':id')
  update(@Param('id') seatId: number, @Body() updateSeatDto: UpdateSeatDto) {
    return this.seatService.update(seatId, updateSeatDto);
  }

  @Delete(':id')
  remove(@Param('id') seatId: number) {
    return this.seatService.remove(seatId);
  }
}

import { Injectable } from '@nestjs/common';
import { CreateSeatDto } from './dto/create-seat.dto';
import { UpdateSeatDto } from './dto/update-seat.dto';
import { Repository } from 'typeorm';
import { Seat } from './entities/seat.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class SeatService {
  constructor(
    @InjectRepository(Seat)
    private seatRepository : Repository<Seat>){}

  async create(createSeatDto: CreateSeatDto) {
    const { seatbase } = createSeatDto;
    const seat = await this.seatRepository.findOne({ where : { seatbase } });
    
    if(seat){
      throw new Error("이미 좌석이 존재합니다.");
    }

    return await this.seatRepository.create(createSeatDto);
  }

  async findAll() {
    return await this.seatRepository.find();
  }

  async findOne(seatId: number) {
    return await this.seatRepository.findOne({ where : { seatId } });
  }

  /// userId를 넣고 좌석을 예매해서 수정하는 식으로
  update(seatId: number, updateSeatDto: UpdateSeatDto) {
    return ;
  }

  remove(seatId: number) {
    return ;
  }
}

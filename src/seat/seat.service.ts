import { Injectable } from '@nestjs/common';
import { CreateSeatDto } from './dto/create-seat.dto';
import { UpdateSeatDto } from './dto/update-seat.dto';

@Injectable()
export class SeatService {
  create(createSeatDto: CreateSeatDto) {
    return 'This action adds a new seat';
  }

  findAll() {
    return `This action returns all seat`;
  }

  findOne(id: number) {
    return `This action returns a #${id} seat`;
  }

  /// userId를 넣고 좌석을 예매해서 수정하는 식으로
  update(id: number, updateSeatDto: UpdateSeatDto) {
    return `This action updates a #${id} seat`;
  }

  remove(id: number) {
    return `This action removes a #${id} seat`;
  }
}

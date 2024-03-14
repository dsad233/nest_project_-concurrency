import { Injectable } from '@nestjs/common';
import { CreateShowDto } from './dto/create-show.dto';
import { UpdateShowDto } from './dto/update-show.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Show } from './entities/show.entity';
import { Like, Repository } from 'typeorm';


@Injectable()
export class ShowService {
  constructor(
    @InjectRepository(Show)
    private showRepository : Repository<Show>
  ){}
  async create(userId : number, createShowDto: CreateShowDto) {
    const { showtitle } = createShowDto;
    const show = await this.showRepository.findOne({ where : { showtitle } });
    if(show){
      throw new Error("공연이 이미 존재합니다.");
    }

    return await this.showRepository.save({
      userId,
      showtitle : createShowDto.showtitle,
      showtext : createShowDto.showtext,
      showalltime : createShowDto.showalltime,
      showlocation : createShowDto.showlocation,
      showstartime : createShowDto.showstartime,
      showprice : createShowDto.showprice
    })
  }

  async findAll() {
    return await this.showRepository.find();
  }

  async findId(showId: number) {
    const show = await this.showRepository.findOne({ where : { showId } });
    if(!show){
      throw new Error("공연이 존재하지 않습니다.");
    }
    return show;
  }

  async findname(showtitle: string) {
    const show = await this.showRepository.findOne({ where : { showtitle : Like(`%${showtitle}%`) } });
    if(!show){
      throw new Error("공연이 존재하지 않습니다.");
    }

    return show;
  }

  async update(showId: number, updateShowDto: UpdateShowDto) {
    const show = await this.showRepository.findOne({ where : { showId } });
    if(show === null){
      throw new Error("공연이 존재하지 않습니다.");
    }

    return await this.showRepository.update(showId, updateShowDto);
  }

  async remove(showId: number) {
    const show = await this.showRepository.findOne({ where : { showId }});
    if(!show){
      throw new Error("공연이 존재하지 않습니다.");
    }
    return await this.showRepository.delete(showId);
  }
}

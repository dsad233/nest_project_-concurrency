import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Req, Res } from '@nestjs/common';
import { ShowService } from './show.service';
import { CreateShowDto } from './dto/create-show.dto';
import { UpdateShowDto } from './dto/update-show.dto';
import { Roles } from 'src/auth/roles.decorator';
import { Role } from 'src/user/types/userRole.type';
import { RolesGuard } from 'src/auth/roles.guard';


@UseGuards(RolesGuard)
@Controller('shows')
export class ShowController {
  constructor(private readonly showService: ShowService) {}


  @Roles(Role.Admin)
  @Post()
  async create(@Req() req, @Body() createShowDto: CreateShowDto) {
    const userId = req.user.userId;
    return await this.showService.create(userId, createShowDto);
  }

  @Get()
  async findAll() {
    return await this.showService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') showId: number) {
    return await this.showService.findId(showId);
  }
  
  @Get('title/showtitle')
  async findname(@Body() body ) {
    const showtitle = body.showtitle;
    return await this.showService.findname(showtitle);
  }

  @Roles(Role.Admin)
  @Patch(':id')
  async update(@Param('id') showId: number, userId : number, @Body() updateShowDto: UpdateShowDto, @Req() req) {
    const paramId = await this.showService.findId(userId);
    const user = req.user.userId;

    if(paramId.userId !== user){
      throw new Error("접근이 허가되지 않습니다.");
    }

    return await this.showService.update(showId, updateShowDto);
  }


  @Roles(Role.Admin)
  @Delete(':id')
  async remove(@Param('id') showId: number, userId : number, @Req() req) {
    const paramId = await this.showService.findId(userId);
    const user = req.user.userId

    if(paramId.userId !== user){
      throw new Error("접근이 허가되지 않습니다.");
    }

    return await this.showService.remove(showId);
  }
}

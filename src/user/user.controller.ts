import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Req, Res } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { AuthGuard } from '@nestjs/passport';
import { LoginDto } from './dto/login.dto';


@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async create(@Body() createUserDto : CreateUserDto) {
    return await this.userService.create(createUserDto);
  }

  @Get()
  async getAll() {
    return await this.userService.findAll();
  }

  @Get(':id')
  async getId(@Param('id') userId: number) {
    return await this.userService.findId(userId);
  }

  @UseGuards(AuthGuard('jwt'))
  @Patch(':id')
  async update(@Param('id') userId: number, @Req() req, @Body() body, @Body() updateUserDto: UpdateUserDto) {
    const user = req.user.userId;
    const password = body.password;

    if(user !== userId){
      throw new Error("유저 정보가 일치하지 않습니다.");
    }
    
    return await this.userService.update(userId, password, updateUserDto);
  }

  @UseGuards(AuthGuard('jwt'))
  @Delete(':id')
  async remove(@Param('id') userId: number, @Req() req, @Body() body) {
    const user = req.user.userId;
    const password = body.password;
    
    if(user !== userId){
      throw new Error("유저 정보가 일치하지 않습니다.");
    }

    return await this.userService.remove(userId, password);
  }

  @Post('login')
  async login(@Body() loginDto : LoginDto, @Res() res) {
    const user =  await this.userService.login(loginDto.email, loginDto.password);
    res.cookie("authorization", `Bearer ${user.access_token}`);
    res.send("로그인 완료");
  }

}

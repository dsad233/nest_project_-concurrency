import { Injectable } from '@nestjs/common';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { JwtService } from '@nestjs/jwt/dist/jwt.service';
import _ from 'lodash';
import { compare, hash } from 'bcrypt';
import { CreateUserDto } from './dto/create-user.dto';


@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository : Repository<User>,
    private readonly jwtService: JwtService,
  ) {}
  

  async findId(userId : number) {
    const user = await this.userRepository.findOne({ where : { userId } });
    if(!user){
      throw new Error("유저가 존재하지 않습니다.");
    }
    return user;
  }

  async create(createUserDto : CreateUserDto) {
    const { name, email, password } = createUserDto;
    const user = await this.findByEmail(email);
    const hashPassword = await hash(password, 10);
    if(user){
      throw new Error("이미 존재하는 유저입니다.");
    }

    
    return await this.userRepository.save({
      name,
      email,
      password : hashPassword
    })
  }

  async findAll() {
    return await this.userRepository.find();
  }


  async update(userId: number, password : string, updateUserDto: UpdateUserDto) {
    const user = await this.userRepository.findOne({ where : { userId } });
    
    if(user === null){
      throw new Error("유저가 존재하지 않습니다.");
    }

    if (!(await compare(password, user.password))) {
      throw new Error('비밀번호를 확인해주세요.');
    }

    return await this.userRepository.update(userId, updateUserDto);
  }

  async remove(userId: number, password : string) {
    const user = await this.userRepository.findOne({ where : { userId }});
    if(user === null){
      throw new Error("유저가 존재하지 않습니다.");
    }

    if (!(await compare(password, user.password))) {
      throw new Error('비밀번호를 확인해주세요.');
    }

    return await this.userRepository.delete(userId);
  }


  async login(email: string, password: string) {
    const user = await this.userRepository.findOne({
      select: ['userId', 'email', 'password'],
      where: { email },
    });

    if(user === null){
      throw new Error("유저가 존재하지 않습니다.");
    }

    if (!(await compare(password, user.password))) {
      throw new Error('비밀번호를 확인해주세요.');
    }

    const payload = { email, sub: user.userId };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async findByEmail(email: string) {
    return await this.userRepository.findOneBy({ email });
  }

}

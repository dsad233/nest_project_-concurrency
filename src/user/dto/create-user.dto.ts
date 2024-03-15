import { IsNotEmpty, IsString } from "class-validator";

export class CreateUserDto {

    @IsString()
    @IsNotEmpty({ message : "이름을 작성해주세요."})
    name : string;

    @IsString()
    @IsNotEmpty({ message : "이메일을 작성해주세요."})
    email : string;

    @IsString()
    @IsNotEmpty({ message : "패스워드를 작성해주세요."})
    password : string;

}

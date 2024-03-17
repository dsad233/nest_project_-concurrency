import { IsNotEmpty, IsNumber } from "class-validator";

export class CreateSeatDto {
    
    @IsNumber()
    @IsNotEmpty({ message : "좌석을 생성해 주세요." })
    seatbase : number;

}

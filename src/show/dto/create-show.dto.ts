import { IsNotEmpty, IsNumber, IsString } from "class-validator";


export class CreateShowDto {

    @IsString()
    @IsNotEmpty({ message : "공연 제목을 작성해주세요."})
    showtitle : string

    @IsString()
    @IsNotEmpty({ message : "공연 제목을 작성해주세요."})
    showtext : string

    @IsString()
    @IsNotEmpty({ message : "공연 총 진행시간을 작성해주세요." })
    showalltime : string

    @IsString()
    @IsNotEmpty({ message : "공연 장소를 작성해주세요." })
    showlocation : string
    
    @IsString()
    @IsNotEmpty({ message : "공연 시작시간을 작성해주세요." })
    showstartime : string

    @IsNumber()
    @IsNotEmpty({ message : "공연 가격을 작성해주세요." })
    showprice : number

}

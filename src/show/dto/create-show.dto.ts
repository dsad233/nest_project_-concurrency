import { IsNotEmpty, IsNumber, IsString } from "class-validator";


export class CreateShowDto {

    @IsString()
    @IsNotEmpty({ message : "영화 제목을 작성해주세요."})
    showtitle : string

    @IsString()
    @IsNotEmpty({ message : "영화의 총 상영시간을 작성해주세요." })
    showalltime : string

    @IsString()
    @IsNotEmpty({ message : "영화 상영관을 작성해주세요." })
    showlocation : string
    
    @IsString()
    @IsNotEmpty({ message : "상영 시작시간을 작성해주세요." })
    showstartime : string

    @IsNumber()
    @IsNotEmpty({ message : "공연 가격을 작성해주세요." })
    showprice : number

}

import { PickType } from '@nestjs/mapped-types';
import { CreateShowDto } from './create-show.dto';
import { IsEnum } from 'class-validator';
import { ShowTag } from '../types/showtag.type';
import { ShowStatus } from '../types/showstatus.type';

export class UpdateShowDto extends PickType(CreateShowDto, ['showtitle', 'showalltime', 'showlocation', 'showstartime']) {
    @IsEnum(ShowTag)
    showTag : ShowTag;

    @IsEnum(ShowStatus)
    showstatus : ShowStatus;

}

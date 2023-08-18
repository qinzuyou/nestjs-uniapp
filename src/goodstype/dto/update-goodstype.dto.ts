import { PartialType } from '@nestjs/mapped-types';
import { CreateGoodstypeDto } from './create-goodstype.dto';

export class UpdateGoodstypeDto extends PartialType(CreateGoodstypeDto) {}

import { Injectable } from '@nestjs/common';
import { CreateGoodstypeDto } from './dto/create-goodstype.dto';
import { UpdateGoodstypeDto } from './dto/update-goodstype.dto';
import {Repository,Like} from'typeorm';
import {InjectRepository} from '@nestjs/typeorm';
import { Goodstype } from './entities/goodstype.entity';

@Injectable()
export class GoodstypeService {
  constructor(@InjectRepository(Goodstype) private readonly goodstype:Repository<Goodstype>){
    
  }
}

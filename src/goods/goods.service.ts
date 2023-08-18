import { Injectable } from '@nestjs/common';
import { CreateGoodDto } from './dto/create-good.dto';
import { UpdateGoodDto } from './dto/update-good.dto';
import {Repository,Like} from'typeorm';
import {InjectRepository} from '@nestjs/typeorm';
import { Goods } from './entities/goods.entity';
@Injectable()
export class GoodsService {
  constructor(@InjectRepository(Goods) private readonly goods:Repository<Goods>){
    
  }
}

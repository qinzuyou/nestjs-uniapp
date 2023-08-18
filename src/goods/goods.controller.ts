import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { GoodsService } from './goods.service';
import { CreateGoodDto } from './dto/create-good.dto';
import { UpdateGoodDto } from './dto/update-good.dto';

@Controller('goods')
export class GoodsController {
  constructor(private readonly goodsService: GoodsService) {}


}

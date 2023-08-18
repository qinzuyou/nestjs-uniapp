import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { GoodstypeService } from './goodstype.service';
import { CreateGoodstypeDto } from './dto/create-goodstype.dto';
import { UpdateGoodstypeDto } from './dto/update-goodstype.dto';

@Controller('goodstype')
export class GoodstypeController {
  constructor(private readonly goodstypeService: GoodstypeService) {}


}

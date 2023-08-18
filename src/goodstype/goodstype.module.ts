import { Module } from '@nestjs/common';
import { GoodstypeService } from './goodstype.service';
import { GoodstypeController } from './goodstype.controller';
import {TypeOrmModule} from '@nestjs/typeorm'
import { Goodstype } from './entities/goodstype.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Goodstype])],
  controllers: [GoodstypeController],
  providers: [GoodstypeService]
})
export class GoodstypeModule {}

import { Injectable } from '@nestjs/common';
import { CreateStoreDto } from './dto/create-store.dto';
import { UpdateStoreDto } from './dto/update-store.dto';
import { Store } from './entities/store.entity';
import {TypeOrmModule} from '@nestjs/typeorm';
import {Repository,Like} from'typeorm';
import {InjectRepository} from '@nestjs/typeorm';
@Injectable()
export class StoreService {
  constructor(@InjectRepository(Store) private readonly store:Repository<Store>){
    
  }
}

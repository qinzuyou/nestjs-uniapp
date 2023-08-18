import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import {Repository,Like} from'typeorm';
import {InjectRepository} from '@nestjs/typeorm';


@Injectable()
export class UserService {
  constructor(@InjectRepository(User) private readonly user:Repository<User>){}

  getUser(){
    return this.user.find()
  }
  getPhone(data:any){
    return this.user.find({
    where:{
      phone:data.phone
    }
    })
  }
  addUser(body:any){
    let data = new User()
    data.nickname=body.wxdata.nickName
    data.phone=body.phone
    data.pic=body.wxdata.avatarUrl
    
    return this.user.save(data)
  }

 
}

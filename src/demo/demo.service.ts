import { Injectable } from '@nestjs/common';
import {Repository,Like} from'typeorm'
import {InjectRepository} from '@nestjs/typeorm'
import {Demo} from './entities/demo.entity'

@Injectable()
export class DemoService {
      constructor(@InjectRepository(Demo) private readonly demo:Repository<Demo>){}


      //添加数据
      addDemo(body:any){
          const data =new Demo()
          data.name=body.name;
          data.age=body.age;
          return this.demo.save(data)
      } 

      //删除数据
      deleteDemo(id:number){
        return this.demo.delete(id)
      }

      //修改数据
      updateDemo(body:any){
        let data = new Demo()
        data.name=body.name
        data.age=body.age

        return this.demo.update(body.id,data)
      }

      //查询所有数据
      getDemo(){
        return this.demo.find()
      }

      //根据名字查
      getDemoName(name:string){

          return this.demo.find({
            where:{
              name:Like(`%${name}%`)
            }
          })
      }

}

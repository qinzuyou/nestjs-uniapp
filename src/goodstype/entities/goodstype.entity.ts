import {Entity,Column,PrimaryGeneratedColumn,CreateDateColumn} from 'typeorm'

@Entity()
export class Goodstype {
    @PrimaryGeneratedColumn()//自动增长
    pid:number;
    
    @Column({type:"varchar"})
    goodsTypeName:String
}

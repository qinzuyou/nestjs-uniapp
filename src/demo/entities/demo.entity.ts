import {Entity,Column,PrimaryGeneratedColumn} from 'typeorm'

@Entity()
export class Demo {

    @PrimaryGeneratedColumn()//自动增长
    id:number;
    @Column({type:"varchar",length:255})
    name:String;
    @Column({type:"int"})
    age:number;

}

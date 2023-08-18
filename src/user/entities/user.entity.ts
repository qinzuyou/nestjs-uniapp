import {Entity,Column,PrimaryGeneratedColumn,CreateDateColumn} from 'typeorm'

@Entity()
export class User {
    @PrimaryGeneratedColumn()//自动增长
    id:number;

    @PrimaryGeneratedColumn("uuid")
    uuid:number

    //号码
    @Column({type:"bigint"},)
    phone:number;

    //nullable:true  设置可以为空
    
    //昵称
    @Column({type:"varchar",nullable:true})
    nickname:String;

    //密码
    @Column({type:"int",nullable:true})
    password:number;

    //头像
    @Column({type:"varchar",nullable:true})
    pic:String;

    //注册时间
    @CreateDateColumn({type:"timestamp"})
    create_time:Date
    //
}

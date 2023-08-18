import {Entity,Column,PrimaryGeneratedColumn,CreateDateColumn} from 'typeorm'

@Entity()

export class Store {
    @PrimaryGeneratedColumn()//自动增长
    sid:number;
    @Column({type:'varchar'})
    storeName:String
    @Column({type:'varchar'})
    spic:String
    
}

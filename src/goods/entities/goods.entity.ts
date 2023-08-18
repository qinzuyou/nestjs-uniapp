import {Entity,Column,PrimaryGeneratedColumn,CreateDateColumn} from 'typeorm'

@Entity()

export class Goods {
    @PrimaryGeneratedColumn()//自动增长
    gid:number;
    

    //商品类型
    @Column({type:"int"})
    goodsType:Number


    //商品名称
    @Column({type:"varchar"})
    goodsName:String

    //店铺名称
    @Column({type:"varchar"})
    storeName:String

    //是否推荐
    @Column({type:"int"})
    recommend:Number

    //店铺id
    @Column({type:"int"})
    sid:Number

    //商品图片
    @Column({type:"varchar",nullable:true})
    piclist:String

    //商品价格
    @Column({type:"bigint"})
    price:Number

    //库存
    @Column({type:'bigint'})
    stock:Number

    //付款人数
    @Column({type:"bigint"})
    payment:Number










}

import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DemoModule } from './demo/demo.module';
import { UserModule } from './user/user.module';
// import { CorsMiddleware } from './cors.middleware';
import { GoodstypeModule } from './goodstype/goodstype.module';
import { GoodsModule } from './goods/goods.module';
import { StoreModule } from './store/store.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    type:'mysql',//数据库类型
    host:'localhost',//数据库的连接地址host
    port:3306,//数据库的端口3306
    username:'root',//连接账号
    password:'123456',//连接密码
    database:'unigoods',//连接的数据库命
    retryDelay:500,//重试连接数据库间隔
    retryAttempts:10,//允许重连次数
    synchronize:true,//是否将实体同步到数据库
    autoLoadEntities:true,//自动加载实体配置.fprFeature()注册的每个实体都自动加载
  }), DemoModule, UserModule, GoodstypeModule, GoodsModule, StoreModule],
  controllers: [],
  providers: [],
})
// export class AppModule implements NestModule{
//   configure(consumer: MiddlewareConsumer) {
//       consumer.apply(CorsMiddleware)
//       .forRoutes('*')
//   }
// }

export class AppModule{}

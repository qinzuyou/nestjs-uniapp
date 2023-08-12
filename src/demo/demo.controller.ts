import { Controller, Get, Post, Body, Patch, Param, Delete,UseInterceptors,UploadedFile } from '@nestjs/common';
import { DemoService } from './demo.service';
import { FileInterceptor} from '@nestjs/platform-express';
import { diskStorage } from 'multer';

@Controller('demo')
export class DemoController {
  constructor(private readonly demoService: DemoService) {}

    //增
  @Post('/add')
  addDemo(@Body() body):any{
    console.log(body);
    return this.demoService.addDemo(body)

  }
  //删
  @Get('/delete/:id')
  deleteDemo(@Param() params):any{
    let id:number = params =parseInt(params.id)
    return this.demoService.deleteDemo(id)
  }
  //改
  @Post('/update')
  update(@Body() body):any{
    return this.demoService.updateDemo(body)
  }
  //查
  @Get('/select')
  getDemo(@Param() param ):any{
    return this.demoService.getDemo()
  }
  //查
  @Get('/selectName/:name')
  getDemoName(@Param() param ):any{
    return this.demoService.getDemoName(param.name)
  }

    //文件上传
    @Post("/addarticle")
    @UseInterceptors(
      FileInterceptor("cover", {
        storage: diskStorage({
          destination: "uploads",
          // filename: editFileName,
       
          filename: (req, file, cb) => {
            // 自定义文件名
            // const filename = `${nuid.next()}.${file.mimetype.split('/')[1]}`;
            // return cb(null, filename);
           file.originalname= decodeURIComponent(escape(file.originalname) )
           file.filename= decodeURIComponent(escape(file.filename))
            return  cb(null,file.originalname);
          },
        }),
        
        // fileFilter: imageFileFilter,
      })
    )
    
    async uploadedFile(@UploadedFile() file,@Body() Body) {
      console.log(file,Body);
      
      // const response = {
      //   originalname: file.originalname,
      //   filename:file.filename,
      // };
      // console.log(response);
      
      return 1
    }
}

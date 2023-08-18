import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

 @Get('/getUser')
 getUser(@Param() param ):any{
  return this.userService.getUser()
 }
 @Get('/getPhone/:phone')
 getPhone(@Param() param ):any{
  return this.userService.getPhone(param)
 }

 @Post('/addUser')
 addUser(@Body() body):any{
  console.log(body);
  
  return this.userService.addUser(body)
 }

}

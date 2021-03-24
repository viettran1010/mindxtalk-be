import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from '../users/schemas/user.schema';
import { Model } from "mongoose";
import { CreateUserDto } from '../users/dto/create-user.dto';
import { IUser } from '../users/interfaces/user.interface';

@Injectable()
export class SessionsService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<User>,
  ) {}

  // async create(createUserDto: CreateUserDto): Promise<IUser> {
  //   const newUser = await new this.userModel(createUserDto);
  //   return newUser.save();
  // }
}

import { ConflictException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
import { CreateUserDto } from '../users/dto/create-user.dto';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService
  ) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findByUsername(username);
    if (user && await user.validatePassword(pass)) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: any) {
    const payload = { username: user.username, sub: user._id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async register(createUserDto: CreateUserDto) {
    if (await this.usersService.findByUsername(createUserDto.username)) {
      throw new ConflictException(`Username: ${createUserDto.username} is existed.`);
    }
    if (await this.usersService.findByEmail(createUserDto.email)) {
      throw new ConflictException(`Email: ${createUserDto.email} is existed.`);
    }
    const user = await this.usersService.create(createUserDto);
    return this.login(user);
  }
}

import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { LoginUserDto } from './dto/login-user.dto';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwt: JwtService,
    private readonly users: UsersService,
  ) {}

  public async login(loginUserDto: LoginUserDto) {
    this.validateCredentials(loginUserDto.username, loginUserDto.password);
    return this.buildJWT(loginUserDto);
  }

  public async validateCredentials(username: string, password: string) {
    const targetedUser = await this.users.getByUsername(username);

    if (
      targetedUser === null ||
      !(await bcrypt.compare(password, targetedUser.data.password))
    ) {
      throw new UnauthorizedException();
    }

    return targetedUser;
  }

  private buildJWT(user: any) {
    const jwt_payload = {
      username: user.username,
      uuid: user.UUID,
    };
    return { access_token: this.jwt.sign(jwt_payload) };
  }
}

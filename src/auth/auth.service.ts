import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}

  async generateToken() {
    return {
      access_token: this.jwtService.sign({ user: 'josé' }),
    };
  }
}

import { Controller, Get } from '@nestjs/common';
import { ApiTags } from "@nestjs/swagger";
import { AuthService } from "./auth.service";

@ApiTags('auth')
@Controller('auth')
export class AuthController {
    constructor(private service: AuthService){
    }

    @Get()
    async getToken(){
        return this.service.generateToken();
    }
}

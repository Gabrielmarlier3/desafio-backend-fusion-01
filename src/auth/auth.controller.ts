import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiTags } from "@nestjs/swagger";
import { AuthService } from "./auth.service";

@ApiTags('auth')
@Controller('auth')
export class AuthController {
    constructor(private service: AuthService){
    }

    @ApiOperation({ summary: 'Get the JWT token to use for the other endpoints' })
    @Get()
    async getToken(){
        return this.service.generateToken();
    }
}

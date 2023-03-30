import { Controller, Post, Body } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { MakeLoginDto } from "./dto/makeLogin.dto";
import { RegisterDto } from "./dto/register.dto";

@Controller('auth')
export class AuthController {

    constructor(
        private readonly authService: AuthService
    ) { }

    @Post('/login')
    login(@Body() makeLogin: MakeLoginDto) {
        return this.authService.signIn(makeLogin);
    }

    @Post('/signup')
    signUp(@Body() register: RegisterDto) {
        return 'we gonna register you as comun client'
    }

}
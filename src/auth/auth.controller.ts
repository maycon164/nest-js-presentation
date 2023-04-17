import { Controller, Post, Body } from "@nestjs/common";
import { PUBLIC_ROUTE } from "src/common/authDecorators.decorator";
import { AuthService } from "./auth.service";
import { MakeLoginDto } from "./dto/makeLogin.dto";
import { RegisterDto } from "./dto/register.dto";

@Controller('auth')
export class AuthController {

    constructor(
        private readonly authService: AuthService
    ) { }

    @PUBLIC_ROUTE()
    @Post('/login')
    login(@Body() makeLogin: MakeLoginDto) {
        return this.authService.signIn(makeLogin);
    }

    @PUBLIC_ROUTE()
    @Post('/signup')
    async signUp(@Body() register: RegisterDto) {

        const data = await this.authService.signUp(register);

        if (data) return "User Inserted"
    }

}
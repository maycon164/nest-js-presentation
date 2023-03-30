import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt'
import { UsersService } from 'src/users/users.service';
import { MakeLoginDto } from './dto/makeLogin.dto';

@Injectable()
export class AuthService {

    constructor(
        private readonly usersService: UsersService,
        private readonly jwtService: JwtService
    ) { }

    async signIn(makeLoginData: MakeLoginDto) {
        const { email, password } = makeLoginData;

        const user = this.usersService.findByEmail(email);

        if (user && user.password == password) {
            delete user.password;
            return {
                message: `hello ${user.name}`,
                accesss_token: await this.jwtService.signAsync(user)
            }
        }

        throw new UnauthorizedException()
    }

}
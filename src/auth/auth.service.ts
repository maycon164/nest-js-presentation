import { Injectable, InternalServerErrorException, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt'
import { UsersService } from 'src/users/users.service';
import { MakeLoginDto } from './dto/makeLogin.dto';
import { RegisterDto } from './dto/register.dto';

@Injectable()
export class AuthService {

    constructor(
        private readonly usersService: UsersService,
        private readonly jwtService: JwtService
    ) { }

    async signIn(makeLoginData: MakeLoginDto) {
        const { email, password } = makeLoginData;

        const user = await this.usersService.findByEmail(email);

        if (user && user.password == password) {
            delete user.password;

            return {
                message: `hello ${user.name}`,
                accesss_token: await this.jwtService.signAsync(user)
            }
        }

        throw new UnauthorizedException()
    }

    async signUp(register: RegisterDto) {
        // todo need to encrypt this

        const insertedUser = this.usersService.create({ ...register, isAdmin: false })

        if (insertedUser) return true

        return false
    }
}
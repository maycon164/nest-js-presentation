import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt'
import { PrismaService } from 'src/common/prisma/prisma.service';
import { MakeLoginDto } from './dto/makeLogin.dto';
import { RegisterDto } from './dto/register.dto';

@Injectable()
export class AuthService {

    constructor(
        private readonly jwtService: JwtService,
        private readonly prisma: PrismaService
    ) { }

    async signIn(makeLoginData: MakeLoginDto) {
        const { email, password } = makeLoginData;

        const user = await this.prisma.user.findFirst({
            where: {
                email
            }
        })

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

        const insertedUser = await this.prisma.user.create({
            data: register
        })

        return insertedUser ? true : false;
    }
}
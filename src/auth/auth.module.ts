import { Module } from "@nestjs/common";
import { JwtModule, JwtService } from "@nestjs/jwt";
import { UsersModule } from "src/users/users.module";
import { UsersService } from "src/users/users.service";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";

@Module({
    imports: [
        UsersModule,
        JwtModule.register({
            global: true,
            secret: 'cafezin',
            signOptions: { expiresIn: '1w' }
        })
    ],
    controllers: [AuthController],
    providers: [AuthService]
})
export class AuthModule { }
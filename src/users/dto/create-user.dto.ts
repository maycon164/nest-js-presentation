import { IsNotEmpty, IsEmail, IsBoolean, Contains } from 'class-validator'

export class CreateUserDto {

    @IsNotEmpty()
    name: string

    @IsEmail()
    email: string

    @IsBoolean()
    isAdmin: string
}

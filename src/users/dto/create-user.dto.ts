import { IsNotEmpty, IsEmail, IsBoolean, IsOptional } from 'class-validator'

export class CreateUserDto {

    @IsNotEmpty()
    name: string

    @IsEmail()
    email: string

    @IsBoolean()
    isAdmin?: boolean

    @IsOptional()
    password: string
}

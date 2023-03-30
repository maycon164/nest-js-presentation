import { IsEmail, IsNotEmpty } from 'class-validator'

export class MakeLoginDto {
    @IsEmail()
    email: string

    @IsNotEmpty()
    password: string
}
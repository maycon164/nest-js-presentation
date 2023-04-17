import { IsString, IsBoolean, IsNumber } from 'class-validator'

export class CreateMovieDto {

    @IsString()
    name: string

    @IsNumber()
    price: number

    @IsBoolean()
    available: boolean

}

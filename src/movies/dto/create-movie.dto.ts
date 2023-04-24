import { IsString } from 'class-validator'

export class CreateMovieDto {

    @IsString()
    name: string

    @IsString()
    year: string

    @IsString()
    category: string
}

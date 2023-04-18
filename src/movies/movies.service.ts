import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/common/prisma/prisma.service';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';

@Injectable()
export class MoviesService {

  constructor(private prisma: PrismaService) { }

  async create(createMovieDto: CreateMovieDto) {
    const movie = await this.prisma.movie.create({
      data: createMovieDto
    })

    return movie;
  }

  async findAll() {
    const movies = await this.prisma.movie.findMany({});
    return movies;
  }

  findOne(id: number) {
    return `This action returns a #${id} movie`;
  }

  async update(id: number, updateMovieDto: UpdateMovieDto) {
    const movieUpdated = await this.prisma.movie.update({
      where: {
        id
      },
      data: updateMovieDto
    })

    return movieUpdated
  }

  async remove(id: number) {
    const movieRemove = await this.prisma.movie.delete({
      where: {
        id
      }
    })

    return movieRemove;
  }
}

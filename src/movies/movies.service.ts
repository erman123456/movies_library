import { Injectable } from '@nestjs/common';
import { PrismaService } from '../config/prisma/prisma.service';
import { CreateMovieInput } from './dto/create-movie.input';
import { UpdateMovieInput } from './dto/update-movie.input';

@Injectable()
export class MoviesService {
  constructor(private prismaService: PrismaService) {}

  create(createMovieInput: CreateMovieInput) {
    return this.prismaService.movies.create({
      data: {
        ...createMovieInput,
      },
    });
  }

  findAll() {
    return this.prismaService.movies.findMany();
  }

  findOne(id: number) {
    return this.prismaService.movies.findFirst({
      where: {
        id: id,
      },
    });
  }

  update(id: number, updateMovieInput: UpdateMovieInput) {
    return this.prismaService.movies.update({
      where: {
        id: id,
      },
      data: {
        ...updateMovieInput,
      },
    });
  }

  remove(id: number) {
    return this.prismaService.movies.delete({
      where: {
        id: id,
      },
    });
  }
}

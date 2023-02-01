import { Injectable } from '@nestjs/common';
import { PrismaService } from '../config/prisma/prisma.service';
import { CreateAuthorInput } from './dto/create-author.input';
import { UpdateAuthorInput } from './dto/update-author.input';

@Injectable()
export class AuthorsService {
  constructor(private prismaService: PrismaService) {}
  create(createAuthorInput: CreateAuthorInput) {
    return this.prismaService.authors.create({
      data: {
        ...createAuthorInput,
      },
    });
  }

  findAll() {
    return this.prismaService.authors.findMany();
  }

  findOne(id: number) {
    return this.prismaService.authors.findFirst({
      where: {
        id: id,
      },
    });
  }

  update(id: number, updateAuthorInput: UpdateAuthorInput) {
    return this.prismaService.authors.update({
      where: {
        id: id,
      },
      data: {
        ...updateAuthorInput,
      },
    });
  }

  remove(id: number) {
    return this.prismaService.authors.delete({
      where: {
        id: id,
      },
    });
  }
}

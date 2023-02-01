import { Injectable } from '@nestjs/common';
import { CreateActorInput } from './dto/create-actor.input';
import { UpdateActorInput } from './dto/update-actor.input';
import { PrismaService } from '../config/prisma/prisma.service';

@Injectable()
export class ActorsService {
  constructor(private prismaService: PrismaService) {}
  create(createActorInput: CreateActorInput) {
    return this.prismaService.actors.create({
      data: {
        ...createActorInput,
      },
    });
  }

  findAll() {
    return this.prismaService.actors.findMany();
  }

  findOne(id: number) {
    return this.prismaService.actors.findFirst({
      where: {
        id: id,
      },
    });
  }

  update(id: number, updateActorInput: UpdateActorInput) {
    return this.prismaService.actors.update({
      where: {
        id: id,
      },
      data: {
        ...updateActorInput,
      },
    });
  }

  remove(id: number) {
    return this.prismaService.actors.delete({
      where: {
        id: id,
      },
    });
  }
}

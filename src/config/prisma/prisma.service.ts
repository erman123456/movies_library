import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { ConfigService } from '@nestjs/config';
export class PrismaService extends PrismaClient {
  constructor(config: ConfigService) {
    super({
      datasources: {
        db: {
          url: process.env.DATABASE_URL_POSTGRESQL,
        },
      },
    });
  }
  cleanDb() {
    return this.$transaction([
      this.actors.deleteMany(),
      this.authors.deleteMany(),
      this.movies.deleteMany(),
    ]);
  }
}

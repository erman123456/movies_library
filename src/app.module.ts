import { Module } from '@nestjs/common';
import { MoviesModule } from './movies/movies.module';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { ActorsModule } from './actors/actors.module';
import { PrismaModule } from './config/prisma/prisma.module';
import { AuthorsModule } from './authors/authors.module';
import { AuthenticationModule } from './authentication/authentication.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      introspection: true,
      playground: true,
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
    ConfigModule.forRoot({ isGlobal: true }),
    PrismaModule,
    MoviesModule,
    ActorsModule,
    AuthorsModule,
    AuthenticationModule,
  ],
})
export class AppModule {}

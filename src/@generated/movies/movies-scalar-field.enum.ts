import { registerEnumType } from '@nestjs/graphql';

export enum MoviesScalarFieldEnum {
    id = "id",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    title = "title",
    description = "description",
    actorId = "actorId",
    authorId = "authorId"
}


registerEnumType(MoviesScalarFieldEnum, { name: 'MoviesScalarFieldEnum', description: undefined })

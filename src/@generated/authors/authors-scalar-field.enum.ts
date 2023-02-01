import { registerEnumType } from '@nestjs/graphql';

export enum AuthorsScalarFieldEnum {
    id = "id",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    name = "name",
    gender = "gender",
    age = "age"
}


registerEnumType(AuthorsScalarFieldEnum, { name: 'AuthorsScalarFieldEnum', description: undefined })

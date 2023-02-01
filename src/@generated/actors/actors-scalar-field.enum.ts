import { registerEnumType } from '@nestjs/graphql';

export enum ActorsScalarFieldEnum {
    id = "id",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    name = "name",
    gender = "gender",
    age = "age"
}


registerEnumType(ActorsScalarFieldEnum, { name: 'ActorsScalarFieldEnum', description: undefined })

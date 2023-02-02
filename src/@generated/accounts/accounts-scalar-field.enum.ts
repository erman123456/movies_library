import { registerEnumType } from '@nestjs/graphql';

export enum AccountsScalarFieldEnum {
    id = "id",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    email = "email",
    password = "password"
}


registerEnumType(AccountsScalarFieldEnum, { name: 'AccountsScalarFieldEnum', description: undefined })

import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AccountsWhereInput } from './accounts-where.input';
import { Type } from 'class-transformer';
import { AccountsOrderByWithRelationInput } from './accounts-order-by-with-relation.input';
import { AccountsWhereUniqueInput } from './accounts-where-unique.input';
import { Int } from '@nestjs/graphql';
import { AccountsScalarFieldEnum } from './accounts-scalar-field.enum';

@ArgsType()
export class FindFirstAccountsArgs {

    @Field(() => AccountsWhereInput, {nullable:true})
    @Type(() => AccountsWhereInput)
    where?: AccountsWhereInput;

    @Field(() => [AccountsOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<AccountsOrderByWithRelationInput>;

    @Field(() => AccountsWhereUniqueInput, {nullable:true})
    cursor?: AccountsWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [AccountsScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof AccountsScalarFieldEnum>;
}

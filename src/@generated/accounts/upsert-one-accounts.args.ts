import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AccountsWhereUniqueInput } from './accounts-where-unique.input';
import { Type } from 'class-transformer';
import { AccountsCreateInput } from './accounts-create.input';
import { AccountsUpdateInput } from './accounts-update.input';

@ArgsType()
export class UpsertOneAccountsArgs {

    @Field(() => AccountsWhereUniqueInput, {nullable:false})
    @Type(() => AccountsWhereUniqueInput)
    where!: AccountsWhereUniqueInput;

    @Field(() => AccountsCreateInput, {nullable:false})
    @Type(() => AccountsCreateInput)
    create!: AccountsCreateInput;

    @Field(() => AccountsUpdateInput, {nullable:false})
    @Type(() => AccountsUpdateInput)
    update!: AccountsUpdateInput;
}

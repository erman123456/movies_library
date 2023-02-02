import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AccountsUpdateInput } from './accounts-update.input';
import { Type } from 'class-transformer';
import { AccountsWhereUniqueInput } from './accounts-where-unique.input';

@ArgsType()
export class UpdateOneAccountsArgs {

    @Field(() => AccountsUpdateInput, {nullable:false})
    @Type(() => AccountsUpdateInput)
    data!: AccountsUpdateInput;

    @Field(() => AccountsWhereUniqueInput, {nullable:false})
    @Type(() => AccountsWhereUniqueInput)
    where!: AccountsWhereUniqueInput;
}

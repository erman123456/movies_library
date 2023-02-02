import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AccountsWhereUniqueInput } from './accounts-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOneAccountsArgs {

    @Field(() => AccountsWhereUniqueInput, {nullable:false})
    @Type(() => AccountsWhereUniqueInput)
    where!: AccountsWhereUniqueInput;
}

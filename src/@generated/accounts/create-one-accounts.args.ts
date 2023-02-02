import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AccountsCreateInput } from './accounts-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneAccountsArgs {

    @Field(() => AccountsCreateInput, {nullable:false})
    @Type(() => AccountsCreateInput)
    data!: AccountsCreateInput;
}

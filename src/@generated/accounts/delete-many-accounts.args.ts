import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AccountsWhereInput } from './accounts-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyAccountsArgs {

    @Field(() => AccountsWhereInput, {nullable:true})
    @Type(() => AccountsWhereInput)
    where?: AccountsWhereInput;
}

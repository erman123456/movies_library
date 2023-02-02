import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AccountsCreateManyInput } from './accounts-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyAccountsArgs {

    @Field(() => [AccountsCreateManyInput], {nullable:false})
    @Type(() => AccountsCreateManyInput)
    data!: Array<AccountsCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

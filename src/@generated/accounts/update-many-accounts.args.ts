import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AccountsUpdateManyMutationInput } from './accounts-update-many-mutation.input';
import { Type } from 'class-transformer';
import { AccountsWhereInput } from './accounts-where.input';

@ArgsType()
export class UpdateManyAccountsArgs {

    @Field(() => AccountsUpdateManyMutationInput, {nullable:false})
    @Type(() => AccountsUpdateManyMutationInput)
    data!: AccountsUpdateManyMutationInput;

    @Field(() => AccountsWhereInput, {nullable:true})
    @Type(() => AccountsWhereInput)
    where?: AccountsWhereInput;
}

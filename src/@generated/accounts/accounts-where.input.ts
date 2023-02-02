import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { StringFilter } from '../prisma/string-filter.input';

@InputType()
export class AccountsWhereInput {

    @Field(() => [AccountsWhereInput], {nullable:true})
    AND?: Array<AccountsWhereInput>;

    @Field(() => [AccountsWhereInput], {nullable:true})
    OR?: Array<AccountsWhereInput>;

    @Field(() => [AccountsWhereInput], {nullable:true})
    NOT?: Array<AccountsWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => StringFilter, {nullable:true})
    email?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    password?: StringFilter;
}

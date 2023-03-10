import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';

@InputType()
export class AccountsScalarWhereWithAggregatesInput {

    @Field(() => [AccountsScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<AccountsScalarWhereWithAggregatesInput>;

    @Field(() => [AccountsScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<AccountsScalarWhereWithAggregatesInput>;

    @Field(() => [AccountsScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<AccountsScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    email?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    password?: StringWithAggregatesFilter;
}

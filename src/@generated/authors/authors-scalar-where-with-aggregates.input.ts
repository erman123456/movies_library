import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';

@InputType()
export class AuthorsScalarWhereWithAggregatesInput {

    @Field(() => [AuthorsScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<AuthorsScalarWhereWithAggregatesInput>;

    @Field(() => [AuthorsScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<AuthorsScalarWhereWithAggregatesInput>;

    @Field(() => [AuthorsScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<AuthorsScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    gender?: StringWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    age?: IntWithAggregatesFilter;
}

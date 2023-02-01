import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';

@InputType()
export class ActorsScalarWhereWithAggregatesInput {

    @Field(() => [ActorsScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<ActorsScalarWhereWithAggregatesInput>;

    @Field(() => [ActorsScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<ActorsScalarWhereWithAggregatesInput>;

    @Field(() => [ActorsScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<ActorsScalarWhereWithAggregatesInput>;

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

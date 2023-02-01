import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ActorsCountOrderByAggregateInput } from './actors-count-order-by-aggregate.input';
import { ActorsAvgOrderByAggregateInput } from './actors-avg-order-by-aggregate.input';
import { ActorsMaxOrderByAggregateInput } from './actors-max-order-by-aggregate.input';
import { ActorsMinOrderByAggregateInput } from './actors-min-order-by-aggregate.input';
import { ActorsSumOrderByAggregateInput } from './actors-sum-order-by-aggregate.input';

@InputType()
export class ActorsOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    gender?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    age?: keyof typeof SortOrder;

    @Field(() => ActorsCountOrderByAggregateInput, {nullable:true})
    _count?: ActorsCountOrderByAggregateInput;

    @Field(() => ActorsAvgOrderByAggregateInput, {nullable:true})
    _avg?: ActorsAvgOrderByAggregateInput;

    @Field(() => ActorsMaxOrderByAggregateInput, {nullable:true})
    _max?: ActorsMaxOrderByAggregateInput;

    @Field(() => ActorsMinOrderByAggregateInput, {nullable:true})
    _min?: ActorsMinOrderByAggregateInput;

    @Field(() => ActorsSumOrderByAggregateInput, {nullable:true})
    _sum?: ActorsSumOrderByAggregateInput;
}

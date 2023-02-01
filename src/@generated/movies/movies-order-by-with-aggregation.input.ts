import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { MoviesCountOrderByAggregateInput } from './movies-count-order-by-aggregate.input';
import { MoviesAvgOrderByAggregateInput } from './movies-avg-order-by-aggregate.input';
import { MoviesMaxOrderByAggregateInput } from './movies-max-order-by-aggregate.input';
import { MoviesMinOrderByAggregateInput } from './movies-min-order-by-aggregate.input';
import { MoviesSumOrderByAggregateInput } from './movies-sum-order-by-aggregate.input';

@InputType()
export class MoviesOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    title?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    actorId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    authorId?: keyof typeof SortOrder;

    @Field(() => MoviesCountOrderByAggregateInput, {nullable:true})
    _count?: MoviesCountOrderByAggregateInput;

    @Field(() => MoviesAvgOrderByAggregateInput, {nullable:true})
    _avg?: MoviesAvgOrderByAggregateInput;

    @Field(() => MoviesMaxOrderByAggregateInput, {nullable:true})
    _max?: MoviesMaxOrderByAggregateInput;

    @Field(() => MoviesMinOrderByAggregateInput, {nullable:true})
    _min?: MoviesMinOrderByAggregateInput;

    @Field(() => MoviesSumOrderByAggregateInput, {nullable:true})
    _sum?: MoviesSumOrderByAggregateInput;
}

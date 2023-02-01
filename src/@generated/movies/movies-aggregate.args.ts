import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MoviesWhereInput } from './movies-where.input';
import { Type } from 'class-transformer';
import { MoviesOrderByWithRelationInput } from './movies-order-by-with-relation.input';
import { MoviesWhereUniqueInput } from './movies-where-unique.input';
import { Int } from '@nestjs/graphql';
import { MoviesCountAggregateInput } from './movies-count-aggregate.input';
import { MoviesAvgAggregateInput } from './movies-avg-aggregate.input';
import { MoviesSumAggregateInput } from './movies-sum-aggregate.input';
import { MoviesMinAggregateInput } from './movies-min-aggregate.input';
import { MoviesMaxAggregateInput } from './movies-max-aggregate.input';

@ArgsType()
export class MoviesAggregateArgs {

    @Field(() => MoviesWhereInput, {nullable:true})
    @Type(() => MoviesWhereInput)
    where?: MoviesWhereInput;

    @Field(() => [MoviesOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<MoviesOrderByWithRelationInput>;

    @Field(() => MoviesWhereUniqueInput, {nullable:true})
    cursor?: MoviesWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => MoviesCountAggregateInput, {nullable:true})
    _count?: MoviesCountAggregateInput;

    @Field(() => MoviesAvgAggregateInput, {nullable:true})
    _avg?: MoviesAvgAggregateInput;

    @Field(() => MoviesSumAggregateInput, {nullable:true})
    _sum?: MoviesSumAggregateInput;

    @Field(() => MoviesMinAggregateInput, {nullable:true})
    _min?: MoviesMinAggregateInput;

    @Field(() => MoviesMaxAggregateInput, {nullable:true})
    _max?: MoviesMaxAggregateInput;
}

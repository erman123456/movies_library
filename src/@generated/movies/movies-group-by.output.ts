import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { MoviesCountAggregate } from './movies-count-aggregate.output';
import { MoviesAvgAggregate } from './movies-avg-aggregate.output';
import { MoviesSumAggregate } from './movies-sum-aggregate.output';
import { MoviesMinAggregate } from './movies-min-aggregate.output';
import { MoviesMaxAggregate } from './movies-max-aggregate.output';

@ObjectType()
export class MoviesGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => Int, {nullable:true})
    actorId?: number;

    @Field(() => Int, {nullable:true})
    authorId?: number;

    @Field(() => MoviesCountAggregate, {nullable:true})
    _count?: MoviesCountAggregate;

    @Field(() => MoviesAvgAggregate, {nullable:true})
    _avg?: MoviesAvgAggregate;

    @Field(() => MoviesSumAggregate, {nullable:true})
    _sum?: MoviesSumAggregate;

    @Field(() => MoviesMinAggregate, {nullable:true})
    _min?: MoviesMinAggregate;

    @Field(() => MoviesMaxAggregate, {nullable:true})
    _max?: MoviesMaxAggregate;
}

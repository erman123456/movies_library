import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ActorsWhereInput } from './actors-where.input';
import { Type } from 'class-transformer';
import { ActorsOrderByWithRelationInput } from './actors-order-by-with-relation.input';
import { ActorsWhereUniqueInput } from './actors-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ActorsCountAggregateInput } from './actors-count-aggregate.input';
import { ActorsAvgAggregateInput } from './actors-avg-aggregate.input';
import { ActorsSumAggregateInput } from './actors-sum-aggregate.input';
import { ActorsMinAggregateInput } from './actors-min-aggregate.input';
import { ActorsMaxAggregateInput } from './actors-max-aggregate.input';

@ArgsType()
export class ActorsAggregateArgs {

    @Field(() => ActorsWhereInput, {nullable:true})
    @Type(() => ActorsWhereInput)
    where?: ActorsWhereInput;

    @Field(() => [ActorsOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ActorsOrderByWithRelationInput>;

    @Field(() => ActorsWhereUniqueInput, {nullable:true})
    cursor?: ActorsWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => ActorsCountAggregateInput, {nullable:true})
    _count?: ActorsCountAggregateInput;

    @Field(() => ActorsAvgAggregateInput, {nullable:true})
    _avg?: ActorsAvgAggregateInput;

    @Field(() => ActorsSumAggregateInput, {nullable:true})
    _sum?: ActorsSumAggregateInput;

    @Field(() => ActorsMinAggregateInput, {nullable:true})
    _min?: ActorsMinAggregateInput;

    @Field(() => ActorsMaxAggregateInput, {nullable:true})
    _max?: ActorsMaxAggregateInput;
}
